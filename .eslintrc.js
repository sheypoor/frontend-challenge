module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'eslint-plugin-prettier'],
	rules: {
		'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'off',
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				trailingComma: 'es5',
				semi: false,
				jsxSingleQuote: true,
				singleQuote: true,
				useTabs: true,
			},
		],
	},
}
