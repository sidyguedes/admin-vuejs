<template>
  <v-app class="mainBackGround">
    <div class="col-12">
      <v-card elevation="1" class="mx-auto mt-3">
        <v-card-text>
          <v-toolbar flat>
            <v-toolbar-title class="title-toolbar">Novo Pedido</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
          </v-toolbar>
          <v-form ref="form" lazy-validation>
            <v-row class="col-12 mt-1 mb-3">
              <v-col class="col-4">
                <v-select prepend-icon="mdi-account-outline" dense outlined v-model="select" :items="funcionarios"
                  :rules="[v => !!v || 'Item is required']" label="Funcionário" required></v-select>
              </v-col>
              <v-col class="col-4">
                <v-menu ref="dataSaida" v-model="dataSaida" :close-on-content-click="false"
                  transition="scale-transition" offset-y max-width="290px" min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field dense outlined v-model="dataSaidaFormatada" label="Data de saída" persistent-hint
                      prepend-icon="mdi-calendar" v-bind="attrs" @blur="date = parseDate(dataSaidaFormatada)" v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title @input="dataSaida = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col>
                <v-menu ref="teste" v-model="hrSaida" :close-on-content-click="false" :nudge-right="40"
                  :return-value.sync="saida" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field dense outlined v-model="saida" label="Horário de saída"
                      prepend-icon="mdi-clock-time-four-outline" readonly v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-time-picker format="24hr" v-if="hrSaida" v-model="saida" full-width @click:minute="$refs.teste.save(saida)">
                  </v-time-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="col-12 mt-1">
              <v-col align="left" class="col-3 mt-5">
                <span class="font-weight-bold">Retornará para a empresa?</span>
              </v-col>
              <v-col class="col-2 mr-5">
                <v-sheet>
                  <v-switch v-model="retornoEmpresa" inset></v-switch>
                </v-sheet>
              </v-col>
              <v-col>
                <v-col align="left" class="col-5">
                  <v-menu ref="menu" v-model="hrRetorno" :close-on-content-click="false" :nudge-right="40"
                    :return-value.sync="retorno" transition="scale-transition" offset-y max-width="290px"
                    min-width="290px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field :disabled="!retornoEmpresa" dense outlined v-model="retorno" label="Retorno previsto"
                        prepend-icon="mdi-clock-time-four-outline" readonly v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-time-picker format="24hr" v-if="hrRetorno" v-model="retorno" full-width
                      @click:minute="$refs.menu.save(retorno)"></v-time-picker>
                  </v-menu>
                </v-col>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="col-12 mt-1 mb-3">
              <v-col align="left" class="col-1 mt-5">
                <span class="font-weight-bold">Motivo:</span>
              </v-col>
              <v-col class="col-8">
                <v-radio-group v-model="motivoSaida" row dense>
                  <v-radio class="ml-7" label="Consulta/Exames médicos" value="consulta"></v-radio>
                  <v-radio class="ml-7" label="A trabalho" value="trabalho"></v-radio>
                  <v-radio class="ml-7" label="Outros" value="outros"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-col class="col-8 mt-10">
              <v-textarea v-show="motivoSaida && motivoSaida != 'consulta'" outlined name="input-7-4" label="Justificativa" value=""></v-textarea>
            </v-col>
            <v-divider></v-divider>
            <v-col class="col-2">
              <v-btn class="mr-12 mb-8" color="success">
                Cadastrar
              </v-btn>
            </v-col>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </v-app>
</template>

<style lang="scss">
  @import "./FormRequisicao.scss";
</style>

<script src="./FormRequisicao.js"></script>