<script lang="ts">
  import { enhance } from "$app/forms";
  import { Button } from "$lib/components";
  import Input from "./input.svelte";
  import ErrorMessage from "./error-message.svelte";
  import type { FormResponse, FormSchema } from "./validation";

  export let form: FormResponse | null;
  export let formData: FormSchema;
</script>

<form
  method="post"
  action="/contact?/confirm"
  use:enhance={() =>
    ({ update }) =>
      update({ reset: false })}
  class="space-y-4 px-4"
>
  <div>
    {#if form && !form.success && form.errors.name}
      <ErrorMessage errors={form.errors.name} />
    {/if}
    <Input
      name="name"
      type="text"
      placeholder="お名前を入力して下さい"
      value={formData.name}
    />
  </div>
  <div>
    {#if form && !form.success && form.errors.email}
      <ErrorMessage errors={form.errors.email} />
    {/if}
    <Input
      name="email"
      type="email"
      placeholder="メールアドレスを入力して下さい"
      value={formData.email}
    />
  </div>

  <div>
    {#if form && !form.success && form.errors.message}
      <ErrorMessage errors={form.errors.message} />
    {/if}
    <div class="p-4 font-bold text-neutral-400">message</div>
    <textarea
      name="message"
      placeholder="お問い合わせ内容を入力して下さい"
      class="h-40 w-full border-y border-neutral-400 bg-transparent p-4 text-sm placeholder:text-neutral-500 focus:outline-none"
      required>{formData.message}</textarea
    >
  </div>

  <div class="pt-8 text-center">
    <Button type="submit">確認</Button>
  </div>
</form>
