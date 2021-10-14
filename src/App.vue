<template>
  <v-app>
    <v-main>
      <div id="app">
        <v-app-bar color="#1c4363" dense dark>
           <v-app-bar-nav-icon @click.stop="mini = !mini" class="d-flex flex-row "></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
        </v-app-bar>
        <v-navigation-drawer
          v-model="drawer"
          :mini-variant.sync="mini"
          class="main-navigation"
          dark
          app
        >
          <v-list>
            <v-list-item>
              <v-img
                class="main-logo"
                src="http://www.econeteditora.com.br/rh_online/img/logo_topo.png"
              ></v-img>
            </v-list-item >
          </v-list>
          <v-divider></v-divider>
          <v-list nav dense>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-calendar-clock</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                <router-link to="/ListaPedidosSaida">Saída Antecipada</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title><router-link to="/ListaPedidosHome">Home Office</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-airplane</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Férias</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-cash</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Promoção</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-remove</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Desligamento</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-convert</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Transferência</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-needle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Vacinação</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-school</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Subsídio Estudantil</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>
  
  <style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #647f99;
  a {
    text-decoration: none;
    color: inherit;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #42566b;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main-navigation {
  background-color: #1c4363 !important;
}

</style>
  <script>
export default {
  data() {
    return {
      drawer: true,
      mini: true
    };
  }
};
</script>
  
  