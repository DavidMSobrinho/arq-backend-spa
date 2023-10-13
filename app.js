const model = {
    musicList: [ 
        { 
            nome : "Preta", 
            artista: "Hungria", 
            music_path: 'musics/Hungria%20-%20Preta.mp3'
        },
        { 
            nome : "Temporal", 
            artista: "Hungria", 
            music_path: 'musics/Hungria - Temporal.mp3'
        }
    ],
}

const view = {
    documentMusicList: document.getElementById("music-list"),
    renderList: function() {
        model.musicList.forEach((music, index) => {
            const musicItem = document.createElement("li");
            musicItem.setAttribute("id",index);
            musicItem.textContent = `${index} - Música: ${music.nome} - Artista: ${music.artista}`;
            
            this.documentMusicList.appendChild(musicItem);
        });
    },
    playerDiv: document.getElementById("reprodutor"),
    renderPlayer: function(index) {
        this.playerDiv.innerHTML = '';
        const music = document.createElement('audio');
        music.id       = 'audio-player';
        music.controls = 'controls';
        music.duration = '5';
        music.src      = model.musicList[index].music_path;
        music.type     = 'audio/mpeg';
        document.getElementById('reprodutor').appendChild(music);
//        const player = document.createElement("audio", {is: "controls"});
//        player.setAttribute("controls")
        //this.playerDiv.appendChild(player);
//
//        document.getElementById("reprodutor").remove();

//        documentPlayer.removeAttribute("hidden");
//        const musicSource = document.getElementById("path")
//        musicSource.setAttribute("src", model.musicList[index].music_path)
    },
};

const controller = {
    init: function() {
        view.renderList();
        model.musicList.forEach((music, index) => {
            const musicLine = document.getElementById(index)
            musicLine.addEventListener("click", event => {
                event.preventDefault();
                view.renderPlayer(index)
            });
        });
    },
}

controller.init()