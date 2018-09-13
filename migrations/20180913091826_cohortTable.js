exports.up = (knex, Promise) => {
    return knex.schema.createTable('cohortTable', (student) => {
        student.increments('id')
        student.string('firstName')
        student.string('lastName')
        student.string('hometown')
        student.string('prevOccupation')
        student.string('favoriteNumber')
        student.string('pastime')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists
};