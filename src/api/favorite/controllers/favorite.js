"use strict";

/**
 * favorite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::favorite.favorite",
  ({ strapi }) => ({
    async me(ctx) {
      const user = ctx.state.user;
      if (!user) {
        return ctx.badRequest(null, [
          { messages: [{ id: "No authorization header was found" }] },
        ]);
      }

      const data = await strapi.services.favorite.findMany(
        "api::favorite.favorite",
        {
          filters: {
            user: {
              id: user.id,
            },
          },
        }
      );

      if (!data) {
        return ctx.notFound();
      }

      const sanitizedEvents = await this.sanitizeOutput(data, ctx);

      return this.transformResponse(sanitizedEvents);
    },
  })
);
