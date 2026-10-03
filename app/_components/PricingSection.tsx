import PricingCard from "./PricingCard";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function PricingSection() {
  return (
    <section
      id="precos"
      className="flex flex-col gap-12 px-4 py-12 sm:px-8 lg:p-20"
    >
      <Reveal>
        <SectionHeader
          badge="PREÇOS TRANSPARENTES"
          title="O plano ideal para o tamanho do seu negócio"
          description="Comece gratuitamente para experimentar nossas facilidades e mude para o Premium conforme sua operação expandir."
        />
      </Reveal>
      <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(--spacing(80),1fr))] gap-8">
        <PricingCard
          name="Plano Gratuito"
          description="Para pizzerias iniciantes que precisam do controle básico e com pouca movimentação."
          price="R$ 0"
          period="/ sempre grátis"
          features={[
            "Até 50 pedidos por mês",
            "Cadastro de até 5 mesas",
            "Cadastro simplificado de produtos",
          ]}
          excluded={["Sem relatórios avançados", "Suporte padrão por e-mail"]}
          ctaLabel="Cadastrar Grátis"
        />
        <PricingCard
          highlighted
          name="Plano Premium"
          description="Para restaurantes em crescimento que necessitam de operação ilimitada e suporte de alto nível."
          price="R$ 99"
          period="/ mês"
          features={[
            "Pedidos absolutamente ilimitados",
            "Controle de mesas sem limites",
            "Painel financeiro e relatórios avançados",
            "Gestão multi-unidades de garçons",
            "Suporte prioritário via WhatsApp 24/7",
          ]}
          ctaLabel="Assinar Premium"
        />
      </Reveal>
    </section>
  );
}
