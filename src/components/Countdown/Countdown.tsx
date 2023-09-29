"use client";

import { clear } from "console";
import "./countdown.css";
import { useState, useEffect } from "react";

const Countdown = () => {
  const [weddingTime, setWeddingTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("07/06/2024 16:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setWeddingTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="CountdownSection">
      {weddingTime ? (
        <>
          <h2>Danke an alle für die schöne Feier!</h2>
        </>
      ) : (
        <>
          <h2>Bis zur Hochzeit sind es nur noch</h2>
          <div className="Countdown">
            <div>
              <span className="h2PetitFormalScript">{days}</span>
              <span>Tage</span>
            </div>
            <hr className="seperator" />
            <div>
              <span className="h2PetitFormalScript">{hours}</span>
              <span>Stunden</span>
            </div>
            <hr className="seperator" />
            <div>
              <span className="h2PetitFormalScript">{minutes}</span>
              <span>Minuten</span>
            </div>
            <hr className="seperator" />
            <div>
              <span className="h2PetitFormalScript">{seconds}</span>
              <span>Sekunden</span>
            </div>
          </div>
        </>
      )}
    </section>
  );
};


export default Countdown;