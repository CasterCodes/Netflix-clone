import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// we need to seed the database

const config = {
  apiKey: "***",
  authDomain: "****",
  projectId: "flix-net1997",
  storageBucket: "flix-net1997.appspot.com",
  messagingSenderId: "***",
  appId: "***",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
