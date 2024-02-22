<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { Button, Meta, Template } from "$lib/components";
</script>

<Meta
  title={`${$page.status} | Kanaru`}
  description="佐々木哉瑠(かなる)のポートフォリオサイト"
/>

<Template>
  <h1>{$page.status} {$page.error?.message || "unknown error"}</h1>
  <div class="space-y-14">
    <div class="space-y-4 text-sm leading-6 lg:text-center">
      <p class="text-red-800">お問い合わせフォームの送信に失敗しました。</p>
      <p>現在、システム障害が発生している可能性がございます。</p>
      <p>
        ご迷惑をお掛けして申し訳ありません。恐れ入りますが、時間をおいて再度お試し下さい。
      </p>
    </div>

    <div class="text-center">
      <Button type="button" on:click={() => goto("/contact")} color="gray">
        再試行
      </Button>
    </div>
  </div>
</Template>
