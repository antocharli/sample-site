import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './App/AppRoot';
import { AppContainer } from 'react-hot-loader';
import { ApiContent, DataLoading } from './App/context'

function render(Component) {
	const contextParam = new DataLoading()
	contextParam.data = __initialData

	ReactDOM.hydrate(
		<ApiContent.Provider value={contextParam}>
			<AppContainer>
				<Component />
			</AppContainer>
		</ApiContent.Provider>,
		document.getElementById('react-root')
	);
}
render(AppRoot);

if (module.hot) {
	module.hot.accept('./App/AppRoot.js', () => {
		const NewAppRoot = require('./App/AppRoot.js').default;
		render(NewAppRoot);
	});
}
