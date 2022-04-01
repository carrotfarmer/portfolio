<nav class="flex justify-center w-full py-5">
	<a class="mx-4 text-lg font-mono lowercase hover-underline-animation " href="/">/home</a>
	<a class="mx-4 text-lg font-mono lowercase hover-underline-animation" href="/projects">
		/projects
	</a>
	<a
		class="mx-4 text-lg font-mono lowercase hover-underline-animation"
		href="https://blog.dhruva.is-a.dev"
		target="_blank"
	>
		/blog
	</a>
</nav>

<style>
	.hover-underline-animation {
		display: inline-block;
		position: relative;
		color: #0087ca;
	}

	.hover-underline-animation:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #0087ca;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	.hover-underline-animation:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
</style>
