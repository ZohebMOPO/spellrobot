import React from "react";
import "./Music.css";
import AudioPlayer from "react-audio-element";

function Music() {
  return (
    <div className="text-light">
      <AudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
        overrideStyles={true}
        classNames={{
          controlButton: "custom-control",
          playPause: "custom-play-pause",
          timeText: "custom-time-text",
          sliderTrack: "custom-slider-track",
        }}
      />
    </div>
  );
}

export default Music;
