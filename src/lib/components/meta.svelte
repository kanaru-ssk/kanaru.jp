<script lang="ts">
  export let title: string;
  export let description: string;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://kanaru.jp" />
  <meta property="og:image" content="https://kanaru.jp/ogp_v3.png" />
  <meta property="og:site_name" content="kanaru.jp" />
  <meta name="twitter:card" content="summary" />

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="%sveltekit.assets%/favicon.svg" />
</svelte:head>
