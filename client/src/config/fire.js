import firebase from "firebase";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyBspb87rw0-QZeA529PV3CofHkeimWDok8",
  authDomain: "easyaccess-9ffaa.firebaseapp.com",
  databaseURL: "https://easyaccess-9ffaa.firebaseio.com",
  projectId: "easyaccess-9ffaa",
  storageBucket: "easyaccess-9ffaa.appspot.com",
  messagingSenderId: "566756662233",
  appId: "1:566756662233:web:ba5fc14feb2a91276f97c8",
  measurementId: "G-2FTFKJXW13"
};
// Initialize Firebase
const fire = firebase.initializeApp(config);

export default fire;
