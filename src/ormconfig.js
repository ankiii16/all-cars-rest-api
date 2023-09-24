module.exports = {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost', // Replace with your database host
    port: process.env.DB_PORT || 3306, // Replace with your database port
    username: process.env.DB_USER || 'your_username', // Replace with your database username
    password: process.env.DB_PASSWORD || 'your_password', // Replace with your database password
    database: process.env.DB_NAME || 'your_database_name', // Replace with your database name
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
}