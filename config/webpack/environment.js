const { environment } = require('@rails/webpacker')
const webpack = require('webpack')
const datatables = require('datatables')

environment.plugins.prepend(
    'Provide',
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      DataTable: 'datatables.net'
    })
  )

/**
 * To use jQuery in views
 */
environment.loaders.append('expose', {
  test: require.resolve('jquery'),
  use: [{
    loader: 'expose-loader',
    options: '$'
  }]
})

  
module.exports = environment
