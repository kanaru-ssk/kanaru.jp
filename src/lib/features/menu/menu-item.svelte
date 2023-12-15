<script lang="ts">
  import type { HTMLAttributeAnchorTarget } from "svelte/elements";
  import LinkIcon from "./link-icon.svg";

  export let name: string;
  export let href: string;
  export let target: HTMLAttributeAnchorTarget | undefined;
  export let disabled: boolean;
</script>

<a
  {href}
  class={`${
    disabled ? "cursor-default opacity-25" : "hover:opacity-50"
  } flex justify-end p-1`}
  aria-disabled={disabled}
  {target}
  rel={target === "_blank" ? "noopener noreferrer" : ""}
>
  {name}
  {#if target === "_blank"}
    <img src={LinkIcon} alt="link icon" class="ml-2" />
  {/if}
</a>
