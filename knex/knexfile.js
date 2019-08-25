const options = {
    development: {
        client: 'pg',
        connection: {
            user: "testuser",
            password: "testpassword",
            database: "todos"
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds',
        },
    },
};

var environment = process.env.NODE_ENV || 'development';
var config = options[environment];
module.exports = require('knex')(config);