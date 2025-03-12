
            (function(global){
                var RecommenderXBlockI18N = {
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
    "&lt; Related resources": "&lt; Risorse correlate",
    "A resource was clicked": "\u00c8 stata fatta clic su una risorsa",
    "Add new resource": "Aggiungi nuova risorsa",
    "Add new resource &gt;&gt;": "Aggiungi nuova risorsa &gt;&gt;",
    "Add resource": "Aggiungi risorsa",
    "Back to resource list mode": "Torna alla modalit\u00e0 elenco risorse",
    "Check the icon to endorse this resource": "Controlla l&#39;icona per sostenere questa risorsa",
    "Click to view resources for removal": "Fare clic per visualizzare le risorse per la rimozione",
    "Click to view resources in ordinary decreasing-vote order": "Fare clic per visualizzare le risorse nell&#39;ordinario ordine decrescente di voto",
    "Configuration setting": "Impostazione di configurazione",
    "Cut-and-paste the URL of the resource.": "Taglia e incolla l&#39;URL della risorsa.",
    "Delete this resource": "Elimina questa risorsa",
    "Description": "Descrizione",
    "Do you want to disable the UX functions which are under development?": "Vuoi disabilitare le funzioni UX in fase di sviluppo?",
    "Do you want to take users on a little tour when they see the RecommenderXBlock first time?": "Vuoi accompagnare gli utenti in un piccolo tour quando vedono RecommenderXBlock per la prima volta?",
    "Download resources": "Scarica risorse",
    "Downvote if the resource is not helpful": "Sottovaluta se la risorsa non \u00e8 utile",
    "Edit existing resource": "Modifica risorsa esistente",
    "Edit the resource and make it more helpful for other students with this problem. Please do not give the answer directly.": "Modifica la risorsa e rendila pi\u00f9 utile per gli altri studenti con questo problema. Per favore non dare la risposta direttamente.",
    "Edit this resource": "Modifica questa risorsa",
    "Endorse Resource": "Approvare la risorsa",
    "Endorse resource": "Approvare la risorsa",
    "Endorse resource without permission": "Approva la risorsa senza autorizzazione",
    "Endorse this resource and give the reason why you do that.": "Sostieni questa risorsa e spiega il motivo per cui lo fai.",
    "Entering add resource mode": "Accesso alla modalit\u00e0 Aggiungi risorsa",
    "Entering edit resource mode": "Accesso alla modalit\u00e0 di modifica delle risorse",
    "Entering flag resource mode": "Accesso alla modalit\u00e0 risorsa flag",
    "Entering import resource mode": "Accesso alla modalit\u00e0 di importazione delle risorse",
    "Export resources": "Esporta risorse",
    "Flag Resource": "Segnala risorsa",
    "Flag resource": "Segnala risorsa",
    "Flag this resource as problematic and give your reason": "Contrassegna questa risorsa come problematica e spiega il motivo",
    "From page {fromPage} To page {toPage}": "Dalla pagina {fromPage} Alla pagina {toPage}",
    "Give a meaningful reason for why this resource should be removed": "Fornisci una ragione significativa per cui questa risorsa dovrebbe essere rimossa",
    "Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title": "Fornire un paragrafo di riepilogo della risorsa; il riepilogo dovrebbe essere pi\u00f9 dettagliato di quello fornito nel titolo",
    "Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them": "Fornire un breve riassunto (1-3 frasi) della risorsa; idealmente, dovrebbe essere conciso, ma fornire dettagli sufficienti per far sapere agli studenti se queste risorse sono loro utili",
    "Go back to the main list": "Torna all&#39;elenco principale",
    "Here is a list of reasons why students think this resource problematic:": "Ecco un elenco dei motivi per cui gli studenti ritengono che questa risorsa sia problematica:",
    "Hide related resources": "Nascondi risorse correlate",
    "Hide the recommendations list": "Nascondi l&#39;elenco dei consigli",
    "Hovering resource": "Risorsa in bilico",
    "How many page icons in pagination control (i.e., page range)? The icons for pages from (current page - page range) to (current page + page range) will be shown.": "Quante icone di pagina nel controllo dell&#39;impaginazione (ad esempio, intervallo di pagine)? Verranno visualizzate le icone per le pagine da (pagina corrente - intervallo di pagine) a (pagina corrente + intervallo di pagine).",
    "How many resources you want to show in each page of the resource list?": "Quante risorse vuoi mostrare in ogni pagina dell&#39;elenco delle risorse?",
    "Import resources": "Importa risorse",
    "Invalid location URL provided": "URL di posizione fornito non valido",
    "Location": "Posizione",
    "No": "No",
    "Only staff can import resources": "Solo il personale pu\u00f2 importare risorse",
    "Please submit the JSON file obtained with the download resources button": "Invia il file JSON ottenuto con il pulsante Scarica risorse",
    "Preview image (typically, a screenshot)": "Immagine di anteprima (in genere, uno screenshot)",
    "Preview screenshot:": "Schermata di anteprima:",
    "Provide a file of resource list in JSON format": "Fornire un file con l&#39;elenco delle risorse in formato JSON",
    "Provide a file of resource screenshot": "Fornire un file di screenshot della risorsa",
    "Provide a meaningful description so other students know whether this is useful to them": "Fornisci una descrizione significativa in modo che gli altri studenti sappiano se \u00e8 utile a loro",
    "Provide a meaningful title so other students know whether this is useful to them": "Fornisci un titolo significativo in modo che gli altri studenti sappiano se \u00e8 utile a loro",
    "Provide a resource description": "Fornire una descrizione della risorsa",
    "Provide a resource location in url, required": "Fornire una posizione della risorsa nell&#39;URL, obbligatorio",
    "Provide a resource screenshot": "Fornisci uno screenshot della risorsa",
    "Provide a resource title, required": "Fornire un titolo della risorsa, obbligatorio",
    "Reason": "Motivo ",
    "Reason for why this resource should be endorsed": "Motivo per cui questa risorsa dovrebbe essere approvata",
    "Reason for why this resource should be flagged": "Motivo per cui questa risorsa dovrebbe essere contrassegnata",
    "Reason for why this resource should be removed": "Motivo per cui questa risorsa dovrebbe essere rimossa",
    "Recommend a new resource which may be helpful to other students solving this problem": "Consiglia una nuova risorsa che potrebbe essere utile ad altri studenti per risolvere questo problema",
    "Remove Resource": "Rimuovi risorsa",
    "Remove resource": "Rimuovi risorsa",
    "Remove this resource and give the reason why you do that": "Rimuovi questa risorsa e spiega il motivo per cui lo fai",
    "Remove this resource and give the reason why you do that.": "Rimuovi questa risorsa e spiega il motivo per cui lo fai.",
    "Resource title": "Titolo della risorsa",
    "Resource: ": "Risorsa: ",
    "Resources (in JSON format):": "Risorse (in formato JSON):",
    "Save change": "Salva modifica",
    "Set the student-view, client side configurations for RecommenderXblock.": "Imposta le configurazioni lato client e vista studente per RecommenderXblock.",
    "Show a list of student-recommented related resources": "Mostra un elenco di risorse correlate consigliate dagli studenti",
    "Show related resources": "Mostra risorse correlate",
    "Size of uploaded file exceeds threshold": "La dimensione del file caricato supera la soglia",
    "Suggest a resource which can help other students with this problem. Please do not give the answer directly.": "Suggerisci una risorsa che possa aiutare altri studenti con questo problema. Per favore non dare la risposta direttamente.",
    "Suggest resource": "Suggerisci risorsa",
    "The configuration of pyfs is not properly set": "La configurazione di pyfs non \u00e8 impostata correttamente",
    "The content you typed has not been submitted yet. Are you sure to go back?": "Il contenuto che hai digitato non \u00e8 stato ancora inviato. Sei sicuro di tornare indietro?",
    "The reason why it is endorsed is:": "Il motivo per cui \u00e8 approvato \u00e8:",
    "The resource you are attempting to provide already exists": "La risorsa che stai tentando di fornire esiste gi\u00e0",
    "The resource you are attempting to provide has been disallowed by the staff. Reason: ": "La risorsa che stai tentando di fornire non \u00e8 stata consentita dallo staff. Motivo: ",
    "The selected resource does not exist": "La risorsa selezionata non esiste",
    "This is a list of recommended resources. If you\\": "Questo \u00e8 un elenco di risorse consigliate. Se tu\\",
    "This is a list of resources your fellow students thought might be helpful. If you find another useful resource, either on edx.org or elsewhere, please add it. If you can improve the description or preview of a resource, please do so as well. If you find a resource helpful, upvote it. If it&rsquo;s not so helpful, downvote it. If it has issues (illegal material, incorrect, etc.), please flag it and let us know the reason.": "Questo \u00e8 un elenco di risorse che i tuoi compagni studenti ritengono possano essere utili. Se trovi un&#39;altra risorsa utile, su edx.org o altrove, aggiungila. Se puoi migliorare la descrizione o l&#39;anteprima di una risorsa, fallo anche tu. Se trovi utile una risorsa, votala. Se non \u00e8 cos\u00ec utile, sottovalutalo. Se presenta problemi (materiale illegale, errato, ecc.), segnalalo e facci sapere il motivo.",
    "This resource is endorsed by staff": "Questa risorsa \u00e8 approvata dal personale",
    "This will be a list of resources your fellow students thought might be helpful, but it is empty currently. If you find useful resources, either on edx.org or elsewhere, please add it.": "Questo sar\u00e0 un elenco di risorse che i tuoi compagni studenti ritengono potrebbero essere utili, ma al momento \u00e8 vuoto. Se trovi risorse utili, su edx.org o altrove, aggiungile.",
    "Title": "Titolo",
    "Tried to access flagged resources without staff permission": "Ho tentato di accedere alle risorse contrassegnate senza l&#39;autorizzazione dello staff",
    "Unendorse resource": "Annullare l&#39;approvazione della risorsa",
    "Unflag resource": "Deseleziona risorsa",
    "Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them": "Carica uno screenshot di anteprima (in GIF/PNG/JPG) della risorsa; idealmente, questo dovrebbe far sapere agli studenti se queste risorse sono loro utili",
    "Upload resources": "Carica risorse",
    "Upload resources in JSON format to the database.": "Carica le risorse in formato JSON nel database.",
    "Upvote if the resource is helpful": "Vota se la risorsa \u00e8 utile",
    "Votes": "Voti",
    "Why would you like to flag this resource? The staff will review all flagged resources, and remove inappropriate ones (spam, incorrect, abusive, etc.). Giving a clear reason will help us do this efficiently.": "Perch\u00e9 vorresti segnalare questa risorsa? Lo staff esaminer\u00e0 tutte le risorse segnalate e rimuover\u00e0 quelle inappropriate (spam, errate, abusive, ecc.). Fornire una motivazione chiara ci aiuter\u00e0 a farlo in modo efficiente.",
    "Yes": "Si",
    "You don't have the permission to remove this resource": "Non hai l&#39;autorizzazione per rimuovere questa risorsa",
    "cancel and go back to resource list": "annulla e torna all&#39;elenco delle risorse",
    "mode": "modalit\u00e0",
    "votes": "voti"
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
                RecommenderXBlockI18N.init();
                global.RecommenderXBlockI18N = RecommenderXBlockI18N;
            }(this));
        