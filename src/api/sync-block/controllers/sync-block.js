'use strict';

/**
 * sync-block controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sync-block.sync-block');
