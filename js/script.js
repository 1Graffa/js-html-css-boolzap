var app = new Vue({
  el : '#app',
  data : {
    ddContatto: false,
    ricerca: "",
    showModal : true,
    emoji: false,
    modal : true,
    off : false,
    orario: "",
    nuovoMessaggio : "",
    risposta: "",
    selected: 0,
    contatti: [
      { nome:"Super Man",
        visible: true,
        ddContatto: false,
        avatar: "img/superman.jpg",
        messaggi: [
          { testo: "Ciao Clark 😊",
            classe: "sent",
            orario: "9:00",
            menu: "hidden"
          },
          { testo: "Wonder 😎",
            classe: "received",
            orario: "9:00",
            menu: "hidden"
          },
          { testo: "Sto organizzando una festa a sorpresa per il bday di Batman, tieniti libero per venerdì sera",
            classe: "sent",
            orario: "9:01",
            menu: "hidden"
          },
          { testo: "Ho l'anniversario con Lois... comunque sarò in entrambi i luoghi simultaneamente e questo grazie alla mia super velocità, non vi accorgerete neanche di niente",
            classe: "received",
            orario: "9:01",
            menu: "hidden"
          },
          { testo: "sì certo.. prepara i 100 dollari.. sei il solito sborone 😑",
            classe: "sent",
            orario: "9:03",
            menu: "hidden"
          }
        ]
      },
      { nome:"Spider Man",
        visible: true,
        ddContatto: false,
        avatar: "img/ragno.jpg",
        messaggi: [
          { testo: "Ciao Spiday, venerdì sera compleanno di Batman! sono 100 dollari a testa se vuoi partecipare con noi al regalo",
            classe: "sent",
            orario: "9:04",
            menu: "hidden"
          },
          { testo: "grazie ma per la quota, faccio da me... ovviamente ci sono ma dove si festeggia?",
            classe: "received",
            orario: "9:05",
            menu: "hidden"
          },
          { testo: "Se riesco scrocchiamo alla reggia di Iron Man 😏",
            classe: "sent",
            orario: "9:07",
            menu: "hidden"
          }
        ]
      },
      { nome:"Iron Man",
        visible: true,
        ddContatto: false,
        avatar: "img/iron.jpg",
        messaggi: [
          { testo: "Sto organizzando una festa a sorpresa per Batman, tieniti libero per venerdì sera",
            classe: "sent",
            orario: "9:00",
            menu: "hidden"
          },
          { testo:"Ooook zuccherino! io gli ho già preso un Bat Yacht che lo farà impazzire .. in merito al posto ? dove?",
            classe: "received",
            orario: "9:07",
            menu: "hidden"
          },
          { testo: "ermmh.. siamo ancora indecisi🤔! ti faccio sapere appena so, ma come sempre penso si vada al risparmio",
            classe: "sent",
            orario: "9:08",
            menu: "hidden"
          },
          { testo: "No macchè, tutti da me a sbocciare di brutto 🤑! ",
          classe: "received",
          orario: "9:07",
          menu: "hidden"
          }
        ]
      },
      { nome:"Deadpool",
        visible: true,
        ddContatto: false,
        avatar: "img/dead.jpg",
        messaggi: [
          { testo: "buongiorno Dead",
            classe: "sent",
            orario: "9:08",
            menu: "hidden"
          },
          { testo: "buongiorno amore mio 😘!",
            classe: "received",
            orario: "9:09",
            menu: "hidden"
          },
          { testo: "ahahha dove? nei tuoi sogni!? senti... per venerdì sera sei libero?",
            classe: "sent",
            orario: "9:10",
            menu: "hidden"
          },
          { testo: "compleanno di Batman so già tutto, ci sono e porto il vino yahoooooo",
            classe: "received",
            orario: "9:11",
            menu: "hidden"
          },
          { testo: "ok, non fare spoiler a Robin che non è invitato💩",
            classe: "sent",
            orario: "9:10",
            menu: "hidden"
          },
        ]
      },
      { nome:"Robin",
        visible: true,
        ddContatto: false,
        avatar: "img/robin.jpg",
        messaggi: [
          { testo: "buongiornissimo!!1! venerdì è il compleanno di Batman!",
            classe: "received",
            orario: "9:04",
            menu: "hidden"
          }
        ]
      },
      { nome:"Hulk",
        visible: true,
        ddContatto: false,
        avatar: "img/hulk.jpg",
        messaggi: [
          { testo: "buongiorno Bruce 😀",
            classe: "sent",
            orario: "9:10",
            menu: "hidden"
          },
          { testo: "Hulk SPACCA!",
            classe: "received",
            orario: "9:10",
            menu: "hidden"
          },
          { testo: "..oh no 😓",
            classe: "sent",
            orario: "9:11",
            menu: "hidden"
          },
          {testo: "Hulk DISTRUGGEEEE!",
            classe: "received",
            orario: "9:13",
            menu: "hidden"
          },
          {testo: "Hulk FORTEEEEEEEEEEEEEEE!",
            classe: "received",
            orario: "9:14",
            menu: "hidden"
          },
          {
          testo: "Hulk VERDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!",
            classe: "received",
            orario: "9:15",
            menu: "hidden"
          }
        ]
      },
      { nome:"Batman",
        visible: true,
        ddContatto: false,
        avatar: "img/bat.jpg",
        messaggi: [
          { testo: "sospetto qualcosa 😜",
            classe: "received",
            orario: "8:04",
            menu: "hidden"
          },
          { testo: "fingiti sorpeso o ti spezzo le ali 😁",
            classe: "sent",
            orario: "8:05",
            menu: "hidden"
          },
          { testo: "....😅",
            classe: "received",
            orario: "8:06",
            menu: "hidden"
          },
          { testo: "Robin sa qualcosa?  ... giusto per sapere 😁",
            classe: "received",
            orario: "8:07",
            menu: "hidden"
          }
        ]
      }
    ]
  },
  created() {
    // Con set interval aggiorna automaticamente l'ultimo accesso e cambia l'ora di scrittura dei messaggi inviati e ricevuti in base all'orario di scittura senza aggiornare quelli già stampati
    setInterval(this.getNow, 0001);
  },
  methods: {
    // ORA e MINUTI
    getNow: function() {
      const oggi = new Date();
      //l'if è per visualizzare 2 cifre negli orari tra 0 e 10 h o min
      const ora = (oggi.getHours() < 10 ? "0" : "") + oggi.getHours() + ":" + (oggi.getMinutes() < 10 ? "0" : "") + oggi.getMinutes();
      this.orario = ora;
    },// svuota i messaggi della chat
    svuotaChat(){
      this.contatti[this.selected].messaggi.splice(0);
    },// elimina tutta la conversazione
    eliminaChat(e,index){
      this.contatti.splice(index,1);
    },//elimina singolo messaggio dalla chat
    eliminaMessaggio(index){
      this.contatti[this.selected].messaggi.splice(index,1);
    },//apri e chiudi tendina emoticon
    toggleE(){
      this.emoji = !this.emoji
    },//apri e chiudi tendina messaggi chat
    tendinaM(index){
      if (this.contatti[this.selected].messaggi[index].menu == 'hidden'){
        this.contatti[this.selected].messaggi[index].menu = 'show'
      } else {
        this.contatti[this.selected].messaggi[index].menu = "hidden"
      }
    },//apri e chiudi tendina dai contatti
    toggleC(index){
      this.contatti[index].ddContatto = !this.contatti[index].ddContatto;
      console.log(this.contatti[index].ddContatto);
    },// switcha campana
    onOFF(){
      this.off = !this.off;
    },// dai active al click (contatti)
    daiClassActive(index){
      this.selected = index;
    },//inserisci messaggio in chat
    inserisciMessaggio() {
      let inserita = {
        testo: this.nuovoMessaggio,
        classe: "sent",
        orario: this.orario,
        menu: "hidden"
      }
      this.contatti[this.selected].messaggi.push(inserita);
      this.nuovoMessaggio = "";
      // timer per risposta a seguire
      setTimeout(this.rispAutomatica,1000);
    },//risposta automatica
    rispAutomatica() {
      let risposta ={
        testo: "Sei grande Wonder Woman 😊",
        classe: "received",
        orario: this.orario,
        menu: "hidden"
      }
      this.contatti[this.selected].messaggi.push(risposta);
    },//FILTRO
    filtraContatti() {
      console.log(this.ricerca);
      this.contatti.forEach(item => {
        if (item.nome.toLowerCase().includes(this.ricerca.toLowerCase())) {
          item.visible = true;
          console.log(this.contatti);
        } else {
          item.visible = false;
        }
      });
    }
  }
});
