<script lang="ts">
	import init, { greet } from '$lib/wasm/pkg';
	import { onMount } from 'svelte';

	onMount(() => {
		init();
	});
</script>

<button on:click={() => greet('Wasm')}>greet</button>
