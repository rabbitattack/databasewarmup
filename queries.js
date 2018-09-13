const dbConnection = require('./knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(dbConnection)

function gStudents() {
    return knex.select().from('students')
}
function indivStudent(id) {
    return knex.select().from('students').where('id', id)
}


module.exports = {
    getAll() {
        return knex.select().from('students')
        return knex.schema().from('students')
    }
}
console.log(dbConnection)