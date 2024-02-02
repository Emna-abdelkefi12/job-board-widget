<script>
    export let card = {}

    function updateImg(i) {
		window.Fouita.selectMedia((src, close) => {
			card.image=src
			close?.()
		}) 
	}

	function removeHoverImg(i) {
		cards[i].hoverImage=null
		cards=cards
	}
	function updateVid(i) {
		window.Fouita.selectMedia((src, close) => {
			cards[i].video=src
			close?.()
		}) 
		cards=cards
	}
</script>

<div class="text-gray-300 mt-4">
					
    <div class="flex items-center bg-gray-700 rounded mt-2 p-2 cursor-pointer " 
    on:click={()=>updateImg()}>
        <i class="fa-light fa-folder-arrow-up"></i>
        <span class="ml-1">Upload Image</span>
    </div>
    
    {#if card.image}
        <img src={card.image} alt={card.image} />
    {/if}

    <div class="items-center justify-between mt-4">
        <div class="text-sm mb-2">
            Link 1
        </div>
        <div class="">
            <input type=text placeholder="https://mywebsite.com" 
            class="outline-none rounded w-full bg-gray-700 p-2" 
            bind:value={card.link1} />
        </div>
    </div>

    <div class="items-center justify-between mt-4">
        <div class="text-sm mb-2">
            Link 2
        </div>
        <div class="">
            <input type=text placeholder="https://mywebsite.com" 
            class="outline-none rounded w-full bg-gray-700 p-2" 
            bind:value={card.link2} />
        </div>
    </div>
</div>