//import library
const Sequelize = require("sequelize");
//keys
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


unidade.sync({force: false})

unidade.create({
    nome: 'Emily',
    tel: '981535927',
    email: 'emily@oli',
    dt_cadastro: '2024-10-25',
    curso: 'ADS',
});