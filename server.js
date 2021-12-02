const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hola y '+saludo());
    

})

const connectedServer = server.listen(8080, () => {

    console.log('servidor http escuchando en ' + connectedServer.address().port)
})

const saludo = () => {
    const time = new Date().getHours();
    if (time > 6 && time < 13){
        return "buenos dias"
    } else {
        if (time < 19){
            return "buenas tardes";
        }else {
            return "buenas noches"
        }
    }
}