const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getActivities()
    .then(acts => {
      res.send({acts: acts})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const act = req.body
  db.addActivity(act)
    .then(activity => {
      res.json({act: activity})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.put('/:id/edit', (req, res) => {
  const id = req.params.id
  const activity = req.body
  db.updateActivity(id, activity)
    .then(activity => {
      res.json({activity: activity})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.delete('/:id/delete', (req, res) => {
  const id = req.params.id
  const activity = req.body
  db.deleteActivity(id, activity)
    .then(activity => {
      res.json({activity: activity})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
