const cors = require('cors')
const express = require("express")
const app = express()
app.use(cors())

const customerRoutes = require("./routes")

app.use(express.json())

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}...`)
})

app.get("/", (req, res) => {
    res.send("Ceci est la racine")
})

app.use('/api', customerRoutes)