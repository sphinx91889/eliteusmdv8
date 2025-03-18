import React from "react";
import type { PageMetaData } from "./pageMetaMap";

const PageTemplate: React.FC<PageMetaData> = ({ 
  title, 
  description, 
  keywords,
  ogImage 
}) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        {schema && (
          <script
            type="application/ld+json"
            className="rank-math-schema"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div id="root"></div>
        <script src="https://website-widgets.pages.dev/dist/sienna.min.js" defer></script>
        <script 
          src="https://widgets.leadconnectorhq.com/loader.js" 
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
          data-widget-id="67c0f6cba81d1ca4bed77244"  
        ></script>
      </body>
    </html>
  );
};

export default PageTemplate;
