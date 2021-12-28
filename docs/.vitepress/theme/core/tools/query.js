/**
 * 查询节点信息
 * https://uniapp.dcloud.io/api/ui/nodes-info?id=selectorqueryselectall
 */
export default (vm, selector, more) => {
	const queryHandle = resolve => {
		const method = more ? 'selectAll' : 'select'
		const ql = uni
			.createSelectorQuery()
			.in(vm)
			[method](selector)
		ql.boundingClientRect(rect => resolve(rect)).exec()
	}
	return new Promise(queryHandle)
}
