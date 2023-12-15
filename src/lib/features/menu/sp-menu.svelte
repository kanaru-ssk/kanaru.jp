<script lang="ts">
  import MenuContents from "./menu-contents.svelte";
</script>

<label class="relative block h-16 w-16 cursor-pointer">
  <input type="checkbox" name="menu" class="peer hidden" />
  <div
    class="pointer-events-none fixed left-0 top-0 h-svh w-screen cursor-default bg-black/75 opacity-0 duration-500 peer-checked:pointer-events-auto peer-checked:opacity-100"
  />
  <div
    class="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1 bg-white duration-500 peer-checked:translate-y-0 peer-checked:rotate-45"
  />
  <div
    class="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 translate-y-1 bg-white duration-500 peer-checked:translate-y-0 peer-checked:-rotate-45"
  />

  <div
    class="pointer-events-none absolute bottom-0 right-4 w-max translate-y-1/2 scale-y-50 cursor-default opacity-0 duration-500 peer-checked:pointer-events-auto peer-checked:translate-y-full peer-checked:scale-y-100 peer-checked:opacity-100"
  >
    <MenuContents />
  </div>
</label>
