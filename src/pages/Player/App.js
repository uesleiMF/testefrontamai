import {useState, useEffect} from 'react';
import Player from '../Player/Player';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [songs] = useState([
    {
      title: "Song 1",
      artist: "Artist 1",
      img_src: "./images/1.gif", 
      src: "./music/audio.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/2.gif",
      src: "./music/audio1.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/4.gif",
      src: "./music/audio.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/5.gif",
      src: "./music/audio1.mp3"
    },
    {
      title: "Song 5",
      artist: "Artist 5",
      img_src: "./images/1.gif", 
      src: "./music/audio.mp3"
    },
    {
      title: "Song 6",
      artist: "Artist 6",
      img_src: "./images/2.gif",
      src: "./music/audio1.mp3"
    },
    {
      title: "Song 7",
      artist: "Artist 7",
      img_src: "./images/4.gif",
      src: "./music/audio.mp3"
    },
    {
      title: "Song 8",
      artist: "Artist 8",
      img_src: "./images/5.gif",
      src: "./music/audio1.mp3"
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
    <div className="card mt-1 bg-primary">
      <div className="card-title">
        <div className="row">
          <div className="col">
            <br></br>
          <h4 className="mx-3 my-3 text-center">OUÇA SEUS HINOS AQUI</h4>
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
