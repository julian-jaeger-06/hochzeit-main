import Heart from "@/app/heart.svg";
import Image, { StaticImageData } from "next/image";
import "./hero.css";
import WeddingPhoto from "@/assets/hero_aline_louis.jpeg";

export default function Hero() {
  return (
    <section>
      <h1>Aline & Louis</h1>
      <div className="HeroFlex">
        <div className="Intro">
          <h2 className="text-center">Feiert unsere Hochzeit mit uns!</h2>
          <h2 className="h2PetitFormalScript">am 06.07.2024.</h2>
          <p>
            Wir laden Euch herzlich zu unserer<br></br>Hochzeit ein. Feiert mit
            uns ein neues<br></br>Kapitel in unserem Leben, gefüllt mit<br></br>{" "}
            unendlicher Liebe und Freude.
          </p>
        </div>

        <div className="HeroImage">
          <img
            className="AlineLouis max-w-full"
            src={WeddingPhoto.src}
            alt="Aline und Louis"
          />
          <div className="Rectangle"></div>
        </div>

        <svg
          width="100%"
          height="100%"
          viewBox="0 0 48 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="svgHeart"
          stroke="rgba(137, 157, 138, 1)"
          strokeWidth="2"
        >
          <g id="heart">
            <path
              id="Vector"
              d="M24.1965 6.84749C14.8286 -3.351 2.8813 4.23623 2.61717 14.8798C2.3531 25.5212 10.8078 31.164 16.9723 36.2212C19.1473 38.0043 21.2436 39.6848 23.3818 39.6778"
              stroke-linecap="round"
            />
            <path
              id="Vector_2"
              opacity="0.5"
              d="M24.1829 6.91737C34.0586 -3.34401 45.6312 4.16634 45.3671 14.8099C45.1029 25.4535 36.3668 31.1525 29.9502 36.2509C27.6865 38.0463 25.5064 39.7407 23.3682 39.7477"
              stroke-linecap="round"
            />
          </g>
        </svg>

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
