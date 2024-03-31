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
else if (migliorPunteggio>=35){
    var serpente="quinto_rank";
}