//Author: Pedro Paulo Machado Silveira Souza
//Created-At: 30/04/2020 20:24
//Updated-At: -
//Node.js (back-end) main-file da Aplicação // Teste 5zeros

const express=require('express');
const routes=require('./routes');
const bodyParser=require('body-parser');
const handlebars=require('express-handlebars')

//puxa o arquivo de conexão com a database e migrations (add new columns example) 
require('./database');

//conexao com servidor
const app = express();

//cfg Express (interpretar em JSON) (bom pra inicio e integração com insomnia)
app.use(express.json());


//cfg Handlbars(framework para renderizar HTML)
app.engine('handlebars', handlebars({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');


//cfg Body Parser ()
app.use(bodyParser.urlencoded({extended : false }));
app.use(bodyParser.json());

//cfg Rotas (que serão usadas pra URL, importadas do arquivo ./routes.js)
app.use(routes);

app.listen(5000);