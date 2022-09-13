const getCustomer = "SELECT * FROM customers"
const getCustomerById = "SELECT * FROM customers WHERE id = $1"
const checkMailExists = "SELECT s FROM customers s WHERE s.mail = $1"
const addCustomer = "INSERT INTO customers (firstname, lastname, address, mail) VALUES ($1, $2, $3, $4)"
const updateCustomer = "UPDATE customers SET firstname = $1 WHERE id = $2"
const deleteCustomer = "DELETE FROM customers WHERE id = $1"

module.exports = {
    getCustomer,
    getCustomerById,
    checkMailExists,
    addCustomer,
    updateCustomer,
    deleteCustomer
}