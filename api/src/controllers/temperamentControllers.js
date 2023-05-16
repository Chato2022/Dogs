const { Temperament } = require("../db.js");
const axios = require("axios");
const { cleanTemperamentsArray, createDatabaseTemperaments } = require("../utils/utils");
const {API_KEY} = process.env;

//RUTA: Obtener todos los temperamentos de los perros

let myLink = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;
const getAllTemperaments = async () => {

    const databaseTemperaments = await Temperament.findAll();
    if (databaseTemperaments.length===0) {
        let idTemperament = 1;
        const apiDogsRaw = (await axios.get(myLink)).data;
        const apiTemperaments = cleanTemperamentsArray(apiDogsRaw);
        const apiTemperamentsArray = apiTemperaments.map(temperament=>{
            return{
                id: idTemperament++,
                name: temperament
            }
        })
        let databaseTemperamentsCreated = await createDatabaseTemperaments(apiTemperaments);
        if (databaseTemperamentsCreated === "Database Temperaments created"){
            return apiTemperamentsArray;
        }
    }
    return databaseTemperaments;
}


module.exports = {
    getAllTemperaments
}