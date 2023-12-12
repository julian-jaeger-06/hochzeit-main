"use server";
import nodemailer from "nodemailer";
import { cookies } from "next/headers";

export const handleSubmit = async (formData: FormData) => {
  const emailInfo = {
    "Zusage?": formData.get("zusage") || "Nein",
    "Anreise am Freitag?": formData.get("anreise") || "Nein",
    "E-Mail Adresse": formData.get("email") || "",

    "Name Gast 1": formData.get("gast1")  || "",
    "Essenswunsch Gast 1": formData.get("essenswunsch1") || "",
    "Besondere Anmerkungen Gast 1": formData.get("besondereAnmerkungen1") || "",

    "Name Gast 2": formData.get("gast2")  || "",
    "Essenswunsch Gast 2": formData.get("essenswunsch2") || "",
    "Besondere Anmerkungen Gast 2": formData.get("besondereAnmerkungen2") || "",

    "Name Gast 3": formData.get("gast3")  || "",
    "Essenswunsch Gast 3": formData.get("essenswunsch3") || "",
    "Besondere Anmerkungen Gast 3": formData.get("besondereAnmerkungen3") || "",

    "Name Gast 4": formData.get("gast4")  || "",
    "Essenswunsch Gast 4": formData.get("essenswunsch4") || "",
    "Besondere Anmerkungen Gast 4": formData.get("besondereAnmerkungen4") || "",
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
      to: "louis.weber@hw-foods.de",
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
