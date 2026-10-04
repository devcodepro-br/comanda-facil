import FilterTab from "@/app/components/FilterTab";
import MaskedInput from "@/app/components/MaskedInput";
import FormSection from "./FormSection";
import type { DocumentType, FormErrors } from "./validation";

interface DocumentSectionProps {
  documentType: DocumentType;
  errors: FormErrors;
  onDocumentTypeChange: (type: DocumentType) => void;
}

const documentTypes: { value: DocumentType; label: string }[] = [
  { value: "cnpj", label: "CNPJ (Pessoa Jurídica)" },
  { value: "cpf", label: "CPF (Pessoa Física)" },
];

export default function DocumentSection({
  documentType,
  errors,
  onDocumentTypeChange,
}: DocumentSectionProps) {
  return (
    <FormSection title="2. Documento de identificação">
      <div
        role="group"
        aria-labelledby="document-type-label"
        className="flex flex-col gap-2"
      >
        <span
          id="document-type-label"
          className="text-sm font-semibold text-text-primary"
        >
          Tipo de Documento
        </span>
        <div className="flex flex-wrap gap-2">
          {documentTypes.map((type) => (
            <FilterTab
              key={type.value}
              size="lg"
              label={type.label}
              active={documentType === type.value}
              onClick={() => onDocumentTypeChange(type.value)}
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
          error={errors.document}
        />
      </div>
    </FormSection>
  );
}
