<script lang="ts">
  import { MainTemplate } from "$lib/components";
  import { ConfirmForm, ResultTable } from "$lib/features/contact-form";

  export let data;
</script>

<MainTemplate title="confirm">
  <div class="space-y-12">
    <ResultTable formData={data.formData} />
    <ConfirmForm formData={data.formData} />
  </div>
</MainTemplate>
