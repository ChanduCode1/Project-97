var firebaseConfig = {
  apiKey: "AIzaSyBodxXdErDx4a5Q3uyUu6EczqZZ4-WKwEk",
  authDomain: "kwitter-23f1f.firebaseapp.com",
  databaseURL: "https://kwitter-23f1f-default-rtdb.firebaseio.com",
  projectId: "kwitter-23f1f",
  storageBucket: "kwitter-23f1f.appspot.com",
  messagingSenderId: "296420491859",
  appId: "1:296420491859:web:a669b601b6d18d1a42fca6"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
   room_name = document.getElementById("room_name").value;


   firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"    
   });


   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code


  console.log("Room Name - " + Room_name);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
        window.location = "kwitter.html";
}
