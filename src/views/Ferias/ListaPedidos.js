export default {
    data () {
      return {
        headers: [
            { text: 'Data', class: 'main-table-header', value: 'data', align: 'center' },
            { text: 'Solicitante', class: 'main-table-header', value: 'solicitante', align: 'center'},
            { text: 'Funcionario', class: 'main-table-header', value: 'funcionario', align:'center' },
            { text: 'Inicio', class: 'main-table-header', value: 'inicio', align:'center' },
            { text: 'Retorno', class: 'main-table-header', value: 'retorno', align:'center' },
            { text: 'Dias', class: 'main-table-header', value: 'dias', align:'center' },
            { text: 'Abono pec.', class: 'main-table-header', value: 'abono', align:'center' },
            { text: 'Adiant. 13º', class: 'main-table-header', value: 'adiantamento', align:'center' },
            { text: 'Carta abono', class: 'main-table-header', value: 'cartaabono', align:'center' },
            { text: 'Carta Adiant.', class: 'main-table-header', value: 'cartaadiant', align:'center'},
            { text: 'Status', class: 'main-table-header', value: 'status', align:'center'},
            { text: 'Ações', class: 'main-table-header', value: 'acoes', align:'center' },
        ],
        pedidos: [
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            inicio: "10/10/2021",
            retorno: '15:30',
            dias: '16:30',
            abono: 'SIM',
            adiantamento: 'SIM',
            cartaabono: 'carta',
            cartaadiant: 'carta',
            status: 'Aprovado',

          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            inicio: "10/10/2021",
            retorno: '15:30',
            dias: '16:30',
            abono: 'SIM',
            adiantamento: 'SIM',
            cartaabono: 'carta',
            cartaadiant: 'carta',
            status: 'Em análise',

          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            inicio: "10/10/2021",
            retorno: '15:30',
            dias: '16:30',
            abono: 'SIM',
            adiantamento: 'SIM',
            cartaabono: 'carta',
            cartaadiant: 'carta',
            status: 'Aprovado',

          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            inicio: "10/10/2021",
            retorno: '15:30',
            dias: '16:30',
            abono: 'SIM',
            adiantamento: 'SIM',
            cartaabono: 'carta',
            cartaadiant: 'carta',
            status: 'Em análise',

          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            inicio: "10/10/2021",
            retorno: '15:30',
            dias: '16:30',
            abono: 'SIM',
            adiantamento: 'SIM',
            cartaabono: 'carta',
            cartaadiant: 'carta',
            status: 'Aprovado',

          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            inicio: "10/10/2021",
            retorno: '15:30',
            dias: '16:30',
            abono: 'SIM',
            adiantamento: 'SIM',
            cartaabono: 'carta',
            cartaadiant: 'carta',
            status: 'Rejeitado',

          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            inicio: "10/10/2021",
            retorno: '15:30',
            dias: '16:30',
            abono: 'SIM',
            adiantamento: 'SIM',
            cartaabono: 'carta',
            cartaadiant: 'carta',
            status: 'Aprovado',

          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            inicio: "10/10/2021",
            retorno: '15:30',
            dias: '16:30',
            abono: 'SIM',
            adiantamento: 'SIM',
            cartaabono: 'carta',
            cartaadiant: 'carta',
            status: 'Rejeitado',

          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            inicio: "10/10/2021",
            retorno: '15:30',
            dias: '16:30',
            abono: 'SIM',
            adiantamento: 'SIM',
            cartaabono: 'carta',
            cartaadiant: 'carta',
            status: 'Rejeitado',

          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            inicio: "10/10/2021",
            retorno: '15:30',
            dias: '16:30',
            abono: 'SIM',
            adiantamento: 'SIM',
            cartaabono: 'carta',
            cartaadiant: 'carta',
            status: 'Rejeitado',

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

 