const { Router } = require("express")
const controllerAnimal = require("../controllers/animalController")


const router = Router();

// Routes

/**
 * @swagger
 * tags:
 *      name: Animals
 *      description: Manage animal
 */

/**
  * @swagger
  * /api/animals:
  *  get:
  *      tags: [Animals]
  *      description: Get an animal
  *      summary: 
  */
router.get('/', controllerAnimal.getAnimal)
/**
  * @swagger
  * /api/animals/:id:
  *  get:
  *      tags: [Animals]
  *      description: Get an animal by id
  *      summary: 
  */
router.get('/:id', controllerAnimal.getAnimalById)
/**
  * @swagger
  * /api/animals:
  *  post:
  *      tags: [Animals]
  *      description: Add an animal
  *      summary: 
  */
router.post('/', controllerAnimal.addAnimal)
/**
  * @swagger
  * /api/animals/:id:
  *  put:
  *      tags: [Animals]
  *      description: Update an animal
  *      summary: 
  */
router.put('/:id', controllerAnimal.updateAnimal)
/**
  * @swagger
  * /api/animals/:id:
  *  delete:
  *      tags: [Animals]
  *      description: Delete an animal
  *      summary: 
  */
router.delete('/:id', controllerAnimal.deleteAnimal)

module.exports = router

