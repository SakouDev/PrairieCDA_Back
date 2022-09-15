const { Router } = require("express")
const controllerVisit = require("../controllers/visitController")


const router = Router();

// Routes

/**
 * @swagger
 * tags:
 *      name: Visit
 *      description: Manage Visit
 */

/**
  * @swagger
  * /api/visit:
  *  get:
  *      tags: [Visit]
  *      description: Get Visit
  *      summary: 
  */
router.get('/', controllerVisit.getVisit)
/**
  * @swagger
  * /api/visit/:id:
  *  get:
  *      tags: [Visit]
  *      description: Get Visit by id
  *      summary: 
  */
router.get('/:id', controllerVisit.getVisitById)
/**
  * @swagger
  * /api/visit:
  *  post:
  *      tags: [Visit]
  *      description: Add Visit
  *      summary: 
  */
router.post('/', controllerVisit.addVisit)
/**
  * @swagger
  * /api/visit/:id:
  *  put:
  *      tags: [Visit]
  *      description: Update Visit
  *      summary: 
  */
router.put('/:id', controllerVisit.updateVisit)
/**
  * @swagger
  * /api/visit/:id:
  *  delete:
  *      tags: [Visit]
  *      description: Delete Visit
  *      summary: 
  */
router.delete('/:id', controllerVisit.deleteVisit)

module.exports = router

