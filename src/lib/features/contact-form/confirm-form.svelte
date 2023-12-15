<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button } from "$lib/components";
  import type { FormSchema } from "./validation";

  export let formData: FormSchema;

  const trStyle = "border-b border-neutral-400";
</script>

<div class="space-y-12">
  <table class="w-full table-fixed whitespace-pre-wrap break-words">
    <tbody>
      <tr class={trStyle}>
        <th class="w-32 font-bold text-neutral-400">name</th>
        <td class="p-4">
          {formData.name}
        </td>
      </tr>
      <tr class={trStyle}>
        <th class="w-32 font-bold text-neutral-400">email</th>
        <td class="p-4">
          {formData.email}
        </td>
      </tr>
      <tr class={trStyle}>
        <th class="w-32 font-bold text-neutral-400">message</th>
        <td class="p-4">
          {formData.message}
        </td>
      </tr>
    </tbody>
  </table>

  <form method="post" action="/contact/confirm">
    <input name="name" type="hidden" value={formData.name} />
    <input name="email" type="hidden" value={formData.email} />
    <input name="message" type="hidden" value={formData.message} />
    <div class="flex justify-center space-x-16">
      <Button type="button" on:click={() => goto("/contact")} color="gray"
        >戻る</Button
      >
      <Button type="submit">送信</Button>
    </div>
  </form>
</div>
