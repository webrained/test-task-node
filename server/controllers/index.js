const models = require('../models'); //models

// Get provider
exports.getProviders = (req, res) => {
    models.getProviders((result, err) => {
        if (err) {
            res.status(400).send({
                error: err
            });
            return false
        }
        res.status(200).send(result)
    })
};

// Add provider
exports.addProvider = (req, res) => {
    models.addProvider(req.body, (result, err) => {
        if (err) {
            res.status(400).send({
                error: err
            });
            return false
        }
        res.status(200).send(result)
    })
};

// Update provider
exports.updateProvider = (req, res) => {
    models.updateProvider(req.body, (result, err) => {
        if (err) {
            res.status(400).send({
                error: err
            });
            return false
        }
        res.status(200).send(result)
    })
};

// Delete provider
exports.deleteProvider = (req, res) => {
    models.deleteProvider(req.params.id, (result, err) => {
        if (err) {
            res.status(400).send({
                error: err
            });
            return false
        }
        res.status(200).send(result)
    })
};

// Get clients
exports.getClients = (req, res) => {
    models.getClients((result, err) => {
        if (err) {
            res.status(400).send({
                error: err
            });
            return false
        }
        res.status(200).send(result)
    })
};

// Add client
exports.addClient = (req, res) => {
    models.addClient(req.body, (result, err) => {
        if (err) {
            res.status(400).send({
                error: err
            });
            return false
        }
        res.status(200).send(result[0])
    })
};

// Update client
exports.updateClient = (req, res) => {
    models.updateClient(req.body, (result, err) => {
        if (err) {
            res.status(400).send({
                error: err
            });
            return false
        }
        res.status(200).send(result[0])
    })
};

// Get one client
exports.getClient = (req, res) => {
    models.getClient(req.params.id, (result, err) => {
        if (err) {
            res.status(400).send({
                error: err
            });
            return false
        }
        res.status(200).send(result[0])
    })
};

// Delete client
exports.deleteClient = (req, res) => {
    models.deleteClient(req.params.id, (result, err) => {
        if (err) {
            res.status(400).send({
                error: err
            });
            return false
        }
        res.status(200).send(result)
    })
};