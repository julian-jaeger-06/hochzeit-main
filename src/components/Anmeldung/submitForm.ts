"use server";
import nodemailer from "nodemailer";
import { cookies } from "next/headers";

export const handleSubmit = async (formData: FormData) => {
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
      to: "azakica@gmail.com",
      subject: "Hochzeit: Anmeldung",
      text: Object.entries(emailInfo)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n"),
    });

    cookies().set("submitted", "true");
  } catch (err) {
    console.log(err);
  }
};

export const newSubmission = async () => {
  cookies().delete("submitted");
};
