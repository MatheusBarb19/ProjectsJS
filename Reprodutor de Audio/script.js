const songName = document.getElementById("song-name"); //acesas o elemento com Id song-name

const play = document.getElementById("Play");

const song = document.getElementById('audio');

songName.innerText = 'Clandestina';

//song.(); //comando de trocar

function TocarMusica(){
    song.play();
}

play.addEventListener('click', TocarMusica); //Atribui ao botão a capacidade de ouvir o evento click