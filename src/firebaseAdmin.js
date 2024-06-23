// firebaseAdmin.js
const admin = require('firebase-admin');

const serviceAccount = require('./sindh.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
