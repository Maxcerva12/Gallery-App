import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="text-dark mb-3">Desarrollador</h5>
            <p className="mb-1">Maximiliano Cervantes Mendoza</p>
            <p className="text-muted small">
              &copy; {new Date().getFullYear()} Maxcerva12. Todos los derechos
              reservados.
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="text-dark mb-3">Contacto</h5>
            <p className="mb-1">
              <a
                href="mailto:mc349821@Gmail.com"
                className="text-decoration-none text-muted"
              >
                mc349821@Gmail.com
              </a>
            </p>
            <p className="mb-1">
              <a
                href="https://www.sitiowebdeldeveloper.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-muted"
              >
                www.sitiowebdeldeveloper.com
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="text-dark mb-3">Licencia</h5>
            <p className="mb-1">
              <a
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-muted"
              >
                MIT License
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
