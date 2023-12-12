<script lang="ts">
  export let name: string;
  export let href: string;
  export let disabled: boolean;
</script>

<li>
  <a
    {href}
    class={`${
      disabled ? "cursor-default text-neutral-700" : "hover:text-neutral-400"
    } p-4`}
    aria-disabled={disabled}>{name}</a
  >
</li>
