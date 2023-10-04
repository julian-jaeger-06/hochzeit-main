import "./uebernachtung.css";

export default function Uebernachtung() {
  return (
    <section className="p-8">
      <h2 className="text-center">
        Suchst du noch eine Übernachtungs&shy;möglichkeit?
      </h2>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 my-10 md:grid-rows-[repeat(4,auto)] md:grid-flow-col">
        <h3 className="mt-4 -mb-4">
          Sonderkonditionen bei Hotel Alaïa (bis 30.11.23)
        </h3>
        <div className="Fact">
          <h4 className="opacity-50 font-medium mt-0">Info:</h4>
          <span>
            Bitte einfach per Mail an{" "}
            <a className="underline" href="mailto:hello@alaialodge.ch">
              hello@alaialodge.ch
            </a>{" "}
            schreiben, dass es sich um die auf Weber reservierten Zimmer handelt
            (Code-Wort „Weber july wedding“).
          </span>
        </div>
        <div className="Fact">
          <h4 className="opacity-50 font-medium mt-0">Wo:</h4>
          <a
            className="underline"
            href="https://www.google.com/maps/place/Ala%C3%AFa+Lodge/@46.3087017,7.470013,18.64z/data=!4m9!3m8!1s0x478ee1f28e12cce5:0xbd9d32bc71a93898!5m2!4m1!1i2!8m2!3d46.3086272!4d7.4702311!16s%2Fg%2F11nnqhb002?entry=ttu"
            target="_blank"
          >
            Rte du Rawyl 10, 3963 Crans-Montana, Schweiz
          </a>
        </div>
        <div className="grid grid-cols-[auto,1fr] gap-6">
          <h4 className="opacity-50 row-span-2 font-medium mt-0">Preise:</h4>
          <div className="flex-col flex gap-0.5 items-start">
            <div className="font-medium">Doppelzimmer</div>
            <div className="opacity-75">135 CHF/Nacht</div>
          </div>
          <div className="flex-col flex gap-0.5 items-start">
            <div className="font-medium">
              Doppelzimmer (etwas größer mit Balkon)
            </div>
            <div className="opacity-75">165 CHF/Nacht</div>
          </div>
        </div>

        <h3 className="mt-4 -mb-4">Camping Moubra</h3>
        <div className="Fact">
          <h4 className="opacity-50 font-medium mt-0">Info:</h4>
          <span>
            Für Wohnmobil Reisende gibt es einen Campingplatz direkt neben der
            Freitags-Location
          </span>
        </div>
        <div className="Fact">
          <h4 className="opacity-50 font-medium mt-0">Wo:</h4>
          <a
            className="underline"
            href="https://www.google.com/maps/place/Camping+Moubra/@46.3045749,7.479018,17.4z/data=!4m24!1m14!4m13!1m6!1m2!1s0x478ee029bd349c6f:0x9b835197cfcc72ce!2sCamping+Moubra,+Imp.+de+la+Plage+2,+3963+Crans-Montana,+Schweiz!2m2!1d7.480594!2d46.304129!1m5!1m1!1s0x478ee029bd349c6f:0x9b835197cfcc72ce!2m2!1d7.480594!2d46.304129!3m8!1s0x478ee029bd349c6f:0x9b835197cfcc72ce!5m2!4m1!1i2!8m2!3d46.304129!4d7.480594!16s%2Fg%2F1td4cg6k?entry=ttu"
            target="_blank"
          >
            Impassa de la Plage 2, 3963 Crans-Montana, Schweiz
          </a>
        </div>
        <div className="grid grid-cols-[auto,1fr] gap-6">
          <h4 className="opacity-50 font-medium mt-0 row-span-2">Preise:</h4>
          <div className="flex-col flex gap-0.5 items-start">
            <div className="font-medium">Stellplatz für Zelt | 2 Personen</div>
            <div className="opacity-75">8 CHF/Nacht</div>
          </div>
          <div className="flex flex-col gap-0.5 items-start">
            <span className="font-medium">Stellplatz Wohnwagen</span>
            <span className="opacity-75"> 18 CHF/Nacht</span>
          </div>
        </div>
      </div>
    </section>
  );
}
