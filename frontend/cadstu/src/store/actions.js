export default {
  novoAluno: ({ commit }, aluno) => {
    commit('adicionaAluno', aluno)
  },
  deletarAluno: ({commit}, index) => {
    commit('apagaAluno', index)
  },
  editarAluno: ({commit}, payload) => {
    commit('editAluno', payload)
  }
}
