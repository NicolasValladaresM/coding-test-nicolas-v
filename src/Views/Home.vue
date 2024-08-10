<template>
    <v-row class="fill-width" >
        <Filter v-model:filter="filter" />
    </v-row>

    <v-container fluid>
        <v-row class="justify-center mx-4" >
            <Articles :filter="filter" @open-dialog="openDialog" /> 
        </v-row>
    </v-container>

    <Dialog :article="selectedArticle" :dialog="dialog" @update:dialog="dialog = $event" />


</template>
<script setup>

import { ref } from "vue";
import Articles from "@/components/Articles.vue";
import Filter from "@/components/Filter.vue";
import Dialog from "@/components/Dialog.vue";


const filter = ref(true);
const dialog = ref(false);
const selectedArticle = ref(null);

const openDialog = (article) => {
  selectedArticle.value = article;
  dialog.value = true;
};



</script>
