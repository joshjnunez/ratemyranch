const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./client/src/index.html",
 filename: "./index.html"
});
module.exports = {
entry: "./client/src/index.js",
mode: "development",
  module: {
    rules: [{
   test: /\.js$/,
   exclude: /node_modules/,
   use: {
     loader: "babel-loader"
   }
 },
  {
   test: /\.css$/,
   use: ["style-loader", "css-loader"]
  }
]},
 plugins: [htmlPlugin]
};