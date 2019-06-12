const router = require('express').Router();

const Users = require('./users-model.js');
const protected = require('../auth/protected-middleware.js');

router.get('/', protected, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
