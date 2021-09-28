<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import '../tailwind.css';
</script>

<h1 class="bg-purple-900 text-white p-2">Headless UI for Svelte</h1>
<div class="flex h-screen">
	<Nav />
	<main class="flex-1 py-2 pr-2">
		<div class="h-full border rounded p-2 px-3">
			<slot />
		</div>
	</main>
</div>
