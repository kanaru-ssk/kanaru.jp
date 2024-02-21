<script lang="ts">
  import { Logo } from "$lib/components";
</script>

<div class="relative min-h-svh">
  <header class="fixed left-0 top-0 z-10">
    <a href="/" title="go to home" class="block p-5 lg:px-12 lg:py-7">
      <Logo class="h-6 w-auto lg:h-10" />
    </a>
  </header>

  <main class="mx-auto max-w-3xl px-5 pb-32 pt-16 lg:pt-24">
    <slot />
  </main>

  <footer
    class="absolute bottom-0 flex h-24 w-full items-center justify-center text-xs"
  >
    <p>&copy; Kanaru</p>
  </footer>
</div>
