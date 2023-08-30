// import "./style.css";
// import alunos from "../../dados";

const InformacaoAluno = ({aluno,fecharInformacaoAluno}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Informações do Aluno</h2>
        <p>Matrícula: {aluno.matricula}</p>
        <p>Nome: {aluno.nome}</p>
        <p>Idade: {aluno.idade}</p>
        <p>Série: {aluno.serie}</p>
        <p>Turma: {aluno.turma}</p>
        <button onClick={fecharInformacaoAluno} >fechar</button>
      </div>
    </div>
  );
};

export default InformacaoAluno;