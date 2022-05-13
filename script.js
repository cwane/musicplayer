console.log('Welcome to Spotify');

// initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.querySelectorAll(".songItem"));
let songs = [
    {
        Name: "Warriyo - Mortals [NCS Release]",
        filePath: "songs/1.mp3",
        coverPath: "covers/1.jpg",
    },
    {
        Name: "Cielo - Huma-Huma",
        filePath: "songs/2.mp3",
        coverPath: "covers/2.jpg",
    },
    {
        Name: "DEAF KEV - Invincible [NCS Release]-320k",
        filePath: "songs/3.mp3",
        coverPath: "covers/3.jpg",
    },
    // {
    //     Name: "Salam-e-Ishq",
    //     filePath: "songs/4.mp3",
    //     coverPath: "covers/4.jpg",
    // },



];

console.log(songs);

songItem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    // element.getElementsByClassName("songName")[0].innerText = songs[i].Name;
    element.querySelector(".songName").innerText = songs[i].Name;
});
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

  
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/2.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
       
    })
})
