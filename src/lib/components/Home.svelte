<script lang="ts">
  import Logo from "$lib/components/Logo.svelte";
  import Menu from "$lib/components/Menu.svelte";
  import MenuButton from "./MenuButton.svelte";
</script>

<section class="h-svh">
  <div class="absolute right-0 top-0 md:p-16">
    <MenuButton />
    <Menu />
  </div>
  <div class="flex h-full items-center justify-center">
    <Logo />
  </div>
</section>
