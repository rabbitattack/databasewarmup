const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const queries = require('./queries');

app.use(bodyParser.json())

app.listen(port, () => console.log('listening on ${port}'));

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
