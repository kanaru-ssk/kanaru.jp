<script lang="ts">
  import { Meta, Title } from "$lib/components";
  import { ConfirmForm, ResultTable } from "$lib/features/contact";

  export let data;
</script>

<Meta
  title="Confirm Contact | Kanaru"
  description="佐々木哉瑠(かなる)のポートフォリオサイト"
/>

<Title title="confirm" />
<div class="space-y-12">
  <ResultTable formData={data.formData} />
  <ConfirmForm formData={data.formData} />
</div>
