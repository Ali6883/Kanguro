export default () => ({
    database: {
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      name: process.env.DB_NAME,
    },
    port: parseInt(process.env.PORT, 10) || 3000,
    JWT_SECRET :process.env.JWT_SECRET
  }); 