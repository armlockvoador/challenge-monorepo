module.exports = {
  development: {
    url: "host=teste-postgres-compose port=5432 dbname=instaclone user=postgres password=xxxxxxx sslmode=prefer connect_timeout=10 sslcert=<STORAGE_DIR>/.postgresql/postgresql.crt sslkey=<STORAGE_DIR>/.postgresql/postgresql.key",
    dialect: 'postgres',
  },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };