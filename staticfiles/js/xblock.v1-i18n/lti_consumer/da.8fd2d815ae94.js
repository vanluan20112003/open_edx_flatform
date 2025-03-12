
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
    "Accept grades past deadline": "Accepter karakter efter deadline",
    "Access Token URL: ": "Adgangstoken-URL: ",
    "Add the key/value pair for any custom parameters, such as the page your e-book should open to or the background color for this component. Ex. [\"page=1\", \"color=white\"]<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Tilf\u00f8j n\u00f8gle/v\u00e6rdi-parret for eventuelle tilpassede parametre, s\u00e5som den side, din e-bog skal \u00e5bne til eller baggrundsfarven for denne komponent. Eks. [&quot;side=1&quot;, &quot;farve=hvid&quot;]<br /> Se {docs_anchor_open} edX LTI-dokumentationen {anchor_close} for flere detaljer om denne indstilling.",
    "Allow tools to manage and submit grade (programmatic)": "Tillad v\u00e6rkt\u00f8jer til at administrere og indsende karakter (programmatisk)",
    "Allow tools to submit grades only (declarative)": "Tillad, at v\u00e6rkt\u00f8jer kun indsender karakterer (deklarativ)",
    "Button Text": "Knappen Tekst",
    "CONFIG_ON_XBLOCK and CONFIG_EXTERNAL are not supported for LTI 1.3 Proctoring Services.": "CONFIG_ON_XBLOCK og CONFIG_EXTERNAL underst\u00f8ttes ikke for LTI 1.3 Proctoring Services.",
    "Cancel": "Afbestille",
    "Click Cancel to return to this page without sending your information.": "Klik p\u00e5 Annuller for at vende tilbage til denne side uden at sende dine oplysninger.",
    "Click OK to have your e-mail address sent to a 3rd party application.": "Klik p\u00e5 OK for at f\u00e5 din e-mailadresse sendt til en tredjepartsapplikation.",
    "Click OK to have your full name and e-mail address sent to a 3rd party application.": "Klik p\u00e5 OK for at f\u00e5 dit fulde navn og din e-mailadresse sendt til en tredjepartsapplikation.",
    "Click OK to have your full name sent to a 3rd party application.": "Klik p\u00e5 OK for at f\u00e5 dit fulde navn sendt til en tredjepartsapplikation.",
    "Click OK to have your username and e-mail address sent to a 3rd party application.": "Klik p\u00e5 OK for at f\u00e5 dit brugernavn og din e-mailadresse sendt til en tredjepartsapplikation.",
    "Click OK to have your username and full name sent to a 3rd party application.": "Klik p\u00e5 OK for at f\u00e5 dit brugernavn og fulde navn sendt til en tredjepartsapplikation.",
    "Click OK to have your username sent to a 3rd party application.": "Klik p\u00e5 OK for at f\u00e5 dit brugernavn sendt til en tredjepartsapplikation.",
    "Click OK to have your username, full name, and e-mail address sent to a 3rd party application.": "Klik p\u00e5 OK for at f\u00e5 dit brugernavn, fulde navn og e-mailadresse sendt til en tredjepartsapplikation.",
    "Client ID used by LTI tool": "Klient-id brugt af LTI-v\u00e6rkt\u00f8jet",
    "Client ID: ": "Kunde-id: ",
    "Client key provided by the LTI tool provider.": "Klientn\u00f8gle leveret af LTI-v\u00e6rkt\u00f8jsudbyderen.",
    "Client secret provided by the LTI tool provider.": "Klienthemmelighed leveret af LTI-v\u00e6rkt\u00f8jsudbyderen.",
    "Comment as returned from grader, LTI2.0 spec": "Kommentar som returneret fra grader, LTI2.0 spec",
    "Configuration Stored on XBlock fields": "Konfiguration gemt p\u00e5 XBlock-felter",
    "Configuration Stored on external service": "Konfiguration gemt p\u00e5 ekstern tjeneste",
    "Configuration Stored on this model": "Konfiguration gemt p\u00e5 denne model",
    "Configuration Type": "Konfigurationstype",
    "Configuration on block": "Konfiguration p\u00e5 blok",
    "Could not get user data for current request": "Kunne ikke hente brugerdata for den aktuelle anmodning",
    "Could not get user id for current request": "Kunne ikke hente bruger-id for den aktuelle anmodning",
    "Could not parse LTI passport: {lti_passport!r}. Should be \"id:key:secret\" string.": "Kunne ikke parse LTI-pas: {lti_passport!r}. B\u00f8r v\u00e6re &quot;id:n\u00f8gle:hemmelig&quot; streng.",
    "Could not parse custom parameter: {custom_parameter!r}. Should be \"x=y\" string.": "Kunne ikke parse tilpasset parameter: {custom_parameter!r}. B\u00f8r v\u00e6re &quot;x=y&quot; streng.",
    "Custom Parameters": "tilpassede parametre",
    "Custom Parameters must be a list": "Brugerdefinerede parametre skal v\u00e6re en liste",
    "Custom Parameters should be strings in \"x=y\" format.": "Brugerdefinerede parametre skal v\u00e6re strenge i formatet &quot;x=y&quot;.",
    "DEPRECATED - This is now stored in the LtiConfiguration model.": "UDSKRIVET - Dette er nu gemt i LtiConfiguration-modellen.",
    "Database Configuration": "Database konfiguration",
    "Deep Linking Launch - Configure tool": "Deep Linking Launch - Konfigurer v\u00e6rkt\u00f8j",
    "Deep Linking Launch URL": "Deep Linking Launch URL",
    "Deep Linking is configured on this tool.": "Deep Linking er konfigureret p\u00e5 dette v\u00e6rkt\u00f8j.",
    "Deep linking": "Dyb linking",
    "Deployment ID: ": "Implementerings-id: ",
    "Disabled": "handicappet",
    "Display Name": "Vist navn",
    "Enable LTI NRPS": "Aktiver LTI NRPS",
    "Enable LTI Names and Role Provisioning Services.": "Aktiver LTI-navne og rolleleveringstjenester.",
    "Enable the LTI-AGS service and select the functionality enabled for LTI tools. The 'declarative' mode (default) will provide a tool with a LineItem created from the XBlock settings, while the 'programmatic' one will allow tools to manage, create and link the grades.": "Aktiver LTI-AGS-tjenesten, og v\u00e6lg den funktionalitet, der er aktiveret for LTI-v\u00e6rkt\u00f8jer. Den &#39;deklarative&#39; tilstand (standard) vil give et v\u00e6rkt\u00f8j med et linjeelement oprettet fra XBlock-indstillingerne, mens den &#39;programmatiske&#39; vil tillade v\u00e6rkt\u00f8jer til at administrere, oprette og linke karaktererne.",
    "Enter a description of the third party application. If requesting username and/or email, use this text box to inform users why their username and/or email will be forwarded to a third party application.": "Indtast en beskrivelse af tredjeparts-applikationen. Hvis der anmodes om brugernavn og/eller e-mail, kan du bruge dette tekstfelt til at informere brugerne om, hvorfor deres brugernavn og/eller e-mail vil blive sendt til en tredjeparts-applikation.",
    "Enter the LTI 1.3 Tool Launch URL. <br />This is the URL the LMS will use to launch the LTI Tool.": "Indtast LTI 1.3 Tool Launch URL.<br /> Dette er den URL, som LMS&#39;et vil bruge til at starte LTI-v\u00e6rkt\u00f8jet.",
    "Enter the LTI 1.3 Tool OIDC Authorization url (can also be called login or login initiation URL).<br />This is the URL the LMS will use to start a LTI authorization prior to doing the launch request.": "Indtast LTI 1.3 Tool OIDC Authorization url (kan ogs\u00e5 kaldes login eller login initiation URL).<br /> Dette er den URL, som LMS&#39;et vil bruge til at starte en LTI-godkendelse, inden startanmodningen udf\u00f8res.",
    "Enter the LTI 1.3 Tool's JWK keysets URL.<br />This link should retrieve a JSON file containing public keys and signature algorithm information, so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Indtast LTI 1.3-v\u00e6rkt\u00f8jets JWK-n\u00f8gles\u00e6t-URL.<br /> Dette link skal hente en JSON-fil, der indeholder offentlige n\u00f8gler og signaturalgoritmeoplysninger, s\u00e5 LMS&#39;et kan kontrollere, om de modtagne beskeder og startanmodninger har signaturen fra v\u00e6rkt\u00f8jet.<br /> <b>Dette er ikke p\u00e5kr\u00e6vet, n\u00e5r du laver LTI 1.3-lanceringer uden LTI Advantage eller Basic Outcomes-anmodninger.</b>",
    "Enter the LTI 1.3 Tool's public key.<br />This is a string that starts with '-----BEGIN PUBLIC KEY-----' and is required so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Indtast LTI 1.3-v\u00e6rkt\u00f8jets offentlige n\u00f8gle.<br /> Dette er en streng, der starter med &#39;-----BEGIN PUBLIC KEY-----&#39; og er p\u00e5kr\u00e6vet for at LMS&#39;et kan kontrollere, om de modtagne beskeder og startanmodninger har signaturen fra v\u00e6rkt\u00f8jet.<br /> <b>Dette er ikke p\u00e5kr\u00e6vet, n\u00e5r du laver LTI 1.3-lanceringer uden LTI Advantage eller Basic Outcomes-anmodninger.</b>",
    "Enter the LTI Advantage Deep Linking Launch URL. If the tool does not specify one, use the same value as 'Tool Launch URL'.": "Indtast LTI Advantage Deep Linking Launch URL. Hvis v\u00e6rkt\u00f8jet ikke specificerer en, skal du bruge den samme v\u00e6rdi som &#39;Tool Launch URL&#39;.",
    "Enter the LTI ID for the external LTI provider. This value must be the same LTI ID that you entered in the LTI Passports setting on the Advanced Settings page.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Indtast LTI-id&#39;et for den eksterne LTI-udbyder. Denne v\u00e6rdi skal v\u00e6re det samme LTI ID, som du indtastede i LTI Passports-indstillingen p\u00e5 siden Avancerede indstillinger.<br /> Se {docs_anchor_open} edX LTI-dokumentationen {anchor_close} for flere detaljer om denne indstilling.",
    "Enter the URL of the external tool that this component launches. This setting is only used when Hide External Tool is set to False.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Indtast URL&#39;en p\u00e5 det eksterne v\u00e6rkt\u00f8j, som denne komponent starter. Denne indstilling bruges kun, n\u00e5r Skjul eksternt v\u00e6rkt\u00f8j er indstillet til Falsk.<br /> Se {docs_anchor_open} edX LTI-dokumentationen {anchor_close} for flere detaljer om denne indstilling.",
    "Enter the desired pixel height of the iframe which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Inline.": "Indtast den \u00f8nskede pixelh\u00f8jde for iframen, som skal indeholde LTI-v\u00e6rkt\u00f8jet. Denne indstilling bruges kun, n\u00e5r Skjul eksternt v\u00e6rkt\u00f8j er indstillet til Falsk, og LTI Launch Target er indstillet til Inline.",
    "Enter the desired viewport percentage height of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Indtast den \u00f8nskede viewport-procenth\u00f8jde p\u00e5 det modale overlay, som vil indeholde LTI-v\u00e6rkt\u00f8jet. Denne indstilling bruges kun, n\u00e5r Skjul eksternt v\u00e6rkt\u00f8j er indstillet til False, og LTI Launch Target er indstillet til Modal.",
    "Enter the desired viewport percentage width of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Indtast den \u00f8nskede viewport-procentbredde p\u00e5 det modale overlay, som vil indeholde LTI-v\u00e6rkt\u00f8jet. Denne indstilling bruges kun, n\u00e5r Skjul eksternt v\u00e6rkt\u00f8j er indstillet til False, og LTI Launch Target er indstillet til Modal.",
    "Enter the name that students see for this component. Analytics reports may also use the display name to identify this component.": "Indtast det navn, som eleverne ser for denne komponent. Analytics-rapporter kan ogs\u00e5 bruge det viste navn til at identificere denne komponent.",
    "Enter the number of points possible for this component.  The default value is 1.0.  This setting is only used when Scored is set to True.": "Indtast antallet af mulige points for denne komponent. Standardv\u00e6rdien er 1,0. Denne indstilling anvendes kun, n\u00e5r Scorede er indstillet til Sand.",
    "Enter the reusable LTI external configuration ID provided by the support staff.": "Indtast det genanvendelige LTI-eksterne konfigurations-id fra supportpersonalet.",
    "Enter the text on the button used to launch the third party application. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal or New Window.": "Indtast teksten p\u00e5 den knap, der bruges til at starte tredjepartsapplikationen. Denne indstilling bruges kun, n\u00e5r Skjul eksternt v\u00e6rkt\u00f8j er indstillet til False, og LTI Launch Target er indstillet til Modal eller New Window.",
    "Hide External Tool": "Skjul eksternt v\u00e6rkt\u00f8j",
    "If you run deep linking again, the content above will be replaced.": "Hvis du k\u00f8rer dybe links igen, vil indholdet ovenfor blive erstattet.",
    "If you're seeing this on a live course, please contact the course staff.": "Hvis du ser dette p\u00e5 et live kursus, bedes du kontakte kursuspersonalet.",
    "Inline Height": "Inline h\u00f8jde",
    "Invalid LTI configuration.": "Ugyldig LTI-konfiguration.",
    "Invalid token header. No credentials provided.": "Ugyldig token-header. Ingen legitimationsoplysninger angivet.",
    "Invalid token header. Token string should not contain spaces.": "Ugyldig token-header. Tokenstreng b\u00f8r ikke indeholde mellemrum.",
    "Invalid token signature.": "Ugyldig token-signatur.",
    "Keyset URL: ": "N\u00f8gles\u00e6t-URL: ",
    "LTI 1.3 Block Client ID - DEPRECATED": "LTI 1.3 Bloker klient-id - UDSKIFTET",
    "LTI 1.3 Block Key - DEPRECATED": "LTI 1.3 Blokn\u00f8gle - UDTAGET",
    "LTI 1.3 Launches can only be performed from the LMS.": "LTI 1.3 Lanceringer kan kun udf\u00f8res fra LMS.",
    "LTI Application Information": "LTI Application Information",
    "LTI Assignment and Grades Service": "LTI Opgave- og Karakterservice",
    "LTI Configuration stored on the model for LTI 1.3 must have a value for one of lti_1p3_tool_public_key or lti_1p3_tool_keyset_url.": "LTI-konfiguration, der er gemt p\u00e5 modellen for LTI 1.3, skal have en v\u00e6rdi for en af lti_1p3_tool_public_key eller lti_1p3_tool_keyset_url.",
    "LTI Configuration stores on XBlock needs a block location set.": "LTI-konfigurationsbutikker p\u00e5 XBlock har brug for et blokplaceringss\u00e6t.",
    "LTI Configuration using reusable configuration needs a external ID in \"x:y\" format.": "LTI-konfiguration, der bruger genbrugelig konfiguration, kr\u00e6ver et eksternt ID i &quot;x:y&quot;-format.",
    "LTI Consumer": "LTI forbruger",
    "LTI Deep Linking": "LTI Deep Linking",
    "LTI Deep Linking failed.": "LTI Deep Linking mislykkedes.",
    "LTI ID": "LTI ID",
    "LTI Launch Target": "LTI-lanceringsm\u00e5l",
    "LTI Reusable Configuration ID": "LTI Genanvendeligt konfigurations-id",
    "LTI URL": "LTI URL",
    "LTI Version": "LTI-version",
    "LTI configuration data.": "LTI-konfigurationsdata.",
    "LTI configuration not found.": "LTI-konfiguration blev ikke fundet.",
    "Login URL: ": "Login URL: ",
    "Missing LTI 1.3 authentication token.": "Manglende LTI 1.3-godkendelsestoken.",
    "Modal Height": "Modal h\u00f8jde",
    "Modal Width": "Modal bredde",
    "No valid user id found in endpoint URL": "Intet gyldigt bruger-id fundet i slutpunkts-URL",
    "OK": "Okay",
    "Platform's generated JWK keyset.": "Platformens genererede JWK-n\u00f8gles\u00e6t.",
    "Platform's generated Private key ID": "Platformens genererede private n\u00f8gle-id",
    "Platform's generated Private key. Keep this value secret.": "Platformens genererede private n\u00f8gle. Hold denne v\u00e6rdi hemmelig.",
    "Please check that you have course staff permissions and double check this block's LTI settings.": "Tjek venligst, at du har kursuspersonaletilladelser, og dobbelttjek denne bloks LTI-indstillinger.",
    "Press to Launch": "Tryk for at starte/udrulle",
    "Registered Redirect URIs": "Registrerede omdirigerings-URI&#39;er",
    "Request user's email": "Anmod om brugerens e-mail",
    "Request user's full name": "Anmod om brugerens fulde navn",
    "Request user's username": "Anmod om brugerens brugernavn",
    "Return to exam.": "Vend tilbage til eksamen.",
    "Reusable Configuration": "Genanvendelig konfiguration",
    "Reusable configuration ID must be set when using external config (Example: \"x:y\").": "Genanvendeligt konfigurations-id skal indstilles, n\u00e5r du bruger ekstern konfiguration (eksempel: &quot;x:y&quot;).",
    "Scored": "Opn\u00e5ede point",
    "Select 'Configuration on block' to configure a new LTI Tool. If the support staff provided you with a pre-configured LTI reusable Tool ID, select'Reusable Configuration' and enter it in the text field below.": "V\u00e6lg &#39;Konfiguration p\u00e5 blok&#39; for at konfigurere et nyt LTI-v\u00e6rkt\u00f8j. Hvis supportpersonalet har givet dig et forudkonfigureret LTI-genanvendeligt v\u00e6rkt\u00f8js-id, skal du v\u00e6lge &#39;Genbrugelig konfiguration&#39; og indtaste det i tekstfeltet nedenfor.",
    "Select Inline if you want the LTI content to open in an IFrame in the current page. Select Modal if you want the LTI content to open in a modal window in the current page. Select New Window if you want the LTI content to open in a new browser window. This setting is only used when Hide External Tool is set to False.": "V\u00e6lg Inline, hvis du \u00f8nsker, at LTI-indholdet skal \u00e5bne i en IFrame p\u00e5 den aktuelle side. V\u00e6lg Modal, hvis du \u00f8nsker, at LTI-indholdet skal \u00e5bnes i et modalt vindue p\u00e5 den aktuelle side. V\u00e6lg Nyt vindue, hvis du \u00f8nsker, at LTI-indholdet skal \u00e5bne i et nyt browservindue. Denne indstilling bruges kun, n\u00e5r Skjul eksternt v\u00e6rkt\u00f8j er indstillet til Falsk.",
    "Select True if this component will receive a numerical score from the external LTI system.": "V\u00e6lg Sand, hvis denne komponent skal modtage en numerisk score fra det eksterne LTI-system.",
    "Select True if you want to enable LTI Advantage Deep Linking.": "V\u00e6lg Sand, hvis du vil aktivere LTI Advantage Deep Linking.",
    "Select True if you want to use this component as a placeholder for syncing with an external grading  system rather than launch an external tool.  This setting hides the Launch button and any IFrames for this component.": "V\u00e6lg Sand, hvis du \u00f8nsker at bruge denne komponent som en pladsholder for synkronisering med et ekstern gradueringssystem i stedet for at starte et eksternt v\u00e6rkt\u00f8j. Denne indstilling skjuler Launch- knappen og eventuelle IFrames til denne komponent.",
    "Select True to allow third party systems to post grades past the deadline.": "V\u00e6lg Sandt for at tillade tredjepartssystemer at give karakterer efter deadline.",
    "Select True to request the user's email address.": "V\u00e6lg Sand for at anmode om brugerens e-mail-adresse",
    "Select True to request the user's full name.": "V\u00e6lg Sand for at anmode om brugerens fulde navn.",
    "Select True to request the user's username.": "V\u00e6lg Sandt for at anmode om brugerens brugernavn.",
    "Select True to send the extra parameters, which might contain Personally Identifiable Information. The processors are site-wide, please consult the site administrator if you have any questions.": "V\u00e6lg Sand for at sende de ekstra parametre, som kan indeholde personligt identificerbare oplysninger. Behandlerne er hele webstedet, kontakt venligst webstedets administrator, hvis du har sp\u00f8rgsm\u00e5l.",
    "Select how the tool's public key information will be specified.": "V\u00e6lg, hvordan v\u00e6rkt\u00f8jets offentlige n\u00f8gleoplysninger skal specificeres.",
    "Select the LTI version that your tool supports.<br />The XBlock LTI Consumer fully supports LTI 1.1.1, LTI 1.3 and LTI Advantage features.": "V\u00e6lg den LTI-version, som dit v\u00e6rkt\u00f8j underst\u00f8tter.<br /> XBlock LTI Consumer underst\u00f8tter fuldt ud LTI 1.1.1, LTI 1.3 og LTI Advantage funktioner.",
    "Send extra parameters": "Send ekstra parametre",
    "Sending you back to your exam.": "Sender dig tilbage til din eksamen.",
    "Students don't have permissions to perform LTI Deep Linking configuration launches.": "Elever har ikke tilladelser til at udf\u00f8re LTI Deep Linking-konfigurationslanceringer.",
    "The Deep Linking configuration stored is presented below:": "Den gemte Deep Linking-konfiguration er pr\u00e6senteret nedenfor:",
    "The LTI Deep Linking content was successfully saved in the LMS.": "LTI Deep Linking-indholdet blev gemt i LMS.",
    "The URL of the external tool that initiates the launch.": "URL&#39;en p\u00e5 det eksterne v\u00e6rkt\u00f8j, der starter lanceringen.",
    "The score kept in the xblock KVS -- duplicate of the published score in django DB": "Scoren indeholdt i xblock KVS - kopi\u00e9r den offentliggjorte score i/til Django DB",
    "The selected content type is not supported by Open edX.": "Den valgte indholdstype underst\u00f8ttes ikke af Open edX.",
    "The specified LTI ID is not configured in this course's Advanced Settings.": "Det angivne LTI-id er ikke konfigureret i dette kursuss avancerede indstillinger.",
    "There was an error while launching the LTI tool: ": "Der opstod en fejl under lancering af LTI-v\u00e6rkt\u00f8jet: ",
    "There was an error while starting your LTI proctored assessment.": "Der opstod en fejl under start af din LTI-pr\u00f8vevurdering.",
    "To do that, make sure the block is published and click the link below:": "For at g\u00f8re det skal du s\u00f8rge for, at blokeringen er offentliggjort og klikke p\u00e5 linket nedenfor:",
    "To set up the LTI integration, you need to register the LMS in the tool with the information provided below.": "For at konfigurere LTI-integrationen skal du registrere LMS i v\u00e6rkt\u00f8jet med oplysningerne nedenfor.",
    "Tool Initiate Login URL": "V\u00e6rkt\u00f8jsstart login-URL",
    "Tool Keyset URL": "Tool Keyset URL",
    "Tool Launch URL": "V\u00e6rkt\u00f8jsstart-URL",
    "Tool Public Key": "V\u00e6rkt\u00f8js offentlig n\u00f8gle",
    "Tool Public Key Mode": "V\u00e6rkt\u00f8js offentlig n\u00f8gletilstand",
    "Unauthorized.": "Uberettiget.",
    "Valid urls the Tool may request us to redirect the id token to. The redirect uris are often the same as the launch url/deep linking url so if this field is empty, it will use them as the default. If you need to use different redirect uri's, enter them here. If you use this field you must enter all valid redirect uri's the tool may request.": "Gyldige webadresser, som v\u00e6rkt\u00f8jet kan anmode os om at omdirigere id-tokenet til. Omdirigerings-uri&#39;erne er ofte de samme som start-url&#39;en/deep linking-url&#39;en, s\u00e5 hvis dette felt er tomt, vil det bruge dem som standard. Hvis du skal bruge forskellige omdirigerings-uri&#39;er, skal du indtaste dem her. Hvis du bruger dette felt, skal du indtaste alle gyldige omdirigerings-uri&#39;er, som v\u00e6rkt\u00f8jet kan anmode om.",
    "You can configure this tool's content using LTI Deep Linking.": "Du kan konfigurere dette v\u00e6rkt\u00f8js indhold ved hj\u00e6lp af LTI Deep Linking.",
    "You can safely close this page now.": "Du kan roligt lukke denne side nu.",
    "You don't have access to save LTI Content Items.": "Du har ikke adgang til at gemme LTI-indholdselementer.",
    "[LTI]: Real user not found against anon_id: {}": "[LTI]: Virkelig bruger blev ikke fundet mod anon_id: {}"
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
        