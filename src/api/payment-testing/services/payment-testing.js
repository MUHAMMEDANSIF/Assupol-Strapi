'use strict';

/**
 * payment-testing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payment-testing.payment-testing');
