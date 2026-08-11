import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { products } from "../data/products";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const DEFAULT_TITLE = "SmartHome - Transform Your Living Space with Smart Technology";
const DEFAULT_DESCRIPTION = "Discover premium smart home solutions including smart switches, lights, curtains, security systems, and accessories. Experience the future of intelligent living.";
const DEFAULT_KEYWORDS = "smart home, home automation, smart switches, smart lights, smart curtains, smart security, IoT devices, home technology";
const DEFAULT_IMAGE = "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function SEO({
  title,
  description,
  keywords,
  image,
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = `https://www.innovotechsmarthome.in${location.pathname}`;

  useEffect(() => {
    let activeTitle = title;
    let activeDescription = description;
    let activeKeywords = keywords;
    let activeImage = image;

    // Route-based dynamic matching if props are not explicitly provided
    if (!activeTitle || !activeDescription || !activeKeywords || !activeImage) {
      const path = location.pathname;

      if (path === "/") {
        activeTitle = activeTitle ?? DEFAULT_TITLE;
        activeDescription = activeDescription ?? DEFAULT_DESCRIPTION;
        activeKeywords = activeKeywords ?? DEFAULT_KEYWORDS;
        activeImage = activeImage ?? DEFAULT_IMAGE;
      } else if (path === "/about") {
        activeTitle = activeTitle ?? "About Us - SmartHome | Innovotech Smart Solutions";
        activeDescription = activeDescription ?? "Learn more about SmartHome and our mission to provide the best home automation products. We deliver top-tier, reliable, and energy-efficient IoT solutions.";
        activeKeywords = activeKeywords ?? "about smarthome, innovotech, smart home company, automation experts, IoT technology";
        activeImage = activeImage ?? DEFAULT_IMAGE;
      } else if (path === "/contact") {
        activeTitle = activeTitle ?? "Contact Us - SmartHome | Get in Touch for Home Automation";
        activeDescription = activeDescription ?? "Have questions or want a free demo? Contact the SmartHome team today. We are here to help you design your dream intelligent living space.";
        activeKeywords = activeKeywords ?? "contact smarthome, book a demo, home automation inquiry, support";
        activeImage = activeImage ?? DEFAULT_IMAGE;
      } else if (path === "/gallery") {
        activeTitle = activeTitle ?? "Project Gallery - SmartHome | Real Automation Projects";
        activeDescription = activeDescription ?? "Browse our project gallery to see how SmartHome has transformed residential and commercial spaces with cutting-edge technology.";
        activeKeywords = activeKeywords ?? "smarthome gallery, smart home showcase, automation design, IoT installations";
        activeImage = activeImage ?? DEFAULT_IMAGE;
      } else if (path.startsWith("/product/")) {
        const productId = decodeURIComponent(path.substring("/product/".length));
        const product = products.find((p) => p.id === productId);

        if (product) {
          activeTitle = activeTitle ?? `${product.name} - SmartHome | Premium Solutions`;
          activeDescription = activeDescription ?? product.description;
          activeKeywords = activeKeywords ?? `${product.name}, smart home, ${product.category}, ${product.features.join(", ")}`;
          activeImage = activeImage ?? product.image;
        } else {
          activeTitle = activeTitle ?? "Product Not Found - SmartHome";
          activeDescription = activeDescription ?? "The requested smart home product could not be found. View our range of smart automation devices.";
          activeKeywords = activeKeywords ?? "product not found, smart home products";
          activeImage = activeImage ?? DEFAULT_IMAGE;
        }
      } else {
        // Fallback for any other route
        activeTitle = activeTitle ?? DEFAULT_TITLE;
        activeDescription = activeDescription ?? DEFAULT_DESCRIPTION;
        activeKeywords = activeKeywords ?? DEFAULT_KEYWORDS;
        activeImage = activeImage ?? DEFAULT_IMAGE;
      }
    }

    // Set Document Title
    document.title = activeTitle;

    // Update Meta Tags
    const metaTags: Array<{
      name?: string;
      property?: string;
      content: string;
    }> = [
      { name: "description", content: activeDescription },
      { name: "keywords", content: activeKeywords },
      { property: "og:title", content: activeTitle },
      { property: "og:description", content: activeDescription },
      { property: "og:image", content: activeImage },
      { property: "og:url", content: canonicalUrl },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: activeTitle },
      { name: "twitter:description", content: activeDescription },
      { name: "twitter:image", content: activeImage },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "SmartHome" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ];

    metaTags.forEach(({ name, property, content }) => {
      if (!content) return;

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

    // Update Canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

    // Track SPA Pageview in Google Analytics if initialized
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", "G-9S1LNSB2ER", {
        page_path: location.pathname + location.search,
      });
    }
  }, [title, description, keywords, image, canonicalUrl, location.pathname]);

  return null;
}
