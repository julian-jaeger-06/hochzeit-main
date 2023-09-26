import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Countdown from "@/components/Countdown/Countdown";
import Ablauf from "@/components/Ablauf/Ablauf";
import Location from "@/components/Location/Location"
import Uebernachtung from "@/components/Uebernachtung/Uebernachtung";
import Footer from "@/components/Footer/Footer";

export default function Home() {

  const links = [
    { label: "Countdown", url: "#countdown" },
    { label: "Ablauf", url: "#ablauf" },
    { label: "Location", url: "#location" },
    { label: "Übernachtung", url: "#uebernachtung" },
    { label: "Anmeldung", url: "#anmeldung" },
  ];

  return (
    <body>
    <main className="mainwrapper">
      <Navbar links={links} />
      <Hero/>
      <Countdown/>
      <Ablauf/>
      <Location/>
      <Uebernachtung/>

      <Footer/>
    </main>
    </body>
     
  );
}