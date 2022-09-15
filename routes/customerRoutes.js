const { Router } = require("express")
const controllerCustomers = require("../controllers/customerController")


const router = Router();

// Routes

// Customers

/**
 * @swagger
 * tags:
 *      name: Customers
 *      description: Manage customers
 */

/**
 * @swagger
 * /api/customers:
 *  get:
 *      tags: [Customers]
 *      description: Request all customers
 *      summary: 
 */
 router.get('/', controllerCustomers.getCustomers)
 /**
  * @swagger
  * /api/customers/:id:
  *  get:
  *      tags: [Customers]
  *      description: Add a customer
  *      summary: 
  */
  router.get('/:id', controllerCustomers.getCustomersById)
 /**
  * @swagger
  * /api/customers:
  *  post:
  *      tags: [Customers]
  *      description: Add a customer
  *      summary: 
  */
 router.post('/', controllerCustomers.addCustomers)
 /**
  * @swagger
  * /api/customers/:id:
  *  put:
  *      tags: [Customers]
  *      description: Update a customer
  *      summary: 
  */
router.put('/:id', controllerCustomers.updateCustomers)
 /**
  * @swagger
  * /api/customers/:id:
  *  delete:
  *      tags: [Customers]
  *      description: Delete a customer
  *      summary: 
  */
router.delete('/:id', controllerCustomers.deleteCustomers)


 /**
  * @swagger
  * /api/customers/:id/animals:
  *  get:
  *      tags: [Customers]
  *      description: get all animals from one customer
  *      summary: 
  */
router.get('/:id/animals', controllerCustomers.getCustomerAnimal)

module.exports = router

