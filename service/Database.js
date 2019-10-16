const sqlDbFactory = require("knex");

let sqlDb = sqlDbFactory({
    client: "pg",
    connection: process.env.DATABASE_URL || "postgres://cuapumoqmbkafk:a510ef81c98a872ea8e47b58e7e044fb5f204f56b7019a581aa3b4f9223498f8@ec2-54-217-206-65.eu-west-1.compute.amazonaws.com:5432/d9bf9qompakvh6?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory",
    ssl: true,
    debug: true
});


module.exports = {database: sqlDb};
