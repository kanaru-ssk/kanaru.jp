<script lang="ts">
  import type { FormSchema } from "./validation";

  export let formData: FormSchema;

  const trStyle = "border-b border-neutral-400";
</script>

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
