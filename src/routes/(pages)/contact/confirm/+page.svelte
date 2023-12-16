<script lang="ts">
  import { Title } from "$lib/components";
  import { ConfirmForm, ResultTable } from "$lib/features/contact";

  export let data;
</script>

<Title title="confirm" />
<div class="space-y-12">
  <ResultTable formData={data.formData} />
  <ConfirmForm formData={data.formData} />
</div>
