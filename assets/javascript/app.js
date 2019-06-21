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

var database = firebase.database();


//button for adding employees
$("#add-train-btn").on("click", function(event){
  event.preventDefault();
  
  //grab user input
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrain = $("#first-train-input").val().trim();
  var frequency = $("#frequency-input").val().trim();

  
  
  
  //creates local "temp" objects for holding train data
  var newTrain = {
    name: trainName,
    dest: destination,
    first: firstTrain,
    freq: frequency,
  };
  
  //uploads employee data to the database
  database.ref().push(newTrain)
  
  $("train-name-input").val("");
  $("destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");
//   var currentTime = moment();
// console.log(currentTime)
// var firstTimeConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
// console.log(firstTimeConverted);
// var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
// console.log(diffTime);
// var tRemainder = diffTime % frequency; 
// console.log(tRemainder);
// var minutesAway = frequency - tRemainder;
// console.log(minutesAway);
// var nextArrival = moment().add(minutesAway, "minutes").format("hh:mm");
// console.log(moment(nextArrival).format("hh:mm"));



  
  
})

//create firebase event for adding trains to database
//adds user input to DOM 

  database.ref().on("child_added", function(childSnapshot) {
  trainName = childSnapshot.val().name;
  destination = childSnapshot.val().dest;
  firstTrain = childSnapshot.val().first;
  frequency = childSnapshot.val().freq;
    console.log(childSnapshot.val())
//moment.js
var currentTime = moment();
console.log(currentTime)
var firstTimeConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log(diffTime);

var tRemainder = diffTime % frequency; 
console.log(tRemainder);
var minutesAway = frequency - tRemainder;
console.log(minutesAway);
var nextArrival = moment().add(minutesAway, "minutes").format("hh:mm");
console.log(moment(nextArrival).format("hh:mm"));


  var newRow = $("<tr>").append (
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(frequency),
    $("<td>").text(nextArrival),
    $("<td>").text(minutesAway)
  );

  $("#train-table").append(newRow);

  
})


