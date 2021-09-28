<script lang="ts">
	import { getStores } from '$app/stores';
	const page = getStores().page;
</script>

<nav class="flex flex-col p-2 space-y-2">
	<a class:active={$page.path === '/'} href="/">Overview</a>
	<a class:active={$page.path === '/switch'} href="/switch">Switch</a>
</nav>

<style lang="postcss">
	nav > a {
		@apply bg-gray-100 rounded p-2;
	}
	.active {
		@apply bg-purple-400;
	}
</style>
