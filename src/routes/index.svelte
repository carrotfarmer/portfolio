<script>
	import Skills from '../components/Skills.svelte';
	import AboutMe from '../components/AboutMe.svelte';
	import Socials from '../components/Socials.svelte';
	import Contact from '../components/Contact.svelte';
</script>

<!-- title of the page -->
<svelte:head>
	<title>Dhruva | Fullstack Dev</title>
</svelte:head>

<!-- header -->
<h2 class="font-bold font-mono text-2xl text-blue-400 text-center">hey nerd,</h2>
<h1
	class="font-mono font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-800 text-center py-5"
>
	I'm Dhruva.
</h1>

<!-- about me && more about me section -->
<AboutMe />

<!-- Skills/Knowledge section -->
<Skills />

<!-- Social Links section -->
<Socials />

<!-- Contact Me section -->
<Contact />
