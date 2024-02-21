<script lang="ts">
  import { page } from "$app/stores";
  import { Template, Meta } from "$lib/components";
</script>

<Meta
  title={`${$page.status} | Kanaru`}
  description="佐々木哉瑠(かなる)のポートフォリオサイト"
/>

<Template>
  <h1>{$page.status} {$page.error?.message || "unknown error"}</h1>
</Template>
