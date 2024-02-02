<script>
	import { createEventDispatcher } from "svelte"
    import EditCard from "./EditCard.svelte";
	const dispatch = createEventDispatcher()

	export let cards = []
	export let changedIndex

	let selectedIndex 
	
	//start drag and drop 
	const drop = (event, target) => {
    event.dataTransfer.dropEffect = 'move'; 
    const start = parseInt(event.dataTransfer.getData("text/plain"));
    const newTracklist = cards //array

    if (start < target) {
      newTracklist.splice(target + 1, 0, newTracklist[start]);
      newTracklist.splice(start, 1);
    } else {
      newTracklist.splice(target, 0, newTracklist[start]);
      newTracklist.splice(start + 1, 1);
    }
    cards = newTracklist //array
		changedIndex = true
  }

  const dragstart = (event, i) => {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.dropEffect = 'move';
    const start = i;
    event.dataTransfer.setData('text/plain', start);
  }
	
	function selectImg(index) {
		dispatch("select", index)
	}
	//end drag and drop
	
	
	function select(i) {
		if(selectedIndex === i) {
			selectedIndex = null
			return
		}
		selectedIndex = i
	}
	
	function remove(i){
		if (!confirm("Do you really want to delete this media ?"))return	
		if(selectedIndex === i) {
			selectedIndex = null
		}
		cards.splice(i,1)
		cards = cards
	}
	
	function addTag() {
        cards.splice(cards.length, 0, JSON.parse(JSON.stringify(cards[cards.length - 1])))
		cards = cards
		selectedIndex = cards.length -1 
	}	
	
	$:if(cards || changedIndex){
		dispatch("update", {cards,changedIndex})
	}
		

</script>

<div>
	{#each cards as card,i}
		<div class="bg-gray-800 text-gray-200 rounded mb-4 p-4"
				  draggable={selectedIndex!=i}
				 on:dragstart="{event => dragstart(event, i)}"
				 on:drop|preventDefault="{event => drop(event, i)}"
				 ondragover="return false"
				 on:click="{() => selectImg(i)}">
			<div on:click={() => select(i)} 
                class="flex items-center justify-between cursor-pointer">
				
				<div class="flex items-center">
					<div class="{selectedIndex == null?'cursor-move':''} mr-3 text-gray-300" 
                    on:click|stopPropagation>
						<i class="fa-light fa-grip-dots-vertical"></i>
					</div>
					<div>
						{`Card #${i+1}`} 	
					</div>	
				</div>
				
				<div class="flex space-x-2 items-center justify-center">
                    {#if cards.length>1}
                        <div class="cursor-pointer text-red-500" 
                        on:click|stopPropagation={() => remove(i)}>
                            <i class="fa-light fa-trash-can"></i>
                        </div>
                    {/if}

					<div class="cursor-pointer" >
						<i class="fa-light fa-pen-to-square"></i>
					</div>
					
					
				</div>
			</div>
			{#if selectedIndex == i}
				<EditCard bind:card/>
				
			{/if}
		</div> 
	{/each}

	<div class="flex text-gray-200 items-center space-x-2 justify-center hover:bg-gray-700 bg-gray-800 p-2 cursor-pointer" 
        on:click={addTag}>
		<i class="fa-light fa-circle-plus"></i>
		<div>
			Add Media
		</div>	
	</div>
	
</div>