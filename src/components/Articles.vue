<template>
    <v-data-table-server :items="paginatedArticles" :headers="headers" :items-per-page="itemsPerPage"
        :items-length="filteredArticles.length" :loading="loading" :items-per-page-options="[20, 40, 60, 80, 100]"
        @update:items-per-page="itemsOnPage" @update:page="pageChanger" @update:options="loadArticles">

        <template v-slot:item.created_at="{ item }">
            <span>{{ formatDate(item.created_at) }}</span>
        </template>

        <template v-slot:item.read_more="{ item }">
            <v-btn variant="tonal" @click="$emit('open-dialog', item)">
                Details
            </v-btn>
        </template>

        <template v-slot:item.story_url="{ item }">
            <v-hover v-slot:default="{ isHovering, props }">
                <v-row :style="{
                    backgroundColor: isHovering ? 'grey' : 'transparent', borderRadius: '50%',
                    width: '35px', height: '35px', display: 'flex'
                }" class="ml-2 justify-lg-center">
                    <template v-if="item.story_url">
                        <a :href="item.story_url" target="_blank" rel="noopener noreferrer"
                            class="text-decoration-none">
                            <v-icon v-bind="props" size="35px" color="green">mdi-search-web</v-icon>
                        </a>
                    </template>
                    <template v-else>
                        <v-icon size="35px" color="red">mdi-close-octagon</v-icon>
                    </template>
                </v-row>
            </v-hover>
        </template>
    </v-data-table-server>
</template>

<script setup>

import { ref, computed, watch } from "vue"
import { getData } from "../services/getData.js"
import { formatDate } from "../utils/utilDate.js"

const props = defineProps(['filter']);
const articles = ref([])
const dialog = ref(false);
const itemsPerPage = ref(20);
const currentPage = ref(1);
const loading = ref(true);



const loadArticles = async () => {
    loading.value = true;
    try {
        articles.value = await getData();
        if (!articles.value) {
            articles.value = [];
            console.error("No articles found")
        }
    } catch (error) {
        console.error("Error loading articles:", error)
    }

    loading.value = false;
    currentPage.value = 1
};


const itemsOnPage = (numItems) => {
    itemsPerPage.value = numItems;
    currentPage.value = 1;
};

const pageChanger = (page) => {
    currentPage.value = page;
};

const filteredArticles = computed(() => {
    return props.filter ? articles.value.filter(article => article.story_url) : articles.value;
});

const paginatedArticles = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredArticles.value.slice(start, end);
});

watch(() => props.filter, () => {
    loadArticles();
});

const headers = [
    { title: 'Title', key: 'story_title', align: 'start', width: '40%', sortable: false },
    { title: 'Author', key: 'author', align: 'center', width: '20%', sortable: false },
    { title: 'Creation Date', key: 'created_at', width: '20px', sortable: false },
    { title: 'Read More', key: 'read_more', width: '10%', sortable: false },
    { title: 'Story URL', key: 'story_url', width: '10%', sortable: false },
]

</script>

<style scoped>
.v-data-table {
    background-color: #0e1638;
    border-radius: 30px;
}
</style>