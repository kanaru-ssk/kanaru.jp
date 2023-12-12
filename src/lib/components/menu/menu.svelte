<script lang="ts">
  import MenuContents from "$lib/components/menu/menu-contents.svelte";
  import SpMenu from "$lib/components/menu/sp-menu.svelte";
</script>

<div class="fixed right-0 top-0 md:p-8">
  <div class="block md:hidden"><SpMenu /></div>
  <div class="hidden md:block"><MenuContents /></div>
</div>
