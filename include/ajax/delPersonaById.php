<?php
	require_once '../model/ClsConexion.php';

	require_once '../model/ClsPersona.php';

	require_once '../bean/Bean_Persona.php';

	$objPersona = new ClsPersona() ;
	$persona    = new Bean_Persona() ;

	$persona->setId($_GET['id']) ;
	$array = $objPersona->del_persona_by_id($persona) ;

	$jsonp = json_encode($array);

	echo $jsonp;