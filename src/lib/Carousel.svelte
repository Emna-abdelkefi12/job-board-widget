
<script>
	import { onMount } from 'svelte/internal';
	import Content from './Content.svelte';
	import ChevronRight from './icon/ChevronRight.svelte';
	import ChevronLeft from './icon/ChevronLeft.svelte'; 

	export let editable = true
	export let __service = null
	export let cards = []
	export let settings = {}
	export let index

	export let autoplay = 0 //duration
	export let duration = 500
	export let startIndex = 0
	export let draggable = true 
	export let multipleDrag = true
	 
	let currentPerPage
	let activePosts=[]

	$: perPage = {
		100:settings.perSlide-3 > 0 ? settings.perSlide-3: settings.perSlide-2 > 0 ? settings.perSlide-2: settings.perSlide-1 > 0 ? settings.perSlide-1: settings.perSlide,
		480:settings.perSlide-2 > 0 ? settings.perSlide-2: settings.perSlide-1 > 0 ? settings.perSlide-1: settings.perSlide,
		768:settings.perSlide-1 > 0 ? settings.perSlide-1: settings.perSlide,
		1024:settings.perSlide
	}
 
	
	$: if(settings) {
		activePosts = cards.slice(0,settings.max||50)
		setTimeout(() => {
			window.dispatchEvent(new Event('resize'))	
		})
	}

	$: listPosts = activePosts.map((post, index) => {
		if(settings.perCol == 1) {
			return [post]
		}

		if(settings.perCol == 2) {
			if (index % 2 === 0) {
				if (index === activePosts.length - 1) {
					return [post];
				} else {
					return [post, activePosts[index + 1]];
				}	
			}
		} else if(settings.perCol == 3) {
			if (index % 3 === 0) {
				if (index === activePosts.length - 1) {
					return [post];
				} else if (index === activePosts.length - 2) {
					return [post, activePosts[index + 1]];
				} else {
					return [post, activePosts[index + 1], activePosts[index + 2]];
				}	
		 	}	
  		}
	}).filter(Boolean)

</script>

{#if Array.isArray(cards)}
	<div class="w-full">
		<Content {__service} bind:index {autoplay} {duration} {startIndex} {draggable} {multipleDrag}  bind:currentPerPage {perPage} {settings} {listPosts} {editable} >  
			<span class="text-tertiary mx-2 flex items-center justify-center controls" slot="left-control" style="--ft-tertiary:{settings.controlsColor}">
				<ChevronLeft class="{settings.perSlide > 3&&settings.perCol == 1 ? 'h-6 w-6':'w-8 h-8'}" />
			</span>
			<span class="text-tertiary mx-2 flex items-center justify-center controls " slot="right-control" style="--ft-tertiary:{settings.controlsColor}">
				<ChevronRight class="{settings.perSlide > 3&&settings.perCol == 1 ? 'h-6 w-6':'w-8 h-8'}" />
			</span>
		</Content>	 
	</div>
{/if}

