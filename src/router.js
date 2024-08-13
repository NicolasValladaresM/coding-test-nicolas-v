import { createRouter, createMemoryHistory } from 'vue-router'
import Home from './Views/Home.vue'
import Updates from './Views/Updates.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/updates', component: Updates }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes

})

export default router
