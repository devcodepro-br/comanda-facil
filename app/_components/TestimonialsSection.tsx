import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "“O ComandaFácil mudou totalmente nossa dinâmica. Os garçons realizam os pedidos do salão e na hora o pessoal da cozinha começa a preparar. Economizamos tempo e agradamos o cliente.”",
    name: "Lucas Silva",
    role: "Dono da Bella Pizza",
  },
  {
    quote:
      "“Excelente plataforma de gestão. O painel financeiro do plano premium reduziu nossa margem de erros a zero. O suporte deles pelo WhatsApp é incrivelmente ágil e assertivo.”",
    name: "Juliana Santos",
    role: "Gerente da Forno d'Oro",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="flex flex-col gap-12 border-y border-border-subtle bg-surface px-4 py-12 sm:px-8 lg:p-20"
    >
      <Reveal>
        <SectionHeader
          badge="HISTÓRIAS DE SUCESSO"
          title="Aprovado por quem entende de sabor e negócio"
        />
      </Reveal>
      <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(--spacing(80),1fr))] gap-8">
        {testimonials.map(({ quote, name, role }) => (
          <figure
            key={name}
            className="flex flex-col gap-4 rounded-lg bg-canvas p-6 sm:p-8"
          >
            <blockquote className="text-sm leading-5.5 text-text-secondary">
              {quote}
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="size-10 shrink-0 rounded-full bg-brand-primary"
              />
              <span className="flex flex-col">
                <span className="text-sm font-bold text-text-primary">
                  {name}
                </span>
                <span className="text-xs text-text-tertiary">{role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </Reveal>
    </section>
  );
}
