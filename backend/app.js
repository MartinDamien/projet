const express = require("express");
const dotenv = require("dotenv");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const sequelize = require("./src/database/sequelize");
const morgan = require("morgan");

// routes
const user = require("./src/route/user");

// initialize app
dotenv.config();
const app = express();
app.set("port", process.env.PORT || 3000);


// middleware
app
  .use(favicon(__dirname + `/public/images/favicon.ico`))
  .use(morgan("dev"))
  .use(bodyParser.json())

// database
sequelize.initDb();

// start the server
app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")}, press Ctrl+C to quit`);
});


/*
Creer un fichier .env avec les variables suivantes:
port=''
DB_NAME='nom de la table'
DB_USER='nom de l'utilisateur'
DB_PASSWORD='mot de passe'
DB_HOST='nom du serveur'
*/
