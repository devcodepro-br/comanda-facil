import Dropdown from "@/app/components/Dropdown";
import Input from "@/app/components/Input";
import MaskedInput from "@/app/components/MaskedInput";
import FormSection from "./FormSection";
import { brazilianStates, type FormErrors } from "./validation";

interface EstablishmentSectionProps {
  errors: FormErrors;
}

export default function EstablishmentSection({
  errors,
}: EstablishmentSectionProps) {
  return (
    <FormSection title="3. Dados do estabelecimento">
      <Input
        size="lg"
        label="Nome do Estabelecimento"
        name="establishmentName"
        placeholder="Ex: Restaurante do Odair"
        error={errors.establishmentName}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <MaskedInput
          mask="phone"
          size="lg"
          label="Telefone"
          name="phone"
          placeholder="(11) 99999-9999"
          error={errors.phone}
        />
        <MaskedInput
          mask="cep"
          size="lg"
          label="CEP"
          name="zipCode"
          error={errors.zipCode}
        />
      </div>
      <Input
        size="lg"
        label="Logradouro"
        name="street"
        autoComplete="address-line1"
        placeholder="Ex: Rua das Flores"
        error={errors.street}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          size="lg"
          label="Número"
          name="number"
          inputMode="numeric"
          placeholder="123"
          error={errors.number}
        />
        <Input
          size="lg"
          label="Complemento"
          name="complement"
          placeholder="Apto, Bloco, etc."
        />
      </div>
      <Input
        size="lg"
        label="Bairro"
        name="district"
        placeholder="Ex: Centro"
        error={errors.district}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          size="lg"
          label="Cidade"
          name="city"
          autoComplete="address-level2"
          placeholder="São Paulo"
          error={errors.city}
        />
        <div className="flex flex-col gap-1.5">
          <Dropdown
            label="Estado"
            name="state"
            placeholder="Selecione"
            options={brazilianStates}
          />
          {errors.state ? (
            <p className="animate-enter text-xs leading-4 text-status-danger-text">
              {errors.state}
            </p>
          ) : null}
        </div>
      </div>
    </FormSection>
  );
}
