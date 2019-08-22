const path = require('path');

module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme'],
	plugins: [
		'babel',
		'import',
		'jsx-a11y',
		'react',
		'prettier',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	// settings: {
	// 	'import/resolver': {
	// 		webpack: {
	// 			config: path.join(__dirname, 'config', 'webpack.base.config.js'),
	// 		},
	// 	},
	// },
	rules: {
		'indent':'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb is using .jsx
        'arrow-body-style': 'off',
	},
};