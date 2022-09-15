const { response } = require("express")
const db = require("../database/connect-local")
const queries = require("../queries/healthRecordQueries")

const getHealthRecord = (req, res) => {
    db.query(queries.getHealthRecord, (error, result) => {
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const getHealthRecordbyId = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(queries.getHealthRecordbyId, [id], (error, result) => {
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const addHealthRecord = (req, res) => {
    const { dogId, visitId } = req.body
    
    // Add
    db.query(queries.addCustomers, [dogId, visitId], (error, result) => {
        if(error) throw error
        res.status(200).send("Created Succesfully!")
    })
}

const updateHealthRecord = (req, res) => {
    const id = parseInt(req.params.id)
    const { firstname } = req.body

    db.query(queries.getHealthRecordbyId, [id], (error, result) => {
        const noHealthRecordFound = !result.rows.length
        if(noHealthRecordFound){
            res.send("Not Found. Can't update. U dumb")
        }
        db.query(queries.updateCustomers, [firstname , id], (error, result) => {
            if (error) throw error
            res.status(200).send("Updated ! (Faster than LostArk Update !)")
        })
    })
}

const deleteHealthRecord = (req , res) => {
    const id = parseInt(req.params.id)
    //Get Customer
    db.query(queries.getHealthRecordbyId, [id], (error, result) => {
        const noHealthRecordFound = !result.rows.length
        if(noHealthRecordFound){
            res.send("Customer not found, Couldn't remove.")
        }
        // Delete the Customer
        db.query(queries.deleteCustomers, [id], (error, result) =>{
            if (error) throw error
            res.status(200).send("Customer Deleted.. CHEH!")
        })
    })
}

module.exports = {
    getHealthRecord,
    getHealthRecordbyId,
    addHealthRecord,
    updateHealthRecord,
    deleteHealthRecord
}