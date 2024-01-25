<script>
    import Button from "./Button.svelte";
    import Editor from "https://cdn.fouita.com/assets/fouita/tw-editor-v2.min.mjs"
    import Image from "./Image.svelte";
    import TextCard from "./TextCard.svelte";
    import Popup from "./Popup.svelte";

    export let card = []
    export let settings = {}
    export let editable
    export let index
    export let i

    let posImg

    function click(){
        if(!settings.popup) return
        index = i
    }

    $:if (settings.posImg == "left") {
		posImg = "sm:flex-row flex-col"
	} else if (settings.posImg == "right") {
		posImg = "sm:flex-row-reverse flex-col"
	} else if (settings.posImg == "top") {
		posImg = "flex-col"
	} else {
		posImg = "flex-col-reverse"
	}

   
    $: ml = settings.inline && settings.btn1 ? settings.space : 0;
    $: mt = !settings.inline &&settings.btn1 ? settings.space : 0;

</script>

<style>

</style>
<div class="w-full flex justify-center border">
    <!-- <div class="w-full bg-red-300  font-bold">
        {card.titre}
    </div> -->

    <div class="w-full font-bold flex {posImg} {settings.transparent?'':'bg-primary'} {settings.popup?'cursor-pointer':''}" 
        style="--ft-primary:{settings.bgCard};
        {settings.display == 'elevated'? 'box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08)' : ''};
        border-width: {settings.border}px;
        border-color:rgb({settings.borderColor});"
        on:click={click}>
        {#if settings.image}
            <Image {settings} {editable} {card}/>
        {/if}
        
        <div class="w-full p-5 flex items-center space-x-10">
            <TextCard {settings} {editable} bind:card />
            
            {#if settings.btn1 || settings.btn2}
                <div class="{settings.inline?'flex':''} justify-end w-2/5">
                    {#if settings.btn1}
                        <Button label={card.button1} border={settings.btnBorder1} borderColor={settings.btnBorderColor1} link={card.link1} {settings}/>
                    {/if}
                    
                    {#if settings.btn2}
                        <Button label={card.button2} border={settings.btnBorder2} borderColor={settings.btnBorderColor2} link={card.link2} {settings} {mt} {ml} />
                    {/if}
                </div>
            {/if}
        </div>
        
    
    </div>

</div>