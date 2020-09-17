var firebaseConfig = {
    apiKey: "AIzaSyDEb8Nyte7l49VcaE8fhOXEoACrhxZwiGQ",
    authDomain: "nottscaving.firebaseapp.com",
    databaseURL: "https://nottscaving.firebaseio.com",
    projectId: "nottscaving",
    storageBucket: "nottscaving.appspot.com",
    messagingSenderId: "713843150027",
    appId: "1:713843150027:web:2e33e524118c835ddb1f4e"
  };


  // Initialize Firebase
  if (!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
  	 var fileStorage = firebase.storage()
  	 firebase.firestore().enablePersistence()
  }

  window.addEventListener('load', e => {
  findNews()
  findEvent()
  findTrips()
  });

  function findNews()
  {
    var db = firebase.firestore();
  	db.collection("news")
    .orderBy("added", "desc").limit(10)
  	.get()
  	.then(function(querySnapshot) {
  			querySnapshot.forEach(function(doc) {
          displayNews(doc.data().title, doc.data().content, doc.data().author)
        })
      })
  }

  function displayNews(title, message, author)
  {
    var newsDiv = document.createElement('div');

    newsDiv.className = 'card cardStyle';

    var newsTitle = document.createElement('h2');
    newsTitle.className = "title";
  	newsTitle.textContent = title;
  	newsDiv.appendChild(newsTitle);

  	var newsMessage = document.createElement('p');
    newsMessage.className = "message";
  	newsMessage.textContent = message;
  	newsDiv.appendChild(newsMessage);


    var newsAuthor = document.createElement('p');
    newsAuthor.className = "text";
    newsAuthor.textContent = author;
    newsDiv.appendChild(newsAuthor);

    var element = document.getElementById('newsContainer');
  	element.appendChild(newsDiv);
  }

  function findEvent()
  {
    var db = firebase.firestore();
    db.collection("events")
    .orderBy("added", "desc").limit(5)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          displayEvents(doc.data().title, doc.data().content,
          doc.data().price, doc.data().date, doc.data().location)
        })
      })
  }

  function displayEvents(title, content, price, date, location)
  {
    var eventsDiv = document.createElement('div');

    eventsDiv.className = 'card cardStyle';

    var eventsTitle = document.createElement('h2');
    eventsTitle.className = "title";
  	eventsTitle.textContent = title;
  	eventsDiv.appendChild(eventsTitle);

    var eventsSubTitle = document.createElement('h3');
    eventsSubTitle.className = "title";
  	eventsSubTitle.textContent = "Starts on: " + date;
  	eventsDiv.appendChild(eventsSubTitle);

  	var eventsContent = document.createElement('p');
    eventsContent.className = "message";
  	eventsContent.textContent = content;
  	eventsDiv.appendChild(eventsContent);

    var eventPrice = document.createElement('p');
    eventPrice.className = "text";
    eventPrice.textContent = "Price: " + price;
    eventsDiv.appendChild(eventPrice);

    var eventLocation = document.createElement('p');
    eventLocation.className = "text";
    eventLocation.textContent = "Location: " + location;
    eventsDiv.appendChild(eventLocation);

    var element = document.getElementById('eventsContainer');
  	element.appendChild(eventsDiv);
  }

  function findTrips()
  {
    var db = firebase.firestore();
  	db.collection("trips")
    .orderBy("added", "desc").limit(5)
  	.get()
  	.then(function(querySnapshot) {
  			querySnapshot.forEach(function(doc) {
          displayTrips(doc.data().title, doc.data().content,
          doc.data().price, doc.data().date, doc.data().location)
        })
      })
  }

  function displayTrips(title, content, price, date, location)
  {
    var tripsDiv = document.createElement('div');

    tripsDiv.className = 'card cardStyle';

    var tripsTitle = document.createElement('h2');
    tripsTitle.className = "title";
  	tripsTitle.textContent = title;
  	tripsDiv.appendChild(tripsTitle);

    var tripSubTitle = document.createElement('h3');
    tripSubTitle.className = "title";
  	tripSubTitle.textContent = "Starts on: " + date + " Price: " + price;
  	tripsDiv.appendChild(tripSubTitle);

    var tripLocation = document.createElement('h4');
    tripLocation.className = "title";
    tripLocation.textContent = "Location: " + location;
    tripsDiv.appendChild(tripLocation);

  	var tripContent = document.createElement('p');
    tripContent.className = "message";
  	tripContent.textContent = content;
  	tripsDiv.appendChild(tripContent);

    var tripPurchaseBTN = document.createElement('button');
    tripPurchaseBTN.className = "btn btn-primary";
    tripPurchaseBTN.textContent = "Purchase";
    tripPurchaseBTN.setAttribute('onclick', "location.href='https://www.su.nottingham.ac.uk/sports/sport/Caving/';");
    tripsDiv.appendChild(tripPurchaseBTN);

    var element = document.getElementById('tripsContainer');
  	element.appendChild(tripsDiv);
  }

  function saveNews()
  {
    sessionStorage.setItem("type", "news")
    window.location = "edit.html";
  }

  function saveEvent()
  {
    sessionStorage.setItem("type", "event")
    window.location = "edit.html";
  }

  function saveTrip()
  {
    sessionStorage.setItem("type", "trip")
    window.location = "edit.html";
  }
