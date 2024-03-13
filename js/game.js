var eventBase = [["blue-slime.png","Você entrou em confronto com uma blue slime!", 50, 5, 2],
                ["green-slime.png","Você entrou em confronto com uma green slime!", 50, 5, 2],
                ["flame-skull.png","Você entrou em confronto com uma flame skull!", 80, 10, 10],
                ["mimic.png","É um mímico!",120, 15, 20],
                ["chest.png","Um baú esta diante de você",0, 0, 0],
                ["png.png","Você achou uma bolsa com 20 moedas de ouros",0,0,20]]//Foto,texto,vida,ataque,ouro
             
document.addEventListener("DOMContentLoaded", function(){
    //acoes
    const actSair = document.getElementById("act-sair");
    const actAttack = document.getElementById("act-attack");
    const actMagic = document.getElementById("act-magic");
    const actInteract = document.getElementById("act-interact");
    const actEscape = document.getElementById("act-escape");
    //Informações do monstro
    var eventImg = document.getElementById("event-img");
    var eventHp = document.getElementById("event-hp");
    var eventAttack = document.getElementById("event-attack");
    var eventGoldDrop = document.getElementById("event-gold-drop");
    var textEvent = document.getElementById("text-event");
    var eventHpIcon = document.getElementById("event-hp-icon");
    //Dados do personagem
    var playerHp = document.getElementById("player-hp")
    var playerMp = document.getElementById("player-mp")
    var playerAttack = document.getElementById("player-attack")
    var playerArmor = document.getElementById("player-armor")
    var playerImage = document.getElementById("player-image")
    var playerGold = document.getElementById("player-gold");
    //Carregar dados do player
    var params = new URLSearchParams(window.location.search);
    var playerClass = params.get("classe")
    playerHp.textContent = params.get("playerHp")
    playerMp.textContent = params.get("playerMp")
    playerAttack.textContent = params.get("playerAttack")
    playerArmor.textContent = params.get("playerArmor")
    playerImage.innerHTML = '<img src="img/'+playerClass+'.png">'

    //Funções globais
    function randomEvent(){
        var eventPosition = Math.floor(Math.random()*eventBase.length)
        return eventBase[eventPosition]
    }
    function showEvent(){
        var newEvent = randomEvent();
        eventImg.src = 'img/'+newEvent[0];
        eventAttack.value =  newEvent[3];
        eventGoldDrop.value = newEvent[4];
        if(newEvent[2]==0){
            eventHpIcon.textContent = "";
            eventHp.textContent = "";
            textEvent.textContent = newEvent[1];
        }else{
            eventHpIcon.textContent = "❤️";
            eventHp.textContent = newEvent[2]
            textEvent.textContent = newEvent[1];
        }
    }
    //Ações
    actSair.addEventListener("click", function(){
        window.location.href = 'index.html'
    })

    actInteract.addEventListener("click", function(){
        showEvent()
    })

    actAttack.addEventListener("click", function(){
        if(eventHp.textContent != ""){
            var monsterHp = parseInt(eventHp.textContent);
            var monsterAttack = parseInt(eventAttack.value);
            var newMonsterHp = monsterHp - parseInt(playerAttack.textContent)
            eventHp.textContent=newMonsterHp;
            if(newMonsterHp<=0){
                alert("Você derrotou o monstro!");
                playerGold.textContent=parseInt(playerGold.textContent) + parseInt(eventGoldDrop.value)
                showEvent()     
            }else{
                var newPlayerHp = parseInt(playerHp.textContent) - monsterAttack
                playerHp.textContent = newPlayerHp;
            }
        }
    })
})