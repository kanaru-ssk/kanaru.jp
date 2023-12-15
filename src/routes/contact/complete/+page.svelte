<script lang="ts">
  import { MainTemplate } from "$lib/components";
  import { ResultTable } from "$lib/features/contact-form";

  export let data;
</script>

<MainTemplate title="complete">
  <ResultTable formData={data.formData} />
</MainTemplate>
