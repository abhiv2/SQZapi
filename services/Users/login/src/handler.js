'use strict';

import event from 'squeezer-event-node';

import vars from './.vars';

import Db from './lib/db';

const db = new Db(vars);

exports.handler = (...args) => event(vars, (req, res) => {
  db
    .findUser(req.body)
    .then(data => res.json(200, {
      message : 'success',
      access_token : data.token,
      user : data.user
    }))
    .catch(err => res.json(400, err));
}, ...args);