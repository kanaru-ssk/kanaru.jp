<script lang="ts">
  import { page } from "$app/stores";
  import { HeaderLogo } from "$lib/components";
  import { Menu } from "$lib/features/menu";
  import "$lib/styles/global.css";
</script>

{#if $page.url.pathname !== "/"}
  <HeaderLogo />
{/if}
<Menu />
<slot />
