<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button } from "$lib/components";
  import type { FormSchema } from "./validation";

  export let formData: FormSchema;

  const trStyle = "border-b border-neutral-400";
</script>

<table class="w-full table-fixed whitespace-pre-wrap break-words">
  <tbody>
    <tr class={trStyle}>
      <th class="w-32">name</th>
      <td class="p-4">
        {formData.name}
      </td>
    </tr>
    <tr class={trStyle}>
      <th class="w-32">email</th>
      <td class="p-4">
        {formData.email}
      </td>
    </tr>
    <tr class={trStyle}>
      <th class="w-32">message</th>
      <td class="p-4">
        {formData.message}
      </td>
    </tr>
  </tbody>
</table>

<form method="post" action="/contact/confirm" class="text-center">
  <input type="hidden" name="name" value={formData.name} />
  <input type="hidden" name="email" value={formData.email} />
  <input type="hidden" name="message" value={formData.message} />
  <Button type="submit">送信</Button>
</form>

<Button
  type="button"
  on:click={() => {
    console.log("click");
    // goto("/contact");
  }}
>
  戻る
</Button>
