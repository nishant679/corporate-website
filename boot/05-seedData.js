'use strict';

const {AdminModel} = require('../models/admin.model');

async function seedAdminLogin() {
    const admin = new AdminModel({email: process.env.ADMIN_EMAIL});
    admin.setPassword(process.env.ADMIN_PASSWORD);
    try {
        await admin.save()
    } catch (e) {
        console.log('Admin Login Already Seeded')
    }
}


/**
 * Seed Data into Database
 * @param app
 */
module.exports = async function (app) {
    await seedAdminLogin();
};