# JabRef static site

A minimal Nuxt static-site project for the JabRef landing page. It uses Vue components and Nuxt static generation, but includes no server routes, database, authentication, GraphQL, or runtime API calls.

## Project layout

- `pages/index.vue` contains the landing-page content: hero copy, download and support links, community cards, and the list of feature sections.
- `components/FeatureSection.vue` is the reusable Vue component used for each feature row.
- `public/assets/` contains the main product images and logo. Files in `public/` are served unchanged from the site root.
- `public/img/` contains browser icons and the favicon asset.
- `assets/main.css` contains the small site-wide style sheet, including the automatic dark-theme colors.
- `assets/legal-notices.md` and `assets/privacy-policy.md` contain the bundled legal text for the corresponding static pages.

## Adding or changing content

### Change page copy or links

Edit `pages/index.vue`. The file is organized in the same order as the page: hero, features, download, community, and support. Update an anchor's `href` to change a destination.

### Add a feature

1. Put the feature image in `public/assets/`.
2. Add a `FeatureSection` inside the `#features` section in `pages/index.vue`.
3. Pass its title, image path, and meaningful alternative text. Add `reverse` to place its image on the left on larger screens.

Example:

```vue
<FeatureSection
  title="Search"
  image="/assets/feature-search.png"
  image-alt="JabRef search results"
  reverse
>
  <ul>
    <li>Describe the feature.</li>
  </ul>
</FeatureSection>
```

### Add an image

Copy an image to `public/assets/` and reference it with `/assets/filename.ext`. No import or build configuration is needed.

## Commands

```sh
pnpm install
pnpm dev
pnpm generate
pnpm preview
```

Deploy the generated `.output/public` directory to any static host.

Do not open `.output/public/index.html` with a `file://` URL. Nuxt's generated
JavaScript and CSS use web-server paths. Run `pnpm preview` locally, then open
the localhost URL it prints; static hosts provide the same path handling.

## Continuous integration

GitHub Actions runs on pull requests and pushes to `main`. The workflow in
`.github/workflows/build.yml` runs `pnpm generate` and uploads `.output/public`
as the `static-site` artifact. It does not deploy anywhere.
