const { Sequelize } = require('sequelize');
const dotenv = require("dotenv");
dotenv.config();

const db = new sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
  }
);

const initDb = async () => {
  try {
    await db.authenticate();
    console.log(`${process.env.DB_NAME} database connected`);
    await db.sync({ force: true });
    console.log(`${process.env.DB_NAME} database synced`);

    users.map(async (u) => {
      await userModel.create({
        nom: u.nom,
        prenom: u.prenom,
        naissance: u.naissance,
        email: u.email,
        password: u.password,
        telephone: u.telephone,
      });
    });

    // pokemons.map(async (pokemon) => {
    //   await pokemonModel.create({
    //     name: pokemon.name,
    //     hp: pokemon.hp,
    //     cp: pokemon.cp,
    //     picture: pokemon.picture,
    //     types: pokemon.types.join(),
    //   });
    // });
    
  } catch (error) {
    console.error(` Error: ${error}`);
  }
};

module.exports = {
  initDb,
};
