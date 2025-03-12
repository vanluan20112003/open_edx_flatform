
            (function(global){
                var XBlockLtiConsumerI18N = {
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
    "Accept grades past deadline": "Accetta valutazioni dopo la data di scadenza",
    "Access Token URL: ": "URL del token di accesso: ",
    "Add the key/value pair for any custom parameters, such as the page your e-book should open to or the background color for this component. Ex. [\"page=1\", \"color=white\"]<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Aggiungi la coppia chiave/valore per eventuali parametri personalizzati, come la pagina in cui dovrebbe aprirsi il tuo e-book o il colore di sfondo per questo componente. Ex. [&quot;pagina=1&quot;, &quot;colore=bianco&quot;]<br /> Consulta la documentazione {docs_anchor_open} edX LTI {anchor_close} per maggiori dettagli su questa impostazione.",
    "Allow tools to manage and submit grade (programmatic)": "Consenti agli strumenti di gestire e inviare voti (programmatica)",
    "Allow tools to submit grades only (declarative)": "Consenti agli strumenti di inviare solo voti (dichiarativo)",
    "Button Text": "Testo del bottone",
    "CONFIG_ON_XBLOCK and CONFIG_EXTERNAL are not supported for LTI 1.3 Proctoring Services.": "CONFIG_ON_XBLOCK e CONFIG_EXTERNAL non sono supportati per i servizi di supervisione LTI 1.3.",
    "Cancel": "Annulla",
    "Click Cancel to return to this page without sending your information.": "Fare clic su Annulla per tornare a questa pagina senza inviare le informazioni.",
    "Click OK to have your e-mail address sent to a 3rd party application.": "Fare clic su OK per inviare il proprio indirizzo e-mail a un&#39;applicazione di terze parti.",
    "Click OK to have your full name and e-mail address sent to a 3rd party application.": "Fare clic su OK per inviare il nome completo e l&#39;indirizzo e-mail a un&#39;applicazione di terze parti.",
    "Click OK to have your full name sent to a 3rd party application.": "Fai clic su OK per inviare il tuo nome completo a un&#39;applicazione di terze parti.",
    "Click OK to have your username and e-mail address sent to a 3rd party application.": "Fare clic su OK per inviare il nome utente e l&#39;indirizzo e-mail a un&#39;applicazione di terze parti.",
    "Click OK to have your username and full name sent to a 3rd party application.": "Fare clic su OK per inviare il nome utente e il nome completo a un&#39;applicazione di terze parti.",
    "Click OK to have your username sent to a 3rd party application.": "Fai clic su OK per inviare il tuo nome utente a un&#39;applicazione di terze parti.",
    "Click OK to have your username, full name, and e-mail address sent to a 3rd party application.": "Fare clic su OK per inviare il nome utente, il nome completo e l&#39;indirizzo e-mail a un&#39;applicazione di terze parti.",
    "Client ID used by LTI tool": "ID client utilizzato dallo strumento LTI",
    "Client ID: ": "Identificativo cliente: ",
    "Client key provided by the LTI tool provider.": "Chiave client fornita dal fornitore dello strumento LTI.",
    "Client secret provided by the LTI tool provider.": "Segreto client fornito dal fornitore dello strumento LTI.",
    "Comment as returned from grader, LTI2.0 spec": "Commento come restituito dall'esaminatore, LTI2.0 spec",
    "Configuration Stored on XBlock fields": "Configurazione memorizzata sui campi XBlock",
    "Configuration Stored on external service": "Configurazione archiviata nel servizio esterno",
    "Configuration Stored on this model": "Configurazione memorizzata su questo modello",
    "Configuration Type": "Tipo di configurazione",
    "Configuration on block": "Configurazione su blocco",
    "Could not get user data for current request": "Impossibile ottenere i dati utente per la richiesta corrente",
    "Could not get user id for current request": "Impossibile ottenere l&#39;ID utente per la richiesta corrente",
    "Could not parse LTI passport: {lti_passport!r}. Should be \"id:key:secret\" string.": "Impossibile analizzare il passaporto LTI: {lti_passport!r}. Dovrebbe essere la stringa &quot;id:key:secret&quot;.",
    "Could not parse custom parameter: {custom_parameter!r}. Should be \"x=y\" string.": "Impossibile analizzare il parametro personalizzato: {custom_parameter!r}. Dovrebbe essere la stringa &quot;x=y&quot;.",
    "Custom Parameters": "Parametri personalizzati",
    "Custom Parameters must be a list": "I parametri personalizzati devono essere un elenco",
    "Custom Parameters should be strings in \"x=y\" format.": "I parametri personalizzati devono essere stringhe nel formato &quot;x=y&quot;.",
    "DEPRECATED - This is now stored in the LtiConfiguration model.": "DEPRECATO: ora \u00e8 archiviato nel modello LtiConfiguration.",
    "Database Configuration": "Configurazione della banca dati",
    "Deep Linking Launch - Configure tool": "Lancio di Deep Linking: strumento di configurazione",
    "Deep Linking Launch URL": "URL di avvio del collegamento diretto",
    "Deep Linking is configured on this tool.": "Il Deep Linking \u00e8 configurato su questo strumento.",
    "Deep linking": "Collegamento profondo",
    "Deployment ID: ": "ID distribuzione: ",
    "Disabled": "Disabilitato",
    "Display Name": "Mostra il nome",
    "Enable LTI NRPS": "Abilita LTI NRPS",
    "Enable LTI Names and Role Provisioning Services.": "Abilita nomi LTI e servizi di provisioning dei ruoli.",
    "Enable the LTI-AGS service and select the functionality enabled for LTI tools. The 'declarative' mode (default) will provide a tool with a LineItem created from the XBlock settings, while the 'programmatic' one will allow tools to manage, create and link the grades.": "Abilita il servizio LTI-AGS e seleziona la funzionalit\u00e0 abilitata per gli strumenti LTI. La modalit\u00e0 &#39;dichiarativa&#39; (predefinita) fornir\u00e0 uno strumento con un LineItem creato dalle impostazioni di XBlock, mentre quella &#39;programmatica&#39; consentir\u00e0 agli strumenti di gestire, creare e collegare i voti.",
    "Enter a description of the third party application. If requesting username and/or email, use this text box to inform users why their username and/or email will be forwarded to a third party application.": "Immettere una descrizione dell'applicazione di terze parti. Se si richiede il nome utente e/o l'email, utilizzare questa casella di testo per informare gli utenti del motivo per cui il loro nome utente e/o email verranno forniti ad un'applicazione di terze parti.",
    "Enter the LTI 1.3 Tool Launch URL. <br />This is the URL the LMS will use to launch the LTI Tool.": "Inserisci l&#39;URL di avvio dello strumento LTI 1.3.<br /> Questo \u00e8 l&#39;URL che l&#39;LMS utilizzer\u00e0 per avviare lo strumento LTI.",
    "Enter the LTI 1.3 Tool OIDC Authorization url (can also be called login or login initiation URL).<br />This is the URL the LMS will use to start a LTI authorization prior to doing the launch request.": "Inserisci l&#39;URL di autorizzazione OIDC dello strumento LTI 1.3 (pu\u00f2 anche essere chiamato accesso o URL di avvio accesso).<br /> Questo \u00e8 l&#39;URL che l&#39;LMS utilizzer\u00e0 per avviare un&#39;autorizzazione LTI prima di eseguire la richiesta di lancio.",
    "Enter the LTI 1.3 Tool's JWK keysets URL.<br />This link should retrieve a JSON file containing public keys and signature algorithm information, so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Inserisci l&#39;URL del set di chiavi JWK dello strumento LTI 1.3.<br /> Questo collegamento dovrebbe recuperare un file JSON contenente chiavi pubbliche e informazioni sull&#39;algoritmo di firma, in modo che LMS possa verificare se i messaggi e le richieste di lancio ricevute hanno la firma dello strumento.<br /> <b>Ci\u00f2 non \u00e8 necessario quando si eseguono lanci LTI 1.3 senza richieste di vantaggi LTI o risultati di base.</b>",
    "Enter the LTI 1.3 Tool's public key.<br />This is a string that starts with '-----BEGIN PUBLIC KEY-----' and is required so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Inserisci la chiave pubblica dello strumento LTI 1.3.<br /> Questa \u00e8 una stringa che inizia con &#39;-----BEGIN PUBLIC KEY-----&#39; ed \u00e8 necessaria affinch\u00e9 l&#39;LMS possa verificare se i messaggi e le richieste di lancio ricevuti hanno la firma dello strumento.<br /> <b>Ci\u00f2 non \u00e8 necessario quando si eseguono lanci LTI 1.3 senza richieste di vantaggi LTI o risultati di base.</b>",
    "Enter the LTI Advantage Deep Linking Launch URL. If the tool does not specify one, use the same value as 'Tool Launch URL'.": "Inserisci l&#39;URL di lancio del collegamento diretto LTI Advantage. Se lo strumento non ne specifica uno, utilizza lo stesso valore di &quot;URL di avvio strumento&quot;.",
    "Enter the LTI ID for the external LTI provider. This value must be the same LTI ID that you entered in the LTI Passports setting on the Advanced Settings page.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Inserisci l&#39;ID LTI per il fornitore LTI esterno. Questo valore deve essere lo stesso ID LTI immesso nell&#39;impostazione Passaporti LTI nella pagina Impostazioni avanzate.<br /> Consulta la documentazione {docs_anchor_open} edX LTI {anchor_close} per maggiori dettagli su questa impostazione.",
    "Enter the URL of the external tool that this component launches. This setting is only used when Hide External Tool is set to False.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Inserisci l&#39;URL dello strumento esterno avviato da questo componente. Questa impostazione viene utilizzata solo quando Nascondi strumento esterno \u00e8 impostato su False.<br /> Consulta la documentazione {docs_anchor_open} edX LTI {anchor_close} per maggiori dettagli su questa impostazione.",
    "Enter the desired pixel height of the iframe which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Inline.": "Inserisci l&#39;altezza in pixel desiderata dell&#39;iframe che conterr\u00e0 lo strumento LTI. Questa impostazione viene utilizzata solo quando Nascondi strumento esterno \u00e8 impostato su False e Target di avvio LTI \u00e8 impostato su Inline.",
    "Enter the desired viewport percentage height of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Inserisci l&#39;altezza percentuale della visualizzazione desiderata della sovrapposizione modale che conterr\u00e0 lo strumento LTI. Questa impostazione viene utilizzata solo quando Nascondi strumento esterno \u00e8 impostato su False e Target di lancio LTI \u00e8 impostato su Modale.",
    "Enter the desired viewport percentage width of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Inserisci la larghezza percentuale della visualizzazione desiderata della sovrapposizione modale che conterr\u00e0 lo strumento LTI. Questa impostazione viene utilizzata solo quando Nascondi strumento esterno \u00e8 impostato su False e Target di lancio LTI \u00e8 impostato su Modale.",
    "Enter the name that students see for this component. Analytics reports may also use the display name to identify this component.": "Inserisci il nome che gli studenti vedono per questo componente. I report di Analytics possono anche utilizzare il nome visualizzato per identificare questo componente.",
    "Enter the number of points possible for this component.  The default value is 1.0.  This setting is only used when Scored is set to True.": "Immettere il numero di punti possibili per questo componente.  Il valore predefinito \u00e8 1.0.  Questa impostazione \u00e8 utilizzata solo quando l'opzione Con punteggio \u00e8 impostata su True. ",
    "Enter the reusable LTI external configuration ID provided by the support staff.": "Inserisci l&#39;ID di configurazione esterna LTI riutilizzabile fornito dal personale di supporto.",
    "Enter the text on the button used to launch the third party application. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal or New Window.": "Immettere il testo sul pulsante utilizzato per avviare l&#39;applicazione di terze parti. Questa impostazione viene utilizzata solo quando Nascondi strumento esterno \u00e8 impostato su False e Target di avvio LTI \u00e8 impostato su Modale o Nuova finestra.",
    "Hide External Tool": "Nasconti Strumento Esterno",
    "If you run deep linking again, the content above will be replaced.": "Se esegui nuovamente il collegamento diretto, il contenuto sopra verr\u00e0 sostituito.",
    "If you're seeing this on a live course, please contact the course staff.": "Se lo vedi durante un corso dal vivo, contatta lo staff del corso.",
    "Inline Height": "Altezza in linea",
    "Invalid LTI configuration.": "Configurazione LTI non valida.",
    "Invalid token header. No credentials provided.": "Intestazione del token non valida. Nessuna credenziale fornita.",
    "Invalid token header. Token string should not contain spaces.": "Intestazione del token non valida. La stringa token non deve contenere spazi.",
    "Invalid token signature.": "Firma del token non valida.",
    "Keyset URL: ": "URL del set di chiavi: ",
    "LTI 1.3 Block Client ID - DEPRECATED": "LTI 1.3 Blocca ID cliente - DEPRECATO",
    "LTI 1.3 Block Key - DEPRECATED": "Chiave blocco LTI 1.3 - DEPRECATA",
    "LTI 1.3 Launches can only be performed from the LMS.": "I lanci LTI 1.3 possono essere eseguiti solo dall&#39;LMS.",
    "LTI Application Information": "Informazioni sull'applicazione LTI",
    "LTI Assignment and Grades Service": "Servizio di assegnazione e valutazione LTI",
    "LTI Configuration stored on the model for LTI 1.3 must have a value for one of lti_1p3_tool_public_key or lti_1p3_tool_keyset_url.": "La configurazione LTI archiviata nel modello per LTI 1.3 deve avere un valore tra lti_1p3_tool_public_key o lti_1p3_tool_keyset_url.",
    "LTI Configuration stores on XBlock needs a block location set.": "Gli archivi di configurazione LTI su XBlock necessitano di una posizione di blocco impostata.",
    "LTI Configuration using reusable configuration needs a external ID in \"x:y\" format.": "La configurazione LTI che usa la configurazione riutilizzabile richiede un ID esterno nel formato &quot;x:y&quot;.",
    "LTI Consumer": "Consumatore LTI",
    "LTI Deep Linking": "Collegamento profondo LTI",
    "LTI Deep Linking failed.": "Collegamento profondo LTI non riuscito.",
    "LTI ID": "LTI ID",
    "LTI Launch Target": "Obiettivo di lancio LTI",
    "LTI Reusable Configuration ID": "ID di configurazione riutilizzabile LTI",
    "LTI URL": "LTI URL",
    "LTI Version": "Versione LTI",
    "LTI configuration data.": "Dati di configurazione LTI.",
    "LTI configuration not found.": "Configurazione LTI non trovata.",
    "Login URL: ": "URL di accesso: ",
    "Missing LTI 1.3 authentication token.": "Token di autenticazione LTI 1.3 mancante.",
    "Modal Height": "Altezza modale",
    "Modal Width": "Larghezza modale",
    "No valid user id found in endpoint URL": "Nessun ID utente valido trovato nell&#39;URL dell&#39;endpoint",
    "OK": "OK",
    "Platform's generated JWK keyset.": "Set di chiavi JWK generato dalla piattaforma.",
    "Platform's generated Private key ID": "ID della chiave privata generata dalla piattaforma",
    "Platform's generated Private key. Keep this value secret.": "Chiave privata generata dalla piattaforma. Mantieni segreto questo valore.",
    "Please check that you have course staff permissions and double check this block's LTI settings.": "Verifica di disporre delle autorizzazioni del personale del corso e ricontrolla le impostazioni LTI di questo blocco.",
    "Press to Launch": "Premere per Lanciare",
    "Registered Redirect URIs": "URI di reindirizzamento registrati",
    "Request user's email": "Richiedi l'indirizzo email dell'utente",
    "Request user's full name": "Richiedi il nome completo dell&#39;utente",
    "Request user's username": "Richiedi il nome utente dell'utente",
    "Return to exam.": "Ritorno all&#39;esame.",
    "Reusable Configuration": "Configurazione riutilizzabile",
    "Reusable configuration ID must be set when using external config (Example: \"x:y\").": "L&#39;ID di configurazione riutilizzabile deve essere impostato quando si utilizza la configurazione esterna (esempio: &quot;x:y&quot;).",
    "Scored": "Con punteggio",
    "Select 'Configuration on block' to configure a new LTI Tool. If the support staff provided you with a pre-configured LTI reusable Tool ID, select'Reusable Configuration' and enter it in the text field below.": "Seleziona &quot;Configurazione su blocco&quot; per configurare un nuovo strumento LTI. Se il personale di supporto ti ha fornito un ID strumento riutilizzabile LTI preconfigurato, seleziona &quot;Configurazione riutilizzabile&quot; e inseriscilo nel campo di testo sottostante.",
    "Select Inline if you want the LTI content to open in an IFrame in the current page. Select Modal if you want the LTI content to open in a modal window in the current page. Select New Window if you want the LTI content to open in a new browser window. This setting is only used when Hide External Tool is set to False.": "Seleziona Inline se desideri che il contenuto LTI si apra in un IFrame nella pagina corrente. Seleziona Modale se desideri che il contenuto LTI si apra in una finestra modale nella pagina corrente. Seleziona Nuova finestra se desideri che il contenuto LTI si apra in una nuova finestra del browser. Questa impostazione viene utilizzata solo quando Nascondi strumento esterno \u00e8 impostato su False.",
    "Select True if this component will receive a numerical score from the external LTI system.": "Selezionare True se questo componente ricever\u00e0 un punteggio numerico dal sistema LTI esterno.",
    "Select True if you want to enable LTI Advantage Deep Linking.": "Seleziona Vero se desideri abilitare LTI Advantage Deep Linking.",
    "Select True if you want to use this component as a placeholder for syncing with an external grading  system rather than launch an external tool.  This setting hides the Launch button and any IFrames for this component.": "Selezionare True se si desidera utilizzare questo componente come segnaposto per la sincronizzazione con un sistema di valutazione esterno anzich\u00e9 avviare uno strumento esterno.  Questa impostazione nasconde il pulsante di avvio e tutti gli IFrames per questo componente.",
    "Select True to allow third party systems to post grades past the deadline.": "Selezionare True per consentire ai sistemi di terze parti di postare le valutazioni dopo la scadenza.",
    "Select True to request the user's email address.": "Seleziona True per richiedere l'indirizzo email dell'utente",
    "Select True to request the user's full name.": "Seleziona Vero per richiedere il nome completo dell&#39;utente.",
    "Select True to request the user's username.": "Seleziona True per richiedere il nome utente dell'utente",
    "Select True to send the extra parameters, which might contain Personally Identifiable Information. The processors are site-wide, please consult the site administrator if you have any questions.": "Selezionare Vero per inviare parametri aggiuntivi, che potrebbero contenere informazioni di identificazione personale. I processori sono a livello di sito, per favore consulta l&#39;amministratore del sito in caso di domande.",
    "Select how the tool's public key information will be specified.": "Seleziona la modalit\u00e0 in cui verranno specificate le informazioni sulla chiave pubblica dello strumento.",
    "Select the LTI version that your tool supports.<br />The XBlock LTI Consumer fully supports LTI 1.1.1, LTI 1.3 and LTI Advantage features.": "Seleziona la versione LTI supportata dal tuo strumento.<br /> XBlock LTI Consumer supporta completamente le funzionalit\u00e0 LTI 1.1.1, LTI 1.3 e LTI Advantage.",
    "Send extra parameters": "Invia parametri aggiuntivi",
    "Sending you back to your exam.": "Rimandandoti al tuo esame.",
    "Students don't have permissions to perform LTI Deep Linking configuration launches.": "Gli studenti non dispongono delle autorizzazioni per eseguire lanci di configurazione di LTI Deep Linking.",
    "The Deep Linking configuration stored is presented below:": "La configurazione dei collegamenti profondi memorizzata \u00e8 presentata di seguito:",
    "The LTI Deep Linking content was successfully saved in the LMS.": "Il contenuto LTI Deep Linking \u00e8 stato salvato correttamente nel sistema LMS.",
    "The URL of the external tool that initiates the launch.": "L&#39;URL dello strumento esterno che avvia l&#39;avvio.",
    "The score kept in the xblock KVS -- duplicate of the published score in django DB": "Il punteggio conservato in xblock KVS -- duplicato del punteggio pubblicato nel DB django",
    "The selected content type is not supported by Open edX.": "Il tipo di contenuto selezionato non \u00e8 supportato da Open edX.",
    "The specified LTI ID is not configured in this course's Advanced Settings.": "L&#39;ID LTI specificato non \u00e8 configurato nelle Impostazioni avanzate di questo corso.",
    "There was an error while launching the LTI tool: ": "Si \u00e8 verificato un errore durante l&#39;avvio dello strumento LTI: ",
    "There was an error while starting your LTI proctored assessment.": "Si \u00e8 verificato un errore durante l&#39;avvio della valutazione supervisionata LTI.",
    "To do that, make sure the block is published and click the link below:": "Per fare ci\u00f2, assicurati che il blocco sia pubblicato e fai clic sul collegamento seguente:",
    "To set up the LTI integration, you need to register the LMS in the tool with the information provided below.": "Per impostare l&#39;integrazione LTI, \u00e8 necessario registrare l&#39;LMS nello strumento con le informazioni fornite di seguito.",
    "Tool Initiate Login URL": "Strumento Avvia URL di accesso",
    "Tool Keyset URL": "URL del set di chiavi dello strumento",
    "Tool Launch URL": "URL di avvio dello strumento",
    "Tool Public Key": "Chiave pubblica dello strumento",
    "Tool Public Key Mode": "Modalit\u00e0 chiave pubblica dello strumento",
    "Unauthorized.": "Non autorizzato.",
    "Valid urls the Tool may request us to redirect the id token to. The redirect uris are often the same as the launch url/deep linking url so if this field is empty, it will use them as the default. If you need to use different redirect uri's, enter them here. If you use this field you must enter all valid redirect uri's the tool may request.": "URL validi a cui lo Strumento potrebbe richiederci di reindirizzare il token ID. Gli URI di reindirizzamento sono spesso gli stessi dell&#39;URL di lancio/URL del collegamento diretto, quindi se questo campo \u00e8 vuoto, li utilizzer\u00e0 come impostazione predefinita. Se \u00e8 necessario utilizzare URI di reindirizzamento diversi, inserirli qui. Se utilizzi questo campo devi inserire tutti gli URI di reindirizzamento validi che lo strumento potrebbe richiedere.",
    "You can configure this tool's content using LTI Deep Linking.": "Puoi configurare il contenuto di questo strumento utilizzando LTI Deep Linking.",
    "You can safely close this page now.": "Puoi chiudere tranquillamente questa pagina ora.",
    "You don't have access to save LTI Content Items.": "Non hai accesso per salvare elementi di contenuto LTI.",
    "[LTI]: Real user not found against anon_id: {}": "[LTI]: utente reale non trovato rispetto anon_id: {}"
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
                XBlockLtiConsumerI18N.init();
                global.XBlockLtiConsumerI18N = XBlockLtiConsumerI18N;
            }(this));
        