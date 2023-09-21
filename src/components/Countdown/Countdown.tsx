'use client'

import { clear } from 'console';
import './countdown.css';
import { useState, useEffect } from 'react';



const Countdown = () => {
  const [weddingTime, setWeddingTime] = useState(false)
  const [days, setDays] = useState (0);
  const [hours, setHours] = useState (0);
  const [minutes, setMinutes] = useState (0);
  const [seconds,setSeconds] = useState (0);


  useEffect(() => {
    const target = new Date ("07/06/2024 16:00:00");

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
  },[]);


  return (
    
   
      
    <section className='CountdownSection'>
       {weddingTime ? (
      <>
        <h2>Danke an alle für die schöne Feier!</h2>
      </>
    ) : (
      <>
        <h2>Bis zum Hochzeitstag sind es noch:
        </h2>
        <div className='Countdown'>
            <div>
                <span className='h2PetitFormalScript'>{days}</span>
                <span>Tage</span>
            </div>
            <hr>
            </hr>
            <div>
                <span className='h2PetitFormalScript'>{hours}</span>
                <span>Stunden</span>
            </div>
            <hr>
            </hr>
            <div>
                <span className='h2PetitFormalScript'>{minutes}</span>
                <span>Minuten</span>
            </div>
            <hr>
            </hr>
            <div>
                <span className='h2PetitFormalScript'>{seconds}</span>
                <span>Sekunden</span>
            </div>
        </div>

      </>
      )}  
    </section>
  );
};


export default Countdown;








function usedId() {
  throw new Error('Function not implemented.');
}
// const defaultRemainingTime ={
//   seconds: '00',
//   minutes: '00',
//   hours: '00',
//   days: '00',
// }

// const Countdown = ({countdownTimestampMS}) => {
//   const [remainingTime, setRemainingTime] = useState (defaultRemainingTime);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//           updateRemainngTime(countdownTimestampMS);
//       }, 1000);
//       return () => clearInterval(intervalId);
//   },[countdownTimestampMS]);

//   function updateRemainngTime(countdown) {
   
//   }
//   return (
//     <section className='CountdownSection'>
//         <h2>Bis zum Hochzeitstag sind es noch:
//         </h2>
//         <div className='Countdown'>
//             <div>
//                 <span className='h2PetitFormalScript'>{remainingTime.days}</span>
//                 <span>Tage</span>
//             </div>
//             <hr>
//             </hr>
//             <div>
//                 <span className='h2PetitFormalScript'>{remainingTime.hours}</span>
//                 <span>Stunden</span>
//             </div>
//             <hr>
//             </hr>
//             <div>
//                 <span className='h2PetitFormalScript'>{remainingTime.minutes}</span>
//                 <span>Minuten</span>
//             </div>
//             <hr>
//             </hr>
//             <div>
//                 <span className='h2PetitFormalScript'>{remainingTime.seconds}</span>
//                 <span>Sekunden</span>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Countdown;
