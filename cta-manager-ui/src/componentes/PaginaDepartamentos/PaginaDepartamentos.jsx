import React from "react";
import "../PaginaDepartamentos/paginaDepartamentos.css";
import { Link } from "react-router-dom";
import BarraNavegacaoPrincipal from "../basicos/BarraNavegacaoPrincipal/BarraNavegacaoPrincipal";
import Rodape from "../basicos/Rodape/Rodape";
import { FaHelicopter } from "react-icons/fa";
import Botao from "../basicos/Botao/Botao";

const PaginaDepartamentos = (props) => {
  return (
    <>
      <BarraNavegacaoPrincipal />

      <section>
        <div className=" container ">
          <div className="row p-4">
            <h1 className="col-12 text-center mt-3 mb-5"> Departamentos</h1>

            <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
              <Botao
                caminho="/area_publica"
                estilo=" btn btn-info btn-lg text botaodepartamento"
                titulo={<i className="display-4 bi bi-people"></i>}
              />
              <Link to="/area_publica">
                <p className="lead">Área Pública</p>
              </Link>
            </div>

            <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
              <Botao
                caminho="/area_instrucao"
                estilo=" btn btn-info btn-lg text botaodepartamento"
                titulo={<i className="display-4 bi bi-book"></i>}
              />
              <Link to="/area_instrucao">
                <p className="lead">Instrução</p>
              </Link>
            </div>

            <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
              <Botao
                caminho="/area_seguranca"
                estilo=" btn btn-info btn-lg text botaodepartamento"
                titulo={<i className="display-4 bi bi-shield-shaded"></i>}
              />
              <Link to="/area_seguranca">
                <p className="lead">Segurança</p>
              </Link>
            </div>

            <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
              <Botao
                caminho="/area_resgate"
                estilo=" btn btn-info btn-lg text botaodepartamento"
                titulo={<i className="display-4 bi bi-bag-plus"></i>}
              />
              <Link to="/area_resgate">
                <p className="lead">Resgate</p>
              </Link>
            </div>

            <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
              <Botao
                caminho="/area_operacoes"
                estilo=" btn btn-info btn-lg text botaodepartamento"
                titulo={<i className="display-4 bi bi-bullseye"></i>}
              />

              <Link to="/area_operacoes">
                <p className="lead">Operações</p>
              </Link>
            </div>

            <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
              <Botao
                caminho="/area_manutencao"
                estilo=" btn btn-info btn-lg text botaodepartamento"
                titulo={<i className="display-4 bi bi-hammer"></i>}
              />

              <Link to="/area_manutencao">
                <p className="lead">Manutenção </p>
              </Link>
            </div>

            <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
              <Botao
                caminho="/area_piloto_copiloto"
                estilo=" btn btn-info btn-lg text botaodepartamento"
                titulo={
                  <i className="display-4">
                    <FaHelicopter />
                  </i>
                }
              />

              <Link to="/area_piloto_copiloto">
                <p className="lead">Piloto/Copiloto</p>
              </Link>
            </div>

            <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
              <Botao
                caminho="/area_gerenciamento"
                estilo=" btn btn-info btn-lg text botaodepartamento"
                titulo={<i className="display-4 bi bi-person-lines-fill"></i>}
              />

              <Link to="/area_gerenciamento">
                <p className="lead"> Gestão de Pessoas</p>
              </Link>
            </div>

            <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
              <Botao
                caminho="/area_gerenciamento"
                estilo=" btn btn-info btn-lg text botaodepartamento"
                titulo={<i className="display-4 bi bi-lock"></i>}
              />

              <Link to="/area_administrativa">
                <p className="lead"> Administrativo</p>
              </Link>
            </div>
          </div>
        </div>

<div className="container">
        <div className="row">
          <h3 className="col-12 text-center p-4"> Ferramentas</h3>
          <div className="caixa-gerenciamento col-12 col-md-6 col-lg-4 text-center">
            <p className="lead">Previsão do tempo</p>
            <iframe
              title="Previsao do tempo"
              allowtransparency="true"
              marginwidth="0"
              marginheight="0"
              hspace="0"
              vspace="0"
              frameborder="0"
              scrolling="no"
              src="https://www.cptec.inpe.br/widget/widget.php?p=243&w=h&c=748ccc&f=ffffff"
              height="200px"
              width="215px"
            ></iframe>
        
          </div>

          <div className="caixa-gerenciamento col-12 col-md-6 col-lg-4 text-center">
            <p className="lead">Mapas</p>
            <iframe
              title="Mapa São Luis"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d255079.709825041!2d-44.26884869337158!3d-2.6285293920170654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1614833955092!5m2!1spt-BR!2sbr"
            ></iframe>
          </div>

          <div className="caixa-gerenciamento col-12 col-md-6 col-lg-4">
            <p className="lead text-center">Outras Ferramentas:</p>

            <div>

            <p className="lead">
              <a href="http://clima.cptec.inpe.br/"><i className=" bi bi-cloud-rain"></i> Pluviosidade</a>
            </p>
            <p className="lead">
              <a href="http://clima.cptec.inpe.br/"> <i className=" bi bi-clouds"></i> Nebulosidade</a>
            </p>
            <p className="lead">
              <a href="http://satelite.cptec.inpe.br/home/index.jsp"> <i className=" bi bi-globe"></i> Imagens de Satélite</a>
            </p>
            
            </div>
          
          </div>
        </div>
        </div>
        <div className="m-4" />

        <div className="d-flex justify-content-center">
          <Botao
            caminho="/login"
            id="sair"
            estilo="btn btn-danger p-2 m-3"
            titulo="VOLTAR"
          />
        </div>
      </section>

      <Rodape />
    </>
  );
};
export default PaginaDepartamentos;
