"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export async function authenticate(prevState: any, formData: FormData) {
  const password = formData.get("password")?.toString();

  if (password === "AlineLouis2024") {
    cookies().set("auth", password, { secure: true });
    redirect("/");
  } else {
    return { message: "Passwort falsch" };
  }
}
