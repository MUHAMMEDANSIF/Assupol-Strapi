'use strict';

/**
 * payment-approval service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payment-approval.payment-approval');
