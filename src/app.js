
import express from 'express';
import products from './routes/products.js';
import carts from './routes/carts.js';
import viewsRouter from './routes/views.router.js';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
const app = express();
const puerto = 8080;
app.engine('handlebars', handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');
app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 app.use('/api', products);
 app.use('/api', carts);
 app.use('/',viewsRouter);

app.listen(puerto , ()=>console.log("servidor local Express"));