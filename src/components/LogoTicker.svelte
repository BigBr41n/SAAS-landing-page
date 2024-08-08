<script lang="ts">
	const imgSrc = [
		{ src: '/assets/images/acme.png', alt: 'acme logo' },
		{ src: '/assets/images/quantum.png', alt: 'quantum logo' },
		{ src: '/assets/images/echo.png', alt: 'echo logo' },
		{ src: '/assets/images/celestial.png', alt: 'celestial logo' },
		{ src: '/assets/images/pulse.png', alt: 'pulse logo' },
		{ src: '/assets/images/apex.png', alt: 'apex logo' }
	];
</script>

<div class="bg-black py-[72px] text-white">
	<div class="container flex flex-col items-center justify-center">
		<h2 class="text-center text-xl text-white/70">Trusted by the world's most innovative teams</h2>
		<div class="relative mt-9 w-full overflow-hidden">
			<div class="animate-ticker flex gap-16">
				{#each [...imgSrc, ...imgSrc] as src}
					<img src={src.src} alt={src.alt} class="h-8 w-auto flex-none" />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes ticker {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.animate-ticker {
		animation: ticker 30s linear infinite;
	}

	.container:hover .animate-ticker {
		animation-play-state: paused;
	}
</style>
