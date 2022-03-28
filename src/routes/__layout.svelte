<script>
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
</script>

<Nav />
<div class="p-8 max-w-6xl mx-auto">
	<slot />
</div>
<Footer />

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
