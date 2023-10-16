const express = require('express');
const path = require('path');
const router = express.Router();
const pool = require("./../dbConnection");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

const jwt = require('jsonwebtoken')

/* user authentication */

function tryAuthentication(sql, callback) {

  pool.query(sql, function(err, res, fields) {

    if (err) {

      return callback({msg: "login error (system)", user:{}});

    } else if (typeof res[0] === "undefined") {

      return callback({msg: "wrong email or password", user:{}});

    } else {

      return callback({msg: "logged", user: res[0]});
    }
  })
}

router.post('/loginData', function(req, res, next) {
 
  var obj = req.body;
  var sql = 'select * from user where EMAIL = ' + '\"' + obj.email + '\" and SENHA = \"' + obj.pass + '\"';

  tryAuthentication(sql, function(callbackReturn) {

    if (callbackReturn.msg == "logged") {

      //const token = jwt.sign({id: callbackReturn.user["ID"]},'we221e32342342342342342weaeaEWWAWE@4123', {expiresIn: '1h'});
      const token = 'we221e32342342342342342weaeaEWWAWE@4123';
      res.send({message: callbackReturn.msg, t: token, user: callbackReturn.user});
    
    } else {

      res.send({message: callbackReturn.msg, t: '', user: {}});
    }
  })
});

function tryRegistration(sql, callback) {

  pool.query(sql, function(err, res, fields) {

    if (err) {

      if (err.toString().includes("ER_DUP_ENTRY"))
        return callback("email already exists");

      return callback("error on registering (system)");
    
    } else if (res.affectedRows == 1) {

      return callback("registered");

    } else {

      return callback("error on registering (system)");
    }
  })
} 

router.post('/regData', function(req, res, next) {

  var obj = req.body;
  var sql = 'insert into user (NOME, EMAIL, SENHA) values (\"' + obj.name + '\", \"' + obj.email + '\", \"' + obj.pass + "\")";

  tryRegistration(sql, function(result) {

    res.send({message: result});
  })
});

module.exports = router;
