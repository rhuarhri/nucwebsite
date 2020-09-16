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
  findMembers()
  });

  function findMembers()
  {
    var db = firebase.firestore();
  	//get public notes
  	db.collection("members")
    .orderBy("role")
  	.get()
  	.then(function(querySnapshot) {
  			querySnapshot.forEach(function(doc) {
          displayMemebrs(doc.data().name, doc.data().role)
        })
      })
  }

  function displayMemebrs(name, role)
  {
    var memberDiv = document.createElement('div');

    memberDiv.className = 'card cardButtonStyle';

    var memberName = document.createElement('h2');
    memberName.className = "Title"
  	memberName.textContent = role;
  	memberDiv.appendChild(memberName);

  	var memberRole = document.createElement('p');
    memberRole.className = "Text"
  	memberRole.textContent = name;
  	memberDiv.appendChild(memberRole);

    var element = document.getElementById('members');
  	element.appendChild(memberDiv);
  }
