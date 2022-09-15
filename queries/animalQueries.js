const getAnimal = "SELECT * FROM animal"
const getAnimalById = "SELECT * FROM animal WHERE id = $1"
const addAnimal = "INSERT INTO animal (customerid, name, race, dead, birthdate, specie) VALUES ($1, $2, $3, $4, $5, $6)"
const updateAnimal = "UPDATE animal SET firstname = $1 WHERE id = $2"
const deleteAnimal = "DELETE FROM animal WHERE id = $1"
const getCustomerAnimal = 'SELECT * FROM animal WHERE customerid = $1'

module.exports = {
    getAnimal,
    getAnimalById,
    addAnimal,
    updateAnimal,
    deleteAnimal,
    getCustomerAnimal
}