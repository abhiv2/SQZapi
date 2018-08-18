'use strict';

var bcrypt = require('bcryptjs');
import Db from '../../../../../lib/db';
import User from '../../../../../lib/db/models/User';

class Database {
  constructor(vars) {
    this.vars = vars;
    this.db = new Db(vars);
  }

  addUser(item) {
    return new Promise((resolve, reject) => {
      this.db.init().then(() => {
        User.findOne({email : item.email}, (err, data) => {
          if (err) return reject(err);
          else if (data) return reject("user already exist")
          else {
            item.password = bcrypt.hashSync(item.password, 8);
            const user = new User(item);
            user.save((err, createdObject) => {
              if (err) return reject(err);
              let user = {
                name : createdObject.name,
                email : createdObject.email,
                _id : createdObject._id,
                __v : createdObject.__v
              }
              return resolve(user);
            });
          }

        });
      });
    });
  }

}

export default Database;
