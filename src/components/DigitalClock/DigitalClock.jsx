import React, { useEffect, useState } from 'react';

export const DigitalClock = () => {

    const [clockState, setClockState] = useState();

    useEffect(()=>{
        setInterval(()=>{
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000)
    }, [])

  return (
    <div className="contentReloj">
    <h2>{clockState}</h2>
  </div>
  );
};
