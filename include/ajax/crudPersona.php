<?php
	require_once '../model/ClsConexion.php';

	require_once '../model/ClsPersona.php';

	require_once '../bean/Bean_Persona.php';

	/*
	 * mysql_real_escape_string: Escapa caracteres especiales en el string
	 */

	/*$data    = json_decode(file_get_contents("php://input"));

	$op = mysql_real_escape_string($data->op);
	$upswd   = mysql_real_escape_string($data->pswd);
	$uemail  = mysql_real_escape_string($data->email);*/

	$objPersona = new ClsPersona() ;
	$persona    = new Bean_Persona() ;

	if( $_GET['op'] == 'list'){
		$data = $objPersona->get_persona() ;

		$json_data = json_encode($data) ;

		echo  $json_data ;
	}
	if( $_GET['op'] == 'edit'){
		$persona->setId($_GET['id']) ;
		$data = $objPersona->get_persona_by_id($persona) ;

		$json_data = json_encode($data) ;

		echo  $json_data ;
	}
	if( $_GET['op'] == 'delete'){
		$persona->setId($_GET['id']) ;
		$data = $objPersona->del_persona_by_id($persona) ;

		$json_data = json_encode($data) ;

		echo  $json_data ;
	}
	if( $_GET['op'] == 'insert' ){
		$persona->setName($_GET['name']) ;
		$persona->setDni($_GET['dni']) ;
		$data = $objPersona->set_persona($persona) ;

		$json_data = json_encode($data) ;

		echo  $json_data ;
	}
	if( $_GET['op'] == 'update' ){
		$persona->setId($_GET['id']) ;
		$persona->setName($_GET['name']) ;
		$persona->setDni($_GET['dni']) ;
		$data = $objPersona->upd_persona($persona) ;

		$json_data = json_encode($data) ;

		echo  $json_data ;
	}
