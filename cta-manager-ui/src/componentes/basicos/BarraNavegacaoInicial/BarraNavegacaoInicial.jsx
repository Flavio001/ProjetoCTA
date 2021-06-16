/**
 *  05/05/21
 *  Componente BarraNavegaçãoInicial
 * 
 *  Este é um componente básico (reutilizado varias vezes no projeto)
 * 
 *  Este componente exibe uma barra de navegação de página inicial, exibindo os atalhos de logotipo Home,
 *  botão Cadastro e Login
 * 
 *  Foi construido aqui uma barra de navegação semelhante a documentação observado no bootstrap(4.6)
 *  https://getbootstrap.com/docs/4.6/components/navbar/
 * 
 * Desenvolvido por Flávio Antonio Dutra
 * 
 */

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/logo-cta.png";
import "./BarraNavegacaoInicial.css"

const BarraNavegacaoInicial = (props) => {
  return (
    
    <header className="container-flex">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div
          className="navbar-brand col-9 col-sm-9 col-md-9 col-lg-9"
          href="paginaInicial.html"
        >
          <Link to="/">
            {/**Aqui é importado a imagem utilizada na barra de navegação */}
            <img src={logo}  height="65" width="65" alt="logo-cta"></img>
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
          <div className="navbar-nav ">


          <Link className="nav-item nav-link text-center" to="/cadastro1">
            <button id="cadastrar" className="btn btn-primary ">CADASTRO</button>
            </Link>
        
        
            <Link className="nav-item nav-link text-center" to="/login">
              <button id="login"className="btn btn-success">LOGIN</button>              
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default BarraNavegacaoInicial;
