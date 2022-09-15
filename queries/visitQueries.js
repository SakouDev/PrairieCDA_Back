const getVisit = "SELECT * FROM visit"
const getVisitById = "SELECT * FROM visit WHERE id = $1"
const addVisit = "INSERT INTO visit (customerid, name, race, dead, birthdate) VALUES ($1, $2, $3, $4, $5)"
const updateVisit = "UPDATE visit SET firstname = $1 WHERE id = $2"
const deleteVisit = "DELETE FROM visit WHERE id = $1"

module.exports = {
    getVisit,
    getVisitById,
    addVisit,
    updateVisit,
    deleteVisit
}