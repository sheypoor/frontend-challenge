import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			primary: string;
			secondary: string;
			error: string;
			white: string;
			disabled: string;
		};
		shadows: {
			main: string;
		};
		breakpoints: {
			medium: string;
		};
	}
}
