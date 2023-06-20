import express from "express"
import cors from "cors"
import { getFlowers, addNewFlower } from "./src/flowers.js"
const PORT = 3000

const app = express()
app.use(cors())
app.use(express.json())

//only allowed request at the moment
app.get("/flowers", getFlowers)
app.post("/flowers", addNewFlower)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost: ${PORT}...`)
})


