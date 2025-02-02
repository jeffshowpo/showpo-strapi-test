export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: [env('CLIENT_URL'), 'https://accounts.shopify.com/'], // Usually the frontend application URL
      async handler(uid, { documentId, locale, status }) {
        const document = await strapi.documents(uid).findOne({ documentId });

        const pathname = getPreviewPathname(uid, { locale, document, status });

        const previewUrl = `${env('CLIENT_URL')}${pathname}`;

        // console.log(previewUrl);

        return previewUrl;
      },
    },
  },
});

// Function to generate preview pathname based on content type and document
const getPreviewPathname = (uid, { locale, document, status }): string => {
  // Handle different content types with their specific URL patterns
  switch (uid) {
    // Handle pages with predefined routes
    case 'api::home-page.home-page':
      return status === 'draft'
        ? `/content/strapi-home-page?preview=true`
        : `/content/strapi-home-page`;
    default: {
      return null;
    }
  }
};
