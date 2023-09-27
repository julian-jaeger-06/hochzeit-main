import './navbar.css'
import HeartIcon from "@/assets/HeartIcon";
export default function Navbar({ links }: Props) {
  return (
    <nav>
      <div className="navbar">
        <a href="/">
        <HeartIcon/>
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
