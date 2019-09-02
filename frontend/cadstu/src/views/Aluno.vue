<template>
  <div>
    <h2>Informações do Estudante</h2>
    <b-container>
      <b-form @submit.prevent="handleSubmit">
        <div class="form-container">
          <h3>Aluno</h3>
          <div class="row">
            <div class="col-sm-6">
              <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  type="text"
                  maxlength="100"
                  v-model="formData.nome"
                  required
                  placeholder="Digite o nome"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-3">
              <b-form-group id="input-group-2" label="Nascimento:" label-for="input-2">
                <b-form-input id="input-2" type="date" v-model="formData.nascimento" required></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-3">
              <b-form-group id="input-group-3" label="Série:" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="formData.serie"
                  :options="['1º ano', '2º ano', '3º ano', '4º ano', '5º ano', '6º ano', '7º ano', '8º ano', '9º ano']"
                  required
                ></b-form-select>
              </b-form-group>
            </div>
          </div>
        </div>
        <div class="form-container">
          <h3>Endereço</h3>
          <div class="row">
            <div class="col-sm-2">
              <b-form-group id="input-group-4" label="CEP:" label-for="input-4">
                <b-form-input 
                  id="input-4" 
                  required 
                  maxlength="8"
                  minlength="8"
                  @keyup="onKeyUp" 
                  @keydown="onKeyDown($event)"
                  v-model="formData.cep" 
                  placeholder="00000000">
                </b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-4">
              <b-form-group id="input-group-5" label="Rua:" label-for="input-5">
                <b-form-input
                  id="input-5"
                  required
                  maxlength="120"
                  v-model="formData.rua"
                  placeholder="Digite a rua"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-2">
              <b-form-group id="input-group-6" label="Número:" label-for="input-6">
                <b-form-input id="input-6" required type="number" min="0" v-model="formData.numero"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-3">
              <b-form-group id="input-group-7" label="Complemento:" label-for="input-7">
                <b-form-input
                  id="input-7"
                  maxlength="50"
                  v-model="formData.complemento"
                  placeholder="Tem algum complemento?"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <b-form-group id="input-group-8" label="Bairro:" label-for="input-8">
                <b-form-input
                  id="input-8"
                  maxlength="100"
                  required
                  v-model="formData.bairro"
                  placeholder="Digite o bairro"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-4">
              <b-form-group id="input-group-9" label="Cidade:" label-for="input-9">
                <b-form-input
                  id="input-9"
                  maxlength="100"
                  required
                  v-model="formData.cidade"
                  placeholder="Digite a cidade"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-1">
              <b-form-group id="input-group-10" label="Estado:" label-for="input-10">
                <b-form-input
                  id="input-10"
                  maxlength="2"
                  required
                  v-model="formData.estado"
                  placeholder="UF"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
        </div>
        <div class="form-container">
          <h3>Mãe do Aluno</h3>
          <div class="row">
            <div class="col-sm-6">
              <b-form-group id="input-group-11" label="Nome:" label-for="input-11">
                <b-form-input
                  id="input-11"
                  type="text"
                  maxlength="100"
                  v-model="formData.nome_mae"
                  required
                  placeholder="Digite o nome"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-3">
              <b-form-group id="input-group-12" label="CPF:" label-for="input-12">
                <b-form-input
                  id="input-12"
                  v-model="formData.cpf_mae"
                  placeholder="000.000.000-00"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-3">
              <b-form-group id="input-group-13" label="Data para pagamento:" label-for="input-13">
                <b-form-input id="input-13" v-model="formData.data_mens" type="date" required></b-form-input>
              </b-form-group>
            </div>
          </div>
        </div>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions } from "vuex"
export default {
  data() {
    return {
      formData: {
        nome: "",
        nascimento: "",
        serie: null,
        cep: "",
        rua: "",
        numero: null,
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        nome_mae: "",
        cpf_mae: "",
        data_mens: null
      },
      cepValido: false
    };
  },
  methods: {
    ...mapActions([
      "novoAluno"
      ]),
    handleSubmit() {
      if(this.cepValido){
        const aluno = this.formData;
        const payload = {
          aluno
        };
        this.novoAluno(payload);

        // reset form data
        this.formData = {
          nome: "",
          nascimento: "",
          serie: null,
          cep: "",
          rua: "",
          numero: null,
          complemento: "",
          bairro: "",
          cidade: "",
          estado: "",
          nome_mae: "",
          cpf_mae: "",
          data_mens: null
        }
        this.cepValido = false
      }else {
        alert("Cep não válido")
      }
    },
    onKeyDown: function (e) {
      if (
        // permite somente numeros
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 96 && e.keyCode <= 105) ||
        // permite teclas lado direito, esquerdo, delete, backspace, tab e enter
        /^(8|9|13|46|37|39|17)$/.test(e.keyCode) ||
        // permite ctrl+ c,v,x,a,z
        (/^(67|86|88|65|90)$/.test(e.keyCode) && e.ctrlKey)
      ) {
        return
      }
      e.preventDefault()
      e.stopPropagation()
    },
    onKeyUp: function () {
      if (!/^[0-9]{8}$/.test(this.formData.cep)) return
      let url = 'https://viacep.com.br/ws/' + this.formData.cep + '/json/'
      Vue.axios.get(url)
        .then((response) => {
          console.log(response)
          if(response.data.erro){
            this.formData.rua = ""
            this.formData.bairro = ""
            this.formData.cidade = ""
            this.formData.estado = ""
            this.cepValido = false
            alert("Cep não válido")
          }
          else{
            this.formData.rua = response.data.logradouro
            this.formData.bairro = response.data.bairro
            this.formData.cidade = response.data.localidade
            this.formData.estado = response.data.uf
            this.cepValido = true
          }
      })
    }
  }
}
</script>

<style scoped>
.form-container {
  background: rgb(172, 212, 172);
  padding: 10px;
  margin: 20px 0;
  border-radius: 10px;
}
h3 {
  font-size: 18px;
  font-weight: bold;
}
</style>
