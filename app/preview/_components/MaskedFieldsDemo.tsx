"use client";

import { useState } from "react";
import MaskedInput from "@/app/components/MaskedInput";
import type { MaskType } from "@/app/lib/masks";

interface DemoField {
  mask: MaskType;
  label: string;
  caption: string;
  defaultValue?: string;
  required?: boolean;
}

const fields: DemoField[] = [
  { mask: "phone", label: "Telefone", caption: "telefone" },
  { mask: "cpf", label: "CPF", caption: "cpf (válido)", defaultValue: "52998224725" },
  { mask: "cpf", label: "CPF", caption: "cpf (inválido)", defaultValue: "11111111111" },
  { mask: "cnpj", label: "CNPJ", caption: "cnpj (válido)", defaultValue: "11222333000181" },
  { mask: "cep", label: "CEP", caption: "cep" },
  { mask: "date", label: "Data", caption: "data (dd/mm/aaaa)" },
  { mask: "currency", label: "Valor", caption: "valor em reais", defaultValue: "1234.56" },
  { mask: "phone", label: "Telefone", caption: "obrigatório", required: true },
];

function DemoItem({ field }: { field: DemoField }) {
  const [rawValue, setRawValue] = useState(field.defaultValue ?? "");

  return (
    <div className="flex w-70 flex-col gap-2">
      <MaskedInput
        mask={field.mask}
        label={field.label}
        defaultValue={field.defaultValue}
        required={field.required}
        onValueChange={setRawValue}
      />
      <p className="text-xs text-text-tertiary">
        mask=&quot;{field.caption}&quot;
      </p>
      <p className="text-xs text-text-secondary">
        Valor guardado: <code>{rawValue === "" ? "(vazio)" : rawValue}</code>
      </p>
    </div>
  );
}

export default function MaskedFieldsDemo() {
  return (
    <>
      {fields.map((field) => (
        <DemoItem key={`${field.mask}-${field.caption}`} field={field} />
      ))}
    </>
  );
}
