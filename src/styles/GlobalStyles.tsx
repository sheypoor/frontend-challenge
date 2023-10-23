import { Global, css } from '@emotion/react';

function GlobalStyles() {
	return (
		<Global
			styles={css`
				*,
				*:before,
				*:after {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					font-family: 'Nunito Sans', sans-serif;
				}

				body {
					background-color: #123456;
				}
			`}
		/>
	);
}

export default GlobalStyles;
