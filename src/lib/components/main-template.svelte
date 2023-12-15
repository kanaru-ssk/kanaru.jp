<script lang="ts">
  export let title: string;
</script>

<main class="mx-auto max-w-2xl space-y-10 py-12">
  <h1 class="text-center text-xl">{title}</h1>
  <div><slot /></div>
</main>
