<script lang="ts">
  import Logo from "./logo.svelte";
</script>

<div class="min-h-svh relative">
  <header class="fixed left-0 top-0 z-10">
    <a href="/" title="go to home" class="block px-4 py-5 lg:px-12 lg:py-7">
      <Logo class="h-6 w-fit lg:h-10" />
    </a>
  </header>

  <main class="mx-auto max-w-3xl px-4 pb-32 pt-16 lg:pt-24">
    <slot />
  </main>

  <footer
    class="absolute bottom-0 flex h-16 w-full items-center justify-center text-xs lg:h-24"
  >
    <p>&copy; Kanaru</p>
  </footer>
</div>
