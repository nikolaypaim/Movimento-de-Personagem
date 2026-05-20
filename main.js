function mover(direcao) {
    let personagem = document.getElementById("personagem");
    let posicaoAtualX = personagem.offsetLeft;
    let posicaoAtualY = personagem.offsetTop;

    if (direcao === 'esquerda') {
        personagem.style.left = posicaoAtualX - 10 + 'px'; // Move para a esquerda
    } else if (direcao === 'direita') {
        personagem.style.left = posicaoAtualX + 10 + 'px'; // Move para a direita
     }else if (direcao === 'cima')
         { personagem.style.top = posicaoAtualY - 10 + 'px'; // Move para cima
     }else if (direcao === 'baixo') {
        personagem.style.top = posicaoAtualY + 10 + 'px'; // Move para baixo    
     }
}

document.addEventListener("keydown",function(tecla){
    if(tecla.key === "a" || tecla.key === "ArrowLeft"){
        mover ("esquerda")
    }
    else if(tecla.key === "d" || tecla.key === "ArrowRight"){
        mover ("direita")
    }
    else if(tecla.key === "w" || tecla.key === "ArrowUP"){
        mover ("cima")
    }
    else if(tecla.key === "s" || tecla.key === "ArrowDown"){
        mover ("baixo")
    }
})