<?php
require_once ('lib/mercadopago.php');
	$mp = new MP("client_id", "client_secret");
	$mp->sandbox_mode(TRUE);
	$preference_data = array (
		"items" => array(
			array(
        "title" => "titulo",
        "quantity" => 1,
        "currency_id" => "ARS",
        "unit_price" => 15)));
	$preference = $mp->create_preference($preference_data);	
?>