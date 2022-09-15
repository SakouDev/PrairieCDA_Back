const { response } = require("express")
const db = require("../database/connect-local")
const queries = require("../queries/animalQueries")

const getAnimal = (req, res) => {
    db.query(queries.getAnimal, (error, result) => {
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const getAnimalById = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(queries.getAnimalById, [id], (error, result) => {
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const addAnimal = (req, res) => {
    const { customerid, name, race, dead, birthdate, specie } = req.body
    //Add
    db.query(queries.addAnimal, [customerid, name, race, dead, birthdate, specie], (error, result) => {
        if(error) throw error
        res.status(200).send("Created Succesfully!")
    })
}

const updateAnimal = (req, res) => {
    const id = parseInt(req.params.id)
    const { firstname } = req.body

    db.query(queries.getAnimalById, [id], (error, result) => {
        const noAnimalFound = !result.rows.length
        if(noAnimalFound){
            res.send("Not Found. Can't update. U dumb")
        }
        db.query(queries.updateAnimal, [firstname , id], (error, result) => {
            if (error) throw error
            res.status(200).send("Updated ! (Faster than LostArk Update !)")
        })
    })
}

const deleteAnimal = (req , res) => {
    const id = parseInt(req.params.id)
    //Get animals
    db.query(queries.getAnimalById, [id], (error, result) => {
        const noAnimalFound = !result.rows.length
        if(noAnimalFound){
            res.send("animals not found, Couldn't remove.")
        }
        // Delete the animals
        db.query(queries.deleteAnimal, [id], (error, result) =>{
            if (error) throw error
            res.status(200).send("animals Deleted.. CHEH!")
        })
    })
}


module.exports = {
    getAnimal,
    getAnimalById,
    addAnimal,
    updateAnimal,
    deleteAnimal
}