import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";

const BASE_URL = "https://www.motiagroup.com";

const projectPages = [
  "motia-harmonygreens",
  "motiaz-royal-citi",
  "motia-gill-estate",
  "motia-heights",
  "motia-citi",
  "motia-huys",
  "motia-high-street",
  "haryana-industrial-plots",
  "motiaz-royal-business-park",
];

const seoLandingPages = [
  "top-builders-in-chandigarh",
  "real-estate-company-in-chandigarh",
  "best-builders-in-mohali",
];

const companyPages = [
  "founders",
  "life-at-motia-group",
  "job-openings",
  "contact-us",
  "indian-citizens",
  "nris",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ];

  const projects: MetadataRoute.Sitemap = projectPages.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const seoPages: MetadataRoute.Sitemap = seoLandingPages.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const company: MetadataRoute.Sitemap = companyPages.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogIndex: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogPostEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const legal: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [...home, ...projects, ...seoPages, ...company, ...blogIndex, ...blogPostEntries, ...legal];
}
