import { maskConfigs, onlyDigits, type MaskType } from "@/app/lib/masks";

export type DocumentType = "cpf" | "cnpj";
export type FormErrors = Partial<Record<string, string>>;

export const brazilianStates = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS",
  "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC",
  "SP", "SE", "TO",
];

const minPasswordLength = 8;
const requiredMessage = "Campo obrigatório";

// Campos de texto simples que só precisam estar preenchidos
const requiredFields = [
  "establishmentName",
  "street",
  "number",
  "district",
  "city",
  "state",
];

type FieldValue = (name: string) => string;

function validateAccess(data: FormData, value: FieldValue): FormErrors {
  const errors: FormErrors = {};

  const email = value("email");
  if (email === "") errors.email = requiredMessage;
  else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Email inválido";

  const password = String(data.get("password") ?? "");
  if (password === "") errors.password = requiredMessage;
  else if (password.length < minPasswordLength)
    errors.password = `Use pelo menos ${minPasswordLength} caracteres`;

  const confirmation = String(data.get("confirmPassword") ?? "");
  if (confirmation === "") errors.confirmPassword = requiredMessage;
  else if (confirmation !== password)
    errors.confirmPassword = "As senhas não conferem";

  return errors;
}

function validateMasked(
  fields: readonly { name: string; mask: MaskType }[],
  value: FieldValue,
): FormErrors {
  const errors: FormErrors = {};

  for (const { name, mask } of fields) {
    const digits = onlyDigits(value(name));
    const message =
      digits === "" ? requiredMessage : maskConfigs[mask].validate(digits);
    if (message !== "") errors[name] = message;
  }

  return errors;
}

function validateDocument(documentType: DocumentType, value: FieldValue) {
  return validateMasked([{ name: "document", mask: documentType }], value);
}

function validateEstablishment(value: FieldValue): FormErrors {
  const errors = validateMasked(
    [
      { name: "phone", mask: "phone" },
      { name: "zipCode", mask: "cep" },
    ],
    value,
  );

  for (const name of requiredFields) {
    if (value(name) === "") errors[name] = requiredMessage;
  }

  return errors;
}

// Valida só os campos da etapa informada (0 = acesso, 1 = documento, 2 = estabelecimento)
export function validateStep(
  step: number,
  data: FormData,
  documentType: DocumentType,
): FormErrors {
  const value: FieldValue = (name) => String(data.get(name) ?? "").trim();

  const validators: Record<number, () => FormErrors> = {
    0: () => validateAccess(data, value),
    1: () => validateDocument(documentType, value),
    2: () => validateEstablishment(value),
  };

  return validators[step]?.() ?? {};
}
