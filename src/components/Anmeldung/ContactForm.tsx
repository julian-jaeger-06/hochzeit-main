// import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import nodemailer from "nodemailer";
import { useState } from "react";
import "./contactForm.css";
import "./switch.css";

const ContactForm: React.FC = () => {
  const router = useRouter();
  const [formSent, setFormSent] = useState(false);


  const handleSubmit = async (formData: FormData) => {
    "use server";
   
    if (!formSent) {
  
    const emailInfo = {
      Email: formData.get("email"),
      "Name Gast 1": formData.get("gast1"),
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
      await transporter.sendMail({
        from: "julian.jaeger@janus-wa.de",
        to: "julian.jaeger.work@gmail.com",
        subject: "Hochzeit: Anmeldung",
        text: Object.entries(emailInfo)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n"),
      });
      setFormSent(true);
    } catch (err) {
      console.log(err);
    }
  }
};

   


if (formSent) {
  return
  <div>
    <p>Vielen Dank! Ihr Formular wurde gesendet.</p>
  </div>;
};


  return (


    <form className="ContactForm" action={handleSubmit}>
      <div className="GastRow">
        {/* Toggle Switch */}
        <div className="ToogleColum">
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
            <input
              className="Check"
              name="anreise"
              type="checkbox"
              value="Ja"
              />
            <label>Ich komme schon Freitags</label>
            
         
        </div>
      </div>

      <div className="eMail">
        {/* Email input */}
        <div className="FormGroup">
          <label>Email:<sup>*</sup> </label>
          <input className="InputText" name="email" type="email" required />
        </div>
      </div>

      <div className="GastRow">
        {/* Name */}
        <div className="FormGroup">
          <label>Name Gast 1<sup>*</sup></label>
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
          <label>Essenswünsche<sup>*</sup></label>
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
        <button type="submit">Absenden</button>
      </div>
    </form>
   )}


export default ContactForm;




// const ContactForm: React.FC = () => {
//   // Handle form submission
//   const handleSubmit = async (formData: FormData) => {
//     "use server";

//     const emailInfo = {
//       Email: formData.get("email"),
//       "Name Gast 1": formData.get("gast1"),
//       Essenswunsch: formData.get("essenswunsch"),
//       "Besondere Anmerkungen": formData.get("besondereAnmerkungen"),
//       "Anreise am Freitag?": formData.get("anreise") || "Nein",
//       Zusage: formData.get("zusage") || "Nein",
//     };

//     const transporter = nodemailer.createTransport({
//       host: "smtp-mail.outlook.com",
//       port: 587,
//       auth: {
//         user: "julian.jaeger@janus-wa.de",
//         pass: "Design_J06",
//       },
//     });

//     // TODO: Error handling
//     try {
//       transporter.sendMail({
//         from: "julian.jaeger@janus-wa.de",
//         to: "julian.jaeger.work@gmail.com",
//         subject: "Hochzeit: Anmeldung",
//         text: Object.entries(emailInfo)
//           .map(([key, value]) => `${key}: ${value}`)
//           .join("\n"),
//       });
//     } catch (err) {
//       console.log(err);
//     }

//     //set cookie fort this user


//     // TODO:feedback that email is sent
//      redirect("/gesendet");
//   };

//   // check url for gesendet=true if true dont show form

//   return (
//     <form className="ContactForm" action={handleSubmit}>
//       <div className="GastRow">
//         {/* Toggle Switch */}
//         <div className="ToogleColum">
//           Ja
//           <label className="Switch">
//             <input
//               type="checkbox"
//               name="zusage"
//               defaultChecked={true}
//               value="Ja"
//             />
//             <span className="Slider"></span>
//           </label>{" "}
//           Leider nicht
//         </div>

//         {/* Checkbox */}
//         <div className="Checkbox">
//             <input
//               className="Check"
//               name="anreise"
//               type="checkbox"
//               value="Ja"
//               />
//             <label>Ich komme schon Freitags</label>
            
         
//         </div>
//       </div>

//       <div className="eMail">
//         {/* Email input */}
//         <div className="FormGroup">
//           <label>Email:<sup>*</sup> </label>
//           <input className="InputText" name="email" type="email" required />
//         </div>
//       </div>

//       <div className="GastRow">
//         {/* Name */}
//         <div className="FormGroup">
//           <label>Name Gast 1<sup>*</sup></label>
//           <input
//             className="InputText"
//             type="Text"
//             name="gast1"
//             required
//             placeholder="Vorname Nachname"
//           />
//         </div>

//         {/* Dropdown menu */}
//         <div className="FormGroup">
//           <label>Essenswünsche<sup>*</sup></label>
//           <select className="Dropdown" name="essenswunsch" required>
//             <option value="Kein Wunschh">Kein Wunsch</option>
//             <option value="Vegetarisch">Vegetarisch</option>
//             <option value="Fleisch">Fleisch</option>
//             <option value="Fisch">Fisch</option>
//           </select>
//         </div>

//         {/* Text input */}
//         <div className="FormGroup">
//           <label>Besondere Anmerkungen</label>
//           <textarea
//             className="InputTextArea"
//             placeholder="z.B.: Unverträglichkeiten, Vegan, etc..."
//             name="besondereAnmerkungen"
//           />
//         </div>
//       </div>

//       {/* Submit button */}
//       <div>
//         <button type="submit">Absenden</button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;