import React from "react";

interface FooterColumn {
  title: string;
  links: { name: string; href: string }[];
  target: string;
}

const FooterComponent: React.FC = () => {
  const footerColumns: FooterColumn[] = [
    {
      title: "NAVEGACIÓN",
      links: [
        { name: "Inicio", href: "#" },
        { name: "Productos", href: "#productos" },
        { name: "Contacto", href: "#contacto" },
      ],
      target: "",
    },
    {
      title: "SERVICIOS",
      links: [
        { name: "Clases de equitación", href: "#" },
        { name: "Personalización de equipos", href: "#" },
        { name: "Mantenimiento de equipos", href: "#" },
      ],
      target: "",
    },
    {
      title: "¡SÍGUENOS!",
      links: [
        { name: "Facebook", href: "https://facebook.com" },
        { name: "Instagram", href: "https://instagram.com" },
        { name: "Twitter", href: "https://twitter.com" },
      ],
      target: "_blank",
    },
    {
      title: "LEGAL",
      links: [
        { name: "Política de privacidad", href: "#" },
        { name: "Términos & Condiciones", href: "#" },
      ],
      target: "",
    },
  ];

  return (
    <footer id="footer" className="bg-gray-900 text-white py-10">
      {/* Logo */}
      <div className="container mx-auto text-center mb-6">
        <div className="flex justify-center items-center space-x-2">
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-300 transition duration-300"
            rel="noopener noreferrer"
          >
            <span className="text-4xl">🏇</span>
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-300 transition duration-300"
            rel="noopener noreferrer"
          >
            <h1 className="text-2xl font-extrabold">EpicRiders</h1>
          </a>
        </div>
      </div>

      {/* Columnas */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h2 className="text-xl font-bold mb-4">{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.name} className="mb-2">
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-300 transition duration-300"
                    target={column.target}
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-700"></div>

      {/* Copyright y redes sociales */}
      <div className="container mx-auto text-center">
        <p className="text-gray-400">
          © 2024 {" "}
          <a
            href="#"
            className="text-yellow-300 hover:underline transition duration-300"
          >
            EpicRiders™
          </a>
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://facebook.com"
            className="text-gray-300 hover:text-yellow-300 transition duration-300"
            aria-label="Facebook"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-300 hover:text-yellow-300 transition duration-300"
            aria-label="Instagram"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-300 hover:text-yellow-300 transition duration-300"
            aria-label="Twitter"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
