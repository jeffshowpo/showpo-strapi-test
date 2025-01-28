/**
 * home-page controller
 */

import { factories } from '@strapi/strapi';

function isOnSchedule(schedule: { startDate: string; endDate: string }) {
  const today = new Date();

  if (
    today >= new Date(schedule.startDate) &&
    today <= new Date(schedule.endDate)
  ) {
    return true;
  }

  return false;
}

export default factories.createCoreController(
  'api::home-page.home-page',
  ({ strapi }) => ({
    async find(ctx) {
      // Calling the default core action
      const { data, meta } = await super.find(ctx);

      const transformedData = data.map((d) => {
        const activeContents = d.content
          .map((c) => {
            if (c.__component === 'showpo.carousel') {
              return isOnSchedule(c.schedule) ? c : null;
            }

            return c;
          })
          .filter(Boolean);

        return {
          ...d,
          content: activeContents,
        };
      });

      return { data: transformedData, meta };
    },
  })
);
