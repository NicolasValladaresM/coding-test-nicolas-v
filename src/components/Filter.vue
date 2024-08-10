<template>
    <v-row class="mt-4 mb-8 mx-2 justify-end filter">
        <v-col class="d-flex elign-end flex-column mt-6" cols="auto">
            <h1 class="mr-8">View All Articles?</h1>
            <p style="color:red">Some articles might not have story URLs, Titles or Details.</p>
        </v-col>
        <v-col class="d-flex flex-column align-center mt-8" cols="auto">
            <v-switch inset v-model="filter" class="mt-4 mr-8" color="green" label="Filter Articles"></v-switch>
        </v-col>
    </v-row>

</template>

<script setup>
import { ref, watch } from "vue"


const filter = ref(true)
const emit = defineEmits(["update:filter"])

watch(filter, (newFilterValue) => {
    emit('update:filter', newFilterValue);
})

</script>

<style scoped>
.filter {
    background-color: #0e1638;

}

.toggle {
    border-radius: 20px;
}
</style>
