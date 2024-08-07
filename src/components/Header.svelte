<script lang="ts">
	import { openModal } from '../store/index';
</script>

<header class="flex flex-col bg-black">
	<div class="flex items-center justify-between p-6">
		<div class="relative">
			<div
				class="absolute bottom-0 top-2 w-full bg-[linear-gradient(to_right,#F87BFF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"
			></div>
			<img class="relative h-12 w-12" src="/assets/images/logosaas.png" alt="saas logo" />
		</div>
		<button
			on:click={() => ($openModal = true)}
			class=" inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white border-opacity-30 sm:hidden"
		>
			<i class="fa-solid fa-bars" style="color: white;"></i>
		</button>
		<nav class="hidden sm:flex">
			<ul class="flex items-center justify-center gap-6">
				<li>
					<a href="#About" class="text-white text-opacity-60 transition hover:text-opacity-100"
						>About</a
					>
				</li>
				<li>
					<a href="#Features" class="text-white text-opacity-60 transition hover:text-opacity-100"
						>Features</a
					>
				</li>
				<li>
					<a href="#Updates" class="text-white text-opacity-60 transition hover:text-opacity-100"
						>Updates</a
					>
				</li>
				<li>
					<a href="#Help" class="text-white text-opacity-60 transition hover:text-opacity-100"
						>Help</a
					>
				</li>
				<li>
					<a href="#Customers" class="text-white text-opacity-60 transition hover:text-opacity-100"
						>Customers</a
					>
				</li>
				<button class="rounded-lg bg-white px-4 py-2">Get for free</button>
			</ul>
		</nav>
	</div>
</header>
