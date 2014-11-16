<?php
	require_once '../model/ClsConexion.php';
	require_once '../model/ClsPersona.php';
	require_once '../bean/Bean_Persona.php';

	/*
	 * mysql_real_escape_string: Escapa caracteres especiales en el string
	 */

	$data    = json_decode(file_get_contents("php://input"));

	$name = mysql_real_escape_string($data->name);
	$dni  = mysql_real_escape_string($data->dni);

	$objPersona = new ClsPersona() ;
	$persona    = new Bean_Persona() ;

	$persona->setName($name) ;
	$persona->setDni($dni) ;

	$array = $objPersona->set_persona($persona) ;

	$jsonp = json_encode($array);

    echo $jsonp;