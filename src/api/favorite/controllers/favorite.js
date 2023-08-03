"use strict";

/**
 * favorite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::favorite.favorite");

// "use strict";

// module.exports = {
//   async create(ctx) {
//     const { user, recipe } = ctx.request.body;

//     const existingFavorite = await strapi.services.favorite.findOne({
//       user,
//       recipe,
//     });

//     if (existingFavorite) {
//       return ctx.badRequest("Recipe is already in favorites");
//     }

//     const favorite = await strapi.services.favorite.create({
//       user,
//       recipe,
//     });

//     return favorite;
//   },

//   async delete(ctx) {
//     const { id } = ctx.params;

//     const favorite = await strapi.services.favorite.delete({
//       id,
//     });

//     return favorite;
//   },
// };
