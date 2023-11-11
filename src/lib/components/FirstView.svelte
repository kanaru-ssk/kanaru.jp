<script lang="ts">
	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let show = false;
	onMount(() => {
		show = true;
	});
</script>

<section>
	<svg width="162" height="98" viewBox="0 0 162 98" fill="none" xmlns="http://www.w3.org/2000/svg">
		{#if show}
			<path
				transition:draw={{ duration: 1500, easing: quintOut }}
				d="M1 97L17 49L161 1L145 49L1 97Z"
				stroke="black"
			/>
		{/if}
	</svg>
</section>

<style>
	section {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
