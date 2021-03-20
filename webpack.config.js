/**
 * webpack.config.js
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          { 
            loader: "css-loader", 
            options: { 
              url: false,
            } 
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};
