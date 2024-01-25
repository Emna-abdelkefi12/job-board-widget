<script>
   export let label
   export let link = "https://www.google.com/"
   export let settings = {}
   export let mt = 0
   export let ml = 0
   export let border
   export let borderColor

</script>


<a class="w-full" href={link} target={settings.target}>
    <div class="bg-blue-400 px-4 w-full py-2 rounded-md text-center" 
        style="border-width:{border}px;border-color:rgb({borderColor});margin-top:{mt}px;margin-left:{ml}px;">
        {label}
    </div>
</a>