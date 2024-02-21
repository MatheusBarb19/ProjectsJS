const songName = document.getElementById("song-name"); //acesas o elemento com Id song-name
const bandname = document.getElementById("band-name");
const cover = document.getElementById("cover");
const play = document.getElementById("Play");
const avancar = document.getElementById("Skip");
const voltar = document.getElementById("Return");
const barraprogesso = document.getElementById("current-progress");
const song = document.getElementById('audio');
const progressContainer = document.getElementById("progress-container");
const btShuffle = document.getElementById("shuffle");

const Clandestina = { //criando um objeto
    songName : 'Clandestina',
    artist : 'Emma Peters',
    file : 'Clandestina'
};

const COWBELL_WARRIOR = { //criando um objeto
    songName : 'COWBELL WARRIOR',
    artist : 'SXMPRA',
    file : 'COWBELL WARRIOR' //caminho para a musica
};
const DoIWannaKnow = { //criando um objeto
    songName : 'Do I Wanna Know',
    artist : 'Arctic Monkeys',
    file : 'Do I Wanna Know'
};
const MISIRLOU = { //criando um objeto
    songName : 'MISIRLOU',
    artist : 'Dick Dale',
    file : 'MISIRLOU'
};
                // 0              1                 2           3
const Playlist = [Clandestina, COWBELL_WARRIOR, DoIWannaKnow, MISIRLOU]; //Criando uma ARRAY
let index = 0;

let tatocando = false; // variável de controle para ver se esta tocando
let taembaralhado = false; // variável de controle para ver se esta embaralhado
let SortearPlayslist = [...Playlist];

function TocarMusica(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill'); //remove o botão play
    play.querySelector('.bi').classList.add('bi-pause-circle-fill'); //add o botão pause
    song.play(); //ação
    tatocando = true;
};

function PausarMusica(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill'); //remove o botão play
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill'); //add o botão pause
    song.pause(); //ação
    tatocando = false;    
};

function PlayPauseDecidir(){
    if (tatocando === true){ //se estiver tocando 
        PausarMusica(); //pausar   
    } else{ //se não estiver tocando 
        TocarMusica(); //tocar musica 
    }
}

function initializeSong(){ //acessando as informações através da Array
    cover.src = `capas/${Playlist[index].file}.jpg`;
    song.src = `audios/${Playlist[index].songName}.mp3`;
    songName.innerText = Playlist[index].songName;
    bandname.innerText = Playlist[index].artist;
}

function voltarmusica(){
    if (index === 0){
        index = Playlist.length -1; //.length é o comprimento do Array
    }
    else{
        index = index -1;
    }
    initializeSong(); //atualiza as informaçções
    TocarMusica(); 

}

function avancarmusica(){
    if (index === Playlist.length -1){
        index = 0; //.length é o comprimento do Array
    }
    else {
        index = index + 1;
    }
    initializeSong();
    TocarMusica();
}

function updateprogressbar(){
    const largurabarra = (song.durantion/song.currentTime)*100; //calculo que determina a % escutado da musica
    barraprogesso.style.setProperty('--progress', `${largurabarra}%`); //acessando o Css
}                                                    //mascara no JS

initializeSong();

function jumpTo(event){ //avançar musica pela barar de progresso 
    const width = progressContainer.clientWidth; //largura da bara de progresso
    const ClickPosition = event.offsetX;
    const jumpToTime = (ClickPosition/width)*song.durantion;
    song.currentTime = jumpToTime;
}

function shuffleButtonClicked(){
    if (taembaralhado === false){
        taembaralhado = true;
        shuffleArray();
    }
    
}
    initializeSong();

play.addEventListener('click', PlayPauseDecidir); //Atribui ao botão a capacidade de ouvir o evento click
voltar.addEventListener('click', voltarmusica); //Atribui ao botão a capacidade de ouvir o evento click de voltar
avancar.addEventListener('click', avancarmusica);
progressContainer.addEventListener('click', jumpTo);
song.addEventListener('timeupdate', updateprogressbar);
shuffleButton.addEventListener('click', shuffleButtonClicked);