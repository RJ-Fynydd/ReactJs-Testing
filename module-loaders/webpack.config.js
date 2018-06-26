var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

console.log(debug);

module.exports = {

  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/scripts.js",
  mode: "development",
  //mode: "production",

  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },

  plugins: debug ? [] : [   // If in debug then no plugins else add plugins
    new webpack.optimize.DedupePlugin(),    // Strip out any duplicate code
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),   // Get rid of src maps and comments/make production ready
  ],
};
