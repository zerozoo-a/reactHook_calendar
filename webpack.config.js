const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== "production";
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
//use only test

module.exports = {
  name: "setVersionTest",
  mode: isDevelopment ? "development" : "production",
  //use only test
  // mode: "production",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: "./client.jsx",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                isDevelopment && require.resolve("react-refresh/babel"),
              ].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./__index.html",
    }),
  ],
  plugins: [
    // new BundleAnalyzerPlugin(),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  //use only test
  output: {
    filename: "client.js",
    // chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    // clean: true,
  },
  devServer: {
    port: 9000,
    publicPath: "/dist/",
    hot: true,
  },
};

// optimization: {
//   // runtimeChunk: "single",
//   splitChunks: {
//     cacheGroups: {
//       vendor: {
//         // test:/[\\/]node_modules[\\/](react|react-dom)[\\/]/,
//         test: /[\\/](react|react-dom)[\\/]/,
//         name: "vendor",
//         chunks: "all",
//       },
//     },
//   },
// },
//optimizationEnd,
