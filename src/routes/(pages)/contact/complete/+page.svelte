<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button, Title } from "$lib/components";
  import { ResultTable } from "$lib/features/contact";

  export let data;
</script>

<Title title="complete" />
<div class="space-y-14">
  <div class="space-y-4 px-4 text-sm lg:text-center">
    <p>お問い合わせ頂きありがとうございます。以下の内容で承りました。</p>
    <p>
      ご入力頂いたメールアドレス宛に、自動送信メールをお送りしておりますのでご確認ください。
    </p>
    <p>
      内容を確認次第、折返しご連絡させていただきます。今しばらくお待ち下さい。
    </p>
  </div>

  <ResultTable formData={data.formData} />

  <div class="text-center">
    <Button type="button" on:click={() => goto("/")} color="gray">
      ホームへ戻る
    </Button>
  </div>
</div>
