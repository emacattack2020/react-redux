import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBMOjmNMQaMnL0ly5BL-Lgyv7R3ab0KY1o",
    authDomain: "goalcoach-f4d7e.firebaseapp.com",
    databaseURL: "https://goalcoach-f4d7e.firebaseio.com",
    projectId: "goalcoach-f4d7e",
    storageBucket: "",
    messagingSenderId: "39862009145"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');