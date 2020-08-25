const path = require('path')
// Elimina la carpeta dist antes de empaquetar
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// Crea el index.html con los nombres actualizados
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({title: 'Clock'})],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|mp3)$/,
        use: ['file-loader'],
      },
    ],
  },
}
