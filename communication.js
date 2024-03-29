  function checkDeviceType() {
  var mobile = (/iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(navigator.userAgent)) ? true : false;
  return mobile;
}

var mobile = checkDeviceType();
console.log(mobile);

 // AJAX 
  var migliorPunteggio = localStorage.getItem('miglior_punteggio');
  var pseudonimo = localStorage.getItem('nickname');
  // Creare l'oggetto XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Definire la funzione di gestione della risposta
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // La richiesta è stata completata con successo
        console.log("Dati inviati con successo!");
      } else {
        // Si è verificato un errore nella richiesta
        console.error(
          "Si è verificato un errore durante l'invio dei dati."
        );
        alert("ATTENZIONE temporaneamente la classifica non verrà aggiornata per un problema del database. Puoi comunque giocare e i tuoi progressi verranno aggiornati quando il malfunzionamento verrà riparato");
      }
    }
  };

  // Preparare i dati da inviare
  var data = new FormData();
  data.append("migliorPunteggio", migliorPunteggio);
  data.append("pseudonimo", pseudonimo);
  data.append("mobile", mobile);

  // Aprire la richiesta verso stats.php
  xhr.open("POST", "https://snakeabbo.000webhostapp.com/SNAKE/stats.php", true);
  xhr.send(data);
  //AJAX fine  stats.php
