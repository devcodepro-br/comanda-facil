import type { ReactNode } from "react";
import { LuPencil, LuTrash2 } from "react-icons/lu";
import Badge from "./Badge";
import IconButton from "./IconButton";
import Toggle from "./Toggle";

interface TableColumn {
  key: string;
  header: string;
  className?: string;
}

interface TableProps {
  caption?: string;
  columns?: TableColumn[];
  rows?: Record<string, ReactNode>[];
}

const defaultColumns: TableColumn[] = [
  { key: "name", header: "Nome", className: "w-full" },
  { key: "price", header: "Preço", className: "w-37.5" },
  { key: "category", header: "Categoria", className: "w-45" },
  { key: "available", header: "Disponível", className: "w-30" },
  { key: "actions", header: "Ações", className: "w-37.5 text-right" },
];

const actions = (
  <div className="flex items-center justify-end gap-1">
    <IconButton icon={LuPencil} label="Editar" />
    <IconButton icon={LuTrash2} label="Excluir" tone="danger" />
  </div>
);

const defaultRows: Record<string, ReactNode>[] = [
  {
    name: "Coca-Cola Lata",
    price: "R$ 6,00",
    category: <Badge label="Bebidas" />,
    available: <Toggle label="Disponível: Coca-Cola Lata" />,
    actions,
  },
  {
    name: "Pizza Calabresa",
    price: "R$ 48,00",
    category: <Badge label="Pizzas" />,
    available: <Toggle label="Disponível: Pizza Calabresa" />,
    actions,
  },
];

// Colunas com estas chaves recebem o estilo de texto da referência
const cellStyles: Record<string, string> = {
  name: "font-semibold text-text-primary",
  price: "font-bold text-text-brand",
};

export default function Table({
  caption = "Lista de produtos",
  columns = defaultColumns,
  rows = defaultRows,
}: TableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-sm border border-border-subtle bg-surface">
      <table className="w-full min-w-175 text-left">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="bg-surface-elevated text-xs leading-4 font-semibold text-text-secondary">
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`px-4 py-3 ${column.className ?? ""}`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-t border-border-subtle text-sm leading-5 text-text-secondary"
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={`px-4 py-3 ${cellStyles[column.key] ?? ""} ${column.className ?? ""}`}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
