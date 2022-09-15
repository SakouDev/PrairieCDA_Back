const { response } = require("express")
const db = require("../database/connect-local")
const queries = require("../queries/customerQueries")

const getCustomers = (req, res) => {
    db.query(queries.getCustomers, (error, result) => {
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const getCustomersById = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(queries.getCustomersById, [id], (error, result) => {
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const addCustomers = (req, res) => {
    const { firstname, lastname, address, mail } = req.body
    //Check mail
    db.query(queries.checkMailExists, [mail], (error, result) => {
        if(result.rows.length){
            res.send("Mail already exist.")
        }else{
            // Add
            db.query(queries.addCustomers, [firstname, lastname, address, mail], (error, result) => {
                if(error) throw error
                res.status(200).send("Created Succesfully!")
            })
        }
    }) 
}

const updateCustomers = (req, res) => {
    const id = parseInt(req.params.id)
    const { firstname } = req.body

    db.query(queries.getCustomersById, [id], (error, result) => {
        const noCustomerFound = !result.rows.length
        if(noCustomerFound){
            res.send("Not Found. Can't update. U dumb")
        }
        db.query(queries.updateCustomers, [firstname , id], (error, result) => {
            if (error) throw error
            res.status(200).send("Updated ! (Faster than LostArk Update !)")
        })
    })
}

const deleteCustomers = (req , res) => {
    const id = parseInt(req.params.id)
    //Get Customer
    db.query(queries.getCustomersById, [id], (error, result) => {
        const noCustomerFound = !result.rows.length
        if(noCustomerFound){
            res.send("Customer not found, Couldn't remove.")
        }else{
            db.query(queries.deleteCustomers, [id], (error, result) =>{
                if (error) throw error
                res.status(200).send("Customer Deleted.. CHEH!")
            })
        }
        // Delete the Customer
        
    })
}

const getCustomerAnimal = (req, res) => {
    const id = parseInt(req.params.id)

    db.query(queries.getCustomerAnimal, [id], (error, result) => {
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

module.exports = {
    getCustomers,
    getCustomersById,
    addCustomers,
    updateCustomers,
    deleteCustomers,
    getCustomerAnimal
}