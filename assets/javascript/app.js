var firebaseConfig = {
    apiKey: "AIzaSyAqjJ2Rf-yMvx88jea-hXtn2k9LFTKmeZE",
    authDomain: "train-schedule-e735e.firebaseapp.com",
    databaseURL: "https://train-schedule-e735e.firebaseio.com",
    projectId: "train-schedule-e735e",
    storageBucket: "train-schedule-e735e.appspot.com",
    messagingSenderId: "1099360661273",
    appId: "1:1099360661273:web:b54c84f5af121481"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//button for adding employees
$("#add-train-btn").on("click", function(event){
  event.preventDefault();

  //grab user input
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var frequency = $("#frequency-input").val().trim();
  var nextArrival = $("#next-arrival-input").val().trim();
  

  //creates local "temp" objects for holding train data
  var newTrain = {
    name: trainName,
    dest: destination,
    freq: frequency,
    next: nextArrival,
    away: minutesAway
  };

  //uploads employee data to the database
  database.ref().push(newTrain)

  $("train-name-input").val("");
  $("destination-input").val("");
  $("#frequency-input").val("");
  $("#next-arrival-input").val("");
  $("minutes-away-input").val("");
})

//create firebase event for adding trains to database
//adds user input to DOM 

database.ref().on("child_added", function(childSnapshot) {
  trainName = childSnapshot.val().name;
  destination = childSnapshot.val().dest;
  frequency = childSnapshot.val().freq;
  nextArrival = childSnapshot.val().next;
 


  var newRow = $("<tr>").append (
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(frequency),
    $("<td>").text(nextArrival),
    $("<td>").text(minutesAway)
  );




})