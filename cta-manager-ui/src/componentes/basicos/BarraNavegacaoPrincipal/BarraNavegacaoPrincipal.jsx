/**
 *  05/05/21
 *  Componente BarraNavegaçãoPrincipal
 * 
 *  Este é um componente básico (reutilizado varias vezes no projeto)
 * 
 *  Este componente exibe uma barra de navegação principal, exibindo o logotipo do CTA(Home), 
 *  links para páginas de outros sites governamentais e para os componentes:
 *      - Sobre (responsável por exibir uma descrição dos valores, missoes do cta 
 *      - Contatos(responsável por exibir uma lista de contatos de cada departamento do cta)
 * 
 *  Foi construido aqui uma barra de navegação semelhante a documentação observada no bootstrap(4.6)
 *  https://getbootstrap.com/docs/4.6/components/navbar/
 * 
 * 
 * Desenvolvido por Flávio Antonio Dutra
 */


import React from "react";
import logo from "../../../img/logo-cta.png";
import { Link } from "react-router-dom";

const BarraNavegacaoPrincipal = (props) => {
  return (
    <header className="container-flex">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div
          className="navbar-brand d-flex col col-md-6 col-sm-6 col-lg-7"
          href="#"
        >
          <Link to="/">
            <img src={logo} width="65" height="65" alt="logo-cta" ></img>
          </Link>
          
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link text-center" to="/sobre">
              SOBRE
            </Link>
            <a
              className="nav-item nav-link text-center"
              href="https://www.ma.gov.br/"
            >
              GOV-MA
            </a>
            <a
              className="nav-item nav-link text-center"
              href="https://www.ssp.ma.gov.br/"
            >
              SSP-MA
            </a>
            <a
              className="nav-item nav-link text-center"
              href="https://cbm.ssp.ma.gov.br/"
            >
              CBMMA
            </a>
            <a
              className="nav-item nav-link text-center"
              href="https://pm.ssp.ma.gov.br/"
            >
              PMMA
            </a>
            <a
              className="nav-item nav-link text-center"
              href="https://www.policiacivil.ma.gov.br/"
            >
              PCMA
            </a>
            <Link className="nav-item nav-link text-center" to="/contatos">
              CONTATOS
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default BarraNavegacaoPrincipal;
