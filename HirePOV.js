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
var databaseRef1 = database.ref('/jobs');
var getusername = localStorage.getItem("loggedInUsername");
var isVisible = datacontainer.style.display !== "none";
function profileshow() {
    var getusername = localStorage.getItem("loggedInUsername");
    const usersRef = firebase.database().ref("users");

    usersRef.orderByChild('username').equalTo(getusername).once("value")
        .then(snapshot => {

            const user = snapshot.val();

            var username = getusername;
            var userType = user[Object.keys(user)[0]].userType;

            var profilePictureUrl = user[Object.keys(user)[0]].profilePicture;

            console.log(userType);
            datacontainer.innerHTML = `
           <p>USERNAME: ${username}</p>
           <p>USERTYPE: ${userType}</p>
           
           <img src="${profilePictureUrl}" alt="Profile Picture" style= "width : 200px height :200px">
         `;
         
        });
}
// Function to create and add jobs to the database
function createJob(event) {
    // Extract producer username from localStorage
    event.preventDefault();
    const producerUsername = localStorage.getItem("loggedInUsername");

    // Check if the producer is logged in
    // if (producerUsername) {
    //     // Prompt user for job details
    //     const title = prompt("Enter job title:");
    //     const payGrade = prompt("Enter pay grade:");
    //     const experience = prompt("Enter required experience:");

    //     // Check if user provided information
    //     if (title && payGrade && experience) {
    //         // Get a reference to the root of the database
    //         const rootRef = firebase.database().ref();

    //         // Check if the 'jobs' node exists
    //         rootRef.child('jobs').child('producerUsername').once('value')
    //             .then(snapshot => {
    //                 if (!snapshot.exists()) {
    //                     // If 'jobs' node doesn't exist, create it
    //                     rootRef.child('jobs').set({});
    //                 }

    //                 // Get a reference to the 'jobs' node in the database
    //                 const jobsRef = rootRef.child('jobs');

    //                 // Push the job data to the 'jobs' node with producer's username
    //                 jobsRef.push({
    //                     producerUsername: producerUsername,
    //                     title: title,
    //                     payGrade: payGrade,
    //                     experience: experience
    //                 });

    //                 // Notify user that the job has been created
    //                 alert("Job created successfully!");
    //             });
    //     } else {
    //         // Notify user that all information is required
    //         alert("Please provide all job details.");
    //     }
    // } else {
    //     // Notify user that the producer is not logged in
    //     alert("Producer not logged in. Please log in to create a job.");
    // }
    var experience = document.getElementById("Job").elements["experience"].value;
    var payGrade = document.getElementById("Job").elements["payGrade"].value;
    var title = document.getElementById("Job").elements["title"].value;
    databaseRef1.child(getusername).set({
        experience: experience,
        payGrade: payGrade,
        title: title,
        username: getusername,
        type: "hire",
        
      }).then(function() {
        alert("Your job was created successfully!!");
        

      });


}

document.getElementById("Form").addEventListener("submit", function(event){
    createJob(event);
});