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
//ADD YOUR FIREBASE LINKS HERE
username= localStorage.getItem("user_name")
document.getElementById("username").innerHTML= "Welcome "+ username+ "!"
function addRoom(){
      room_name= document.getElementById("roomName").value
      firebase.database().ref("/").child(room_name).update({
            purpose: "addingRoomName"
      })
      localStorage.setItem("room_name", room_name)
      window.location= "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      window.location= "index.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names) 
row= "<div class= 'room_name' id= "+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML+= row
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location= "kwitter_page.html"
}
