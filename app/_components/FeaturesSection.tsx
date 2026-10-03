import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Gestão de Pedidos",
    description:
      "Visualize e organize a fila de preparo por tempo de espera ou prioridade. Evite atrasos e mantenha a equipe da cozinha em perfeita sincronia.",
  },
  {
    title: "Controle de Mesas",
    description:
      "Tenha um mapa visual completo do salão. Acompanhe a ocupação de cada mesa, o status dos pedidos e a conta ativa em tempo real.",
  },
  {
    title: "Cardápio Digital",
    description:
      "Faça alterações instantâneas de preços, ingredientes e disponibilidade. Crie categorias dinâmicas como pizzas doces, salgadas e bebidas.",
  },
  {
    title: "Gestão de Garçons",
    description:
      "Atribua mesas e gerencie as comandas enviadas diretamente pelo smartphone do garçom, sem a necessidade de rascunhos de papel.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="funcionalidades"
      className="flex flex-col gap-12 border-y border-border-subtle bg-surface px-4 py-12 sm:px-8 lg:p-20"
    >
      <Reveal>
        <SectionHeader
          badge="FUNCIONALIDADES EXCLUSIVAS"
          title="Tudo o que seu restaurante precisa para decolar"
          description="Nossa plataforma foi desenhada especificamente para a dinâmica ágil de restaurantes, eliminando gargalos de produção e acelerando o tempo de entrega."
        />
      </Reveal>
      <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(--spacing(60),1fr))] gap-6">
        {features.map(({ title, description }) => (
          <article
            key={title}
            className="flex flex-col gap-4 rounded-lg border border-border-subtle bg-canvas p-6 transition duration-150 hover:border-border-focus hover:shadow-md"
          >
            <h3 className="font-display text-xl font-semibold text-text-primary">
              {title}
            </h3>
            <p className="text-sm leading-5 text-text-secondary">
              {description}
            </p>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
