<script lang="ts">
	export let name: string;
	export let description: string;
	export let url: string;
	export let githubUrl: string;
	export let hasWebsite: boolean;

	import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte';
</script>

<div class="border-4 p-5 border-cyan-700 shadow-xl hover:border-cyan-500 rounded-2xl">
	<div class="flex flex-row">
		<h3 class="font-mono font-extrabold text-2xl text-blue-700">
			{#if hasWebsite}
				<a href={url} target="_blank" class="hover:text-blue-500">
					{name}
				</a>
			{/if}

			{#if !hasWebsite}
				{name}
			{/if}
		</h3>
		<div class="w-12 h-12 px-2">
			<a href={githubUrl} target="_blank" class="hover:text-gray-600">
				<DiGithubBadge />
			</a>
		</div>
	</div>
	<p class="font-mono">
		{description}
	</p>
</div>
