

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
	
	
	
	
function httpGetList(theUrl)
{	
	
	// Function to store and retrive user visit in web storage.
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
	
	
	for(var i=0;i< station.length; i++)
	{
				
		var select = document.getElementById("src");
		select.options[select.options.length] = new Option(  station[i].name,  station[i].abbr);
		
		var select2 = document.getElementById("dest");
		select2.options[select2.options.length] = new Option(  station[i].name,  station[i].abbr);
	  
	}
			
}
	

	

function httpGet(theUrl)
{	
	var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
	
    var data = xmlHttp.responseText;
    console.log(data);
	var json = JSON.parse(data);
	var trips = json.schedule.request.trip;
	var table = document.getElementById("myTable");
	table.innerHTML = "";
	
		var row = table.insertRow(table.rows.length);
  	    var origin = row.insertCell(0);
   	 	var destination = row.insertCell(1);
 	    var origtime = row.insertCell(2);
 	   var desttime = row.insertCell(3);
	origin.innerHTML = "Origin";
	destination.innerHTML = "Destination";
	origtime.innerHTML = "Departure time";
    desttime.innerHTML = "Arrival Time";
    
	for(var i=0;i< trips.length; i++)
	{
	var thisTrip = trips[i]; 
	
		var row = table.insertRow(table.rows.length);
	    var origin = row.insertCell(0);
	    var destination = row.insertCell(1);
	    var origtime = row.insertCell(2);
	    var desttime = row.insertCell(3);
	
	
	origin.innerHTML = thisTrip["@attributes"].origin;
	destination.innerHTML = thisTrip["@attributes"].destination;
	origtime.innerHTML = thisTrip["@attributes"].origTimeMin;
    desttime.innerHTML = thisTrip["@attributes"].destTimeMin;
	}
	
		
}
	
function routes()
{
	var table = document.getElementById("myTable");
	table.innerHTML = "";
	
	
	var e = document.getElementById("dest");
	var destAbbr = e.options[e.selectedIndex].value;
	var e = document.getElementById("src");
	var srcAbbr = e.options[e.selectedIndex].value;

	if(srcAbbr == 0 || destAbbr == 0)
	{
		document.getElementById("selection").innerHTML = "Please Select Source and Destination Stations";
		return;
	
	}
	else if (srcAbbr == destAbbr )
	{
		document.getElementById("selection").innerHTML = "Please Select different Source and Destination stations";
		return;
	}
	httpGet("http://bart.showmeeapp.com/trips.php?srcAbbr="+srcAbbr+"&destAbbr="+destAbbr); 
}

