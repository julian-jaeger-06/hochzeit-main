import { cookies } from "next/headers";
import FormContent from "./FormContent";
import "./contactForm.css";
import { handleSubmit, newSubmission } from "./submitForm";
import "./switch.css";

const ContactForm: React.FC = () => {
  const submitted = cookies().get("submitted")?.value;

  if (submitted) {
    return (
      <form action={newSubmission} className="AnmeldungSection">
        {/* TODO: style this */}
        <h3>Danke für deine Anmeldung</h3>
        <p className="subline">Wir freuen uns auf dich!</p>
        <button className="bg-[#899C89]" type="submit">Neue Anmeldung</button>
      </form>
    );
  }

  return (
    <form className="ContactForm" action={handleSubmit}>
      <FormContent />
    </form>
  );
};

export default ContactForm;