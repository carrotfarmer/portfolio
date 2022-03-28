<script>
	import FaReact from 'svelte-icons/fa/FaReact.svelte';
	import DiJavascript1 from 'svelte-icons/di/DiJavascript1.svelte';
	import DiPython from 'svelte-icons/di/DiPython.svelte';
	import DiNodejs from 'svelte-icons/di/DiNodejs.svelte';
	import DiSwift from 'svelte-icons/di/DiSwift.svelte';
</script>

<h2 class="text-2xl font-bold font-mono text-cyan-600 text-center py-10">my skills</h2>

<div class="flex flex-row px-14">
	<div class="hover:text-blue-400 pr-3 w-48" title="React">
		<a href="https://reactjs.org" target="_blank">
			<FaReact />
		</a>
	</div>

	<div class="hover:text-yellow-600 pr-3 w-48">
		<a href="https://www.javascript.com/" target="_blank">
			<DiJavascript1 />
		</a>
	</div>

	<div class="hover:text-blue-800 pr-3 w-48">
		<a href="https://www.python.org/" target="_blank">
			<DiPython />
		</a>
	</div>

	<div class="hover:text-green-600 pr-3 w-48">
		<a href="https://www.nodejs.org/" target="_blank">
			<DiNodejs />
		</a>
	</div>

	<div class="hover:text-orange-400 pr-3 w-48">
		<a href="https://developer.apple.com/swift/" target="_blank">
			<DiSwift />
		</a>
	</div>

	<a href="https://typescriptlang.org" target="_blank" class="w-44 pr-3">
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
			alt="typescript"
		/>
	</a>

	<a href="https://nestjs.com" target="_blank" class="w-44 pr-3">
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"
			alt="nest.js"
		/>
	</a>
</div>
