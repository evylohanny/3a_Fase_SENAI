//Função de conexão com o banco
async function connect() {
    const {Pool} = require("pg"); //Estratégia de conexão
    const pool = new Pool({ //Declarando a variável
    connectionString: process.env.CONNECTION_STRING //Ler dados da conexão
    })
    const client = await pool.connect(); //Retornar o resultado
    console.log("Criou o Pool de conexão")
}