var keys = document.querySelectorAll(".key");

var screen = document.querySelector(".screen");
screen.innerHTML = 0;

var total = 0;
var prevTotal = 0;
var currOperator = "";
var operators = ["+","-","x","/","=","c","del"];

for(let key of keys){
    let key_value = key.getAttribute("value");
    if(key_value=="c" || key_value=="="){
        key.style.width = 130+"px";
    }
}

keys.forEach((key)=>{
    key.onclick = () =>{
         handle(key.getAttribute("value"));
    };
});


function handle(value){
    for(let op of operators){
        if(op==value){
            handleOperator(op);
            return;
        }
    }
    total = parseInt(screen.innerHTML);
    screen.innerHTML = parseInt(total + value);
    total = parseInt(screen.innerHTML);
}

function clearScreen(){
    screen.innerHTML = 0;
    total = 0;
}

function handleOperator(op){
    switch(op){
        case "+":
        case "-":
        case "x":
        case "/":
            currOperator = op;
            prevTotal = total;
            clearScreen();
            break;
        case "del":
            if(screen.innerHTML!=0){
            let str = screen.innerHTML.toString();
            if(str.length==1){
                screen.innerHTML = 0;
                break;
            }
            screen.innerHTML = str.substring(0,str.length-1);
            total = parseInt(screen.innerHTML);
            }
            break;
        case "c":
            clearScreen();
            prevTotal = 0;
            break;
        case "=":
            performOperation();
            break;
        
    }
}

function performOperation(){
    switch(currOperator){
        case "+":
            prevTotal = parseInt(prevTotal+total);
            break;
        case "-":
            prevTotal = parseInt(prevTotal-total);
            break;
        case "x":
            prevTotal = parseInt(prevTotal*total);
            break;
        case "/":
            prevTotal = parseInt(prevTotal/total);
            break;
        default:
            return;
    }
    screen.innerHTML = prevTotal;
    total = parseInt(prevTotal);
    currOperator = "";
}