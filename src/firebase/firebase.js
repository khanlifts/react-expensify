// import everything from firebase and store it in firebase
import * as firebase from 'firebase';
import moment from 'moment';
// set the config
const config = {
   apiKey: "AIzaSyBXKP9_tQo4ILxD_qVH-QtICu3PrhFrh_8",
   authDomain: "expensify-fac5d.firebaseapp.com",
   databaseURL: "https://expensify-fac5d.firebaseio.com",
   projectId: "expensify-fac5d",
   storageBucket: "expensify-fac5d.appspot.com",
   messagingSenderId: "232004551761"
 };
// connect to firebase
firebase.initializeApp(config);
// test firebase connection by writing first entry
const database = firebase.database();

export { firebase, database as default }; 

// --------------------------------------------------------------------
// Reference Area
/*
database.ref().set({
    username: 'Cyril',
    email: 'cyrilkhan8@gmail.com',
    isSingle: false,
    age: 30,
    stressLevel: 7,
    job: {
      title: 'Software Developer',
      company: 'Google'
    },
    location: {
      city: 'Philadelphia',
      country: 'United States'
    }
  }).then(() => {
    console.log('Data is saved');
  }).catch((e) => {
    console.log('This error occurred: ', e);
  });
*/

// remove isSingle
/*
database.ref('isSingle').remove()
  .then(() => {
    console.log('Data successfully removed');
  })
  .catch((e) => {
    console.log('This error occured: ', e);
  });

update entries

database.ref().update({
  username: 'Cyril Khan',
  profession: 'Software Developer'
});

change stressLevel to 9, job to Amazon, location to Seattle
database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});
*/

// read data once

/*
database.ref().once('value').
  then((snapshot) => {
    const value = snapshot.val();
    console.log(value);
  }).catch((e) => {
    console.log('This error occurred: ', e);
  })
/*

// subscribe to data changes
/*
database.ref().on('value', (dataSnapshot) => {
  const readReadyData = dataSnapshot.val();
  const { username, job, location } = readReadyData;
  console.log(`${username} is a ${job.title} from ${location.city}`);
});
*/

// unsubscribe

// database.ref().off();

// Challenge: Setup "expenses" with three items (description, note, amount, createdAt)
/*
const databaseTestEntries = [{
  description: 'Cookie',
  note: '20g Protein Cookie',
  amount: 20,
  createdAt: moment().format("Do MMM YY")
}, {
  description: 'Cake',
  note: '150g Protein Cake',
  amount: 1,
  createdAt: moment().format("Do MMM YY")
}, {
  description: 'Shake',
  note: '20g Protein Shake',
  amount: 5,
  createdAt: moment().format("Do MMM YY")
}];

const populateDatabaseWith = (childNode, databaseEntriesArray) => {
  databaseEntriesArray.forEach((entry) => {
    database.ref(childNode).push({
      description: entry.description,
      note: entry.note,
      amount: entry.amount,
      createdAt: entry.createdAt
    });
  });
};

populateDatabaseWith('expenses', databaseTestEntries);
*/

// Challenge:
// 1. Subscribe to database.
// 2. Make snapshot of each child
// 3. Push Snapshots onto expenses array
// 4. Log array.

/*
database.ref('expenses')
  .on('value', (dataSnapshot) => {
    const expenses = [];

    dataSnapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
   console.log(expenses);
});
*/

// Challenge:
// 1. Use child_removed subscription
/*
database.ref('expenses').on('child_removed', (dataSnapshot) => {
  console.log(dataSnapshot.key, dataSnapshot.val());
});
*/

// 2. Use child_changed subscription
/*
database.ref('expenses').on('child_changed', (dataSnapshot) => {
  console.log(dataSnapshot.key, dataSnapshot.val());
});
*/

// 2. Use child_added subscription
/*
database.ref('expenses').on('child_added', (dataSnapshot) => {
  console.log(dataSnapshot.key, dataSnapshot.val());
});
*/
