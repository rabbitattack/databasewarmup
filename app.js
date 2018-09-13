const express = require("express")
const app = express()
const port = process.env.port
const queries = require('./queries')

app.listen(3000, () => console.log('listening on ${port}'));

app.get('/', function (req, res) {
    queries.gStudents().then(function (students) {
        response.json({ students })
    })
        .then(response => response.json())
    queries.list().then(result => response.send.json({ result }))
});

app.get('/:id', (req, res) => {
    queries.list()
})