<script lang="ts">
  import { Title } from "$lib/components";
  import { ContactForm, type FormResponse } from "$lib/features/contact";

  export let form: FormResponse | null;
  export let data;
</script>

<Title title="contact" />
<ContactForm {form} formData={data.formData} />
