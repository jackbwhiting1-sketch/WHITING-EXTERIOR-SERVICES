# Whiting Exterior Services website

A fast, accessible, static multi-page website requiring no build step.

## Pages

- `index.html` — Home
- `services.html` — Seven detailed services
- `about.html` — Story, mission, values, owner, and gallery
- `gallery.html` — Filterable masonry gallery and comparisons
- `faq.html` — 20 pressure-washing questions
- `contact.html` — Contact form, areas, and map placeholder
- `quote.html` — Focused quote-request experience

## Safe edits

- **Colors:** Edit variables at the top of `assets/css/site.css`.
- **Logo:** Replace every `LOGO` mark with an `<img>` using the final logo file.
- **Photos:** Replace `.media-placeholder`, `.gallery-item`, and `.ba` blocks with optimized images. Use descriptive `alt` text.
- **Reviews:** Replace placeholder copy only with verified customer reviews.
- **Business claims:** Confirm licensing, insurance, financing, hours, satisfaction-guarantee, and response-time claims before publishing.
- **Forms:** The static forms currently open a prefilled SMS. Connect a form provider or backend before launch if submissions must go to email/CRM. The upload area is intentionally a labeled placeholder.
- **Social:** Replace the footer social placeholders with final profile URLs.
- **Map:** Replace the map placeholder with a privacy-conscious Google Maps embed.

## SEO and launch checklist

1. Replace `example.com` in `robots.txt` and `sitemap.xml`.
2. Add a canonical URL and Open Graph image to every page after the domain is known.
3. Add the following JSON-LD types: `LocalBusiness` sitewide, `Service` on the services page, `FAQPage` on the FAQ page, and `BreadcrumbList` on supporting pages.
4. Include only verified facts in schema: legal business name, address/service area, opening hours, license, social URLs, and review aggregate.
5. Submit the sitemap in Google Search Console and create/verify the Google Business Profile.

## Performance

The site uses no framework, external font, icon library, or render-blocking script. Keep replacement images in WebP/AVIF, include width and height, use `loading="lazy"` below the fold, and aim for hero media below 250 KB. The design respects reduced-motion settings and uses native semantic controls.

## Preview

Open `index.html` in a browser. Upload the complete folder to any static host when ready.
