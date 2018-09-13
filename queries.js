const dbConnection = require('./knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(dbConnection)

function gStudents() {
    return knex.select().from('cohortTable');
}
function indivStudent(id) {
    return knex.select().from('cohortTable').where('id', id);
}


module.exports = {
    getAll() {
        return knex.select().from('cohortTable');
    },
    getById(id) {
        return knex.select('id').from('cohortTable').where('id', id)
    },
    createStudent(newStudent) {
        return knex('cohortTable').insert(newStudent)
    }
}

app.get('./id', (req, res) => {

})
console.log(dbConnection)