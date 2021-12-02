const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.port || 3000;
const PROD_FILE = path.resolve(__dirname, 'products.json')


/* let prod1 = { "name": "shirt", "price" : 12 };
let prod2 = { "name": "shoe", "price" : 23 };
let prod3 = { "name": "trouser", "price" : 8 }; */

const read = (path) =>{
    try{
        const content = fs.readFileSync(path,"utf-8");
        return JSON.parse(content);
    }
    catch(err){
        console.warn("Read error " + err);
    }
}



const server = app.listen(PORT, () => {
    console.log(`express escuchando en ${server.address().port}`);
});

server.on("error", error => console.log(`error en el servidor ${error}`));


let visitas = 1;
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
})
app.get('/productos', (req, res) => {
    console.log(read(PROD_FILE))
    res.send(read(PROD_FILE));
})
app.get('/productoRandom', (req, res) => {
    console.log(read(PROD_FILE))
    prods = read(PROD_FILE);
    let item = prods[Math.floor(Math.random()*prods.length)];
    res.send(item);
})
app.get('/fyh', (req, res) => {
    date = new Date()
    res.send("Son las " + date);
})