<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  export let color: "white" | "gray" = "white";
  export let type: HTMLButtonAttributes["type"];
</script>

<button
  {type}
  class={`${
    color === "white" ? "bg-white text-black" : "bg-neutral-800 text-white"
  } h-10 w-36 rounded-full text-sm hover:opacity-75 active:opacity-50`}
  on:click
>
  <slot />
</button>
