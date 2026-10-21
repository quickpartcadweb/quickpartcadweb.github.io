QuickPartCAD Web — GitHub Pages deployment

1. Create a PUBLIC GitHub repository named quickpartcad-web under user quickpartcad.
2. Upload ALL files from this archive to repository ROOT (not nested folder). Commit changes.
3. Settings > Pages > Build and deployment > Deploy from a branch > main > /(root) > Save.
4. Wait for publication at https://quickpartcad.github.io/quickpartcad-web/
5. Check homepage, services.html, work.html, process.html, contact.html, robots.txt, sitemap.xml and Google verification HTML.
6. FORM: Uses third-party FormSubmit.co. The CAD site has a successful FormSubmit delivery test. The new site must ALSO be tested: FormSubmit may request activation for the new form/site. If a verification email arrives at quickpartcad@gmail.com, approve it and repeat the test. Re-test and check inbox + spam. No payment details or sensitive data.
7. In Google Search Console ADD the new URL-prefix property https://quickpartcad.github.io/quickpartcad-web/ and verify it. Submit https://quickpartcad.github.io/quickpartcad-web/sitemap.xml. Request indexing after successful live test.
8. Do not delete Netlify domain or redirect it until the new site works and links/search settings are migrated. Avoid two independently indexable copies of same content: set redirects or noindex on the old site once migration is verified.
9. If repository name or GitHub username differs from quickpartcad/quickpartcad-web, all URLs in HTML, robots.txt and sitemap.xml MUST be updated.

GitHub Pages does NOT host a backend or process form posts. FormSubmit.co is independent of GitHub and requires external service activation. Delivery is NOT independently verified.

IMPORTANT: GitHub Pages does not automatically index pages in Google. Verify the new URL property and sitemap separately.
