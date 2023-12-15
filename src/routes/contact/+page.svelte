<script lang="ts">
  import { MainTemplate } from "$lib/components";
  import { ContactForm } from "$lib/features/contact-form";
  import type { FormResponse } from "$lib/features/contact-form";

  export let form: FormResponse | null;
  export let data;
</script>

<MainTemplate title="contact">
  <ContactForm {form} formData={data.formData} />
</MainTemplate>
