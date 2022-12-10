const db = require('../models/models.js');
const bcrypt = require('bcrypt');

const string = 'alexandrew';

let saltRounds = 10;

// const hash = bcrypt.hash(string, saltRounds, function(err, hash) {
//   if (err) console.log(err);
//   else console.log(hash);
//   return hash;
// });

bcrypt.compare(string, hash, function(err, result) {
  console.log(result);
  if (err) console.log(err);
})

async function hashPassword (password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds, function(err, hash) {
    if (err) return err;
    return hash;
  });
  return hashedPassword;
}



// userController.test = (req,res,next)=>{
//   const query= 'SELECT * FROM users WHERE username = Bobab AND password=$1';
//   const values = [req.body.password];
//   db.query()
// }
// db.query(characters, (err, resp) => {
//   if (err) {
//     return next({
//       log: 'Error: getCharacters done broke',
//       status: 500,
//       message: { err: 'shits broke' },
//     });
//   }
//   res.locals.characters = resp.rows;
//   return next();
// });

const userController = {};

userController.login = (req, res, next) => {
  const queryString = 'SELECT '

  return (next)
}

userController.signup = (req, res, next) => {
  // check if username exists 
    // if doesnt exist, add username + hashed pw
    // if does, return err
  const { username, password } = req.body;
  const queryString = `INSERT ${username}`;
  return (next)
}

userController.update = (req, res, next) => {
  return (next)
}

module.exports = userController;