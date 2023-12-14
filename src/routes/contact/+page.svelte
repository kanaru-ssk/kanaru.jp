<script lang="ts">
  import { Heading1 } from "$lib/components";
  import { ContactForm } from "$lib/features/contact-form";
  import type { FormResponse } from "$lib/features/contact-form";

  export let form: FormResponse | null;
  export let data;
</script>

<main class="mx-auto max-w-2xl space-y-10 py-12">
  <Heading1>contact</Heading1>
  <ContactForm {form} formData={data.formData} />
</main>
