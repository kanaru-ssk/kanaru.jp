<script lang="ts">
  import { Meta } from "$lib/components";
  import { ConfirmForm, ResultTable } from "$lib/features/contact";

  export let data;
</script>

<Meta
  title="Confirm Contact | Kanaru"
  description="佐々木哉瑠(かなる)のポートフォリオサイト"
/>

<h1>confirm</h1>
<div class="space-y-12">
  <ResultTable formRequest={data.formRequest} />
  <ConfirmForm formRequest={data.formRequest} />
</div>
