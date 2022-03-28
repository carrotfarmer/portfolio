<script lang="ts">
	export let text: string;
	export let url: string;
</script>

<a class="font-mono hover-underline-animation" href={url} target="_blank">{text}</a>

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
