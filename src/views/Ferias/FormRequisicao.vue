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
                <v-select
                  prepend-icon="mdi-account-outline"
                  dense
                  outlined
                  v-model="selectFuncionario"
                  :items="funcionarios"
                  :rules="[v => !!v || 'Item is required']"
                  label="Funcionário"
                  required
                ></v-select>
              </v-col>
              <v-col class="col-4 ml-15">
                <v-menu
                  v-model="inicioFerias"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      dense
                      outlined
                      v-model="dataInicioFeriasFormatada"
                      label="Data de Início"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    locale="pt-br"
                    v-model="dataSaidaFerias"
                    @input="inicioFerias = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="row col-12 mt-1">
              <v-col align="left" class="col-2 mt-5">
                <span class="font-weight-bold">Abono Pecuniário:</span>
              </v-col>
              <v-col class="col-3">
                <v-sheet>
                  <v-switch v-model="abonoPecuniario" inset></v-switch>
                </v-sheet>
              </v-col>
              <v-col align="left" class="col-3 mt-5">
                <span class="font-weight-bold">Adiantamento 1ª Parcela 13º Salário:</span>
              </v-col>
              <v-col class="col-4">
                <v-sheet>
                  <v-switch v-model="adiantamento13" inset></v-switch>
                </v-sheet>
              </v-col>
            </v-row>
            <v-row class="row col-12">
                <v-col class="col-3">
                    <v-file-input
                        label="Carta de Abono"
                        outlined
                        dense
                    ></v-file-input>
                </v-col>
                <v-col class="col-2"></v-col>
                <v-col class="col-3">
                    <v-file-input
                        label="Carta adiantamento"
                        outlined
                        dense
                    ></v-file-input>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-col class="col-8 mt-10">
              <v-textarea outlined name="input-7-4" label="Justificativa" value></v-textarea>
            </v-col>
            <v-divider></v-divider>
            <v-col class="col-2 mb-3 mt-3">
              <v-btn class="mr-12" color="success">Cadastrar</v-btn>
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