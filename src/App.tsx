import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import { GlobalContextProvider } from './store';

function App() {
	return (
		<GlobalContextProvider>
			<GlobalStyles />
			<Routes />
		</GlobalContextProvider>
	);
}

export default App;
