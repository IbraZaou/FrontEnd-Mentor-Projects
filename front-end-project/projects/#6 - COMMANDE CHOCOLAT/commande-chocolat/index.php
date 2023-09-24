<?php
include('_config.php');
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Commander</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div>
        <form action="traitement.php" method="post" >
            <!-- post: permet d'envoyer des variables qui ne se passe pas dans l'URL-->
            <label for="quantite">Quantité: </label>
                <select name="quantite" id="quantite"> <!-- menu déroulant -->
                    <!-- id = mettre en relation avec le label
            name = permet la récupération la quantité chosis par l'utilisateur  -->
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
            </select> 
                <p>Tarif: <?= TARIF; ?> €</p>
                <!-- echo + constante definev(^) -->
                <p>En commandant maintenant, vous aurez droit à une remise immediate de <?= REMISE; ?>€.</p>
                <p>
                    <input type="submit" value="Commander">
                </p>

                <img src="img/macaron.webp" alt="">
        </form>
    </div>
</body>
</html>