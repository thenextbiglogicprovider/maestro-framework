import path from 'path';
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpakcMD5hash from "webpack-md5-hash";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    // Extract the css from bundle
    new ExtractTextPlugin('[name].[contenthash].css'),
    // optimize plugin for cah busting
    new WebpakcMD5hash(),
    // optimize plugin for bundle splitting
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // dynamically generate HTML & reference bundled script
    new HtmlWebpackPlugin({
      template: 'src/views/index.html',
      minify: {
        removeAttributeQuotes: true,
        removeCDATASectionsFromCDATA: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeCommentsFromCDATA: true,
        removeEmptyElements: false,
        removeOptionalTags: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        useShortDoctype: true,
        removeScriptTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true
      },
      inject: true,
      // track js plugin
      trackJSToken:'fd8069dd9f2a49b484babb7428b95b1f'
    }),
    // Remove duplicate codes
    new webpack.optimize.DedupePlugin(),
    // Minify Js
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: '/node_modules/',
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap')
      }
    ]
  }
};
