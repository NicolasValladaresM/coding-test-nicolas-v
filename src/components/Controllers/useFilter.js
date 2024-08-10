import { ref, watch } from "vue"


export const useFilter = () => {


    const filter = ref(true)
    const emit = defineEmits(["update:filter"])
    
    watch(filter, (newTilterValue) => {
        emit('update:filter', newTilterValue);
    })
    

    return {filter}

}