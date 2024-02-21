<script lang="ts">
  import { page } from "$app/stores";

  const items = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "contact", href: "/contact" },
    { name: "github", href: "https://github.com/kanaru-ssk", target: "_blank" },
  ];
  let open = true;
</script>

<nav class="fixed right-0 top-0 z-20">
  <input
    id="menu-button"
    type="checkbox"
    class="peer relative z-10 block h-16 w-16 cursor-pointer appearance-none before:absolute before:right-5 before:top-8 before:block before:h-px before:w-7 before:-translate-y-1 before:bg-white before:duration-500 after:absolute after:right-5 after:top-8 after:block after:h-px after:w-7 after:translate-y-1 after:bg-white after:duration-500 checked:before:translate-y-0 checked:before:rotate-45 checked:after:translate-y-0 checked:after:-rotate-45 lg:hidden"
    bind:checked={open}
  />
  <label
    for="menu-button"
    class="pointer-events-none fixed left-0 top-0 h-screen w-full opacity-0 duration-500 peer-checked:pointer-events-auto peer-checked:bg-black/75 peer-checked:opacity-100 lg:hidden"
  />

  <ul
    class="fixed right-0 top-16 -translate-y-1/2 scale-y-0 px-5 text-right text-base opacity-0 duration-500 peer-checked:translate-y-1 peer-checked:scale-y-100 peer-checked:opacity-100 lg:top-24 lg:translate-y-1 lg:scale-y-100 lg:px-12 lg:text-lg lg:opacity-100"
  >
    {#each items as { href, name, target }}
      {@const disabled = href === $page.url.pathname}
      <li class="mb-4">
        <a
          {href}
          class={`${
            disabled ? "cursor-default opacity-25" : "hover:opacity-50"
          } p-2 align-middle`}
          aria-disabled={disabled}
          {target}
          rel={target === "_blank" ? "noopener noreferrer" : ""}
          on:click={() => (open = false)}
        >
          {name}
          {#if target === "_blank"}
            <img src="/link-icon.svg" alt="link icon" class="ml-2 inline" />
          {/if}
        </a>
      </li>
    {/each}
  </ul>
</nav>
