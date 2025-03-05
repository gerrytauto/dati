var id=1;
var riga=0;
var numeri_indovinati=0;
var array=[Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];

function inserisci(num){
    document.getElementById(id).innerHTML=num;
    id+=1;
}

function cancella(){
    id-=1
    document.getElementById(id).innerHTML="";
}

function elabora(){
    numeri_indovinati=0;
    if(id==5+(4*riga)){
        for(var i=4; i>0; i--){
            numero=document.getElementById(id-i);
            if(posizione(numero)==true){
                document.getElementById(id-i).id="giusto";
                numeri_indovinati+=1;
            }
            else if(sta_dentro(numero)==true){
                document.getElementById(id-i).id="quasi";
            }
        }
        riga+=1;
    }
    else{
        prompt("devi fare una riga alla volta!!");
    }

    if(riga==5){
        guess=array[0] + " " + array[1] + " " + array[2] + " " + array[3];
        if(numeri_indovinati==4){
            document.getElementById("Risultato").innerHTML="Esatto!!";
        }
        else{
            document.getElementById("Risultato").innerHTML="Mi dispiace il numero era " + guess;
        }
    }
}

function sta_dentro(n){
    for(var i=0; i<4; i++){
        if(n.innerHTML==array[i]){
            return true;
        }
    }

    return false;
}

function posizione(n){
    for(var i=0; i<4; i++){
        if(n.innerHTML==array[i] && n.id-(riga*4)==i+1){
            return true;
        }
    }

    return false;
}
