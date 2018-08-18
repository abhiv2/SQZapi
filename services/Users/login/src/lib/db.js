'use strict';

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');

import Db from '../../../../../lib/db';
import User from '../../../../../lib/db/models/User';

class Database {
  constructor(vars) {
    this.vars = vars;
    this.db = new Db(vars);
  }

  findUser(item) {
    return new Promise((resolve, reject) => {
      this.db.init().then(() => {
        User.findOne({email : item.email}, (err, data) => {
          if (err) return reject(err);
          if(!data) return reject("invalid email");
          // console.log(data);
           let passwordIsValid = bcrypt.compareSync(item.password, data.password);
           if (!passwordIsValid) return reject("invalid password");

           let token = jwt.sign({ id: data._id }, 'secret_key', {
             expiresIn: 86400 // expires in 24 hours
           });
          let user = {
            name : data.name,
            email : data.email
          }
          return resolve({token : token, user : user});
        });
      });
    });
  }
}

export default Database;
