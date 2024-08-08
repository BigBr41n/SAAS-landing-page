<script lang="ts">
	/* 	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	onMount(() => {
		const floatingAnimation = (target: string, delay: number) => {
			gsap.to(target, {
				y: '+=15',
				x: '+=5',
				duration: 2,
				ease: 'sine.inOut',
				yoyo: true,
				repeat: -1,
				delay: delay
			});
		};

		floatingAnimation('.cursor-image', 0);
		floatingAnimation('.message-image', 1);
	}); */
</script>

<div>
	<div
		class="relative overflow-clip bg-black bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] px-2 py-[72px] text-white sm:py-24"
	>
		<!--bottom rounded shape-->
		<div
			class="absolute left-1/2 top-[calc(100%-96px)] h-[357px] w-[750px] -translate-x-1/2 rounded-[100%] border border-[#B48CDE] bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)] sm:top-[calc(100%-120px)] sm:h-[768px] sm:w-[1536px] lg:h-[1200px] lg:w-[2400px]"
		></div>
		<!---->

		<!--page content-->
		<div class="relative">
			<div class="relative flex items-center justify-center">
				<a href="#version" class="inline-flex gap-3 rounded-lg border border-white/30 px-2 py-1">
					<span
						class="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] bg-clip-text text-transparent"
					>
						Version 2.0 is here
					</span>
					<span class="inline-flex items-center justify-center gap-2">
						<span> Read More </span>
						<i class="fa-duotone fa-solid fa-arrow-right"></i>
					</span>
				</a>
			</div>
			<div class="mt-8 flex justify-center">
				<div class="relative inline-flex">
					<img
						src="/assets/images/cursor.png"
						class="cursor-image floating-image absolute right-[517px] top-[108px]"
						height="200"
						width="200"
						alt=""
					/>
					<img
						src="/assets/images/message.png"
						height="200"
						width="200"
						class="message-image floating-image absolute left-[538px] top-[56px]"
						alt=""
					/>

					<h1 class="inline-flex text-center text-7xl font-bold tracking-tighter sm:text-9xl">
						One Task
						<br />
						at a Time
					</h1>
				</div>
			</div>
			<div class="flex justify-center">
				<p class="mt-8 max-w-md text-center text-xl">
					Celebrate the joy of accomplishment with an app designed to track progress, motivate your
					efforts, and celebrate your success.
				</p>
			</div>
			<div class="mt-8 flex justify-center">
				<button class="rounded-lg bg-white px-5 py-3 font-medium text-black">Get for free</button>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes float {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(5px, -10px);
		}
	}

	.floating-image {
		animation: float 4s ease-in-out infinite;
		will-change: transform;
	}

	.cursor-image {
		animation-delay: 0s;
	}

	.message-image {
		animation-delay: 2s;
	}
</style>
