import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
//import { firestorePlugin } from 'vuefire'
//Vue.use(firestorePlugin)

const firebaseConfig = {
  apiKey: "AIzaSyDXRB3n2GBkqOesS7ErD7l4Jbwecd-qtKw",
  authDomain: "emerhubtest-1d0a6.firebaseapp.com",
  databaseURL: "https://emerhubtest-1d0a6.firebaseio.com",
  projectId: "emerhubtest-1d0a6",
  storageBucket: "emerhubtest-1d0a6.appspot.com",
  messagingSenderId: "523563809943",
  appId: "1:523563809943:web:012470097919907ff8bdd2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
export { db };