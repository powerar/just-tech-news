//import Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

//create a connection to our database
const sequelize = new Sequelize('just_tech_news_db', 'root', 'M9&8z9@#GTYB', {
    host: 'localhost',
    dialect: 'mysql', 
    port: 3306
});

module.exports = sequelize;