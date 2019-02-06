const mongoose = require('mongoose');

const models = require('./models.js');

module.exports = {
    providerSchema: mongoose.model('Provider', models.providerSchema, 'providers'),
    clientSchema: mongoose.model('Client', models.clientSchema, 'clients')
};