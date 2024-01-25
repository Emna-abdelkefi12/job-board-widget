<script>
	import Editor from "https://cdn.fouita.com/assets/fouita/tw-editor-v2.min.mjs?1"
	import Close from "./icon/Close.svelte";
    import TextCard from "./TextCard.svelte";

	export let index
	export let card = {}
	export let settings = {}
	export let editable

	let posPrice
	let margin

	$:if (settings.posPrice == "inline" && settings.posImg == "right" && settings.image) {
		posPrice = "flex-row-reverse"
		margin = "mr-2"
	} else if (settings.posPrice == "top") {
		posPrice = "flex-col-reverse"
		margin = "mb-2"
	} else if (settings.posPrice == "bottom") {
		posPrice = "flex-col"
		margin = "mt-2"
	} else {
		posPrice = ""
		margin = "ml-2"
	}
	
</script>

{@html `
	<style>
		::-webkit-scrollbar {
			width: 5px;
			height: 7px;
		}

		::-webkit-scrollbar-thumb {
			background: rgba(207, 204, 204, 0.5);
		}

		::-webkit-scrollbar-track {
			background: rgba(112, 110, 110, 0.1);
		}
	</style>
`}

<div
    class="fixed bg-gray-900/90 z-50 top-0 left-0 w-screen h-screen flex items-center justify-center py-10 sm:px-2 px-1"
    on:click={() => (index = -1)}
>
    <div
        class="ft-popup relative bg-primary text-secondary rounded-lg capitalize w-full z-50 max-w-screen-md overflow-y-auto max-h-screen"
        on:click|stopPropagation
        style="--ft-primary:{settings.popupBgColor};--ft-secondary:{settings.popupTextColor};
		border-width: {settings.popupBorder}px;
		border-color:rgb({settings.popupBorderColor})"
    >

	<div
		class="absolute top-0 right-0 mr-2 mt-2 cursor-pointer z-50"
		on:click={() => (index = -1)} >
            <Close class="w-4 h-4"/>
    </div>

	<div class="sm:flex flex-row{settings.popupImgPos}">

		<div class="w-full" >
			{#if settings.image}
				<div class="ft-image-popup sm:h-full w-full bg-center bg-cover h-64" 
					style="background-image: url({card.image}) !important;"/>
			{/if}
		</div>
		<div class="sm:overflow-y-auto w-full p-4" style="max-height:400px">
            <TextCard {settings} {editable} bind:card />

			<!-- <div class="ft-detail {editable?'border p-1 border-dashed border-gray-400':''} m-4" 
				style="min-width: 50px"> 
				<Editor bind:arr_html={card.detail} {editable} /> 
			</div> -->
		</div>
		
	</div>
	

	</div>
</div>