module.exports = {
  module: {
    rules: [{
      test: require.resolve('zepto'),
      loader: 'exports-loader?window.Zepto!script-loader'
    }]
  }
}