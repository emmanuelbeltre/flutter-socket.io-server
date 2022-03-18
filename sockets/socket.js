const { io } = require('../index');

const Bands = require('../models/bands');

const Band = require('../models/band');



const bands = new Bands();


bands.addBand(new Band('Metalica'));
bands.addBand(new Band('Radiohead'));
bands.addBand(new Band('Fool Fighters'));
bands.addBand(new Band('Imaginee Dragons'));



// console.log(bands);


// mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente Conectado');

    client.emit('active-bands', bands.getBands());

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });


    client.on('vote-band', (payload) => {
        // console.log(payload);

        bands.voteBand(payload.id);
        io.emit('active-bands', bands.getBands());

        // bands.voteBand(payload.id);
        // io.emit('active-bands', bands.getBands());


    });

    //escuchar add-band

    client.on('add-band', (payload) => {

        // console.log(payload);
        const newBand = new Band(payload.name);
        bands.addBand(newBand);
        io.emit('active-bands', bands.getBands());
    });

    client.on('deletle-band', (payload) => {

        bands.deletleBand(payload.id);
        io.emit('active-bands', bands.getBands());

    });


    // client.on('emitir-mensaje', (payload) => {
    //     // console.log('Mi Mensaje', payload);

    //     // io.emit('mensaje', { admin: 'Nuevo Mensaje' })
    //     client.broadcast.emit('nuevo-mensaje', payload);

    // })
});