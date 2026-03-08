import type { MetadataRoute } from "next";
import { getAllTools, getAllCategories } from "@/lib/tools-db";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toolcheckeruk.co.uk";

  const toolPages = getAllTools().map((tool) => ({
    url: `${baseUrl}/tool/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const categoryPages = getAllCategories().map((category) => ({
    url: `${baseUrl}/category/${category}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...categoryPages,
    ...toolPages,
  ];
}
