
import { ref, computed } from "vue"
import { getData } from "../../services/getData.js"


export const useArticles = () => {
    const articles = ref([])
    const filter = ref(true)
    const dialog = ref(false);
    const itemsPerPage = ref(20);
    const currentPage = ref(1);
    const loading = ref(true);
    const selectedArticle = ref(null);
    

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
        return filter.value ? articles.value.filter(article => article.story_url) : articles.value;
    });

    const openDialog = (article) => {
        console.log('Opening dialog with article:', article);
        selectedArticle.value = article;
        dialog.value = true;
    };



    const paginatedArticles = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage.value;
        const end = start + itemsPerPage.value;
        return filteredArticles.value.slice(start, end);
    });

    const headers = [
        { title: 'Title', key: 'story_title', align: 'start', width: '40%', sortable: false },
        { title: 'Author', key: 'author', align: 'center', width: '20%', sortable: false },
        { title: 'Creation Date', key: 'created_at', width: '20px', sortable: false },
        { title: 'Read More', key: 'read_more', width: '10%', sortable: false },
        { title: 'Story URL', key: 'story_url', width: '10%', sortable: false },
    ]

    return {
        filter,
        dialog,
        currentPage,
        loading,
        selectedArticle,
        filteredArticles,
        paginatedArticles,
        itemsPerPage,
        headers,
        itemsOnPage,
        pageChanger,
        openDialog,
        loadArticles
    }

}

