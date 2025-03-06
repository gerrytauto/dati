var id=1;
var riga=0;
var numeri_indovinati=0;
var sequenza=genera_numero();

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
        stampaRisultato();
    }
    else{
        window.alert("Devi fare una riga alla volta!!");
    }

    
}

function sta_dentro(n){
    for(var i=0; i<4; i++){
        if(n.innerHTML==sequenza[i]){
            return true;
        }
    }

    return false;
}

function posizione(n){
    for(var i=0; i<4; i++){
        if(n.innerHTML==sequenza[i] && n.id-(riga*4)==i+1){
            return true;
        }
    }

    return false;
}

function stampaRisultato(){

    if(numeri_indovinati==4){
        document.getElementById("Risultato").innerHTML="Esatto!!";
        document.getElementById("Rigioca").hidden=false;
    }

    else if(riga==5){
        guess=array[0] + " " + array[1] + " " + array[2] + " " + array[3];
        document.getElementById("Risultato").innerHTML="Mi dispiace, il numero era " + guess;
        document.getElementById("Rigioca").hidden=false;
        
    }
    
}

function genera_numero(){
    var array=[];
    var a;
    
    while(array.length<4){
        a=Math.floor(Math.random() * 10);
        if(array.includes(a)==false){
            array.push(a);
        }
    }

    return array;
}
