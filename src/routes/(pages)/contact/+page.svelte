<script lang="ts">
  import { Meta } from "$lib/components";
  import { ContactForm, type FormResponse } from "$lib/features/contact";

  export let form: FormResponse | null;
  export let data;
</script>

<Meta
  title="Contact | Kanaru"
  description="佐々木哉瑠(かなる)のポートフォリオサイト"
/>

<h1>contact</h1>
<ContactForm {form} formRequest={data.formRequest} />
