	
function httpGet(theUrl)
{

		// Storing and retriving user visit in web storage.
		
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
		// making a Synchronous request, since we cannot select anything until we have result from thsi api.

    xmlHttp.open( "GET", theUrl, false ); 
    xmlHttp.send( null );
    var data = xmlHttp.responseText;
	var json = JSON.parse(data);
	var station = json.stations.station;
	
	var totalStations = Object.keys(station).length;
	
	for(var i=0;i< station.length; i++)
	{
		//return station[i].city;
		var a = document.createElement('a');
		a.innerHTML = station[i].name+ ", "+station[i].city;
		a.className = "list-group-item";
		a.href = "station.html?orig="+ station[i].abbr ; 
		
		document.getElementById('station_list').appendChild(a);
	  
	}
		
}
	

