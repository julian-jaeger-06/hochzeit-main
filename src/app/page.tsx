import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Countdown from "@/components/Countdown/Countdown";
import Ablauf from "@/components/Ablauf/Ablauf";
import Location from "@/components/Location/Location"
import Uebernachtung from "@/components/Uebernachtung/Uebernachtung";
import Footer from "@/components/Footer/Footer";
import Anmeldung from "@/components/Anmeldung/Anmeldung";
import bg from "@/assets/background_paper.jpeg";
import Image from "next/image";


export default function Home() {

  const links = [
    { label: "Countdown", url: "#countdown" },
    { label: "Ablauf", url: "#ablauf" },
    { label: "Location", url: "#location" },
    { label: "Übernachtung", url: "#uebernachtung" },
    { label: "Anmeldung", url: "#anmeldung" },
  ];

  return (
    <body >
      <Navbar links={links} />
      <main className="mainwrapper">
        <Image
          alt="Mountains"
          src={bg}
          placeholder="blur"
          quality={100}
          className="fixed inset-0 -z-10 w-screen h-screen object-cover"
        />
        <Hero />
        <section id='countdown' className="scroll-smooth	scroll-m-24">
          <Countdown />
        </section>
        <section id='ablauf' className="scroll-m-24">
          <Ablauf />
        </section>
        <section id='location' className="scroll-m-24">
          <Location />
        </section>
        <section id="uebernachtung" className="scroll-m-24">
          <Uebernachtung />
        </section>
        <section id="anmeldung" className="scroll-m-24">
          <Anmeldung />
        </section>
      </main>
      <Footer />
    </body>

  );
}