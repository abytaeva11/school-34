import React, { useState, useEffect } from 'react';

import muz4 from "../gimn-kirgizii-kyrgyz-respublikasynyn-mamlekettik-gimni.mp3";

const Gimn = () => {
  const [isNationalAnthemPlaying, setNationalAnthemPlaying] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const targetTime = new Date(currentDate);
    targetTime.setHours(8,31,0);


    let timeUntilNextAnthem = targetTime - currentDate;
    if (timeUntilNextAnthem < 0) {
      timeUntilNextAnthem += 24 * 60 * 60 * 1000; 
    }

    const timerId = setTimeout(() => {
      playNationalAnthem();
    }, timeUntilNextAnthem);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const playNationalAnthem = () => {
  setNationalAnthemPlaying(true);
  const audio = new Audio(muz4);
  audio.play()
    .then(() => {
      console.log('Гимн воспроизведен');
    })
    .catch((error) => {
      console.error('Ошибка воспроизведения: ', error);
    })
    .finally(() => {
      setNationalAnthemPlaying(false);
    });
};
  return (
    <div>
      {isNationalAnthemPlaying ? (
        <p></p>
      ) : (
        <p style={{
          fontSize:"36px",
          color:"white",
          marginLeft:"1140px",
          marginTop:"-650px",
          position:"absolute",
        
        }}>...</p>
      )}
    </div>
  );
};

export default Gimn;
