<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let visible = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		const section = document.querySelector('.animate-section');
		observer.observe(section as Element);

		return () => {
			observer.disconnect();
		};
	});
</script>

<div
	class="animate-section bg-black bg-gradient-to-b from-black to-[#5D2AC8] px-4 py-[72px] text-white"
>
	<div class="container">
		{#if visible}
			<h2
				in:fly={{ y: -50, duration: 1000 }}
				class="text-center text-5xl font-bold tracking-tighter sm:text-6xl"
			>
				Intuitive interface
			</h2>
			<div class="mx-auto max-w-xl">
				<p
					in:fly={{ y: -50, duration: 1000, delay: 200 }}
					class="mt-5 text-center text-lg text-white/70"
				>
					Celebrate the joy of accomplishment with an app designed to track progress, motivate your
					efforts, and celebrate your success.
				</p>
			</div>
			<img
				in:fly={{ y: -50, duration: 1000, delay: 400 }}
				class="mx-auto mt-14"
				src="/assets/images/app-screen.png"
				alt="the product screenshot"
			/>
		{/if}
	</div>
</div>
