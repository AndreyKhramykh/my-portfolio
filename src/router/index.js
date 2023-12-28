import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import ContactsPage from '../views/ContactsPage.vue'
import MainPage from '../views/MainPage.vue';
import ProjectsPage from '../views/ProjectsPage.vue'
import TechnologiesPage from '../views/TechnologiesPage.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL), !!! why's the error in this line?
	history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
		{
      path: '/projects',
      name: 'projects',
      component: ProjectsPage,
    },
		{
      path: '/technologies',
      name: 'technologies',
      component: TechnologiesPage,
    },
		{
      path: '/contacts',
      name: 'contacts',
      component: ContactsPage,
    }
  ]
})

export default router
