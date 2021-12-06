const firebaseConfig = {
    apiKey: "AIzaSyAOrsEFb3GSQnDC_OlWXgAvgWbaMnnbc18",
    authDomain: "to-do-live-project.firebaseapp.com",
    projectId: "to-do-live-project",
    storageBucket: "to-do-live-project.appspot.com",
    messagingSenderId: "1094775729517",
    appId: "1:1094775729517:web:0357cb83f0d44456977e64",
    measurementId: "G-4Y80VD3BFQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();