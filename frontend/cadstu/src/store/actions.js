import Vue from "vue"
export default {
  novoAluno: ({ commit }, payload) => {
    commit('adicionaAluno', payload)
  },
  getAddressFromCEP: ({ commit }, cep) => {
    let url = 'https://viacep.com.br/ws/' + cep + '/json/'
    Vue.axios.get(url)
    .then((reponse) => {
      return response
    })
    .catch((error =>{
      console.log(error.statusText)
    }))
  }
}
