<script lang="ts">
  import { Logo } from "$lib/components";
</script>

<header class="flex h-16 items-center justify-start px-4 lg:h-24 lg:px-12">
  <a href="/" title="go to home" class="block w-20">
    <Logo class="h-6 w-fit lg:h-10" />
  </a>
</header>

<main class="mx-auto max-w-3xl">
  <slot />
</main>

<footer class="mt-12 py-12 text-center text-xs">
  <p>&copy; Kanaru</p>
</footer>
