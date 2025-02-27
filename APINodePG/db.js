//Função de conexão com o banco
async function connect() {
    if (global.connection) {
        return global.connection.connect();

        const {Pool} = require("pg")
        const Pool = new Pool({
            connectionString: process.env.CONNECTION_STRING
        })
        const cliente = await Pool.connect();
        console.log("criou o pool de conexão")

        const res = await cliente.query("select now()");
        console.log(res.rows[0]);
        cliente.release();

        global.connection = pool;
        return pool.connect();
    }
    connect();
}