export default () => ({
  'shopify-fields-plugin': {
    enabled: true,
    resolve: './src/plugins/shopify-fields-plugin',
    config: {
      shopifyShopUrl: process.env.SHOPIFY_SHOP_URL,
      shopifyApiKey: process.env.SHOPIFY_API_KEY,
      shopifyApiSecretKey: process.env.SHOPIFY_API_SECRET_KEY,
      shopifyAccessToken: process.env.SHOPIFY_ACCESS_TOKEN, // password
      shopifyApiVersion: process.env.SHOPIFY_API_VERSION,
      shopifyStorefrontApiAccessToken:
        process.env.SHOPIFY_STOREFRONT_API_ACCESS_TOKEN,
    },
  },
});
