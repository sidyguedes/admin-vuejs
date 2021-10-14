export default {
    data () {
      return {
        headers: [
            { text: 'Data', class: 'main-table-header', value: 'data', align: 'center' },
            { text: 'Solicitante', class: 'main-table-header', value: 'solicitante', align: 'center'},
            { text: 'Funcionario', class: 'main-table-header', value: 'funcionario', align:'center' },
            { text: 'Saída', class: 'main-table-header', value: 'saida', align:'center' },
            { text: 'Retorno', class: 'main-table-header', value: 'retorno', align:'center' },
            { text: 'Retorno Previsto', class: 'main-table-header', value: 'retornoPrevisto', align:'center' },
            { text: 'Tipo', class: 'main-table-header', value: 'tipo', align:'center' },
            { text: 'Motivo', class: 'main-table-header', value: 'motivo', align:'center' },
            { text: 'Satus', class: 'main-table-header', value: 'status', align:'center' },
            { text: 'Ações', class: 'main-table-header', value: 'acoes', align:'center', sortable: false },
        ],
        pedidos: [
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            saida: "10/10/2021",
            retorno: '15:30',
            retornoPrevisto: '16:30',
            motivo: 'Outros',
            tipo: 'Outros',
            status: 'Rejeitado',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            saida: "10/10/2021",
            retorno: '15:30',
            retornoPrevisto: '16:30',
            motivo: 'Outros',
            tipo: 'Outros',
            status: 'Em análise',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            saida: "10/10/2021",
            retorno: '15:30',
            retornoPrevisto: '16:30',
            motivo: 'Outros',
            tipo: 'Outros',
            status: 'Aprovado',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            saida: "10/10/2021",
            retorno: '15:30',
            retornoPrevisto: '16:30',
            motivo: 'Outros',
            tipo: 'Outros',
            status: 'Rejeitado',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            saida: "10/10/2021",
            retorno: '15:30',
            retornoPrevisto: '16:30',
            motivo: 'Outros',
            tipo: 'Outros',
            status: 'Aprovado',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            saida: "10/10/2021",
            retorno: '15:30',
            retornoPrevisto: '16:30',
            motivo: 'Outros',
            tipo: 'Outros',
            status: 'Rejeitado',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            saida: "10/10/2021",
            retorno: '15:30',
            retornoPrevisto: '16:30',
            motivo: 'Outros',
            tipo: 'Outros',
            status: 'Aprovado',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            saida: "10/10/2021",
            retorno: '15:30',
            retornoPrevisto: '16:30',
            motivo: 'Outros',
            tipo: 'Outros',
            status: 'Em análise',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            saida: "10/10/2021",
            retorno: '15:30',
            retornoPrevisto: '16:30',
            motivo: 'Outros',
            tipo: 'Outros',
            status: 'Em análise',
          },
          {
            data: '08/10/2021',
            solicitante: 'Sidy Guedes',
            funcionario: 'Tobias Guimaraes',
            saida: "10/10/2021",
            retorno: '15:30',
            retornoPrevisto: '16:30',
            motivo: 'Outros',
            tipo: 'Outros',
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

 