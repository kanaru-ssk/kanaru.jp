<script lang="ts">
  import run from "./wasm/pkg/wasm";
  import { onMount } from "svelte";

  onMount(run);
</script>

<div id="wasm-container" class="w-svw fixed left-0 top-0 -z-10 h-svh" />
