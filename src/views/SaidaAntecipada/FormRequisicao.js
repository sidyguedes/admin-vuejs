import moment from 'moment';
export default {
    data:() => ({
      dataSaidaFerias: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dataSaida: false,
      retornoEmpresa: false,
      motivoSaida: false,
      retorno: null,
      hrRetorno: false,
      saida: null,
      hrSaida: false,
      select: null,

      
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
        'Ana Maria Rolao Dos Santos Va',
        'Andre Luis Burei do Ca',
        'Bruno Noveli	3',
        'Caio Henrique Piantikovicz		c',
        'Caio L.K Schinemann	',
        'Charles Juan da Silva Mendes'
        
      ],
     
    }),

    computed: {
      dataSaidaFormatada() {
        return moment(this.dataSaidaFerias).format('DD/MM/YYYY');
      }
    }

  }