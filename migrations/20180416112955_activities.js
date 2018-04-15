exports.up = (knex, Promise) => {
  return knex.schema.createTable('activities', table => {
    table.increments('id').primary()
    table.string('name')
    table.integer('frequency')
    table.integer('level')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('activities')
}
