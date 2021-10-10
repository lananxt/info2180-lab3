window.onload = function(){
    this.loadBoard()
    document.getElementsByClassName("btn")[0].onclick = function(){
        for(let i = 0; i < squares.length; i++){
            squares[i].innerHTML = ("")
    }
    document.getElementById("status").classList.remove("you-won")
    document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O."
    makeUnselectable(document.getElementById("status"))
}
}
function loadBoard(){
    squares = document.querySelectorAll('#board div');    
    for(let i = 0; i < squares.length; i++){
        squares[i].classList.add("square")
        squares[i].onmouseover = function(){squares[i].classList.toggle("hover",true)}
        squares[i].onmouseout = function(){squares[i].classList.toggle("hover",false)}
        squares[i].onclick = function(){
            if (squares[i].innerHTML === "" || squares[i].innerHTML === "O"){
                squares[i].classList.toggle("O",false)
                squares[i].innerHTML = "X"
                squares[i].classList.toggle("X",true)
                checkBoard(squares)
            }
            else if(squares[i].innerHTML === "X"){
                squares[i].classList.toggle("X",false)
                squares[i].innerHTML = "O"
                squares[i].classList.toggle("O",true)
                checkBoard(squares)
            }
        
        }
        makeUnselectable(squares[i])
    }
}
function checkBoard(arr){
        if (arr[0].innerHTML !== "" && arr[0].innerHTML === arr[1].innerHTML && arr[0].innerHTML === arr[2].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML =   "Congratulations! "+ arr[0].innerHTML + " is the Winner!"
         }
         else if (arr[3].innerHTML !== "" && arr[3].innerHTML === arr[4].innerHTML && arr[3].innerHTML === arr[5].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ arr[3].innerHTML + " is the Winner!"
         }
         else if (arr[6].innerHTML !== "" && arr[6].innerHTML === arr[7].innerHTML && arr[6].innerHTML === arr[8].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ arr[6].innerHTML + " is the Winner!"
         }
         else if (arr[0].innerHTML !== "" && arr[0].innerHTML === arr[3].innerHTML && arr[0].innerHTML === arr[6].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ arr[0].innerHTML + " is the Winner!"
         }
         else if (arr[1].innerHTML !== "" && arr[1].innerHTML === arr[4].innerHTML && arr[1].innerHTML === arr[7].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ arr[1].innerHTML + " is the Winner!"
         }
         else if (arr[0].innerHTML !== "" && arr[0].innerHTML === arr[4].innerHTML && arr[0].innerHTML === arr[8].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ arr[0].innerHTML + " is the Winner!"
         }
         else if (arr[6].innerHTML !== "" && arr[6].innerHTML === arr[4].innerHTML && arr[6].innerHTML === arr[2].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML =  "Congratulations! "+ arr[6].innerHTML + " is the Winner!"
         }
         else if (arr[2].innerHTML !== "" && arr[2].innerHTML === arr[5].innerHTML && arr[2].innerHTML === arr[8].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ arr[2].innerHTML + " is the Winner!"
         }
    
}

function makeUnselectable(node) {
    if (node.nodeType == 1) {
        node.setAttribute("unselectable", "on");
    }
    var child = node.firstChild;
    while (child) {
        makeUnselectable(child);
        child = child.nextSibling;
    }
}