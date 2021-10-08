 export default {
    data () {
      return {
        headers: [
            { text: 'Data', class: 'main-table-header', value: 'data', align: 'center' },
            { text: 'Solicitante', class: 'main-table-header', value: 'solicitante', align: 'center'},
            { text: 'Gestor', class: 'main-table-header', value: 'gestor', align:'center' },
            { text: 'Data Saída', class: 'main-table-header', value: 'dtsaida', align:'center' },
            { text: 'Hora Saída', class: 'main-table-header', value: 'hrsaida', align:'center' },
            { text: 'Retorno', class: 'main-table-header', value: 'retorno', align:'center' },
            { text: 'Motivo', class: 'main-table-header', value: 'motivo', align:'center' },
            { text: 'Status', class: 'main-table-header', value: 'status', align:'center' },
            { text: 'Ações', class: 'main-table-header', value: 'acoes', align:'center', sortable: false },
        ],
        pedidos: [
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            gestor: 'Tobias Guimaraes',
            dtsaida: "10/10/2021",
            hrsaida: '15:30',
            retorno: '16:30',
            motivo: 'Outros',
            status: 'Rejeitado',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            gestor: 'Tobias Guimaraes',
            dtsaida: "10/10/2021",
            hrsaida: '15:30',
            retorno: '16:30',
            motivo: 'Outros',
            status: 'Em análise',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            gestor: 'Tobias Guimaraes',
            dtsaida: "10/10/2021",
            hrsaida: '15:30',
            retorno: '16:30',
            motivo: 'Outros',
            status: 'Aprovado',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            gestor: 'Tobias Guimaraes',
            dtsaida: "10/10/2021",
            hrsaida: '15:30',
            retorno: '16:30',
            motivo: 'Outros',
            status: 'Rejeitado',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            gestor: 'Tobias Guimaraes',
            dtsaida: "10/10/2021",
            hrsaida: '15:30',
            retorno: '16:30',
            motivo: 'Outros',
            status: 'Aprovado',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            gestor: 'Tobias Guimaraes',
            dtsaida: "10/10/2021",
            hrsaida: '15:30',
            retorno: '16:30',
            motivo: 'Outros',
            status: 'Rejeitado',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            gestor: 'Tobias Guimaraes',
            dtsaida: "10/10/2021",
            hrsaida: '15:30',
            retorno: '16:30',
            motivo: 'Outros',
            status: 'Aprovado',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            gestor: 'Tobias Guimaraes',
            dtsaida: "10/10/2021",
            hrsaida: '15:30',
            retorno: '16:30',
            motivo: 'Outros',
            status: 'Em análise',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            gestor: 'Tobias Guimaraes',
            dtsaida: "10/10/2021",
            hrsaida: '15:30',
            retorno: '16:30',
            motivo: 'Outros',
            status: 'Em análise',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            gestor: 'Tobias Guimaraes',
            dtsaida: "10/10/2021",
            hrsaida: '15:30',
            retorno: '16:30',
            motivo: 'Outros',
            status: 'Aprovado',
          },
        ],
      }
    },
    methods: {
      getColor (status) {
        if (status == 'Em análise') return 'orange'
        else if (status == 'Rejeitado') return 'red'
        else return 'green'
      },
    },
    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
  }

  // export default {
  //   data: () => ({
  //     dialog: false,
  //     dialogDelete: false,
  //     headers: [
  //       { text: 'Data', value: 'data' },
  //       {
  //       text: 'Solicitante',
  //       align: 'start',
  //       value: 'solicitante',
  //       },
  //       { text: 'Gestor', value: 'gestor' },
  //       { text: 'Data Saída', value: 'dtsaida' },
  //       { text: 'Hora Saída', value: 'hrsaida' },
  //       { text: 'Retorno', value: 'retorno' },
  //       { text: 'Motivo', value: 'motivo' },
  //       { text: 'Status', value: 'status' },
  //       { text: 'Ações', value: 'acoes', sortable: false },
  //   ],
  //     pedidos: [],
  //     editedIndex: -1,
  //     editedItem: {
  //       data: '',
  //       solicitante: '',
  //       gestor: '',
  //       dtsaida: '',
  //       hrsaida: '',
  //       retorno: '',
  //       motivo: '',
  //       status: '',
  //     },
  //     defaultItem: {
  //       data: '',
  //       solicitante: '',
  //       gestor: '',
  //       dtsaida: '',
  //       hrsaida: '',
  //       retorno: '',
  //       motivo: '',
  //       status: '',
  //     },
  //   }),

  //   computed: {
  //     formTitle () {
  //       return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
  //     },
  //   },

  //   watch: {
  //     dialog (val) {
  //       val || this.close()
  //     },
  //     dialogDelete (val) {
  //       val || this.closeDelete()
  //     },
  //   },

  //   created () {
  //     this.initialize()
  //   },

  //   methods: {
  //     initialize () {
  //       this.pedidos = [
  //         {
  //           data: '08/10/2021',
  //           solicitante: 'Sidy Guedes',
  //           gestor: 'Tobias Guimaraes',
  //           dtsaida: "10/10/2021",
  //           hrsaida: '15:30',
  //           retorno: '16:30',
  //           motivo: 'Outros',
  //           status: 'Rejeitado',
  //         },
  //         {
  //           data: '08/10/2021',
  //           solicitante: 'Sidy Guedes',
  //           gestor: 'Tobias Guimaraes',
  //           dtsaida: "10/10/2021",
  //           hrsaida: '15:30',
  //           retorno: '16:30',
  //           motivo: 'Outros',
  //           status: 'Em análise',
  //         },
  //         {
  //           data: '08/10/2021',
  //           solicitante: 'Sidy Guedes',
  //           gestor: 'Tobias Guimaraes',
  //           dtsaida: "10/10/2021",
  //           hrsaida: '15:30',
  //           retorno: '16:30',
  //           motivo: 'Outros',
  //           status: 'Aprovado',
  //         },
  //         {
  //           data: '08/10/2021',
  //           solicitante: 'Sidy Guedes',
  //           gestor: 'Tobias Guimaraes',
  //           dtsaida: "10/10/2021",
  //           hrsaida: '15:30',
  //           retorno: '16:30',
  //           motivo: 'Outros',
  //           status: 'Rejeitado',
  //         },
  //         {
  //           data: '08/10/2021',
  //           solicitante: 'Sidy Guedes',
  //           gestor: 'Tobias Guimaraes',
  //           dtsaida: "10/10/2021",
  //           hrsaida: '15:30',
  //           retorno: '16:30',
  //           motivo: 'Outros',
  //           status: 'Aprovado',
  //         },
  //         {
  //           data: '08/10/2021',
  //           solicitante: 'Sidy Guedes',
  //           gestor: 'Tobias Guimaraes',
  //           dtsaida: "10/10/2021",
  //           hrsaida: '15:30',
  //           retorno: '16:30',
  //           motivo: 'Outros',
  //           status: 'Rejeitado',
  //         },
  //         {
  //           data: '08/10/2021',
  //           solicitante: 'Sidy Guedes',
  //           gestor: 'Tobias Guimaraes',
  //           dtsaida: "10/10/2021",
  //           hrsaida: '15:30',
  //           retorno: '16:30',
  //           motivo: 'Outros',
  //           status: 'Aprovado',
  //         },
  //         {
  //           data: '08/10/2021',
  //           solicitante: 'Sidy Guedes',
  //           gestor: 'Tobias Guimaraes',
  //           dtsaida: "10/10/2021",
  //           hrsaida: '15:30',
  //           retorno: '16:30',
  //           motivo: 'Outros',
  //           status: 'Em análise',
  //         },
  //         {
  //           data: '08/10/2021',
  //           solicitante: 'Sidy Guedes',
  //           gestor: 'Tobias Guimaraes',
  //           dtsaida: "10/10/2021",
  //           hrsaida: '15:30',
  //           retorno: '16:30',
  //           motivo: 'Outros',
  //           status: 'Em análise',
  //         },
  //         {
  //           data: '08/10/2021',
  //           solicitante: 'Sidy Guedes',
  //           gestor: 'Tobias Guimaraes',
  //           dtsaida: "10/10/2021",
  //           hrsaida: '15:30',
  //           retorno: '16:30',
  //           motivo: 'Outros',
  //           status: 'Aprovado',
  //         },
          
  //       ]
  //     },

  //     editItem (item) {
  //       this.editedIndex = this.pedidos.indexOf(item)
  //       this.editedItem = Object.assign({}, item)
  //       this.dialog = true
  //     },

  //     deleteItem (item) {
  //       this.editedIndex = this.pedidos.indexOf(item)
  //       this.editedItem = Object.assign({}, item)
  //       this.dialogDelete = true
  //     },

  //     deleteItemConfirm () {
  //       this.pedidos.splice(this.editedIndex, 1)
  //       this.closeDelete()
  //     },

  //     close () {
  //       this.dialog = false
  //       this.$nextTick(() => {
  //         this.editedItem = Object.assign({}, this.defaultItem)
  //         this.editedIndex = -1
  //       })
  //     },

  //     closeDelete () {
  //       this.dialogDelete = false
  //       this.$nextTick(() => {
  //         this.editedItem = Object.assign({}, this.defaultItem)
  //         this.editedIndex = -1
  //       })
  //     },

  //     save () {
  //       if (this.editedIndex > -1) {
  //         Object.assign(this.pedidos[this.editedIndex], this.editedItem)
  //       } else {
  //         this.pedidos.push(this.editedItem)
  //       }
  //       this.close()
  //     },
  //   },
  // }