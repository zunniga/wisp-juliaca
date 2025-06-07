export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">WISP</span>{" "}
              <span className="text-[#D29D69] dark:text-[#F8BB7C]">JULIACA</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Soluciones integrales en redes y telecomunicaciones que garantizan una conectividad eficiente y una
              seguridad confiable.
            </p>
            <p className="text-gray-400">© {new Date().getFullYear()} WISP Todos los derechos reservados.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D29D69] dark:text-[#F8BB7C]">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-gray-400 hover:text-[#D29D69] dark:hover:text-[#F8BB7C] transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-gray-400 hover:text-[#D29D69] dark:hover:text-[#F8BB7C] transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-400 hover:text-[#D29D69] dark:hover:text-[#F8BB7C] transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#clientes"
                  className="text-gray-400 hover:text-[#D29D69] dark:hover:text-[#F8BB7C] transition-colors"
                >
                  Clientes
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 hover:text-[#D29D69] dark:hover:text-[#F8BB7C] transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D29D69] dark:text-[#F8BB7C]">Contacto</h4>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Lima, Perú</p>
              <p className="mb-2">+51 123 456 789</p>
              <p className="mb-2">contacto@imversit.com</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  )
}
