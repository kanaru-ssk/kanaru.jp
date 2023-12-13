<script lang="ts">
  import { page } from "$app/stores";
  import MenuItem from "./menu-item.svelte";

  const items = [
    { href: "/", name: "home" },
    { href: "/about", name: "about" },
    { href: "/contact", name: "contact" },
    { href: "https://github.com/kanaru-ssk", name: "github", target: "_blank" },
  ];
</script>

<nav>
  <ul class="space-y-4 text-right text-base lg:text-lg">
    {#each items as { href, name, target }}
      {@const disabled = href === $page.url.pathname}
      <li>
        <MenuItem {href} {name} {disabled} {target} />
      </li>
    {/each}
  </ul>
</nav>
