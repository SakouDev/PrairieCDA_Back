const { response } = require("express")
const db = require("../database/connect-local")
const queries = require("../queries/visitQueries")

const getVisit = (req, res) => {
    db.query(queries.getVisit, (error, result) => {
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const getVisitById = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(queries.getVisitById, [id], (error, result) => {
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const addVisit = (req, res) => {
    const { customerid, name, race, dead, birthdate } = req.body
    //Add
    db.query(queries.addVisit, [customerid, name, race, dead, birthdate], (error, result) => {
        if(error) throw error
        res.status(200).send("Created Succesfully!")
    })
}

const updateVisit = (req, res) => {
    const id = parseInt(req.params.id)
    const { firstname } = req.body

    db.query(queries.getVisitById, [id], (error, result) => {
        const noVisitFound = !result.rows.length
        if(noVisitFound){
            res.send("Not Found. Can't update. U dumb")
        }
        db.query(queries.updateVisit, [firstname , id], (error, result) => {
            if (error) throw error
            res.status(200).send("Updated ! (Faster than LostArk Update !)")
        })
    })
}

const deleteVisit = (req , res) => {
    const id = parseInt(req.params.id)
    //Get animals
    db.query(queries.getVisitById, [id], (error, result) => {
        const noVisitFound = !result.rows.length
        if(noVisitFound){
            res.send("animals not found, Couldn't remove.")
        }
        // Delete the animals
        db.query(queries.deleteVisit, [id], (error, result) =>{
            if (error) throw error
            res.status(200).send("animals Deleted.. CHEH!")
        })
    })
}


module.exports = {
    getVisit,
    getVisitById,
    addVisit,
    updateVisit,
    deleteVisit
}