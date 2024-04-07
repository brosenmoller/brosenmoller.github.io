import { createMemoryHistory, createRouter } from 'vue-router'

import Main from './routes/Main.vue'

const routes = [
  { path: '/', component: Main },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router