const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const MyPlugin = require("./Plugin/myPlugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: "/",
    filename: "dynamicOutput/[name].js",
    chunkFilename: "dynamicOutput/[name].chunk.js",
    // library: {
    //   name: 'webpackNumbers',
    //   type: 'umd',
    // },
    chunkLoadingGlobal: 'chunkLoading'  // beforeName: jsonpFunction !important feature
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },
      // {
      //   test: /\.js$/,
      //   use: [
      //    {
      //       loader: path.resolve(__dirname, './myLoader/myLoaders.js'),
      //     },
      //   ]
      // },
    ],
  },
  devServer: {
    static: './dist',
  },
  devtool: 'inline-source-map',
  plugins: [
    // new MyPlugin({
    //   name: '一尾流莺'
    // })
    // new HtmlWebpackPlugin({
    //  title: 'Development',
    // }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'disabled',
    //   generateStatsFile: true,
    //   statsOptions: { source: false }
    // }),
  ],
  optimization: {
    // usedExports: true,
    // runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
};