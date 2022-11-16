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

database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
});

// const onValueChange = database.ref().on('value',
//   (snapshot) => { console.log(snapshot.val()); },
//   (e) => { console.log('Error with data fetching', e); })

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   })

// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   isSingle: false,
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle').set(null); // Another way to remove

// database.ref().remove()
//   .then(() => {
//     console.log('Data was removed');
//   })
//   .catch((e) => {
//     console.log('Did not remove data', e);
//   });