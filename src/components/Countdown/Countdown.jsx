import React, { useEffect, useState } from 'react';
import './Countdown.scss'
export const Countdown = () => {

    const [time, setTime] = useState("");
    useEffect(()=>{
        let countDownDate = new Date("Feb 28, 2022 00:00:00").getTime();
        let x = setInterval(()=>{
            let now = new Date().getTime();
            
            let distance = countDownDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

            if (distance < 0) {
                clearInterval(x);
                setTime("COUNTDOWN FINISHED");}
        }, 1000)
    }, [])
  return (
    <div className="contentReloj"><h1>COUNTDOWN</h1><h2>{time}</h2></div>
  );
};
