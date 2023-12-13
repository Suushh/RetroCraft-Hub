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
    
    const auth = firebase.auth()
    const database = firebase.database()
    
    
    function register () {
     
      email = document.getElementById('email').value
      password = document.getElementById('password').value
      full_name = document.getElementById('full_name').value
     
    
  
      if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
        
      }
      
     
      
      auth.createUserWithEmailAndPassword(email, password)
      .then(function() {
        
        var user = auth.currentUser
    
        
        var database_ref = database.ref()
    
        
        var user_data = {
          email : email,
          full_name : full_name,
         password : password,
         
        }
    
        
        database_ref.child('users/'+ auth.currentUser.uid).set(user_data)
    
        // DOne
        alert('User Created!!')
      })
      .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
      })
    }
    
    // Set up our login function
    function login () {
      
      email = document.getElementById('email').value
      password = document.getElementById('password').value
      full_name=document.getElementById('full_name').value
    
      
      if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
       
      }
    
      auth.signInWithEmailAndPassword(email, password)
      .then(function() {
        // Declare user variable
        var user = auth.currentUser
    
        // Add this user to Firebase Database
        var database_ref = database.ref()
    
        
        // DOne
        alert('User Logged In!!')
    
      })
      .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
      }) 
    }
    function checker() {
      var email= document.getElementById("email").value;
      var password= document.getElementById("password").value;
      var full_name= document.getElementById("full_name").value;
  
  
      const usersRef = firebase.database().ref("users");
  
  
  
      usersRef.orderByChild("email").equalTo(email).once("value")
          .then(snapshot => {
          
            const user = snapshot.val();
            var storedPassword = user[Object.keys(user)[0]].password;
            console.log(user);
            console.log(storedPassword);
            console.log(password);
           
  
  
            
           
  
            if ((storedPassword - password)===0 ) {
              alert('Congrats data found in database and you are logged in !!!')
            } else {
              alert('oops wrong email or password');
            }
          })
          .catch(error => {
            alert("Email not found");
            console.error("Error fetching user data:", error);
          });
   }
  
    
    // Validate Functions
    function validate_email(email) {
      expression = /^[^@]+@\w+(\.\w+)+\w$/
      if (expression.test(email) == true) {
        // Email is good
        return true
      } else {
        // Email is not good
        return false
      }
    }
    
    function validate_password(password) {
      // Firebase only accepts lengths greater than 6
      if (password < 6) {
        return false
      } else {
        return true
      }
    }
    
   