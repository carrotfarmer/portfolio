<script>
	import CustomLink from '../components/CustomLink.svelte';
</script>

<!-- about me -->
<p class="font-mono text-blue-900 text-center py-10 px-12">
	I am a 13 y/o programmer from India. I started my coding journey at the age of 11, and I've been
	creating some really <strike>dumb</strike> cool websites and apps since then!
</p>

<!-- more about me -->
<h2 class="text-2xl font-bold font-mono text-cyan-600 text-center">more about me</h2>
<div class="grid place-items-center py-5">
	<ul class="list-disc text-blue-900 font-mono">
		<li class="font-bold">
			i am mainly a web developer, interested in
			<CustomLink url="https://reactjs.org" text="React" />
			and <CustomLink url="https://nestjs.com" text="Nest.js" />
		</li>
		<li>i like 😺 cats 😻 and 🍔 burgers 🍔</li>
		<li>
			i am an avid music listener, i like taylor swift, shawn mendes, the score and many other
			artists!
		</li>
		<li>
			i also write blog posts <strike>once in a blue moon</strike> about tech and programming on
			<CustomLink url="https://hashnode.com" text="hashnode" />
		</li>
		<li>my favorite OS is <strong>macOS</strong></li>
		<li>i play sports, listen to music, read fiction and draw in my spare time</li>
	</ul>
</div>
