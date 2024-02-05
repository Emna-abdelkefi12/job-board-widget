<div class="carousel relative w-full mx-auto" bind:this={parentNode}>

	<div class="slides" bind:this={siema} > 
		{#each listPosts as posts}
			<div class="space-y-{settings.gap}">
				{#each posts as post}  
						<div class="w-full flex items-center pr-{settings.gap}"> 
							<Card bind:card={post} {editable} {__service} {settings}/>  
						</div>
				{/each}  
			</div> 
		{/each}
	</div> 

	{#if settings.controls} 
		<div class="absolute top-1/2 z-50 left-3 bottom-0 items-center justify-center shadow-lg flex
				{settings.perSlide > 3&&settings.perCol == 1 ? '-mt-4	h-8 w-8':'-mt-6 w-12 h-12'} 
				rounded-full bg-primary/30 cursor-pointer hover:bg-primary/50" on:click={left} aria-label="left"> 
			<slot name="left-control"></slot>
		</div>
		<div class="absolute top-1/2 z-50 right-3 bottom-0 items-center justify-center shadow-lg flex
				{settings.perSlide > 3&&settings.perCol == 1 ? '-mt-4	h-8 w-8':'-mt-6 w-12 h-12'}
				rounded-full bg-primary/30 cursor-pointer hover:bg-primary/50" on:click={right} aria-label="right">
			<slot name="right-control"></slot>
		</div> 
	{/if}

</div>
{#if settings.dots}
	<div class="py-6 flex justify-center" style="--ft-tertiary:{settings.dotsColor}">
		<div class="flex items-center space-x-3">
			{#each {length: totalDots} as _, i}
				<button on:click={() => go(i*currentPerPage)} class={isDotActive(currentIndex, i) ? "active" :""}>
					<div class="cursor-pointer rounded-full h-2 w-2 {isDotActive(currentIndex, i)? 'bg-tertiary':'bg-tertiary/25'} ">

					</div>
				</button>
			{/each}
		</div>
	</div>
{/if}

<script> 
	import Card from './Card.svelte'
	import { onMount, createEventDispatcher } from 'svelte/internal'

	export let listPosts = []
	export let settings = {} 
	export let perPage 
	export let autoplay = 4000
	export let duration = 400
	export let easing = 'ease-out'
	export let startIndex = 0
	export let draggable = true
	export let multipleDrag = true	
	export let threshold = 20
	export let rtl = false
	export let __service 
	export let currentPerPage
	export let editable

	const dispatch = createEventDispatcher()

	let parentNode 
	let siema 
	let currentIndex = startIndex;
	let controller
	let timer

	function track(action) {
		return () => {
			Fouita.Tracker.call(__service,action)
		}
	}

	onMount(async () => {
		
		const {default: pkg} = await import("https://cdn.fouita.com/assets/js/siema-v1.js")
		const SiemaCarousel = pkg || Siema 
		controller = new SiemaCarousel({
			selector: siema,
			perPage: typeof perPage === 'object' ? perPage : Number(perPage),
			loop: settings.loop,
			duration,
			easing,
			startIndex,
			draggable,
			multipleDrag,
			threshold,
			rtl,
			onChange: handleChange
		})
		
		if(autoplay) {
			timer = setInterval(right, autoplay);
		}

		return () => {
			autoplay && clearInterval(timer)
			timer = null
		}
	})

	

	export function pause() {
		clearInterval(timer);
		timer = null
	}

	export function resume() {
		if (autoplay && !timer) {
			timer = setInterval(right, autoplay);
		}
	}

	function handleChange (event) {
		currentIndex = controller.currentSlide
		dispatch('change', {
			currentSlide: controller.currentSlide,
			slideCount: controller.innerElements.length
		})
	}

	export function left () {
		controller.prev()
		Fouita.Tracker.call(__service, "Slide")
	}

	export function right () {
		controller.next()
		Fouita.Tracker.call(__service, "Slide") 
	}

	export function isDotActive (currentIndex, dotIndex) {
		if (currentIndex < 0) currentIndex = pips.length + currentIndex;
		return currentIndex >= dotIndex*currentPerPage && currentIndex < (dotIndex*currentPerPage)+currentPerPage
	}

	export function go (index) {
		controller.goTo(index)
	}

	$: totalDots = controller ? Math.ceil(controller.innerElements.length / currentPerPage) : []
	$: pips = controller ? controller.innerElements : []
	$: currentPerPage = controller ? controller.perPage : perPage
</script>


