function menuHome(){
    document.getElementById("contentFrame").setAttribute('src', 'home.html')
    document.getElementById("menuHome").style = "color: black; background-color: white;"
    document.getElementById("menuGame").style = "color: black; background-color: #298eb5;"
    document.getElementById("menuJukebox").style = "color: black; background-color: #298eb5;"
}

function menuGame(){
    document.getElementById("contentFrame").setAttribute('src', 'game.html')
    document.getElementById("menuGame").style = "color: black; background-color: white;"
    document.getElementById("menuHome").style = "color: black; background-color: #298eb5;"
    document.getElementById("menuJukebox").style = "color: black; background-color: #298eb5;"
}

function menuJukebox(){
    document.getElementById("contentFrame").setAttribute('src', 'juckbox.html')
    document.getElementById("menuJukebox").style = "color: black; background-color: white;"
    document.getElementById("menuGame").style = "color: black; background-color: #298eb5;"
    document.getElementById("menuHome").style = "color: black; background-color: #298eb5;"
}