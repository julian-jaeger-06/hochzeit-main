"use server";
import nodemailer from "nodemailer";
import { cookies } from "next/headers";

export const handleSubmit = async (formData: FormData) => {
  const emailInfo = {
    "Zusage?": formData.get("zusage") || "Nein",
    "Anreise am Freitag?": formData.get("anreise") || "Nein",
    "E-Mail Adresse": formData.get("email") || "",
    "Name Gast 1": formData.get("gast1")  || "",
    "Essenswunsch": formData.get("essenswunsch") || "",
    "Besondere Anmerkungen": formData.get("besondereAnmerkungen") || "",
  };

  const transporter = nodemailer.createTransport({
    host: "smtps.udag.de",
    port: 465,
    auth: {
      user: "alineundlouis-wedding-0001",
      pass: "Tw5mtUKvUE*V5sS",
    },
  });

  // TODO: Error handling
  try {
    await transporter.sendMail({
      from: "info@alineundlouis.wedding",
      to: "julian.jaeger.work@gmail.com",
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
