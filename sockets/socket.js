const { io } = require('../index');

// mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente Conectado');


    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    client.on('mensaje', (payload) => {
        console.log('Mi Mensaje', payload);

        io.emit('mensaje', { admin: 'Nuevo Mensaje' })

    })
});