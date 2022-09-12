const getCustomer = "SELECT * FROM customer"
const getCustomerById = "SELECT * FROM customer WHERE id = $1"
const checkMailExists = "SELECT s FROM customer s WHERE s.mail = $1"
const addCustomer = "INSERT INTO customer (firstname, lastname, address, mail) VALUES ($1, $2, $3, $4)"
const updateCustomer = "UPDATE customer SET firstname = $1 WHERE id = $2"
const deleteCustomer = "DELETE FROM customer WHERE id = $1"


module.exports = {
    getCustomer,
    getCustomerById,
    checkMailExists,
    addCustomer,
    updateCustomer,
    deleteCustomer
}