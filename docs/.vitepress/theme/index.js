import Layout from './layout/index.vue'
import DefaultTheme from 'vitepress/theme'
import tBtn from './components/t-btn.vue'
import tTag from './components/t-tag.vue'
import './custom.less'

export default {
	...DefaultTheme,
	Layout,
	enhanceApp({ app }) {
		app.component('t-btn', tBtn)
		app.component('t-tag', tTag)
	}
}
