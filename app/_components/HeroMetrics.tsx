interface Metric {
  value: string;
  label: string;
}

const metrics: Metric[] = [
  { value: "+2.500", label: "Restaurantes gerenciados" },
  { value: "99.9%", label: "Tempo de atividade estável" },
];

export default function HeroMetrics() {
  return (
    <dl className="flex flex-wrap items-center gap-x-10 gap-y-4">
      {metrics.map(({ value, label }) => (
        <div key={label} className="flex flex-col-reverse gap-1">
          <dt className="text-sm text-text-secondary">{label}</dt>
          <dd className="font-display text-3xl font-bold text-text-brand">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
