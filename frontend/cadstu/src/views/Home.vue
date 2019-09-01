<template>
  <div class="home">
    <div class="button-container">
      <router-link to="/aluno" class="btn btn-primary">Novo Estudante</router-link>
    </div>
    <b-container>
      <div class="table-container">
        <b-table striped hover :fields="fields" :items="getStudentList">
          <template slot="[nome]" slot-scope="data">
            <router-link :to="`students/${data.index}`">
              {{ data.value }}
            </router-link>
          </template>
          <template slot="[action]">
            <b-button size="sm" class="mr-2">
              Deletar
            </b-button>
            <b-button size="sm" class="mr-2">
              Editar
            </b-button>
          </template>
        </b-table>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      fields: ['nome', 'série', 'cidade', 'estado', 'nome_mae', 'data_mens', 'action']
    }
  },
  computed: {
    ...mapGetters([
      'getStudentList'
    ])
  }
}
</script>

<style scoped>
  .button-container {
    margin-bottom: 20px;
  }
</style>
