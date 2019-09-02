export default {
  novoAluno: ({ commit }, aluno) => {
    commit('adicionaAluno', aluno)
  }
}
