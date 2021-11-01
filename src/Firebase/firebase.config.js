console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;





  // apiKey: "AIzaSyD76F-5-cevtCK3SARa7Zds1SbkXNtQ1Xg",
  // authDomain: "tourism-website-c5dd8.firebaseapp.com",
  // projectId: "tourism-website-c5dd8",
  // storageBucket: "tourism-website-c5dd8.appspot.com",
  // messagingSenderId: "319102920116",
  // appId: "1:319102920116:web:20553bdc011994305bbee1"