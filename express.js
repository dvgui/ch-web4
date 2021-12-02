const express = require('express');

const app = express();
const path = require('path')
const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log(`express escuchando en ${server.address().port}`);
});

server.on("error", error => console.log(`error en el servidor ${error}`));


let html = `<html>
<body>
<h1 style="text: blue">Bienvenidos al servidor express</h1>
</body>
</html>`

let visitas = 1;
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
})
app.get('/visitas', (req, res) => {
    res.send("La cantidad de visitantes es " + visitas++);
})
app.get('/fyh', (req, res) => {
    date = new Date()
    res.send("Son las " + date);
})