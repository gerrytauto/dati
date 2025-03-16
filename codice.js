var id=1;
var riga=0;
var numeri_indovinati=0;
var sequenza=genera_numero();

function inserisci(num){
    document.getElementById(id).innerHTML=num;
    id+=1;
}

function cancella(){
    if(id!=1+(4*riga)){
        id-=1
        document.getElementById(id).innerHTML="";
    }
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
        disabilita_tastiera();
    }

    else if(riga==5){
        guess=sequenza[0] + " " + sequenza[1] + " " + sequenza[2] + " " + sequenza[3];
        document.getElementById("Risultato").innerHTML="Mi dispiace, il numero era " + guess;
        document.getElementById("Rigioca").hidden=false;
        disabilita_tastiera();
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

function disabilita_tastiera(){
    for(var i=0; i<10; i++){
        document.getElementsByClassName("tastiera")[i].disabled=true;        
    }

    document.getElementsByClassName("canc")[0].disabled=true;  
    document.getElementsByClassName("conferma")[0].disabled=true;  
    
}
