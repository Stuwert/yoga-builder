require('dotenv').load();
module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/yoga'
  },

  production: {
      client: 'postgresql',
      connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
