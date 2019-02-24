export async function getDataFromTree(contextObj) {
	const contextValue = contextObj
	const data = await contextValue.all()
	contextValue.clear()
	return data
}

export function getFromTree(args) {
	return {
		getDataFromTree: (args) => getDataFromTree(args),
	}
}
