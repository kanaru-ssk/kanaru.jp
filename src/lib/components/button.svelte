<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  let color: "white" | "gray" = "white";
  let type: HTMLButtonAttributes["type"];
  export { color, type };
</script>

<button
  {type}
  class={`${
    color === "white" ? "bg-white text-black" : "bg-neutral-700 text-white"
  } h-10 w-36 rounded-full px-8 text-sm hover:opacity-75 active:opacity-50`}
  on:click
>
  <slot />
</button>
