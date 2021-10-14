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
              <v-col class="col-4 ml-15">
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
            </v-row>
            <v-divider></v-divider>
            <v-row class="col-12 mt-1">
              <v-col align="left" class="col-1 mt-5">
                <span class="font-weight-bold">Tipo:</span>
              </v-col>
              <v-col class="col-8">
                <v-radio-group v-model="tipoPedido" row dense>
                  <v-radio class="ml-7" label="saida" value="saida"></v-radio>
                  <v-radio class="ml-7" label="retorno" value="retorno"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <div v-show="tipoPedido && tipoPedido != 'retorno' ">
            <v-row class="row col-12 mt-1">
              <v-col align="left" class="col-1 mt-5">
                <span class="font-weight-bold">Motivo:</span>
              </v-col>
              <v-col class="col-11">
                <v-radio-group v-model="motivoSaida" row dense>
                  <v-radio label="Suspeita de COVID-19" value="supeita"></v-radio>
                  <v-radio label="Manutenção das PA's" value="manutencao"></v-radio>
                  <v-radio label="Contato com pessoa que testou positivo" value="contato"></v-radio>
                  <v-radio label="Outros" value="outros"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row v-show="motivoSaida && motivoSaida != 'outros' && motivoSaida != 'manutencao'" class="col-12 mt-2 mb-2">
              <v-col class="col-3">
                <v-menu ref="dataSintoma" v-model="dataSintoma" :close-on-content-click="false"
                  transition="scale-transition" offset-y max-width="290px" min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field dense outlined v-model="dataSintomaFormatada" :label="motivoSaida == 'contato' ? 'Data que teve contato' : 'Inicio dos sintomas' " persistent-hint
                      prepend-icon="mdi-calendar" v-bind="attrs" @blur="inicioSintomas = parseDate(dataSintomaFormatada)" v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="inicioSintomas" no-title @input="dataSintoma = false"></v-date-picker>
                </v-menu>
                </v-col>
                <v-col class="col-3">
                  <v-menu ref="dataRetorno" v-model="dataRetorno" :close-on-content-click="false"
                  transition="scale-transition" offset-y max-width="290px" min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      readonly dense outlined v-model="dataRetornoFormatada" label="Data de retorno" persistent-hint
                      prepend-icon="mdi-calendar" v-bind="attrs" @blur="date = parseDate(dataRetornoFormatada)" v-on="on">
                    </v-text-field>
                  </template>
                  </v-menu>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-col class="col-8 mt-10">
              <v-textarea  outlined name="input-7-4" label="Justificativa" value=""></v-textarea>
            </v-col>
            <v-divider></v-divider>
            <v-col align="left" class="col-2 mt-5">
                <span class="font-weight-bold">Anexos:</span>
            </v-col>
            <v-col class="row col-12 mb-3">
               <v-file-input
                label="Atestado médico"
                outlined
                dense
              ></v-file-input>
               <v-file-input
                label="Teste COVID-19"
                outlined
                dense
              ></v-file-input>
               <v-file-input
                label="Recomendação médica"
                outlined
                dense
              ></v-file-input>
               <v-file-input
                label="Carta trab. Home Office"
                outlined
                dense
              ></v-file-input>
            </v-col>
            <v-divider></v-divider>
            </div>
            <v-col class="col-2 mb-3 mt-3">
              <v-btn class="mr-12" color="success">
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