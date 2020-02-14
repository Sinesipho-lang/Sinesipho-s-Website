// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyAny4ZxiTeDO0AMW0JRzW_osWvCSGjcjdw",
    authDomain: "sinesipho-86b3f.firebaseapp.com",
    databaseURL: "https://sinesipho-86b3f.firebaseio.com",
    projectId: "sinesipho-86b3f",
    storageBucket: "sinesipho-86b3f.appspot.com",
    messagingSenderId: "952102785310",
    appId: "1:952102785310:web:d0b4b04027f77d2dca390f",
    measurementId: "G-HQ1Z63QWF5"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactform').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(fname, lname, email, phone, message);
  
    // Clear form
    document.getElementById('contactform').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(fname, lname, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      fname:fname,
      lname:lname,
      email:email,
      Phone:phone,
      message:message
    });
  }
  