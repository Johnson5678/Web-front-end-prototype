const withCSS = require('@zeit/next-css')

const nextConfig = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    return config
  }
}

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCSS(nextConfig)

// const withCSS = require('@zeit/next-css')
// const withSass = require('@zeit/next-sass')
// const withPlugins = require('next-compose-plugins')

// const sassConfig = {
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: '[local]___[name]___[hash:base64:5]'
//   }
// };

// const nextConfig = {
//   webpack: function (config) {
//     config.module.rules.push({
//       test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 100000,
//           name: '[name].[ext]'
//         }
//       }
//     }, {
//         test: /\.(png|jpg|gif)$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               limit: 100000,
//               name: '[name].[ext]'
//             },
//           },
//         ],
//       })
//     return config
//   }
// }

// module.exports = withPlugins([
//   [withSass, sassConfig],
// ], nextConfig)

