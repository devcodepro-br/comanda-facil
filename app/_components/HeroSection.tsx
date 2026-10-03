import Badge from "../components/Badge";
import Button from "../components/Button";
import OrderCard from "../components/OrderCard";
import HeroMetrics from "./HeroMetrics";

export default function HeroSection() {
  return (
    <section className="flex animate-enter flex-col items-center gap-10 px-4 py-10 sm:px-8 lg:flex-row lg:gap-16 lg:p-20">
      <div className="flex w-full flex-1 flex-col gap-8">
        <div className="flex flex-col items-start gap-4">
          <Badge label="GESTÃO COMPLETA PARA RESTAURANTES" tone="neutral" />
          <h1 className="font-display text-display font-bold text-text-primary lg:text-5xl lg:leading-14">
            Seu restaurante sob controle, do pedido à entrega
          </h1>
          <p className="text-base leading-6.5 text-text-secondary">
            Simplifique o gerenciamento do seu restaurante. Controle pedidos em
            produção, gerencie garçons, organize o fluxo de mesas e atualize
            seu cardápio em tempo real com facilidade e eficiência.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button label="Comece de graça" href="/cadastro" />
          <Button
            variant="secondary"
            label="Ver planos e preços"
            href="#precos"
          />
        </div>
        <HeroMetrics />
      </div>

      <div className="flex w-full flex-1 flex-col gap-4 rounded-xl border border-border-subtle bg-surface p-5 shadow-lg sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-xl font-semibold text-text-primary">
            Painel em Tempo Real
          </h2>
          <Badge label="6 Pedidos Ativos" tone="success" />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(--spacing(60),1fr))] gap-4">
          <OrderCard
            tableName="Mesa 12"
            itemsSummary="1x Pizza Calabresa, 1x Guaraná"
            total="R$ 48,00"
          />
          <OrderCard
            tableName="Mesa 04"
            itemsSummary="1x Pizza Quatro Queijos, 1x Coca-Cola"
            total="R$ 54,00"
          />
        </div>
      </div>
    </section>
  );
}
