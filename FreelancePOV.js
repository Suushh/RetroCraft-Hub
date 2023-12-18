// Check if firebase is already initialized

  // Your script code here

if (!firebase.apps.length) {
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
}

// Initialize database if it doesn't exist
const database =  firebase.app().database();
const storageRef = firebase.storage().ref();
const databaseRef = database.ref('/users');
var getusername = localStorage.getItem("loggedInUsername");

function profileshow() {
  var getusername = localStorage.getItem("loggedInUsername");
  const usersRef = database.ref("users");
  var isVisible = datacontainer.style.display !== "none";

  if(!datacontainer)
  {
    console.error("NOT found datpacontainer");
  }
  usersRef.orderByChild('username').equalTo(getusername).once("value")
      .then(snapshot => {
          const user = snapshot.val();
          var username = getusername;
          var userType = user[Object.keys(user)[0]].userType;
          var description = user[Object.keys(user)[0]].description;
          var profilePictureUrl = user[Object.keys(user)[0]].profilePicture;

          console.log(user);
          datacontainer.innerHTML = `
              <p>USERNAME: ${username}</p>
              <p>USERTYPE: ${userType}</p>
              <p>DESCRIPTION: ${description}</p>
              <img src="${profilePictureUrl}" alt="Profile Picture" style="width: 200px; height: 200px;">
          `;
          datacontainer.style.display = isVisible ? "none" : "block";
      });
}

function showjobs() {
  // Implement your logic to show jobs
}

