<script>
  import Card from "./lib/Card.svelte";
  import Editor from "https://cdn.fouita.com/assets/fouita/tw-editor-v2.min.mjs"
  import Carousel from "./lib/Carousel.svelte";
  import List from "./lib/List.svelte";
    import Popup from "./lib/Popup.svelte";

  export let cards = [{ titre:"Women",text:[{html:"Our Gallery1",klass:""}],button1:"Apply Now1",button2: "Learn More1",link1:"https://tailwindcss.com/docs/flex-direction",
  link2:"https://tailwindcss.com/docs/flex-direction",
  image:"https://cdn2.fouita.com/0x2729/media/imgs/image262.png",salary: [{html:"salary",klass:""}]},
  {titre:"Men",text:[{html:"Our Gallery",klass:""}],button1:"Apply Now2",button2: "Learn More2",link1:"https://tailwindcss.com/docs/flex-direction",
  link2:"https://tailwindcss.com/docs/flex-direction",
  image:"https://cdn2.fouita.com/0x2729/media/imgs/image262.png",salary: [{html:"salary",klass:""}]},
  {titre:"Men",text:[{html:"Our Gallery",klass:""}],button1:"Apply Now2",button2: "Learn More2",link1:"https://tailwindcss.com/docs/flex-direction",
  link2:"https://tailwindcss.com/docs/flex-direction",
  image:"https://cdn2.fouita.com/0x2729/media/imgs/image262.png",salary: [{html:"salary",klass:""}]},
  {titre:"Men",text:[{html:"Our Gallery",klass:""}],button1:"Apply Now2",button2: "Learn More2",link1:"https://tailwindcss.com/docs/flex-direction",
  link2:"https://tailwindcss.com/docs/flex-direction",
  image:"https://cdn2.fouita.com/0x2729/media/imgs/image262.png",salary: [{html:"salary",klass:""}]},
  {titre:"Men",text:[{html:"Our Gallery",klass:""}],button1:"Apply Now2",button2: "Learn More2",link1:"https://tailwindcss.com/docs/flex-direction",
  link2:"https://tailwindcss.com/docs/flex-direction",
  image:"https://cdn2.fouita.com/0x2729/media/imgs/image262.png",salary: [{html:"salary",klass:""}]},
  {titre:"Kids",text:[{html:"Our Gallery",klass:""}],button1:"Apply Now3",button2: "Learn More3",link1:"https://tailwindcss.com/docs/flex-direction",
  link2:"https://tailwindcss.com/docs/flex-direction",
  image:"https://cdn2.fouita.com/0x2729/media/imgs/image262.png",salary: [{html:"salary",klass:""}]}]
  export let image = [{img:"https://cdn2.fouita.com/0x2729/media/imgs/image262.png"}]
  export let __service         
  export let header = [{html:"Our Gallery",klass:""}]
  export let settings = {
    //widget  
    style: "carousel",
    header: true,
    width: 1000,
    bgType: "color",
    bgImage: "https://cdn2.fouita.com/0x2729/media/imgs/image262.png",
    bgColor: "780 180 255",
    bgGradient: "0 255 255",
    headerColor: "0 0 0",

    //grid
    grids: 2,

    //carousel
    max:503,
		perSlide: 2,
		perCol: 1,
		controls: true,     
		dots: true,
		loop: true,
		controlsColor:"400 25 25",
		dotsColor:"0 255 255",

    //list

    //cards
    transparent: false,
    display: "elevated",
    border: 2,
    gap:5,
    borderColor: "30 440 255",
    bgCard: "201 0 70",

    //buttons
    target: "_Blank",
    inline: false,
    space: 10,
    btn1: true,
    btn2: true,
    btnBorder1: 2,
    btnBorder2: 2,
    btnBorderColor1: "255 255 255",
    btnBorderColor2: "255 255 255",

    //image
    image: true,
    theme: "card",
    posImg: "left",
    alignImg: "center", //start,end,center
    widthImg: 150,
    heightImg: 150,
    roundImg: "full",

    //salary
    salary: true,
    salPos: "inline",

    //popup
    popup: true,
    popupImgPos: "-reverse",
    
  }
  export let editable = true

  let gridsVal = ""
  let background
  let bgImage
  let parentNode
  let index = -1
  let popup = false

  $:if(settings.grids == 4) {
    gridsVal = "lg:grid-cols-4 sm:grid-cols-2 grid-cols-1"
  } else if(settings.grids == 3) {
    gridsVal = "lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"
  } else if(settings.grids == 2) {
    gridsVal = "sm:grid-cols-2 grid-cols-1"
  }else {
    gridsVal = "grid-cols-1"
  }

  $: if (settings.bgType == "color") {
    background = "bg-primary"	
  } else if (settings.bgType == "gradient") {
    background = "bg-gradient-to-r from-primary to-secondary"
  } else if (settings.bgType == "image") {
    background = "bg-cover bg-center"
  } else {
    background = ""
  }

  $:if(settings.bgType == "image"){
		bgImage = settings.bgImage
	}else{
		bgImage = ""
	}
</script>
<!-- max-width: min(900px,100vw) -->
<div class="ft-job-board w-full">
  <div class="flex justify-center p-8 {background}"
       style="--ft-primary:{settings.bgColor};--ft-secondary:{settings.bgGradient};
      {settings.bgType == 'image'?`background-image: url(${bgImage});`:''}
     "
     bind:this={parentNode}>
  <div  style="width: min({settings.width}px,100vw)">
    {#if settings.header}
      <div class="pb-8 w-full text-primary" style="--ft-primary:{settings.headerColor};">
        <div class="{editable? 'p-1 border border-dashed border-gray-400 ':''} w-full">
          <Editor bind:arr_html={header} {editable}/>
        </div> 
      </div>
    {/if}
  
    {#if settings.style == "grid"}
      <div class="grid {gridsVal} gap-{settings.gap} flex justify-center" >
        {#each cards as card,i}
          <Card bind:index {i} {card} {settings} {editable} />
        {/each}
      </div>
    {:else if settings.style == "carousel"}
      <Carousel bind:index bind:settings bind:cards />
    {:else}
      <div class=" gap-{settings.gap} flex flex-col justify-center w-full"
        style="">
        {#each cards as card,i}
          <List bind:index {i} {card} {settings} {editable} />
        {/each}
      </div>
    {/if}
  </div>
  
  {#if index>-1 }
    <Popup bind:card={cards[index]} bind:index {settings} {editable}  />
  {/if}
   
  </div>
  
</div>


