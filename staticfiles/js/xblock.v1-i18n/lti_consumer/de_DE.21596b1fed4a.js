
            (function(global){
                var XBlockLtiConsumerI18N = {
                  init: function() {
                    

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = (n != 1);
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "Accept grades past deadline": "Benotungen nach abgelaufener Frist annehmen.",
    "Access Token URL: ": "Zugriffstoken-URL: ",
    "Add the key/value pair for any custom parameters, such as the page your e-book should open to or the background color for this component. Ex. [\"page=1\", \"color=white\"]<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "F\u00fcgen Sie das Schl\u00fcssel/Wert-Paar f\u00fcr alle benutzerdefinierten Parameter hinzu, z. B. die Seite, auf der Ihr E-Book ge\u00f6ffnet werden soll, oder die Hintergrundfarbe f\u00fcr diese Komponente. Ex. [&quot;page=1&quot;, &quot;color=white&quot;]<br /> Weitere Einzelheiten zu dieser Einstellung finden Sie in der {docs_anchor_open} edX LTI-Dokumentation {anchor_close} .",
    "Allow tools to manage and submit grade (programmatic)": "Tools erlauben, Noten zu verwalten und einzureichen (programmatisch)",
    "Allow tools to submit grades only (declarative)": "Tools d\u00fcrfen nur Noten \u00fcbermitteln (deklarativ)",
    "Button Text": "Schaltfl\u00e4chentext",
    "CONFIG_ON_XBLOCK and CONFIG_EXTERNAL are not supported for LTI 1.3 Proctoring Services.": "CONFIG_ON_XBLOCK und CONFIG_EXTERNAL werden f\u00fcr LTI 1.3 Proctoring Services nicht unterst\u00fctzt.",
    "Cancel": "L\u00f6schen",
    "Click Cancel to return to this page without sending your information.": "Klicken Sie auf \u201eAbbrechen\u201c, um zu dieser Seite zur\u00fcckzukehren, ohne Ihre Informationen zu senden.",
    "Click OK to have your e-mail address sent to a 3rd party application.": "Klicken Sie auf \u201eOK\u201c, damit Ihre E-Mail-Adresse an eine Drittanbieteranwendung gesendet wird.",
    "Click OK to have your full name and e-mail address sent to a 3rd party application.": "Klicken Sie auf \u201eOK\u201c, damit Ihr vollst\u00e4ndiger Name und Ihre E-Mail-Adresse an eine Drittanbieteranwendung gesendet werden.",
    "Click OK to have your full name sent to a 3rd party application.": "Klicken Sie auf \u201eOK\u201c, damit Ihr vollst\u00e4ndiger Name an eine Drittanbieteranwendung gesendet wird.",
    "Click OK to have your username and e-mail address sent to a 3rd party application.": "Klicken Sie auf \u201eOK\u201c, damit Ihr Benutzername und Ihre E-Mail-Adresse an eine Drittanbieteranwendung gesendet werden.",
    "Click OK to have your username and full name sent to a 3rd party application.": "Klicken Sie auf \u201eOK\u201c, damit Ihr Benutzername und Ihr vollst\u00e4ndiger Name an eine Drittanbieteranwendung gesendet werden.",
    "Click OK to have your username sent to a 3rd party application.": "Klicken Sie auf \u201eOK\u201c, damit Ihr Benutzername an eine Drittanbieteranwendung gesendet wird.",
    "Click OK to have your username, full name, and e-mail address sent to a 3rd party application.": "Klicken Sie auf \u201eOK\u201c, damit Ihr Benutzername, Ihr vollst\u00e4ndiger Name und Ihre E-Mail-Adresse an eine Drittanbieteranwendung gesendet werden.",
    "Client ID used by LTI tool": "Vom LTI-Tool verwendete Client-ID",
    "Client ID: ": "Kunden ID: ",
    "Client key provided by the LTI tool provider.": "Vom LTI-Tool-Anbieter bereitgestellter Client-Schl\u00fcssel.",
    "Client secret provided by the LTI tool provider.": "Vom LTI-Tool-Anbieter bereitgestelltes Client-Geheimnis.",
    "Comment as returned from grader, LTI2.0 spec": "Kommentare, wie sie durch den Bewerter zur\u00fcckgegeben worden sind, nach Spezifikation LTI2.0 spec.",
    "Configuration Stored on XBlock fields": "Auf XBlock-Feldern gespeicherte Konfiguration",
    "Configuration Stored on external service": "Konfiguration auf externem Dienst gespeichert",
    "Configuration Stored on this model": "Auf diesem Modell gespeicherte Konfiguration",
    "Configuration Type": "Konfigurationstyp",
    "Configuration on block": "Konfiguration auf Block",
    "Could not get user data for current request": "F\u00fcr die aktuelle Anfrage konnten keine Benutzerdaten abgerufen werden",
    "Could not get user id for current request": "Die Benutzer-ID f\u00fcr die aktuelle Anfrage konnte nicht abgerufen werden",
    "Could not parse LTI passport: {lti_passport!r}. Should be \"id:key:secret\" string.": "Der LTI-Pass konnte nicht analysiert werden: {lti_passport!r}. Sollte die Zeichenfolge \u201eid:key:secret\u201c sein.",
    "Could not parse custom parameter: {custom_parameter!r}. Should be \"x=y\" string.": "Benutzerdefinierter Parameter konnte nicht analysiert werden: {custom_parameter!r}. Sollte die Zeichenfolge \u201ex=y\u201c sein.",
    "Custom Parameters": "Individuelle Parameter",
    "Custom Parameters must be a list": "Benutzerdefinierte Parameter m\u00fcssen eine Liste sein",
    "Custom Parameters should be strings in \"x=y\" format.": "Benutzerdefinierte Parameter sollten Zeichenfolgen im Format \u201ex=y\u201c sein.",
    "DEPRECATED - This is now stored in the LtiConfiguration model.": "VERALTET \u2013 Dies ist jetzt im LtiConfiguration-Modell gespeichert.",
    "Database Configuration": "Datenbankkonfiguration",
    "Deep Linking Launch - Configure tool": "Deep Linking Launch \u2013 Tool konfigurieren",
    "Deep Linking Launch URL": "Deep Linking-Start-URL",
    "Deep Linking is configured on this tool.": "Deep Linking ist auf diesem Tool konfiguriert.",
    "Deep linking": "Deep-Linking",
    "Deployment ID: ": "Bereitstellungs-ID: ",
    "Disabled": "Deaktiviert",
    "Display Name": "Anzeigename",
    "Enable LTI NRPS": "Aktivieren Sie LTI NRPS",
    "Enable LTI Names and Role Provisioning Services.": "Aktivieren Sie LTI-Namen und Rollenbereitstellungsdienste.",
    "Enable the LTI-AGS service and select the functionality enabled for LTI tools. The 'declarative' mode (default) will provide a tool with a LineItem created from the XBlock settings, while the 'programmatic' one will allow tools to manage, create and link the grades.": "Aktivieren Sie den LTI-AGS-Dienst und w\u00e4hlen Sie die f\u00fcr LTI-Tools aktivierte Funktionalit\u00e4t aus. Der \u201edeklarative\u201c Modus (Standard) stellt einem Tool ein LineItem zur Verf\u00fcgung, das aus den XBlock-Einstellungen erstellt wurde, w\u00e4hrend der \u201eprogrammatische\u201c Modus es Tools erm\u00f6glicht, die Noten zu verwalten, zu erstellen und zu verkn\u00fcpfen.",
    "Enter a description of the third party application. If requesting username and/or email, use this text box to inform users why their username and/or email will be forwarded to a third party application.": "Geben Sie eine Beschreibung der Drittanbieteranwendung ein. Wenn Sie einen Benutzernamen und/oder eine E-Mail anfordern, verwenden Sie dieses Textfeld, um die Benutzer dar\u00fcber zu informieren, warum ihr Benutzername und/oder ihre E-Mail an eine Drittanbieteranwendung weitergeleitet wird.",
    "Enter the LTI 1.3 Tool Launch URL. <br />This is the URL the LMS will use to launch the LTI Tool.": "Geben Sie die Start-URL des LTI 1.3-Tools ein.<br /> Dies ist die URL, die das LMS zum Starten des LTI-Tools verwendet.",
    "Enter the LTI 1.3 Tool OIDC Authorization url (can also be called login or login initiation URL).<br />This is the URL the LMS will use to start a LTI authorization prior to doing the launch request.": "Geben Sie die OIDC-Autorisierungs-URL des LTI 1.3-Tools ein (kann auch als Anmelde- oder Anmeldeinitiierungs-URL bezeichnet werden).<br /> Dies ist die URL, die das LMS verwendet, um eine LTI-Autorisierung zu starten, bevor die Startanforderung ausgef\u00fchrt wird.",
    "Enter the LTI 1.3 Tool's JWK keysets URL.<br />This link should retrieve a JSON file containing public keys and signature algorithm information, so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Geben Sie die JWK-Keysets-URL des LTI 1.3 Tools ein.<br /> Dieser Link sollte eine JSON-Datei mit \u00f6ffentlichen Schl\u00fcsseln und Informationen zum Signaturalgorithmus abrufen, damit das LMS pr\u00fcfen kann, ob die empfangenen Nachrichten und Startanfragen die Signatur des Tools haben.<br /> <b>Dies ist nicht erforderlich, wenn LTI 1.3-Starts ohne LTI Advantage- oder Basic Outcomes-Anfragen durchgef\u00fchrt werden.</b>",
    "Enter the LTI 1.3 Tool's public key.<br />This is a string that starts with '-----BEGIN PUBLIC KEY-----' and is required so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Geben Sie den \u00f6ffentlichen Schl\u00fcssel des LTI 1.3 Tools ein.<br /> Dies ist eine Zeichenfolge, die mit \u201e-----BEGIN PUBLIC KEY-----\u201c beginnt und erforderlich ist, damit das LMS pr\u00fcfen kann, ob die empfangenen Nachrichten und Startanfragen die Signatur des Tools haben.<br /> <b>Dies ist nicht erforderlich, wenn LTI 1.3-Starts ohne LTI Advantage- oder Basic Outcomes-Anfragen durchgef\u00fchrt werden.</b>",
    "Enter the LTI Advantage Deep Linking Launch URL. If the tool does not specify one, use the same value as 'Tool Launch URL'.": "Geben Sie die LTI Advantage Deep Linking-Start-URL ein. Wenn das Tool keines angibt, verwenden Sie denselben Wert wie \u201eTool-Start-URL\u201c.",
    "Enter the LTI ID for the external LTI provider. This value must be the same LTI ID that you entered in the LTI Passports setting on the Advanced Settings page.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Geben Sie die LTI-ID f\u00fcr den externen LTI-Anbieter ein. Bei diesem Wert muss es sich um dieselbe LTI-ID handeln, die Sie in der Einstellung \u201eLTI-P\u00e4sse\u201c auf der Seite \u201eErweiterte Einstellungen\u201c eingegeben haben.<br /> Weitere Einzelheiten zu dieser Einstellung finden Sie in der {docs_anchor_open} edX LTI-Dokumentation {anchor_close} .",
    "Enter the URL of the external tool that this component launches. This setting is only used when Hide External Tool is set to False.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Geben Sie die URL des externen Tools ein, das diese Komponente startet. Diese Einstellung wird nur verwendet, wenn \u201eExternes Tool ausblenden\u201c auf \u201eFalsch\u201c gesetzt ist.<br /> Weitere Einzelheiten zu dieser Einstellung finden Sie in der {docs_anchor_open} edX LTI-Dokumentation {anchor_close} .",
    "Enter the desired pixel height of the iframe which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Inline.": "Geben Sie die gew\u00fcnschte Pixelh\u00f6he des Iframes ein, der das LTI-Tool enthalten soll. Diese Einstellung wird nur verwendet, wenn \u201eExternes Tool ausblenden\u201c auf \u201eFalsch\u201c und \u201eLTI-Startziel\u201c auf \u201eInline\u201c festgelegt ist.",
    "Enter the desired viewport percentage height of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Geben Sie die gew\u00fcnschte prozentuale H\u00f6he des Ansichtsfensters der modalen \u00dcberlagerung ein, die das LTI-Werkzeug enthalten soll. Diese Einstellung wird nur verwendet, wenn \u201eExternes Tool ausblenden\u201c auf \u201eFalsch\u201c und \u201eLTI-Startziel\u201c auf \u201eModal\u201c eingestellt ist.",
    "Enter the desired viewport percentage width of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Geben Sie die gew\u00fcnschte prozentuale Breite des Ansichtsfensters der modalen \u00dcberlagerung ein, die das LTI-Werkzeug enthalten soll. Diese Einstellung wird nur verwendet, wenn \u201eExternes Tool ausblenden\u201c auf \u201eFalsch\u201c und \u201eLTI-Startziel\u201c auf \u201eModal\u201c eingestellt ist.",
    "Enter the name that students see for this component. Analytics reports may also use the display name to identify this component.": "Geben Sie den Namen ein, den die Sch\u00fcler f\u00fcr diese Komponente sehen. Analytics-Berichte verwenden m\u00f6glicherweise auch den Anzeigenamen, um diese Komponente zu identifizieren.",
    "Enter the number of points possible for this component.  The default value is 1.0.  This setting is only used when Scored is set to True.": "Gib die Anzahl der Punkte, die durch diese Komponente erreichbar sind, ein. Der Standardwert ist 1.0. Diese Einstellung wird nur benutzt, wenn \"Bewertet\" auf \"Wahr\" gesetzt ist.",
    "Enter the reusable LTI external configuration ID provided by the support staff.": "Geben Sie die wiederverwendbare externe LTI-Konfigurations-ID ein, die Sie vom Support-Personal erhalten haben.",
    "Enter the text on the button used to launch the third party application. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal or New Window.": "Geben Sie den Text auf der Schaltfl\u00e4che ein, die zum Starten der Drittanbieteranwendung verwendet wird. Diese Einstellung wird nur verwendet, wenn \u201eExternes Tool ausblenden\u201c auf \u201eFalsch\u201c und \u201eLTI-Startziel\u201c auf \u201eModal\u201c oder \u201eNeues Fenster\u201c eingestellt ist.",
    "Hide External Tool": "Verstecke externes Werkzeug",
    "If you run deep linking again, the content above will be replaced.": "Wenn Sie die Deep-Linking-Funktion erneut ausf\u00fchren, wird der obige Inhalt ersetzt.",
    "If you're seeing this on a live course, please contact the course staff.": "Wenn Sie dies bei einem Live-Kurs sehen, wenden Sie sich bitte an das Kurspersonal.",
    "Inline Height": "Inline-H\u00f6he",
    "Invalid LTI configuration.": "Ung\u00fcltige LTI-Konfiguration.",
    "Invalid token header. No credentials provided.": "Ung\u00fcltiger Token-Header. Keine Anmeldeinformationen angegeben.",
    "Invalid token header. Token string should not contain spaces.": "Ung\u00fcltiger Token-Header. Die Tokenzeichenfolge darf keine Leerzeichen enthalten.",
    "Invalid token signature.": "Ung\u00fcltige Tokensignatur.",
    "Keyset URL: ": "Schl\u00fcsselsatz-URL: ",
    "LTI 1.3 Block Client ID - DEPRECATED": "LTI 1.3 Block-Client-ID \u2013 VERALTET",
    "LTI 1.3 Block Key - DEPRECATED": "LTI 1.3-Blockschl\u00fcssel \u2013 VERALTET",
    "LTI 1.3 Launches can only be performed from the LMS.": "LTI 1.3-Starts k\u00f6nnen nur \u00fcber das LMS durchgef\u00fchrt werden.",
    "LTI Application Information": "LTI Bewerbungsinformation",
    "LTI Assignment and Grades Service": "LTI-Zuweisungs- und Notenservice",
    "LTI Configuration stored on the model for LTI 1.3 must have a value for one of lti_1p3_tool_public_key or lti_1p3_tool_keyset_url.": "Die im Modell f\u00fcr LTI 1.3 gespeicherte LTI-Konfiguration muss einen Wert f\u00fcr lti_1p3_tool_public_key oder lti_1p3_tool_keyset_url haben.",
    "LTI Configuration stores on XBlock needs a block location set.": "F\u00fcr LTI-Konfigurationsspeicher auf XBlock ist ein Blockspeicherortsatz erforderlich.",
    "LTI Configuration using reusable configuration needs a external ID in \"x:y\" format.": "F\u00fcr die LTI-Konfiguration mit wiederverwendbarer Konfiguration ist eine externe ID im Format \u201ex:y\u201c erforderlich.",
    "LTI Consumer": "LTI-Verbraucher",
    "LTI Deep Linking": "LTI Deep Linking",
    "LTI Deep Linking failed.": "LTI Deep Linking ist fehlgeschlagen.",
    "LTI ID": "LTI ID",
    "LTI Launch Target": "LTI-Startziel",
    "LTI Reusable Configuration ID": "Wiederverwendbare LTI-Konfigurations-ID",
    "LTI URL": "LTI URL",
    "LTI Version": "LTI-Version",
    "LTI configuration data.": "LTI-Konfigurationsdaten.",
    "LTI configuration not found.": "LTI-Konfiguration nicht gefunden.",
    "Login URL: ": "Login-URL: ",
    "Missing LTI 1.3 authentication token.": "Fehlendes LTI 1.3-Authentifizierungstoken.",
    "Modal Height": "Modale H\u00f6he",
    "Modal Width": "Modale Breite",
    "No valid user id found in endpoint URL": "In der Endpunkt-URL wurde keine g\u00fcltige Benutzer-ID gefunden",
    "OK": "OK",
    "Platform's generated JWK keyset.": "Der von der Plattform generierte JWK-Schl\u00fcsselsatz.",
    "Platform's generated Private key ID": "Die von der Plattform generierte private Schl\u00fcssel-ID",
    "Platform's generated Private key. Keep this value secret.": "Der von der Plattform generierte private Schl\u00fcssel. Halten Sie diesen Wert geheim.",
    "Please check that you have course staff permissions and double check this block's LTI settings.": "Bitte \u00fcberpr\u00fcfen Sie, ob Sie \u00fcber Berechtigungen f\u00fcr Kursmitarbeiter verf\u00fcgen, und \u00fcberpr\u00fcfen Sie die LTI-Einstellungen dieses Blocks noch einmal.",
    "Press to Launch": "Klicken Sie zum Start",
    "Registered Redirect URIs": "Registrierte Weiterleitungs-URIs",
    "Request user's email": "E-Mail-Adresse des Nutzers anfragen",
    "Request user's full name": "Fordern Sie den vollst\u00e4ndigen Namen des Benutzers an",
    "Request user's username": "Frage den Benutzernamen des Nutzers ab",
    "Return to exam.": "Zur\u00fcck zur Pr\u00fcfung.",
    "Reusable Configuration": "Wiederverwendbare Konfiguration",
    "Reusable configuration ID must be set when using external config (Example: \"x:y\").": "Bei Verwendung einer externen Konfiguration muss eine wiederverwendbare Konfigurations-ID festgelegt werden (Beispiel: \u201ex:y\u201c).",
    "Scored": "Erzielte Punkte",
    "Select 'Configuration on block' to configure a new LTI Tool. If the support staff provided you with a pre-configured LTI reusable Tool ID, select'Reusable Configuration' and enter it in the text field below.": "W\u00e4hlen Sie \u201eKonfiguration im Block\u201c, um ein neues LTI-Tool zu konfigurieren. Wenn Sie vom Support-Personal eine vorkonfigurierte wiederverwendbare LTI-Tool-ID erhalten haben, w\u00e4hlen Sie \u201eWiederverwendbare Konfiguration\u201c und geben Sie diese in das Textfeld unten ein.",
    "Select Inline if you want the LTI content to open in an IFrame in the current page. Select Modal if you want the LTI content to open in a modal window in the current page. Select New Window if you want the LTI content to open in a new browser window. This setting is only used when Hide External Tool is set to False.": "W\u00e4hlen Sie \u201eInline\u201c, wenn der LTI-Inhalt in einem IFrame auf der aktuellen Seite ge\u00f6ffnet werden soll. W\u00e4hlen Sie \u201eModal\u201c, wenn der LTI-Inhalt in einem modalen Fenster auf der aktuellen Seite ge\u00f6ffnet werden soll. W\u00e4hlen Sie \u201eNeues Fenster\u201c, wenn der LTI-Inhalt in einem neuen Browserfenster ge\u00f6ffnet werden soll. Diese Einstellung wird nur verwendet, wenn \u201eExternes Tool ausblenden\u201c auf \u201eFalsch\u201c gesetzt ist.",
    "Select True if this component will receive a numerical score from the external LTI system.": "W\u00e4hle \"Wahr\", wenn diese Komponente eine numerische Benotung durch das externe LTI-System erh\u00e4lt.",
    "Select True if you want to enable LTI Advantage Deep Linking.": "W\u00e4hlen Sie \u201eTrue\u201c, wenn Sie LTI Advantage Deep Linking aktivieren m\u00f6chten.",
    "Select True if you want to use this component as a placeholder for syncing with an external grading  system rather than launch an external tool.  This setting hides the Launch button and any IFrames for this component.": "W\u00e4hle \"Wahr\" falls du diese Komponente als Platzhalter f\u00fcr die Synchronisation mit externen Bewertungssystemen, anstelle des Starts eines externen Werkzeugs, nutzen willst. Diese Einstellung versteckt den Startknopf und alle IFrames f\u00fcr diese Komponente.",
    "Select True to allow third party systems to post grades past the deadline.": "W\u00e4hlen Sie True, damit Drittsysteme Noten \u00fcber den Stichtag hinaus ver\u00f6ffentlichen k\u00f6nnen.",
    "Select True to request the user's email address.": "W\u00e4hlen Sie True, um die E-Mail-Adresse des Benutzer anzufordern",
    "Select True to request the user's full name.": "W\u00e4hlen Sie \u201eTrue\u201c, um den vollst\u00e4ndigen Namen des Benutzers anzufordern.",
    "Select True to request the user's username.": "W\u00e4hlen Sie True, um den Benutzername des Teilnehmers anzufordern.",
    "Select True to send the extra parameters, which might contain Personally Identifiable Information. The processors are site-wide, please consult the site administrator if you have any questions.": "W\u00e4hlen Sie \u201eTrue\u201c, um die zus\u00e4tzlichen Parameter zu senden, die m\u00f6glicherweise personenbezogene Daten enthalten. Die Auftragsverarbeiter sind standortweit t\u00e4tig. Bei Fragen wenden Sie sich bitte an den Site-Administrator.",
    "Select how the tool's public key information will be specified.": "W\u00e4hlen Sie aus, wie die \u00f6ffentlichen Schl\u00fcsselinformationen des Tools angegeben werden.",
    "Select the LTI version that your tool supports.<br />The XBlock LTI Consumer fully supports LTI 1.1.1, LTI 1.3 and LTI Advantage features.": "W\u00e4hlen Sie die LTI-Version aus, die Ihr Tool unterst\u00fctzt.<br /> Der XBlock LTI Consumer unterst\u00fctzt die Funktionen LTI 1.1.1, LTI 1.3 und LTI Advantage vollst\u00e4ndig.",
    "Send extra parameters": "Senden Sie zus\u00e4tzliche Parameter",
    "Sending you back to your exam.": "Ich schicke Sie zur\u00fcck zu Ihrer Pr\u00fcfung.",
    "Students don't have permissions to perform LTI Deep Linking configuration launches.": "Die Sch\u00fcler sind nicht berechtigt, LTI Deep Linking-Konfigurationsstarts durchzuf\u00fchren.",
    "The Deep Linking configuration stored is presented below:": "Die gespeicherte Deep Linking-Konfiguration wird unten dargestellt:",
    "The LTI Deep Linking content was successfully saved in the LMS.": "Der LTI Deep Linking-Inhalt wurde erfolgreich im LMS gespeichert.",
    "The URL of the external tool that initiates the launch.": "Die URL des externen Tools, das den Start initiiert.",
    "The score kept in the xblock KVS -- duplicate of the published score in django DB": "Die Noten werden in dem xblock KVS aufbewahrt -- Kopien der ver\u00f6ffentlichten Noten in der django DB",
    "The selected content type is not supported by Open edX.": "Der ausgew\u00e4hlte Inhaltstyp wird von Open edX nicht unterst\u00fctzt.",
    "The specified LTI ID is not configured in this course's Advanced Settings.": "Die angegebene LTI-ID ist in den erweiterten Einstellungen dieses Kurses nicht konfiguriert.",
    "There was an error while launching the LTI tool: ": "Beim Starten des LTI-Tools ist ein Fehler aufgetreten: ",
    "There was an error while starting your LTI proctored assessment.": "Beim Starten Ihrer LTI-beaufsichtigten Beurteilung ist ein Fehler aufgetreten.",
    "To do that, make sure the block is published and click the link below:": "Stellen Sie dazu sicher, dass der Block ver\u00f6ffentlicht ist, und klicken Sie auf den folgenden Link:",
    "To set up the LTI integration, you need to register the LMS in the tool with the information provided below.": "Um die LTI-Integration einzurichten, m\u00fcssen Sie das LMS mit den unten angegebenen Informationen im Tool registrieren.",
    "Tool Initiate Login URL": "Tool-Initiierungs-Anmelde-URL",
    "Tool Keyset URL": "Tool-Keyset-URL",
    "Tool Launch URL": "Tool-Start-URL",
    "Tool Public Key": "\u00d6ffentlicher Schl\u00fcssel des Tools",
    "Tool Public Key Mode": "Tool-Public-Key-Modus",
    "Unauthorized.": "Nicht autorisiert.",
    "Valid urls the Tool may request us to redirect the id token to. The redirect uris are often the same as the launch url/deep linking url so if this field is empty, it will use them as the default. If you need to use different redirect uri's, enter them here. If you use this field you must enter all valid redirect uri's the tool may request.": "G\u00fcltige URLs, zu denen das Tool uns m\u00f6glicherweise auffordert, das ID-Token umzuleiten. Die Weiterleitungs-URIs stimmen oft mit der Start-URL/Deep-Linking-URL \u00fcberein. Wenn dieses Feld also leer ist, werden sie als Standard verwendet. Wenn Sie andere Weiterleitungs-URIs verwenden m\u00fcssen, geben Sie diese hier ein. Wenn Sie dieses Feld verwenden, m\u00fcssen Sie alle g\u00fcltigen Weiterleitungs-URIs eingeben, die das Tool m\u00f6glicherweise anfordert.",
    "You can configure this tool's content using LTI Deep Linking.": "Sie k\u00f6nnen den Inhalt dieses Tools mithilfe von LTI Deep Linking konfigurieren.",
    "You can safely close this page now.": "Sie k\u00f6nnen diese Seite jetzt bedenkenlos schlie\u00dfen.",
    "You don't have access to save LTI Content Items.": "Sie haben keinen Zugriff zum Speichern von LTI-Inhaltselementen.",
    "[LTI]: Real user not found against anon_id: {}": "[LTI]: Echter Benutzer nicht f\u00fcr anon_id gefunden: {}"
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
    "DATETIME_FORMAT": "j. F Y H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j. F Y",
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y",
      "%d.%m.%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j. F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i",
    "SHORT_DATE_FORMAT": "d.m.Y",
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
        