//1) Me traigo firebase
import firebase from 'firebase/app'

//2) Me traigo firestore
import 'firebase/firestore'

//3) Copio mis credenciales
const firebaseConfig = {
  apiKey: "AIzaSyBSvLQ2m-KqtvRpU9gLzOm8AZ-A11SpHX0",
  authDomain: "proyecto-react-coderhous-c7bba.firebaseapp.com",
  projectId: "proyecto-react-coderhous-c7bba",
  storageBucket: "proyecto-react-coderhous-c7bba.appspot.com",
  messagingSenderId: "245971905836",
  appId: "1:245971905836:web:e1e89b65f797359f819089"
}

//4) Inicializo firebase
const app = firebase.initializeApp(firebaseConfig)

//5) Me traigo una referencia de firestore
export const firestore = firebase.firestore(app) 