const { Router } = require("express")
const controllerCustomer = require("./customer/controller")
const controllerAnimal = require("./animal/controller")


const router = Router();

//Customer:
router.get('/customer', controllerCustomer.getCustomer)
router.get('/customer/:id', controllerCustomer.getCustomerById)
router.post('/customer', controllerCustomer.addCustomer)
router.put('/customer/:id', controllerCustomer.updateCustomer)
router.delete('/customer/:id', controllerCustomer.deleteCustomer)

//animal
router.get('/animal', controllerAnimal.getAnimal)
router.get('/animal/:id', controllerAnimal.getAnimalById)
router.post('/animal', controllerAnimal.addAnimal)
router.put('/animal/:id', controllerAnimal.updateAnimal)
router.delete('/animal/:id', controllerAnimal.deleteAnimal)


router.get('/customer/:id/animal', controllerAnimal.getCustomerAnimal)


module.exports = router

