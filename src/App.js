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
      <h1>Lista de Funcionários</h1>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.matricula}>
            {aluno.nome}
            <button onClick={() => abrirInformacaoAluno(aluno)}>+</button>
          </li>
        ))}
      </ul>
      {mostrarComponente && < InformacaoAluno aluno={alunoSelecionado} fecharInformacaoAluno={fecharInformacaoAluno} />}
    </div>
  );
};

export default Dashboard;

// import React from "react";
// import { useState } from "react";

// export default function App() {
//   const [contador, setContador] = useState(0);

//   const incrementar = () => {
//     setContador(contador+1);
//   };

//   const decrementar = () => {
//     contador > 0 && setContador(contador-1);
//   };

//   return (
//     <div>
//       <p>{contador}</p>
//       <button onClick={incrementar}>+</button>
//       <button onClick={decrementar}>-</button>
//     </div>
//   );
// }

// const itens = [
//   { nome: 'Pré som', valor: 800 },
//   { nome: 'Conta-giros', valor: 500 },
//   { nome: 'Desembaçador traseiro', valor: 1000 },
//   { nome: 'Ar quente', valor: 1800 },
// ];

// const itensBaratos = itens.filter( (item) => item.valor < 1000 && itensBaratos );
// itensBaratos.forEach( ( item ) => {
//      console.log( item.nome + ' - ' + item.valor );
// });

// console.log(itensBaratos)