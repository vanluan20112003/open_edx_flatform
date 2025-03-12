
            (function(global){
                var XBlockLtiConsumerI18N = {
                  init: function() {
                    

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = (n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "Accept grades past deadline": "Accepter les notes apr\u00e8s la date limite",
    "Access Token URL: ": "URL du jeton d'acc\u00e8s :",
    "Add the key/value pair for any custom parameters, such as the page your e-book should open to or the background color for this component. Ex. [\"page=1\", \"color=white\"]<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Ajoutez la paire cl\u00e9/valeur pour tous les param\u00e8tres personnalis\u00e9s, tels que la page sur laquelle votre livre \u00e9lectronique doit s'ouvrir ou la couleur d'arri\u00e8re-plan de ce composant. Ex. [\"page=1\", \"color=white\"]<br /> Consultez la {docs_anchor_open}documentation edX LTI {anchor_close} pour plus de d\u00e9tails sur ce param\u00e8tre.",
    "Allow tools to manage and submit grade (programmatic)": "Autoriser les outils \u00e0 g\u00e9rer et \u00e0 soumettre des notes (programmatique)",
    "Allow tools to submit grades only (declarative)": "Autoriser les outils \u00e0 soumettre des notes uniquement (d\u00e9claratif)",
    "Button Text": "Texte du bouton",
    "CONFIG_ON_XBLOCK and CONFIG_EXTERNAL are not supported for LTI 1.3 Proctoring Services.": "CONFIG_ON_XBLOCK et CONFIG_EXTERNAL ne sont pas pris en charge pour les services de surveillance LTI 1.3.",
    "Cancel": "Annuler",
    "Click Cancel to return to this page without sending your information.": "Cliquez sur Annuler pour revenir \u00e0 cette page sans envoyer vos informations.",
    "Click OK to have your e-mail address sent to a 3rd party application.": "Cliquez sur OK pour que votre adresse courriel soit envoy\u00e9e \u00e0 une application tierce.",
    "Click OK to have your full name and e-mail address sent to a 3rd party application.": "Cliquez sur OK pour que votre nom complet et votre adresse courriel soient envoy\u00e9s \u00e0 une application tierce.",
    "Click OK to have your full name sent to a 3rd party application.": "Cliquez sur OK pour que votre nom complet soit envoy\u00e9 \u00e0 une application tierce.",
    "Click OK to have your username and e-mail address sent to a 3rd party application.": "Cliquez sur OK pour que votre nom d'utilisateur et votre adresse courriel soient envoy\u00e9s \u00e0 une application tierce.",
    "Click OK to have your username and full name sent to a 3rd party application.": "Cliquez sur OK pour que votre nom d'utilisateur et votre nom complet soient envoy\u00e9s \u00e0 une application tierce.",
    "Click OK to have your username sent to a 3rd party application.": "Cliquez sur OK pour que votre nom d'utilisateur soit envoy\u00e9 \u00e0 une application tierce.",
    "Click OK to have your username, full name, and e-mail address sent to a 3rd party application.": "Cliquez sur OK pour que votre nom d'utilisateur, votre nom complet et votre adresse courriel soient envoy\u00e9s \u00e0 une application tierce.",
    "Client ID used by LTI tool": "ID client utilis\u00e9 par l'outil LTI",
    "Client ID: ": "ID du client :",
    "Client key provided by the LTI tool provider.": "Cl\u00e9 client fournie par le fournisseur d'outils LTI.",
    "Client secret provided by the LTI tool provider.": "Secret client fourni par le fournisseur d'outils LTI.",
    "Comment as returned from grader, LTI2.0 spec": "R\u00e9troaction renvoy\u00e9 par la notation, sp\u00e9cification LTI2.0",
    "Configuration Stored on XBlock fields": "Configuration stock\u00e9e sur les champs XBlock",
    "Configuration Stored on external service": "Configuration stock\u00e9e sur un service externe",
    "Configuration Stored on this model": "Configuration stock\u00e9e sur ce mod\u00e8le",
    "Configuration Type": "Type de configuration",
    "Configuration on block": "Configuration sur le bloc",
    "Could not get user data for current request": "Impossible d'obtenir les donn\u00e9es utilisateur pour la demande actuelle",
    "Could not get user id for current request": "Impossible d'obtenir l'ID utilisateur pour la demande en cours",
    "Could not parse LTI passport: {lti_passport!r}. Should be \"id:key:secret\" string.": "Impossible d'analyser le passeport LTI : {lti_passport!r}. Doit \u00eatre une cha\u00eene \"id:key:secret\".",
    "Could not parse custom parameter: {custom_parameter!r}. Should be \"x=y\" string.": "Impossible d'analyser le param\u00e8tre personnalis\u00e9 : {custom_parameter!r}. Doit \u00eatre une cha\u00eene \"x=y\".",
    "Custom Parameters": "Param\u00e8tres personnalis\u00e9s",
    "Custom Parameters must be a list": "Les param\u00e8tres personnalis\u00e9s doivent \u00eatre une liste",
    "Custom Parameters should be strings in \"x=y\" format.": "Les param\u00e8tres personnalis\u00e9s doivent \u00eatre des cha\u00eenes au format \"x=y\".",
    "DEPRECATED - This is now stored in the LtiConfiguration model.": "OBSOL\u00c8TE - Ceci est d\u00e9sormais stock\u00e9 dans le mod\u00e8le LtiConfiguration.",
    "Database Configuration": "Configuration de la base de donn\u00e9es",
    "Deep Linking Launch - Configure tool": "Lancement Deep Linking - Configurer l'outil",
    "Deep Linking Launch URL": "URL de lancement Deep Linking.",
    "Deep Linking is configured on this tool.": "Deep Linking est configur\u00e9 pour cet outil.",
    "Deep linking": "Deep linking",
    "Deployment ID: ": "ID de d\u00e9ploiement :",
    "Disabled": "D\u00e9sactiv\u00e9",
    "Display Name": "Nom d'affichage",
    "Enable LTI NRPS": "Activer LTI NRPS",
    "Enable LTI Names and Role Provisioning Services.": "Activez les noms LTI et les services de provisionnement de r\u00f4les.",
    "Enable the LTI-AGS service and select the functionality enabled for LTI tools. The 'declarative' mode (default) will provide a tool with a LineItem created from the XBlock settings, while the 'programmatic' one will allow tools to manage, create and link the grades.": "Activez le service LTI-AGS et s\u00e9lectionnez la fonctionnalit\u00e9 activ\u00e9e pour les outils LTI. Le mode 'd\u00e9claratif' (par d\u00e9faut) fournira un outil avec un LineItem cr\u00e9\u00e9 \u00e0 partir des param\u00e8tres XBlock, tandis que le mode 'programmatique' permettra aux outils de g\u00e9rer, cr\u00e9er et lier les notes.",
    "Enter a description of the third party application. If requesting username and/or email, use this text box to inform users why their username and/or email will be forwarded to a third party application.": "Saisissez une description de l'application tierce. Si vous demandez un nom d'utilisateur et/ou une adresse courriel, utilisez cette zone de texte pour informer les utilisateurs pourquoi leur nom d'utilisateur et/ou leur adresse courriel seront transf\u00e9r\u00e9s vers une application tierce.",
    "Enter the LTI 1.3 Tool Launch URL. <br />This is the URL the LMS will use to launch the LTI Tool.": "Entrez l'URL de lancement de l'outil LTI 1.3.<br /> Il s'agit de l'URL que le LMS utilisera pour lancer l'outil LTI.",
    "Enter the LTI 1.3 Tool OIDC Authorization url (can also be called login or login initiation URL).<br />This is the URL the LMS will use to start a LTI authorization prior to doing the launch request.": "Entrez l\u2019URL d\u2019autorisation OIDC de l\u2019outil LTI 1.3 (peut \u00e9galement \u00eatre appel\u00e9e URL de connexion ou d\u2019initiation de connexion).<br /> Il s'agit de l'URL que le LMS utilisera pour d\u00e9marrer une autorisation LTI avant d'effectuer la demande de lancement.",
    "Enter the LTI 1.3 Tool's JWK keysets URL.<br />This link should retrieve a JSON file containing public keys and signature algorithm information, so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Entrez l'URL des JWK keysets de l'outil LTI 1.3.<br /> Ce lien doit r\u00e9cup\u00e9rer un fichier JSON contenant les cl\u00e9s publiques et les informations sur l'algorithme de signature, afin que le LMS puisse v\u00e9rifier si les messages et demandes de lancement re\u00e7us portent la signature de l'outil.<br /> <b>Cela n\u2019est pas requis lors des lancements LTI 1.3 sans demandes LTI Advantage ni Basic Outcomes.</b>",
    "Enter the LTI 1.3 Tool's public key.<br />This is a string that starts with '-----BEGIN PUBLIC KEY-----' and is required so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Entrez la cl\u00e9 publique de l'outil LTI 1.3.<br /> Il s'agit d'une cha\u00eene qui commence par '-----BEGIN PUBLIC KEY-----' et est requise pour que le LMS puisse v\u00e9rifier si les messages et les demandes de lancement re\u00e7us ont la signature de l'outil.<br /> <b>Cela n\u2019est pas requis lors des lancements LTI 1.3 sans demandes LTI Advantage ni Basic Outcomes.</b>",
    "Enter the LTI Advantage Deep Linking Launch URL. If the tool does not specify one, use the same value as 'Tool Launch URL'.": "Saisissez l\u2019URL de lancement LTI Advantage Deep Linking. Si l'outil n'en sp\u00e9cifie pas, utilisez la m\u00eame valeur que \"URL de lancement de l'outil\".",
    "Enter the LTI ID for the external LTI provider. This value must be the same LTI ID that you entered in the LTI Passports setting on the Advanced Settings page.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Saisissez l'ID LTI du fournisseur LTI externe. Cette valeur doit \u00eatre la m\u00eame ID LTI que celle que vous avez saisie dans le param\u00e8tre Passeports LTI sur la page Param\u00e8tres avanc\u00e9s.<br /> Consultez la {docs_anchor_open}documentation edX LTI {anchor_close} pour plus de d\u00e9tails sur ce param\u00e8tre.",
    "Enter the URL of the external tool that this component launches. This setting is only used when Hide External Tool is set to False.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Saisissez l'URL de l'outil externe lanc\u00e9 par ce composant. Ce param\u00e8tre n'est utilis\u00e9 que lorsque masquer l'outil externe est d\u00e9fini sur False.<br /> Consultez la {docs_anchor_open}documentation edX LTI {anchor_close} pour plus de d\u00e9tails sur ce param\u00e8tre.",
    "Enter the desired pixel height of the iframe which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Inline.": "Entrez la hauteur de pixel souhait\u00e9e de l'iframe qui contiendra l'outil LTI. Ce param\u00e8tre n'est utilis\u00e9 que lorsque masquer l'outil externe est d\u00e9fini sur False et que la cible de lancement LTI est d\u00e9finie sur Inline.",
    "Enter the desired viewport percentage height of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Entrez le pourcentage de hauteur de fen\u00eatre souhait\u00e9 pour la superposition modale qui contiendra l'outil LTI. Ce param\u00e8tre est utilis\u00e9 uniquement lorsque masquer l\u2019outil externe est d\u00e9fini sur False et que la cible de lancement LTI est d\u00e9finie sur modale.",
    "Enter the desired viewport percentage width of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Entrez le pourcentage de largeur de fen\u00eatre souhait\u00e9 de la superposition modale qui contiendra l'outil LTI. Ce param\u00e8tre est utilis\u00e9 uniquement lorsque masquer l\u2019outil externe est d\u00e9fini sur False et que la cible de lancement LTI est d\u00e9finie sur modale.",
    "Enter the name that students see for this component. Analytics reports may also use the display name to identify this component.": "Saisissez le nom que les \u00e9tudiants voient pour ce composant. Les rapports d'analytiques peuvent \u00e9galement utiliser le nom d'affichage pour identifier ce composant.",
    "Enter the number of points possible for this component.  The default value is 1.0.  This setting is only used when Scored is set to True.": "Entrez le nombre de points possibles pour ce composant. La valeur par d\u00e9faut est 1,0. Ce param\u00e8tre est utilis\u00e9 uniquement lorsque Scored est d\u00e9fini sur True.",
    "Enter the reusable LTI external configuration ID provided by the support staff.": "Saisissez l\u2019ID de configuration externe LTI r\u00e9utilisable fourni par le personnel d\u2019assistance.",
    "Enter the text on the button used to launch the third party application. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal or New Window.": "Saisissez le texte sur le bouton permettant de lancer l'application tierce. Ce param\u00e8tre n'est utilis\u00e9 que lorsque masquer l'outil externe est d\u00e9fini sur False et que la cible de lancement LTI est d\u00e9finie sur modale ou nouvelle fen\u00eatre.",
    "Hide External Tool": "Masquer l'outil externe",
    "If you run deep linking again, the content above will be replaced.": "Si vous ex\u00e9cutez \u00e0 nouveau Deep Linking, le contenu ci-dessus sera remplac\u00e9.",
    "If you're seeing this on a live course, please contact the course staff.": "Si vous voyez cela dans un cours en direct, veuillez contacter l'\u00e9quipe du cours.",
    "Inline Height": "Hauteur en ligne",
    "Invalid LTI configuration.": "Configuration LTI invalide.",
    "Invalid token header. No credentials provided.": "En-t\u00eate de jeton invalide. Aucune information d'identification fournie.",
    "Invalid token header. Token string should not contain spaces.": "En-t\u00eate de jeton invalide. La cha\u00eene du jeton ne doit pas contenir d'espaces.",
    "Invalid token signature.": "Signature de jeton invalide.",
    "Keyset URL: ": "URL du Keyset :",
    "LTI 1.3 Block Client ID - DEPRECATED": "ID client de block LTI 1.3 - OBSOL\u00c8TE",
    "LTI 1.3 Block Key - DEPRECATED": "Cl\u00e9 de block LTI 1.3 - OBSOL\u00c8TE",
    "LTI 1.3 Launches can only be performed from the LMS.": "Les lancements LTI 1.3 ne peuvent \u00eatre effectu\u00e9s qu'\u00e0 partir du LMS.",
    "LTI Application Information": "Informations sur l'application LTI",
    "LTI Assignment and Grades Service": "Service d'affectation et de notes LTI",
    "LTI Configuration stored on the model for LTI 1.3 must have a value for one of lti_1p3_tool_public_key or lti_1p3_tool_keyset_url.": "La configuration LTI stock\u00e9e sur le mod\u00e8le pour LTI 1.3 doit avoir une valeur parmi lti_1p3_tool_public_key ou lti_1p3_tool_keyset_url.",
    "LTI Configuration stores on XBlock needs a block location set.": "La configuration LTI stock\u00e9e sur un XBlock doit avoir un emplacement de block d\u00e9fini.  ",
    "LTI Configuration using reusable configuration needs a external ID in \"x:y\" format.": "La configuration LTI utilisant une configuration r\u00e9utilisable n\u00e9cessite un ID externe au format \"x:y\".",
    "LTI Consumer": "Consommateur LTI",
    "LTI Deep Linking": "LTI Deep Linking",
    "LTI Deep Linking failed.": "\u00c9chec LTI Deep Linking",
    "LTI ID": "Identifiant LTI",
    "LTI Launch Target": "Cible de lancement LTI",
    "LTI Reusable Configuration ID": "ID de configuration r\u00e9utilisable LTI",
    "LTI URL": "URL LTI",
    "LTI Version": "Version LTI",
    "LTI configuration data.": "Donn\u00e9es de configuration LTI.",
    "LTI configuration not found.": "Configuration LTI introuvable.",
    "Login URL: ": "URL de connexion :",
    "Missing LTI 1.3 authentication token.": "Jeton d'authentification LTI 1.3 manquant.",
    "Modal Height": "Hauteur modale",
    "Modal Width": "Largeur modale",
    "No valid user id found in endpoint URL": "Aucun identifiant utilisateur valide trouv\u00e9 dans l'URL du point de terminaison",
    "OK": "OK",
    "Platform's generated JWK keyset.": "Keyset JWK g\u00e9n\u00e9r\u00e9 par la plateforme.",
    "Platform's generated Private key ID": "ID de cl\u00e9 priv\u00e9e g\u00e9n\u00e9r\u00e9 par la plateforme",
    "Platform's generated Private key. Keep this value secret.": "Cl\u00e9 priv\u00e9e g\u00e9n\u00e9r\u00e9e par la plateforme. Gardez cette valeur secr\u00e8te.",
    "Please check that you have course staff permissions and double check this block's LTI settings.": "Veuillez v\u00e9rifier que vous disposez des autorisations du personnel du cours et v\u00e9rifier les param\u00e8tres LTI de ce bloc.",
    "Press to Launch": "Appuyez pour d\u00e9marrer",
    "Registered Redirect URIs": "URI de redirection enregistr\u00e9s",
    "Request user's email": "Demander le courriel de l'utilisateur",
    "Request user's full name": "Demander le nom complet de l'utilisateur",
    "Request user's username": "Demander le nom d'utilisateur de l'utilisateur",
    "Return to exam.": "Retour \u00e0 l'examen.",
    "Reusable Configuration": "Configuration r\u00e9utilisable",
    "Reusable configuration ID must be set when using external config (Example: \"x:y\").": "L'ID de configuration r\u00e9utilisable doit \u00eatre d\u00e9fini lors de l'utilisation d'une configuration externe (Exemple\u00a0: \"x:y\").",
    "Scored": "Not\u00e9",
    "Select 'Configuration on block' to configure a new LTI Tool. If the support staff provided you with a pre-configured LTI reusable Tool ID, select'Reusable Configuration' and enter it in the text field below.": "S\u00e9lectionnez 'Configuration sur le bloc' pour configurer un nouvel outil LTI. Si le personnel d'assistance vous a fourni un ID d'outil r\u00e9utilisable LTI pr\u00e9configur\u00e9, s\u00e9lectionnez 'Configuration r\u00e9utilisable' et saisissez-le dans le champ de texte ci-dessous.",
    "Select Inline if you want the LTI content to open in an IFrame in the current page. Select Modal if you want the LTI content to open in a modal window in the current page. Select New Window if you want the LTI content to open in a new browser window. This setting is only used when Hide External Tool is set to False.": "S\u00e9lectionnez Inline si vous souhaitez que le contenu LTI s'ouvre dans un IFrame dans la page actuelle. S\u00e9lectionnez modale si vous souhaitez que le contenu LTI s'ouvre dans une fen\u00eatre modale dans la page actuelle. S\u00e9lectionnez nouvelle fen\u00eatre si vous souhaitez que le contenu LTI s'ouvre dans une nouvelle fen\u00eatre de navigateur. Ce param\u00e8tre n'est utilis\u00e9 que lorsque masquer l'outil externe est d\u00e9fini sur False.",
    "Select True if this component will receive a numerical score from the external LTI system.": "S\u00e9lectionnez True si ce composant recevra une note num\u00e9rique du syst\u00e8me LTI externe.",
    "Select True if you want to enable LTI Advantage Deep Linking.": "S\u00e9lectionnez True si vous souhaitez activer LTI Advantage Deep Linking.",
    "Select True if you want to use this component as a placeholder for syncing with an external grading  system rather than launch an external tool.  This setting hides the Launch button and any IFrames for this component.": "S\u00e9lectionnez True si vous souhaitez utiliser ce composant comme espace r\u00e9serv\u00e9 pour la synchronisation avec un syst\u00e8me de notation externe plut\u00f4t que de lancer un outil externe. Ce param\u00e8tre masque le bouton lancer et tous les IFrames de ce composant.",
    "Select True to allow third party systems to post grades past the deadline.": "S\u00e9lectionnez True pour autoriser les syst\u00e8mes tiers \u00e0 publier des notes apr\u00e8s la date limite.",
    "Select True to request the user's email address.": "S\u00e9lectionnez True pour demander l'adresse courriel de l'utilisateur.",
    "Select True to request the user's full name.": "S\u00e9lectionnez True pour demander le nom complet de l'utilisateur.",
    "Select True to request the user's username.": "S\u00e9lectionnez True pour demander le nom d'utilisateur de l'utilisateur.",
    "Select True to send the extra parameters, which might contain Personally Identifiable Information. The processors are site-wide, please consult the site administrator if you have any questions.": "S\u00e9lectionnez True pour envoyer les param\u00e8tres suppl\u00e9mentaires, qui peuvent contenir des informations personnellement identifiables. Les processeurs s'\u00e9tendent \u00e0 l'\u00e9chelle du site, veuillez consulter l'administrateur du site si vous avez des questions.",
    "Select how the tool's public key information will be specified.": "S\u00e9lectionnez la mani\u00e8re dont les informations de cl\u00e9 publique de l'outil seront sp\u00e9cifi\u00e9es.",
    "Select the LTI version that your tool supports.<br />The XBlock LTI Consumer fully supports LTI 1.1.1, LTI 1.3 and LTI Advantage features.": "S\u00e9lectionnez la version LTI prise en charge par votre outil.<br />Le XBlock LTI Consumer prend enti\u00e8rement en charge les fonctionnalit\u00e9s LTI 1.1.1, LTI 1.3 et LTI Advantage.",
    "Send extra parameters": "Envoyer des param\u00e8tres suppl\u00e9mentaires",
    "Sending you back to your exam.": "Renvoi \u00e0 votre examen.",
    "Students don't have permissions to perform LTI Deep Linking configuration launches.": "Les \u00e9tudiants ne disposent pas des autorisations n\u00e9cessaires pour effectuer des configurations de lancement LTI Deep Linking.",
    "The Deep Linking configuration stored is presented below:": "La configuration Deep Linking stock\u00e9e est pr\u00e9sent\u00e9e ci-dessous :",
    "The LTI Deep Linking content was successfully saved in the LMS.": "Le contenu LTI Deep Linking a \u00e9t\u00e9 enregistr\u00e9 avec succ\u00e8s dans le LMS.",
    "The URL of the external tool that initiates the launch.": "L'URL de l'outil externe qui initie le lancement.",
    "The score kept in the xblock KVS -- duplicate of the published score in django DB": "La note conserv\u00e9e dans le xblock KVS -- duplicata de la note publi\u00e9e dans Django DB",
    "The selected content type is not supported by Open edX.": "Le type de contenu s\u00e9lectionn\u00e9 n'est pas pris en charge par Open edX.",
    "The specified LTI ID is not configured in this course's Advanced Settings.": "L'ID LTI sp\u00e9cifi\u00e9 n'est pas configur\u00e9 dans les param\u00e8tres avanc\u00e9s de ce cours.",
    "There was an error while launching the LTI tool: ": "Une erreur s'est produite lors du lancement de l'outil LTI :",
    "There was an error while starting your LTI proctored assessment.": "Une erreur s'est produite lors du d\u00e9marrage de votre \u00e9valuation surveill\u00e9e LTI.",
    "To do that, make sure the block is published and click the link below:": "Pour ce faire, assurez-vous que le bloc est publi\u00e9 et cliquez sur le lien ci-dessous :",
    "To set up the LTI integration, you need to register the LMS in the tool with the information provided below.": "Pour configurer l'int\u00e9gration LTI, vous devez enregistrer le LMS dans l'outil avec les informations fournies ci-dessous.",
    "Tool Initiate Login URL": "URL de connexion \u00e0 l'outil",
    "Tool Keyset URL": "URL du Tool Keyset",
    "Tool Launch URL": "URL de lancement de l'outil",
    "Tool Public Key": "Cl\u00e9 publique de l'outil",
    "Tool Public Key Mode": "Mode cl\u00e9 publique de l\u2019outil",
    "Unauthorized.": "Non autoris\u00e9.",
    "Valid urls the Tool may request us to redirect the id token to. The redirect uris are often the same as the launch url/deep linking url so if this field is empty, it will use them as the default. If you need to use different redirect uri's, enter them here. If you use this field you must enter all valid redirect uri's the tool may request.": "URL valides vers lesquelles l'outil peut nous demander de rediriger le jeton d'identification. Les URIS de redirection sont souvent les m\u00eames que l'URL de lancement/l'URL de deep linking, donc si ce champ est vide, il les utilisera par d\u00e9faut. Si vous devez utiliser diff\u00e9rents URI de redirection, saisissez-les ici. Si vous utilisez ce champ, vous devez saisir tous les URI de redirection valides que l'outil peut demander.",
    "You can configure this tool's content using LTI Deep Linking.": "Vous pouvez configurer le contenu de cet outil \u00e0 l'aide de LTI Deep Linking.",
    "You can safely close this page now.": "Vous pouvez fermer cette page en toute s\u00e9curit\u00e9 maintenant.",
    "You don't have access to save LTI Content Items.": "Vous n'avez pas acc\u00e8s \u00e0 la sauvegarde des \u00e9l\u00e9ments de contenu LTI.",
    "[LTI]: Real user not found against anon_id: {}": "[LTI] : utilisateur r\u00e9el introuvable pour anon_id : {}"
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
    "DATETIME_FORMAT": "j F Y H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j F Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d/%m/%y",
      "%d.%m.%Y",
      "%d.%m.%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "j N Y H:i",
    "SHORT_DATE_FORMAT": "j N Y",
    "THOUSAND_SEPARATOR": "\u00a0",
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
        