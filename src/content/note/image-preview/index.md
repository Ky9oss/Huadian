---
title: Markdown 图片预览
timestamp: 2025-09-29 00:06:00+00:00
series: Astro
tags: [Content, Demo]
---

演示 Markdown 中图片引用

## 相对路径

> [!NOTE]
> 推荐使用该方式，有利于内容组织管理，同时 Astro 会对图片进行优化处理。

使用同目录下的图片文件[^boat]：

[^boat]: 图片来源：[Pexels](https://www.pexels.com/photo/white-sailboat-on-water-273886/)

![白色帆船](white_sailboat_on_water.jpg)

## 绝对路径

使用 `/public` 目录下的图片文件：

![ship](/web-app-manifest-512x512.png)
