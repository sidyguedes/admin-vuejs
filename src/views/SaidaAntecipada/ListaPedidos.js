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

 