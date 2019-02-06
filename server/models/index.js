// Collection Models
const schema = require('./schema/index');

const config = require('../../config');

// Mongoose
const mongoose = require('mongoose');

mongoose.connect(config.db.path, { useNewUrlParser: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {

    // Get providers
    exports.getProviders = (cb) => {
        let Providers = schema.providerSchema;

        Providers.find({}, (err, res) => {
            cb(res, err)
        })
    };

    // Add provider
    exports.addProvider = (params, cb) => {
        let providerSchema = new schema.providerSchema(params);

        providerSchema.save((err, response) => {
            cb(response, err)
        })
    };

    // Update provider
    exports.updateProvider = (params, cb) => {
        let provider = schema.providerSchema;

        provider.findOneAndUpdate({ _id: params.id }, { name: params.name }, { new: true }, (err, response) => {
            cb(response, err)
        })
    };

    // Delete provider
    exports.deleteProvider = (id, cb) => {
        let provider = schema.providerSchema;

        provider.deleteOne({ _id: id }, (err, response) => {
            cb(response, err)
        })
    };

    // Get clients
    exports.getClients = (cb) => {
        let Clients = schema.clientSchema;

        let providers = [];
        Clients.find()
            .populate({
                path: 'providers',
                select: 'name -_id',
            })
            .exec(function (err, res) {
                if (err) {
                    cb(undefined, err);
                    return
                }
                cb(providersToList(res), err)
            });
    };

    // Add client
    exports.addClient = (params, cb) => {
        let userSchema = new schema.clientSchema(params);
        let Clients = schema.clientSchema;

        userSchema.save((err, response) => {
            if (err) {
                cb(undefined, err);
                return
            }
            Clients.findById(response._id)
                .populate({
                    path: 'providers',
                    select: 'name -_id',
                })
                .exec(function (err, res) {
                    if (err) {
                        cb(undefined, err);
                        return
                    }
                    let arr = [];
                    arr.push(res);
                    cb(providersToList(arr, 'add'), err)
                });
            
        })
    };

    // Update client
    exports.updateClient = (params, cb) => {
        let client = schema.clientSchema;
        let Clients = schema.clientSchema;

        client.findOneAndUpdate({ _id: params._id }, params, { new: true }, (err, response) => {
            if (err) {
                cb(undefined, err);
                return
            }
            Clients.findById(response._id)
                .populate({
                    path: 'providers',
                    select: 'name -_id',
                })
                .exec(function (err, res) {
                    if (err) {
                        cb(undefined, err);
                        return
                    }
                    let arr = [];
                    arr.push(res);
                    cb(providersToList(arr, 'update'), err)
                });
        })
    };

    // Get one client
    exports.getClient = (id, cb) => {
      let client = schema.clientSchema;

      client.findById(id)
          .populate({
              path: 'providers',
              select: 'name',
          })
          .exec(function (err, res) {
              if (err) {
                  cb(undefined, err);
                  return
              }
              let arr = [];
              arr.push(res);
              cb(providersToList(arr, 'one'), err)
          });
    };

    // Delete client
    exports.deleteClient = (id, cb) => {
        let client = schema.clientSchema;

        client.deleteOne({ _id: id }, (err, response) => {
            cb(response, err)
        })
    };
    
    
    function providersToList(res, action) {
        let resToJSON = JSON.stringify(res);
        let response = [...JSON.parse(resToJSON)];
        for (let i in response) {
            let name = response[i].providers.map((item) => {
                return item['name']
            });
            let id = response[i].providers.map((item) => {
                return item['_id']
            });
            if (action !== 'one') {
                response[i].providers = name.join()
            }else {
                response[i].providers = id
            }
        }
        return response
    }
});