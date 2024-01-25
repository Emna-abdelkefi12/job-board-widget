<script>
    import Editor from "https://cdn.fouita.com/assets/fouita/tw-editor-v2.min.mjs"

    export let editable
    export let settings
    export let card

    let salPos
	let margin

    $:if (settings.salPos == "inline" && settings.posImg == "right" && settings.image) {
		salPos = "flex-row-reverse"
		margin = "mr-2"
	} else if (settings.salPos == "top") {
		salPos = "flex-col-reverse"
		margin = "mb-2"
	} else if (settings.salPos == "bottom") {
		salPos = "flex-col"
		margin = "mt-2"
	} else {
		salPos = ""
		margin = "ml-2"
	}
</script>

<div class="py-8 w-full text-primary flex {salPos}" style="--ft-primary:{settings.headerColor};">
    <div class="{editable? 'p-1 border border-dashed border-gray-400 ':''} w-full">
      <Editor bind:arr_html={card.text} {editable}/>
    </div> 

    <div class="{margin} {editable? 'p-1 border border-dashed border-gray-400 ':''} w-full">
        <Editor bind:arr_html={card.salary} {editable}/>
      </div> 
</div>