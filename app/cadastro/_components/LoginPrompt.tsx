import Link from "next/link";

interface LoginPromptProps {
  question?: string;
  linkLabel?: string;
  href?: string;
}

export default function LoginPrompt({
  question = "Já tem uma conta?",
  linkLabel = "Fazer Login",
  href = "/login",
}: LoginPromptProps) {
  return (
    <p className="-mt-4 text-center text-sm text-text-secondary">
      {question}{" "}
      <Link
        href={href}
        className="cursor-pointer font-bold text-text-brand transition-colors duration-150 hover:text-brand-primary-active hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
      >
        {linkLabel}
      </Link>
    </p>
  );
}
