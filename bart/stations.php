<?php
    header("Access-Control-Allow-Origin: *");
    $xml = file_get_contents("http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V");
    $fileContents = str_replace(array("\n", "\r", "\t"), '', $xml);
    $fileContents = trim(str_replace('"', "'", $fileContents));
    $simpleXml = simplexml_load_string($fileContents);
    $json = json_encode($simpleXml);
    print_r($json);

?>