// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBzoCoYBp4ia6gc_dTiNbPxO7JfiQwedx0",
//   authDomain: "codetribe-marketplace-fae23.firebaseapp.com",
//   projectId: "codetribe-marketplace-fae23",
//   storageBucket: "codetribe-marketplace-fae23.firebasestorage.app",
//   messagingSenderId: "496738010749",
//   appId: "1:496738010749:web:f790c37d3fc8c5a9e51314"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Adjust the path if necessary

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<codetribe-marketplace-fae23>.firebaseio.com',
});

module.exports = admin;
