<template>
  <div>
    <header class="site-header">
      <NuxtLink class="brand" to="#top">
        <img :src="assetUrl('/assets/jabref.svg')" alt="" width="34" height="34" />
        JabRef
      </NuxtLink>
      <div class="header-actions">
        <ThemeToggle />
        <button
          class="mobile-menu-button"
          type="button"
          aria-controls="site-navigation"
          :aria-expanded="isMenuOpen"
          :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path v-if="isMenuOpen" d="m6 6 12 12M18 6 6 18" />
            <path v-else d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <span>Menu</span>
        </button>
      </div>
      <nav
        id="site-navigation"
        class="site-nav"
        :class="{ open: isMenuOpen }"
        aria-label="Main navigation"
        @click="isMenuOpen = false"
      >
        <a href="#features">Features</a>
        <a href="#download">Download</a>
        <a href="#community">Get Involved</a>
        <a href="#support">Support</a>
        <a href="https://blog.jabref.org/">News</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero container">
        <p class="eyebrow">Free and open source</p>
        <h1>Stay on top of your Literature</h1>
        <p class="lead">The efficient way to collect, organize &amp; discover</p>
        <a class="screen-link" :href="assetUrl('/assets/jabref-mainscreen.png')" target="_blank" rel="noopener" aria-label="Open the JabRef application screenshot at full size">
          <img class="screen" :src="assetUrl('/assets/jabref-mainscreen.png')" alt="The JabRef desktop application" width="1342" height="940" />
        </a>
        <div class="hero-intro">
          <h2>JabRef supports you in every step of your research</h2>
          <p>Read more about it below or get going straight away.</p>
        </div>
        <a class="button" href="https://github.com/JabRef/jabref/releases/latest">Download JabRef</a>
        <p class="hero-download-options"><a href="#download">Or see all download options</a></p>
      </section>

      <section id="features" class="container">
        <FeatureSection title="Collect" image="/assets/feature-websearch.png" image-alt="JabRef web search interface" :image-width="729" :image-height="426">
          <ul><li>Import options for over 15 reference formats</li><li>Easily retrieve and link full-text articles</li><li>Fetch complete bibliographic information based on ISBN, DOI, PubMed-ID and arXiv-ID</li><li>Import new references directly from the web browser with one click using the official browser extension</li></ul>
          <p class="browsers"><span>Get now:</span><a href="https://chromewebstore.google.com/detail/jabref-browser-extension/bifehkofibaamoeaopjglfkddgkijdlh"><img :src="assetUrl('/img/chrome.png')" alt="Chrome" width="32" height="32" /></a><a href="https://addons.mozilla.org/en-US/firefox/addon/jabref?utm_source=www.jabref.org"><img :src="assetUrl('/img/firefox.png')" alt="Firefox" width="32" height="32" /></a><a href="https://microsoftedge.microsoft.com/addons/detail/pgkajmkfgbehiomipedjhoddkejohfna"><img :src="assetUrl('/img/edge.png')" alt="Edge" width="32" height="32" /></a><a href="https://chromewebstore.google.com/detail/jabref-browser-extension/bifehkofibaamoeaopjglfkddgkijdlh"><img :src="assetUrl('/img/vivaldi.png')" alt="Vivaldi" width="32" height="32" /></a></p>
        </FeatureSection>
        <FeatureSection reverse title="Edit" image="/assets/feature-complete.png" image-alt="JabRef reference editor" :image-width="841" :image-height="389"><ul><li>Complete and improve bibliographic data by comparing with curated online catalogues such as Google Scholar, Springer or MathSciNet</li><li>Automatically rename and move associated files according to customizable rules</li><li>Customize and add new metadata fields or reference types</li></ul></FeatureSection>
        <FeatureSection title="Organize" image="/assets/feature-groups.png" image-alt="JabRef groups panel" :image-width="273" :image-height="301"><ul><li>Group your research into hierarchical collections</li><li>Organize articles based on keywords, tags, search terms or your manual assignments</li><li>Advanced search and filter features</li><li>Keep track of what you read: ranking, priority, printed, quality-assured</li></ul></FeatureSection>
        <FeatureSection reverse title="Cite" image="/assets/feature-cite.png" image-alt="JabRef citation style selector" :image-width="784" :image-height="422"><ul><li>Native BibTeX and BibLaTeX support, perfect for text-based typesetting systems such as LaTeX and Markdown.</li><li>Cite-as-you-write functionality for external applications such as Emacs, Kile, LyX, Texmaker, TeXstudio, Vim and WinEdt.</li><li>Format references in one of the many thousand built-in citation styles or create your style</li><li>Support for Word and LibreOffice/OpenOffice for inserting and formatting citations</li></ul></FeatureSection>
      </section>

      <section id="download" class="band"><div class="container centered"><h2>Try it now</h2><p>JabRef is free and works across all your devices.</p><a class="button" href="https://github.com/JabRef/jabref/releases/latest">Download JabRef</a><p><a href="https://github.com/JabRef/jabref/blob/main/CHANGELOG.md">Change Log</a> and <a href="https://builds.jabref.org/main/">Development Builds</a></p></div></section>

      <section id="community" class="container community">
        <div class="community-copy centered"><h2>Get Involved!</h2><p>JabRef was founded 2003 and has since been used by many students and researchers. Our mission is to advance knowledge and improve scientific research. We value open access to information and believe modern science can built on an open institutional structure. This is why we develop JabRef as <a href="https://github.com/JabRef/jabref">free open-source software</a> and save your data in a <a href="https://docs.jabref.org/#the-data-format-of-jabref-is-bib-la-tex">simple text-based file format</a> with no vendor lock-in.</p><p>Created by researchers, for researchers.</p><p>JabRef is developed and maintained by a multidisciplinary core team of PhD students, postdocs, and researchers in industry who work on JabRef in their free time. Without the support of numerous volunteers, none of this would have been possible. We welcome anyone who would like to contribute to be part of an active user and developer community!</p></div>
        <div class="columns community-cards">
          <article><AppIcon name="heart" /><h3>Contribute</h3><strong>Help us build JabRef</strong><p>You do not need to be a developer to improve the documentation, translate the user interface and help with support.</p><a href="https://docs.jabref.org/contributing">Learn how to help</a></article>
          <article><AppIcon name="gift" /><h3>Donate</h3><strong>Support the development</strong><p>Help us pay for project development and operating costs so that we can continue to innovate. Donations keep us going.</p><a href="https://github.com/JabRef/jabref/wiki/Donations">Donate</a></article>
          <article><AppIcon name="code" /><h3>Develop</h3><strong>Make JabRef even better</strong><p>JabRef is and always will be 100% free and open-source. Contribute new features and shape the future of JabRef.</p><a href="https://github.com/JabRef/jabref">Develop via GitHub</a></article>
        </div>
      </section>

      <section id="support" class="container support"><div class="centered"><h2>Want to learn more?</h2></div><div class="support-grid"><a href="https://docs.jabref.org/getting-started"><AppIcon name="walk" /><span>Getting started</span></a><a href="https://docs.jabref.org/"><AppIcon name="book" /><span>User Documentation</span></a><a href="https://github.com/JabRef/jabref/issues"><AppIcon name="bug" /><span>Report a bug</span></a><a href="http://discourse.jabref.org"><AppIcon name="chat" /><span>Forum</span></a><a href="https://discourse.jabref.org/c/features/"><AppIcon name="bulb" /><span>Propose a new feature</span></a><a href="https://blog.jabref.org/"><AppIcon name="edit" /><span>Blog</span></a></div></section>
    </main>
    <footer><div class="container footer-grid"><div><NuxtLink class="brand" to="#top"><img :src="assetUrl('/assets/jabref.svg')" alt="" width="34" height="34" /> JabRef</NuxtLink></div><div><strong>Install</strong><a href="https://github.com/JabRef/jabref/releases/latest">Desktop apps</a><a href="https://docs.jabref.org/collect/jabref-browser-extension">Browser extensions</a><a href="https://builds.jabref.org/main/">Development build</a><a href="https://github.com/JabRef/jabref/blob/main/CHANGELOG.md">Change Log</a></div><div><strong>Links</strong><a href="https://docs.jabref.org/advanced/resources">Resources</a><a href="http://java.by-comparison.com/">Java by Comparison</a><NuxtLink to="/legal-notices">Legal Notices</NuxtLink><NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink></div><div><strong>Contribute</strong><a href="https://github.com/JabRef/jabref/wiki/Donations">Donation</a><a href="https://docs.jabref.org/faqcontributing/how-to-translate-the-ui">Translation</a><a href="https://github.com/JabRef/jabref">GitHub</a><a href="https://devdocs.jabref.org/">Developer Docs</a></div><div><strong>Help &amp; Contact</strong><a href="https://docs.jabref.org/">Documentation</a><a href="http://discourse.jabref.org/">Forum</a><a href="https://matrix.to/#/#JabRef_jabref:gitter.im">Chat</a><a href="https://foojay.social/@jabref">Mastodon</a><a href="https://twitter.com/JabRef_org">Twitter</a><a href="https://github.com/JabRef/jabref/issues">Report an issue</a></div></div></footer>
  </div>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
const baseURL = useRuntimeConfig().app.baseURL
const assetUrl = (path: string) => `${baseURL}${path.replace(/^\//, '')}`

function closeMenuOnEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') isMenuOpen.value = false
}

onMounted(() => window.addEventListener('keydown', closeMenuOnEscape))
onBeforeUnmount(() => window.removeEventListener('keydown', closeMenuOnEscape))
</script>
