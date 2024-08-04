    
        
    <template>

        <v-row>
            <Filter v-model:filter="filter" />
        </v-row >

    <v-data-table :items="filteredArticles" class="mt-6 mx-6"  :items-per-page-options="[
    { value: 10, title: '10' },
    { value: 20, title: '20' },
    { value: 30, title: '30' }
  ]"
    >
        <template v-slot:default="{ items }">
            <thead>
                <tr>
                    <th style="width: 400px; font-size: large;" class="font-weight-bold">Title</th>
                    <th style="width: 200px;  font-size: large;" class="font-weight-bold">Author</th>
                    <th style="width: 200px;  font-size: large;" class="font-weight-bold">Creation Date</th>
                    <th style="width: 100px;  font-size: large;" class="font-weight-bold">Read More</th>
                    <th style="width: 100px;  font-size: large;" class="font-weight-bold">Story URL</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td>
                        <template v-if="item.story_title">
                            {{ item.story_title }}
                        </template>
                        <template v-else>
                            {{ item.title }}
                        </template>
                    </td>
                    <td>{{ item.author }}</td>
                    <td>{{ item.created_at }}</td>
                    <td>
                        <v-row>
                            <v-btn variant="tonal" @click="openDialog(item)">
                                Details
                            </v-btn>
                        </v-row>
                    </td>
                    <v-hover v-slot:default="{ isHovering, props }">
                        <td>
                            <v-row
                                :style="{
                                    backgroundColor: isHovering ? 'grey' : 'transparent', borderRadius: '50%',
                                    width: '35px', height: '35px', display: 'flex'
                                }" class="ml-2 justify-lg-center" >
                                <template v-if="item.story_url">
                                    <a :href="item.story_url" target="_blank" rel="noopener noreferrer"
                                        class="text-decoration-none">
                                        <v-icon v-bind="props" size="35px" color="green" >mdi-search-web</v-icon>
                                    </a>
                                </template>
                                <template v-else>
                                    <v-icon size="35px" color="red">mdi-close-octagon</v-icon>
                                </template>
                            </v-row>
                        </td>
                    </v-hover>
                </tr>
            </tbody>

        </template>

    </v-data-table>

    <Dialog :article="selectedArticle" :dialog="dialog" @update:dialog="dialog = $event" />

</template>

<script setup>
import { ref, computed } from "vue"
import { getData } from "../services/getData.js"
import Dialog from "./Dialog.vue";
import Filter from "./Filter.vue";

const articles = ref([])
const filter = ref(true)
const dialog = ref(false);

articles.value = await getData()
const filteredArticles = computed(() => {
    return filter.value ? articles.value.filter(article => article.story_url) : articles.value;
});

const selectedArticle = ref(null);
const openDialog = (article) => {
    selectedArticle.value = article;
    dialog.value = true;
};




</script>

<style scoped>
.v-data-table {
  background-color: #0e1638;
  border-radius: 30px;
}
</style>