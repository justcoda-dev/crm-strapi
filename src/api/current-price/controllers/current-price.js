'use strict';

/**
 * current-price controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::current-price.current-price');
