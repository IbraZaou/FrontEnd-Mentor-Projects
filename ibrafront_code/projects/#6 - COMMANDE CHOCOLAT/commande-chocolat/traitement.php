<?php
include('_config.php');
// Calcul du Total à payer
$total = $_POST['quantite'] * TARIF;
$newTotal = $total - REMISE;
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Traitement</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div>
        <h1>Merci pour votre commande</h1>
        <ul>
            <li>Nombre de boites commandées: <?= $_POST['quantite']; ?> </li>
            <!-- tu reprend du form car method POST donc "$_POST" et ca va prendre le "quantite" du select -->
            <li>Tarif unitaire: <?= TARIF; ?> €</li>
            <li>Total à payer: <?= $total; ?> €</li>
            <li>Remise: <?= REMISE; ?>€</li>
            <li><strong>nouveau Total:</strong> <span class="orangered"> <?= $newTotal; ?> €</span></li>
        </ul>
    </div>
</body>
</html>