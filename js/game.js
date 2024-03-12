var event = [["m1","blue-slime.png","Você entrou em confronto com uma blue slime!", 50, 5, 2],
             ["m2","green-slime.png","Você entrou em confronto com uma green slime!", 50, 5, 2],
             ["m3","flame-skull.png","Você entrou em confronto com uma flame skull!", 80, 10, 10],
             ["m4","mimic.png","É um mímico!", 120, 15, 20],
             ["e1","chest.png","Um baú esta diante de você", 0, 0, 0],
             ["e2","","Você achou uma bolsa com ouro",0,0,10]]
             
document.addEventListener("DOMContentLoaded", function(){
    //acoes
    const actSair = document.getElementById("act-sair");
    const actAttack = document.getElementById("act-attack");
    const actMagic = document.getElementById("act-magic");
    const actInteract = document.getElementById("act-interact");
    const actEscape = document.getElementById("act-escape");
    //Dados do personagem
    var playerHp = document.getElementById("player-hp")
    var playerMp = document.getElementById("player-mp")
    var playerAttack = document.getElementById("player-attack")
    var playerArmor = document.getElementById("player-armor")
    var playerImage = document.getElementById("player-image")
    //Carregar dados do player
    var params = new URLSearchParams(window.location.search);
    var playerClass = params.get("classe")
    playerHp.textContent = params.get("playerHp")
    playerMp.textContent = params.get("playerMp")
    playerAttack.textContent = params.get("playerAttack")
    playerArmor.textContent = params.get("playerArmor")
    playerImage.innerHTML = '<img src="img/'+playerClass+'.png">'
    actSair.addEventListener("click", function(){
        window.location.href = 'index.html'
    })
})