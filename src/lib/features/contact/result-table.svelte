<script lang="ts">
  import type { FormRequest } from "./types";

  export let formRequest: FormRequest;
</script>

<div class="w-full whitespace-pre-wrap break-words">
  {#each Object.entries(formRequest) as [head, body]}
    <div
      class="flex flex-col space-y-3 border-b border-neutral-400 p-5 first:border-t lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 lg:p-6"
    >
      <span class="w-24 shrink-0 font-bold lg:text-right">
        {head}
      </span>
      <span class="w-full">{body}</span>
    </div>
  {/each}
</div>
