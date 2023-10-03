'use strict';

/**
 * registration-pending-email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::registration-pending-email.registration-pending-email');
