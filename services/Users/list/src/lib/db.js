'use strict';

import Db from '../../../../../lib/db';
import User from '../../../../../lib/db/models/User';

class Database {
  constructor(vars) {
    this.vars = vars;
    this.db = new Db(vars);
  }

  listUsers() {
    return new Promise((resolve, reject) => {
      this.db.init().then(() => {
        User.find({},{password : 0} ,  (err, data) => {
          if (err) return reject(err);

          return resolve(data);
        });
      });
    });
  }
}

export default Database;
