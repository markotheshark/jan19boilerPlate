const { Client } = require('pg');

const connection = process.env.DATABASE_URL || 'https://localhost:5432/boilerPlate';

const client = new Client(connection);

client.connect();

module.exports = client;