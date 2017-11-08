'use strict'
const adodb = require('edge-adodb');
const Client = require('knex').Client;
const {uniqueId} = require('lodash');

class ClientAdodb extends Client {
    constructor(options = {}) {
        super();
        if(options.connection) {
            this._connection = adodb.connect(options.connection.filename);
        }
    }

    get dialect(){
        return 'generic';
    }

    get canCancelQuery() {
        return false;
    }
    wrapIdentifier(value){
        return value;
    }

    acquireConnection() {
        return Promise.resolve()
            .then(() => {
                if (!this._connection) {
                    throw new Error('connection not provided');
                }
                return Promise.resolve();
            })
            .then(() => {
                this._connection.__knexUid = uniqueId('__knexUid');
                return this._connection;
            });
    }
    releaseConnection() {
        return Promise.resolve();
    }

    _query(connection, obj) {
        return connection.query(this._formatQuery(obj.sql, obj.bindings));
    }
    processResponse(response) {
        return response;
    }
}

module.exports = ClientAdodb;