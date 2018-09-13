const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const port = process.env.port
const queries = require('./queries')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors)
app.listen(3000, () => console.log('listening on ${port}'));

app.get('/', function (req, res) {
    queries.getAll().then(result => { res.send(result) })
})
app.post('/', (req, res) => {
    queries.createStudent(req.body).then(data => res.json({ data }),
    )
})
//     .then(response => response.json())
// queries.list().then(result => response.send.json({ result }))
// });
