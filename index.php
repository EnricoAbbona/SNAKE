<?php
// Connessione al database MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "snake_db";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
} else ("connessione riuscita");

// Ottieni il punteggio dalla richiesta AJAX
/*$punteggio = $_POST['punteggio'];

// Prepara e esegui la query per inserire il punteggio nel database
$sql = "INSERT INTO punteggi (punteggio) VALUES ($punteggio)";

if ($conn->query($sql) === TRUE) {
    echo "Punteggio salvato con successo nel database";
} else {
    echo "Errore durante il salvataggio del punteggio nel database: " . $conn->error;
}
*/
// Chiudi la connessione al database
$conn->close();
?>