
            (function(global){
                var XBlockLtiConsumerI18N = {
                  init: function() {
                    

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = (n > 1);
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "Accept grades past deadline": "Tarihi ge\u00e7mi\u015f notlar\u0131 kabul et",
    "Access Token URL: ": "Eri\u015fim Belirteci URL&#39;si: ",
    "Add the key/value pair for any custom parameters, such as the page your e-book should open to or the background color for this component. Ex. [\"page=1\", \"color=white\"]<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "E-kitab\u0131n\u0131z\u0131n a\u00e7\u0131lmas\u0131 gereken sayfa veya bu bile\u015fenin arka plan rengi gibi \u00f6zel parametreler i\u00e7in anahtar/de\u011fer \u00e7iftini ekleyin. Eski. [&quot;sayfa=1&quot;, &quot;renk=beyaz&quot;]<br /> Bu ayarla ilgili daha fazla ayr\u0131nt\u0131 i\u00e7in {docs_anchor_open} edX LTI belgelerine {anchor_close} bak\u0131n.",
    "Allow tools to manage and submit grade (programmatic)": "Ara\u00e7lar\u0131n notu y\u00f6netmesine ve g\u00f6ndermesine izin ver (programatik)",
    "Allow tools to submit grades only (declarative)": "Ara\u00e7lar\u0131n yaln\u0131zca not g\u00f6ndermesine izin ver (bildirimsel)",
    "Button Text": "D\u00fc\u011fme Metni",
    "CONFIG_ON_XBLOCK and CONFIG_EXTERNAL are not supported for LTI 1.3 Proctoring Services.": "CONFIG_ON_XBLOCK ve CONFIG_EXTERNAL, LTI 1.3 G\u00f6zetmenlik Hizmetleri i\u00e7in desteklenmez.",
    "Cancel": "\u0130ptal",
    "Click Cancel to return to this page without sending your information.": "Bilgilerinizi g\u00f6ndermeden bu sayfaya d\u00f6nmek i\u00e7in \u0130ptal&#39;i t\u0131klay\u0131n.",
    "Click OK to have your e-mail address sent to a 3rd party application.": "E-posta adresinizin 3. taraf bir uygulamaya g\u00f6nderilmesi i\u00e7in Tamam&#39;\u0131 t\u0131klay\u0131n.",
    "Click OK to have your full name and e-mail address sent to a 3rd party application.": "Tam ad\u0131n\u0131z\u0131n ve e-posta adresinizin 3. taraf bir uygulamaya g\u00f6nderilmesini sa\u011flamak i\u00e7in Tamam&#39;\u0131 t\u0131klay\u0131n.",
    "Click OK to have your full name sent to a 3rd party application.": "Tam ad\u0131n\u0131z\u0131n 3. taraf bir uygulamaya g\u00f6nderilmesini sa\u011flamak i\u00e7in Tamam&#39;\u0131 t\u0131klay\u0131n.",
    "Click OK to have your username and e-mail address sent to a 3rd party application.": "Kullan\u0131c\u0131 ad\u0131n\u0131z\u0131n ve e-posta adresinizin 3. taraf bir uygulamaya g\u00f6nderilmesi i\u00e7in Tamam&#39;\u0131 t\u0131klay\u0131n.",
    "Click OK to have your username and full name sent to a 3rd party application.": "Kullan\u0131c\u0131 ad\u0131n\u0131z\u0131n ve tam ad\u0131n\u0131z\u0131n 3. taraf bir uygulamaya g\u00f6nderilmesini sa\u011flamak i\u00e7in Tamam&#39;\u0131 t\u0131klay\u0131n.",
    "Click OK to have your username sent to a 3rd party application.": "Kullan\u0131c\u0131 ad\u0131n\u0131z\u0131n 3. taraf bir uygulamaya g\u00f6nderilmesini sa\u011flamak i\u00e7in Tamam&#39;\u0131 t\u0131klay\u0131n.",
    "Click OK to have your username, full name, and e-mail address sent to a 3rd party application.": "Kullan\u0131c\u0131 ad\u0131n\u0131z\u0131n, tam ad\u0131n\u0131z\u0131n ve e-posta adresinizin 3. taraf bir uygulamaya g\u00f6nderilmesini sa\u011flamak i\u00e7in Tamam&#39;\u0131 t\u0131klay\u0131n.",
    "Client ID used by LTI tool": "LTI arac\u0131 taraf\u0131ndan kullan\u0131lan istemci kimli\u011fi",
    "Client ID: ": "M\u00fc\u015fteri Kimli\u011fi: ",
    "Client key provided by the LTI tool provider.": "LTI arac\u0131 sa\u011flay\u0131c\u0131s\u0131 taraf\u0131ndan sa\u011flanan istemci anahtar\u0131.",
    "Client secret provided by the LTI tool provider.": "LTI arac\u0131 sa\u011flay\u0131c\u0131s\u0131 taraf\u0131ndan sa\u011flanan istemci s\u0131rr\u0131.",
    "Comment as returned from grader, LTI2.0 spec": "Derecelendirenden d\u00f6nd\u00fc\u011f\u00fc gibi yorum, LTI2.0 spec",
    "Configuration Stored on XBlock fields": "XBlock alanlar\u0131nda saklanan konfig\u00fcrasyon",
    "Configuration Stored on external service": "Yap\u0131land\u0131rma Harici hizmette sakland\u0131",
    "Configuration Stored on this model": "Bu modelde saklanan yap\u0131land\u0131rma",
    "Configuration Type": "Yap\u0131land\u0131rma T\u00fcr\u00fc",
    "Configuration on block": "Blokta yap\u0131land\u0131rma",
    "Could not get user data for current request": "Mevcut istek i\u00e7in kullan\u0131c\u0131 verileri al\u0131namad\u0131",
    "Could not get user id for current request": "Mevcut istek i\u00e7in kullan\u0131c\u0131 kimli\u011fi al\u0131namad\u0131",
    "Could not parse LTI passport: {lti_passport!r}. Should be \"id:key:secret\" string.": "LTI pasaportu ayr\u0131\u015ft\u0131r\u0131lamad\u0131: {lti_passport!r}. &quot;id:key:secret&quot; dizesi olmal\u0131d\u0131r.",
    "Could not parse custom parameter: {custom_parameter!r}. Should be \"x=y\" string.": "\u00d6zel parametre ayr\u0131\u015ft\u0131r\u0131lamad\u0131: {custom_parameter!r}. &quot;x=y&quot; dizesi olmal\u0131d\u0131r.",
    "Custom Parameters": "\u00d6zel yap\u0131lm\u0131\u015f parametreler",
    "Custom Parameters must be a list": "\u00d6zel Parametreler bir liste olmal\u0131d\u0131r",
    "Custom Parameters should be strings in \"x=y\" format.": "\u00d6zel Parametreler &quot;x=y&quot; bi\u00e7iminde dizeler olmal\u0131d\u0131r.",
    "DEPRECATED - This is now stored in the LtiConfiguration model.": "KULLANIMDAN KALDIRILDI - Bu art\u0131k LtiConfiguration modelinde saklan\u0131yor.",
    "Database Configuration": "Veritaban\u0131 Yap\u0131land\u0131rmas\u0131",
    "Deep Linking Launch - Configure tool": "Derin Ba\u011flant\u0131 Ba\u015flatma - Yap\u0131land\u0131rma arac\u0131",
    "Deep Linking Launch URL": "Derin Ba\u011flant\u0131 Ba\u015flatma URL&#39;si",
    "Deep Linking is configured on this tool.": "Derin Ba\u011flant\u0131 bu ara\u00e7ta yap\u0131land\u0131r\u0131lm\u0131\u015ft\u0131r.",
    "Deep linking": "Derin ba\u011flant\u0131",
    "Deployment ID: ": "Da\u011f\u0131t\u0131m Kimli\u011fi: ",
    "Disabled": "Devre d\u0131\u015f\u0131",
    "Display Name": "G\u00f6r\u00fcnen Ad",
    "Enable LTI NRPS": "LTI NRPS&#39;yi etkinle\u015ftir",
    "Enable LTI Names and Role Provisioning Services.": "LTI Adlar\u0131n\u0131 ve Rol Haz\u0131rlama Hizmetlerini etkinle\u015ftirin.",
    "Enable the LTI-AGS service and select the functionality enabled for LTI tools. The 'declarative' mode (default) will provide a tool with a LineItem created from the XBlock settings, while the 'programmatic' one will allow tools to manage, create and link the grades.": "LTI-AGS hizmetini etkinle\u015ftirin ve LTI ara\u00e7lar\u0131 i\u00e7in etkinle\u015ftirilen i\u015flevselli\u011fi se\u00e7in. &#39;Bildirimsel&#39; mod (varsay\u0131lan), XBlock ayarlar\u0131ndan olu\u015fturulan bir LineItem i\u00e7eren bir ara\u00e7 sa\u011flarken, &#39;programatik&#39; mod, ara\u00e7lar\u0131n notlar\u0131 y\u00f6netmesine, olu\u015fturmas\u0131na ve ba\u011flamas\u0131na olanak tan\u0131r.",
    "Enter a description of the third party application. If requesting username and/or email, use this text box to inform users why their username and/or email will be forwarded to a third party application.": "\u00dc\u00e7\u00fcnc\u00fc parti uygulaman\u0131n a\u00e7\u0131klamas\u0131n\u0131 girin. E\u011fer kullan\u0131c\u0131 ad\u0131 ve/veya e-posta adresi talep ediliyorsa bu metin kutusuna kullan\u0131c\u0131lar\u0131n neden \u00fc\u00e7\u00fcnc\u00fc parti uygulamaya kullan\u0131c\u0131 adlar\u0131n\u0131n ve/veya e-postalar\u0131n\u0131n g\u00f6nderilece\u011fine ili\u015fkin a\u00e7\u0131klama yaz\u0131n.",
    "Enter the LTI 1.3 Tool Launch URL. <br />This is the URL the LMS will use to launch the LTI Tool.": "LTI 1.3 Ara\u00e7 Ba\u015flatma URL&#39;sini girin.<br /> Bu, LMS&#39;nin LTI Arac\u0131n\u0131 ba\u015flatmak i\u00e7in kullanaca\u011f\u0131 URL&#39;dir.",
    "Enter the LTI 1.3 Tool OIDC Authorization url (can also be called login or login initiation URL).<br />This is the URL the LMS will use to start a LTI authorization prior to doing the launch request.": "LTI 1.3 Arac\u0131 OIDC Yetkilendirme URL&#39;sini girin (oturum a\u00e7ma veya oturum a\u00e7ma ba\u015flatma URL&#39;si olarak da adland\u0131r\u0131labilir).<br /> Bu, LMS&#39;nin ba\u015flatma iste\u011fini ger\u00e7ekle\u015ftirmeden \u00f6nce LTI yetkilendirmesini ba\u015flatmak i\u00e7in kullanaca\u011f\u0131 URL&#39;dir.",
    "Enter the LTI 1.3 Tool's JWK keysets URL.<br />This link should retrieve a JSON file containing public keys and signature algorithm information, so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "LTI 1.3 Arac\u0131n\u0131n JWK anahtar k\u00fcmeleri URL&#39;sini girin.<br /> Bu ba\u011flant\u0131, LMS&#39;nin al\u0131nan mesajlar\u0131n ve ba\u015flatma isteklerinin ara\u00e7tan imza al\u0131p almad\u0131\u011f\u0131n\u0131 kontrol edebilmesi i\u00e7in genel anahtarlar\u0131 ve imza algoritmas\u0131 bilgilerini i\u00e7eren bir JSON dosyas\u0131n\u0131 almal\u0131d\u0131r.<br /> <b>LTI Advantage veya Basic Outcomes talepleri olmadan LTI 1.3 Lansmanlar\u0131 yap\u0131l\u0131rken bu gerekli de\u011fildir.</b>",
    "Enter the LTI 1.3 Tool's public key.<br />This is a string that starts with '-----BEGIN PUBLIC KEY-----' and is required so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "LTI 1.3 Arac\u0131n\u0131n genel anahtar\u0131n\u0131 girin.<br /> Bu, &#39;-----BEGIN PUBLIC KEY-----&#39; ile ba\u015flayan bir dizedir ve LMS&#39;nin al\u0131nan mesajlar\u0131n ve ba\u015flatma isteklerinin ara\u00e7tan imza al\u0131p almad\u0131\u011f\u0131n\u0131 kontrol edebilmesi i\u00e7in gereklidir.<br /> <b>LTI Advantage veya Basic Outcomes talepleri olmadan LTI 1.3 Lansmanlar\u0131 yap\u0131l\u0131rken bu gerekli de\u011fildir.</b>",
    "Enter the LTI Advantage Deep Linking Launch URL. If the tool does not specify one, use the same value as 'Tool Launch URL'.": "LTI Advantage Derin Ba\u011flant\u0131 Ba\u015flatma URL&#39;sini girin. Ara\u00e7 bir tane belirtmezse &#39;Ara\u00e7 Ba\u015flatma URL&#39;si&#39; ile ayn\u0131 de\u011feri kullan\u0131n.",
    "Enter the LTI ID for the external LTI provider. This value must be the same LTI ID that you entered in the LTI Passports setting on the Advanced Settings page.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Harici LTI sa\u011flay\u0131c\u0131s\u0131n\u0131n LTI kimli\u011fini girin. Bu de\u011fer, Geli\u015fmi\u015f Ayarlar sayfas\u0131ndaki LTI Pasaportlar\u0131 ayar\u0131na girdi\u011finiz LTI kimli\u011fiyle ayn\u0131 olmal\u0131d\u0131r.<br /> Bu ayar hakk\u0131nda daha fazla ayr\u0131nt\u0131 i\u00e7in {docs_anchor_open} edX LTI belgelerine {anchor_close} bak\u0131n.",
    "Enter the URL of the external tool that this component launches. This setting is only used when Hide External Tool is set to False.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Bu bile\u015fenin ba\u015flatt\u0131\u011f\u0131 harici arac\u0131n URL&#39;sini girin. Bu ayar yaln\u0131zca Harici Arac\u0131 Gizle Yanl\u0131\u015f olarak ayarland\u0131\u011f\u0131nda kullan\u0131l\u0131r.<br /> Bu ayarla ilgili daha fazla ayr\u0131nt\u0131 i\u00e7in {docs_anchor_open} edX LTI belgelerine {anchor_close} bak\u0131n.",
    "Enter the desired pixel height of the iframe which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Inline.": "LTI arac\u0131n\u0131 i\u00e7erecek iframe&#39;in istenen piksel y\u00fcksekli\u011fini girin. Bu ayar yaln\u0131zca Harici Arac\u0131 Gizle Yanl\u0131\u015f olarak ayarland\u0131\u011f\u0131nda ve LTI Ba\u015flatma Hedefi Sat\u0131r \u0130\u00e7i olarak ayarland\u0131\u011f\u0131nda kullan\u0131l\u0131r.",
    "Enter the desired viewport percentage height of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "LTI arac\u0131n\u0131 i\u00e7erecek kal\u0131c\u0131 kaplaman\u0131n istenen g\u00f6r\u00fcn\u00fcm y\u00fczdesi y\u00fcksekli\u011fini girin. Bu ayar yaln\u0131zca Harici Arac\u0131 Gizle Yanl\u0131\u015f olarak ayarland\u0131\u011f\u0131nda ve LTI Ba\u015flatma Hedefi Modal olarak ayarland\u0131\u011f\u0131nda kullan\u0131l\u0131r.",
    "Enter the desired viewport percentage width of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "LTI arac\u0131n\u0131 i\u00e7erecek kal\u0131c\u0131 kaplaman\u0131n istenen g\u00f6r\u00fcn\u00fcm y\u00fczdesi geni\u015fli\u011fini girin. Bu ayar yaln\u0131zca Harici Arac\u0131 Gizle Yanl\u0131\u015f olarak ayarland\u0131\u011f\u0131nda ve LTI Ba\u015flatma Hedefi Modal olarak ayarland\u0131\u011f\u0131nda kullan\u0131l\u0131r.",
    "Enter the name that students see for this component. Analytics reports may also use the display name to identify this component.": "\u00d6\u011frencilerin bu bile\u015fen i\u00e7in g\u00f6rece\u011fi ad\u0131 girin. Analytics raporlar\u0131, bu bile\u015feni tan\u0131mlamak i\u00e7in g\u00f6r\u00fcnen ad\u0131 da kullanabilir.",
    "Enter the number of points possible for this component.  The default value is 1.0.  This setting is only used when Scored is set to True.": "Bu bile\u015fen i\u00e7in muhtemel puan say\u0131s\u0131n\u0131 girin. Varsay\u0131lan de\u011fer 1.0. Bu ayar sadece Puanland\u0131 de\u011feri True olarak ayarland\u0131ysa kullan\u0131l\u0131r.",
    "Enter the reusable LTI external configuration ID provided by the support staff.": "Destek personeli taraf\u0131ndan sa\u011flanan yeniden kullan\u0131labilir LTI harici yap\u0131land\u0131rma kimli\u011fini girin.",
    "Enter the text on the button used to launch the third party application. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal or New Window.": "\u00dc\u00e7\u00fcnc\u00fc taraf uygulamas\u0131n\u0131 ba\u015flatmak i\u00e7in kullan\u0131lan d\u00fc\u011fmedeki metni girin. Bu ayar yaln\u0131zca Harici Arac\u0131 Gizle se\u00e7ene\u011fi Yanl\u0131\u015f olarak ayarland\u0131\u011f\u0131nda ve LTI Ba\u015flatma Hedefi Kal\u0131c\u0131 veya Yeni Pencere olarak ayarland\u0131\u011f\u0131nda kullan\u0131l\u0131r.",
    "Hide External Tool": "Harici Arac\u0131 Gizle",
    "If you run deep linking again, the content above will be replaced.": "Derin ba\u011flant\u0131y\u0131 tekrar \u00e7al\u0131\u015ft\u0131r\u0131rsan\u0131z yukar\u0131daki i\u00e7erik de\u011fi\u015ftirilecektir.",
    "If you're seeing this on a live course, please contact the course staff.": "Bunu canl\u0131 bir kursta g\u00f6r\u00fcyorsan\u0131z l\u00fctfen kurs personeliyle ileti\u015fime ge\u00e7in.",
    "Inline Height": "Sat\u0131r \u0130\u00e7i Y\u00fckseklik",
    "Invalid LTI configuration.": "Ge\u00e7ersiz LTI yap\u0131land\u0131rmas\u0131.",
    "Invalid token header. No credentials provided.": "Ge\u00e7ersiz jeton ba\u015fl\u0131\u011f\u0131. Hi\u00e7bir kimlik bilgisi sa\u011flanmad\u0131.",
    "Invalid token header. Token string should not contain spaces.": "Ge\u00e7ersiz jeton ba\u015fl\u0131\u011f\u0131. Belirte\u00e7 dizesi bo\u015fluk i\u00e7ermemelidir.",
    "Invalid token signature.": "Ge\u00e7ersiz jeton imzas\u0131.",
    "Keyset URL: ": "Anahtar seti URL&#39;si: ",
    "LTI 1.3 Block Client ID - DEPRECATED": "LTI 1.3 \u0130stemci Kimli\u011fini Engelle - KULLANIMDAN KALDIRILDI",
    "LTI 1.3 Block Key - DEPRECATED": "LTI 1.3 Blok Anahtar\u0131 - KULLANIMDAN KALDIRILDI",
    "LTI 1.3 Launches can only be performed from the LMS.": "LTI 1.3 Ba\u015flatmalar\u0131 yaln\u0131zca LMS&#39;den ger\u00e7ekle\u015ftirilebilir.",
    "LTI Application Information": "LTI Uygulama Bilgisi",
    "LTI Assignment and Grades Service": "LTI \u00d6dev ve Not Hizmeti",
    "LTI Configuration stored on the model for LTI 1.3 must have a value for one of lti_1p3_tool_public_key or lti_1p3_tool_keyset_url.": "LTI 1.3 i\u00e7in modelde depolanan LTI Yap\u0131land\u0131rmas\u0131, lti_1p3_tool_public_key veya lti_1p3_tool_keyset_url&#39;den biri i\u00e7in bir de\u011fere sahip olmal\u0131d\u0131r.",
    "LTI Configuration stores on XBlock needs a block location set.": "XBlock&#39;taki LTI Yap\u0131land\u0131rma depolar\u0131n\u0131n bir blok konumu ayar\u0131na ihtiyac\u0131 vard\u0131r.",
    "LTI Configuration using reusable configuration needs a external ID in \"x:y\" format.": "Yeniden kullan\u0131labilir yap\u0131land\u0131rmay\u0131 kullanan LTI Yap\u0131land\u0131rmas\u0131, &quot;x:y&quot; bi\u00e7iminde harici bir kimli\u011fe ihtiya\u00e7 duyar.",
    "LTI Consumer": "LTI T\u00fcketicisi",
    "LTI Deep Linking": "LTI Derin Ba\u011flant\u0131s\u0131",
    "LTI Deep Linking failed.": "LTI Derin Ba\u011flant\u0131s\u0131 ba\u015far\u0131s\u0131z oldu.",
    "LTI ID": "LTI No",
    "LTI Launch Target": "LTI Lansman Hedefi",
    "LTI Reusable Configuration ID": "LTI Yeniden Kullan\u0131labilir Yap\u0131land\u0131rma Kimli\u011fi",
    "LTI URL": "LTI URL",
    "LTI Version": "LTI S\u00fcr\u00fcm\u00fc",
    "LTI configuration data.": "LTI yap\u0131land\u0131rma verileri.",
    "LTI configuration not found.": "LTI yap\u0131land\u0131rmas\u0131 bulunamad\u0131.",
    "Login URL: ": "Giri\u015f URL&#39;si: ",
    "Missing LTI 1.3 authentication token.": "LTI 1.3 kimlik do\u011frulama jetonu eksik.",
    "Modal Height": "Model Y\u00fcksekli\u011fi",
    "Modal Width": "Modal Geni\u015flik",
    "No valid user id found in endpoint URL": "U\u00e7 nokta URL&#39;sinde ge\u00e7erli bir kullan\u0131c\u0131 kimli\u011fi bulunamad\u0131",
    "OK": "Tamam",
    "Platform's generated JWK keyset.": "Platformun olu\u015fturdu\u011fu JWK anahtar seti.",
    "Platform's generated Private key ID": "Platformun olu\u015fturdu\u011fu \u00d6zel anahtar kimli\u011fi",
    "Platform's generated Private key. Keep this value secret.": "Platformun olu\u015fturdu\u011fu \u00d6zel anahtar. Bu de\u011feri gizli tutun.",
    "Please check that you have course staff permissions and double check this block's LTI settings.": "L\u00fctfen kurs personeli izinlerinizin olup olmad\u0131\u011f\u0131n\u0131 kontrol edin ve bu blo\u011fun LTI ayarlar\u0131n\u0131 tekrar kontrol edin.",
    "Press to Launch": "Ba\u015flatmak i\u00e7in t\u0131klay\u0131n",
    "Registered Redirect URIs": "Kay\u0131tl\u0131 Y\u00f6nlendirme URI&#39;leri",
    "Request user's email": "Kullan\u0131c\u0131n\u0131n e-posta adresini iste",
    "Request user's full name": "Kullan\u0131c\u0131n\u0131n tam ad\u0131n\u0131 isteyin",
    "Request user's username": "Kullan\u0131c\u0131n\u0131n kullan\u0131c\u0131 ad\u0131n\u0131 iste",
    "Return to exam.": "S\u0131nava d\u00f6n.",
    "Reusable Configuration": "Yeniden Kullan\u0131labilir Yap\u0131land\u0131rma",
    "Reusable configuration ID must be set when using external config (Example: \"x:y\").": "Harici yap\u0131land\u0131rma kullan\u0131l\u0131rken yeniden kullan\u0131labilir yap\u0131land\u0131rma kimli\u011fi ayarlanmal\u0131d\u0131r (\u00d6rnek: &quot;x:y&quot;).",
    "Scored": "Puanland\u0131",
    "Select 'Configuration on block' to configure a new LTI Tool. If the support staff provided you with a pre-configured LTI reusable Tool ID, select'Reusable Configuration' and enter it in the text field below.": "Yeni bir LTI Arac\u0131 yap\u0131land\u0131rmak i\u00e7in &#39;Bloktaki yap\u0131land\u0131rma&#39;y\u0131 se\u00e7in. Destek personeli size \u00f6nceden yap\u0131land\u0131r\u0131lm\u0131\u015f bir LTI yeniden kullan\u0131labilir Ara\u00e7 Kimli\u011fi sa\u011flad\u0131ysa, &#39;Yeniden Kullan\u0131labilir Yap\u0131land\u0131rma&#39;y\u0131 se\u00e7in ve bunu a\u015fa\u011f\u0131daki metin alan\u0131na girin.",
    "Select Inline if you want the LTI content to open in an IFrame in the current page. Select Modal if you want the LTI content to open in a modal window in the current page. Select New Window if you want the LTI content to open in a new browser window. This setting is only used when Hide External Tool is set to False.": "LTI i\u00e7eri\u011finin ge\u00e7erli sayfada bir IFrame&#39;de a\u00e7\u0131lmas\u0131n\u0131 istiyorsan\u0131z Sat\u0131r \u0130\u00e7i&#39;ni se\u00e7in. LTI i\u00e7eri\u011finin ge\u00e7erli sayfada kal\u0131c\u0131 bir pencerede a\u00e7\u0131lmas\u0131n\u0131 istiyorsan\u0131z Modal&#39;\u0131 se\u00e7in. LTI i\u00e7eri\u011finin yeni bir taray\u0131c\u0131 penceresinde a\u00e7\u0131lmas\u0131n\u0131 istiyorsan\u0131z Yeni Pencere&#39;yi se\u00e7in. Bu ayar yaln\u0131zca Harici Arac\u0131 Gizle Yanl\u0131\u015f olarak ayarland\u0131\u011f\u0131nda kullan\u0131l\u0131r.",
    "Select True if this component will receive a numerical score from the external LTI system.": "Bu bile\u015fen d\u0131\u015f LTI sisteminden rakamsal bir skor alacaksa True olarak i\u015faretleyin. ",
    "Select True if you want to enable LTI Advantage Deep Linking.": "LTI Advantage Deep Linking&#39;i etkinle\u015ftirmek istiyorsan\u0131z Do\u011fru&#39;yu se\u00e7in.",
    "Select True if you want to use this component as a placeholder for syncing with an external grading  system rather than launch an external tool.  This setting hides the Launch button and any IFrames for this component.": "Bu bile\u015fenin harici bir ara\u00e7 ba\u015flatmas\u0131 yerine harici bir notland\u0131rma sistemi ile senkronize etmek i\u00e7in yerine ge\u00e7mesini istiyorsan\u0131z, de\u011feri True olarak i\u015faretleyin. Bu ayar Ba\u015flat d\u00fc\u011fmesini ve bu bile\u015fen i\u00e7in olan IFrames'i gizler.",
    "Select True to allow third party systems to post grades past the deadline.": "Biti\u015f tarihi ge\u00e7mi\u015f notlar\u0131n\u0131 g\u00f6ndermek i\u00e7in \u00fc\u00e7\u00fcnc\u00fc parti sistemlere izin vermek i\u00e7in True'yu se\u00e7in.",
    "Select True to request the user's email address.": "Kullan\u0131c\u0131n\u0131n e-posta adresini istemek i\u00e7in True'yu se\u00e7in.",
    "Select True to request the user's full name.": "Kullan\u0131c\u0131n\u0131n tam ad\u0131n\u0131 istemek i\u00e7in Do\u011fru&#39;yu se\u00e7in.",
    "Select True to request the user's username.": "Kullan\u0131c\u0131n\u0131n kullan\u0131c\u0131 ad\u0131n\u0131 istemek i\u00e7in True'yu se\u00e7in.",
    "Select True to send the extra parameters, which might contain Personally Identifiable Information. The processors are site-wide, please consult the site administrator if you have any questions.": "Ki\u015fisel Olarak Tan\u0131mlanabilir Bilgiler i\u00e7erebilecek ekstra parametreleri g\u00f6ndermek i\u00e7in Do\u011fru&#39;yu se\u00e7in. \u0130\u015flemciler site genelinde ge\u00e7erlidir; herhangi bir sorunuz olursa l\u00fctfen site y\u00f6neticisine dan\u0131\u015f\u0131n.",
    "Select how the tool's public key information will be specified.": "Arac\u0131n genel anahtar bilgilerinin nas\u0131l belirtilece\u011fini se\u00e7in.",
    "Select the LTI version that your tool supports.<br />The XBlock LTI Consumer fully supports LTI 1.1.1, LTI 1.3 and LTI Advantage features.": "Arac\u0131n\u0131z\u0131n destekledi\u011fi LTI s\u00fcr\u00fcm\u00fcn\u00fc se\u00e7in.<br /> XBlock LTI Consumer, LTI 1.1.1, LTI 1.3 ve LTI Advantage \u00f6zelliklerini tam olarak destekler.",
    "Send extra parameters": "Ekstra parametreler g\u00f6nder",
    "Sending you back to your exam.": "Seni s\u0131nav\u0131na geri g\u00f6nderiyorum.",
    "Students don't have permissions to perform LTI Deep Linking configuration launches.": "\u00d6\u011frencilerin LTI Derin Ba\u011flant\u0131 yap\u0131land\u0131rmas\u0131 ba\u015flatma i\u015flemlerini ger\u00e7ekle\u015ftirme izinleri yoktur.",
    "The Deep Linking configuration stored is presented below:": "Saklanan Derin Ba\u011flant\u0131 yap\u0131land\u0131rmas\u0131 a\u015fa\u011f\u0131da sunulmu\u015ftur:",
    "The LTI Deep Linking content was successfully saved in the LMS.": "LTI Deep Linking i\u00e7eri\u011fi LMS&#39;e ba\u015far\u0131yla kaydedildi.",
    "The URL of the external tool that initiates the launch.": "Ba\u015flatmay\u0131 ba\u015flatan harici arac\u0131n URL&#39;si.",
    "The score kept in the xblock KVS -- duplicate of the published score in django DB": "Puan xblock KVS'de tutuldu -- django DB'deki yay\u0131nlanan puan\u0131n kopyas\u0131",
    "The selected content type is not supported by Open edX.": "Se\u00e7ilen i\u00e7erik t\u00fcr\u00fc Open edX taraf\u0131ndan desteklenmiyor.",
    "The specified LTI ID is not configured in this course's Advanced Settings.": "Belirtilen LTI kimli\u011fi bu kursun Geli\u015fmi\u015f Ayarlar&#39;\u0131nda yap\u0131land\u0131r\u0131lmam\u0131\u015f.",
    "There was an error while launching the LTI tool: ": "LTI arac\u0131 ba\u015flat\u0131l\u0131rken bir hata olu\u015ftu: ",
    "There was an error while starting your LTI proctored assessment.": "LTI g\u00f6zetmenli\u011findeki de\u011ferlendirmeniz ba\u015flat\u0131l\u0131rken bir hata olu\u015ftu.",
    "To do that, make sure the block is published and click the link below:": "Bunu yapmak i\u00e7in blo\u011fun yay\u0131nland\u0131\u011f\u0131ndan emin olun ve a\u015fa\u011f\u0131daki ba\u011flant\u0131ya t\u0131klay\u0131n:",
    "To set up the LTI integration, you need to register the LMS in the tool with the information provided below.": "LTI entegrasyonunu kurmak i\u00e7in a\u015fa\u011f\u0131da verilen bilgilerle LMS&#39;yi araca kaydetmeniz gerekir.",
    "Tool Initiate Login URL": "Ara\u00e7 Giri\u015f URL&#39;sini Ba\u015flat",
    "Tool Keyset URL": "Ara\u00e7 Anahtar Seti URL&#39;si",
    "Tool Launch URL": "Ara\u00e7 Ba\u015flatma URL&#39;si",
    "Tool Public Key": "Ara\u00e7 Genel Anahtar\u0131",
    "Tool Public Key Mode": "Ara\u00e7 Genel Anahtar Modu",
    "Unauthorized.": "Yetkisiz.",
    "Valid urls the Tool may request us to redirect the id token to. The redirect uris are often the same as the launch url/deep linking url so if this field is empty, it will use them as the default. If you need to use different redirect uri's, enter them here. If you use this field you must enter all valid redirect uri's the tool may request.": "Arac\u0131n bizden kimlik belirtecini y\u00f6nlendirmemizi isteyebilece\u011fi ge\u00e7erli URL&#39;ler. Y\u00f6nlendirme Uris&#39;i genellikle ba\u015flatma URL&#39;si/derin ba\u011flant\u0131 URL&#39;si ile ayn\u0131d\u0131r, dolay\u0131s\u0131yla bu alan bo\u015fsa bunlar\u0131 varsay\u0131lan olarak kullan\u0131r. Farkl\u0131 y\u00f6nlendirme uri&#39;leri kullanman\u0131z gerekiyorsa bunlar\u0131 buraya girin. Bu alan\u0131 kullan\u0131rsan\u0131z, arac\u0131n isteyebilece\u011fi t\u00fcm ge\u00e7erli y\u00f6nlendirme uri&#39;lerini girmeniz gerekir.",
    "You can configure this tool's content using LTI Deep Linking.": "Bu arac\u0131n i\u00e7eri\u011fini LTI Derin Ba\u011flant\u0131y\u0131 kullanarak yap\u0131land\u0131rabilirsiniz.",
    "You can safely close this page now.": "Art\u0131k bu sayfay\u0131 g\u00fcvenle kapatabilirsiniz.",
    "You don't have access to save LTI Content Items.": "LTI \u0130\u00e7erik \u00d6\u011felerini kaydetme eri\u015fiminiz yok.",
    "[LTI]: Real user not found against anon_id: {}": "[LTI]: anon_id&#39;ye kar\u015f\u0131 ger\u00e7ek kullan\u0131c\u0131 bulunamad\u0131: {}"
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
    "DATETIME_FORMAT": "d F Y H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "d F Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d/%m/%y",
      "%y-%m-%d",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "d F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d M Y H:i",
    "SHORT_DATE_FORMAT": "d M Y",
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
        