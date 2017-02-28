// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'cg_db',
      port: '5433',
      user:     'commonground',
      password: 'commonground123'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'cg_db',
      port: '5433',
      user:     'commonground',
      password: 'commonground123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'cg_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
