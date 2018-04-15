
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(() => {
      // Inserts seed entries
      return knex('activities').insert([
        {id: 1, name: 'boating', frequency: 5, level: 100},
        {id: 2, name: 'running', frequency: 1, level: 500},
        {id: 3, name: 'jumping', frequency: 3, level: 200}
      ])
    })
}
