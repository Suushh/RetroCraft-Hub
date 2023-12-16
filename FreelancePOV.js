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
    





function  profileshow() {
   var getusername=localStorage.getItem("loggedInUsername");
   const usersRef = firebase.database().ref("users");
   var isVisible = datacontainer.style.display !== "none";
   usersRef.orderByChild('username').equalTo(getusername).once("value")
          .then(snapshot => {
          
            const user = snapshot.val();

          var username=getusername;
           var userType= user[Object.keys(user)[0]].userType;
           var description=user[Object.keys(user)[0]].description;
           var profilePictureUrl = user[Object.keys(user)[0]].profilePicture;

           console.log(userType);
           datacontainer.innerHTML = `
           <p>USERNAME: ${username}</p>
           <p>USERTYPE: ${userType}</p>
           <p>DESCRIPTION: ${description}</p>
           <img src="${profilePictureUrl}" alt="Profile Picture" style= "width : 200px height :auto">
         `;
         datacontainer.style.display = isVisible ? "none" : "block";

         });



   

}