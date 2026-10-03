import Link from "next/link";
import BrandName from "./BrandName";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const columns: FooterColumn[] = [
  {
    title: "Produto",
    links: [
      { label: "Funcionalidades", href: "#funcionalidades" },
      { label: "Preços", href: "#precos" },
      { label: "Segurança", href: "/" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre nós", href: "/" },
      { label: "Suporte", href: "/" },
      { label: "Blog", href: "/" },
    ],
  },
];

const legalLinks = [
  { label: "Privacidade", href: "/" },
  { label: "Termos de Uso", href: "/" },
];

const linkClasses =
  "cursor-pointer transition-colors duration-150 hover:text-text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus";

export default function LandingFooter() {
  return (
    <footer
      id="contato"
      className="flex flex-col gap-12 px-4 pt-12 pb-10 sm:px-8 lg:px-20 lg:pt-16"
    >
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div className="flex max-w-80 flex-col gap-4">
          <BrandName />
          <p className="text-sm leading-5 text-text-secondary">
            A tecnologia que faltava na sua operação de massas. Gestão
            descomplicada para focar no que realmente importa: a melhor pizza.
          </p>
        </div>
        <div className="flex gap-16">
          {columns.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-text-primary">{title}</h3>
              <ul className="flex flex-col gap-3 text-sm text-text-secondary">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    {href.startsWith("#") ? (
                      <a href={href} className={linkClasses}>
                        {label}
                      </a>
                    ) : (
                      <Link href={href} className={linkClasses}>
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-border-subtle" />
      <div className="flex flex-col items-start justify-between gap-4 text-sm sm:flex-row sm:items-center">
        <p className="text-text-tertiary">
          © 2026 <span className="text-brand-primary">ComandaFácil</span>.
          Todos os direitos reservados.
        </p>
        <ul className="flex gap-4 text-text-secondary">
          {legalLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className={linkClasses}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
