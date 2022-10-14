import {useState, useEffect} from 'react';
import Player from '../Player/Player';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [songs] = useState([
    {
      title: "Som 1",
      artist: "Artista 1",
      img_src: "./images/1.gif", 
      src: "./music/audio2.mp3"
    },
    {
      title: "Som 2",
      artist: "Artista 2",
      img_src: "./images/2.gif",
      src: "./music/audio3.mp3"
    },
    {
      title: "Som 3",
      artist: "Artista 3",
      img_src: "./images/4.gif",
      src: "./music/audio4.mp3"
    },
    {
      title: "Som 4",
      artist: "Artista 4",
      img_src: "./images/5.gif",
      src: "./music/audio1.mp3"
    },
    {
      title: "Som 5",
      artist: "Artista 5",
      img_src: "./images/1.gif", 
      src: "./music/audio.mp3"
    },
    {
      title: "Som 6",
      artist: "Artista 6",
      img_src: "./images/2.gif",
      src: "./music/audio1.mp3"
    },
    {
      title: "Som 7",
      artist: "Artista 7",
      img_src: "./images/4.gif",
      src: "./music/audio.mp3"
    },
    {
      title: "Som 8",
      artist: "Artista 8",
      img_src: "./images/5.gif",
      src: "./music/audio5.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="container">
    <div className="card mt-1 bg-info">
      <div className="card-title">
        <div className="row">
          <div className="col">
            <br></br>
          <h4 className="mx-3 my-3 text-center">OUÇA SEUS HINOS AQUI!</h4>
          </div>
   
          </div>
       
        
      
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
    </div>
    </div>
  );
}

export default App;
