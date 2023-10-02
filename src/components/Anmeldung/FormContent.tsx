"use client";

import { useState } from "react";

export default function FormContent() {
  const [zusage, setZusage] = useState(true);

  return (
    <div className="ContactForm">
      {/* Toggle Switch */}
      <div className="GastRow">
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
        {zusage &&
          <div className="Checkbox">
            <input
              className="Check"
              name="anreise"
              type="checkbox"
              value="Ja"
            />
            <label>Ich komme schon Freitags</label>
          </div>
        }
      </div>

      {zusage ? (
        <>

          <div className="eMail">
            {/* Email input */}
            <div className="FormGroup">
              <label>
                Email:<sup className="Required">*</sup>{" "}
              </label>
              <input className="InputText" name="email" type="email" required />
            </div>
          </div>

          <div className="GastRow">
            {/* Name */}
            <div className="FormGroup">
              <label className="font-medium">
                Name Gast 1<sup className="Required">*</sup>
              </label>
              <input
                className="InputText "
                type="Text"
                name="gast1"
                required
                placeholder="Vorname Nachname"
              />
            </div>

            {/* Dropdown menu */}
            <div className="FormGroup">
              <label>
                Essenswünsche<sup className="Required">*</sup>
              </label>
              <select className="Dropdown" name="essenswunsch" required>
                <option className="Dropdown" value="Kein Wunschh">Kein Wunsch</option>
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
          <div className="GastRow">
            {/* Name */}
            <div className="FormGroup">
              <label className="font-medium">
                Name Gast 2
              </label>
              <input
                className="InputText"
                type="Text"
                name="gast1"
                placeholder="Vorname Nachname"
              />
            </div>

            {/* Dropdown menu */}
            <div className="FormGroup">
              <label>
                Essenswünsche
              </label>
              <select className="Dropdown" name="essenswunsch">
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
          <div className="GastRow">
            {/* Name */}
            <div className="FormGroup">
              <label className="font-medium">
                Name Gast 3
              </label>
              <input
                className="InputText"
                type="Text"
                name="gast1"
                placeholder="Vorname Nachname"
              />
            </div>

            {/* Dropdown menu */}
            <div className="FormGroup">
              <label>
                Essenswünsche
              </label>
              <select className="Dropdown" name="essenswunsch">
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
          <div className="GastRow">
            {/* Name */}
            <div className="FormGroup">
              <label className="font-medium">
                Name Gast 4
              </label>
              <input
                className="InputText"
                type="Text"
                name="gast1"
                placeholder="Vorname Nachname"
              />
            </div>

            {/* Dropdown menu */}
            <div className="FormGroup">
              <label>
                Essenswünsche
              </label>
              <select className="Dropdown" name="essenswunsch">
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

        </>
      ) : (
        <div>Absagen?</div>
      )}
      {/* Submit button */}
      <div>
        <button className="bg-[#899C89]" type="submit">Absenden</button>
      </div>
    </div>
  );
}
