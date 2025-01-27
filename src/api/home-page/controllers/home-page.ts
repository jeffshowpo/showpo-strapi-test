/**
 * home-page controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::home-page.home-page',
  ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx);
    },
  })
);
