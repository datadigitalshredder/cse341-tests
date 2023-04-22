const express = require('express');
const app = express();

const lesson1Controller = require("./controllers/lesson1");

app.get('/', lesson1Controller.traceyRoute);
app.get('/jordan', lesson1Controller.jordanRoute);
app.get('/jared', lesson1Controller.jaredRoute);
app.get('/taylor', lesson1Controller.taylorRoute);

app.get('/jordan', (req,res) => {
    res.send("Jordan Hove");
  });

app.get('/jared', (req,res) => {
res.send("Jared Hove");
});

app.get('/taylor', (req,res) => {
    res.send("Taylor Hove");
  });
const port = 3000;

app.listen(process.env.port || port);
console.log('Web Server is listening at port '+ (process.env.port || port));
