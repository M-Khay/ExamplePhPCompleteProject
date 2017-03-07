<?php
    header("Access-Control-Allow-Origin: *");
	
	$orig = $_GET['orig'];
	    
	$xml = file_get_contents("http://api.bart.gov/api/stn.aspx?cmd=stninfo&orig=" . $orig . "&key=MW9S-E7SL-26DU-VV8V");
  
    // Convertiong xml to json using inbuilt library.

	$xml = preg_replace('~\s*(<([^-->]*)>[^<]*<!--\2-->|<[^>]*>)\s*~','$1',$xml);
            $xml = simplexml_load_string($xml,'SimpleXMLElement', LIBXML_NOCDATA);
            echo json_encode($xml);

?>