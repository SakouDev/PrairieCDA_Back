const getCustomers = "SELECT * FROM customer"
const getCustomersById = "SELECT * FROM customer WHERE id = $1"
const checkMailExists = "SELECT s FROM customer s WHERE s.mail = $1"
const addCustomers = "INSERT INTO customer (firstname, lastname, address, mail) VALUES ($1, $2, $3, $4)"
const updateCustomers = "UPDATE customer SET firstname = $1 WHERE id = $2"
const deleteCustomers = "DELETE FROM customer WHERE id = $1"

module.exports = {
    getCustomers,
    getCustomersById,
    checkMailExists,
    addCustomers,
    updateCustomers,
    deleteCustomers
}