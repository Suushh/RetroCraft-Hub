// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5NU9gRsViq-JwyVt6VWfXZa8mKGOrXzg",
    authDomain: "login-database-df773.firebaseapp.com",
    databaseURL: "https://login-database-df773-default-rtdb.firebaseio.com",
    projectId: "login-database-df773",
    storageBucket: "login-database-df773.appspot.com",
    messagingSenderId: "30734586988",
    appId: "1:30734586988:web:1daefe6c21b36afbb97449",
    measurementId: "G-9FN2N2RVN6"
  };
    firebase.initializeApp(firebaseConfig);
    
    
    const database = firebase.database();   
      //login function to verify database
    function checker() {
      var email= document.getElementById("email").value;
      var password= document.getElementById("password").value;
      var full_name= document.getElementById("full_name").value;
            
  
      const usersRef = firebase.database().ref("users");
  
  
  
      usersRef.orderByChild("email").equalTo(email).once("value")
          .then(snapshot => {
          
            const user = snapshot.val();
            var storedPassword = user[Object.keys(user)[0]].password;
           
  
  
            
           
  
            if ((storedPassword - password)===0 ) {
             
              window.location.href = "main.html";

            } else {
              alert('oops wrong  password');
            }
          })
          .catch(error => {
            alert("Email not found");
            console.error("Error fetching user data:", error);
          });
   }


   function register () {
     
   

   }
  
    
    