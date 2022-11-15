import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBn6wFRZ9F7viwuLx_6sDFPMlHai486L24",
  authDomain: "expensify-44769.firebaseapp.com",
  databaseURL: "https://expensify-44769-default-rtdb.firebaseio.com",
  projectId: "expensify-44769",
  storageBucket: "expensify-44769.appspot.com",
  messagingSenderId: "449697607742",
  appId: "1:449697607742:web:f23561970c370e176d216f",
  measurementId: "G-LHQ74GK2CN"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
  name: 'Andrew Mead',
  age: 26,
  isSingle: false,
  location: {
    city: 'Philadelphia',
    country: 'United States'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed.', e);
});

database.ref('isSingle').set(null);

// database.ref().remove()
//   .then(() => {
//     console.log('Data was removed');
//   })
//   .catch((e) => {
//     console.log('Did not remove data', e);
//   });



