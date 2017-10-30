const express = require("express");
const app = express();
const router = require("./apiRouter")

app.set('view engine', 'pug')
app.set('views', './views')

app.use("/static", express.static("public"))

app.use("/api/v2", router)

app.get('/', function (req, res) {

    const obj = { title: 'Hey', message: 'Hello there!' }
    res.render('index', obj)
})

app.get('/about', function (req, res) {
    res.render('index', { title: 'Alout', message: 'Hello About!' })
})
app.get('/test/:name', function (req, res) {
    res.render('index', { title: 'Hey', message: `Hello ${req.params["name"]}!` })
})

app.use((req, res) => {
  res.status(404)
  res.send("Not Found")
})

app.listen(3000, () => {
  console.log("Server Starts on 3000 port")
})