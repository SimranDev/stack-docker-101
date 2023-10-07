import cors from "cors"
import express from "express"
import { banksData } from "./seed.js"

const app = express()
app.use(cors())

app.get("/banks", (req, res) => {
  res.json(banksData)
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Listening on port:${port}`)
})
