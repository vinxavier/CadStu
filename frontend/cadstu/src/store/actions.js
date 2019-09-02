export default {
  novoAluno: ({ commit }, aluno) => {
    commit('adicionaAluno', aluno)
  },
  deletarAluno: ({commit}, index) => {
    commit('apagaAluno', index)
  }
}
