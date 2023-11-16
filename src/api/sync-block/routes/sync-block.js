'use strict';

/**
 * sync-block router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::sync-block.sync-block');
