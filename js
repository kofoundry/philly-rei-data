/* 1. Grab the input */
    function resetInput() {
    document.querySelector("search").value.reset();
    }


    //  function userInput(input) {

          document.querySelector(".js-go").addEventListener('click',function(){
          var input = document.querySelector("input").value;
          searchRecords(input);
           document.getElementById('search').value = "";

          console.log(input);


      });


      document.querySelector(".js-userinput").addEventListener('keyup',function(e){
          	var input = document.querySelector("input").value;


              // if the key ENTER is pressed ...
                 if(e.which === 13) {
          searchRecords(input);
          console.log(input)
                    	//	pushToDOM(input);

                       document.getElementById('search').value = "";

      };

          });

//var inputValue = userInput().value;
//console.log(inputValue);

//All PROPERTY DATA


// Property Tax Balances

 function searchRecords(data) {

    $.ajax({

    //  url: "https://data.phila.gov/resource/y5ti-svsu.json",
    //    url: "https://data.phila.gov/resource/y5ti-svsu.json?location=5500 LITCHFIELD ST",
    //    url: "https://data.phila.gov/resource/y5ti-svsu.json?location=" + "5500 LITCHFIELD ST",
        url: "https://data.phila.gov/resource/y5ti-svsu.json?location=" + data,
        type: "GET",
        data: {
          "$limit" : 5,
          "$$app_token" : "LYo2Ehu0MCY25fthZKu7gXXOW"
        }
    }).done(function(data) {
      alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
  //  searchRecords(data)
//  var lsf = JSON.parse(data, Object[0].object.total_livable_area);
//      console.log(lsf);

    });

  //  console.log(data);


    $.ajax({
        url: "https://data.phila.gov/resource/tqtk-pmbv.json?location="  + data,
        type: "GET",
        data: {
          "$limit" : 5,
          "$$app_token" : "LYo2Ehu0MCY25fthZKu7gXXOW"
        }
    }).done(function(data) {
      alert("Retrieved " + data.length + " records from the dataset!");
      console.log(data);


      var lsf = JSON.parse(data[0].total_livable_area);
          console.log(lsf);

           var container = document.querySelector(".js-container");
            container.innerHTML = "Total Square Footage: " + lsf + "<p></p>";

      var mvData = JSON.parse(data[0].market_value);
    var conta = document.querySelector("sj-container");
       conta.classList.add("conta");
        conta.innerHTML = "Market Value: " + mvData;


        console.log(mvData);

        //card
        var card = document.createElement('div');
        card.classList.add("card");

        var content = document.createElement('div');
        content.classList.add("content");

        // var header = document.createElement('div');
        // header.classList.add("header");
        // header.innerHTML = '<a href="' + track.permalink_url + '" target="_blank">' + track.title + '</a>';
        //   console.log(track.title);


      //  content.appendChild(conta);


    });

  //    function dataParse(searchRecords) {
  //    searchRecords(data);
//    var lsf = JSON.parse(data, Object[0].Object.total_livable_area);
//        console.log(lsf);




}



    //  var query = url + encodeURIComponent(data) + apiKey;
    function searchPlaces() {
      var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
      var coord = "39.988515,-75.107961"
      var radius = "&=500"
      var place  =  "&type=restaurant"
      var keyword = "&keyword=pizza"
      var apiKey = "&key=AIzaSyByklB4alOpTm96qj40QyUuAgpm9SDr_Xk";
      var query = url + coord + radius + place + keyword + apiKey + "";

      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);

      var container = document.querySelector(".map");

}



/*
https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.8670522,151.1957362&radius=1000&type=restaurant&keyword=cruise&key=AIzaSyByklB4alOpTm96qj40QyUuAgpm9SDr_Xk
 https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.988515,-75.107961&radius=500&type=restaurant&keyword=pizza&key=AIzaSyByklB4alOpTm96qj40QyUuAgpm9SDr_Xk
39.988515, -75.107961
radius=1000
&type=restaurant
keyword=pizza
&key=AIzaSyByklB4alOpTm96qj40QyUuAgpm9SDr_Xk
*/


/*
    var map;
    var service;
    var infowindow;

    function initialize(data) {
      var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

      map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 15
        });

      var request = {
        location: pyrmont,
        radius: '500',
        types: ['store']
      };

      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);
    }

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          createMarker(results[i]);

    google.maps.event.addListener(marker, 'click', function() {
     service.getDetails(place, function(result, status) {
       if (status !== google.maps.places.PlacesServiceStatus.OK) {
         console.error(status);
         return;
       }
       infoWindow.setContent(result.name);
       infoWindow.open(map, marker);
     });
   });
 }
 }
 }
 }
*/





// To Work on After map


  function pushToDOM(response) {
  			var response = JSON.parse(data)
        var OMA = response.data;
  					console.log(OMA);
          }

					//	data.assessment_date


			//	console.log(response)


		//
		// function pushToDOM(input) {
		//
		// var response = JSON.parse(input);
		//
		// var imageURLs = response.data;
		// var container = document.querySelector(".js-container");

	//	 imageURLs.forEach(function(image){

//		var src = image.images.fixed_height.url;
		//  console.log(src);


		//     var container = document.querySelector(".js-container");
		//     container.innerHTML += "<img src=\"" + src + "\" class=\"container-padding50\">";
		// });
		//  };
