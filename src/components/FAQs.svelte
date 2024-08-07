<script lang="ts">
	let items = [
		{
			question: 'What payment methods do you accept?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nunc id diam suscipit maximus. Sed nec libero vel mi facilisis sagittis.',
			isOpen: false
		},
		{
			question: 'How does the pricing work for teams?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nunc id diam suscipit maximus. Sed nec libero vel mi facilisis sagittis.',
			isOpen: false
		},
		{
			question: 'Can I change my plan later?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nunc id diam suscipit maximus. Sed nec libero vel mi facilisis sagittis.',
			isOpen: false
		},
		{
			question: 'Is my data secure?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nunc id diam suscipit maximus. Sed nec libero vel mi facilisis sagittis.',
			isOpen: false
		}
	];

	const toggleAnswer = (index: number) => {
		items = items.map((item, i) => {
			if (i === index) {
				item.isOpen = !item.isOpen;
			} else {
				item.isOpen = false;
			}
			return item;
		});
	};
</script>

<div class="bg-black bg-gradient-to-b from-[#5D2AC8] to-black px-5 py-[72px] text-white sm:py-24">
	<div class="container">
		<h2
			class="mx-auto text-center text-5xl font-bold tracking-tighter sm:max-w-[648px] sm:text-6xl"
		>
			Frequently Asked Questions
		</h2>
		<div class="mx-auto mt-12 max-w-[648px]">
			{#each items as item, index}
				<div class="py-7">
					<button
						type="button"
						class="flex w-full cursor-pointer items-center border-b border-white/30 text-left"
						on:click={() => toggleAnswer(index)}
						on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleAnswer(index)}
						aria-expanded={item.isOpen}
					>
						<span class="flex-1 text-lg font-bold">{item.question}</span>
						<i class={item.isOpen ? 'fa-solid fa-minus' : 'fa-solid fa-plus '}></i>
					</button>
					<div class={item.isOpen ? 'mt-4 flex' : 'mt-2 hidden'}>
						{item.answer}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
