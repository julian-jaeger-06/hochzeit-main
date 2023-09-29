import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { BsCheck2 } from 'react-icons/bs';
import './page.css';


export default function Response() {
  const links = [
    { label: "Countdown", url: "#countdown" },
    { label: "Ablauf", url: "#ablauf" },
    { label: "Location", url: "#location" },
    { label: "Übernachtung", url: "#uebernachtung" },
    { label: "Anmeldung", url: "#anmeldung" },
  ];

  return (
    <body>
      <Navbar links={links} />
      <main className="mainwrapper">
        <div className="GesendetSection">
          <h1>Wir freuen uns auf Dich!</h1>
          <div>
            <h2 className="dark">Du hast deine Antwort erfolgreich abgesendet.<br></br><br></br>
             </h2>
            <BsCheck2 className='CheckedIcon' />
          </div>
        </div>
      </main>
      <Footer/>
    </body>
  );
}
