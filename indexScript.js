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
