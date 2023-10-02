import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Countdown from "@/components/Countdown/Countdown";
import Ablauf from "@/components/Ablauf/Ablauf";
import Location from "@/components/Location/Location"
import Uebernachtung from "@/components/Uebernachtung/Uebernachtung";
import Footer from "@/components/Footer/Footer";
import Anmeldung from "@/components/Anmeldung/Anmeldung";


export default function Home() {

  const links = [
    { label: "Countdown", url: "#countdown" },
    { label: "Ablauf", url: "#ablauf" },
    { label: "Location", url: "#location" },
    { label: "Übernachtung", url: "#uebernachtung" },
    { label: "Anmeldung", url: "#anmeldung" },
  ];

  return (
    <body className="scroll-p-20">
      <Navbar links={links} />
      <main className="mainwrapper">
        <Hero />
        <section id='countdown'>
          <Countdown />
        </section>
        <section id='ablauf'>
          <Ablauf />
        </section>
        <section id='location'>
          <Location />
        </section>
        <section id="uebernachtung">
          <Uebernachtung />
        </section>
        <section id="anmeldung">
          <Anmeldung />
        </section>
      </main>
      <Footer />
    </body>

  );
}