<script lang="ts">
  import MenuContents from "./menu-contents.svelte";
  import SpMenu from "./sp-menu.svelte";
</script>

<div class="fixed right-0 top-0 lg:p-8">
  <div class="block lg:hidden"><SpMenu /></div>
  <div class="hidden lg:block"><MenuContents /></div>
</div>
