<script>
   export let label
   export let link = "https://www.google.com/"
   export let settings = {}
   export let mt = 0
   export let ml = 0
   export let border
   export let borderColor
   export let color
   export let gradient
   export let text
   export let colorType


</script>


<a class="w-full" href={link} target={settings.target}>
    <div class="bg-blue-400 px-4 w-full py-2 rounded-md text-center text-tertiary {colorType == "color"?'bg-primary':'bg-gradient-to-r from-primary to-secondary'} " 
        style="--ft-primary:{color};--ft-secondary:{gradient};--ft-tertiary:{text};
            border-width:{border}px;border-color:rgb({borderColor});margin-top:{mt}px;margin-left:{ml}px;">
        {label}
    </div>
</a>