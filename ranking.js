var migliorPunteggio = localStorage.getItem('miglior_punteggio');

if ( migliorPunteggio <=10 || migliorPunteggio == null) {
    var serpente = "primo_rank";
 }
  else if(migliorPunteggio >10 && migliorPunteggio <=20){
     var serpente = "secondo_rank";
}
 else if (migliorPunteggio >20 && migliorPunteggio <=25){ 
    var serpente = "terzo_rank";
}
else if (migliorPunteggio >25 && migliorPunteggio <35){
    var serpente="quarto_rank";
}
else if (migliorPunteggio>=35 && migliorPunteggio < 50){
    var serpente="quinto_rank";
}
else if (migliorPunteggio >= 50 && migliorPunteggio < 62){
    var serpente="sesto_rank";
}
else if (migliorPunteggio >=62){
    var serpente = "settimo_rank"
}