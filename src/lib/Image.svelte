<script>
    
	export let card = {}
	export let settings = {}
	export let editable
</script>
{@html `
	<style>
		@media (min-width: 640px) { 
			.imageX {
				width: var(--widthImg);
			}
		}
		@media (max-width: 640px) { 
			.imageX {
				height: var(--heightImg);
			}
		}
			
	</style>
`}

{#if settings.theme == "card"}
	{#if settings.posImg == "left" || settings.posImg == "right"}
		<div class="ft-image shrink-0 imageX bg-cover bg-center {(card.link || settings.click == 'popup') && !editable?'cursor-pointer':''}" 
			style="background-image: url({card.image});--widthImg:{settings.widthImg}px;--heightImg:{settings.heightImg}px !important;"/>
	{:else}
		<div
			class="ft-image shrink-0 bg-cover bg-center {(card.link || settings.click == 'popup') && !editable?'cursor-pointer':''}" 
			style="background-image: url({card.image});height:{settings.heightImg}px !important;"/>
	{/if}
{:else}
	<div class="m-4 flex justify-{settings.alignImg} items-center {(card.link || settings.click == 'popup') && !editable?'cursor-pointer':''}">
		<div
			class="ft-image shrink-0 bg-cover bg-center rounded-{settings.roundImg}" 
			style="background-image: url({card.image});width:{settings.widthImg}px;height:{settings.heightImg}px !important;"/>
	</div>
	
{/if}
