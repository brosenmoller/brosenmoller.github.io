import { createWebHistory, createRouter } from 'vue-router'

import Main from './routes/Main.vue'
import VoxelSmith from './routes/Projects/VoxelSmith.vue';
import EnigmaEscape from './routes/Projects/EnigmaEscape.vue';
import TerrainGeneration from './routes/Projects/TerrainGeneration.vue';
import PaintOverWar from './routes/Projects/PaintOverWar.vue';
import UnderOurWing from './routes/Projects/UnderOurWing.vue';
import Liturnian from './routes/Projects/Liturnian.vue';
import Forensick from './routes/Projects/Forensick.vue';
import ProfessorBubble from './routes/Projects/ProfessorBubble.vue';
import MasterclassUnityProjectSetup from './routes/MasterclassUnityProjectSetup.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/voxel-smith', component: VoxelSmith },
  { path: '/enigma-escape', component: EnigmaEscape },
  { path: '/terrain-generation', component: TerrainGeneration },
  { path: '/paint-over-war', component: PaintOverWar },
  { path: '/under-our-wing', component: UnderOurWing },
  { path: '/liturnian', component: Liturnian },
  { path: '/forensick', component: Forensick },
  { path: '/professor-bubble', component: ProfessorBubble },
  { path: '/masterclass-unity-project-setup', component: MasterclassUnityProjectSetup },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router