const {io} = require('../server');


io.on('connection', (client) => {

    console.log('Usuario conectado');


    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });



    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });


    // Escuchar el cliente 
    client.on('enviarMensaje', ( data, callback) => {

        console.log(data);

        // de esta forma se envia el mensaje a todos los usuarios que esten conectados a nuestro servidor
        client.broadcast.emit('enviarMensaje', data);


        // if( mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });

        // }else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!'
        //     });

        // }


    })

});