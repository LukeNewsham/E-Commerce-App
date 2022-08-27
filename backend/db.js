//setting up database

//creates variable to connect to pg pool function
const Pool = require("pg").Pool;
// import p from 'pg';
// const Pool = p.Pool;

//uses pg pool function to crate a new pool connection to postgres with requested details
const pool = new Pool({
    user: "postgres",
    password: "postgres",
    database: "eCommerceApp",
    host: "localhost",
    port: 5432
});

//database can now be accessed by the pool variable across backend files
// export default pool;
module.exports = pool