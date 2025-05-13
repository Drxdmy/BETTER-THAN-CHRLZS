// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKqvKARMldprCM0A-NdDe382fKXGClAaY",
  authDomain: "btchizl.firebaseapp.com",
  projectId: "btchizl",
  storageBucket: "btchizl.firebasestorage.app",
  messagingSenderId: "113542799682",
  appId: "1:113542799682:web:0b2df380ef6e172e5d68db",
  measurementId: "G-RCQHVSFFQS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
