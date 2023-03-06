const firebaseConfig = {
      apiKey: "AIzaSyCQp4s9Cc7BqbYp3580gDOESuWcSG25cLM",
      authDomain: "kwitter-app-57645.firebaseapp.com",
      databaseURL: "https://kwitter-app-57645-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-57645",
      storageBucket: "kwitter-app-57645.appspot.com",
      messagingSenderId: "849757540461",
      appId: "1:849757540461:web:93fdc4b834bd9570ed2f64",
      measurementId: "G-V1RX26QZ18"
    };
    firebase.initializeApp(firebaseConfig)
//YOUR FIREBASE LINKS
user_name= localStorage.getItem("user_name")
room_name= localStorage.getItem("room_name")
function send(){
      msg= document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,like:0
      })
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name= message_data['name']
message= message_data['message']
like= message_data['like']
nameWithTag= "<h4>"+name+" <img class='user_tick' src='tick.png'></img></h4>"
messageWithTag= "<h4 class='message_h4'>"+message+"</h4>"
likeButton= "<button class='btn-warning' id= "+firebase_message_id+" value= "+like+" onclick= 'update_like(this.id)'>"
spanWithTag= "<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>"
row= nameWithTag+ messageWithTag+ likeButton+ spanWithTag
document.getElementById("output").innerHTML+= row
//End code
      } });  }); }
getData();
function update_like(message_id){
      button_id= message_id
      likes= document.getElementById(button_id).value
      updateLikes= Number(likes)+1
      firebase.database().ref(room_name).child(message_id).update({
           like:updateLikes
      })
}
function logout(){
      localStorage.removeItem("user_name")
      window.location= "index.html"
}