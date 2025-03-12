
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
    "Accept grades past deadline": "Kubali makataa yaliyopita",
    "Access Token URL: ": "URL ya Tokeni ya Ufikiaji: ",
    "Add the key/value pair for any custom parameters, such as the page your e-book should open to or the background color for this component. Ex. [\"page=1\", \"color=white\"]<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Ongeza jozi ya ufunguo/thamani kwa vigezo vyovyote maalum, kama vile ukurasa ambao kitabu chako cha kielektroniki kinapaswa kufungua au rangi ya usuli ya kijenzi hiki. Kwa mfano. [&quot;ukurasa=1&quot;, &quot;rangi=nyeupe&quot;]<br /> Tazama hati za {docs_anchor_open} edX LTI {anchor_close} kwa maelezo zaidi juu ya mpangilio huu.",
    "Allow tools to manage and submit grade (programmatic)": "Ruhusu zana kudhibiti na kuwasilisha daraja (programu)",
    "Allow tools to submit grades only (declarative)": "Ruhusu zana kuwasilisha alama pekee (taarifa)",
    "Button Text": "Maandishi ya Kitufe",
    "CONFIG_ON_XBLOCK and CONFIG_EXTERNAL are not supported for LTI 1.3 Proctoring Services.": "CONFIG_ON_XBLOCK na CONFIG_EXTERNAL hazitumiki kwa Huduma za Uzalishaji wa LTI 1.3.",
    "Cancel": "Ghairi",
    "Click Cancel to return to this page without sending your information.": "Bofya Ghairi ili kurudi kwenye ukurasa huu bila kutuma maelezo yako.",
    "Click OK to have your e-mail address sent to a 3rd party application.": "Bofya SAWA ili barua pepe yako itumwe kwa ombi la watu wengine.",
    "Click OK to have your full name and e-mail address sent to a 3rd party application.": "Bofya SAWA ili jina lako kamili na anwani ya barua pepe kutumwa kwa programu nyingine.",
    "Click OK to have your full name sent to a 3rd party application.": "Bofya SAWA ili jina lako kamili litumwe kwa programu ya mtu mwingine.",
    "Click OK to have your username and e-mail address sent to a 3rd party application.": "Bofya SAWA ili jina lako la mtumiaji na barua pepe kutumwa kwa programu nyingine.",
    "Click OK to have your username and full name sent to a 3rd party application.": "Bofya SAWA ili jina lako la mtumiaji na jina kamili litumwe kwa programu ya mtu mwingine.",
    "Click OK to have your username sent to a 3rd party application.": "Bofya SAWA ili jina lako la mtumiaji litumwe kwa programu ya mtu mwingine.",
    "Click OK to have your username, full name, and e-mail address sent to a 3rd party application.": "Bofya SAWA ili jina lako la mtumiaji, jina kamili, na anwani ya barua pepe kutumwa kwa programu ya mtu mwingine.",
    "Client ID used by LTI tool": "Kitambulisho cha Mteja kinachotumiwa na zana ya LTI",
    "Client ID: ": "Kitambulisho cha Mteja: ",
    "Client key provided by the LTI tool provider.": "Kitufe cha mteja kilichotolewa na mtoaji zana wa LTI.",
    "Client secret provided by the LTI tool provider.": "Siri ya mteja iliyotolewa na mtoaji wa zana za LTI.",
    "Comment as returned from grader, LTI2.0 spec": "Maoni kama yalivyorejeshwa kutoka kwa grader, LTI2.0 spec",
    "Configuration Stored on XBlock fields": "Usanidi Umehifadhiwa kwenye sehemu za XBlock",
    "Configuration Stored on external service": "Usanidi Umehifadhiwa kwenye huduma ya nje",
    "Configuration Stored on this model": "Usanidi Umehifadhiwa kwenye muundo huu",
    "Configuration Type": "Aina ya Usanidi",
    "Configuration on block": "Usanidi kwenye block",
    "Could not get user data for current request": "Haikuweza kupata data ya mtumiaji kwa ombi la sasa",
    "Could not get user id for current request": "Haikuweza kupata kitambulisho cha mtumiaji kwa ombi la sasa",
    "Could not parse LTI passport: {lti_passport!r}. Should be \"id:key:secret\" string.": "Haikuweza kuchanganua pasipoti ya LTI: {lti_passport!r}. Inapaswa kuwa &quot;id:key:secret&quot; kamba.",
    "Could not parse custom parameter: {custom_parameter!r}. Should be \"x=y\" string.": "Haikuweza kuchanganua kigezo maalum: {custom_parameter!r}. Inapaswa kuwa &quot;x=y&quot; kamba.",
    "Custom Parameters": "Vigezo Maalum",
    "Custom Parameters must be a list": "Vigezo Maalum lazima iwe orodha",
    "Custom Parameters should be strings in \"x=y\" format.": "Vigezo Maalum vinapaswa kuwa mifuatano katika umbizo la &quot;x=y&quot;.",
    "DEPRECATED - This is now stored in the LtiConfiguration model.": "IMEACHILIWA - Hii sasa imehifadhiwa katika muundo wa LtiConfiguration.",
    "Database Configuration": "Usanidi wa Hifadhidata",
    "Deep Linking Launch - Configure tool": "Uzinduzi wa Kuunganisha Kina - Sanidi zana",
    "Deep Linking Launch URL": "URL ya Uzinduzi wa Kuunganisha Kina",
    "Deep Linking is configured on this tool.": "Kuunganisha kwa kina kumesanidiwa kwenye zana hii.",
    "Deep linking": "Kuunganisha kwa kina",
    "Deployment ID: ": "Kitambulisho cha Usambazaji: ",
    "Disabled": "Imezimwa",
    "Display Name": "Jina la Kuonyesha",
    "Enable LTI NRPS": "Washa LTI NRPS",
    "Enable LTI Names and Role Provisioning Services.": "Washa Majina ya LTI na Huduma za Utoaji Wajibu.",
    "Enable the LTI-AGS service and select the functionality enabled for LTI tools. The 'declarative' mode (default) will provide a tool with a LineItem created from the XBlock settings, while the 'programmatic' one will allow tools to manage, create and link the grades.": "Washa huduma ya LTI-AGS na uchague utendakazi uliowezeshwa kwa zana za LTI. Hali ya &#39;declarative&#39; (chaguo-msingi) itatoa zana yenye LineItem iliyoundwa kutoka kwa mipangilio ya XBlock, huku ile ya &#39;programu&#39; itaruhusu zana kudhibiti, kuunda na kuunganisha alama.",
    "Enter a description of the third party application. If requesting username and/or email, use this text box to inform users why their username and/or email will be forwarded to a third party application.": "Weka maelezo ya programu ya wahusika wengine. Ikiwa unaomba jina la mtumiaji na/au barua pepe, tumia kisanduku hiki cha maandishi kuwafahamisha watumiaji kwa nini jina lao la mtumiaji na/au barua pepe zitatumwa kwa programu nyingine.",
    "Enter the LTI 1.3 Tool Launch URL. <br />This is the URL the LMS will use to launch the LTI Tool.": "Weka URL ya Uzinduzi wa Zana ya LTI 1.3.<br /> Hii ndiyo URL ambayo LMS itatumia kuzindua Zana ya LTI.",
    "Enter the LTI 1.3 Tool OIDC Authorization url (can also be called login or login initiation URL).<br />This is the URL the LMS will use to start a LTI authorization prior to doing the launch request.": "Ingiza url ya Uidhinishaji wa Zana ya LTI 1.3 ya OIDC (inaweza pia kuitwa URL ya uanzishaji wa kuingia au kuingia).<br /> Hii ndiyo URL ambayo LMS itatumia kuanzisha uidhinishaji wa LTI kabla ya kufanya ombi la uzinduzi.",
    "Enter the LTI 1.3 Tool's JWK keysets URL.<br />This link should retrieve a JSON file containing public keys and signature algorithm information, so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Ingiza URL ya vitufe vya LTI 1.3 vya JWK.<br /> Kiungo hiki kinafaa kurejesha faili ya JSON iliyo na funguo za umma na maelezo ya algoriti ya sahihi, ili LMS iweze kuangalia kama ujumbe na maombi ya uzinduzi yaliyopokelewa yana saini kutoka kwa zana.<br /> <b>Hii haihitajiki unapofanya Uzinduzi wa LTI 1.3 bila Faida ya LTI wala maombi ya Matokeo ya Msingi.</b>",
    "Enter the LTI 1.3 Tool's public key.<br />This is a string that starts with '-----BEGIN PUBLIC KEY-----' and is required so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Weka kitufe cha umma cha LTI 1.3 Tool.<br /> Huu ni mfuatano unaoanza na &#39;-----ANZA UFUNGUO WA UMMA-----&#39; na inahitajika ili LMS iweze kuangalia ikiwa ujumbe na maombi ya uzinduzi yaliyopokelewa yana saini kutoka kwa zana.<br /> <b>Hii haihitajiki unapofanya Uzinduzi wa LTI 1.3 bila Faida ya LTI wala maombi ya Matokeo ya Msingi.</b>",
    "Enter the LTI Advantage Deep Linking Launch URL. If the tool does not specify one, use the same value as 'Tool Launch URL'.": "Weka URL ya Uzinduzi wa Faida ya Kuunganisha Kina cha LTI. Ikiwa zana haijabainisha moja, tumia thamani sawa na &#39;URL ya Uzinduzi wa Zana&#39;.",
    "Enter the LTI ID for the external LTI provider. This value must be the same LTI ID that you entered in the LTI Passports setting on the Advanced Settings page.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Weka kitambulisho cha LTI cha mtoa huduma wa LTI wa nje. Thamani hii lazima iwe kitambulisho sawa cha LTI ulichoweka katika mpangilio wa Pasipoti za LTI kwenye ukurasa wa Mipangilio ya Kina.<br /> Tazama hati za {docs_anchor_open} edX LTI {anchor_close} kwa maelezo zaidi juu ya mpangilio huu.",
    "Enter the URL of the external tool that this component launches. This setting is only used when Hide External Tool is set to False.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Ingiza URL ya zana ya nje ambayo kipengele hiki huzindua. Mpangilio huu unatumika tu wakati Ficha Zana ya Nje imewekwa kuwa Sivyo.<br /> Tazama hati za {docs_anchor_open} edX LTI {anchor_close} kwa maelezo zaidi juu ya mpangilio huu.",
    "Enter the desired pixel height of the iframe which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Inline.": "Weka urefu wa pikseli unaotaka wa iframe ambao utakuwa na zana ya LTI. Mpangilio huu unatumika tu wakati Ficha Zana ya Nje imewekwa kuwa Sivyo na Lengo la Uzinduzi wa LTI limewekwa kuwa Inline.",
    "Enter the desired viewport percentage height of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Ingiza urefu wa asilimia ya kituo cha kutazama unaohitajika cha wekeleo la modali ambalo litakuwa na zana ya LTI. Mpangilio huu unatumika tu wakati Ficha Zana ya Nje imewekwa kuwa Sivyo na Lengo la Uzinduzi wa LTI limewekwa kuwa Modal.",
    "Enter the desired viewport percentage width of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Ingiza upana wa asilimia ya sehemu ya kutazama inayotakiwa ya wekeleo la modali ambayo itakuwa na zana ya LTI. Mpangilio huu unatumika tu wakati Ficha Zana ya Nje imewekwa kuwa Sivyo na Lengo la Uzinduzi wa LTI limewekwa kuwa Modal.",
    "Enter the name that students see for this component. Analytics reports may also use the display name to identify this component.": "Andika jina ambalo wanafunzi wanaona la kipengele hiki. Ripoti za uchanganuzi pia zinaweza kutumia jina la onyesho ili kutambua kipengele hiki.",
    "Enter the number of points possible for this component.  The default value is 1.0.  This setting is only used when Scored is set to True.": "Ingiza idadi ya pointi zinazowezekana kwa kipengele hiki. Thamani chaguo-msingi ni 1.0. Mipangilio hii inatumika tu wakati Alama imewekwa kuwa Kweli.",
    "Enter the reusable LTI external configuration ID provided by the support staff.": "Weka kitambulisho cha usanidi wa nje cha LTI kinachoweza kutumika tena kilichotolewa na wafanyakazi wa usaidizi.",
    "Enter the text on the button used to launch the third party application. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal or New Window.": "Ingiza maandishi kwenye kitufe kilichotumiwa kuzindua programu ya mtu mwingine. Mpangilio huu unatumika tu wakati Ficha Zana ya Nje imewekwa kuwa Sivyo na Lengo la Uzinduzi wa LTI limewekwa kuwa Modal au Dirisha Jipya.",
    "Hide External Tool": "Ficha Zana ya Nje",
    "If you run deep linking again, the content above will be replaced.": "Ikiwa unatumia kiunganishi cha kina tena, maudhui yaliyo hapo juu yatabadilishwa.",
    "If you're seeing this on a live course, please contact the course staff.": "Ikiwa unaona hili kwenye kozi ya moja kwa moja, tafadhali wasiliana na wafanyakazi wa kozi.",
    "Inline Height": "Urefu wa Inline",
    "Invalid LTI configuration.": "Usanidi batili wa LTI.",
    "Invalid token header. No credentials provided.": "Kichwa cha ishara si sahihi. Hakuna kitambulisho kilichotolewa.",
    "Invalid token header. Token string should not contain spaces.": "Kichwa cha ishara si sahihi. Mfuatano wa ishara haufai kuwa na nafasi.",
    "Invalid token signature.": "Sahihi ya tokeni isiyo sahihi.",
    "Keyset URL: ": "URL ya kuweka vitufe: ",
    "LTI 1.3 Block Client ID - DEPRECATED": "LTI 1.3 Kitambulisho cha Mteja wa Kuzuia - IMEACHWA",
    "LTI 1.3 Block Key - DEPRECATED": "LTI 1.3 Ufunguo wa Kuzuia - UMEACHWA",
    "LTI 1.3 Launches can only be performed from the LMS.": "Uzinduzi wa LTI 1.3 unaweza tu kufanywa kutoka kwa LMS.",
    "LTI Application Information": "Taarifa ya Maombi ya LTI",
    "LTI Assignment and Grades Service": "Ugawaji wa LTI na Huduma ya Madaraja",
    "LTI Configuration stored on the model for LTI 1.3 must have a value for one of lti_1p3_tool_public_key or lti_1p3_tool_keyset_url.": "Usanidi wa LTI uliohifadhiwa kwenye muundo wa LTI 1.3 lazima uwe na thamani ya mojawapo ya lti_1p3_tool_public_key au lti_1p3_tool_keyset_url.",
    "LTI Configuration stores on XBlock needs a block location set.": "Maduka ya Usanidi ya LTI kwenye XBlock yanahitaji seti ya eneo la kizuizi.",
    "LTI Configuration using reusable configuration needs a external ID in \"x:y\" format.": "Usanidi wa LTI kwa kutumia usanidi unaoweza kutumika tena unahitaji kitambulisho cha nje katika umbizo la &quot;x:y&quot;.",
    "LTI Consumer": "Mtumiaji wa LTI",
    "LTI Deep Linking": "Uunganisho wa kina wa LTI",
    "LTI Deep Linking failed.": "Kuunganisha kwa kina LTI kumeshindwa.",
    "LTI ID": "Kitambulisho cha LTI",
    "LTI Launch Target": "Lengo la Uzinduzi wa LTI",
    "LTI Reusable Configuration ID": "Kitambulisho cha Usanidi Kinachoweza Kutumika tena cha LTI",
    "LTI URL": "URL ya LTI",
    "LTI Version": "Toleo la LTI",
    "LTI configuration data.": "Data ya usanidi wa LTI.",
    "LTI configuration not found.": "Usanidi wa LTI haujapatikana.",
    "Login URL: ": "URL ya Kuingia: ",
    "Missing LTI 1.3 authentication token.": "Tokeni ya uthibitishaji ya LTI 1.3 haipo.",
    "Modal Height": "Urefu wa Modal",
    "Modal Width": "Upana wa Modal",
    "No valid user id found in endpoint URL": "Hakuna kitambulisho halali cha mtumiaji kilichopatikana katika sehemu ya mwisho ya URL",
    "OK": "sawa",
    "Platform's generated JWK keyset.": "Kitufe cha JWK kilichotengenezwa na Jukwaa.",
    "Platform's generated Private key ID": "Kitambulisho cha ufunguo wa Faragha kilichotengenezwa na Jukwaa",
    "Platform's generated Private key. Keep this value secret.": "Ufunguo wa Kibinafsi uliotengenezwa na Jukwaa. Weka siri hii ya thamani.",
    "Please check that you have course staff permissions and double check this block's LTI settings.": "Tafadhali hakikisha kuwa una ruhusa za wafanyikazi wa kozi na uangalie tena mipangilio ya LTI ya kizuizi hiki.",
    "Press to Launch": "Bonyeza ili Kuzindua",
    "Registered Redirect URIs": "URI Zilizosajiliwa",
    "Request user's email": "Omba barua pepe ya mtumiaji",
    "Request user's full name": "Omba jina kamili la mtumiaji",
    "Request user's username": "Omba jina la mtumiaji la mtumiaji",
    "Return to exam.": "Rudi kwenye mtihani.",
    "Reusable Configuration": "Usanidi Unaoweza Kutumika tena",
    "Reusable configuration ID must be set when using external config (Example: \"x:y\").": "Kitambulisho cha usanidi kinachoweza kutumika tena lazima kiwekwe unapotumia usanidi wa nje (Mfano: &quot;x:y&quot;).",
    "Scored": "Imefunga",
    "Select 'Configuration on block' to configure a new LTI Tool. If the support staff provided you with a pre-configured LTI reusable Tool ID, select'Reusable Configuration' and enter it in the text field below.": "Chagua &#39;Usanidi kwenye kizuizi&#39; ili kusanidi Zana mpya ya LTI. Ikiwa wafanyakazi wa usaidizi walikupa Kitambulisho cha Zana inayoweza kutumika tena ya LTI iliyosanidiwa awali, chagua&#39;Usanidi Unayoweza Kutumika&#39; na uiweke katika sehemu ya maandishi hapa chini.",
    "Select Inline if you want the LTI content to open in an IFrame in the current page. Select Modal if you want the LTI content to open in a modal window in the current page. Select New Window if you want the LTI content to open in a new browser window. This setting is only used when Hide External Tool is set to False.": "Chagua Inline ikiwa ungependa maudhui ya LTI yafunguke katika IFrame katika ukurasa wa sasa. Chagua Modal ikiwa unataka maudhui ya LTI kufunguka katika kidirisha cha modali katika ukurasa wa sasa. Chagua Dirisha Jipya ikiwa unataka maudhui ya LTI kufunguka katika dirisha jipya la kivinjari. Mpangilio huu unatumika tu wakati Ficha Zana ya Nje imewekwa kuwa Sivyo.",
    "Select True if this component will receive a numerical score from the external LTI system.": "Chagua Kweli ikiwa kijenzi hiki kitapokea alama ya nambari kutoka kwa mfumo wa nje wa LTI.",
    "Select True if you want to enable LTI Advantage Deep Linking.": "Chagua Kweli ikiwa unataka kuwezesha Uunganishaji wa Kina wa LTI Advantage.",
    "Select True if you want to use this component as a placeholder for syncing with an external grading  system rather than launch an external tool.  This setting hides the Launch button and any IFrames for this component.": "Chagua Kweli ikiwa ungependa kutumia kipengele hiki kama kishikilia nafasi kwa kusawazisha na mfumo wa kuweka alama za nje badala ya kuzindua zana ya nje. Mpangilio huu huficha kitufe cha Uzinduzi na IFrame zozote za kipengele hiki.",
    "Select True to allow third party systems to post grades past the deadline.": "Chagua Kweli ili kuruhusu mifumo ya wahusika wengine kuchapisha alama kupita muda uliowekwa.",
    "Select True to request the user's email address.": "Chagua Kweli ili kuomba anwani ya barua pepe ya mtumiaji.",
    "Select True to request the user's full name.": "Chagua Kweli ili kuomba jina kamili la mtumiaji.",
    "Select True to request the user's username.": "Chagua Kweli ili kuomba jina la mtumiaji la mtumiaji.",
    "Select True to send the extra parameters, which might contain Personally Identifiable Information. The processors are site-wide, please consult the site administrator if you have any questions.": "Chagua Kweli ili kutuma vigezo vya ziada, ambavyo vinaweza kuwa na Taarifa Zinazoweza Kutambulika Binafsi. Wachakataji ni wa tovuti nzima, tafadhali wasiliana na msimamizi wa tovuti ikiwa una maswali yoyote.",
    "Select how the tool's public key information will be specified.": "Chagua jinsi maelezo ya ufunguo wa umma ya zana yatabainishwa.",
    "Select the LTI version that your tool supports.<br />The XBlock LTI Consumer fully supports LTI 1.1.1, LTI 1.3 and LTI Advantage features.": "Chagua toleo la LTI ambalo zana yako inasaidia.<br /> Mtumiaji wa XBlock LTI anaauni kikamilifu vipengele vya Manufaa vya LTI 1.1.1, LTI 1.3 na LTI.",
    "Send extra parameters": "Tuma vigezo vya ziada",
    "Sending you back to your exam.": "Kukurudisha kwenye mtihani wako.",
    "Students don't have permissions to perform LTI Deep Linking configuration launches.": "Wanafunzi hawana ruhusa ya kutekeleza uzinduzi wa usanidi wa LTI Deep Linking.",
    "The Deep Linking configuration stored is presented below:": "Usanidi wa Uunganisho wa Kina uliohifadhiwa umewasilishwa hapa chini:",
    "The LTI Deep Linking content was successfully saved in the LMS.": "Maudhui ya LTI Deep Linking yalihifadhiwa kwa ufanisi katika LMS.",
    "The URL of the external tool that initiates the launch.": "URL ya zana ya nje inayoanzisha uzinduzi.",
    "The score kept in the xblock KVS -- duplicate of the published score in django DB": "Alama zilizowekwa katika xblock KVS -- nakala ya alama zilizochapishwa katika django DB",
    "The selected content type is not supported by Open edX.": "Aina ya maudhui iliyochaguliwa haitumiki na Open edX.",
    "The specified LTI ID is not configured in this course's Advanced Settings.": "Kitambulisho cha LTI kilichobainishwa hakijasanidiwa katika Mipangilio ya Kina ya kozi hii.",
    "There was an error while launching the LTI tool: ": "Kulikuwa na hitilafu wakati wa kuzindua zana ya LTI: ",
    "There was an error while starting your LTI proctored assessment.": "Kulikuwa na hitilafu wakati wa kuanzisha tathmini yako ya utayarishaji wa LTI.",
    "To do that, make sure the block is published and click the link below:": "Ili kufanya hivyo, hakikisha kizuizi kimechapishwa na ubofye kiungo hapa chini:",
    "To set up the LTI integration, you need to register the LMS in the tool with the information provided below.": "Ili kusanidi muunganisho wa LTI, unahitaji kusajili LMS kwenye zana kwa taarifa iliyotolewa hapa chini.",
    "Tool Initiate Login URL": "Zana Anzisha URL ya Kuingia",
    "Tool Keyset URL": "URL ya Kitufe cha Zana",
    "Tool Launch URL": "URL ya Uzinduzi wa Zana",
    "Tool Public Key": "Ufunguo wa Umma wa Zana",
    "Tool Public Key Mode": "Njia ya Ufunguo wa Umma ya Zana",
    "Unauthorized.": "Haijaidhinishwa.",
    "Valid urls the Tool may request us to redirect the id token to. The redirect uris are often the same as the launch url/deep linking url so if this field is empty, it will use them as the default. If you need to use different redirect uri's, enter them here. If you use this field you must enter all valid redirect uri's the tool may request.": "Urls halali Zana inaweza kutuomba kuelekeza tokeni ya kitambulisho kwa. Uri za kuelekeza kwingine mara nyingi ni sawa na url ya uzinduzi/ url ya kuunganisha kwa kina kwa hivyo ikiwa sehemu hii haina kitu, itazitumia kama chaguomsingi. Ikiwa unahitaji kutumia uri tofauti za kuelekeza kwingine, ziweke hapa. Ukitumia sehemu hii lazima uweke uri zote halali za kuelekeza kwingine ambazo zana inaweza kuomba.",
    "You can configure this tool's content using LTI Deep Linking.": "Unaweza kusanidi maudhui ya zana hii kwa kutumia LTI Deep Linking.",
    "You can safely close this page now.": "Unaweza kufunga ukurasa huu kwa usalama sasa.",
    "You don't have access to save LTI Content Items.": "Huna ufikiaji wa kuhifadhi Vipengee vya Maudhui ya LTI.",
    "[LTI]: Real user not found against anon_id: {}": "[LTI]: Mtumiaji halisi hakupatikana dhidi ya anon_id: {}"
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
    "DATETIME_FORMAT": "N j, Y, P",
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%m/%d/%Y %H:%M:%S",
      "%m/%d/%Y %H:%M:%S.%f",
      "%m/%d/%Y %H:%M",
      "%m/%d/%y %H:%M:%S",
      "%m/%d/%y %H:%M:%S.%f",
      "%m/%d/%y %H:%M"
    ],
    "DATE_FORMAT": "N j, Y",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%m/%d/%Y",
      "%m/%d/%y",
      "%b %d %Y",
      "%b %d, %Y",
      "%d %b %Y",
      "%d %b, %Y",
      "%B %d %Y",
      "%B %d, %Y",
      "%d %B %Y",
      "%d %B, %Y"
    ],
    "DECIMAL_SEPARATOR": ".",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "F j",
    "NUMBER_GROUPING": 0,
    "SHORT_DATETIME_FORMAT": "m/d/Y P",
    "SHORT_DATE_FORMAT": "m/d/Y",
    "THOUSAND_SEPARATOR": ",",
    "TIME_FORMAT": "P",
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
        