<script lang="ts">
	import { onMount } from 'svelte';

	let container: HTMLElement;
	let helix: HTMLImageElement;
	let emojistar: HTMLImageElement;

	onMount(() => {
		const handleScroll = () => {
			if (!container || !helix || !emojistar) return;

			const scrollPosition = window.pageYOffset;
			const containerRect = container.getBoundingClientRect();
			const containerTop = containerRect.top + scrollPosition;
			const containerCenter = containerTop + containerRect.height / 2;
			const screenCenter = scrollPosition + window.innerHeight / 2;

			const distance = screenCenter - containerCenter;

			const helixY = distance * 0.1;
			const emojistarY = distance * -0.05;

			helix.style.transform = `translateY(${helixY}px)`;
			emojistar.style.transform = `translateY(${emojistarY}px)`;
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial call to set positions

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="overflow-hidden bg-black py-[72px] text-center text-white sm:py-24">
	<div bind:this={container} class="container relative mx-auto max-w-xl px-7">
		<img
			bind:this={helix}
			class="absolute left-[calc(100%+36px)] top-6 transition-transform duration-300 ease-out"
			src="/assets/images/helix2.png"
			alt=""
		/>
		<img
			bind:this={emojistar}
			class="absolute -top-[120px] right-[calc(100%+24px)] transition-transform duration-300 ease-out"
			src="/assets/images/emojistar.png"
			alt=""
		/>

		<h2 class="text-5xl font-bold tracking-tighter sm:text-6xl">Get instant access</h2>
		<p class="mt-5 text-xl text-white/70">
			Celebrate the joy of accomplishment with an app designed to track progress, motivate your
			efforts, and celebrate your success.
		</p>
		<form action="" class="mx-auto mt-10 flex max-w-sm flex-col gap-2.5 sm:flex-row">
			<input
				class="h-12 rounded-lg bg-white/20 px-5 font-medium sm:flex-1"
				type="email"
				placeholder="your@email.com"
			/>
			<button class="h-12 rounded-lg bg-white px-5 text-black" type="submit">Get access</button>
		</form>
	</div>
</div>
