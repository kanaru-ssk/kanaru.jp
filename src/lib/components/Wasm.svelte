<script lang="ts">
  import run from "$lib/wasm/pkg";
  import { onMount } from "svelte";

  onMount(() => run());
</script>

<div id="wasm-container" />

<style>
  div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100svw;
    height: 100svh;
    z-index: -10;
  }
</style>
