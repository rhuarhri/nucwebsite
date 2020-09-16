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
	if (sessionStorage.getItem("type") == "news")
	{
		setupForNews()
	}
	else if (sessionStorage.getItem("type") == "report")
	{
		setupForReport()
	}
	else if (sessionStorage.getItem("type") == "event")
	{
		setupForEvent()
	}
	else {
		setupForTrip()
	}

})

/*
function enableForm()
{
	document.getElementById("date").disabled = false;
	document.getElementById("location").disabled = false;
	document.getElementById("price").disabled = false;
}*/

function setupForNews()
{
		document.getElementById("pageTitle").innerHTML = "Add news item";
		document.getElementById("author").disabled = true;
		document.getElementById("date").disabled = true;
		document.getElementById("location").disabled = true;
		document.getElementById("price").disabled = true;
}

function setupForTrip()
{
		document.getElementById("pageTitle").innerHTML = "Add upcomming trip";
		document.getElementById("author").disabled = true;
}

function setupForEvent()
{
		document.getElementById("pageTitle").innerHTML = "Add upcomming event";
		document.getElementById("author").disabled = true;
}

function setupForReport()
{
		document.getElementById("pageTitle").innerHTML = "Add trip report";
		document.getElementById("price").disabled = true;
}

/*
function disableForm()
{
	document.getElementById("date").disabled = true;
	document.getElementById("location").disabled = true;
	document.getElementById("price").disabled = true;
}*/

function checkInput(id, message)
{
		if (document.getElementById(id).disabled == false)
		{
			//check for user input
			var input = ""+document.getElementById(id).value
			if (input == "undefined" || input == "")
			{
				alert(message)
				return ""
			}
			else
			{
				return input
			}
		}
		else
		{
			return ""
		}
}

function updateWebsite()
{

	var title = checkInput("title", "You must add a title")
	var content = checkInput("content", "You must add content")
	var author = checkInput("author", "You need to add your name as author")
	var date = checkInput("date", "Add the date when the trip or event starts")
	var price = checkInput("price", "Add the price of the trip or event")
	var location = checkInput("location", "Add the location of the trip or event")

	if (sessionStorage.getItem("type") == "news")
	{
		saveNews(title, content)
	}
	else if (sessionStorage.getItem("type") == "report")
	{
		saveReport(title, content, author, location, date)
	}
	else if (sessionStorage.getItem("type") == "event")
	{
		saveEvent(title, content, location, price,  date)
	}
	else {
		saveTrip(title, content, location, price, "" + date)
	}


	/*
	var title = document.getElementById("title").value;
	var content = document.getElementById("content").value;
	var author = document.getElementById("author").value;

	if (title == "undefined" || title == "")
	{
		alert("You must add a title")
	}
	else if (content == "undefined" || content == "")
	{
		alert("You must add content")
	}
	else if (author == "undefined" || author == "")
	{
		alert("You need to add your name")
	}
	else
	{
		var type = sessionStorage.getItem("type");
		if (type == "news")
		{
			saveNews(title, content, author)
		}
		else {
			var location = document.getElementById("location").value;
			var price = document.getElementById("price").value;
			var date = document.getElementById("date").value;

			if (location == "undefined" || location == "")
			{
				alert("Add the location of the trip or event")
			}
			else if (price == "undefined" || price == "")
			{
				alert("Add the price of the trip or event")
			}
			else if (date == "undefined")
			{
				alert("Add the date when the trip or event starts")
			}
			else {
				if (type == "event")
				{
					saveEvent(title, content, author, location, price, "" + date)
				}
				else {
					saveTrip(title, content, author, location, price, "" + date)
				}
			}



		}*/

	}

	function saveNews(title, content)
	{
		if (title != "" && content != "")
		{
			var createdAt = new Date()//date of added to website
			var path = "news"
			var db = firebase.firestore();
			db.collection(path)
			.add(
				{
					title:title,
					content:content,
					author:"",
					added:createdAt
				}
			).then(function()
			{
				console.log("data saved")
				window.location = "index.html";
			})
		}

	}



function saveEvent(title, content, location, price, date)
{
	if (title != "" && content != "" && location != "" && price != "" && date != "")
	{
		var createdAt = new Date()//date of added to website
		var path = "events";
		var db = firebase.firestore();
		db.collection(path)
		.add(
			{
				title:title,
				content:content,
				author:"",
				added:createdAt,
				location: location,
				price: price,
				date: date
			}
		).then(function()
		{
			console.log("data saved")
			window.location = "index.html";
		})
	}
}

function saveTrip(title, content, location, price, date)
{
	if (title != "" && content != "" && location != "" && price != "" && date != "")
	{
		var createdAt = new Date()//date of added to website
		var path = "trips";
		var db = firebase.firestore();
		db.collection(path)
		.add(
			{
				title:title,
				content:content,
				author:"",
				added:createdAt,
				location: location,
				price: price,
				date:date
			}
		).then(function()
		{
			console.log("data saved")
			window.location = "index.html";
		})
	}
}

function saveReport(title, content, author, location, date)
{
	if (title != "" && content != "" && location != "" && author != "" && date != "")
	{
		var createdAt = new Date()//date of added to website
		var path = "reports";
		var db = firebase.firestore();
		db.collection(path)
		.add(
			{
				title:title,
				content:content,
				author:"",
				added:createdAt,
				location: location,
				date:date
			}
		).then(function()
		{
			console.log("data saved")
			window.location = "index.html";
		})
	}
}
