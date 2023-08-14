
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAjH9PaMzvBVcxFu6CskKu1-G048jHTEL4",
      authDomain: "kwitter-d3fb9.firebaseapp.com",
      databaseURL: "https://kwitter-d3fb9-default-rtdb.firebaseio.com",
      projectId: "kwitter-d3fb9",
      storageBucket: "kwitter-d3fb9.appspot.com",
      messagingSenderId: "877081518595",
      appId: "1:877081518595:web:9794cf1e1a9c05f3ba2436"
    };
    
    // Initialize Firebase
    const firebase= firebase.initialize(firebaseConfig);


user_name = localStorage.getitem("user_name");

function addroom()
{  
      Room_name = document.getElementById("Room_name").value;
firebase.database().ref("/").child("Room_name").value;
purpose : "adding room name"
};

function logout ()  { 
localStorage.removeItem("user_name")
localStorage.removeItem("roon_name")
    window.location ="kwitter.html";
}























document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    function getData() {firebase.database().ref("/").on('value', function(snapshot)  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
