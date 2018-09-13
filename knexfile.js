// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgresql://localhost/G95_DATABASE'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'process.env.G95_DATABASE',
      user: 'username',
      password: 'password'
    },
  },
}