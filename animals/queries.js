const getAnimal = "SELECT * FROM animals"
const getAnimalById = "SELECT * FROM animals WHERE id = $1"
const addAnimal = "INSERT INTO animals (customerid, name, race, dead) VALUES ($1, $2, $3, $4)"
const updateAnimal = "UPDATE animals SET firstname = $1 WHERE id = $2"
const deleteAnimal = "DELETE FROM animals WHERE id = $1"
const getCustomerAnimal = 'SELECT * FROM animals WHERE customerid = $1'

module.exports = {
    getAnimal,
    getAnimalById,
    addAnimal,
    updateAnimal,
    deleteAnimal,
    getCustomerAnimal
}