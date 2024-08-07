<script lang="ts">
	import '../app.css';
	import Banner from '../components/Banner.svelte';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	import { openModal } from '../store/index';

	function reroute(href: string) {
		$openModal = false;
		window.location.href = href;
	}
</script>

{#if $openModal}
	<div
		class="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col gap-8 border-b bg-black p-5 px-8 text-white/80 md:hidden"
	>
		<div class="flex items-center justify-between gap-4 border-b pb-2">
			<h1 class="font-semibold">
				One Task <span class="text-indigo-400">at a Time</span>
			</h1>
			<button on:click={() => ($openModal = false)} class="border-none outline-none">
				<i class="fa-solid fa-xmark text-2xl"></i>
			</button>
		</div>
		<div class="flex flex-1 flex-col gap-4">
			<button
				on:click={() => reroute('#product')}
				class="group cursor-pointer border-none p-2 text-left outline-none duration-200"
			>
				<p class=" text-3xl font-semibold duration-200 group-hover:pl-2">
					About <i class="fa-solid fa-chevron-right pl-4 text-xl" />
				</p>
			</button>
			<button
				on:click={() => reroute('#reviews')}
				class="group cursor-pointer border-none p-2 text-left outline-none duration-200"
			>
				<p class=" text-3xl font-semibold duration-200 group-hover:pl-2">
					Features <i class="fa-solid fa-chevron-right pl-4 text-xl" />
				</p>
			</button>
			<button
				on:click={() => reroute('#fqs')}
				class="group cursor-pointer border-none p-2 text-left outline-none duration-200"
			>
				<p class=" text-3xl font-semibold duration-200 group-hover:pl-2">
					FAQs <i class="fa-solid fa-chevron-right pl-4 text-xl" />
				</p>
			</button>
		</div>
	</div>
{/if}

<Banner />
<Header />
<slot></slot>
<Footer />
