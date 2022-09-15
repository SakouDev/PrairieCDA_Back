const getHealthRecord = "SELECT * FROM healthrecord"
const getHealthRecordbyId = "SELECT * FROM healthrecord WHERE animalid = $1"
const addHealthRecord = "INSERT INTO healthrecord (animalid, visitId) VALUES ($1, $2)"
const updateHealthRecord = "UPDATE healthrecord SET firstname = $1 WHERE id = $2"
const deleteHealthRecord = "DELETE FROM healthrecord WHERE id = $1"

module.exports = {
    getHealthRecord,
    getHealthRecordbyId,
    addHealthRecord,
    updateHealthRecord,
    deleteHealthRecord
}