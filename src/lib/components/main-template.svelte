<script lang="ts">
  import HeaderLogo from "./header-logo.svelte";

  export let title: string;
</script>

<HeaderLogo />

<main class="mx-auto max-w-3xl space-y-10 py-12">
  <h1 class="text-center text-xl tracking-widest">{title}</h1>
  <div><slot /></div>
</main>
