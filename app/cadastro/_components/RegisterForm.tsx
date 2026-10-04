"use client";

import { useState, type FormEvent } from "react";
import Button from "@/app/components/Button";
import AccessSection from "./AccessSection";
import DocumentSection from "./DocumentSection";
import EstablishmentSection from "./EstablishmentSection";
import RegisterStepper from "./RegisterStepper";
import {
  validateStep,
  type DocumentType,
  type FormErrors,
} from "./validation";

// Tempo do carregamento simulado: ainda não existe API de cadastro
const fakeRequestMs = 1200;
const lastStep = 2;

export default function RegisterForm() {
  const [step, setStep] = useState(0);
  const [documentType, setDocumentType] = useState<DocumentType>("cnpj");
  const [errors, setErrors] = useState<FormErrors>({});
  const [pending, setPending] = useState(false);
  const [notice, setNotice] = useState("");

  const isLastStep = step === lastStep;

  function handleDocumentTypeChange(next: DocumentType) {
    setDocumentType(next);
    setErrors((current) => ({ ...current, document: undefined }));
  }

  function handleBack() {
    setErrors({});
    setNotice("");
    setStep((current) => Math.max(current - 1, 0));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("");

    const nextErrors = validateStep(
      step,
      new FormData(event.currentTarget),
      documentType,
    );
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!isLastStep) {
      setStep(step + 1);
      return;
    }

    // Sem backend: simula o carregamento e avisa que nada foi enviado
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setNotice("Tela de exemplo: nenhum dado foi enviado.");
    }, fakeRequestMs);
  }

  // Todas as etapas ficam montadas; as inativas só ficam ocultas, para não perder o que foi digitado.
  // Ao reaparecer, a etapa repete a entrada suave.
  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-8">
      <RegisterStepper currentStep={step} />

      <div className={step === 0 ? "animate-enter" : "hidden"}>
        <AccessSection errors={errors} />
      </div>
      <div className={step === 1 ? "animate-enter" : "hidden"}>
        <DocumentSection
          documentType={documentType}
          errors={errors}
          onDocumentTypeChange={handleDocumentTypeChange}
        />
      </div>
      <div className={step === 2 ? "animate-enter" : "hidden"}>
        <EstablishmentSection errors={errors} />
      </div>

      <div className="flex flex-col gap-3 border-t border-border-subtle pt-8">
        <div className="flex gap-3">
          {step > 0 ? (
            <Button
              type="button"
              variant="secondary"
              size="md"
              label="Voltar"
              disabled={pending}
              onClick={handleBack}
            />
          ) : null}
          <Button
            type="submit"
            size="md"
            label={
              isLastStep
                ? pending
                  ? "Criando conta..."
                  : "Criar Minha Conta"
                : "Próximo"
            }
            disabled={pending}
            className="flex-1"
          />
        </div>
        {notice === "" ? null : (
          <p
            role="status"
            className="animate-enter text-center text-xs leading-4 text-text-secondary"
          >
            {notice}
          </p>
        )}
      </div>
    </form>
  );
}
