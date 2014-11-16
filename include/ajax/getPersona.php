<?php
	// cabecera json
	header('content-type: application/json; charset=utf-8');

	// include
	require_once '../model/ClsConexion.php';
	require_once '../model/ClsPersona.php';

	// objeto
	$objPersona = new ClsPersona() ;

	// resultado
	$array = $objPersona->get_persona() ;

	// convirtiendo a json
	$jsonp = json_encode($array);

	// callback
	if( isset($_GET['callback']) )
	{
	    echo $_GET['callback'] . '(' . $jsonp . ')';
	}
	else
	{
	    echo $jsonp;
	}