
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
    "Accept grades past deadline": "Aceptar calificaciones anteriores a la fecha l\u00edmite",
    "Access Token URL: ": "URL del token de acceso: ",
    "Add the key/value pair for any custom parameters, such as the page your e-book should open to or the background color for this component. Ex. [\"page=1\", \"color=white\"]<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Agregue el par clave/valor para cualquier par\u00e1metro personalizado, como la p\u00e1gina en la que debe abrirse su libro electr\u00f3nico o el color de fondo de este componente. Ex. [&quot;p\u00e1gina=1&quot;, &quot;color=blanco&quot;]<br /> Consulte la documentaci\u00f3n {docs_anchor_open} edX LTI {anchor_close} para obtener m\u00e1s detalles sobre esta configuraci\u00f3n.",
    "Allow tools to manage and submit grade (programmatic)": "Permitir que las herramientas administren y env\u00eden calificaciones (program\u00e1ticas)",
    "Allow tools to submit grades only (declarative)": "Permitir que las herramientas env\u00eden calificaciones \u00fanicamente (declarativas)",
    "Button Text": "Texto del bot\u00f3n",
    "CONFIG_ON_XBLOCK and CONFIG_EXTERNAL are not supported for LTI 1.3 Proctoring Services.": "CONFIG_ON_XBLOCK y CONFIG_EXTERNAL no son compatibles con los servicios de supervisi\u00f3n LTI 1.3.",
    "Cancel": "Cancelar",
    "Click Cancel to return to this page without sending your information.": "Haga clic en Cancelar para regresar a esta p\u00e1gina sin enviar su informaci\u00f3n.",
    "Click OK to have your e-mail address sent to a 3rd party application.": "Haga clic en Aceptar para que su direcci\u00f3n de correo electr\u00f3nico se env\u00ede a una aplicaci\u00f3n de terceros.",
    "Click OK to have your full name and e-mail address sent to a 3rd party application.": "Haga clic en Aceptar para que su nombre completo y direcci\u00f3n de correo electr\u00f3nico se env\u00eden a una aplicaci\u00f3n de terceros.",
    "Click OK to have your full name sent to a 3rd party application.": "Haga clic en Aceptar para que se env\u00ede su nombre completo a una aplicaci\u00f3n de terceros.",
    "Click OK to have your username and e-mail address sent to a 3rd party application.": "Haga clic en Aceptar para que su nombre de usuario y direcci\u00f3n de correo electr\u00f3nico se env\u00eden a una aplicaci\u00f3n de terceros.",
    "Click OK to have your username and full name sent to a 3rd party application.": "Haga clic en Aceptar para que su nombre de usuario y nombre completo se env\u00eden a una aplicaci\u00f3n de terceros.",
    "Click OK to have your username sent to a 3rd party application.": "Haga clic en Aceptar para que su nombre de usuario se env\u00ede a una aplicaci\u00f3n de terceros.",
    "Click OK to have your username, full name, and e-mail address sent to a 3rd party application.": "Haga clic en Aceptar para enviar su nombre de usuario, nombre completo y direcci\u00f3n de correo electr\u00f3nico a una aplicaci\u00f3n de terceros.",
    "Client ID used by LTI tool": "ID de cliente utilizado por la herramienta LTI",
    "Client ID: ": "Identificaci\u00f3n del cliente: ",
    "Client key provided by the LTI tool provider.": "Clave de cliente proporcionada por el proveedor de la herramienta LTI.",
    "Client secret provided by the LTI tool provider.": "Secreto de cliente proporcionado por el proveedor de la herramienta LTI.",
    "Comment as returned from grader, LTI2.0 spec": "El comentario tal y como fue enviado por el evaluador, LTI2.0 spec",
    "Configuration Stored on XBlock fields": "Configuraci\u00f3n almacenada en los campos XBlock",
    "Configuration Stored on external service": "Configuraci\u00f3n almacenada en un servicio externo",
    "Configuration Stored on this model": "Configuraci\u00f3n almacenada en este modelo",
    "Configuration Type": "Tipo de configuraci\u00f3n",
    "Configuration on block": "Configuraci\u00f3n en bloque",
    "Could not get user data for current request": "No se pudieron obtener datos de usuario para la solicitud actual",
    "Could not get user id for current request": "No se pudo obtener la identificaci\u00f3n de usuario para la solicitud actual",
    "Could not parse LTI passport: {lti_passport!r}. Should be \"id:key:secret\" string.": "No se pudo analizar el pasaporte LTI: {lti_passport!r}. Debe ser la cadena &quot;id:key:secret&quot;.",
    "Could not parse custom parameter: {custom_parameter!r}. Should be \"x=y\" string.": "No se pudo analizar el par\u00e1metro personalizado: {custom_parameter!r}. Debe ser una cadena &quot;x=y&quot;.",
    "Custom Parameters": "Par\u00e1metros personales",
    "Custom Parameters must be a list": "Los par\u00e1metros personalizados deben ser una lista",
    "Custom Parameters should be strings in \"x=y\" format.": "Los par\u00e1metros personalizados deben ser cadenas en formato &quot;x=y&quot;.",
    "DEPRECATED - This is now stored in the LtiConfiguration model.": "DESPRECADO: ahora est\u00e1 almacenado en el modelo LtiConfiguration.",
    "Database Configuration": "Configuraci\u00f3n de base de datos",
    "Deep Linking Launch - Configure tool": "Lanzamiento de enlaces profundos: herramienta de configuraci\u00f3n",
    "Deep Linking Launch URL": "URL de lanzamiento de enlace profundo",
    "Deep Linking is configured on this tool.": "Los enlaces profundos est\u00e1n configurados en esta herramienta.",
    "Deep linking": "Enlace profundo",
    "Deployment ID: ": "ID de implementaci\u00f3n: ",
    "Disabled": "Deshabilitado",
    "Display Name": "Nombre para mostrar",
    "Enable LTI NRPS": "Habilitar LTI NRPS",
    "Enable LTI Names and Role Provisioning Services.": "Habilite los servicios de aprovisionamiento de funciones y nombres de LTI.",
    "Enable the LTI-AGS service and select the functionality enabled for LTI tools. The 'declarative' mode (default) will provide a tool with a LineItem created from the XBlock settings, while the 'programmatic' one will allow tools to manage, create and link the grades.": "Habilite el servicio LTI-AGS y seleccione la funcionalidad habilitada para las herramientas LTI. El modo &#39;declarativo&#39; (predeterminado) proporcionar\u00e1 una herramienta con un LineItem creado a partir de la configuraci\u00f3n de XBlock, mientras que el modo &#39;program\u00e1tico&#39; permitir\u00e1 que las herramientas administren, creen y vinculen las calificaciones.",
    "Enter a description of the third party application. If requesting username and/or email, use this text box to inform users why their username and/or email will be forwarded to a third party application.": "Escribe una descripci\u00f3n de la aplicaci\u00f3n de terceros. Si se solicita el nombre de usuario y/o el correo electr\u00f3nico, usa este cuadro de texto para informar a los usuarios por qu\u00e9 su nombre de usuario y/o correo electr\u00f3nico ser\u00e1n remitidos a una aplicaci\u00f3n de terceros.",
    "Enter the LTI 1.3 Tool Launch URL. <br />This is the URL the LMS will use to launch the LTI Tool.": "Ingrese la URL de inicio de la herramienta LTI 1.3.<br /> Esta es la URL que utilizar\u00e1 el LMS para iniciar la herramienta LTI.",
    "Enter the LTI 1.3 Tool OIDC Authorization url (can also be called login or login initiation URL).<br />This is the URL the LMS will use to start a LTI authorization prior to doing the launch request.": "Ingrese la URL de autorizaci\u00f3n OIDC de la herramienta LTI 1.3 (tambi\u00e9n se puede llamar URL de inicio de sesi\u00f3n o de inicio de sesi\u00f3n).<br /> Esta es la URL que el LMS utilizar\u00e1 para iniciar una autorizaci\u00f3n LTI antes de realizar la solicitud de inicio.",
    "Enter the LTI 1.3 Tool's JWK keysets URL.<br />This link should retrieve a JSON file containing public keys and signature algorithm information, so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Ingrese la URL del conjunto de claves JWK de la herramienta LTI 1.3.<br /> Este enlace deber\u00eda recuperar un archivo JSON que contiene claves p\u00fablicas e informaci\u00f3n del algoritmo de firma, para que el LMS pueda verificar si los mensajes y solicitudes de lanzamiento recibidos tienen la firma de la herramienta.<br /> <b>Esto no es necesario al realizar lanzamientos de LTI 1.3 sin solicitudes de LTI Advantage ni de resultados b\u00e1sicos.</b>",
    "Enter the LTI 1.3 Tool's public key.<br />This is a string that starts with '-----BEGIN PUBLIC KEY-----' and is required so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Ingrese la clave p\u00fablica de la herramienta LTI 1.3.<br /> Esta es una cadena que comienza con &#39;-----BEGIN PUBLIC KEY-----&#39; y es necesaria para que el LMS pueda verificar si los mensajes y solicitudes de lanzamiento recibidos tienen la firma de la herramienta.<br /> <b>Esto no es necesario al realizar lanzamientos de LTI 1.3 sin solicitudes de LTI Advantage ni de resultados b\u00e1sicos.</b>",
    "Enter the LTI Advantage Deep Linking Launch URL. If the tool does not specify one, use the same value as 'Tool Launch URL'.": "Ingrese la URL de inicio del enlace profundo de LTI Advantage. Si la herramienta no especifica uno, utilice el mismo valor que &quot;URL de inicio de herramienta&quot;.",
    "Enter the LTI ID for the external LTI provider. This value must be the same LTI ID that you entered in the LTI Passports setting on the Advanced Settings page.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Ingrese el ID de LTI para el proveedor de LTI externo. Este valor debe ser el mismo ID de LTI que ingres\u00f3 en la configuraci\u00f3n de Pasaportes LTI en la p\u00e1gina Configuraci\u00f3n avanzada.<br /> Consulte la documentaci\u00f3n {docs_anchor_open} edX LTI {anchor_close} para obtener m\u00e1s detalles sobre esta configuraci\u00f3n.",
    "Enter the URL of the external tool that this component launches. This setting is only used when Hide External Tool is set to False.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Ingrese la URL de la herramienta externa que inicia este componente. Esta configuraci\u00f3n solo se usa cuando Ocultar herramienta externa est\u00e1 configurada en Falso.<br /> Consulte la documentaci\u00f3n {docs_anchor_open} edX LTI {anchor_close} para obtener m\u00e1s detalles sobre esta configuraci\u00f3n.",
    "Enter the desired pixel height of the iframe which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Inline.": "Ingrese la altura de p\u00edxel deseada del iframe que contendr\u00e1 la herramienta LTI. Esta configuraci\u00f3n solo se usa cuando Ocultar herramienta externa est\u00e1 configurada en Falso y LTI Launch Target est\u00e1 configurada en Inline.",
    "Enter the desired viewport percentage height of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Ingrese el porcentaje de altura de la ventana gr\u00e1fica deseada de la superposici\u00f3n modal que contendr\u00e1 la herramienta LTI. Esta configuraci\u00f3n solo se usa cuando Ocultar herramienta externa est\u00e1 configurada en Falso y LTI Launch Target est\u00e1 configurada en Modal.",
    "Enter the desired viewport percentage width of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Ingrese el porcentaje de ancho de la ventana gr\u00e1fica deseado de la superposici\u00f3n modal que contendr\u00e1 la herramienta LTI. Esta configuraci\u00f3n solo se usa cuando Ocultar herramienta externa est\u00e1 configurada en Falso y LTI Launch Target est\u00e1 configurada en Modal.",
    "Enter the name that students see for this component. Analytics reports may also use the display name to identify this component.": "Ingrese el nombre que ven los estudiantes para este componente. Los informes de an\u00e1lisis tambi\u00e9n pueden utilizar el nombre para mostrar para identificar este componente.",
    "Enter the number of points possible for this component.  The default value is 1.0.  This setting is only used when Scored is set to True.": "Ingrese el n\u00famero de puntos posibles para este componente. El valor por defecto es 1.0. Este valor solo se utiliza cuando el par\u00e1metro de calificaci\u00f3n est\u00e1 definido como True.",
    "Enter the reusable LTI external configuration ID provided by the support staff.": "Ingrese el ID de configuraci\u00f3n externa de LTI reutilizable proporcionado por el personal de soporte.",
    "Enter the text on the button used to launch the third party application. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal or New Window.": "Ingrese el texto en el bot\u00f3n utilizado para iniciar la aplicaci\u00f3n de terceros. Esta configuraci\u00f3n solo se usa cuando Ocultar herramienta externa est\u00e1 configurada en Falso y LTI Launch Target est\u00e1 configurada en Modal o Nueva ventana.",
    "Hide External Tool": "Ocultar herramienta externa",
    "If you run deep linking again, the content above will be replaced.": "Si vuelve a ejecutar enlaces profundos, se reemplazar\u00e1 el contenido anterior.",
    "If you're seeing this on a live course, please contact the course staff.": "Si est\u00e1 viendo esto en un curso en vivo, comun\u00edquese con el personal del curso.",
    "Inline Height": "Altura en l\u00ednea",
    "Invalid LTI configuration.": "Configuraci\u00f3n LTI no v\u00e1lida.",
    "Invalid token header. No credentials provided.": "Encabezado de token no v\u00e1lido. No se proporcionaron credenciales.",
    "Invalid token header. Token string should not contain spaces.": "Encabezado de token no v\u00e1lido. La cadena de token no debe contener espacios.",
    "Invalid token signature.": "Firma de token no v\u00e1lida.",
    "Keyset URL: ": "URL del conjunto de claves: ",
    "LTI 1.3 Block Client ID - DEPRECATED": "ID de cliente de bloqueo de LTI 1.3: obsoleto",
    "LTI 1.3 Block Key - DEPRECATED": "Clave de bloque LTI 1.3: obsoleta",
    "LTI 1.3 Launches can only be performed from the LMS.": "Los lanzamientos de LTI 1.3 solo se pueden realizar desde el LMS.",
    "LTI Application Information": "Informaci\u00f3n sobre la aplicaci\u00f3n LTI",
    "LTI Assignment and Grades Service": "Servicio de asignaciones y calificaciones de LTI",
    "LTI Configuration stored on the model for LTI 1.3 must have a value for one of lti_1p3_tool_public_key or lti_1p3_tool_keyset_url.": "La configuraci\u00f3n de LTI almacenada en el modelo para LTI 1.3 debe tener un valor para uno de lti_1p3_tool_public_key o lti_1p3_tool_keyset_url.",
    "LTI Configuration stores on XBlock needs a block location set.": "Las tiendas de configuraci\u00f3n LTI en XBlock necesitan un conjunto de ubicaci\u00f3n de bloque.",
    "LTI Configuration using reusable configuration needs a external ID in \"x:y\" format.": "La configuraci\u00f3n LTI que utiliza una configuraci\u00f3n reutilizable necesita una ID externa en formato &quot;x:y&quot;.",
    "LTI Consumer": "Consumidor LTI",
    "LTI Deep Linking": "Enlaces profundos LTI",
    "LTI Deep Linking failed.": "Error en el enlace profundo de LTI.",
    "LTI ID": "Identificador LTI",
    "LTI Launch Target": "Objetivo de lanzamiento de LTI",
    "LTI Reusable Configuration ID": "ID de configuraci\u00f3n reutilizable de LTI",
    "LTI URL": "URL LTI",
    "LTI Version": "Versi\u00f3n LTI",
    "LTI configuration data.": "Datos de configuraci\u00f3n de LTI.",
    "LTI configuration not found.": "Configuraci\u00f3n LTI no encontrada.",
    "Login URL: ": "URL de inicio de sesi\u00f3n: ",
    "Missing LTI 1.3 authentication token.": "Falta el token de autenticaci\u00f3n LTI 1.3.",
    "Modal Height": "Altura modal",
    "Modal Width": "Ancho modal",
    "No valid user id found in endpoint URL": "No se encontr\u00f3 ninguna identificaci\u00f3n de usuario v\u00e1lida en la URL del punto final",
    "OK": "De acuerdo",
    "Platform's generated JWK keyset.": "Conjunto de claves JWK generado por la plataforma.",
    "Platform's generated Private key ID": "ID de clave privada generada por la plataforma",
    "Platform's generated Private key. Keep this value secret.": "Clave privada generada por la plataforma. Mantenga este valor en secreto.",
    "Please check that you have course staff permissions and double check this block's LTI settings.": "Verifique que tenga permisos del personal del curso y verifique nuevamente la configuraci\u00f3n LTI de este bloque.",
    "Press to Launch": "Pulsa para lanzar",
    "Registered Redirect URIs": "URI de redireccionamiento registrados",
    "Request user's email": "Solicitar el correo electr\u00f3nico del usuario",
    "Request user's full name": "Solicitar el nombre completo del usuario",
    "Request user's username": "Solicitar el nombre de usuario del usuario",
    "Return to exam.": "Regresar al examen.",
    "Reusable Configuration": "Configuraci\u00f3n reutilizable",
    "Reusable configuration ID must be set when using external config (Example: \"x:y\").": "Se debe establecer un ID de configuraci\u00f3n reutilizable cuando se utiliza una configuraci\u00f3n externa (Ejemplo: &quot;x:y&quot;).",
    "Scored": "Puntuado",
    "Select 'Configuration on block' to configure a new LTI Tool. If the support staff provided you with a pre-configured LTI reusable Tool ID, select'Reusable Configuration' and enter it in the text field below.": "Seleccione &#39;Configuraci\u00f3n en bloque&#39; para configurar una nueva herramienta LTI. Si el personal de soporte le proporcion\u00f3 una ID de herramienta reutilizable LTI preconfigurada, seleccione &quot;Configuraci\u00f3n reutilizable&quot; e ingr\u00e9sela en el campo de texto a continuaci\u00f3n.",
    "Select Inline if you want the LTI content to open in an IFrame in the current page. Select Modal if you want the LTI content to open in a modal window in the current page. Select New Window if you want the LTI content to open in a new browser window. This setting is only used when Hide External Tool is set to False.": "Seleccione En l\u00ednea si desea que el contenido LTI se abra en un IFrame en la p\u00e1gina actual. Seleccione Modal si desea que el contenido LTI se abra en una ventana modal en la p\u00e1gina actual. Seleccione Nueva ventana si desea que el contenido LTI se abra en una nueva ventana del navegador. Esta configuraci\u00f3n solo se usa cuando Ocultar herramienta externa est\u00e1 configurada en Falso.",
    "Select True if this component will receive a numerical score from the external LTI system.": "Seleccione True si este componente recibir\u00e1 una puntuaci\u00f3n num\u00e9rica desde un sistema LTI externo.",
    "Select True if you want to enable LTI Advantage Deep Linking.": "Seleccione Verdadero si desea habilitar LTI Advantage Deep Linking.",
    "Select True if you want to use this component as a placeholder for syncing with an external grading  system rather than launch an external tool.  This setting hides the Launch button and any IFrames for this component.": "Seleccione True si desea usar este componente como marcador para sincronizarse con un servicio externo en lugar de lanzar una herramienta externa. Esta opci\u00f3n oculta el bot\u00f3n de Lanzar y cualquier iframe para este componente.",
    "Select True to allow third party systems to post grades past the deadline.": "Seleccione Verdadero para permitir que los sistemas de terceros publiquen calificaciones m\u00e1s all\u00e1 de la fecha l\u00edmite.",
    "Select True to request the user's email address.": "Seleccione Verdadero para solicitar el correo electr\u00f3nico del usuario.",
    "Select True to request the user's full name.": "Seleccione Verdadero para solicitar el nombre completo del usuario.",
    "Select True to request the user's username.": "Selecciona Verdadero para solicitar el nombre de usuario del usuario.",
    "Select True to send the extra parameters, which might contain Personally Identifiable Information. The processors are site-wide, please consult the site administrator if you have any questions.": "Seleccione Verdadero para enviar los par\u00e1metros adicionales, que pueden contener informaci\u00f3n de identificaci\u00f3n personal. Los procesadores son para todo el sitio; consulte al administrador del sitio si tiene alguna pregunta.",
    "Select how the tool's public key information will be specified.": "Seleccione c\u00f3mo se especificar\u00e1 la informaci\u00f3n de la clave p\u00fablica de la herramienta.",
    "Select the LTI version that your tool supports.<br />The XBlock LTI Consumer fully supports LTI 1.1.1, LTI 1.3 and LTI Advantage features.": "Seleccione la versi\u00f3n LTI que admite su herramienta.<br /> XBlock LTI Consumer es totalmente compatible con las funciones LTI 1.1.1, LTI 1.3 y LTI Advantage.",
    "Send extra parameters": "Enviar par\u00e1metros adicionales",
    "Sending you back to your exam.": "Envi\u00e1ndote de regreso a tu examen.",
    "Students don't have permissions to perform LTI Deep Linking configuration launches.": "Los estudiantes no tienen permisos para realizar lanzamientos de configuraci\u00f3n de LTI Deep Linking.",
    "The Deep Linking configuration stored is presented below:": "La configuraci\u00f3n de Deep Linking almacenada se presenta a continuaci\u00f3n:",
    "The LTI Deep Linking content was successfully saved in the LMS.": "El contenido de LTI Deep Linking se guard\u00f3 correctamente en el LMS.",
    "The URL of the external tool that initiates the launch.": "La URL de la herramienta externa que inicia el lanzamiento.",
    "The score kept in the xblock KVS -- duplicate of the published score in django DB": "La calificaci\u00f3n almacenada en xblock KVS -- un duplicado de la calificaci\u00f3n publicada en django DB",
    "The selected content type is not supported by Open edX.": "El tipo de contenido seleccionado no es compatible con Open edX.",
    "The specified LTI ID is not configured in this course's Advanced Settings.": "El ID de LTI especificado no est\u00e1 configurado en la Configuraci\u00f3n avanzada de este curso.",
    "There was an error while launching the LTI tool: ": "Se produjo un error al iniciar la herramienta LTI: ",
    "There was an error while starting your LTI proctored assessment.": "Se produjo un error al iniciar su evaluaci\u00f3n supervisada de LTI.",
    "To do that, make sure the block is published and click the link below:": "Para hacer eso, aseg\u00farese de que el bloque est\u00e9 publicado y haga clic en el enlace a continuaci\u00f3n:",
    "To set up the LTI integration, you need to register the LMS in the tool with the information provided below.": "Para configurar la integraci\u00f3n LTI, debe registrar el LMS en la herramienta con la informaci\u00f3n que se proporciona a continuaci\u00f3n.",
    "Tool Initiate Login URL": "Herramienta Iniciar URL de inicio de sesi\u00f3n",
    "Tool Keyset URL": "URL del conjunto de claves de la herramienta",
    "Tool Launch URL": "URL de inicio de la herramienta",
    "Tool Public Key": "Clave p\u00fablica de la herramienta",
    "Tool Public Key Mode": "Modo de clave p\u00fablica de herramienta",
    "Unauthorized.": "No autorizado.",
    "Valid urls the Tool may request us to redirect the id token to. The redirect uris are often the same as the launch url/deep linking url so if this field is empty, it will use them as the default. If you need to use different redirect uri's, enter them here. If you use this field you must enter all valid redirect uri's the tool may request.": "URL v\u00e1lidas a las que la herramienta puede solicitarnos que redirijamos el token de identificaci\u00f3n. Las URI de redireccionamiento suelen ser las mismas que la URL de inicio/URL de enlace profundo, por lo que si este campo est\u00e1 vac\u00edo, las usar\u00e1 como predeterminadas. Si necesita utilizar diferentes URL de redireccionamiento, ingr\u00e9selo aqu\u00ed. Si utiliza este campo, debe ingresar todos los URI de redireccionamiento v\u00e1lidos que la herramienta pueda solicitar.",
    "You can configure this tool's content using LTI Deep Linking.": "Puede configurar el contenido de esta herramienta utilizando LTI Deep Linking.",
    "You can safely close this page now.": "Puede cerrar esta p\u00e1gina de forma segura ahora.",
    "You don't have access to save LTI Content Items.": "No tiene acceso para guardar elementos de contenido LTI.",
    "[LTI]: Real user not found against anon_id: {}": "[LTI]: Usuario real no encontrado con anon_id: {}"
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
    "DATETIME_FORMAT": "j \\d\\e F \\d\\e Y \\a \\l\\a\\s H:i",
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
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j \\d\\e F \\d\\e Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d/%m/%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j \\d\\e F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d/m/Y H:i",
    "SHORT_DATE_FORMAT": "d/m/Y",
    "THOUSAND_SEPARATOR": "\u00a0",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F \\d\\e Y"
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
        