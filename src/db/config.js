require('dotenv').config()

const options = {
  query: (e) => {
    console.log(e.query)
  }
}

const pgp = require('pg-promise')(options);
let db
try {
    db = pgp(`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`)
} catch (e) {
  console.error('Failed to start application, DB init.', e)
  process.exit(1)
}

module.exports = {
  pgp,
  db
}

// const options = {
//     query: (e) => {
//       console.log(e.query)
//     }
//   }
  
//   const pgp = require('pg-promise')(options);
  
//   const setDataBase = () => {
//     if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV){
//       return pgp({
//         user: 'postgres',
//         password: 'superMe',
//         database: 'TodoMVC',
//         port: 5432,
//         host: 'localhost'
//       })
//     }
//     else if (process.env.NODE_ENV === 'production'){
//       return pgp(process.env.DATABASE_URL)
//     }
//   }
  
//   const db = setDataBase();
//   module.exports = db;