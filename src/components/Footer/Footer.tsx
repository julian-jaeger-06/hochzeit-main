import "./footer.css";
import PhoneIcon from "./PhoneIcon";

export default function Footer() {
  return (
    <footer>
      <div className="FooterContent">
        <h2 className="Beige">Trauzeugen</h2>
        <div className="Trauzeugen">
          <div>
            <h3 className="Beige">Tim Schäfer</h3>
            <div className="Tel">
              <PhoneIcon />
              <a href="tel:+4915772770460">+49 157 72770460</a>
            </div>
          </div>
          <div>
            <h3 className="Beige">Vivi Engel</h3>
            <div className="Tel">
              <PhoneIcon />
              <a href="tel:+491773916170">+49 177 3916170</a>
            </div>
          </div>
        </div>
        <div className="Outro">
          <span>Wir freuen uns auf euch!</span>
          <svg
            width="48"
            height="42"
            viewBox="0 0 48 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="heart">
              <path
                id="Vector"
                d="M24.1965 6.84749C14.8286 -3.351 2.8813 4.23623 2.61717 14.8798C2.3531 25.5212 10.8078 31.164 16.9723 36.2212C19.1473 38.0043 21.2436 39.6848 23.3818 39.6778"
                stroke="rgba(248, 240, 229, 1)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                id="Vector_2"
                opacity="0.5"
                d="M24.1829 6.91737C34.0586 -3.34401 45.6312 4.16634 45.3671 14.8099C45.1029 25.4535 36.3668 31.1525 29.9502 36.2509C27.6865 38.0463 25.5064 39.7407 23.3682 39.7477"
                stroke="rgba(248, 240, 229, 1)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
}
