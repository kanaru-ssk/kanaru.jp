<script lang="ts">
  export let errors: string[];
</script>

{#each errors as error}
  <p class="mx-4 text-red-900">{error}</p>
{/each}
