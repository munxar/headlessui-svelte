<script lang="ts">
	export let checked = false;
	let className = '';
	export { className as class };
</script>

<button on:click={() => (checked = !checked)} class={className}>
	<slot />
</button>
