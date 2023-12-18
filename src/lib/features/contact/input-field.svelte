<script lang="ts">
  export let name: string;
  export let type: "text" | "email" | "textarea";
  export let value: string;
  export let placeholder: string;
  export let errors: string[];
</script>

<div class="flex flex-col lg:flex-row">
  <div class="w-28 shrink-0 px-5 py-2 font-bold lg:py-4 lg:text-right">
    {name}
  </div>

  <div class="w-full">
    {#if type === "textarea"}
      <textarea
        {name}
        {value}
        {placeholder}
        required
        class="h-40 w-full rounded-sm bg-neutral-900 p-4 text-base placeholder:text-neutral-500 focus:outline-none"
      />
    {:else}
      <input
        {type}
        {name}
        {value}
        {placeholder}
        required
        class="w-full rounded-sm bg-neutral-900 p-4 text-base placeholder:text-neutral-500 focus:outline-none"
      />
    {/if}

    {#each errors as error}
      <p class="text-red-900">{error}</p>
    {/each}
  </div>
</div>
