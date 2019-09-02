export default {
  adicionaAluno: (state, aluno) => {
    state.students.push(aluno)
  },
  apagaAluno: (state, index) => {
    state.students.splice(index,1)
  }
}
