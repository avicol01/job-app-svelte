<script>
	import '../app.css';
	let { children } = $props();
</script>

<nav class="flex items-center justify-around bg-slate-300">
	<a href="/">logo</a>

	<div class="mx-3 my-3 w-3/4 rounded-full bg-gray-100 px-5 py-1 sm:w-1/2">
		<input
			class="border-none bg-inherit text-sm outline-none"
			type="text"
			placeholder="search jobs"
		/>
	</div>
</nav>

{@render children()}
