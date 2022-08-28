var firebaseConfig = {
    apiKey: "AIzaSyBO5WqWptxw2p_xHQPA7QP9NQmyPY2ard4",
    authDomain: "lets-chat-5f1da.firebaseapp.com",
    projectId: "lets-chat-5f1da",
    storageBucket: "lets-chat-5f1da.appspot.com",
    messagingSenderId: "264406209848",
    appId: "1:264406209848:web:fa3dac724394ed073c9dcd"
  };
  
   firebase.initializeApp(firebaseConfig);

function send(){
    msg = document.getElementById(msg).ariaValueMax;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(message_data);
      name = message_data['name'];
      message - message_data['message'];
      like = message_data['like']
      name_with_tag = "<h4>"+ name +"<img> class='user_tick' src=''tick.png></h4>";
      message_with_tag = "<h4 class=''message_h4>"+ message+"<h4>";
      like_button = "button class='btn btn-warning id='"+firebase_message_id+"'vlaue='"+like+ "'onclick=''updateLike(this.id)'>";
      span_with_tag - "<span class='glyphicon glyphicon-thumbs-ups'>like: "+ like+ "</span></button><hr>";
      row = name_with_tag+ message_with_tag + like_button + span_with_tag;
      
//End code
    } });  }); }
getData();