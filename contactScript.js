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
