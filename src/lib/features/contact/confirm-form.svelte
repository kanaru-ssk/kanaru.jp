<script lang="ts">
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import { Button } from "$lib/components";
  import type { FormRequest } from "./types";

  export let formRequest: FormRequest;
</script>

<form
  method="post"
  action="/contact?/send"
  use:enhance={() => {
    return async ({ update }) => {
      await goto("/contact");
      update();
    };
  }}
>
  <input name="name" type="hidden" value={formRequest.name} />
  <input name="email" type="hidden" value={formRequest.email} />
  <input name="message" type="hidden" value={formRequest.message} />
  <div class="space-x-8 text-center lg:space-x-16">
    <Button type="button" on:click={() => goto("/contact")} color="gray">
      戻る
    </Button>
    <Button type="submit">送信</Button>
  </div>
</form>
