<script lang="ts">
  import { page } from "$app/stores";
  import MenuItem from "./menu-item.svelte";

  const items = [
    { href: "/about", name: "about" },
    { href: "https://github.com/kanaru-ssk", name: "github" },
    { href: "/contact", name: "contact" },
  ];
</script>

<nav>
  <ul class="space-y-4 text-right text-base md:text-lg">
    {#each items as { href, name }}
      {@const disabled = href === $page.url.pathname}
      <MenuItem {href} {name} {disabled} />
    {/each}
  </ul>
</nav>
