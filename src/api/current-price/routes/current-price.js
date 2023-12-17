'use strict';

/**
 * current-price router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::current-price.current-price');
