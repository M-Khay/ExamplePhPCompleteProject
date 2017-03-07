<?php
    header("Access-Control-Allow-Origin: *");
	
	$srcAbbr = $_GET['srcAbbr'];
	$destAbbr = $_GET['destAbbr'];
	    //  the srcAbbr and destAbbr has the soruce and destination address using which we call the bart api to get the list of train on that route.
	$xml = file_get_contents("http://api.bart.gov/api/sched.aspx?cmd=depart&orig=" . $srcAbbr . "&dest=" . $destAbbr . "&date=now&key=MW9S-E7SL-26DU-VV8V&b=0&a=4&l=1");
    
    // Basic string manupalation functions to replace white space in forma of new line, tabs etc
	$fileContents = str_replace(array("\n", "\r", "\t"), '', $xml);

	// trim function to remove the empty space.
    $fileContents = trim(str_replace('"', "'", $fileContents));
    $simpleXml = simplexml_load_string($fileContents);

    // converting xml to json using standard inbuilt library.
    $json = json_encode($simpleXml);
    
    print_r($json);

?>