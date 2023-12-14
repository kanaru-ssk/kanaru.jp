<script lang="ts">
  import { Heading1 } from "$lib/components";
  import { ConfirmForm } from "$lib/features/contact-form";

  export let data;
</script>

<main class="mx-auto max-w-2xl space-y-10 py-12">
  <Heading1>confirm</Heading1>
  <ConfirmForm formData={data.formData} />
</main>
