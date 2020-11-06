const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
/*
Calculate bowling score with the POST route /bowling-score
with the throws in parameters 
Example of JSON input => {throws : '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0}
*/

app.post('/bowling-score/', function (req, res) {
  // We get the results of differents bowling frames in a table
  var throws = req.body.throws;
  console.log("Throws : " + throws);

  // We split it in a table to have individual throw score
  const t = throws.split(',');
  // We calculate the total score in RESULT
  var result = 0;
  
  // WRITE YOUR CODE HERE to CALCULATE the bowling score

  //////////////////////////////////////////////////////
  console.log("Result : " + result);
  res.json({result : result});
})
 
app.listen(3000)
