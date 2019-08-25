
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'Michael Stone', email: 'michael@example.com' },
        { id: 2, name: 'John Burke', email: 'john@example.com' },
        { id: 3, name: 'Mary ODonnel', email: 'mary@example.com' }
      ]);
    });
};
