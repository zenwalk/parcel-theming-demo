import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ContextOneProvider } from './ContextOne';
import { ContextTwoProvider } from './ContextTwo';
import { App } from './App';

function main(target, container) {
	ReactDOM.render(target, container);
}

main(
	<ContextOneProvider>
		<ContextTwoProvider>
			<App />
		</ContextTwoProvider>
	</ContextOneProvider>,
	document.getElementById('root')
);
