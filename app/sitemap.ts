import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

const routes = [
  {
    path: "/",
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: "/about",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/case-studies",
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    path: "/contact",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
