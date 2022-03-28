<script>
	import { projects } from '../projects';
	import Project from './Project.svelte';
</script>

<svelte:head>
	<title>Projects | Dhruva Srinivas</title>
</svelte:head>

<h2 class="text-2xl font-bold font-mono text-cyan-600 text-center py-5">projects</h2>
<p class="font-mono text-center py-10">Some of the cool projects that I've worked on!</p>

<div class="grid grid-cols-1 md:grid-cols-2">
	{#each projects as project}
		<div class="px-3 py-3">
			<Project
				name={project.name}
				description={project.description}
				url={project.url}
				githubUrl={project.githubUrl}
				hasWebsite={project.hasWebsite}
			/>
		</div>
	{/each}
</div>
