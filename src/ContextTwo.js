import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
let ContextTwo = React.createContext({ key: 'some value' });

function ContextTwoProvider(props) {
	var [ name, setName ] = React.useState('red');
	return (
		<ContextTwo.Provider value={{ name, setName }}>
			<ThemeProvider theme={{ color: name, some: 100 }}>{props.children}</ThemeProvider>
		</ContextTwo.Provider>
	);
}

export { ContextTwo, ContextTwoProvider };
