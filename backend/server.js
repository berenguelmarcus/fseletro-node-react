const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const cors = require("cors");

const ProductRouter = require("./routes/product");
const OrderRouter = require("./routes/product");

var app = express();

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    
    app.use(cors());
    
    next();
});

app.use(bodyParser.json());

app.use("/", ProductRouter);


app.listen(3000);