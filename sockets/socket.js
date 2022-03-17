const { io } = require('../index');

const Bands = require('../models/bands');

const Band = require('../models/band');



const bands = new Bands();


bands.addBand(new Band('Metalica'));
bands.addBand(new Band('Radiohead'));
bands.addBand(new Band('Fool Fighters'));



// console.log(bands);


// mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente Conectado');

    client.emit('active-bands', bands.getBands());

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    client.on('emitir-mensaje', (payload) => {
        // console.log('Mi Mensaje', payload);

        // io.emit('mensaje', { admin: 'Nuevo Mensaje' })
        client.broadcast.emit('nuevo-mensaje', payload);

    })
});