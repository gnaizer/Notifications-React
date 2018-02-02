var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require ('path');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: './src/index.js',
    // contact: './src/contact.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback:'style-loader',
            use:['css-loader','sass-loader'],
            publicPath: ''
        }) 
    },
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['file-loader?name=img/[name].[ext]',
              // 'file-loader?name=[hash:6].[ext]&outputPath&publicPath=img/',
              'image-webpack-loader'
      ]
    },
    { test: /\.(woff|woff2|eot|ttf|svg)$/, 
      loader: 'url-loader?limit=200000' },
    // {
    //   test   : /vendor\/.+\.(png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
    //   loader: 'file-loader'
    //   // loader : 'file-loader'
    // //   use: ['file-loader?name=img/[name].[ext]',
    // //           'file-loader?name=[hash:6].[ext]&outputPath&publicPath=img/',
    // //           'image-webpack-loader'
    // //   ]
    // },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
             title: 'Project Demo',
             hash: true,
             template: './src/index.html', 
        }),
        new ExtractTextPlugin({
           filename: "app.css",
          //  disable: false,
          //  allChunks: true
        }),
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NamedModulesPlugin()
    ]
}