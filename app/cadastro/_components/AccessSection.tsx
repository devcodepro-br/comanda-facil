import Input from "@/app/components/Input";
import FormSection from "./FormSection";
import type { FormErrors } from "./validation";

interface AccessSectionProps {
  errors: FormErrors;
}

export default function AccessSection({ errors }: AccessSectionProps) {
  return (
    <FormSection title="1. Dados de acesso">
      <Input
        size="lg"
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Ex: contato@restaurante.com"
        error={errors.email}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          size="lg"
          label="Senha"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="••••••••••••"
          error={errors.password}
        />
        <Input
          size="lg"
          label="Confirmar Senha"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          placeholder="••••••••••••"
          error={errors.confirmPassword}
        />
      </div>
    </FormSection>
  );
}
