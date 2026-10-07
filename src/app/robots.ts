import type { MetadataRoute } from "next";

const BASE_URL = "https://www.motiagroup.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Major search engines only — everything else is blocked below.
      { userAgent: "Googlebot", allow: "/", disallow: "/api/" },
      { userAgent: "Googlebot-Image", allow: "/", disallow: "/api/" },
      { userAgent: "Bingbot", allow: "/", disallow: "/api/" },
      { userAgent: "*", disallow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
