<script>
    import Button from "./Button.svelte";
    import Image from "./Image.svelte";
    import TextCard from "./TextCard.svelte";

    export let card = []
    export let settings = {}
    export let editable
    
    let posImg

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
<div class="w-full flex justify-center break-inside-avoid-column">

    <div class="w-full font-bold flex {posImg} {settings.transparent?'':'bg-primary'} " 
        style="--ft-primary:{settings.bgCard};width:500px;
        {settings.display == 'elevated'? 'box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08)' : ''};
        border-width: {settings.border}px;
        border-color:rgb({settings.borderColor});">

        {#if settings.image && card.image}
            <Image {settings} {editable} {card}/>
        {/if}
        
        <div class="w-full p-5 flex items-center justify-center">
            <div class="w-full">
                <TextCard {settings} {editable} bind:card />
            
                {#if settings.btn1 || settings.btn2}
                    <div class="{settings.inline?'flex':''} justify-end">
                        {#if settings.btn1}
                            <Button label={settings.button1} color={settings.btnColor1} gradient={settings.btnGradient1} text={settings.btnTextColor1} border={settings.btnBorder1} borderColor={settings.btnBorderColor1} colorType={settings.colorType1} link={card.link1} {settings}/>
                        {/if}
                        
                        {#if settings.btn2 && card.showBtn2}
                            <Button label={settings.button2} color={settings.btnColor2} gradient={settings.btnGradient1} text={settings.btnTextColor2} border={settings.btnBorder2} borderColor={settings.btnBorderColor2} colorType={settings.colorType2} link={card.link2} {settings} {mt} {ml} />
                        {/if}
                    </div>
                {/if}
            </div>
            
        </div>
        
    
    </div>

</div>