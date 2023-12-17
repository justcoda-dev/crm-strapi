'use strict';

/**
 * current-price service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::current-price.current-price');
