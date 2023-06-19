console.log("Welcome To Spotify")

// Variables
let songIndex = 0;
let audioElement = new Audio('./assets/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName:"Amplifier", filePath:"./assets/songs/10.mp3", coverPath: "/assets/covers/10.jpg"},
    {songName:"Na Za", filePath:"./assets/songs/9.mp3" , coverPath: "/assets/covers/9.jpg"},
    {songName:"Uri", filePath:"./assets/songs/8.mp3" , coverPath: "/assets/covers/8.jpg"},
    {songName:"Amplifier", filePath:"./assets/songs/7.mp3" , coverPath: "/assets/covers/7.jpg"},
    {songName:"Amplifier", filePath:"./assets/songs/6.mp3" , coverPath: "/assets/covers/6.jpg"},
    {songName:"Amplifier", filePath:"./assets/songs/5.mp3" , coverPath: "/assets/covers/5.jpg"},
    {songName:"Amplifier", filePath:"./assets/songs/4.mp3" , coverPath: "/assets/covers/4.jpg"},
    {songName:"Amplifier", filePath:"./assets/songs/3.mp3" , coverPath: "/assets/covers/3.jpg"},
    {songName:"True Love", filePath:"./assets/songs/2.mp3" , coverPath: "/assets/covers/2.jpg"}
];

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})


// audioElement.play();

// Handle play pause
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


// Listen Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update-Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


// Play Pause from Top Song List
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause'); 

        audioElement.src = `./assets/songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


// Previous button Handle
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    
    audioElement.src = `./assets/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


// Next button Handle
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    
    audioElement.src = `./assets/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})