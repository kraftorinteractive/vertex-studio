import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, type = "WebPage", schema }) {
  // Default Organization Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vertex Studio",
    "url": "https://vertexstudio.nz",
    "logo": "https://vertexstudio.nz/assets/Group%2019.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@vertexstudio.nz",
      "contactType": "customer support"
    }
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* OpenGraph tags for Social Media previews */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content="https://vertexstudio.nz" />
      {/* Using a visually striking portfolio image as the default share card */}
      <meta property="og:image" content="https://vertexstudio.nz/assets/portfolio/Rectangle%20101@2x.png" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://vertexstudio.nz/assets/portfolio/Rectangle%20101@2x.png" />

      {/* JSON-LD Structured Data Schema for Google bots */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
}
