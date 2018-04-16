const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  getActivities,
  addActivity,
  updateActivity,
  deleteActivity
}

function getUsers (testDb) {
  const db = testDb || connection
  return db('users').select()
}

function getUser (id, testDb) {
  const db = testDb || connection
  return db('users').where('id', id).first()
}

function addUser (user, testDb) {
  const db = testDb || connection
  return db('users').insert(user)
}

function updateUser (id, user, testDb) {
  const db = testDb || connection
  return db('users').where('id', id).update(user)
}

function getActivities (testDb) {
  const db = testDb || connection
  return db('activities').select()
}

function addActivity (act, testDb) {
  const db = testDb || connection
  return db('activities').insert(act)
}

function updateActivity (id, activity, testDb) {
  const db = testDb || connection
  return db('activities').where('id', id).update(activity)
}

function deleteActivity (id, activity, testDb) {
  const db = testDb || connection
  return db('activities').where('id', id).del(activity)
}
