import { ref, watch } from 'vue'

import {
	watchOnce,
	useTimeoutFn,
	useIntervalFn,
	useMediaQuery,
	useElementVisibility
} from '@vueuse/core'

export default config => {
	let { paths, editorEl, resolver } = config
	const {
		atom: atomResolve,
		largeScreen: largeScreenResolve,
		smallScreen: smallScreenResolve
	} = resolver
	const typingEl = ref(null)
	const visible = useElementVisibility(typingEl)
	const isLargeScreen = useMediaQuery('(min-width: 960px)')

	paths = paths.map(path => {
		return {
			...path,
			ref: ref(path.ref)
		}
	})
	const refs = paths.map(path => path.ref)
	watchOnce(visible, () => {
		const { editorRef } = editorEl.value
		const moveCursor = p => editorRef.setCursor(...p)
		const typing = v => editorRef.replaceSelection(v)
		// 小屏不做动画
		const isSmallScreen = !isLargeScreen.value
		if (isSmallScreen) {
			paths.forEach(path => {
				const { text, ref, cursor } = path
				moveCursor(cursor)
				const [refText, typingText] =
					smallScreenResolve(text)
				ref.value += refText
				typing(typingText)
			})
			return [typingEl, ...refs]
		}

		// 大屏做动画
		paths = paths.map(path => {
			return {
				...path,
				text: path.text.split(/ /g).map(atom => [...atom])
			}
		})

		let path = { text: [] },
			atom = []
		const { pause, resume } = useIntervalFn(() => {
			const shouldGetPath =
				paths.length > 0 &&
				path.text.length <= 0 &&
				atom.length <= 0
			if (shouldGetPath) {
				path = paths.shift()
				moveCursor(path.cursor)
			}

			const shouldGetAtom =
				atom.length <= 0 && path.text.length > 0
			if (shouldGetAtom) {
				atom = atomResolve(path.text.shift())
				pause()
				return useTimeoutFn(() => {
					if (visible.value) {
						resume()
					}
				}, 250)
			}
			const shouldStop =
				paths.length <= 0 &&
				path.text.length <= 0 &&
				atom.length <= 0
			if (shouldStop) {
				return pause()
			}

			const ch = atom.shift()
			const [refCh, typingCh] = largeScreenResolve(ch)
			path.ref.value += refCh
			typing(typingCh)
		}, 120)

		watch(visible, v => {
			v ? resume() : pause()
		})
	})

	return [typingEl, ...refs]
}
