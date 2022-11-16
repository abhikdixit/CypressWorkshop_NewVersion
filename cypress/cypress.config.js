const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.spreecommerce.org/spree_oauth/token'
  },
  
})