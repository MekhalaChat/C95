//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send()
{  
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}

//End code
      } });  }); }
getData();
