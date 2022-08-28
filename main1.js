var firebaseConfig = {
    apiKey: "AIzaSyBO5WqWptxw2p_xHQPA7QP9NQmyPY2ard4",
    authDomain: "lets-chat-5f1da.firebaseapp.com",
    projectId: "lets-chat-5f1da",
    storageBucket: "lets-chat-5f1da.appspot.com",
    messagingSenderId: "264406209848",
    appId: "1:264406209848:web:fa3dac724394ed073c9dcd"
  };
  
   firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";
function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"addingRoomName"
    });
    localStorage.setItem("room_name", room_name);
    window.location="index3.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "index3.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}