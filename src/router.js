import { createWebHistory, createRouter } from 'vue-router'

import Main from './routes/Main.vue'
import VoxelSmith from './routes/Projects/VoxelSmith.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/voxel-smith', component: VoxelSmith },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router