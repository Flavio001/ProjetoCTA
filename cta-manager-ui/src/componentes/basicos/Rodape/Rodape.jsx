/**
 *  05/05/21
 *  Componente Rodape
 * 
 *  Este é um componente básico (reutilizado varias vezes no projeto)
 * 
 *  Ele é responsável por exibir o conteudo geral do Rodapé no sistema
 * 
 * Desenvolvido por Flávio Antonio Dutra
 * 
 */

import React from "react";
import "../Rodape/rodape.css";

const Rodape = (props) => {
  return (
    <footer className="container-flex">
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 p-2 lead">
            <small className="lead">LINKS ÚTEIS:</small>
            <br />
            <hr className="linha_rodape"/>
            <p>
              <a href="https://pm.ssp.ma.gov.br/"><i className=" bi bi-chevron-right"></i> Polícia Militar do Maranhão</a>
            </p>
            <p>
              <a href="https://www.policiacivil.ma.gov.br/"> <i className=" bi bi-chevron-right"></i> Polícia Civil do Maranhão</a>
            </p>
            <p>
              <a href="https://cbm.ssp.ma.gov.br/"> <i className=" bi bi-chevron-right"></i> Corpo de Bombeiros do Maranhão </a>
            </p>
            <p>
              <a href="https://www.ma.gov.br/"> <i className=" bi bi-chevron-right"></i> Governo do Estado do Maranhão</a>
            </p>
            <p>
              <a href="https://www.ssp.ma.gov.br/"> <i className=" bi bi-chevron-right"></i> Secretaria de Segurança Pública MA</a>
            </p>
          </div>

          <div className="col-6 col-sm-6 col-md-6 col-lg-4 p-2 lead">
            <small className="lead">REDES SOCIAIS:</small>
            <br />
            <hr className="linha_rodape"/>
            <p>
              <a href="https://www.instagram.com/cta_maranhao/">
                <i className=" bi bi-instagram"></i> Instagram
              </a>
              <br />
            </p>
            <p>
              <a href="https://www.facebook.com">
                <i className=" bi bi-facebook"></i> Facebook
              </a>
              <br />
            </p>
            <p>
              <a href="https://www.twitter.com">
                <i className=" bi bi-twitter"></i> Twitter
              </a>
              <br />
            </p>
            <p>
            <a href="https://wa.me/+5598987392341?text=sua%20mensagem">
                <i className=" bi bi-whatsapp"></i> Whatsapp
              </a>
            </p>
          </div>

          <div className=" col-sm-12 col-md-12 col-lg-4 p-2 lead">
            <small className="lead">ENDEREÇO:</small>
            <hr className="linha_rodape"/>
            <p>
              <i className="bi bi-map" /> Av. Jerônimo de Albuquerque, s/n <br/> Calhau, São Luís - MA, 65074-220
            </p>
           
            <small className="lead">CONTATOS:</small>
            <hr className="linha_rodape"/>
            <p> <i className="bi bi-telephone" /> (98) 3218-8995</p>
            <p> <i className="bi bi-telephone" /> (98) 3218-2143</p>
          </div>
        </div>
        <div className=" text-center mt-5">
          <p>
            Desenvolvido pela Equipe Engenharia de Computação - UEMA<br></br>São
            Luis/MA - 2021
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Rodape;
