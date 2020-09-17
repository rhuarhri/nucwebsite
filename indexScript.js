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
  });

  function findNews()
  {
    var db = firebase.firestore();
  	//get public notes
  	db.collection("news")
  	.get()
  	.then(function(querySnapshot) {
  			querySnapshot.forEach(function(doc) {
          displayNews(doc.data().title, doc.data().message)
        })
      })
  }

  function displayNews(title, message)
  {
    var newsDiv = document.createElement('div');

    newsDiv.className = 'card cardButtonStyle'; //cardSize

    var newsTitle = document.createElement('h2');
    newsTitle.className = "title"
  	newsTitle.textContent = title;
  	newsDiv.appendChild(newsTitle);

  	var newsMessage = document.createElement('p');
    newsMessage.className = "message"
  	newsMessage.textContent = message;
  	newsDiv.appendChild(newsMessage);

    var element = document.getElementById('newsContainer');
  	element.appendChild(newsDiv);
  }

  function displayEvent(title, event)
  {

  }

  function dispayTrip(title, discription, location)
  {

  }

  function displayTripReport(title, discription, author)
  {
    
  }
