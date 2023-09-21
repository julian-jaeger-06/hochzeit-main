import './hero.css'
import Image, { StaticImageData } from "next/image";
import { Petit_Formal_Script } from 'next/font/google';
import image from "next/image";

const petit_Formal_Script = Petit_Formal_Script({
  subsets: ['latin'],
  weight: '400',
})

export default function Hero() {
  
  return (
    <section>
      <h1>Aline & Louis</h1>
      <div className="HeroFlex">
        <div className="Intro">
          <h2>Feiert unsere Hochzeit mit uns!</h2>
          <h2 className="h2PetitFormalScript">am 06.07.2024.</h2>
          <p>Wir laden Euch herzlich zu unserer<br>
            </br>Hochzeit ein. Feiert mit uns ein neues<br>
            </br>Kapitel in unserem Leben, gefüllt mit<br>
            </br> unendlicher Liebe und Freude.</p>
        </div>
        <div className="HeroImage">
           <img className="AlineLouis" src="https://picsum.photos/400/700" alt="Aline und Louis"/> 
           <div className="Rectangle"></div> 
        </div>
        <img src="https://picsum.photos/400/700" alt="Aline und Louis"/>           
         {/* Bilder und SVG muss noch ausgetauscht werden, konnte aber nicht richtig verknüpft werden */}
      </div>
    </section>
  );
} 

type Props = {
  title: string;
  content: string;
  image: StaticImageData;
};
