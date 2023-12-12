"use client";
import { useFormState } from "react-dom";
import { authenticate } from "./actions";
import Image from "next/image";
import bg from "@/assets/background_paper.jpeg";

const initialState = {
  message: "",
};

export default function Page() {
  const [state, formAction] = useFormState(authenticate, initialState);

  return (
    <>
      <h1>Aline & Louis</h1>
      <Image
        alt="Mountains"
        src={bg}
        placeholder="blur"
        quality={100}
        className="fixed inset-0 -z-10 w-screen h-screen object-cover"
      />
      <div className="grid place-content-center mb-12">
        <div className="text-center font-bold text-3xl mb-8">Anmeldung</div>
        <form action={formAction} className="flex flex-col">
          <label className="mb-12 relative">
            <div>Passwort</div>
            <input name="password" type="password" className="InputText" />
            <div className="text-sm text-red-400 absolute -bottom-6">
              {state?.message}
            </div>
          </label>
          <button className="border p-2 bg-[rgba(137,157,138,1)]">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
