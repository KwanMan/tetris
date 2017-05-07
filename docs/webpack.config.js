module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loaders: 'buble-loader',
        query: {
          objectAssign: 'Object.assign'
        }
      }
    ]
  }
}
