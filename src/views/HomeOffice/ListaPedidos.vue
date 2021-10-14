<template>
  <v-app class="mainBackGround">
    <div class="col-12">
      <v-card elevation="1" class="mx-auto mt-3">
        <v-card-text>
          <v-toolbar flat>
            <v-toolbar-title class="title-toolbar">Lista de Pedidos</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <router-link to="/FormRequisicaoHomeOffice">
            <v-btn color="#07456a" dark >
              <v-icon class="mr-3">mdi-clock-plus-outline</v-icon>Novo Pedido
            </v-btn>
            </router-link>
          </v-toolbar>
          <v-data-table :headers="headers" :items="pedidos" class="elevation-1">
            <template v-slot:item.status="{ item }">
              <v-chip x-small chip :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
            </template>
            <template v-slot:item.acoes="{ item }">
            <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
            >
                mdi-pencil
            </v-icon>
            <v-icon
                small
                class="mr-2"
                @click="deleteItem(item)"
            >
                mdi-delete
            </v-icon>
            <v-icon
                small
                @click="deleteItem(item)"
            >
                mdi-eye
            </v-icon>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </div>
  </v-app>
</template>

<style lang="scss">
@import "./ListaPedidos.scss";
</style>

<script src="./ListaPedidos.js"></script>