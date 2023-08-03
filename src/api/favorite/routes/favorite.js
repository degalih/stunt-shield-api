"use strict";

/**
 * favorite router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::favorite.favorite");

// "use strict";

// module.exports = {
//   async create(data) {
//     return await strapi.query("favorite").create(data);
//   },

//   async findOne(params) {
//     return await strapi.query("favorite").findOne(params);
//   },

//   async delete(params) {
//     return await strapi.query("favorite").delete(params);
//   },
// };
