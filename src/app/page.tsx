import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Countdown from "@/components/Countdown/Countdown";
import Ablauf from "@/components/Ablauf/Ablauf";
import wedding from "@/assets/wedding.jpg";
import hero_aline_louis from "@/assets/hero_aline_louis.jpeg"

export default function Home() {

  const links = [
    { label: "Countdown", url: "#countdown" },
    { label: "Ablauf", url: "#ablauf" },
    { label: "Location", url: "#location" },
    { label: "Übernachtung", url: "#uebernachtung" },
    { label: "Anmeldung", url: "#anmeldung" },
  ];

  return (
    <main className="wrapper">
      <Navbar links={links} />
      <Hero/>
      <Countdown/>
      <Ablauf/>
     
    </main>
  );
}