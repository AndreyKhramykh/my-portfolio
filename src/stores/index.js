// import { computed, ref } from 'vue'

import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
	state: () => {
		return {
			projectsArray: [
				{title: 'Movie-finder', description: 'Movie-finder app, powered by TMDb API', webLink: 'https://andreykhramykh.github.io/movie-finder/#/', gitHubLink: 'https://github.com/AndreyKhramykh/movie-finder', image: '0.jpg'},
				{title: 'Weather-app', description: 'Weather-app, includes all cities in the world, powered by OpenWeatherMap API', webLink: 'https://andreykhramykh.github.io/weather-app/', gitHubLink: 'https://github.com/AndreyKhramykh/weather-app', image: '1.jpg'},
				{title: 'Recipes-page', description: 'Simple example of blog page, about different recipes', webLink: 'https://andreykhramykh.github.io/recipes-page/#/', gitHubLink: 'https://github.com/AndreyKhramykh/recipes-page', image: '2.jpg'},
				{title: 'Tower-of-Hanoi', description: 'Popular logic puzzle on JavaScript, possible game with 3 to 8 blocks', webLink: 'https://andreykhramykh.github.io/tower-of-hanoi/#/', gitHubLink: 'https://github.com/AndreyKhramykh/tower-of-hanoi', image: '3.jpg'},
				{title: 'Furnity-landing-example', description: 'Simple example of landing page for home furniture trading', webLink: 'https://andreykhramykh.github.io/furnity/', gitHubLink: 'https://github.com/AndreyKhramykh/furnity', image: '4.jpg'},
				{title: 'To-Do-List', description: 'To-do list by day of the week, with the ability to mark completed tasks, written in vanilla JavaScript', webLink: 'https://andreykhramykh.github.io/to-Do-list/', gitHubLink: 'https://github.com/AndreyKhramykh/to-Do-list', image: '5.jpg'},
				{title: 'Education-site', description: 'A simple site with subjects for learning, filtered by topics', webLink: 'https://andreykhramykh.github.io/education-site/', gitHubLink: 'https://github.com/AndreyKhramykh/education-site', image: '6.jpg'},
				{title: 'Bhromaon-landing-example', description: 'Example of landing page', webLink: 'https://andreykhramykh.github.io/layout-example-vue3/#/', gitHubLink: 'https://github.com/AndreyKhramykh/layout-example-vue3', image: '7.jpg'},
				{title: 'Calculator', description: 'Simple calculator on Vue.js', webLink: 'https://andreykhramykh.github.io/vue3-calc/', gitHubLink: 'https://github.com/AndreyKhramykh/vue3-calc', image: '8.jpg'},
				{title: 'Toy-stream', description: 'Example of GameDev page', webLink: 'https://andreykhramykh.github.io/toy-stream/#/', gitHubLink: 'https://github.com/AndreyKhramykh/toy-stream', image: '9.jpg'},
			],
			technologies: ['JavaScript', 'HTML5, CSS3, SCSS', 'Tailwind', 'NODE.js', 'VUE, VUEX', 'Vite', 'Git', 'Pinia', 'Axios', 'Postman', 'Rest API'],
			technologiesImg: ['0.png', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png']
		}
	}
})
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
