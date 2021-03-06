import React from 'react'
import PaginaInicial from './componentes/PaginaInicial/PaginaInicial'
import PaginaInfo from './componentes/PaginaInfo/PaginaInfo'
import PaginaFotos from './componentes/PaginaFotos/PaginaFotos'
import PaginaLogin from './componentes/PaginaLogin/PaginaLogin'
import Departamentos from './componentes/PaginaDepartamentos/PaginaDepartamentos'
import RecuperarSenha from './componentes/PaginaRecuperarSenha/PaginaRecuperarSenha'
import Cadastro1 from './componentes/PaginaCadastro/PaginaCadastro1'
import Publico from './componentes/PaginaAreaPublica/PaginaAreaPublica'
    import RelatoriosSeguranca from './componentes/PaginaAreaPublica/Funcionalidades/RelatoriosSeguranca'
    import Avisos from './componentes/PaginaAreaPublica/Funcionalidades/Avisos'
    import CursosAtualizados from './componentes/PaginaAreaPublica/Funcionalidades/CursosDisponiveis'
import Instrucao from './componentes/PaginaAreaInstrucao/PaginaAreaInstrucao'
    import CursosDisponiveis from './componentes/PaginaAreaInstrucao/Funcionalidades/CursosDisponiveis'
    import Editais from './componentes/PaginaAreaInstrucao/Funcionalidades/Editais'
    import PrazosDocumentacoes from './componentes/PaginaAreaInstrucao/Funcionalidades/PrazosDocumentacoes'
    import Renovacao from './componentes/PaginaAreaInstrucao/Funcionalidades/Renovacao'

import Seguranca from  './componentes/PaginaAreaSeguranca/PaginaAreaSeguranca'
import Resgate from './componentes/PaginaAreaResgate/PaginaAreaResgate'
import Operacoes from './componentes/PaginaAreaOperacoes/PaginaAreaOperacoes'
import Manutencao from './componentes/PaginaAreaManutencao/PaginaAreaManutencao'
import PilotoCopiloto from './componentes/PaginaAreaPiloto/PaginaAreaPiloto'
import Administrativo from './componentes/PaginaAreaAdministrativa/PaginaAreaAdministrativa'
import Gerenciamento from './componentes/PaginaAreaGerenciamento/PaginaGerenciamentoUsuarios' 
import Pagina404 from './componentes/PaginaNaoEncontrada404/Pagina404'
import PaginaContatos from './componentes/PaginaContatos/PaginaContatos'
import PaginaSobre from './componentes/PaginaSobre/PaginaSobre'

import OrdemMissao from './componentes/PaginaOrdemMissao/PaginaOrdemMissao'


import { Switch, Route } from 'react-router-dom'


const Routes = (props)=>{
    return(
        <>
        <Switch>
                <Route path="/" component={PaginaInicial} exact />
                <Route path="/info" component={PaginaInfo}/>
                <Route path="/fotos" component={PaginaFotos}/>
                <Route path="/login" component={PaginaLogin}/>
                <Route path="/cadastro1" component={Cadastro1}/>
                <Route path="/recuperarSenha" component={RecuperarSenha} />
                <Route path="/contatos" component={PaginaContatos} />
                <Route path="/sobre" component={PaginaSobre}/>
                <Route path="/departamentos" component={Departamentos} />
                <Route path="/area_publica" component={Publico} />
                    <Route path="/relatorios_seguranca" component={RelatoriosSeguranca} />
                    <Route path="/avisos" component={Avisos} />
                    <Route path="/cursos_atualizados" component={CursosAtualizados}/>
                <Route path="/area_instrucao" component={Instrucao} />
                    <Route path="/cursos_disponiveis" component={CursosDisponiveis} />
                    <Route path="/editais" component={Editais} />
                    <Route path="/prazos_documentacoes" component={PrazosDocumentacoes} />
                    <Route path="/renovacao" component={Renovacao} />
                <Route path="/area_seguranca" component={Seguranca} />
                <Route path="/area_resgate" component={Resgate} />
                <Route path="/area_operacoes" component={Operacoes} />
                <Route path="/area_manutencao" component={Manutencao} />
                <Route path="/area_piloto_copiloto" component={PilotoCopiloto} />
                <Route path="/area_administrativa" component={Administrativo} />
                <Route path="/area_gerenciamento" component={Gerenciamento} />
                <Route path="/area_ordem_missao" component={OrdemMissao} />
                <Route component={Pagina404} />
                
               
        </Switch>
        </>
    )
}
export default Routes
