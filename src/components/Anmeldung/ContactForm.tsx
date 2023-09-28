import { redirect } from "next/navigation";
import "./contactForm.css";
import "./switch.css";

import nodemailer from "nodemailer";

const ContactForm: React.FC = () => {
  // Handle form submission
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const emailInfo = {
      Email: formData.get("email"),
      "Gast Name": formData.get("gast"),
      Essenswunsch: formData.get("essenswunsch"),
      "Besondere Anmerkungen": formData.get("besondereAnmerkungen"),
      "Anreise am Freitag?": formData.get("anreise") || "Nein",
      Zusage: formData.get("zusage") || "Nein",
    };

    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      auth: {
        user: "julian.jaeger@janus-wa.de",
        pass: "Design_J06",
      },
    });

    // TODO: Error handling
    try {
      transporter.sendMail({
        from: "julian.jaeger@janus-wa.de",
        to: "azakica@gmail.com",
        subject: "Hochzeit: Anmeldung",
        text: Object.entries(emailInfo)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n"),
      });
    } catch (err) {
      console.log(err);
    }

    //set cookie fort this user
    

    // TODO:feedback that email is sent
    redirect("/gesendet");
  };

  // check url for gesendet=true if true dont show form

  return (
    <form className="ContactForm" action={handleSubmit}>
      <div>
        {/* Toggle Switch */}
        <div>
          Ja
          <label className="Switch">
            <input
              type="checkbox"
              name="zusage"
              defaultChecked={true}
              value="Ja"
            />
            <span className="Slider"></span>
          </label>{" "}
          Leider nicht
        </div>

        {/* Checkbox */}
        <div className="Checkbox">
          <label>
            <input
              className="Check"
              name="anreise"
              type="checkbox"
              value="Ja"
            />
            Ich komme schon Freitags
          </label>
        </div>
      </div>

      <div className="eMail">
        {/* Email input */}
        <div className="FormGroup">
          <label>Email: </label>
          <input className="InputText" name="email" type="email" />
        </div>
      </div>

      <div className="GastRow">
        {/* Name */}
        <div className="FormGroup">
          <label>Name Gast 1</label>
          <input
            className="InputText"
            type="Text"
            name="gast"
            placeholder="Vorname Nachname"
          />
        </div>

        {/* Dropdown menu */}
        <div className="FormGroup">
          <label>Essenswünsche</label>
          <select className="Dropdown" name="essenswunsch">
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
        <button type="submit">Absenden</button>
      </div>
    </form>
  );
};

export default ContactForm;
