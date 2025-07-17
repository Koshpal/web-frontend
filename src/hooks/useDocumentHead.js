import { useEffect } from "react";

export const useDocumentHead = ({
  title,
  description,
  keywords,
  author,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  favicon,
}) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Helper function to update meta tags
    const updateMetaTag = (name, content, property = false) => {
      if (!content) return;

      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let metaTag = document.querySelector(selector);

      if (!metaTag) {
        metaTag = document.createElement("meta");
        if (property) {
          metaTag.setAttribute("property", name);
        } else {
          metaTag.setAttribute("name", name);
        }
        document.head.appendChild(metaTag);
      }

      metaTag.setAttribute("content", content);
    };

    // Helper function to update link tags
    const updateLinkTag = (rel, href, type = null) => {
      if (!href) return;

      let linkTag = document.querySelector(`link[rel="${rel}"]`);

      if (!linkTag) {
        linkTag = document.createElement("link");
        linkTag.setAttribute("rel", rel);
        document.head.appendChild(linkTag);
      }

      linkTag.setAttribute("href", href);
      if (type) {
        linkTag.setAttribute("type", type);
      }
    };

    // Update meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", author);

    // Open Graph tags
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:title", ogTitle || title, true);
    updateMetaTag("og:description", ogDescription || description, true);
    updateMetaTag("og:image", ogImage, true);

    // Twitter tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", twitterTitle || title);
    updateMetaTag("twitter:description", twitterDescription || description);
    updateMetaTag("twitter:image", twitterImage || ogImage);

    // Favicon
    updateLinkTag("icon", favicon, "image/png");
  }, [
    title,
    description,
    keywords,
    author,
    ogTitle,
    ogDescription,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
    favicon,
  ]);
};
