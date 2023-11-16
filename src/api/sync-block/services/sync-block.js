'use strict';

/**
 * sync-block service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sync-block.sync-block');
