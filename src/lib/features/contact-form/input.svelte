<script lang="ts">
  import type { HTMLInputTypeAttribute } from "svelte/elements";

  export let name: string;
  export let type: HTMLInputTypeAttribute;
  export let placeholder: string;
  export let value: string;
</script>

<div class="flex items-center border-b border-neutral-400 px-4">
  <span class="w-20 font-bold text-neutral-400">{name}</span>
  <input
    {name}
    {type}
    {placeholder}
    {value}
    class="w-full bg-transparent p-4 text-base placeholder:text-neutral-500 focus:outline-none"
    required
    autocomplete="off"
  />
</div>
