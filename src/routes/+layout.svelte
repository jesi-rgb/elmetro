<script>
	import '../app.css';
	import Footer from '../lib/Components/Footer.svelte';
</script>

<main class="mx-auto max-w-xs my-10 font-serif selection:bg-blue-800 selection:text-blue-100">
	<slot />
	<Footer />
</main>
