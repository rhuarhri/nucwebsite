var firebaseConfig = {
    apiKey: "AIzaSyDvIbnsJ9YEEQRWwSA5P5rJ6BrYFJtbMZ0",
    authDomain: "nucaving-bfeab.firebaseapp.com",
    databaseURL: "https://nucaving-bfeab.firebaseio.com",
    projectId: "nucaving-bfeab",
    storageBucket: "nucaving-bfeab.appspot.com",
    messagingSenderId: "568731037103",
    appId: "1:568731037103:web:493a58c7f69c2205e3935a",
    measurementId: "G-SH0S66B193"
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
  	 var fileStorage = firebase.storage()
  	 firebase.firestore().enablePersistence()
  }

window.addEventListener('load', e => {
  findTripReports()
});

function addTrip()
{
  sessionStorage.setItem("type", "report")
  window.location = "edit.html";
}

function findTripReports()
{
  var db = firebase.firestore();
  db.collection("reports")
  .orderBy("added", "desc").limit(20)
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        displayReport(doc.data().title, doc.data().content,
        doc.data().author, doc.data().date, doc.data().location)
      })
    })
}

function displayReport(title, content, author, date, location)
{
  var tripsDiv = document.createElement('div');

  tripsDiv.className = 'card cardStyle';

  var tripsTitle = document.createElement('h2');
  tripsTitle.className = "title";
  tripsTitle.textContent = title;
  tripsDiv.appendChild(tripsTitle);

  var tripLocation = document.createElement('h4');
  tripLocation.className = "title";
  tripLocation.textContent = "Location: " + location;
  tripsDiv.appendChild(tripLocation);

  var tripContent = document.createElement('p');
  tripContent.className = "message";
  tripContent.textContent = content;
  tripsDiv.appendChild(tripContent);

  var element = document.getElementById('reportContainer');
  element.appendChild(tripsDiv);
}
