<script lang="ts">
  import run from "$lib/wasm/pkg";
  import { onMount } from "svelte";

  onMount(() => run());
</script>

<canvas />

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100svw;
    height: 100svh;
    z-index: -10;
  }
</style>
