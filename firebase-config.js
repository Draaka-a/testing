// Konfigurasi Firebase project "Testing" milik Dika
const firebaseConfig = {
  apiKey: "AIzaSyAWn2kWyhxLmskNpBUEGcm9jQUyl1CnW1Q",
  authDomain: "testing-b0047.firebaseapp.com",
  projectId: "testing-b0047",
  storageBucket: "testing-b0047.firebasestorage.app",
  messagingSenderId: "553261842409",
  appId: "1:553261842409:web:6428d5c50dd672a9679578"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
