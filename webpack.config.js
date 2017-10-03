const webpack = require('webpack');
const { resolve } = require('path');

// We require the webpack package and the resolve functionality from the path package at the top of the file.
//
// The path library is a dependency of Webpack. It allows us to resolve file paths, as seen in lines above that read resolve(). Resolving a path is the act of providing a dedicated tool (like the path library) the name of a directory or file, and relying upon it to find the exact path.
//
// This allows us to say things like resolve('file_name') instead of ./../much/longer/filepath/to/the/file_name.js. It's essentially a shortcut, so we don't have to meticulously list the exact file path to each directory or file we need. As you can imagine, this can also prevent errors.


module.exports = {

  entry: [
    resolve(__dirname, "src") + "/index.jsx"
  ],
//   Within the module, we declare an entry specifying the file where the bundling process starts. Similar to the main.ts file we used in Angular, we specify that the entry point is index.jsx.
//
// An entry point is the file responsible for instructing the module bundler how to build the application. The browser loads this file first. Similar to a jQuery selector, our React app needs a place to reference in the DOM and manipulate as it renders our code.

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
  },
  // this section simply instructs Webpack to place bundled code in react-help-queue/build/app.bundle.js.

  resolve: {
    extensions: [ '.js', '.jsx' ]
  },

  // The resolve option instructs Webpack to look for files with specific extensions. By specifying the extensions here, we can later import files in our project without explicitly listing an extension. (ie,: require(myComponent) instead of: require(myComponent.jsx)). This is certainly not mandatory, but a helpful feature.



  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "es2015",
            "react"
          ]
        }
      },
    ],
  }
  // test takes a RegEx expression indicating which files the loader should transform.
  //
  // loader details which loader tool will be responsible for transforming these files.
  //
  // excluded outlines which files, if any, should not be transformed. We don't need to transform our npm dependencies, so we list node_modules here.
  //
  // options tells Babel what kind of project we’re working with (React), and what version of JavaScript we want our code transpiled to (ES5).
};
