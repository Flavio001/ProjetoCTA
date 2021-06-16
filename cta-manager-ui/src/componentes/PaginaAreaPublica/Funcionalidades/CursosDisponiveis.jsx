import React, { Component } from "react";
import TemplateBasicoAreas from "../../basicos/TemplateBasicoAreas/TemplateBasicoAreas";
import Botao from "../../basicos/Botao/Botao"


class CursosAtualizados extends Component {
  render() {
    return (
      <>
        <TemplateBasicoAreas>
          <div className="container">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="col-sm-12">
                    <div class="card text-center text-white bg-secondary mb-3">
                      <div class="card-body">
                        <h5 class="card-title">
                          Curso de Especialização - Entrega de Vacinas
                        </h5>
                        <p class="card-text">
                          O curso abordará as métodos que devem ser adotados, na
                          entrega de vacinas.
                        </p>
                        <p class="card-text">Carga Horária: 6 horas</p>
                        <p class="card-text">Prazo: 28/04/2021 - 10/05/2021</p>
                        <a href="#" class="btn btn-success">
                          Inscreva-se
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="col-sm-12">
                    <div class="card text-center text-white bg-secondary mb-3">
                      <div class="card-body">
                        <h5 class="card-title">
                          Curso de Especialização - Entrega de Vacinas
                        </h5>
                        <p class="card-text">
                          O curso abordará as métodos que devem ser adotados, na
                          entrega de vacinas.
                        </p>
                        <p class="card-text">Carga Horária: 6 horas</p>
                        <p class="card-text">Prazo: 28/04/2021 - 10/05/2021</p>
                        <a href="#" class="btn btn-success">
                          Inscreva-se
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="col-sm-12">
                    <div class="card text-center text-white bg-secondary mb-3">
                      <div class="card-body">
                        <h5 class="card-title">
                          Curso de Especialização - Entrega de Vacinas
                        </h5>
                        <p class="card-text">
                          O curso abordará as métodos que devem ser adotados, na
                          entrega de vacinas.
                        </p>
                        <p class="card-text">Carga Horária: 6 horas</p>
                        <p class="card-text">Prazo: 28/04/2021 - 10/05/2021</p>
                        <a href="#" class="btn btn-success">
                          Inscreva-se
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <Botao
                  caminho="/area_publica"
                  id="sair"
                  estilo="btn btn-danger mt-4 mb-4 p-2 mr-5"
                  titulo="VOLTAR"
                />

                <Botao
                  caminho="/departamentos"
                  id="entrar"
                  estilo="btn btn-success mt-4 mb-4 p-2 "
                  titulo="ENVIAR"
                />
              </div>      
          



        </TemplateBasicoAreas>
       
      </>
    );
  }
}
export default CursosAtualizados;
