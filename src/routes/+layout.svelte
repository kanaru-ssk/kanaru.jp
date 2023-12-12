<script lang="ts">
  import { page } from "$app/stores";
  import HeaderLogo from "$lib/components/HeaderLogo.svelte";
  import { Menu } from "$lib/components/menu";
  import "$lib/styles/global.css";
</script>

{#if $page.url.pathname !== "/"}
  <HeaderLogo />
{/if}
<Menu />
<slot />
