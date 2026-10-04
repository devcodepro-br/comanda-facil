interface RegisterStepperProps {
  steps?: string[];
  // Índice da etapa atual (0 = primeira)
  currentStep?: number;
}

const defaultSteps = ["Acesso", "Documento", "Restaurante"];

const badgeStates: Record<"reached" | "upcoming", string> = {
  reached: "bg-brand-primary text-brand-on-primary",
  upcoming: "border border-border-default bg-input text-text-secondary",
};

const labelStates: Record<"reached" | "upcoming", string> = {
  reached: "text-text-primary",
  upcoming: "text-text-secondary",
};

export default function RegisterStepper({
  steps = defaultSteps,
  currentStep = 0,
}: RegisterStepperProps) {
  return (
    <ol className="flex items-center justify-between gap-3 pb-2">
      {steps.map((step, index) => {
        const state = index <= currentStep ? "reached" : "upcoming";

        return (
          <li
            key={step}
            aria-current={index === currentStep ? "step" : undefined}
            className={`flex items-center gap-2 ${index < steps.length - 1 ? "flex-1" : "flex-none"}`}
          >
            <span
              aria-hidden="true"
              className={`flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors duration-150 ${badgeStates[state]}`}
            >
              {index + 1}
            </span>
            {/* No celular só o número aparece, para caber os três passos */}
            <span
              className={`sr-only text-sm font-semibold transition-colors duration-150 sm:not-sr-only ${labelStates[state]}`}
            >
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span
                aria-hidden="true"
                className={`h-px min-w-4 flex-1 transition-colors duration-150 ${index < currentStep ? "bg-brand-primary" : "bg-border-default"}`}
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
