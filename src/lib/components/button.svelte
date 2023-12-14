<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  type $$Props = HTMLButtonAttributes;
</script>

<button
  class={`${$$props.class} h-10 w-36 rounded-full bg-white text-sm text-black hover:opacity-75 active:opacity-50`}
  on:*
  {...$$props}
>
  <slot />
</button>
