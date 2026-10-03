import Link from "next/link";

interface SignupPromptProps {
  question?: string;
  linkLabel?: string;
  href?: string;
}

export default function SignupPrompt({
  question = "Não tem uma conta?",
  linkLabel = "Criar Conta",
  href = "/cadastro",
}: SignupPromptProps) {
  return (
    <p className="text-center text-xs leading-4 text-text-secondary">
      {question}{" "}
      <Link
        href={href}
        className="cursor-pointer font-semibold text-text-brand transition-colors duration-150 hover:text-brand-primary-active hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
      >
        {linkLabel}
      </Link>
    </p>
  );
}
