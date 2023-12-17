<script lang="ts">
  import { enhance } from "$app/forms";
  import { Button } from "$lib/components";
  import InputField from "./input-field.svelte";
  import type { FormResponse, FormRequest } from "./types";

  export let form: FormResponse | null;
  export let formRequest: FormRequest;
</script>

<form
  method="post"
  action="/contact?/confirm"
  use:enhance={() =>
    ({ update }) =>
      update({ reset: false })}
  class="space-y-6"
>
  <InputField
    name="name"
    type="text"
    placeholder="お名前を入力して下さい"
    value={formRequest.name}
    errors={(form && !form.success && form.errors.name) || []}
  />
  <InputField
    name="email"
    type="email"
    placeholder="メールアドレスを入力して下さい"
    value={formRequest.email}
    errors={(form && !form.success && form.errors.email) || []}
  />
  <InputField
    name="message"
    type="textarea"
    placeholder="お問合せ内容を入力して下さい"
    value={formRequest.message}
    errors={(form && !form.success && form.errors.message) || []}
  />

  <div class="pt-8 text-center">
    <Button type="submit">確認</Button>
  </div>
</form>
