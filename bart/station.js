	// httpGet("http://bart.showmeeapp.com/station.php?orig="+orig);

	var srcLat;
    var srcLng;
    var desLat;
    var desLng;
		
	
	function getParameterByName(name, url) {
		if (!url) {
		  url = window.location.href;
		}
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	
	// var orig = getParameterByName('orig');
	
	function httpGet(theUrl)
	{	
		if(typeof(Storage) !== "undefined") {

			var counts = localStorage.getItem('count');
			if (counts) {
                    
                } else {
                    localStorage.setItem('count', 1);
                    }
                document.getElementById("result").innerHTML = "Hey, you are visiting for  : " + localStorage.getItem('count') + " time(s).";
            } else {
                document.getElementById("result").innerHTML = "Oopss, looks like you need to upgrade to a new browser this one does not support web storage...";
            }
		
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "GET", theUrl, false ); 
		xmlHttp.send( null );
		var data = xmlHttp.responseText;
		var json = JSON.parse(data);
		var station = json.stations.station;
		
		document.getElementById("HeadText").innerHTML = station.name;
		document.getElementById("address").innerHTML = station.address;
		document.getElementById("cityName").innerHTML = station.city + ", "+ station.state + " " + station.zipcode ;
		
		var north_routes = station.north_routes;
		var south_routes = station.south_routes;
		var north_platforms = station.north_platforms;
		var south_platforms = station.south_platforms;
		
		srcLat = station.gtfs_latitude;
		srcLng = parseFloat(station['gtfs_longitude']);
		var mapProp= {
			center:new google.maps.LatLng(srcLat,srcLng),
			zoom:16,
			};
		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	}
	

	
	
	