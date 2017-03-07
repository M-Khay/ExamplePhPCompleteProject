function visitCount(){
        $(document).ready(function (){
		
		// Functio to store and retrive user visit in web storage.

            if(typeof(Storage) !== "undefined") {

                var counts = localStorage.getItem('count');
                if (counts) {
                    localStorage.setItem('count', Number(counts) + 1);
                } else {
                    localStorage.setItem('count', 1);
                }
                document.getElementById("result").innerHTML = "Hey, you are visiting for  : " + localStorage.getItem('count') + " time(s).";
            } else {
                document.getElementById("result").innerHTML = "Oopss, looks like you need to upgrade to a new browser this one does not support web storage...";
            }

        });
	
    }