const numerocapitulos = 10; //Const é utilizado quando o valor da variável não irá se alterar

const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoRetornar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');

let taTocando = false; //confirmar se está tocando 
//let é usado quando a variável pode mudar durante a execução do programa

let capituloAtual = 1; //confirmar qual capitulo atual (Começa no cap 1)

function TocarFaixa() { //ato de tocar a faixa
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill'); //Acessa a class do botão de pause e remove ele
    botaoPlayPause.classList.add('bi bi-pause-circle-fill');
    taTocando = true;
}


function pausarFaixa(){ //ato de pausar a faixa
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-play-circle-fill'); //Acessa a class do botão de pause e remove ele
    botaoPlayPause.classList.add('bi bi-pause-circle-fill');
    taTocando = false;
}

function alterarNomeCapitulo(){
    nomeCapitulo.innerText = 'Capitulo ' + capituloAtual;
}

function avancarFaixa(){
    if (capituloAtual === numerocapitulos){ //se o capituloAtual for igual a 10 
        capituloAtual = 1; // ele voltará para o capitulo 1
    } else{
        capituloAtual = capituloAtual + 1; //ele passará para o proximo capitulo
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    TocarFaixa();
    taTocando = true;
    alterarNomeCapitulo();
}

function retornarFaixa(){
    if (capituloAtual === 1){ //se o capituloAtual for igual a 1
        capituloAtual = numerocapitulos; // ele voltará para o capitulo 10
    } else{
        capituloAtual = capituloAtual - 1; //ele passará para o proximo capitulo
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual - ".mp3";
    TocarFaixa();
    taTocando = true;
    alterarNomeCapitulo();
}

function TocarOuPausar(){
    if (taTocando === false) { // Se a função for igual a false, começara a tocar
        TocarFaixa();
        taTocando = true;
    } else { // senão, pausar a faixa
        pausarFaixa();
        taTocando = false;
    }
}

// addiciona ao elemento botaoPlaypause a função Tocar Faixa, quando houve um clique
botaoPlayPause.addEventListener('click', TocarOuPausar); 
botaoAvancar.addEventListener('click', avancarFaixa);
botaoRetornar.addEventListener('click', retornarFaixa);


