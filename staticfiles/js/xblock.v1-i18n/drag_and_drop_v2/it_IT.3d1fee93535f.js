
            (function(global){
                var DragAndDropI18N = {
                  init: function() {
                    

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "\n                            Please provide a description of the image for non-visual users.\n                            The description should provide sufficient information to allow anyone\n                            to solve the problem even without seeing the image.\n                        ": "\nSi prega di fornire una descrizione dell&#39;immagine per gli utenti non visivi.\n La descrizione dovrebbe fornire informazioni sufficienti per consentire a chiunque\n per risolvere il problema anche senza vedere l&#39;immagine.\n                        ",
    "(inherited from Advanced Settings)": "(ereditato da Impostazioni avanzate)",
    ", draggable": ", trascinabile",
    ", draggable, grabbed": ", trascinabile, afferrato",
    ", dropzone": ", zona di rilascio",
    "Actions": "Azioni",
    "Add a zone": "Aggiungi una zona",
    "Add an item": "Aggiungi un oggetto",
    "After All Attempts": "Dopo tutti i tentativi",
    "After All Attempts or Correct": "Dopo tutti i tentativi o corretto",
    "Always": "Sempre",
    "An error occurred. Unable to load drag and drop problem.": "Si \u00e8 verificato un errore. Impossibile caricare il problema del trascinamento della selezione.",
    "An isosceles triangle with three layers of similar height. It is shown upright, so the widest layer is located at the bottom, and the narrowest layer is located at the top.": "Un triangolo isoscele con tre strati di altezza simile. \u00c8 mostrato in verticale, quindi lo strato pi\u00f9 largo si trova nella parte inferiore e lo strato pi\u00f9 stretto si trova nella parte superiore.",
    "Answered": "Risposto",
    "Assessment": "Valutazione",
    "Attempted": "Tentato",
    "Attempted or Past Due": "Tentato o Scaduto",
    "Background Image": "Immagine di sfondo",
    "Background URL": "URL di sfondo",
    "Background description": "Descrizione sfondo",
    "Basic Settings": "Impostazioni di base",
    "Cancel": "Annulla",
    "Change background": "Cambia sfondo",
    "Close": "Chiudi",
    "Closed": "Chiuso",
    "Continue": "Continua",
    "Correct": "Corretto",
    "Correct or Past Due": "Corretto o scaduto",
    "Correct! This one belongs to The Bottom Zone.": "Corretto! Questo appartiene a The Bottom Zone.",
    "Correct! This one belongs to The Middle Zone.": "Corretto! Questo appartiene a The Middle Zone.",
    "Correct! This one belongs to The Top Zone.": "Corretto! Questo appartiene alla Zona Superiore.",
    "Correctly placed in: {zone_title}": "Inserito correttamente in: {zone_title}",
    "Correctly placed {correct_count} item": [
      "Elemento {correct_count} posizionato correttamente",
      "Elementi {correct_count} posizionati correttamente",
      "Elementi {correct_count} posizionati correttamente"
    ],
    "DEPRECATED. Keeps maximum score achieved by student as a weighted value.": "DEPRECATO. Mantiene il punteggio massimo ottenuto dallo studente come valore ponderato.",
    "Default": "Predefinito",
    "Defines the number of points the problem is worth.": "Definisce il numero di punto che il problema vale.",
    "Defines the number of times a student can try to answer this problem. If the value is not set, infinite attempts are allowed.": "Definisce il numero di volte in cui uno studente pu\u00f2 provare a rispondere a questo problema. Se il valore non \u00e8 impostato, vengono consentiti infiniti tentativi.",
    "Defines when to show the answer to the problem. A default value can be set in Advanced Settings. To revert setting a custom value, choose the 'Default' option.": "Definisce quando mostrare la risposta al problema. \u00c8 possibile impostare un valore predefinito in Impostazioni avanzate. Per ripristinare l&#39;impostazione di un valore personalizzato, scegli l&#39;opzione &quot;Predefinito&quot;.",
    "Did not place {missing_count} required item": [
      "Non \u00e8 stato inserito l&#39;elemento richiesto {missing_count}",
      "Non ho inserito gli elementi richiesti {missing_count}",
      "Non ho inserito gli elementi richiesti {missing_count}"
    ],
    "Display label names on the image": "Visualizza i nomi delle etichette sull'immagine",
    "Display the heading \"Problem\" above the problem text?": "Visualizzare l&#39;intestazione &quot;Problema&quot; sopra il testo del problema?",
    "Display the title to the learner?": "Mostra il titolo al discente?",
    "Display zone borders on the image": "Visualizza i bordi della zona sull&#39;immagine",
    "Display zone borders when dragging an item": "Visualizza i bordi della zona durante il trascinamento di un elemento",
    "Drag and Drop": "Trascina e Rilascia",
    "Drag and Drop Problem": "Problema di trascinamento della selezione",
    "Drag and Drop problems consist of draggable items and dropzones. Users should select a draggable item with their keyboard and then navigate to an appropriate dropzone to drop it.": "I problemi di trascinamento della selezione consistono in elementi trascinabili e zone di rilascio. Gli utenti devono selezionare un elemento trascinabile con la tastiera e quindi accedere alla zona di rilascio appropriata per rilasciarlo.",
    "Drag the items onto the image above.": "Trascina gli elementi sull&#39;immagine sopra.",
    "Drop Targets": "Rilascia obiettivi",
    "Explanation": "Spiegazione",
    "Explanation Text": "Testo esplicativo",
    "Feedback": "Feedback",
    "Final attempt was used, highest score is {score}": "\u00c8 stato utilizzato il tentativo finale, il punteggio pi\u00f9 alto \u00e8 {score}",
    "Final feedback": "Feedback finale",
    "Finished": "Completato",
    "For example, 'http://example.com/background.png' or '/static/background.png'.": "Ad esempio, &quot;http://example.com/ background.png&quot; o &quot;/static/ background.png&quot;.",
    "Generate image and zones": "Genera immagine e zone",
    "Generate image automatically": "Genera immagine automaticamente",
    "Go to Beginning": "Vai all&#39;inizio",
    "Goes anywhere": "Va ovunque",
    "Goes to the bottom": "Va fino in fondo",
    "Goes to the middle": "Va al centro",
    "Goes to the top": "Va in cima",
    "Good work! You have completed this drag and drop problem.": "Buon lavoro! Hai completato questo problema di trascinamento della selezione.",
    "Hints:": "Suggerimenti:",
    "I don't belong anywhere": "Non appartengo a nessun posto",
    "Incorrect": "Errato",
    "Indicates whether a learner has completed the problem at least once": "Indica se uno studente ha completato il problema almeno una volta",
    "Information about current positions of items that a learner has dropped on the target image.": "Informazioni sulle posizioni attuali degli elementi che uno studente ha lasciato cadere sull&#39;immagine target.",
    "Information about zones, items, feedback, explanation and background image for this problem. This information is derived from the input that a course author provides via the interactive editor when configuring the problem.": "Informazioni su zone, elementi, feedback, spiegazione e immagine di sfondo per questo problema. Queste informazioni derivano dall&#39;input che l&#39;autore del corso fornisce tramite l&#39;editor interattivo durante la configurazione del problema.",
    "Introductory feedback": "Feedback introduttivo",
    "Item Bank": "Banca degli articoli",
    "Item background color": "Colore di sfondo dell'oggetto",
    "Item definitions": "Definizioni degli articoli",
    "Item text color": "Coloro del testo dell'oggetto",
    "Items": "Oggetti",
    "Items placed here: ": "Elementi inseriti qui: ",
    "Keeps maximum score achieved by student as a raw value between 0 and 1.": "Mantiene il punteggio massimo ottenuto dallo studente come valore grezzo compreso tra 0 e 1.",
    "Keyboard Help": "Aiuto per la tastiera",
    "Loading drag and drop problem.": "Caricamento del problema di drag and drop.",
    "Max number of attempts reached": "Numero massimo di tentativi raggiunto",
    "Maximum attempts": "Tentativi massimi",
    "Maximum items per zone": "Numero massimo di articoli per zona",
    "Maximum score available of the problem as a raw value between 0 and 1.": "Punteggio massimo disponibile del problema come valore grezzo compreso tra 0 e 1.",
    "Misplaced {misplaced_count} item": [
      "Articolo {misplaced_count} fuori posto",
      "Oggetti {misplaced_count} fuori posto",
      "Oggetti {misplaced_count} fuori posto"
    ],
    "Misplaced {misplaced_count} item (misplaced item was returned to the item bank)": [
      "Articolo {misplaced_count} smarrito (l&#39;articolo smarrito \u00e8 stato restituito alla banca degli articoli)",
      "Articoli {misplaced_count} smarriti (gli articoli smarriti sono stati restituiti alla banca degli articoli)",
      "Articoli {misplaced_count} smarriti (gli articoli smarriti sono stati restituiti alla banca degli articoli)"
    ],
    "Mode": "Modalit\u00e0",
    "Navigate using TAB and SHIFT+TAB to the appropriate dropzone and press CTRL+M once more to drop it here.": "Naviga utilizzando TAB e MAIUSC+TAB nella zona di rilascio appropriata e premi ancora una volta CTRL+M per rilasciarla qui.",
    "Never": "Mai",
    "No items placed here": "Nessun elemento inserito qui",
    "No, this item does not belong here. Try again.": "No, questo oggetto non appartiene a questo posto. Riprova.",
    "Number of attempts learner used": "Numero di tentativi che il discente ha utilizzato",
    "Number of columns": "Numero di colonne",
    "Number of columns and rows.": "Numero di colonne e righe.",
    "Number of rows": "Numero di righe",
    "Of course it goes here! It goes anywhere!": "Ovviamente va qui! Va ovunque!",
    "Past Due": "Scaduto",
    "Placed in: {zone_title}": "Inserito in: {zone_title}",
    "Please check over your submission.": "Ti invitiamo a controllare la tua presentazione.",
    "Please check the values you entered.": "Controlla i valori inseriti.",
    "Press CTRL+M to select a draggable item (effectively picking it up).": "Premi CTRL+M per selezionare un elemento trascinabile (prelevandolo effettivamente).",
    "Press ESC if you want to cancel the drop operation (for example, to select a different item).": "Premere ESC se si desidera annullare l&#39;operazione di rilascio (ad esempio per selezionare una voce diversa).",
    "Problem": "Problema",
    "Problem Weight": "Peso del problema",
    "Problem data": "Dato del problema",
    "Problem text": "Testo del problema",
    "Provide custom image": "Fornisci un&#39;immagine personalizzata",
    "Reset": "Azzera",
    "Save": "Salva",
    "Saving": "Salvataggio in corso",
    "Show \"Problem\" heading": "Mostra l&#39;intestazione &quot;Problema&quot;.",
    "Show Answer": "Mostra Risposta",
    "Show answer": "Mostra risposta ",
    "Show title": "Mostra titolo",
    "Size of a single zone in pixels.": "Dimensione di una singola zona in pixel.",
    "Some of your answers were not correct.": "Alcune delle tue risposte non erano corrette.",
    "Standard": "Standard",
    "Standard mode: the problem provides immediate feedback each time a learner drops an item on a target zone. Assessment mode: the problem provides feedback only after a learner drops all available items on target zones.": "Modalit\u00e0 standard: il problema fornisce un feedback immediato ogni volta che uno studente lascia cadere un oggetto su una zona target. Modalit\u00e0 di valutazione: il problema fornisce feedback solo dopo che lo studente ha lasciato cadere tutti gli elementi disponibili nelle zone target.",
    "Submission deadline has passed.": "Il termine per la presentazione \u00e8 scaduto.",
    "Submit": "Invia",
    "Submitting": "In fase di invio",
    "TAB back to the list of draggable items and repeat this process until all of the draggable items have been placed on their respective dropzones.": "TAB torna all&#39;elenco degli elementi trascinabili e ripeti questo processo finch\u00e9 tutti gli elementi trascinabili non sono stati posizionati nelle rispettive zone di rilascio.",
    "Text color to use for draggable items (example: 'white' or '#ffffff').": "Colore del testo da utilizzare per gli elementi trascinabili (esempio: &quot;bianco&quot; o &quot;#ffffff&quot;).",
    "The Bottom Zone": "La zona inferiore",
    "The Middle Zone": "La zona centrale",
    "The Top Zone": "La zona superiore",
    "The answer is unavailable": "La risposta non \u00e8 disponibile",
    "The background color of draggable items in the problem (example: 'blue' or '#0000ff').": "Il colore di sfondo degli elementi trascinabili nell&#39;attivit\u00e0 (esempio: &quot;blu&quot; o &quot;#0000ff&quot;).",
    "The description of the problem or instructions shown to the learner.": "Descrizione del problema o istruzioni mostrate al discente.",
    "The title of the drag and drop problem. The title is displayed to learners.": "Il titolo del problema di trascinamento della selezione. Il titolo viene visualizzato agli studenti.",
    "There was an error with your form.": "Si \u00e8 verificato un errore con il tuo modulo.",
    "This is a screen reader-friendly problem.": "Questo \u00e8 un problema che riguarda gli screen reader.",
    "This setting limits the number of items that can be dropped into a single zone.": "Questa impostazione limita il numero di elementi che possono essere rilasciati in una singola zona.",
    "Title": "Titolo",
    "Unknown DnDv2 mode {mode} - course is misconfigured": "Modalit\u00e0 DnDv2 sconosciuta {mode} - il corso \u00e8 configurato in modo errato",
    "Unknown Zone": "Zona sconosciuta",
    "Use only TAB and SHIFT+TAB to navigate between draggable items and drop zones.": "Utilizza solo TAB e MAIUSC+TAB per spostarti tra gli elementi trascinabili e le zone di rilascio.",
    "Use this zone to associate an item with the bottom layer of the triangle.": "Utilizza questa zona per associare un oggetto allo strato inferiore del triangolo.",
    "Use this zone to associate an item with the middle layer of the triangle.": "Utilizza questa zona per associare un oggetto allo strato intermedio del triangolo.",
    "Use this zone to associate an item with the top layer of the triangle.": "Utilizza questa zona per associare un oggetto allo strato superiore del triangolo.",
    "You can complete this problem using only your keyboard by following the guidance below:": "Puoi completare questo problema utilizzando solo la tastiera seguendo le indicazioni di seguito:",
    "You cannot add any more items to this zone.": "Non puoi aggiungere altri elementi a questa zona.",
    "You have used {used} of {total} attempts.": "Hai utilizzato {used} di {total} tentativi.",
    "You silly, there are no zones for this one.": "Sciocco, non ci sono zone per questo.",
    "Your highest score is {score}": "Il tuo punteggio pi\u00f9 alto \u00e8 {score}",
    "Zone Layout": "Disposizione delle zone",
    "Zone Size": "Dimensione della zona",
    "Zone borders": "Bordi della zona",
    "Zone definitions": "Definizioni della zona",
    "Zone height": "Altezza della zona",
    "Zone labels": "Etichette della zona",
    "Zone width": "Larghezza della zona",
    "Zone {num}": [
      "Zona {num}",
      "Zona {num}",
      "Zona {num}"
    ],
    "Zones": "Zone",
    "do_attempt handler should only be called for assessment mode": "Il gestore do_attempt deve essere chiamato solo per la modalit\u00e0 di valutazione",
    "droppable": "rilasciabile",
    "show_answer handler should only be called for assessment mode": "Il gestore show_answer deve essere chiamato solo per la modalit\u00e0 di valutazione",
    "{earned}/{possible} point (graded)": [
      "{earned} / {possible} punto (classificato)",
      "{earned} / {possible} punti (classificati)",
      "{earned} / {possible} punti (classificati)"
    ],
    "{earned}/{possible} point (ungraded)": [
      "punto {earned} / {possible} (senza voto)",
      "punti {earned} / {possible} (senza valutazione)",
      "punti {earned} / {possible} (senza valutazione)"
    ],
    "{possible} point possible (graded)": [
      "{possible} punti possibili (classificati)",
      "{possible} punti possibili (classificati)",
      "{possible} punti possibili (classificati)"
    ],
    "{possible} point possible (ungraded)": [
      "{possible} punti possibili (senza valutazione)",
      "{possible} punti possibili (senza valutazione)",
      "{possible} punti possibili (senza valutazione)"
    ]
  };
  for (const key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      const value = django.catalog[msgid];
      if (typeof value === 'undefined') {
        return msgid;
      } else {
        return (typeof value === 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      const value = django.catalog[singular];
      if (typeof value === 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      let value = django.gettext(context + '\x04' + msgid);
      if (value.includes('\x04')) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      let value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.includes('\x04')) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "l d F Y H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%d/%m/%y %H:%M:%S",
      "%d/%m/%y %H:%M:%S.%f",
      "%d/%m/%y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%d-%m-%Y %H:%M:%S",
      "%d-%m-%Y %H:%M:%S.%f",
      "%d-%m-%Y %H:%M",
      "%d-%m-%y %H:%M:%S",
      "%d-%m-%y %H:%M:%S.%f",
      "%d-%m-%y %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "d F Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%Y/%m/%d",
      "%d-%m-%Y",
      "%Y-%m-%d",
      "%d-%m-%y",
      "%d/%m/%y"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d/m/Y H:i",
    "SHORT_DATE_FORMAT": "d/m/Y",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      const value = django.formats[format_type];
      if (typeof value === 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }
};


                  }
                };
                DragAndDropI18N.init();
                global.DragAndDropI18N = DragAndDropI18N;
            }(this));
        