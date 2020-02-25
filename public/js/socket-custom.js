var socket = io();
        
socket.on('connect', function(){

    console.log('Conectado al servidor');
});


// Escuchar (on)

socket.on('disconnect', function(){

    console.log('Perdimos conexion con el servidor');

});


// Enviar informacion (emit)
socket.emit('enviarMensaje', {
    usuario: 'Juan',
    mensaje: 'Hola Mundo'
}, function( resp ){

    console.log('respuesta server: ', resp );

});


//Escuchar Informacion 

socket.on('enviarMensaje', function(mensaje){

    console.log('Sevidor:', mensaje);

});
