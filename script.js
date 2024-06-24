// evento de click em toda minha aplicacao, cada letra da bateria sera tocavel apertando cada tecla da mesma
document.body.addEventListener('keyup', function(event){
    playsound(event.code.toLowerCase())
})


// adicao de click no meu botao 'tocar'
document.querySelector('.composer button').addEventListener('click', function(){
    let song = document.querySelector('#input').value 

   
    // transformando meu comando de toque da bateria em um array para ordernar quais sons tocarao
    if(song !== ''){
        let songArray = song.split('')
        playcomposicao(songArray);
    }

})

function playsound(sound){
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement){
        // o meu elemento de audio ira zerar antes mesmo de terminar
        audioElement.currentTime = 0;
        // apos a acao anterior ele tocara
        audioElement.play();
    }

    if(keyElement){

        keyElement.classList.add('active');


        // tempo de retirada de audio 
        setTimeout(()=>{
            keyElement.classList.remove('active')
        }, 100)
    }
}


function playcomposicao(songArray){
    let wait = 0 
    for(let songItem of songArray){
        setTimeout(() => {
        playsound(`key${songItem}`);
        }, wait);
        wait += 250;
        
    }
}



