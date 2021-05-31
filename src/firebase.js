import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBSEikIeZLGflLwJRw6NR5zqmIFUTSF-SQ',
  authDomain: 'reddit-clone-ef34c.firebaseapp.com',
  projectId: 'reddit-clone-ef34c',
  storageBucket: 'reddit-clone-ef34c.appspot.com',
  messagingSenderId: '416678503927',
  appId: '1:416678503927:web:95a33e97c0e1876cb93af2',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
