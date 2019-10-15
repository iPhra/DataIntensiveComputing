const sqlDbFactory = require("knex");

let sqlDb = sqlDbFactory({
    client: "pg",
    connection: process.env.DATABASE_URL || "postgres://pirqmnrjssujvc:8d68dd15b6d95c75eb108c77689389893ac5d4823018c69a5e0f43facb229c90@ec2-54-75-238-138.eu-west-1.compute.amazonaws.com:5432/d2g0b7p216e89i?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory",
    ssl: true,
    debug: true
});

wordsSetup = (database) => {
    console.log("Checking if account table exists");
    return database.schema.hasTable("words").then(exists => {
        if (!exists) {
            console.log("It does not so we create it");
            return database.schema.createTable("words", table => {
                table.increments("user_id");
                table.string("email").unique().notNullable();
                table.string("password").notNullable();
                table.string("name").notNullable();
                table.string("surname").notNullable();
            })
        }
    });
};

//create the schema of each table, if not present already
function setupDatabase() {
    console.log("Setting up the database");
    wordsSetup(sqlDb);
}

module.exports = { database: sqlDb, setupDatabase };
