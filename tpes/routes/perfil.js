const express = require('express');
const path = require('path');
const router = express.Router();
const pool = require("./../dbConnection");

/* GET perfil page (loaded from indexAuthent). */
router.get('/', function(req, res, next) {

  if (req.headers.token == 'we221e32342342342342342weaeaEWWAWE@4123') {

    res.sendFile(path.join(__dirname, '../public', 'perfil.html'));

  } else {

    return res.send("please log in");
  }
});

router.get('/perfilData', function(req, res, next) {

  if (req.headers.token == 'we221e32342342342342342weaeaEWWAWE@4123') {

    var sql = 'select * from USER where EMAIL = \"' + req.headers.email + '\"';

    pool.query(sql, function(err, rows, fields) {

      if (err) {

        res.send({name: "", email: ""});
      
      } else {

        res.send({name: rows[0]["NOME"], email: rows[0]["EMAIL"]});
      }
    })

  } else {

    res.send({name: "", email: ""});
  }
});

module.exports = router;
