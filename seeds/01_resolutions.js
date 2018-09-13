
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohortTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohortTable').insert([
        {
          firstName: 'Cory',
          lastName: 'Pease',
          hometown: 'Denver',
          prevOccupation: 'Boss',
          favoriteNum: 34.5,
          pastime: 'Being Bald'
        },
        {
          firstName: 'Nick',
          lastName: 'Lee',
          hometown: 'San Rafael',
          prevOccupation: 'Ditch Digger',
          favoriteNum: 2,
          pastime: 'Pickle Ball'
        },
        {
          firstName: 'Joey',
          lastName: 'Walter',
          hometown: 'Boulder',
          prevOccupation: 'Warehouse',
          favoriteNum: 13,
          pastime: 'Hardcore Parcore'
        },
        {
          firstName: 'Brice',
          lastName: 'Sinkule',
          hometown: 'Crete, NE',
          prevOccupation: 'Sale Consultant',
          favoriteNum: 12,
          pastime: 'Basketball'
        }
      ]);
    });
};
