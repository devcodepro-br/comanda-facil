"use client";

import { useState, type FormEvent } from "react";
import Button from "@/app/components/Button";
import FilterTab from "@/app/components/FilterTab";
import Input from "@/app/components/Input";
import MaskedInput from "@/app/components/MaskedInput";
import { maskConfigs } from "@/app/lib/masks";

type DocumentType = "cpf" | "cnpj";

const documentTypes: { value: DocumentType; label: string }[] = [
  { value: "cpf", label: "CPF" },
  { value: "cnpj", label: "CNPJ" },
];

// Tempo do carregamento simulado: ainda não existe API de login
const fakeRequestMs = 1200;

export default function LoginForm() {
  const [documentType, setDocumentType] = useState<DocumentType>("cpf");
  const [documentNumber, setDocumentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [notice, setNotice] = useState("");

  const documentError = submitted ? getDocumentError() : "";
  const passwordError = submitted && password === "" ? "Informe a senha" : "";

  function getDocumentError(): string {
    if (documentNumber === "") return "Informe o número do documento";
    return maskConfigs[documentType].validate(documentNumber);
  }

  function handleDocumentTypeChange(next: DocumentType) {
    setDocumentType(next);
    setDocumentNumber("");
    setSubmitted(false);
    setNotice("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setNotice("");

    if (getDocumentError() !== "" || password === "") return;

    // Sem backend: simula o carregamento e avisa que nada foi enviado
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setNotice("Tela de exemplo: nenhum dado foi enviado.");
    }, fakeRequestMs);
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div role="group" aria-labelledby="document-type-label" className="flex flex-col gap-1.5">
        <span
          id="document-type-label"
          className="text-sm font-semibold text-text-primary"
        >
          Tipo de Documento
        </span>
        <div className="flex gap-3 sm:gap-4">
          {documentTypes.map((type) => (
            <FilterTab
              key={type.value}
              size="lg"
              label={type.label}
              active={documentType === type.value}
              onClick={() => handleDocumentTypeChange(type.value)}
              className="flex-1"
            />
          ))}
        </div>
      </div>

      {/* Trocar o tipo recria o campo e repete a entrada suave */}
      <div key={documentType} className="animate-enter">
        <MaskedInput
          mask={documentType}
          size="lg"
          label="Número do Documento"
          name="document"
          autoComplete="username"
          error={documentError}
          onValueChange={setDocumentNumber}
        />
      </div>

      <Input
        size="lg"
        label="Senha"
        name="password"
        type="password"
        autoComplete="current-password"
        placeholder="••••••••••"
        value={password}
        error={passwordError}
        onChange={(event) => setPassword(event.target.value)}
      />

      <div className="flex flex-col gap-3 pt-3">
        <Button
          type="submit"
          size="lg"
          label={pending ? "Acessando..." : "Acessar"}
          disabled={pending}
          className="w-full"
        />
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
