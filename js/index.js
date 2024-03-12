document.addEventListener("DOMContentLoaded", function(){
    var playerStart = ["",0,0,0,0]//classe,hp,mp,ataque,defesa
    var playerHp = document.getElementById("player-hp")
    var playerMp = document.getElementById("player-mp")
    var playerAttack = document.getElementById("player-attack")
    var playerArmor = document.getElementById("player-armor")
    var selectClass = document.getElementById("select-class")
    var actIniciar = document.getElementById("act-iniciar")
    var playerImage = document.getElementById("player-image")
    selectClass.addEventListener("change", function(){
        playerImage.innerHTML = '<img src="img/'+selectClass.value+'.png">'
        if(selectClass.value == "wizard"){
            playerStart = ["wizard",60,100,20,10]
        }else{

        }
        updateMenuStatus()
    })
    actIniciar.addEventListener("click", function(){
        const url = 'game.html?'+
        'classe='+encodeURIComponent(playerStart[0])+'&'+
        'playerHp='+encodeURIComponent(playerStart[1])+'&'+
        'playerMp='+encodeURIComponent(playerStart[2])+'&'+
        'playerAttack='+encodeURIComponent(playerStart[3])+'&'+
        'playerArmor='+encodeURIComponent(playerStart[4])
        window.location.href = url
    })
    function updateMenuStatus(){
        playerHp.innerHTML = playerStart[1]
        playerMp.innerHTML = playerStart[2]
        playerAttack.innerHTML = playerStart[3]
        playerArmor.innerHTML = playerStart[4]
    }
})