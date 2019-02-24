import React from 'react'

const ApiContent = React.createContext({load() {} });

class DataLoading {
    promiseSet = new Set()
    result = []
    
    /**
     * @todo probably need to add a key
     */
    load(promise) {
    	this.promiseSet.add(promise)
    }
  
    get hasPromises() {
    	return this.promiseSet.size > 0
    }
  
    all() {
    	if (this.result.length > 0) {
    		return Promise.resolve(this.result)
    	}
  
    	const loading = Promise.all(this.promiseSet)
    	loading.then(result => {
    		this.result = result
    	})
  
    	return loading
    }
  
    clear() {
    	this.result = []
    	this.promiseSet.clear()
    }
}

export class RenderPromisesProvider extends React.Component{
	render() {
		return React.createElement(
			DataLoadingContext.Provider,
			{ value: this.props.contextValue },
			this.props.children
		)
	}
}

export { ApiContent, DataLoading }
export default ApiContent