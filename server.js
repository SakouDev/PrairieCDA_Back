const cors = require('cors')
const express = require("express")
const app = express()
app.use(cors())

const customerRoutes = require("./routes/customerRoutes")
const animalRoutes = require("./routes/animalRoutes")
const healthRecordRoutes = require("./routes/healthRecordRoutes")
const visitRoutes = require("./routes/visitRoutes")
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

app.use(express.json())

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}...`)
})

app.get("/", (req, res) => {
    res.send("Ceci est la racine")
})

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: '🐶🐶 WOUF WOUF MIAOU MIAOU 🐱🐱 API',
            description: 'Projet prairie CDA 2022, app vétérinaire',
            contact: {
                name: 'Best front-end dev EUW'
            },
            // servers: [{ url: '/api' }]
            servers: [{
                url:`http://localhost:${port}`,
                description: 'localhost'
            },],
        },
    },
    apis: [`./routes/*.js`]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/api/customers', customerRoutes)
app.use('/api/animals', animalRoutes)
app.use('/api/healthrecord', healthRecordRoutes)
app.use('/api/visit', visitRoutes)