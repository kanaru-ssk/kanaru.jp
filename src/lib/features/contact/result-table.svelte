<script lang="ts">
  import type { FormRequest } from "./types";

  export let formRequest: FormRequest;
</script>

<div class="w-full whitespace-pre-wrap break-words px-4">
  {#each Object.entries(formRequest) as [head, body]}
    <div
      class="flex flex-col space-y-3 border-b border-neutral-400 p-6 first:border-t lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0"
    >
      <span class="shink-0 w-28 font-bold lg:text-right">
        {head}
      </span>
      <span class="w-full">{body}</span>
    </div>
  {/each}
</div>
