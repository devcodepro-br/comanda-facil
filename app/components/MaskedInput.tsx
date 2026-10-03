"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type ChangeEvent,
  type ComponentProps,
  type FocusEvent,
} from "react";
import { maskConfigs, onlyDigits, type MaskType } from "@/app/lib/masks";
import Input from "./Input";

interface MaskedInputInfo {
  formatted: string;
  valid: boolean;
}

interface MaskedInputProps
  extends Omit<
    ComponentProps<typeof Input>,
    "value" | "defaultValue" | "onChange" | "type" | "name"
  > {
  mask?: MaskType;
  // Valor inicial sem formatação (ex.: "11912345678" ou, na data, "2024-12-25")
  defaultValue?: string;
  // Se informado, um campo oculto envia o valor sem formatação no formulário
  name?: string;
  required?: boolean;
  onValueChange?: (rawValue: string, info: MaskedInputInfo) => void;
}

export default function MaskedInput({
  mask = "phone",
  defaultValue = "",
  name,
  required = false,
  label,
  placeholder,
  error = "",
  onValueChange,
  onBlur,
  ...rest
}: MaskedInputProps) {
  const config = maskConfigs[mask];
  const inputRef = useRef<HTMLInputElement>(null);
  // Quantos dígitos ficam antes do cursor depois de formatar (null = não mexer)
  const caretDigits = useRef<number | null>(null);

  const [formatted, setFormatted] = useState(() =>
    config.format(config.fromRaw(defaultValue)),
  );
  const [touched, setTouched] = useState(false);

  const digits = onlyDigits(formatted);
  const rawValue = config.toRaw(digits);
  const validationMessage = getValidationMessage();
  const isComplete = digits.length >= config.maxDigits;
  const visibleError = error || (touched || isComplete ? validationMessage : "");

  function getValidationMessage(): string {
    if (digits === "") return required ? "Campo obrigatório" : "";
    return config.validate(digits);
  }

  // Mantém o cursor no mesmo dígito depois que o texto é reformatado
  useLayoutEffect(() => {
    const element = inputRef.current;
    const target = caretDigits.current;
    if (!element || target === null) return;

    let position = 0;
    let seen = 0;
    while (position < formatted.length && seen < target) {
      if (/\d/.test(formatted[position])) seen += 1;
      position += 1;
    }

    element.setSelectionRange(position, position);
    caretDigits.current = null;
  }, [formatted]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target;
    const caret = input.selectionStart ?? input.value.length;
    const next = config.format(onlyDigits(input.value));

    // No valor em reais o cursor fica sempre no fim
    caretDigits.current =
      mask === "currency" ? null : onlyDigits(input.value.slice(0, caret)).length;

    const nextDigits = onlyDigits(next);
    setFormatted(next);
    onValueChange?.(config.toRaw(nextDigits), {
      formatted: next,
      valid: nextDigits === "" ? !required : config.validate(nextDigits) === "",
    });
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    setTouched(true);
    onBlur?.(event);
  }

  return (
    <>
      <Input
        ref={inputRef}
        label={label ?? config.label}
        placeholder={placeholder ?? config.placeholder}
        inputMode={config.inputMode}
        autoComplete={config.autoComplete}
        aria-required={required}
        value={formatted}
        error={visibleError}
        onChange={handleChange}
        onBlur={handleBlur}
        {...rest}
      />
      {name ? <input type="hidden" name={name} value={rawValue} /> : null}
    </>
  );
}
