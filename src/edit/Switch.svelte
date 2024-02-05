<script>
	import {createEventDispatcher} from "svelte"
	const dispatch = createEventDispatcher()
	export let value = false
	
	function toggle() {
    	value = !value;
      dispatch('toggle')
	}
</script>
<label
      class="inline-flex relative items-center cursor-pointer"
    >
      <input
        type="checkbox"
        value=""
        class="sr-only peer"
        checked={value}
        on:click={toggle}
      />
      <div key=k63
        class="w-8 h-4 bg-gray-300 rounded-full peer dark:bg-gray-700  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"
      />
  </label>