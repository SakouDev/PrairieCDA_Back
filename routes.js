const { Router } = require("express")
const controllerCustomer = require("./customer/controller")
const controllerAnimal = require("./animal/controller")


const router = Router();

//Customer:
router.get('/customers', controllerCustomer.getCustomer)
router.get('/customers/:id', controllerCustomer.getCustomerById)
router.post('/customers', controllerCustomer.addCustomer)
router.put('/customers/:id', controllerCustomer.updateCustomer)
router.delete('/customers/:id', controllerCustomer.deleteCustomer)

//animals
router.get('/animals', controllerAnimal.getAnimal)
router.get('/animals/:id', controllerAnimal.getAnimalById)
router.post('/animals', controllerAnimal.addAnimal)
router.put('/animals/:id', controllerAnimal.updateAnimal)
router.delete('/animals/:id', controllerAnimal.deleteAnimal)


router.get('/customers/:id/animals', controllerAnimal.getCustomerAnimal)


module.exports = router

