import type { Metadata } from "next";
import LoginForm from "./_components/LoginForm";
import LoginHeader from "./_components/LoginHeader";
import SignupPrompt from "./_components/SignupPrompt";

export const metadata: Metadata = {
  title: "Entrar | Comanda Fácil",
};

export default function LoginPage() {
  return (
    <main className="flex flex-1 items-center justify-center p-4 sm:p-8">
      <div className="flex w-full max-w-105 animate-enter flex-col gap-8 rounded-lg bg-surface p-6 shadow-md sm:p-10">
        <LoginHeader />
        <LoginForm />
        <SignupPrompt />
      </div>
    </main>
  );
}
