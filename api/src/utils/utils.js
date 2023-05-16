const {Temperament} = require("../db");


const cleanDogArray = (arr) => 
    arr.map((dog) => {
        return {
            id: dog.id,
            name: dog.name,
            image: dog.image.url,
            height: dog.height.metric,
            weight: dog.weight.metric,
            life_span: dog.life_span,
            created: false
        };
    });


const cleanDog = async (arrayDog) => {
    const dog = arrayDog.find(dog=>arrayDog.indexOf(dog)===0);
    const temperametDog = dog.temperament.split(", ");
    const temperamentArray = await Temperament.findAll({
        where: {
            name: temperametDog
        }
    })
    return {
        id: dog.id,
        name: dog.name,
        image: dog.image.url,
        height:dog.height.metric,
        weight:dog.weight.metric,
        life_span:dog.life_span,
        Temperaments:temperamentArray,
        created: false
    }
}
    



const createDatabaseTemperaments = async (array) => {
    array.forEach(async (temperament) => {
        await Temperament.create({
            name: temperament
        })
    });
    return("Database Temperaments created")
}

const cleanTemperamentsArray = (array) => {
    
    const temperamentsArrayRaw = array.map(dog => dog.temperament);
    const temperamentsArray = temperamentsArrayRaw.toString().split(",");
    const temperamentsTrim = temperamentsArray.map(temperament=>temperament.trim());
    const temperamentsNotNull = temperamentsTrim.filter(temperament=>temperament!=="");
    //Para que no se repitan los temperamentos de los perros
    const temperaments = temperamentsNotNull.filter(function(temperament, index, array) {
        return array.indexOf(temperament) === index;
    })
    const temperamentsOrdered = temperaments.sort();
    return temperamentsOrdered;
}

module.exports = {
    cleanDogArray,
    cleanDog,
    createDatabaseTemperaments,
    cleanTemperamentsArray
}