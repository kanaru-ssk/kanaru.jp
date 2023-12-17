<script lang="ts">
  import MenuContents from "./menu-contents.svelte";
  import SpMenu from "./sp-menu.svelte";
</script>

<div class="text-base tracking-widest lg:p-12 lg:text-lg">
  <div class="block lg:hidden"><SpMenu /></div>
  <div class="hidden lg:block"><MenuContents /></div>
</div>
