<script>
    import Switch from "./Switch.svelte";

    export let card = {}
    export let cards = []

    function updateImg() {
		window.Fouita.selectMedia((src, close) => {
			card.image=src
			close?.()
		}) 
	}

	function removeImg() {
		card.image=null
		cards=cards
	}

</script>

<div class="text-gray-300 mt-4">
					
    <div class="flex items-center bg-gray-700 rounded mt-2 p-2 cursor-pointer justify-between " 
    on:click={()=>updateImg()}>
        <div>
            <i class="fa-light fa-folder-arrow-up"></i>
            <span class="ml-1">Upload Image</span>
        </div>
        
        <div class="cursor-pointer ml-4 mt-1" on:click|stopPropagation={() => removeImg()}>
            <i class="fa-light fa-trash-can"></i>
        </div>
    </div>
    
    {#if card.image}
        <img src={card.image} alt={card.image} />
    {/if}

    <div key=k57 class="w-full flex justify-between items-center mt-4">
        Button 2 <Switch bind:value={card.showBtn2}></Switch>
    </div>

    <div key=k57 class="w-full flex justify-between items-center mt-4">
        Salary <Switch bind:value={card.showSalary}></Switch>
    </div>

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