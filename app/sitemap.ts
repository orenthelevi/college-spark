import { MetadataRoute } from "next";
import { majors } from "@/data/majors";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spark-majors.vercel.app"; // Replace with actual production URL

  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/profile`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Major detail pages
  const majorRoutes: MetadataRoute.Sitemap = majors.map((major) => ({
    url: `${baseUrl}/major/${major.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...routes, ...majorRoutes];
}
