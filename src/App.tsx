import React from 'react';
import { ThemeProvider } from '@emotion/react';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import { GlobalContextProvider } from './store';
import { theme } from './styles/theme';

function App() {
	return (
		<GlobalContextProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Routes />
			</ThemeProvider>
		</GlobalContextProvider>
	);
}

export default App;
