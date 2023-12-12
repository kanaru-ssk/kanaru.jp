<script lang="ts">
  export let name: string;
  export let href: string;
</script>

<li>
  <a {href} class="p-4 hover:text-neutral-400">{name}</a>
</li>
