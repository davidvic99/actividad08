var jugar = "";
i=1;
var contadorpuntos = 0;

while(i<2){
   
    jugar = prompt("Deseas jugar?");
    if (jugar == "si") {
        
        cartablanca = Math.floor(Math.random(1)*(13));
        cartajugador = Math.floor(Math.random(1)*(13));

        document.write(`<p id=cartaJugador> Tu carta es ${cartajugador}</p>`);
        
        deseas = prompt("Deseas jugar con la carta que te ha tocado?");
            if (deseas == "si") {
                document.write(`<p id=cartaBlanca> Tu carta es ${cartablanca}</p>`);
                    if (cartablanca > cartajugador) {
                            contadorpuntos = contadorpuntos - 1;
                            document.write(`<p id=puntuacion>La puntuacion del usuario es de ${contadorpuntos}</p>`);
                        
                    }else if(cartajugador>cartablanca){
                        contadorpuntos = contadorpuntos + 1;
                        document.write(`<p id=puntuacion>La puntuacion del usuario es de ${contadorpuntos}</p>`);
                    }else if(cartajugador = cartablanca){
                        document.write(`<p id=puntuacion>Empate, La puntuacion del usuario es de ${contadorpuntos}</p>`);
                    }
                
            }
           
                        }
                else if (jugar == "SALIR") {
                    break;
                }
        

            
     
       

       
       
}