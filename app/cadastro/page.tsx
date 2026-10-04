import type { Metadata } from "next";
import LoginPrompt from "./_components/LoginPrompt";
import RegisterForm from "./_components/RegisterForm";
import RegisterHeader from "./_components/RegisterHeader";

export const metadata: Metadata = {
  title: "Criar conta | Comanda Fácil",
};

export default function RegisterPage() {
  return (
    <main className="flex flex-1 items-center justify-center p-4 sm:p-8 lg:py-16">
      <div className="flex w-full max-w-135 animate-enter flex-col gap-8 rounded-lg bg-surface p-6 shadow-md sm:p-10">
        <RegisterHeader />
        <RegisterForm />
        <LoginPrompt />
      </div>
    </main>
  );
}
