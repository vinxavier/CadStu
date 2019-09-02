<template>
  <div class="home">
    <div class="button-container">
      <router-link to="/aluno/novo" class="btn btn-primary">Novo Estudante</router-link>
    </div>
    <b-container>
      <div class="table-container">
        <b-table striped hover :fields="fields" :items="getStudentList">
          <template slot="[nome]" slot-scope="data">
            <router-link :to="`aluno/${data.index}`">
              {{ data.value }}
            </router-link>
          </template>
          <template slot="[action]" slot-scope="item">
            <b-button @click="deletarAluno(item.index)" size="sm" class="mr-2">
              Deletar
            </b-button>
            <b-button size="sm" @click="navigateEdit(item.index)" class="mr-2">
              Editar
            </b-button>
          </template>
        </b-table>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import router from '../router'
export default {
  name: 'home',
  data () {
    return {
      fields: ['nome', 'serie', 'cidade', 'estado', 'nome_mae', 'data_mens', 'action']
    }
  },
  computed: {
    ...mapGetters([
      'getStudentList'
    ])
  },
  methods: {
    ...mapActions([
      "deletarAluno"
    ]),
    navigateEdit (index) {
      router.push({path: 'aluno/'+index})
    }
  }
}
</script>

<style scoped>
  .button-container {
    margin-bottom: 20px;
  }
</style>
