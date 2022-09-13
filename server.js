const cors = require('cors')
const express = require("express")
const customerRoutes = require("./routes")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}...`)
})

app.get("/", (req, res) => {
    res.send("Ceci est la racine")
})

app.use('/api', customerRoutes)
