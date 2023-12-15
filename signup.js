document.addEventListener("DOMContentLoaded", function() {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDAYyEyaQhiZGd-7lRBYNbTXv_8uc_S1-8",
authDomain: "retro-craft-hub.firebaseapp.com",
databaseURL: "https://retro-craft-hub-default-rtdb.firebaseio.com",
projectId: "retro-craft-hub",
storageBucket: "retro-craft-hub.appspot.com",
messagingSenderId: "668766099424",
appId: "1:668766099424:web:f418f8e06bb13548bd3d85",
measurementId: "G-KREF1HV8PX"
};
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const storageRef = firebase.storage().ref();
  var databaseRef = database.ref('/users');

  function main_register(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    var username = document.getElementById("authForm").elements["username"].value;
    var password = document.getElementById("authForm").elements["password"].value;
    var userType = document.getElementById("authForm").elements["userType"].value;
    var profilePicture = document.getElementById('authForm').elements["profilePicture"].files[0];

    console.log('called this function successfully');

    var imageRef = storageRef.child('profilePictures/' + profilePicture.name);

    imageRef.put(profilePicture).then(function(snapshot) {
      console.log('Image uploaded successfully in storage module!');

      imageRef.getDownloadURL().then(function(imageUrl) {
        // Store image URL and other data in Firebase Realtime Database
        databaseRef.child(username).set({
          password: password,
          profilePicture: imageUrl,
          userType: userType,
          username: username
        }).then(function() {
          alert('Congrats data stored in database');
          console.log('Data stored in the realtime database!');
        }).catch(function(error) {
          console.error('Error storing data in the realtime database:', error.message);
        });
      }).catch(function(error) {
        console.error('Error getting image download URL:', error.message);
      });
    }).catch(function(error) {
      console.error('Error uploading image to storage:', error.message);
    });
  }

  document.getElementById("authForm").addEventListener("submit", function(event) {
    main_register(event);
  });
});
