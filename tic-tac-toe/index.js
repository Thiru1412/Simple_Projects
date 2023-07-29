class play{
    constructor(){
        this.score = 0;
    }
}

var Xplayer = new play();
var Oplayer = new play();

var XplayerName = document.querySelector(".X-player-name");
var OplayerName = document.querySelector(".O-player-name");

XplayerName.innerHTML = prompt("Enter X Player Name : ").toUpperCase();
OplayerName.innerHTML = prompt("Enter O Player Name : ").toUpperCase();


var boxes = document.querySelectorAll(".box");

var plays = ["X","O"];

var counter = 0;

var noOfPlays = 0;

var winnerDecided = false;

var winningPositions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

boxes.forEach((box) =>{
    box.onclick = () =>{
        getPlay(box.getAttribute("value"));
    };
});

function getPlay(value){
    if(boxes[value-1].innerHTML==''){
    boxes[value-1].innerHTML = plays[counter];
    counter = (counter + 1)%2;
    noOfPlays++;
    }

    checkWinner();
    if(noOfPlays==9 && !(winnerDecided)){
        document.querySelector(".winner").innerHTML = "Match Tied";
    }
}


function checkWinner(){
    for(pos of winningPositions){
        if(boxes[pos[0]-1].innerHTML!='' && boxes[pos[0]-1].innerHTML==boxes[pos[1]-1].innerHTML && boxes[pos[1]-1].innerHTML==boxes[pos[2]-1].innerHTML){
            document.querySelector(".winner").innerHTML = "Winner  is  " + getName(boxes[pos[0]-1].innerHTML);
            //console.log(boxes[pos[0]-1].innerHTML);
            if(boxes[pos[0]-1].innerHTML==plays[0]){
                Xplayer.score++;
                document.querySelector(".Xplayer-score").innerHTML = parseInt(Xplayer.score);
                //console.log(Xplayer.score);
            }
            else{
                Oplayer.score++;
                document.querySelector(".Oplayer-score").innerHTML = parseInt(Oplayer.score);
                //console.log(Oplayer.score);
            }
            winnerDecided = true;
            break;
        }

    }
}


document.querySelector(".reset-button").onclick = () =>{
    clearAllBoxes();
};

document.querySelector(".restart-button").onclick = ()=>{
    clearAllBoxes();
    Xplayer.score = parseInt(0);
    Oplayer.score = parseInt(0);
    document.querySelector(".Xplayer-score").innerHTML = 0;
    document.querySelector(".Oplayer-score").innerHTML = 0;
};


function clearAllBoxes(){
    boxes.forEach((box)=>{
        box.innerHTML = ''; 
    });
    document.querySelector(".winner").innerHTML = '-';
    noOfPlays = 0;
    counter = 0;
    winnerDecided =  false;
}

function getName(play){
    if(play=="X"){
        return XplayerName.innerHTML;
    }
    else{
        return OplayerName.innerHTML;
    }
}