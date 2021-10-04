module.exports = {
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'] 
      }
    ]
  }
};