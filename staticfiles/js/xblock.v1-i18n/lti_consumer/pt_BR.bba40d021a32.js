
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
    "Accept grades past deadline": "Aceitar notas ap\u00f3s o prazo final",
    "Access Token URL: ": "URL do token de acesso: ",
    "Add the key/value pair for any custom parameters, such as the page your e-book should open to or the background color for this component. Ex. [\"page=1\", \"color=white\"]<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Adicione o par chave/valor para quaisquer par\u00e2metros personalizados, como a p\u00e1gina em que seu e-book deve abrir ou a cor de fundo deste componente. Ex. [&quot;p\u00e1gina=1&quot;, &quot;cor=branco&quot;]<br /> Consulte a documenta\u00e7\u00e3o {docs_anchor_open} edX LTI {anchor_close} para obter mais detalhes sobre essa configura\u00e7\u00e3o.",
    "Allow tools to manage and submit grade (programmatic)": "Permitir que ferramentas gerenciem e enviem notas (program\u00e1tica)",
    "Allow tools to submit grades only (declarative)": "Permitir que as ferramentas enviem apenas notas (declarativa)",
    "Button Text": "Texto do Bot\u00e3o",
    "CONFIG_ON_XBLOCK and CONFIG_EXTERNAL are not supported for LTI 1.3 Proctoring Services.": "CONFIG_ON_XBLOCK e CONFIG_EXTERNAL n\u00e3o s\u00e3o suportados para servi\u00e7os de monitoramento LTI 1.3.",
    "Cancel": "Cancelar",
    "Click Cancel to return to this page without sending your information.": "Clique em Cancelar para retornar a esta p\u00e1gina sem enviar suas informa\u00e7\u00f5es.",
    "Click OK to have your e-mail address sent to a 3rd party application.": "Clique em OK para que seu endere\u00e7o de e-mail seja enviado para um aplicativo de terceiros.",
    "Click OK to have your full name and e-mail address sent to a 3rd party application.": "Clique em OK para que seu nome completo e endere\u00e7o de e-mail sejam enviados para um aplicativo de terceiros.",
    "Click OK to have your full name sent to a 3rd party application.": "Clique em OK para que seu nome completo seja enviado para um aplicativo de terceiros.",
    "Click OK to have your username and e-mail address sent to a 3rd party application.": "Clique em OK para que seu nome de usu\u00e1rio e endere\u00e7o de e-mail sejam enviados para um aplicativo de terceiros.",
    "Click OK to have your username and full name sent to a 3rd party application.": "Clique em OK para que seu nome de usu\u00e1rio e nome completo sejam enviados para um aplicativo de terceiros.",
    "Click OK to have your username sent to a 3rd party application.": "Clique em OK para que seu nome de usu\u00e1rio seja enviado para um aplicativo de terceiros.",
    "Click OK to have your username, full name, and e-mail address sent to a 3rd party application.": "Clique em OK para que seu nome de usu\u00e1rio, nome completo e endere\u00e7o de e-mail sejam enviados para um aplicativo de terceiros.",
    "Client ID used by LTI tool": "ID do cliente usado pela ferramenta LTI",
    "Client ID: ": "ID do Cliente: ",
    "Client key provided by the LTI tool provider.": "Chave do cliente fornecida pelo fornecedor da ferramenta LTI.",
    "Client secret provided by the LTI tool provider.": "Segredo do cliente fornecido pelo fornecedor da ferramenta LTI.",
    "Comment as returned from grader, LTI2.0 spec": "Coment\u00e1rio conforme o retorno do avaliador, espec\u00edfico do LTI2.0",
    "Configuration Stored on XBlock fields": "Configura\u00e7\u00e3o armazenada em campos XBlock",
    "Configuration Stored on external service": "Configura\u00e7\u00e3o armazenada em servi\u00e7o externo",
    "Configuration Stored on this model": "Configura\u00e7\u00e3o armazenada neste modelo",
    "Configuration Type": "Tipo de configura\u00e7\u00e3o",
    "Configuration on block": "Configura\u00e7\u00e3o no bloco",
    "Could not get user data for current request": "N\u00e3o foi poss\u00edvel obter os dados do usu\u00e1rio para a solicita\u00e7\u00e3o atual",
    "Could not get user id for current request": "N\u00e3o foi poss\u00edvel obter o ID do usu\u00e1rio para a solicita\u00e7\u00e3o atual",
    "Could not parse LTI passport: {lti_passport!r}. Should be \"id:key:secret\" string.": "N\u00e3o foi poss\u00edvel analisar o passaporte LTI: {lti_passport!r}. Deve ser a string &quot;id:key:secret&quot;.",
    "Could not parse custom parameter: {custom_parameter!r}. Should be \"x=y\" string.": "N\u00e3o foi poss\u00edvel analisar o par\u00e2metro personalizado: {custom_parameter!r}. Deve ser uma string &quot;x = y&quot;.",
    "Custom Parameters": "Par\u00e2metros de customiza\u00e7\u00e3o",
    "Custom Parameters must be a list": "Os par\u00e2metros personalizados devem ser uma lista",
    "Custom Parameters should be strings in \"x=y\" format.": "Os par\u00e2metros personalizados devem ser strings no formato &quot;x=y&quot;.",
    "DEPRECATED - This is now stored in the LtiConfiguration model.": "DEPRECADO - Agora est\u00e1 armazenado no modelo LtiConfiguration.",
    "Database Configuration": "Configura\u00e7\u00e3o do banco de dados",
    "Deep Linking Launch - Configure tool": "Lan\u00e7amento de Deep Linking - ferramenta de configura\u00e7\u00e3o",
    "Deep Linking Launch URL": "URL de lan\u00e7amento de link direto",
    "Deep Linking is configured on this tool.": "Deep Linking est\u00e1 configurado nesta ferramenta.",
    "Deep linking": "Links diretos",
    "Deployment ID: ": "ID de implanta\u00e7\u00e3o: ",
    "Disabled": "Desabilitado",
    "Display Name": "Exibir Nome",
    "Enable LTI NRPS": "Ativar NRPS de LTI",
    "Enable LTI Names and Role Provisioning Services.": "Habilite nomes LTI e servi\u00e7os de provisionamento de fun\u00e7\u00f5es.",
    "Enable the LTI-AGS service and select the functionality enabled for LTI tools. The 'declarative' mode (default) will provide a tool with a LineItem created from the XBlock settings, while the 'programmatic' one will allow tools to manage, create and link the grades.": "Habilite o servi\u00e7o LTI-AGS e selecione a funcionalidade habilitada para ferramentas LTI. O modo \u2018declarativo\u2019 (padr\u00e3o) fornecer\u00e1 uma ferramenta com um LineItem criado a partir das configura\u00e7\u00f5es do XBlock, enquanto o modo \u2018program\u00e1tico\u2019 permitir\u00e1 ferramentas para gerenciar, criar e vincular as notas.",
    "Enter a description of the third party application. If requesting username and/or email, use this text box to inform users why their username and/or email will be forwarded to a third party application.": "Digite uma descri\u00e7\u00e3o do aplicativo de terceiros. Se solicitando nome de usu\u00e1rio e/ou e-mail, use esta caixa de texto para informar aos usu\u00e1rios por que seu nome de usu\u00e1rio e/ou e-mail ser\u00e1 encaminhado para um aplicativo de terceiros.",
    "Enter the LTI 1.3 Tool Launch URL. <br />This is the URL the LMS will use to launch the LTI Tool.": "Insira o URL de lan\u00e7amento da ferramenta LTI 1.3.<br /> Este \u00e9 o URL que o LMS usar\u00e1 para iniciar a ferramenta LTI.",
    "Enter the LTI 1.3 Tool OIDC Authorization url (can also be called login or login initiation URL).<br />This is the URL the LMS will use to start a LTI authorization prior to doing the launch request.": "Insira o URL de autoriza\u00e7\u00e3o OIDC da ferramenta LTI 1.3 (tamb\u00e9m pode ser chamado de login ou URL de inicia\u00e7\u00e3o de login).<br /> Este \u00e9 o URL que o LMS usar\u00e1 para iniciar uma autoriza\u00e7\u00e3o de LTI antes de fazer a solicita\u00e7\u00e3o de lan\u00e7amento.",
    "Enter the LTI 1.3 Tool's JWK keysets URL.<br />This link should retrieve a JSON file containing public keys and signature algorithm information, so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Insira o URL dos conjuntos de chaves JWK da ferramenta LTI 1.3.<br /> Este link deve recuperar um arquivo JSON contendo chaves p\u00fablicas e informa\u00e7\u00f5es do algoritmo de assinatura, para que o LMS possa verificar se as mensagens e solicita\u00e7\u00f5es de lan\u00e7amento recebidas possuem a assinatura da ferramenta.<br /> <b>Isso n\u00e3o \u00e9 necess\u00e1rio ao fazer lan\u00e7amentos de LTI 1.3 sem solicita\u00e7\u00f5es de LTI Advantage nem de Resultados B\u00e1sicos.</b>",
    "Enter the LTI 1.3 Tool's public key.<br />This is a string that starts with '-----BEGIN PUBLIC KEY-----' and is required so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Insira a chave p\u00fablica da ferramenta LTI 1.3.<br /> Esta \u00e9 uma string que come\u00e7a com &#39;-----BEGIN PUBLIC KEY-----&#39; e \u00e9 necess\u00e1ria para que o LMS possa verificar se as mensagens e solicita\u00e7\u00f5es de lan\u00e7amento recebidas possuem a assinatura da ferramenta.<br /> <b>Isso n\u00e3o \u00e9 necess\u00e1rio ao fazer lan\u00e7amentos de LTI 1.3 sem solicita\u00e7\u00f5es de LTI Advantage nem de Resultados B\u00e1sicos.</b>",
    "Enter the LTI Advantage Deep Linking Launch URL. If the tool does not specify one, use the same value as 'Tool Launch URL'.": "Insira o URL de lan\u00e7amento do LTI Advantage Deep Linking. Se a ferramenta n\u00e3o especificar um, use o mesmo valor de &#39;URL de inicializa\u00e7\u00e3o da ferramenta&#39;.",
    "Enter the LTI ID for the external LTI provider. This value must be the same LTI ID that you entered in the LTI Passports setting on the Advanced Settings page.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Insira o ID de LTI do provedor de LTI externo. Esse valor deve ser o mesmo ID de LTI inserido na configura\u00e7\u00e3o LTI Passports na p\u00e1gina Configura\u00e7\u00f5es avan\u00e7adas.<br /> Consulte a documenta\u00e7\u00e3o {docs_anchor_open} edX LTI {anchor_close} para obter mais detalhes sobre essa configura\u00e7\u00e3o.",
    "Enter the URL of the external tool that this component launches. This setting is only used when Hide External Tool is set to False.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Insira o URL da ferramenta externa que este componente inicia. Esta configura\u00e7\u00e3o s\u00f3 \u00e9 usada quando Ocultar ferramenta externa est\u00e1 definido como Falso.<br /> Consulte a documenta\u00e7\u00e3o {docs_anchor_open} edX LTI {anchor_close} para obter mais detalhes sobre essa configura\u00e7\u00e3o.",
    "Enter the desired pixel height of the iframe which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Inline.": "Insira a altura de pixel desejada do iframe que conter\u00e1 a ferramenta LTI. Essa configura\u00e7\u00e3o s\u00f3 \u00e9 usada quando Ocultar ferramenta externa est\u00e1 definido como Falso e o destino de inicializa\u00e7\u00e3o do LTI est\u00e1 definido como Inline.",
    "Enter the desired viewport percentage height of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Insira a altura percentual da janela de visualiza\u00e7\u00e3o desejada da sobreposi\u00e7\u00e3o modal que conter\u00e1 a ferramenta LTI. Esta configura\u00e7\u00e3o s\u00f3 \u00e9 usada quando Ocultar ferramenta externa est\u00e1 definido como Falso e o destino de inicializa\u00e7\u00e3o do LTI est\u00e1 definido como Modal.",
    "Enter the desired viewport percentage width of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Insira a largura percentual da janela de visualiza\u00e7\u00e3o desejada da sobreposi\u00e7\u00e3o modal que conter\u00e1 a ferramenta LTI. Esta configura\u00e7\u00e3o s\u00f3 \u00e9 usada quando Ocultar ferramenta externa est\u00e1 definido como Falso e o destino de inicializa\u00e7\u00e3o do LTI est\u00e1 definido como Modal.",
    "Enter the name that students see for this component. Analytics reports may also use the display name to identify this component.": "Insira o nome que os alunos veem para este componente. Os relat\u00f3rios do Analytics tamb\u00e9m podem usar o nome de exibi\u00e7\u00e3o para identificar esse componente.",
    "Enter the number of points possible for this component.  The default value is 1.0.  This setting is only used when Scored is set to True.": "Entre com o n\u00famero de pontos poss\u00edveis para este componente. O valor padr\u00e3o \u00e9 1.0. Esta configura\u00e7\u00e3o s\u00f3 \u00e9 usada quando a op\u00e7\u00e3o \"Pontu\u00e1vel\" estiver marcada como Verdadeiro.",
    "Enter the reusable LTI external configuration ID provided by the support staff.": "Insira o ID de configura\u00e7\u00e3o externa do LTI reutiliz\u00e1vel fornecido pela equipe de suporte.",
    "Enter the text on the button used to launch the third party application. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal or New Window.": "Digite o texto no bot\u00e3o usado para iniciar o aplicativo de terceiros. Esta configura\u00e7\u00e3o s\u00f3 \u00e9 usada quando Ocultar ferramenta externa est\u00e1 definido como Falso e o destino de inicializa\u00e7\u00e3o do LTI est\u00e1 definido como Modal ou Nova janela.",
    "Hide External Tool": "Esconder ferramenta externa",
    "If you run deep linking again, the content above will be replaced.": "Se voc\u00ea executar links diretos novamente, o conte\u00fado acima ser\u00e1 substitu\u00eddo.",
    "If you're seeing this on a live course, please contact the course staff.": "Se voc\u00ea estiver vendo isso em um curso ao vivo, entre em contato com a equipe do curso.",
    "Inline Height": "Altura embutida",
    "Invalid LTI configuration.": "Configura\u00e7\u00e3o de LTI inv\u00e1lida.",
    "Invalid token header. No credentials provided.": "Cabe\u00e7alho de token inv\u00e1lido. Nenhuma credencial fornecida.",
    "Invalid token header. Token string should not contain spaces.": "Cabe\u00e7alho de token inv\u00e1lido. A string do token n\u00e3o deve conter espa\u00e7os.",
    "Invalid token signature.": "Assinatura de token inv\u00e1lida.",
    "Keyset URL: ": "URL do conjunto de chaves: ",
    "LTI 1.3 Block Client ID - DEPRECATED": "ID do cliente do bloco LTI 1.3 - DESCONTINUADO",
    "LTI 1.3 Block Key - DEPRECATED": "Chave de bloco LTI 1.3 - obsoleto",
    "LTI 1.3 Launches can only be performed from the LMS.": "Os lan\u00e7amentos do LTI 1.3 s\u00f3 podem ser realizados a partir do LMS.",
    "LTI Application Information": "Informa\u00e7\u00f5es sobre o aplicativo LTI",
    "LTI Assignment and Grades Service": "Servi\u00e7o de Atribui\u00e7\u00e3o e Notas LTI",
    "LTI Configuration stored on the model for LTI 1.3 must have a value for one of lti_1p3_tool_public_key or lti_1p3_tool_keyset_url.": "A configura\u00e7\u00e3o de LTI armazenada no modelo para LTI 1.3 deve ter um valor para lti_1p3_tool_public_key ou lti_1p3_tool_keyset_url.",
    "LTI Configuration stores on XBlock needs a block location set.": "Os armazenamentos de configura\u00e7\u00e3o LTI no XBlock precisam de um conjunto de localiza\u00e7\u00e3o de bloco.",
    "LTI Configuration using reusable configuration needs a external ID in \"x:y\" format.": "A configura\u00e7\u00e3o LTI que usa configura\u00e7\u00e3o reutiliz\u00e1vel precisa de um ID externo no formato &quot;x:y&quot;.",
    "LTI Consumer": "Consumidor LTI",
    "LTI Deep Linking": "Links profundos de LTI",
    "LTI Deep Linking failed.": "Falha no link direto LTI.",
    "LTI ID": "ID do LTI",
    "LTI Launch Target": "Meta de lan\u00e7amento LTI",
    "LTI Reusable Configuration ID": "ID de configura\u00e7\u00e3o reutiliz\u00e1vel de LTI",
    "LTI URL": "URL do LTI",
    "LTI Version": "Vers\u00e3o LTI",
    "LTI configuration data.": "Dados de configura\u00e7\u00e3o LTI.",
    "LTI configuration not found.": "Configura\u00e7\u00e3o LTI n\u00e3o encontrada.",
    "Login URL: ": "URL de login: ",
    "Missing LTI 1.3 authentication token.": "Token de autentica\u00e7\u00e3o LTI 1.3 ausente.",
    "Modal Height": "Altura Modal",
    "Modal Width": "Largura Modal",
    "No valid user id found in endpoint URL": "Nenhum ID de usu\u00e1rio v\u00e1lido encontrado no URL do endpoint",
    "OK": "OK",
    "Platform's generated JWK keyset.": "Conjunto de chaves JWK gerado pela plataforma.",
    "Platform's generated Private key ID": "ID da chave privada gerada pela plataforma",
    "Platform's generated Private key. Keep this value secret.": "Chave privada gerada pela plataforma. Mantenha esse valor em segredo.",
    "Please check that you have course staff permissions and double check this block's LTI settings.": "Verifique se voc\u00ea tem permiss\u00f5es da equipe do curso e verifique novamente as configura\u00e7\u00f5es de LTI deste bloco.",
    "Press to Launch": "Pressione para iniciar",
    "Registered Redirect URIs": "URIs de redirecionamento registrados",
    "Request user's email": "Requerer o endere\u00e7o de e-mail do usu\u00e1rio",
    "Request user's full name": "Solicitar o nome completo do usu\u00e1rio",
    "Request user's username": "Requerer o nome de usu\u00e1rio",
    "Return to exam.": "Retorne ao exame.",
    "Reusable Configuration": "Configura\u00e7\u00e3o reutiliz\u00e1vel",
    "Reusable configuration ID must be set when using external config (Example: \"x:y\").": "O ID de configura\u00e7\u00e3o reutiliz\u00e1vel deve ser definido ao usar configura\u00e7\u00e3o externa (exemplo: &quot;x:y&quot;).",
    "Scored": "Pontuado",
    "Select 'Configuration on block' to configure a new LTI Tool. If the support staff provided you with a pre-configured LTI reusable Tool ID, select'Reusable Configuration' and enter it in the text field below.": "Selecione &#39;Configura\u00e7\u00e3o no bloco&#39; para configurar uma nova ferramenta LTI. Se a equipe de suporte forneceu a voc\u00ea um ID de ferramenta reutiliz\u00e1vel de LTI pr\u00e9-configurado, selecione &#39;Configura\u00e7\u00e3o reutiliz\u00e1vel&#39; e insira-o no campo de texto abaixo.",
    "Select Inline if you want the LTI content to open in an IFrame in the current page. Select Modal if you want the LTI content to open in a modal window in the current page. Select New Window if you want the LTI content to open in a new browser window. This setting is only used when Hide External Tool is set to False.": "Selecione Inline se desejar que o conte\u00fado LTI seja aberto em um IFrame na p\u00e1gina atual. Selecione Modal se desejar que o conte\u00fado LTI seja aberto em uma janela modal na p\u00e1gina atual. Selecione Nova janela se desejar que o conte\u00fado LTI seja aberto em uma nova janela do navegador. Esta configura\u00e7\u00e3o s\u00f3 \u00e9 usada quando Ocultar ferramenta externa est\u00e1 definido como Falso.",
    "Select True if this component will receive a numerical score from the external LTI system.": "Selecione Verdadeiro se este componente for receber uma pontua\u00e7\u00e3o num\u00e9rica do sistema LTI externo.",
    "Select True if you want to enable LTI Advantage Deep Linking.": "Selecione Verdadeiro se quiser ativar o LTI Advantage Deep Linking.",
    "Select True if you want to use this component as a placeholder for syncing with an external grading  system rather than launch an external tool.  This setting hides the Launch button and any IFrames for this component.": "Selecione True caso deseje deseje utilizar este componente como um substituto para sincroniza\u00e7\u00e3o com um sistema de avalia\u00e7\u00e3o externo ao inv\u00e9s de abrir uma ferramenta externa. Esta configura\u00e7\u00e3o oculta o bot\u00e3o Abrir e quaisquer IFrames para este componente.",
    "Select True to allow third party systems to post grades past the deadline.": "Selecione Verdadeiro para permitir que sistemas de terceiros possam postar notas fora do prazo.",
    "Select True to request the user's email address.": "Selecione Verdadeiro para solicitar o endere\u00e7o de e-mail do usu\u00e1rio.",
    "Select True to request the user's full name.": "Selecione True para solicitar o nome completo do usu\u00e1rio.",
    "Select True to request the user's username.": "Selecione Verdadeiro para solicitar o nome dos usu\u00e1rios.",
    "Select True to send the extra parameters, which might contain Personally Identifiable Information. The processors are site-wide, please consult the site administrator if you have any questions.": "Selecione True para enviar os par\u00e2metros extras, que podem conter informa\u00e7\u00f5es de identifica\u00e7\u00e3o pessoal. Os processadores abrangem todo o site, consulte o administrador do site se tiver alguma d\u00favida.",
    "Select how the tool's public key information will be specified.": "Selecione como as informa\u00e7\u00f5es da chave p\u00fablica da ferramenta ser\u00e3o especificadas.",
    "Select the LTI version that your tool supports.<br />The XBlock LTI Consumer fully supports LTI 1.1.1, LTI 1.3 and LTI Advantage features.": "Selecione a vers\u00e3o LTI compat\u00edvel com sua ferramenta.<br /> O XBlock LTI Consumer oferece suporte total aos recursos LTI 1.1.1, LTI 1.3 e LTI Advantage.",
    "Send extra parameters": "Envie par\u00e2metros extras",
    "Sending you back to your exam.": "Mandando voc\u00ea de volta para o seu exame.",
    "Students don't have permissions to perform LTI Deep Linking configuration launches.": "Os alunos n\u00e3o t\u00eam permiss\u00e3o para executar configura\u00e7\u00f5es de LTI Deep Linking.",
    "The Deep Linking configuration stored is presented below:": "A configura\u00e7\u00e3o do Deep Linking armazenada \u00e9 apresentada abaixo:",
    "The LTI Deep Linking content was successfully saved in the LMS.": "O conte\u00fado do LTI Deep Linking foi salvo com sucesso no LMS.",
    "The URL of the external tool that initiates the launch.": "A URL da ferramenta externa que inicia o lan\u00e7amento.",
    "The score kept in the xblock KVS -- duplicate of the published score in django DB": "A pontua\u00e7\u00e3o utilizada no xblock KVS - c\u00f3pia da pontua\u00e7\u00e3o publicada no BD do django.",
    "The selected content type is not supported by Open edX.": "O tipo de conte\u00fado selecionado n\u00e3o \u00e9 compat\u00edvel com Open edX.",
    "The specified LTI ID is not configured in this course's Advanced Settings.": "O ID do LTI especificado n\u00e3o est\u00e1 configurado nas configura\u00e7\u00f5es avan\u00e7adas deste curso.",
    "There was an error while launching the LTI tool: ": "Ocorreu um erro ao iniciar a ferramenta LTI: ",
    "There was an error while starting your LTI proctored assessment.": "Ocorreu um erro ao iniciar sua avalia\u00e7\u00e3o supervisionada de LTI.",
    "To do that, make sure the block is published and click the link below:": "Para fazer isso, certifique-se de que o bloco esteja publicado e clique no link abaixo:",
    "To set up the LTI integration, you need to register the LMS in the tool with the information provided below.": "Para configurar a integra\u00e7\u00e3o LTI, \u00e9 necess\u00e1rio cadastrar o LMS na ferramenta com as informa\u00e7\u00f5es fornecidas abaixo.",
    "Tool Initiate Login URL": "URL de login de in\u00edcio da ferramenta",
    "Tool Keyset URL": "URL do conjunto de chaves de ferramentas",
    "Tool Launch URL": "URL de lan\u00e7amento da ferramenta",
    "Tool Public Key": "Chave p\u00fablica da ferramenta",
    "Tool Public Key Mode": "Modo de chave p\u00fablica da ferramenta",
    "Unauthorized.": "N\u00e3o autorizado.",
    "Valid urls the Tool may request us to redirect the id token to. The redirect uris are often the same as the launch url/deep linking url so if this field is empty, it will use them as the default. If you need to use different redirect uri's, enter them here. If you use this field you must enter all valid redirect uri's the tool may request.": "URLs v\u00e1lidos para os quais a ferramenta pode solicitar o redirecionamento do token de identifica\u00e7\u00e3o. Os uris de redirecionamento geralmente s\u00e3o iguais ao URL de lan\u00e7amento/URL de link direto, portanto, se este campo estiver vazio, ele os usar\u00e1 como padr\u00e3o. Se voc\u00ea precisar usar uris de redirecionamento diferentes, insira-os aqui. Se voc\u00ea usar este campo, dever\u00e1 inserir todos os URLs de redirecionamento v\u00e1lidos que a ferramenta pode solicitar.",
    "You can configure this tool's content using LTI Deep Linking.": "Voc\u00ea pode configurar o conte\u00fado desta ferramenta usando LTI Deep Linking.",
    "You can safely close this page now.": "Voc\u00ea pode fechar esta p\u00e1gina com seguran\u00e7a agora.",
    "You don't have access to save LTI Content Items.": "Voc\u00ea n\u00e3o tem acesso para salvar itens de conte\u00fado de LTI.",
    "[LTI]: Real user not found against anon_id: {}": "[LTI]: usu\u00e1rio real n\u00e3o encontrado em anon_id: {}"
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
    "DATETIME_FORMAT": "j \\d\\e F \\d\\e Y \u00e0\\s H:i",
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
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "j \\d\\e F",
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
        