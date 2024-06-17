// index.js
var express = require('express');
var app = express();

//
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200})); 

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



/**
 * All code underneath is fully designed by me. 
 * Used the Luxon NPM package in order to solve the problem!
 */
app.get("/api/:date?",
  function(req, res) {
    let date = req.params.date;
    let UTC;
    let UNIX;
    if (!date) {
      UTC = new Date().toUTCString();
      UNIX = DateTime.now().toMillis();
    } else {
    let valid = false;
    const regex1 = /^\d{4}-\d{2}-\d{2}$/;
    const isValidISO = regex1.test(date);
    if (isValidISO) {
        UTC = DateTime.fromISO(date);
        if (UTC.isValid) {
            valid = true;
        }
    }
    const regex2 = /^\d+$/;
    const isValidUTC = regex2.test(date);
    if (isValidUTC) {
      UNIX = DateTime.fromMillis(parseInt(date, 10));
      if (UNIX.isValid) {
        valid = true;
      }
    }


    /**
       * I used a different strategy in order to ensure it's a date, but this one
       * may work as well, more using the JS Date Object
       */
      if (!valid) {
        const parsedDate = new Date(date);
        if (!isNaN(parsedDate.getTime())) {
          valid = true;
          UTC = parsedDate.toUTCString();
          UNIX = parsedDate.getTime();
          res.send({ "unix": UNIX, "utc": UTC });
        }
      }
      
    if (!valid) {
      res.send({"error" : "Invalid Date"});
      return;
    } else {
        if (!UNIX) {
          UNIX = UTC.toMillis();
          UTC = new Date(date).toUTCString();
        } else {
          UNIX = UNIX.toMillis();
          //this is the error that hapepns, so you don't have a UTC
          UTC = new Date(UNIX).toUTCString();
        }
       
    }
  }
  res.send({"unix": UNIX, "utc": UTC});
  });


var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

