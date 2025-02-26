const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const {engine} = require("express-handlebars");

//###Banco de dados###
const conexaoComBanco = new Sequelize("etec", "root", "", {
    host: "localhost",
    dialect: "mysql",
  });

  const unidade = conexaoComBanco.define("unidade", {
    nome: {
      type: Sequelize.STRING,//VARCHAR
    },
    tel: {
      type: Sequelize.INTEGER,//TEXTAREA
    },
    email: {
        type: Sequelize.STRING,//TEXTAREA
      },
    dt_cadastro: {
        type: Sequelize.DATE,//TEXTAREA
    },
    curso: { 
        type: Sequelize.STRING
    },
});

unidade.sync({force:false})

app.use(
    express.urlencoded({
      extended: true
    })
  )

//   ROTA HOME

// ROTA DE INICIO
app.get('/home',async function (req, res) {
    const cursos = await unidade.findAll({raw: true})
    res.json(cursos)
  });


app.engine("handlebars", engine())
app.set("view engine", "handlebars")

//###Servidor###
app.listen(3031, function () {
    console.log("Server is running on port 3031");
});