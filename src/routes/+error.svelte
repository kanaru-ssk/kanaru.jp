<script lang="ts">
  import { page } from "$app/stores";
  import { Template, Title, Meta } from "$lib/components";
</script>

<Meta
  title={`${$page.status} | Kanaru`}
  description="佐々木哉瑠(かなる)のポートフォリオサイト"
/>

<Template>
  <Title title={`${$page.status} ${$page.error?.message || "unknown error"}`} />
</Template>
