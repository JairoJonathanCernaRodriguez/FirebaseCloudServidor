// Requerir el SDK de Firebase Admin
const admin = require('firebase-admin');

// Inicializar el SDK de Firebase Admin con la clave del servicio
const serviceAccount = require('./serviceAccountKey.json'); // Ruta a tu archivo JSON de clave

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// El token del dispositivo al que enviarás la notificación
const registrationToken = 'ell-K9HYSvO1jH-by-yM1k:APA91bFWO8acnRTXIivW0VgBKfYVymeDSBdQ5_1bz1NdcQ83CByFlEmVOGF0cl_crTFCPsroXaBqDFTrgLC4EiBFk3RXvEmzOX9uB971zwO_4JWqbIaWC0k';  // Reemplaza con el token del dispositivo

// Crear el mensaje de notificación
const message = {
  notification: {
    title: 'Notificación',
    body: '¡Camara hijo ponte a jalar!'
  },
  token: registrationToken // El token del dispositivo receptor
};

// Enviar el mensaje push
admin.messaging().send(message)
  .then((response) => {
    console.log('Notificación enviada con éxito:', response);
  })
  .catch((error) => {
    console.log('Error al enviar la notificación:', error);
  });
