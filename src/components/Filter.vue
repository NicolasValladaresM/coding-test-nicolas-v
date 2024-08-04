<template>
    <v-row class="mt-4 mb-8 mx-2 justify-end filter">
        <v-col class="d-flex elign-end flex-column  mt-6" cols="auto">
            <h1 class="mr-8">View All Articles?</h1>
            <p style="color:red">Some articles might not have story URLs or details.</p>

        </v-col>
        <v-btn-toggle class="mt-12 pl-4 mr-4 toggle">
            <v-btn @click="filter = true" :class="{ 'active-btn': filter }">
                Deactivate
                <v-icon color="white" class="pl-4">mdi-pause</v-icon>
            </v-btn>
            <v-btn @click="filter = false" class="ml-4">
                Activate
                <v-icon class="pl-4">mdi-play</v-icon>

            </v-btn>
        </v-btn-toggle>
    </v-row>

</template>

<script setup>
import { ref, watch } from "vue"

const filter = ref(true)
const emit = defineEmits(["update:filter"])

watch(filter, (newTilterValue) => {
    emit('update:filter', newTilterValue);
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
