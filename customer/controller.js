const { response } = require("express")
const db = require("../database/connect-local")
const queries = require("./queries")


const getCustomer = (req, res) => {
    db.query(queries.getCustomer, (error, result) => {
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const getCustomerById = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(queries.getCustomerById, [id], (error, result) => {
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const addCustomer = (req, res) => {
    const { firstname, lastname, address, mail } = req.body

    //Check mail
    db.query(queries.checkMailExists, [mail], (error, result) => {
        if(result.rows.length){
            res.send("Mail already exist.")
        }
    })
    //Add
    db.query(queries.addCustomer, [firstname, lastname, address, mail], (error, result) => {
        if(error) throw error
        res.status(200).send("Created Succesfully!")
    })
}

const updateCustomer = (req, res) => {
    const id = parseInt(req.params.id)
    const { firstname } = req.body

    db.query(queries.getCustomerById, [id], (error, result) => {
        const noCustomerFound = !result.rows.length
        if(noCustomerFound){
            res.send("Not Found. Can't update. U dumb")
        }

        db.query(queries.updateCustomer, [firstname , id], (error, result) => {
            if (error) throw error
            res.status(200).send("Updated ! (Faster than LostArk Update !)")
        })
    })
}

const deleteCustomer = (req , res) => {
    const id = parseInt(req.params.id)
    //Get Customer
    db.query(queries.getCustomerById, [id], (error, result) => {
        const noCustomerFound = !result.rows.length
        if(noCustomerFound){
            res.send("Customer not found, Couldn't remove.")
        }
        // Delete the Customer
        db.query(queries.deleteCustomer, [id], (error, result) =>{
            if (error) throw error
            res.status(200).send("Customer Deleted.. CHEH!")
        })
    })
}

module.exports = {
    getCustomer,
    getCustomerById,
    addCustomer,
    updateCustomer,
    deleteCustomer
}
