import Layout from './layout/index.vue'
import tBtn from './components/t-btn.vue'
import tTag from './components/t-tag.vue'
import DefaultTheme from 'vitepress/theme'
// import tAtom from './components/t-atom/t-atom.vue'
// import tTheme from './components/t-theme/t-theme.vue'
// import tMixins from './components/t-mixins/t-mixins.vue'
import './custom.less'

export default {
	...DefaultTheme,
	Layout,
	enhanceApp({ app }) {
		// app.component('t-atom', tAtom)
		// app.component('t-mixins', tMixins)
		// app.component('t-theme', tTheme)
		app.component('t-btn', tBtn)
		app.component('t-tag', tTag)
	}
}
