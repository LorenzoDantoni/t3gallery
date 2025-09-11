# T3 Gallery 

Services used:
- vercel (deployment)
- posthog (analytics)
- upstash (ratelimiter)
- clerk (authentication)
- sentry (error tracking)
- uploadthing (file uploads)
- drizzle (headless typescript ORM)

## TODO

- [x] Make it deploy (w/ vercel)
- [x] Scaffold basic ui with mock data
- [x] Tidy up build process
- [x] Actually set up a database (w/ vercel postgres)
- [x] Attach database to UI
- [x] Add authentication (w/ clerk)
- [x] Add image upload
- [x] "taint" (server-only)
- [x] Use Next/Image component
- [x] Error management (w/ Sentry)
- [x] Routing/image page (parallel route)
- [x] Update upload button
- [x] Analytics (posthog)
- [x] Delete button (w/ Server Actions)
- [x] Ratelimiting (upstash)

TODO:
- [ ] Fix page layout for images of different resolutions
- [ ] "Selecting" images on the gallery page (Zustand for state management)
- [ ] "Infinite scroll", as you scroll more images get shown
- [ ] Folders/albums