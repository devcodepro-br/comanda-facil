import type { ReactNode } from "react";
import { LuEye, LuPlus, LuTrash2 } from "react-icons/lu";
import AccordionHeader from "@/app/components/AccordionHeader";
import Badge from "@/app/components/Badge";
import Button from "@/app/components/Button";
import CategoryCard from "@/app/components/CategoryCard";
import ConfirmationModal from "@/app/components/ConfirmationModal";
import Dropdown from "@/app/components/Dropdown";
import EmptyState from "@/app/components/EmptyState";
import FilterTab from "@/app/components/FilterTab";
import IconButton from "@/app/components/IconButton";
import Input from "@/app/components/Input";
import MesaCard from "@/app/components/MesaCard";
import ModalContainer from "@/app/components/ModalContainer";
import OrderCard from "@/app/components/OrderCard";
import PageHeader from "@/app/components/PageHeader";
import Pagination from "@/app/components/Pagination";
import PlanUsageCard from "@/app/components/PlanUsageCard";
import Sidebar from "@/app/components/Sidebar";
import SidebarNavItem from "@/app/components/SidebarNavItem";
import Table from "@/app/components/Table";
import Tab from "@/app/components/Tab";
import Toggle from "@/app/components/Toggle";
import UpgradeCard from "@/app/components/UpgradeCard";
import MaskedFieldsDemo from "./_components/MaskedFieldsDemo";

interface SectionProps {
  title: string;
  children: ReactNode;
}

interface VariantProps {
  label: string;
  className?: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-display text-xl font-semibold text-text-primary">
        {title}
      </h2>
      <div className="flex flex-wrap items-start gap-6">{children}</div>
    </section>
  );
}

function Variant({ label, className = "", children }: VariantProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {children}
      <span className="text-xs text-text-tertiary">{label}</span>
    </div>
  );
}

export default function Preview() {
  return (
    <main className="flex flex-col gap-12 p-8">
      <PageHeader
        title="Componentes"
        subtitle="Design system do Comanda Fácil"
      />

      <Section title="Button">
        <Variant label='variant="primary"'>
          <Button variant="primary" />
        </Variant>
        <Variant label='variant="secondary"'>
          <Button variant="secondary" />
        </Variant>
        <Variant label='variant="ghost"'>
          <Button variant="ghost" />
        </Variant>
        <Variant label='variant="danger"'>
          <Button variant="danger" />
        </Variant>
        <Variant label="disabled (primary)">
          <Button variant="primary" disabled />
        </Variant>
        <Variant label="disabled (secondary)">
          <Button variant="secondary" disabled />
        </Variant>
        <Variant label="disabled (ghost)">
          <Button variant="ghost" disabled />
        </Variant>
        <Variant label="disabled (danger)">
          <Button variant="danger" disabled />
        </Variant>
        <Variant label='size="sm"'>
          <Button size="sm" label="Pequeno" />
        </Variant>
        <Variant label='size="lg"'>
          <Button size="lg" label="Grande" />
        </Variant>
        <Variant label="icon">
          <Button
            label="Novo pedido"
            icon={<LuPlus aria-hidden="true" className="size-5" />}
          />
        </Variant>
      </Section>

      <Section title="IconButton">
        <Variant label='tone="default" (editar)'>
          <IconButton />
        </Variant>
        <Variant label='tone="default" (ver)'>
          <IconButton icon={LuEye} label="Ver" />
        </Variant>
        <Variant label='tone="danger"'>
          <IconButton icon={LuTrash2} label="Excluir" tone="danger" />
        </Variant>
        <Variant label="disabled">
          <IconButton disabled />
        </Variant>
      </Section>

      <Section title="Input">
        <Variant label="default" className="w-70">
          <Input />
        </Variant>
        <Variant label="focus (clique no campo)" className="w-70">
          <Input label="E-mail" placeholder="usuario@email.com" />
        </Variant>
        <Variant label="error" className="w-70">
          <Input
            label="E-mail"
            defaultValue="Email inválido"
            error="Informe um e-mail válido."
          />
        </Variant>
        <Variant label="disabled" className="w-70">
          <Input label="E-mail" placeholder="Indisponível" disabled />
        </Variant>
      </Section>

      <Section title="MaskedInput">
        <MaskedFieldsDemo />
      </Section>

      <Section title="Dropdown">
        <Variant label="default" className="w-75">
          <Dropdown />
        </Variant>
        <Variant label="disabled" className="w-75">
          <Dropdown label="Categoria" disabled />
        </Variant>
      </Section>

      <Section title="Toggle">
        <Variant label="ligado">
          <Toggle />
        </Variant>
        <Variant label="desligado">
          <Toggle defaultChecked={false} />
        </Variant>
        <Variant label="disabled">
          <Toggle disabled />
        </Variant>
      </Section>

      <Section title="Badge">
        <Variant label='tone="neutral"'>
          <Badge tone="neutral" label="Em produção" />
        </Variant>
        <Variant label='tone="success"'>
          <Badge tone="success" label="Concluído" />
        </Variant>
        <Variant label='tone="warning"'>
          <Badge tone="warning" label="Pendente" />
        </Variant>
        <Variant label='tone="danger"'>
          <Badge tone="danger" label="Cancelado" />
        </Variant>
        <Variant label='tone="info"'>
          <Badge tone="info" label="Novo" />
        </Variant>
      </Section>

      <Section title="SidebarNavItem">
        <Variant label="default" className="w-50">
          <SidebarNavItem />
        </Variant>
        <Variant label="hover (passe o mouse)" className="w-50">
          <SidebarNavItem />
        </Variant>
        <Variant label="active" className="w-50">
          <SidebarNavItem active />
        </Variant>
      </Section>

      <Section title="Sidebar">
        <Variant label="plano gratuito" className="h-180">
          <Sidebar userName="Odair Michael">
            <PlanUsageCard />
            <UpgradeCard />
          </Sidebar>
        </Variant>
        <Variant label="sem indicadores" className="h-180">
          <Sidebar userName="Odair Michael" />
        </Variant>
      </Section>

      <Section title="PlanUsageCard e UpgradeCard">
        <Variant label="PlanUsageCard" className="w-50">
          <PlanUsageCard />
        </Variant>
        <Variant label="UpgradeCard" className="w-50">
          <UpgradeCard />
        </Variant>
      </Section>

      <Section title="PageHeader">
        <PageHeader />
      </Section>

      <Section title="Table">
        <Variant label="default" className="w-full">
          <Table />
        </Variant>
      </Section>

      <Section title="OrderCard">
        <Variant label="default (passe o mouse para ver o hover)" className="w-70">
          <OrderCard />
        </Variant>
        <Variant label='statusTone="success"' className="w-70">
          <OrderCard
            tableName="Mesa 12"
            statusLabel="Concluído"
            statusTone="success"
            itemCount={2}
            itemsSummary="1x Pizza Calabresa, 1x Guaraná"
            total="R$ 58,00"
          />
        </Variant>
      </Section>

      <Section title="CategoryCard">
        <Variant label="default (passe o mouse para ver o hover)" className="w-55">
          <CategoryCard />
        </Variant>
      </Section>

      <Section title="MesaCard">
        <Variant label="default" className="w-65">
          <MesaCard />
        </Variant>
      </Section>

      <Section title="FilterTab">
        <Variant label="default">
          <FilterTab />
        </Variant>
        <Variant label="active">
          <FilterTab active />
        </Variant>
        <Variant label='size="lg"'>
          <FilterTab size="lg" label="CPF" active />
        </Variant>
        <Variant label='size="lg" (default)'>
          <FilterTab size="lg" label="CNPJ" />
        </Variant>
      </Section>

      <Section title="Tab">
        <Variant label="active">
          <Tab active />
        </Variant>
        <Variant label="default">
          <Tab />
        </Variant>
      </Section>

      <Section title="AccordionHeader">
        <Variant label="expandido (clique para recolher)" className="w-100">
          <AccordionHeader />
        </Variant>
        <Variant label="recolhido (clique para expandir)" className="w-100">
          <AccordionHeader defaultExpanded={false} />
        </Variant>
      </Section>

      <Section title="Pagination">
        <Pagination />
      </Section>

      <Section title="EmptyState">
        <Variant label="default" className="w-100">
          <EmptyState />
        </Variant>
      </Section>

      <Section title="ModalContainer">
        <Variant label="default" className="w-120">
          <ModalContainer />
        </Variant>
      </Section>

      <Section title="ConfirmationModal">
        <Variant label="default" className="w-100">
          <ConfirmationModal />
        </Variant>
      </Section>
    </main>
  );
}
