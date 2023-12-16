<script lang="ts">
  import { page } from "$app/stores";

  import { Footer, Header, Meta } from "$lib/components";
</script>

<Meta
  title={`${$page.status} | Kanaru`}
  description="佐々木哉瑠(かなる)のポートフォリオサイト"
/>

<Header />

<main class="mx-auto h-svh max-w-3xl px-4">
  <h1 class="my-8 text-3xl font-bold">{$page.status} {$page.error?.message}</h1>
</main>

<div class="fixed bottom-0 w-full">
  <Footer />
</div>
