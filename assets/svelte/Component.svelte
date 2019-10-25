<style>
</style>

<script>
    export let world = "Brian";
	import { onMount } from 'svelte';

	let data = [];

	onMount(async () => {
		const res = await fetch(`/api/courses/`);
        const courses = await res.json();
        data = courses.data;
	});;
</script>

<h1> Hello {world} </h1>
<div class="courses">
	{#each data as course }
        <p>{course.title}</p><br/>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>