import Layout from './layout/index.vue'
import DefaultTheme from 'vitepress/theme'
import tBtn from './components/t-btn.vue'
import tTag from './components/t-tag.vue'
import { createHead } from '@vueuse/head'
import './custom.less'

export default {
	...DefaultTheme,
	Layout,
	enhanceApp({ app }) {
		app.use(createHead())
		app.component('t-btn', tBtn)
		app.component('t-tag', tTag)
	}
}
