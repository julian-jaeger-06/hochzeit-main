import { GiBigDiamondRing } from "react-icons/gi";
import './navbar.css'
export default function Navbar({ links }: Props) {
  return (
    <nav>
      <div className="navbar">
        <a href="/">
        <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="heart">
          <path id="Vector" d="M24.1965 6.84749C14.8286 -3.351 2.8813 4.23623 2.61717 14.8798C2.3531 25.5212 10.8078 31.164 16.9723 36.2212C19.1473 38.0043 21.2436 39.6848 23.3818 39.6778" stroke="rgba(60, 55, 50, 0.5)" stroke-width="4" stroke-linecap="round"/>
          <path id="Vector_2" opacity="0.5" d="M24.1829 6.91737C34.0586 -3.34401 45.6312 4.16634 45.3671 14.8099C45.1029 25.4535 36.3668 31.1525 29.9502 36.2509C27.6865 38.0463 25.5064 39.7407 23.3682 39.7477" stroke="rgba(60, 55, 50, 0.5)" stroke-width="4" stroke-linecap="round"/>
          </g>
          </svg>
        </a>
        <div className="menu text-lg fw-bold items-center">
          {links.map((link) => (
            <a
              className=""
              key={link.label}
              href={link.url}
              target={link.target}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div />
      </div>
    </nav>

  );
}

type Props = {
  links: {
    label: string;
    url: string;
    target?: string;
  }[];
};
