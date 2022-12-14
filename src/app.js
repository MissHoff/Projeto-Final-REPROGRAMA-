require('dotenv').config();
const express = require("express"); // importo o express
const cors = require("cors"); // importo o cors
const mongoose = require("./database/dbconnect"); // conecto a pasta do Mongo
const postroute = require("./routes/postroute"); // conecto as rotas

const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/blogapi", postroute); // crio uma rota raiz


// exportando para usar o server.js
module.exports = app;