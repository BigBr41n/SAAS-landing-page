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
	<div class="continer flex flex-col items-center justify-center">
		<h2 class="text-center text-xl text-white/70">Trusted by the world's most innovative teams</h2>
		<div
			class=" relative mt-9 overflow-hidden before:left-0 before:h-full before:w-20 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-20 after:content-['']"
		>
			<div class="flex gap-16">
				{#each imgSrc as src}
					<img src={src.src} alt={src.alt} class="h-8 w-auto flex-none" />
				{/each}
			</div>
		</div>
	</div>
</div>
