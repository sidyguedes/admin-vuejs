import moment from 'moment';
export default {
    data:() => ({
        dataSintomaContato: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        dataSaidaHome: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        tipoPedido: false,
        select: false,
        dataSaida: false,
        motivoSaida: false,
        dataSintoma: false,
        inicioSintomas: false,
        dataRetornoEmpresa: false,
        dataRet: false,
        labelSintomaRetorno: false,

        funcionarios: [
        'Tobias Guimaraes',
        'Elisabete Ranciaro',
        'Josiane Oliveira Krainski',
        'Kezia de Lima Freitas',
        'Angela Maria Marcondes dos Santo',
        'Beatriz Graeser Macioski	2329	',
        'Come',
        'Danielle Cristine de Souza	2272	d',
        'Edilamar do Rocio Medeiros	3440	e',
        'Fabia Marques Costacurta Rodrigues	2262',
        'Gilvana Camila Pereira Machado	2258',
        'Gustavo Henrique Zoca	2',
        'Regiane Eveline de Brito	2266',
        'Joao Carlos Zanetti	',
        'Alejandro Pietry Ribeiro Trindade		al',
        'Alisson Couto	2',
        'Ana Maria Rolao Dos Santos Va'
        
      ],
     
    }),
    computed: {
      dataSaidaFormatada() {
        return moment(this.dataSaidaHome).format('DD/MM/YYYY');
      },
      dataSintomasFormatada() {
        return moment(this.dataSintomaContato).format('DD/MM/YYYY');
      },
      dataRetornoFormatada() {
        this.dataRet = moment(this.dataSintomaContato).add(10, 'days').toDate();
        return moment(this.dataRet).format('DD/MM/YYYY');
      },
      labelMotivoSaida() {
        if (this.motivoSaida == 'contato') {
          this.labelSintomaRetorno = "Data que teve contato";
        }else if(this.motivoSaida == 'suspeita'){
          this.labelSintomaRetorno = "Inicio dos sintomas"; 
        }else{
          this.labelSintomaRetorno = "";
        }
        return this.labelSintomaRetorno;
 
      }
    }

  }