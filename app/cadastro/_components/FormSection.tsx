import type { ReactNode } from "react";

interface FormSectionProps {
  title: string;
  children: ReactNode;
}

export default function FormSection({ title, children }: FormSectionProps) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-bold text-text-secondary uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}
