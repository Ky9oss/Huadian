// Astro auto load this config
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

/**
 * Note collection configuration
 * Represents main blog articles with comprehensive metadata
 */
const note = defineCollection({
    // Load all markdown files except those starting with underscore (private/draft files)
    loader: glob({ pattern: ["*.md", "**/*.md", "!_*.md", "!_*/*.md"], base: "./src/content/note" }),
    schema: z.object({
        title: z.string(),								// Post title (required)
        timestamp: z.date(),							// Publication date (required)
        series: z.string().optional(),					// Series name for grouped posts
        tags: z.array(z.string()).optional(),			// Array of topic tags
        description: z.string().optional(),				// Post description/excerpt
        contents: z.boolean().default(false),			// Whether to show table of contents
        top: z.number().int().nonnegative().default(0),	// Top priority for sorting (higher is more important)
        draft: z.boolean().default(false)				// Draft status (excludes from public listing)
    })
});

/**
 * Preface collection configuration
 * Represents introductory content, site announcements, or special pages
 */
const preface = defineCollection({
    // Load all markdown files
    loader: glob({ pattern: "*.md", base: "./src/content/preface" }),
    schema: z.object({
        timestamp: z.date()		// Creation timestamp
    })
});

/**
 * Information collection configuration
 * Represents static content like about pages, policies, or site information
 */
const information = defineCollection({
    // Load both markdown and YAML files for mixed content types
    loader: glob({ pattern: "*.(md|yaml)", base: "./src/content/information" })
});

export const collections = { note, preface, information };
