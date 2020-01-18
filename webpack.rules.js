module.exports = [
	// Add support for native node modules
	{
		test: /\.node$/,
		use: 'node-loader',
	},
	{
		test: /\.(m?js|node)$/,
		parser: { amd: false },
		use: {
			loader: '@marshallofsound/webpack-asset-relocator-loader',
			options: {
				outputAssetBase: 'native_modules',
			},
		},
	},
	{
		test: /\.tsx?$/,
		exclude: /(node_modules|.webpack)/,
		loaders: [
			{
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
				},
			},
		],
	},
	// WOFF Font
	{
		test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
		use: {
			loader: 'url-loader',
			options: {
				limit: 10000,
				mimetype: 'application/font-woff',
			},
		},
	},
	// WOFF2 Font
	{
		test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
		use: {
			loader: 'url-loader',
			options: {
				limit: 10000,
				mimetype: 'application/font-woff',
			},
		},
	},
	// TTF Font
	{
		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
		use: {
			loader: 'url-loader',
			options: {
				limit: 10000,
				mimetype: 'application/octet-stream',
			},
		},
	},
	// EOT Font
	{
		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		use: 'file-loader',
	},
	// SVG Font
	{
		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		use: {
			loader: 'url-loader',
			options: {
				limit: 10000,
				mimetype: 'image/svg+xml',
			},
		},
	},
];
