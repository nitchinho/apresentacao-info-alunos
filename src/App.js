import { useState } from "react";
import InformacaoAluno from "./componente/InformacaoAluno";
import alunos from './dados'; //Coleção de dados

const Dashboard = () => {
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);

  const abrirInformacaoAluno = (aluno) => {
    setMostrarComponente(true);
    setAlunoSelecionado(aluno);
  };

  const fecharInformacaoAluno = () => {
    setMostrarComponente(false);
    setAlunoSelecionado(null);
  };

  return (
    <div>
      <h1>Lista de Alunos</h1>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.matricula}>
            {aluno.nome}
            <button onClick={abrirInformacaoAluno}> +</button>
          </li>
        ))}
      </ul>
      {mostrarComponente && < InformacaoAluno aluno={alunoSelecionado} fecharInformacaoAluno={fecharInformacaoAluno} />}
    </div>
  );
};

export default Dashboard;