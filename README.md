# JabRef static site

A minimal Nuxt static-site project for the JabRef landing page. It uses Vue components and Nuxt static generation, but includes no server routes, database, authentication, GraphQL, or runtime API calls.

## Acknowledgements

The Vue implementation is based on the JabRefOnline project, created by [Tobias Diez](https://github.com/TobiasDiez).

## Project layout

- `pages/index.vue` contains the landing-page content: hero copy, download and support links, community cards, and the list of feature sections.
- `components/FeatureSection.vue` is the reusable Vue component used for each feature row.
- `public/assets/` contains the main product images and logo. Files in `public/` are served unchanged below the configured site base path.
- `public/img/` contains browser icons and the favicon asset.
- `assets/main.css` contains the small site-wide style sheet, including the automatic dark-theme colors.
- `assets/legal-notices.html` and `assets/privacy-policy.html` contain the bundled legal text as simple semantic HTML.

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

Copy an image to `public/assets/` and reference it with `/assets/filename.ext`. The provided `assetUrl()` helper prefixes it with the configured base path; no import or build configuration is needed.

### Create a new page

Nuxt creates routes from files in `pages/`:

1. Create a Vue single-file component. For example, `pages/about.vue` becomes `/about`.
2. Add the page content to its `<template>`.
3. Reuse components from `components/` directly; Nuxt auto-imports them.
4. Add a `<NuxtLink to="/about">About</NuxtLink>` where the page should be discoverable, such as the navigation or footer.
5. Run `pnpm generate`. The generated page will be at `.output/public/about/index.html`.

Example:

```vue
<!-- pages/about.vue -->
<template>
  <main class="container legal-page">
    <h1>About JabRef</h1>
    <p>JabRef is a free and open-source reference manager.</p>
  </main>
</template>
```

For a nested route such as `/help/install`, create `pages/help/install.vue`.

### Create a homepage section

Homepage sections are in `pages/index.vue`, in the order they appear on the site.

1. Add a new `<section>` with a unique `id`, such as `id="news"`.
2. Use the `container` class to align it with the rest of the page.
3. Add a navigation link with `href="#news"` if visitors should jump to it from the header.
4. Add section-specific CSS to `assets/main.css` under a clearly labelled comment.

Example:

```vue
<section id="news" class="container support">
  <div class="centered">
    <h2>Latest news</h2>
    <p>Read updates from the JabRef project.</p>
  </div>
</section>
```

To add a product feature row, use the existing `FeatureSection` component instead:

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

## Deployment base path

The site base path is configurable with `NUXT_APP_BASE_URL` at build time:

```sh
# Preview the GitHub Pages project URL locally
NUXT_APP_BASE_URL=/jabref-website/ pnpm generate
```

Local builds default to `/`. The GitHub Actions workflow defaults to
`/jabref-website/`, which is required for the temporary GitHub Pages URL. When
the custom domain is ready, create the repository Actions variable
`NUXT_APP_BASE_URL` with the value `/`; the next deployment will use the domain
root without a source-code change.

## Continuous integration

GitHub Actions runs on pull requests and pushes to `main`. The workflow in
`.github/workflows/build.yml` runs `pnpm generate` and uploads `.output/public`
as the GitHub Pages artifact, then deploys pushes to `main` to GitHub Pages.

## Updating download links after a JabRef release

The static site reads its direct download URLs from `public/downloads.json`.
After publishing a new JabRef release, run the **Update download manifest**
workflow from the repository's Actions tab on `main`. It fetches the new release
assets and commits the updated manifest; that commit triggers the normal site
deployment. The workflow also runs daily, but trigger it manually after a
release so the download links are updated immediately.
