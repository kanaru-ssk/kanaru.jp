<script lang="ts">
  import { MainTemplate } from "$lib/components";
  import { ContactForm, type FormResponse } from "$lib/features/contact";

  export let form: FormResponse | null;
  export let data;
</script>

<MainTemplate title="contact">
  <ContactForm {form} formData={data.formData} />
</MainTemplate>
