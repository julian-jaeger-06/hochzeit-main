"use client";

import { useState } from "react";

export default function FormContent() {
  const [zusage, setZusage] = useState(true);

  return (
    <div className="flex flex-col">
      {/* Toggle Switch */}
      <div className="ToogleColum">
        Ja
        <label className="Switch">
          <input
            type="checkbox"
            name="zusage"
            checked={zusage}
            onChange={() => setZusage(!zusage)}
            value="Ja"
          />
          <span className="Slider"></span>
        </label>{" "}
        Leider nicht
      </div>

      {zusage ? (
        <>
          <div className="Checkbox">
            <input
              className="Check"
              name="anreise"
              type="checkbox"
              value="Ja"
            />
            <label>Ich komme schon Freitags</label>
          </div>

          <div className="eMail">
            {/* Email input */}
            <div className="FormGroup">
              <label>
                Email:<sup>*</sup>{" "}
              </label>
              <input className="InputText" name="email" type="email" required />
            </div>
          </div>

          <div className="GastRow">
            {/* Name */}
            <div className="FormGroup">
              <label>
                Name Gast 1<sup>*</sup>
              </label>
              <input
                className="InputText"
                type="Text"
                name="gast1"
                required
                placeholder="Vorname Nachname"
              />
            </div>

            {/* Dropdown menu */}
            <div className="FormGroup">
              <label>
                Essenswünsche<sup>*</sup>
              </label>
              <select className="Dropdown" name="essenswunsch" required>
                <option value="Kein Wunschh">Kein Wunsch</option>
                <option value="Vegetarisch">Vegetarisch</option>
                <option value="Fleisch">Fleisch</option>
                <option value="Fisch">Fisch</option>
              </select>
            </div>

            {/* Text input */}
            <div className="FormGroup">
              <label>Besondere Anmerkungen</label>
              <textarea
                className="InputTextArea"
                placeholder="z.B.: Unverträglichkeiten, Vegan, etc..."
                name="besondereAnmerkungen"
              />
            </div>
          </div>

          {/* Submit button */}
          <div>
            <button className="bg-[#899C89]" type="submit">Absenden</button>
          </div>
        </>
      ) : (
        <div>keine zusage</div>
      )}
    </div>
  );
}
