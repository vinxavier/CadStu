export default {
  adicionaAluno: (state, aluno) => {
    state.students.push(aluno)
    alert("Cadastrado com sucesso!")
  },
  apagaAluno: (state, index) => {
    state.students.splice(index,1)
  },
  editAluno: (state, { aluno, index }) => {
    state.students[index] = aluno
    alert("Atualizações salvas!")
  }
}
