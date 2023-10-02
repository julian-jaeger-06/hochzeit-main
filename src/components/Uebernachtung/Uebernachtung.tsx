import "./uebernachtung.css";

export default function Uebernachtung() {
  return (
    <section className="DieLocation">
      <h2>Suchst du noch eine Übernachtungs&shy;möglichkeit?</h2>
      <div className="UebernachtungFakten">
        <div className="UebernachtungFaktenGroup">
          <h3>Sonderkonditionen bei Hotel Alaïa (bis 30.11.23)</h3>
          <div className="Fact">
            <h4 className="subline">Info:</h4>
            <span>
              Bitte einfach per Mail an{" "}
              <a className="underline" href="mailto:hello@alaialodge.ch">hello@alaialodge.ch</a>{" "}
              schreiben, dass es sich um die auf Weber reservierten Zimmer
              handelt (Code-Wort „Weber july wedding“).
            </span>
          </div>
          <div className="Fact">
            <h4 className="subline">Wo:</h4>
            <a className="underline"
              href="https://www.google.com/maps/place/Ala%C3%AFa+Lodge/@46.3087017,7.470013,18.64z/data=!4m9!3m8!1s0x478ee1f28e12cce5:0xbd9d32bc71a93898!5m2!4m1!1i2!8m2!3d46.3086272!4d7.4702311!16s%2Fg%2F11nnqhb002?entry=ttu"
              target="_blank"
            >
              Rte du Rawyl 10, 3963 Crans-Montana, Schweiz
            </a>
          </div>
          <div className="Fact">
            <h4 className="subline">Preise:</h4>
            <span>
              Doppelzimmer <br />
              Doppelzimmer (etwas größer mit Balkon)
            </span>
            <span>
              135 CHF/ Nacht <br />
              165 CHF/ Nacht
            </span>
          </div>
        </div>
        <div className="UebernachtungFaktenGroup">
          <h3>Camping Moubra</h3>
          <div className="Fact">
            <h4 className="subline">Info:</h4>
            <span>
              Für Wohnmobil Reisende gibt es einen Campingplatz direkt neben der
              Freitags-Location
            </span>
          </div>
          <div className="Fact">
            <h4 className="subline">Wo:</h4>
            <a className="underline"
              href="https://www.google.com/maps/place/Camping+Moubra/@46.3045749,7.479018,17.4z/data=!4m24!1m14!4m13!1m6!1m2!1s0x478ee029bd349c6f:0x9b835197cfcc72ce!2sCamping+Moubra,+Imp.+de+la+Plage+2,+3963+Crans-Montana,+Schweiz!2m2!1d7.480594!2d46.304129!1m5!1m1!1s0x478ee029bd349c6f:0x9b835197cfcc72ce!2m2!1d7.480594!2d46.304129!3m8!1s0x478ee029bd349c6f:0x9b835197cfcc72ce!5m2!4m1!1i2!8m2!3d46.304129!4d7.480594!16s%2Fg%2F1td4cg6k?entry=ttu"
              target="_blank"
            >
              Impassa de la Plage 2, 3963 Crans-Montana, Schweiz
            </a>
          </div>
          <div className="Fact">
            <h4 className="subline">Preise:</h4>
            <span>
              Stellplatz für Zelt | 2 Personen <br />
              Stellplatz Wohnwagen
            </span>
            <span>
              8 CHF/ Nacht <br />
              18 CHF/ Nacht
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
