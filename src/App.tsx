import React from 'react';
import { ThemeProvider } from '@emotion/react';

import GlobalStyles from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import Routes from '@routes';
import { GlobalContextProvider } from '@store';

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
