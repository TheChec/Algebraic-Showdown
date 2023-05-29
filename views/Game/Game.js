var Deta1R = "";
var Deta2R = "";
var Deta3R = "";
var detaS = 0;
var Contador = -1;
var puntos = document.getElementsByClassName("points");
var winpoints = 0;
var losepoints = 0;
var deta1 = 0;
var deta2 = 0;
var deta3 = 0;

document.getElementById("ButtonCloseMOdalCra").addEventListener("click", verifyC)
document.getElementById("ButtonCloseMOdalSarrus").addEventListener("click", verifyS)

function Matriz(n,k){
    var matriz  = [];

    if((n==3) && (k==3)){
        for(var i = 0;i < 3;i++){
            matriz[i]=[];
        }
    
        for(var i = 0; i<3;i++){
            for(var j = 0; j < 3;j++){
                matriz[i][j] = Math.floor(Math.random()*3)+1;
            }
        }
        
        var [a1, b1, c1] = matriz[0];
        var [a2, b2, c2] = matriz[1];
        var [a3, b3, c3] = matriz[2];

        return {
            a1: a1,
            b1: b1,
            c1: c1,
            a2: a2,
            b2: b2,
            c2: c2,
            a3: a3,
            b3: b3,
            c3: c3,
        }

    }else if((n==3) && (k==4) ){
        for(var i = 0;i < 4;i++){
            matriz[i]=[];
        }
    
        for(var i = 0; i<3;i++){
            for(var j = 0; j < 4;j++){
                matriz[i][j] = Math.floor(Math.random()*9)+1;
            }
        }
        
        let [a1, b1, c1, d1] = matriz[0];
        let [a2, b2, c2, d2] = matriz[1];
        let [a3, b3, c3, d3] = matriz[2];

        return {
            a1: a1,
            b1: b1,
            c1: c1,
            d1: d1,
            a2: a2,
            b2: b2,
            c2: c2,
            d2: d2,
            a3: a3,
            b3: b3,
            c3: c3,
            d3: d3,
        }
    }

   
}
function GameDecision(option){

    var Game = ["Rock", "Paper", "Scissor"];
    var MachineAleatory = Game[Math.floor(Math.random()*Game.length)];
    var Methods = Math.floor(Math.random()*2+1);
    
    console.log("Usuario: " + option);
    console.log("Computadora: " + MachineAleatory);


    if(option === MachineAleatory){
        console.log("Empate");
        
    }else if((option === "Rock" && MachineAleatory === "Scissor") || (option === "Paper" && MachineAleatory === "Rock") || (option === "Scissor" && MachineAleatory === "Paper")){
        console.log("Ganaste ");
        
        switch (Methods) {
            case 1:
                CramerMethod();
                let CramerModal = document.getElementById("Cramer");
                CramerModal.classList.add('visto'); 
                break;
        
            case 2:
                
                SarrusMethod();
                
                let SarrusModal = document.getElementById("Sarrus");
                SarrusModal.classList.add('visto'); 
                
                break;
        }

    } else {
        console.log("Perdiste");
    }
   
}
function verifyPoints(){
    if (winpoints==3) {
        winpoints=0;
        location.replace('../EndGame/EndGame.html')
        
    }else if(losepoints==3){
        losepoints=0;
        console.log(losepoints)
        location.replace('../EndGameLose/EndGameLose.html')
 
    }
}
function verifyC(){
    let Result1Cr = document.getElementById("Cramer-result1").value
    let Result2Cr = document.getElementById("Cramer-result2").value
    let Result3Cr = document.getElementById("Cramer-result3").value

    
    console.log(Deta1R+" -1- "+Deta2R+" -2- "+Deta3R+" -3- "+" Espacio"+Result1Cr+Result2Cr+Result3Cr)

    if( (Result1Cr == Deta1R) && (Result2Cr == Deta2R) && (Result3Cr == Deta3R)){

        console.log(Deta1R)
        console.log(Deta2R)
        console.log(Deta3R)
        Contador++;
  
        WinPoint(puntos[Contador]);
        
    }else{
      console.log("Se equivoco")
      Contador++;

      LosePoint(puntos[Contador]);
      
    }
}
function verifyS(){
    let Result1S = document.getElementById("Sarrus-result").value
    console.log(detaS+" "+Result1S)
    if(Result1S == detaS){
        console.log(detaS)
        Contador++;

        WinPoint(puntos[Contador]);
        
    }else{
      console.log("Se equivoco"+ Contador)
      Contador++;

      LosePoint(puntos[Contador]);
      
    }
}
function CramerMethod(){

/*
        var [a1, d1, a3, a1, d1] = matriz[0];
        var [b1, d2, b3, b1, d2] = matriz[1];
        var [c1, d3, c3, c1, d3] = matriz[2];
*/

    const {a1, b1, c1,d1, a2, b2, c2,d2, a3, b3, c3,d3} = Matriz(3,4);

    let deta = (a1*b2*c3)+(b1*c2*a3)+(c1*a2*b3)-(a3*b2*c1)-(b3*c2*a1)-(c3*a2*b1);
    let deta1 =(d1*b2*c3)+(a2*b3*d3)+(a3*d2*c2)-(d3*b2*a3)-(c2*b3*d1)-(c3*d2*a2);
    let deta2 =(a1*d2*c3)+(d1*b3*c1)+(a3*b1*d3)-(c1*d2*a3)-(d3*b3*a1)-(c3*b1*d1);
    let deta3 =(a1*b2*d3)+(a2*d2*c1)+(d1*b1*c2)-(c1*b2*d1)-(c2*d2*a1)-(d3*b1*a2)

    
    Deta1R = deta1 == 0 || deta == 0 ? "0" : deta1 + "/" + deta;
    Deta2R = deta2 == 0 || deta == 0 ? "0" : deta2 + "/" + deta;
    Deta3R = deta3 == 0 || deta == 0 ? "0" : deta3 + "/" + deta;
    
    p1 = document.getElementById("CoeficientC1").innerHTML = a1;
    p2 = document.getElementById("CoeficientC2").innerHTML = a2;
    p3 = document.getElementById("CoeficientC3").innerHTML = a3;
    p4 = document.getElementById("CoeficientC4").innerHTML = b1;
    p5 = document.getElementById("CoeficientC5").innerHTML = b2;
    p6 = document.getElementById("CoeficientC6").innerHTML = b3;
    p7 = document.getElementById("CoeficientC7").innerHTML = c1;
    p8 = document.getElementById("CoeficientC8").innerHTML = c2;
    p9 = document.getElementById("CoeficientC9").innerHTML = c3;

    p10 = document.getElementById("equalityCR3").innerHTML = d1;
    p11 = document.getElementById("equalityCR6").innerHTML = d2;
    p12 = document.getElementById("equalityCR9").innerHTML = d3;

    console.log({a1, b1, c1,d1, a2, b2, c2,d2, a3, b3, c3,d3, deta, deta1, deta2, deta3 ,Deta1R, Deta2R, Deta3R});

}

function SarrusMethod(){
    const {a1, b1, c1, a2, b2, c2, a3, b3, c3} = Matriz(3,3);
    detaS = (a1*b2*c3)+(b1*c2*a3)+(c1*a2*b3)-(a3*b2*c1)-(b3*c2*a1)-(c3*a2*b1);

    p1 = document.getElementById("CoeficientS1").innerHTML = a1;
    p2 = document.getElementById("CoeficientS2").innerHTML = a2;
    p3 = document.getElementById("CoeficientS3").innerHTML = a3;
    p4 = document.getElementById("CoeficientS4").innerHTML = b1;
    p5 = document.getElementById("CoeficientS5").innerHTML = b2;
    p6 = document.getElementById("CoeficientS6").innerHTML = b3;
    p7 = document.getElementById("CoeficientS7").innerHTML = c1;
    p8 = document.getElementById("CoeficientS8").innerHTML = c2;
    p9 = document.getElementById("CoeficientS9").innerHTML = c3;


    return {a1, b1, c1, a2, b2, c2, a3, b3, c3, detaS};
}

function Hide(Reason,Reason3){
    let Reason2 = document.querySelector(`#${Reason}`);
    
    if(Reason2.classList.contains('visto')){
        Reason2.classList.remove('visto');
    }else{
        GameDecision(Reason3);
    }
}

function WinPoint(indice){
    indice.classList.add('Gano')
    winpoints++;
    verifyPoints();
}

function LosePoint(indice){
    indice.classList.add('Perdio')
    losepoints++;
    verifyPoints();
}