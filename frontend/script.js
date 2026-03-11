const audio = new Audio();

/* UI elements */

const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");

const title = document.getElementById("song-title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

const player = document.querySelector(".player");
const songList = document.querySelector(".song-list");
const DEFAULT_COVER = "/img/default-cover.png";

/* state */

let songs = [];
let currentSong = 0;

/* fetch songs from backend */

async function loadSongs(){
  try{

  const res = await fetch("/songs");

  if(!res.ok){
  throw new Error("Failed to fetch songs");
}

const data = await res.json();

songs = [];
songList.innerHTML = "";

data.forEach((song, index)=>{

  songs.push({
    src: song.path,
    title: song.title,
    artist: "Unknown Artist",
    cover: DEFAULT_COVER
  });

  const card = document.createElement("div");
  card.className = "song-card";
  const songData = songs[index];

  card.innerHTML = `
  <img src="${songData.cover}">
  <h3>${songData.title}</h3>
  <p>${songData.artist}</p>
  `;

  card.addEventListener("click",()=>{
  loadSong(index);
  playSong();
  });

  songList.appendChild(card);

});

  } catch(err){
    console.error("Song loading error:",err);
    songList.innerHTML = "<p>Failed to load songs</p>";
  }

}

/* load song */

function loadSong(index){

  currentSong = index;

  const song = songs[index];

  audio.src = song.src;

  title.innerText = song.title;
  artist.innerText = song.artist;
  cover.src = song.cover;

}

/* play */

function playSong(){

  audio.play();

  playBtn.innerText = "⏸";
  player.classList.add("playing");

}

/* pause */

function pauseSong(){

  audio.pause();

  playBtn.innerText = "▶";
  player.classList.remove("playing");

}

/* play toggle */

playBtn.addEventListener("click",()=>{

if(audio.paused){
  playSong();
  } else {
  pauseSong();
  }

});

/* progress bar */

audio.addEventListener("timeupdate",()=>{

  if(!audio.duration) return;

  progress.value = (audio.currentTime / audio.duration) * 100;

  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);

});

/* seek */

progress.addEventListener("input",()=>{

  if(!audio.duration) return;

  audio.currentTime = (progress.value / 100) * audio.duration;

});

/* auto next */

audio.addEventListener("ended",()=>{

  nextSong();

});

/* next */

function nextSong(){

  currentSong++;

  if(currentSong >= songs.length){
  currentSong = 0;
  }

  loadSong(currentSong);
  playSong();

}

/* previous */

function prevSong(){

  currentSong--;

  if(currentSong < 0){
  currentSong = songs.length - 1;
  }

  loadSong(currentSong);
  playSong();

}

/* time formatter */

function formatTime(time){

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
  .toString()
  .padStart(2,"0");

  return `${minutes}:${seconds}`;

}

/* initialize */

loadSongs();