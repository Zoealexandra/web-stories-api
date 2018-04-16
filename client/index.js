const request = require('superagent')

request.get('http://localhost:3000/activities')
  .then(function (res) {
  // res.body, res.headers, res.status
  })
