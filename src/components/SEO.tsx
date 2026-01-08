import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export default function SEO({
  title = "SmartHome - Transform Your Living Space with Smart Technology",
  description = "Discover premium smart home solutions including smart switches, lights, curtains, security systems, and accessories. Experience the future of intelligent living.",
  keywords = "smart home, home automation, smart switches, smart lights, smart curtains, smart security, IoT devices, home technology",
  image = "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = `https://smarthome.com${location.pathname}`;

  useEffect(() => {
    document.title = title;

    const metaTags: Array<{
      name?: string;
      property?: string;
      content: string;
    }> = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:url", content: canonicalUrl },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "SmartHome" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ];

    metaTags.forEach(({ name, property, content }) => {
      if (!content) return; // ✅ TS + runtime safety

      const attribute = property ? "property" : "name";
      const value = property ?? name;

      if (!value) return;

      let element = document.querySelector(
        `meta[${attribute}="${value}"]`
      ) as HTMLMetaElement | null;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    });

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;
  }, [title, description, keywords, image, canonicalUrl]);

  return null;
}
