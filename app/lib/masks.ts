// Máscaras de campos no formato brasileiro. Funções puras, sem dependências.

export type MaskType = "phone" | "cpf" | "cnpj" | "cep" | "date" | "currency";

export interface MaskConfig {
  label: string;
  placeholder: string;
  inputMode: "tel" | "numeric";
  autoComplete: string;
  // Quantidade de dígitos que completa o campo
  maxDigits: number;
  // Dígitos -> texto formatado exibido para a pessoa
  format: (digits: string) => string;
  // Dígitos -> valor sem formatação guardado para o sistema
  toRaw: (digits: string) => string;
  // Valor sem formatação -> dígitos (para valores iniciais)
  fromRaw: (raw: string) => string;
  // Dígitos -> mensagem de erro ("" quando o valor é válido)
  validate: (digits: string) => string;
}

export function onlyDigits(value: string): string {
  return value.replace(/\D/g, "");
}

// Aplica um padrão como "###.###.###-##". Os separadores só aparecem
// quando ainda há dígitos depois deles, para o apagar funcionar bem.
function applyPattern(digits: string, pattern: string): string {
  let output = "";
  let index = 0;

  for (const character of pattern) {
    if (index >= digits.length) break;
    if (character === "#") {
      output += digits[index];
      index += 1;
    } else {
      output += character;
    }
  }

  return output;
}

function allDigitsEqual(digits: string): boolean {
  return /^(\d)\1+$/.test(digits);
}

// ---------- Telefone ----------

function formatPhone(value: string): string {
  const digits = onlyDigits(value).slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;

  const areaCode = digits.slice(0, 2);
  const rest = digits.slice(2);
  // Celular (11 dígitos) separa 5-4; fixo (10 dígitos) separa 4-4
  const splitAt = digits.length > 10 ? 5 : 4;

  if (rest.length <= splitAt) return `(${areaCode}) ${rest}`;
  return `(${areaCode}) ${rest.slice(0, splitAt)}-${rest.slice(splitAt)}`;
}

function validatePhone(digits: string): string {
  if (digits.length < 10) return "Telefone incompleto";
  const areaCode = Number(digits.slice(0, 2));
  if (areaCode < 11) return "Telefone inválido";
  if (digits.length === 11 && digits[2] !== "9") return "Telefone inválido";
  return "";
}

// ---------- CPF e CNPJ ----------

function checkDigit(digits: string, weights: number[]): number {
  const sum = weights.reduce(
    (total, weight, index) => total + Number(digits[index]) * weight,
    0,
  );
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

function validateCpf(digits: string): string {
  if (digits.length < 11) return "CPF incompleto";
  if (allDigitsEqual(digits)) return "CPF inválido";

  const first = checkDigit(digits, [10, 9, 8, 7, 6, 5, 4, 3, 2]);
  const second = checkDigit(digits, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);
  const isValid =
    first === Number(digits[9]) && second === Number(digits[10]);

  return isValid ? "" : "CPF inválido";
}

function validateCnpj(digits: string): string {
  if (digits.length < 14) return "CNPJ incompleto";
  if (allDigitsEqual(digits)) return "CNPJ inválido";

  const first = checkDigit(digits, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  const second = checkDigit(digits, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  const isValid =
    first === Number(digits[12]) && second === Number(digits[13]);

  return isValid ? "" : "CNPJ inválido";
}

// ---------- CEP ----------

function validateCep(digits: string): string {
  return digits.length < 8 ? "CEP incompleto" : "";
}

// ---------- Data (dd/mm/aaaa) ----------

function isRealDate(day: number, month: number, year: number): boolean {
  if (year < 1900 || month < 1 || month > 12 || day < 1) return false;
  // Dia 0 do mês seguinte é o último dia do mês atual
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
  return day <= daysInMonth;
}

function validateDate(digits: string): string {
  if (digits.length < 8) return "Data incompleta";
  const day = Number(digits.slice(0, 2));
  const month = Number(digits.slice(2, 4));
  const year = Number(digits.slice(4, 8));
  return isRealDate(day, month, year) ? "" : "Data inválida";
}

// O sistema guarda a data em ISO (aaaa-mm-dd), ou "" se estiver incompleta/inválida
function dateToRaw(digits: string): string {
  if (validateDate(digits) !== "") return "";
  return `${digits.slice(4, 8)}-${digits.slice(2, 4)}-${digits.slice(0, 2)}`;
}

function dateFromRaw(raw: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(raw);
  return match ? `${match[3]}${match[2]}${match[1]}` : "";
}

// ---------- Valor em reais ----------

// Os dígitos digitados são centavos: "123456" vira R$ 1.234,56
function centsDigits(value: string): string {
  return onlyDigits(value).replace(/^0+/, "").slice(0, 12);
}

function formatCurrency(value: string): string {
  const cents = centsDigits(value);
  if (cents === "") return "";

  const padded = cents.padStart(3, "0");
  const integerPart = padded
    .slice(0, -2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `R$ ${integerPart},${padded.slice(-2)}`;
}

// O sistema guarda o valor como número decimal em texto: "1234.56"
function currencyToRaw(digits: string): string {
  const cents = centsDigits(digits);
  if (cents === "") return "";

  const padded = cents.padStart(3, "0");
  return `${padded.slice(0, -2)}.${padded.slice(-2)}`;
}

function currencyFromRaw(raw: string): string {
  const value = Number.parseFloat(raw);
  return Number.isFinite(value) ? String(Math.round(value * 100)) : "";
}

export const maskConfigs: Record<MaskType, MaskConfig> = {
  phone: {
    label: "Telefone",
    placeholder: "(11) 91234-5678",
    inputMode: "tel",
    autoComplete: "tel-national",
    maxDigits: 11,
    format: formatPhone,
    toRaw: onlyDigits,
    fromRaw: onlyDigits,
    validate: validatePhone,
  },
  cpf: {
    label: "CPF",
    placeholder: "000.000.000-00",
    inputMode: "numeric",
    autoComplete: "off",
    maxDigits: 11,
    format: (value) => applyPattern(onlyDigits(value).slice(0, 11), "###.###.###-##"),
    toRaw: onlyDigits,
    fromRaw: onlyDigits,
    validate: validateCpf,
  },
  cnpj: {
    label: "CNPJ",
    placeholder: "00.000.000/0000-00",
    inputMode: "numeric",
    autoComplete: "off",
    maxDigits: 14,
    format: (value) =>
      applyPattern(onlyDigits(value).slice(0, 14), "##.###.###/####-##"),
    toRaw: onlyDigits,
    fromRaw: onlyDigits,
    validate: validateCnpj,
  },
  cep: {
    label: "CEP",
    placeholder: "00000-000",
    inputMode: "numeric",
    autoComplete: "postal-code",
    maxDigits: 8,
    format: (value) => applyPattern(onlyDigits(value).slice(0, 8), "#####-###"),
    toRaw: onlyDigits,
    fromRaw: onlyDigits,
    validate: validateCep,
  },
  date: {
    label: "Data",
    placeholder: "dd/mm/aaaa",
    inputMode: "numeric",
    autoComplete: "off",
    maxDigits: 8,
    format: (value) => applyPattern(onlyDigits(value).slice(0, 8), "##/##/####"),
    toRaw: dateToRaw,
    fromRaw: dateFromRaw,
    validate: validateDate,
  },
  currency: {
    label: "Valor",
    placeholder: "R$ 0,00",
    inputMode: "numeric",
    autoComplete: "off",
    // Sem tamanho fixo: o valor nunca é "incompleto"
    maxDigits: Number.POSITIVE_INFINITY,
    format: formatCurrency,
    toRaw: currencyToRaw,
    fromRaw: currencyFromRaw,
    validate: () => "",
  },
};
