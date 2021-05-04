import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// we need to seed the database

const config = {
  apiKey: "AIzaSyCzNw8d-tbP8pr1hZ4niNHp9sOp-mgySo0",
  authDomain: "flix-net1997.firebaseapp.com",
  projectId: "flix-net1997",
  storageBucket: "flix-net1997.appspot.com",
  messagingSenderId: "643033667970",
  appId: "1:643033667970:web:c43529931529b496ead79b",
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
