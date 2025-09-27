import './chunks/_astro_actions_CTmQVsIc.mjs';
import { g as getCollection } from './chunks/_astro_content_DHZ1g89W.mjs';
import * as z from 'zod';
import { d as defineAction } from './chunks/server_DbFkRANv.mjs';

const note = {
  // Action to retrieve and paginate note entries with filtering by series and tags
  list: defineAction({
    input: z.object({
      size: z.number(),
      // Number of items per page
      page: z.number().default(1),
      // Current page number (starts from 1)
      series: z.string().nullish(),
      // Series name to filter by
      tags: z.array(z.string()).default([])
      // Array of tags to filter by
    }),
    handler: async ({ size, page, series, tags }) => {
      let notes = await getCollection("note");
      const series_list = Array.from(new Set(notes.map((note2) => note2.data.series).filter(Boolean))).sort();
      const tag_list = Array.from(new Set(notes.flatMap((note2) => note2.data.tags).filter(Boolean))).sort();
      notes = notes.filter((note2) => {
        let match_series = !series || note2.data.series == series;
        let match_tags = tags.every((tag) => note2.data.tags?.includes(tag));
        return match_series && match_tags;
      }).sort((a, b) => b.data.top - a.data.top || b.data.timestamp.getTime() - a.data.timestamp.getTime());
      let pages = Math.ceil(notes.length / size);
      page = Math.max(1, Math.min(page, pages));
      notes = notes.slice((page - 1) * size, page * size);
      const list = notes.map((note2) => ({
        id: note2.id,
        data: {
          top: note2.data.top,
          series: note2.data.series,
          title: note2.data.title,
          timestamp: note2.data.timestamp,
          tags: note2.data.tags
        }
      }));
      return { notes: list, pages, page, series_list, tag_list };
    }
  })
};

const server = { note };

export { server };
