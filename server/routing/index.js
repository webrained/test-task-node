module.exports = function(app, config) {
    const api = config.server.api; // Api
    const controllers = require('../controllers'); // Controllers

    // Providers
    app.route(`${api}/providers`)
        .get(controllers.getProviders)
        .post(controllers.addProvider)
        .put(controllers.updateProvider);

    app.route(`${api}/provider/:id`)
        .delete(controllers.deleteProvider);

    // Clients
    app.route(`${api}/clients`)
        .get(controllers.getClients)
        .post(controllers.addClient)
        .put(controllers.updateClient);

    app.route(`${api}/client/:id`)
        .get(controllers.getClient)
        .delete(controllers.deleteClient)
};