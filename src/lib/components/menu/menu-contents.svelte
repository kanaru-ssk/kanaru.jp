<script lang="ts">
  import { page } from "$app/stores";
  import MenuItem from "./menu-item.svelte";

  const items = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "contact", href: "/contact" },
    { name: "github", href: "https://github.com/kanaru-ssk", target: "_blank" },
  ];
</script>

<nav>
  <ul class="space-y-2">
    {#each items as { href, name, target }}
      <li>
        <MenuItem
          {name}
          {href}
          {target}
          disabled={href === $page.url.pathname}
        />
      </li>
    {/each}
  </ul>
</nav>
