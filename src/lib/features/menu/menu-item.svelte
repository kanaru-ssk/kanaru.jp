<script lang="ts">
  import type { HTMLAttributeAnchorTarget } from "svelte/elements";
  import LinkIcon from "./link-icon.svg";

  export let name: string;
  export let href: string;
  export let disabled: boolean;
  export let target: HTMLAttributeAnchorTarget | undefined;
</script>

<a
  {href}
  class={`${
    disabled ? "cursor-default text-neutral-700" : "hover:text-neutral-400"
  } flex justify-end px-4 py-1 pl-0`}
  aria-disabled={disabled}
  {target}
  rel={target === "_blank" ? "noopener noreferrer" : ""}
>
  {name}
  {#if target === "_blank"}
    <img src={LinkIcon} alt="link icon" class="ml-2" />
  {/if}
</a>
