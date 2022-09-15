const { Router } = require("express")
const controllerHealthRecord = require("../controllers/healthRecordController")


const router = Router();

// Routes

/**
 * @swagger
 * tags:
 *      name: HealthRecord
 *      description: Manage HealthRecord
 */

/**
  * @swagger
  * /api/healthrecord:
  *  get:
  *      tags: [HealthRecord]
  *      description: Get HealthRecord
  *      summary: 
  */
router.get('/', controllerHealthRecord.getHealthRecord)
/**
  * @swagger
  * /api/healthrecord/:id:
  *  get:
  *      tags: [HealthRecord]
  *      description: Get HealthRecord by id
  *      summary: 
  */
router.get('/:id', controllerHealthRecord.getHealthRecordbyId)
/**
  * @swagger
  * /api/healthrecord:
  *  post:
  *      tags: [HealthRecord]
  *      description: Add HealthRecord
  *      summary: 
  */
router.post('/', controllerHealthRecord.addHealthRecord)
/**
  * @swagger
  * /api/healthrecord/:id:
  *  put:
  *      tags: [HealthRecord]
  *      description: Update HealthRecord
  *      summary: 
  */
router.put('/:id', controllerHealthRecord.updateHealthRecord)
/**
  * @swagger
  * /api/healthrecord/:id:
  *  delete:
  *      tags: [HealthRecord]
  *      description: Delete HealthRecord
  *      summary: 
  */
router.delete('/:id', controllerHealthRecord.deleteHealthRecord)

module.exports = router

