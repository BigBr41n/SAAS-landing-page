<script>
	export let id;
</script>

<section {id} class={'flex min-h-screen flex-col '}>
	<div class="mx-auto flex w-full flex-1 flex-col">
		<slot />
	</div>
</section>
