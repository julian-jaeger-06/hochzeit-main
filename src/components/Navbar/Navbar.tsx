import { GiBigDiamondRing } from "react-icons/gi";
import './navbar.css'
export default function Navbar({ links }: Props) {
  return (
    <nav>
      <div className="navbar">
        <a href="/">
          <GiBigDiamondRing className="w-10 h-10" />
          {/* richtiges Icon muss noch eingefügt und richtig verlinkt werden */}
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
