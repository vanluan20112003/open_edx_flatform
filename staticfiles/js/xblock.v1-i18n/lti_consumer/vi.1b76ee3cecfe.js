
            (function(global){
                var XBlockLtiConsumerI18N = {
                  init: function() {
                    

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = 0;
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "Accept grades past deadline": "Ch\u1ea5p nh\u1eadn \u0111i\u1ec3m qu\u00e1 th\u1eddi h\u1ea1n",
    "Access Token URL: ": "URL m\u00e3 th\u00f4ng b\u00e1o truy c\u1eadp: ",
    "Add the key/value pair for any custom parameters, such as the page your e-book should open to or the background color for this component. Ex. [\"page=1\", \"color=white\"]<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Th\u00eam c\u1eb7p kh\u00f3a/gi\u00e1 tr\u1ecb cho b\u1ea5t k\u1ef3 th\u00f4ng s\u1ed1 t\u00f9y ch\u1ec9nh n\u00e0o, ch\u1eb3ng h\u1ea1n nh\u01b0 trang m\u00e0 s\u00e1ch \u0111i\u1ec7n t\u1eed c\u1ee7a b\u1ea1n s\u1ebd m\u1edf t\u1edbi ho\u1eb7c m\u00e0u n\u1ec1n cho th\u00e0nh ph\u1ea7n n\u00e0y. B\u00e1n t\u1ea1i. [&quot;trang=1&quot;, &quot;m\u00e0u=tr\u1eafng&quot;]<br /> Xem t\u00e0i li\u1ec7u {docs_anchor_open} edX LTI {anchor_close} \u0111\u1ec3 bi\u1ebft th\u00eam chi ti\u1ebft v\u1ec1 c\u00e0i \u0111\u1eb7t n\u00e0y.",
    "Allow tools to manage and submit grade (programmatic)": "Cho ph\u00e9p c\u00e1c c\u00f4ng c\u1ee5 qu\u1ea3n l\u00fd v\u00e0 n\u1ed9p \u0111i\u1ec3m (c\u00f3 l\u1eadp tr\u00ecnh)",
    "Allow tools to submit grades only (declarative)": "Ch\u1ec9 cho ph\u00e9p c\u00e1c c\u00f4ng c\u1ee5 g\u1eedi \u0111i\u1ec3m (khai b\u00e1o)",
    "Button Text": "N\u00fat v\u0103n b\u1ea3n",
    "CONFIG_ON_XBLOCK and CONFIG_EXTERNAL are not supported for LTI 1.3 Proctoring Services.": "CONFIG_ON_XBLOCK v\u00e0 CONFIG_EXTERNAL kh\u00f4ng \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 cho D\u1ecbch v\u1ee5 gi\u00e1m s\u00e1t LTI 1.3.",
    "Cancel": "H\u1ee7y b\u1ecf",
    "Click Cancel to return to this page without sending your information.": "Nh\u1ea5p v\u00e0o H\u1ee7y \u0111\u1ec3 quay l\u1ea1i trang n\u00e0y m\u00e0 kh\u00f4ng g\u1eedi th\u00f4ng tin c\u1ee7a b\u1ea1n.",
    "Click OK to have your e-mail address sent to a 3rd party application.": "Nh\u1ea5p v\u00e0o OK \u0111\u1ec3 g\u1eedi \u0111\u1ecba ch\u1ec9 e-mail c\u1ee7a b\u1ea1n t\u1edbi \u1ee9ng d\u1ee5ng c\u1ee7a b\u00ean th\u1ee9 3.",
    "Click OK to have your full name and e-mail address sent to a 3rd party application.": "Nh\u1ea5p v\u00e0o OK \u0111\u1ec3 g\u1eedi t\u00ean \u0111\u1ea7y \u0111\u1ee7 v\u00e0 \u0111\u1ecba ch\u1ec9 e-mail c\u1ee7a b\u1ea1n t\u1edbi \u1ee9ng d\u1ee5ng c\u1ee7a b\u00ean th\u1ee9 3.",
    "Click OK to have your full name sent to a 3rd party application.": "Nh\u1ea5p v\u00e0o OK \u0111\u1ec3 g\u1eedi t\u00ean \u0111\u1ea7y \u0111\u1ee7 c\u1ee7a b\u1ea1n t\u1edbi \u1ee9ng d\u1ee5ng c\u1ee7a b\u00ean th\u1ee9 3.",
    "Click OK to have your username and e-mail address sent to a 3rd party application.": "Nh\u1ea5p v\u00e0o OK \u0111\u1ec3 g\u1eedi t\u00ean ng\u01b0\u1eddi d\u00f9ng v\u00e0 \u0111\u1ecba ch\u1ec9 e-mail c\u1ee7a b\u1ea1n t\u1edbi \u1ee9ng d\u1ee5ng c\u1ee7a b\u00ean th\u1ee9 3.",
    "Click OK to have your username and full name sent to a 3rd party application.": "Nh\u1ea5p v\u00e0o OK \u0111\u1ec3 g\u1eedi t\u00ean ng\u01b0\u1eddi d\u00f9ng v\u00e0 t\u00ean \u0111\u1ea7y \u0111\u1ee7 c\u1ee7a b\u1ea1n t\u1edbi \u1ee9ng d\u1ee5ng c\u1ee7a b\u00ean th\u1ee9 3.",
    "Click OK to have your username sent to a 3rd party application.": "Nh\u1ea5p v\u00e0o OK \u0111\u1ec3 g\u1eedi t\u00ean ng\u01b0\u1eddi d\u00f9ng c\u1ee7a b\u1ea1n t\u1edbi \u1ee9ng d\u1ee5ng c\u1ee7a b\u00ean th\u1ee9 3.",
    "Click OK to have your username, full name, and e-mail address sent to a 3rd party application.": "Nh\u1ea5p v\u00e0o OK \u0111\u1ec3 g\u1eedi t\u00ean ng\u01b0\u1eddi d\u00f9ng, t\u00ean \u0111\u1ea7y \u0111\u1ee7 v\u00e0 \u0111\u1ecba ch\u1ec9 e-mail c\u1ee7a b\u1ea1n t\u1edbi \u1ee9ng d\u1ee5ng c\u1ee7a b\u00ean th\u1ee9 3.",
    "Client ID used by LTI tool": "ID kh\u00e1ch h\u00e0ng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng b\u1edfi c\u00f4ng c\u1ee5 LTI",
    "Client ID: ": "ID kh\u00e1ch h\u00e0ng: ",
    "Client key provided by the LTI tool provider.": "Kh\u00f3a m\u00e1y kh\u00e1ch do nh\u00e0 cung c\u1ea5p c\u00f4ng c\u1ee5 LTI cung c\u1ea5p.",
    "Client secret provided by the LTI tool provider.": "B\u00ed m\u1eadt c\u1ee7a kh\u00e1ch h\u00e0ng \u0111\u01b0\u1ee3c cung c\u1ea5p b\u1edfi nh\u00e0 cung c\u1ea5p c\u00f4ng c\u1ee5 LTI.",
    "Comment as returned from grader, LTI2.0 spec": "Nh\u1eadn x\u00e9t \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 t\u1eeb h\u1ecdc sinh, th\u00f4ng s\u1ed1 LTI2.0",
    "Configuration Stored on XBlock fields": "C\u1ea5u h\u00ecnh \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef tr\u00ean c\u00e1c tr\u01b0\u1eddng XBlock",
    "Configuration Stored on external service": "C\u1ea5u h\u00ecnh \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef tr\u00ean d\u1ecbch v\u1ee5 b\u00ean ngo\u00e0i",
    "Configuration Stored on this model": "C\u1ea5u h\u00ecnh \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef tr\u00ean m\u00f4 h\u00ecnh n\u00e0y",
    "Configuration Type": "Lo\u1ea1i c\u1ea5u h\u00ecnh",
    "Configuration on block": "C\u1ea5u h\u00ecnh tr\u00ean kh\u1ed1i",
    "Could not get user data for current request": "Kh\u00f4ng th\u1ec3 l\u1ea5y d\u1eef li\u1ec7u ng\u01b0\u1eddi d\u00f9ng cho y\u00eau c\u1ea7u hi\u1ec7n t\u1ea1i",
    "Could not get user id for current request": "Kh\u00f4ng th\u1ec3 l\u1ea5y id ng\u01b0\u1eddi d\u00f9ng cho y\u00eau c\u1ea7u hi\u1ec7n t\u1ea1i",
    "Could not parse LTI passport: {lti_passport!r}. Should be \"id:key:secret\" string.": "Kh\u00f4ng th\u1ec3 ph\u00e2n t\u00edch c\u00fa ph\u00e1p h\u1ed9 chi\u1ebfu LTI: {lti_passport!r}. Ph\u1ea3i l\u00e0 chu\u1ed7i &quot;id:key:secret&quot;.",
    "Could not parse custom parameter: {custom_parameter!r}. Should be \"x=y\" string.": "Kh\u00f4ng th\u1ec3 ph\u00e2n t\u00edch c\u00fa ph\u00e1p th\u00f4ng s\u1ed1 t\u00f9y ch\u1ec9nh: {custom_parameter!r}. Ph\u1ea3i l\u00e0 chu\u1ed7i &quot;x=y&quot;.",
    "Custom Parameters": "Th\u00f4ng s\u1ed1 t\u00f9y ch\u1ec9nh",
    "Custom Parameters must be a list": "Th\u00f4ng s\u1ed1 t\u00f9y ch\u1ec9nh ph\u1ea3i l\u00e0 m\u1ed9t danh s\u00e1ch",
    "Custom Parameters should be strings in \"x=y\" format.": "Th\u00f4ng s\u1ed1 t\u00f9y ch\u1ec9nh ph\u1ea3i l\u00e0 chu\u1ed7i \u1edf \u0111\u1ecbnh d\u1ea1ng &quot;x=y&quot;.",
    "DEPRECATED - This is now stored in the LtiConfiguration model.": "KH\u00d4NG D\u00d9NG N\u1eeeA - \u0110i\u1ec1u n\u00e0y hi\u1ec7n \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef trong m\u00f4 h\u00ecnh LtiConfiguration.",
    "Database Configuration": "C\u1ea5u h\u00ecnh c\u01a1 s\u1edf d\u1eef li\u1ec7u",
    "Deep Linking Launch - Configure tool": "Kh\u1edfi ch\u1ea1y li\u00ean k\u1ebft s\u00e2u - C\u00f4ng c\u1ee5 \u0111\u1ecbnh c\u1ea5u h\u00ecnh",
    "Deep Linking Launch URL": "URL kh\u1edfi ch\u1ea1y li\u00ean k\u1ebft s\u00e2u",
    "Deep Linking is configured on this tool.": "Li\u00ean k\u1ebft s\u00e2u \u0111\u01b0\u1ee3c \u0111\u1ecbnh c\u1ea5u h\u00ecnh tr\u00ean c\u00f4ng c\u1ee5 n\u00e0y.",
    "Deep linking": "Li\u00ean k\u1ebft s\u00e2u",
    "Deployment ID: ": "ID tri\u1ec3n khai: ",
    "Disabled": "T\u00e0n t\u1eadt",
    "Display Name": "T\u00ean hi\u1ec3n th\u1ecb",
    "Enable LTI NRPS": "K\u00edch ho\u1ea1t LTI NRPS",
    "Enable LTI Names and Role Provisioning Services.": "K\u00edch ho\u1ea1t d\u1ecbch v\u1ee5 cung c\u1ea5p vai tr\u00f2 v\u00e0 t\u00ean LTI.",
    "Enable the LTI-AGS service and select the functionality enabled for LTI tools. The 'declarative' mode (default) will provide a tool with a LineItem created from the XBlock settings, while the 'programmatic' one will allow tools to manage, create and link the grades.": "K\u00edch ho\u1ea1t d\u1ecbch v\u1ee5 LTI-AGS v\u00e0 ch\u1ecdn ch\u1ee9c n\u0103ng k\u00edch ho\u1ea1t cho c\u00e1c c\u00f4ng c\u1ee5 LTI. Ch\u1ebf \u0111\u1ed9 &#39;khai b\u00e1o&#39; (m\u1eb7c \u0111\u1ecbnh) s\u1ebd cung c\u1ea5p cho c\u00f4ng c\u1ee5 m\u1ed9t LineItem \u0111\u01b0\u1ee3c t\u1ea1o t\u1eeb c\u00e0i \u0111\u1eb7t XBlock, trong khi ch\u1ebf \u0111\u1ed9 &#39;l\u1eadp tr\u00ecnh&#39; s\u1ebd cho ph\u00e9p c\u00e1c c\u00f4ng c\u1ee5 qu\u1ea3n l\u00fd, t\u1ea1o v\u00e0 li\u00ean k\u1ebft c\u00e1c l\u1edbp.",
    "Enter a description of the third party application. If requesting username and/or email, use this text box to inform users why their username and/or email will be forwarded to a third party application.": "Nh\u1eadp m\u00f4 t\u1ea3 v\u1ec1 \u1ee9ng d\u1ee5ng c\u1ee7a b\u00ean th\u1ee9 ba. N\u1ebfu y\u00eau c\u1ea7u t\u00ean ng\u01b0\u1eddi d\u00f9ng v\u00e0/ho\u1eb7c email, h\u00e3y s\u1eed d\u1ee5ng h\u1ed9p v\u0103n b\u1ea3n n\u00e0y \u0111\u1ec3 th\u00f4ng b\u00e1o cho ng\u01b0\u1eddi d\u00f9ng l\u00fd do t\u00ean ng\u01b0\u1eddi d\u00f9ng v\u00e0/ho\u1eb7c email c\u1ee7a h\u1ecd s\u1ebd \u0111\u01b0\u1ee3c chuy\u1ec3n ti\u1ebfp \u0111\u1ebfn \u1ee9ng d\u1ee5ng c\u1ee7a b\u00ean th\u1ee9 ba.",
    "Enter the LTI 1.3 Tool Launch URL. <br />This is the URL the LMS will use to launch the LTI Tool.": "Nh\u1eadp URL kh\u1edfi ch\u1ea1y c\u00f4ng c\u1ee5 LTI 1.3.<br /> \u0110\u00e2y l\u00e0 URL m\u00e0 LMS s\u1ebd s\u1eed d\u1ee5ng \u0111\u1ec3 kh\u1edfi ch\u1ea1y C\u00f4ng c\u1ee5 LTI.",
    "Enter the LTI 1.3 Tool OIDC Authorization url (can also be called login or login initiation URL).<br />This is the URL the LMS will use to start a LTI authorization prior to doing the launch request.": "Nh\u1eadp url \u1ee6y quy\u1ec1n OIDC c\u1ee7a C\u00f4ng c\u1ee5 LTI 1.3 (c\u0169ng c\u00f3 th\u1ec3 g\u1ecdi l\u00e0 URL \u0111\u0103ng nh\u1eadp ho\u1eb7c URL kh\u1edfi t\u1ea1o \u0111\u0103ng nh\u1eadp).<br /> \u0110\u00e2y l\u00e0 URL m\u00e0 LMS s\u1ebd s\u1eed d\u1ee5ng \u0111\u1ec3 b\u1eaft \u0111\u1ea7u \u1ee7y quy\u1ec1n LTI tr\u01b0\u1edbc khi th\u1ef1c hi\u1ec7n y\u00eau c\u1ea7u kh\u1edfi ch\u1ea1y.",
    "Enter the LTI 1.3 Tool's JWK keysets URL.<br />This link should retrieve a JSON file containing public keys and signature algorithm information, so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Nh\u1eadp URL b\u1ed9 kh\u00f3a JWK c\u1ee7a C\u00f4ng c\u1ee5 LTI 1.3.<br /> Li\u00ean k\u1ebft n\u00e0y s\u1ebd truy xu\u1ea5t t\u1ec7p JSON ch\u1ee9a kh\u00f3a chung v\u00e0 th\u00f4ng tin thu\u1eadt to\u00e1n ch\u1eef k\u00fd \u0111\u1ec3 LMS c\u00f3 th\u1ec3 ki\u1ec3m tra xem c\u00e1c th\u00f4ng b\u00e1o v\u00e0 y\u00eau c\u1ea7u kh\u1edfi ch\u1ea1y nh\u1eadn \u0111\u01b0\u1ee3c c\u00f3 ch\u1eef k\u00fd t\u1eeb c\u00f4ng c\u1ee5 hay kh\u00f4ng.<br /> <b>\u0110i\u1ec1u n\u00e0y kh\u00f4ng b\u1eaft bu\u1ed9c khi th\u1ef1c hi\u1ec7n Kh\u1edfi ch\u1ea1y LTI 1.3 m\u00e0 kh\u00f4ng y\u00eau c\u1ea7u LTI Advantage c\u0169ng nh\u01b0 K\u1ebft qu\u1ea3 c\u01a1 b\u1ea3n.</b>",
    "Enter the LTI 1.3 Tool's public key.<br />This is a string that starts with '-----BEGIN PUBLIC KEY-----' and is required so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Nh\u1eadp kh\u00f3a chung c\u1ee7a C\u00f4ng c\u1ee5 LTI 1.3.<br /> \u0110\u00e2y l\u00e0 m\u1ed9t chu\u1ed7i b\u1eaft \u0111\u1ea7u b\u1eb1ng &#39;------BEGIN PUBLIC KEY-----&#39; v\u00e0 \u0111\u01b0\u1ee3c y\u00eau c\u1ea7u \u0111\u1ec3 LMS c\u00f3 th\u1ec3 ki\u1ec3m tra xem c\u00e1c tin nh\u1eafn v\u00e0 y\u00eau c\u1ea7u kh\u1edfi ch\u1ea1y nh\u1eadn \u0111\u01b0\u1ee3c c\u00f3 ch\u1eef k\u00fd t\u1eeb c\u00f4ng c\u1ee5 hay kh\u00f4ng.<br /> <b>\u0110i\u1ec1u n\u00e0y kh\u00f4ng b\u1eaft bu\u1ed9c khi th\u1ef1c hi\u1ec7n Kh\u1edfi ch\u1ea1y LTI 1.3 m\u00e0 kh\u00f4ng y\u00eau c\u1ea7u LTI Advantage c\u0169ng nh\u01b0 K\u1ebft qu\u1ea3 c\u01a1 b\u1ea3n.</b>",
    "Enter the LTI Advantage Deep Linking Launch URL. If the tool does not specify one, use the same value as 'Tool Launch URL'.": "Nh\u1eadp URL kh\u1edfi ch\u1ea1y li\u00ean k\u1ebft s\u00e2u LTI Advantage. N\u1ebfu c\u00f4ng c\u1ee5 kh\u00f4ng ch\u1ec9 \u0111\u1ecbnh m\u1ed9t, h\u00e3y s\u1eed d\u1ee5ng c\u00f9ng gi\u00e1 tr\u1ecb v\u1edbi &#39;URL kh\u1edfi ch\u1ea1y c\u00f4ng c\u1ee5&#39;.",
    "Enter the LTI ID for the external LTI provider. This value must be the same LTI ID that you entered in the LTI Passports setting on the Advanced Settings page.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Nh\u1eadp ID LTI cho nh\u00e0 cung c\u1ea5p LTI b\u00ean ngo\u00e0i. Gi\u00e1 tr\u1ecb n\u00e0y ph\u1ea3i gi\u1ed1ng v\u1edbi ID LTI m\u00e0 b\u1ea1n \u0111\u00e3 nh\u1eadp trong c\u00e0i \u0111\u1eb7t H\u1ed9 chi\u1ebfu LTI tr\u00ean trang C\u00e0i \u0111\u1eb7t n\u00e2ng cao.<br /> Xem t\u00e0i li\u1ec7u {docs_anchor_open} edX LTI {anchor_close} \u0111\u1ec3 bi\u1ebft th\u00eam chi ti\u1ebft v\u1ec1 c\u00e0i \u0111\u1eb7t n\u00e0y.",
    "Enter the URL of the external tool that this component launches. This setting is only used when Hide External Tool is set to False.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Nh\u1eadp URL c\u1ee7a c\u00f4ng c\u1ee5 b\u00ean ngo\u00e0i m\u00e0 th\u00e0nh ph\u1ea7n n\u00e0y kh\u1edfi ch\u1ea1y. C\u00e0i \u0111\u1eb7t n\u00e0y ch\u1ec9 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng khi \u1ea8n c\u00f4ng c\u1ee5 b\u00ean ngo\u00e0i \u0111\u01b0\u1ee3c \u0111\u1eb7t th\u00e0nh Sai.<br /> Xem t\u00e0i li\u1ec7u {docs_anchor_open} edX LTI {anchor_close} \u0111\u1ec3 bi\u1ebft th\u00eam chi ti\u1ebft v\u1ec1 c\u00e0i \u0111\u1eb7t n\u00e0y.",
    "Enter the desired pixel height of the iframe which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Inline.": "Nh\u1eadp chi\u1ec1u cao pixel mong mu\u1ed1n c\u1ee7a iframe s\u1ebd ch\u1ee9a c\u00f4ng c\u1ee5 LTI. C\u00e0i \u0111\u1eb7t n\u00e0y ch\u1ec9 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng khi \u1ea8n c\u00f4ng c\u1ee5 b\u00ean ngo\u00e0i \u0111\u01b0\u1ee3c \u0111\u1eb7t th\u00e0nh Sai v\u00e0 M\u1ee5c ti\u00eau kh\u1edfi ch\u1ea1y LTI \u0111\u01b0\u1ee3c \u0111\u1eb7t th\u00e0nh N\u1ed9i tuy\u1ebfn.",
    "Enter the desired viewport percentage height of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Nh\u1eadp chi\u1ec1u cao ph\u1ea7n tr\u0103m khung nh\u00ecn mong mu\u1ed1n c\u1ee7a l\u1edbp ph\u1ee7 ph\u01b0\u01a1ng th\u1ee9c s\u1ebd ch\u1ee9a c\u00f4ng c\u1ee5 LTI. C\u00e0i \u0111\u1eb7t n\u00e0y ch\u1ec9 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng khi \u1ea8n c\u00f4ng c\u1ee5 b\u00ean ngo\u00e0i \u0111\u01b0\u1ee3c \u0111\u1eb7t th\u00e0nh Sai v\u00e0 M\u1ee5c ti\u00eau kh\u1edfi ch\u1ea1y LTI \u0111\u01b0\u1ee3c \u0111\u1eb7t th\u00e0nh Ph\u01b0\u01a1ng th\u1ee9c.",
    "Enter the desired viewport percentage width of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Nh\u1eadp ph\u1ea7n tr\u0103m chi\u1ec1u r\u1ed9ng khung nh\u00ecn mong mu\u1ed1n c\u1ee7a l\u1edbp ph\u1ee7 ph\u01b0\u01a1ng th\u1ee9c s\u1ebd ch\u1ee9a c\u00f4ng c\u1ee5 LTI. C\u00e0i \u0111\u1eb7t n\u00e0y ch\u1ec9 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng khi \u1ea8n c\u00f4ng c\u1ee5 b\u00ean ngo\u00e0i \u0111\u01b0\u1ee3c \u0111\u1eb7t th\u00e0nh Sai v\u00e0 M\u1ee5c ti\u00eau kh\u1edfi ch\u1ea1y LTI \u0111\u01b0\u1ee3c \u0111\u1eb7t th\u00e0nh Ph\u01b0\u01a1ng th\u1ee9c.",
    "Enter the name that students see for this component. Analytics reports may also use the display name to identify this component.": "Nh\u1eadp t\u00ean m\u00e0 h\u1ecdc sinh nh\u00ecn th\u1ea5y cho th\u00e0nh ph\u1ea7n n\u00e0y. B\u00e1o c\u00e1o ph\u00e2n t\u00edch c\u0169ng c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng t\u00ean hi\u1ec3n th\u1ecb \u0111\u1ec3 x\u00e1c \u0111\u1ecbnh th\u00e0nh ph\u1ea7n n\u00e0y.",
    "Enter the number of points possible for this component.  The default value is 1.0.  This setting is only used when Scored is set to True.": "Nh\u1eadp s\u1ed1 \u0111i\u1ec3m c\u00f3 th\u1ec3 c\u00f3 cho th\u00e0nh ph\u1ea7n n\u00e0y. Gi\u00e1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh l\u00e0 1.0. C\u00e0i \u0111\u1eb7t n\u00e0y ch\u1ec9 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng khi \u0110\u00e3 ghi \u0111i\u1ec3m \u0111\u01b0\u1ee3c \u0111\u1eb7t th\u00e0nh \u0110\u00fang.",
    "Enter the reusable LTI external configuration ID provided by the support staff.": "Nh\u1eadp ID c\u1ea5u h\u00ecnh b\u00ean ngo\u00e0i LTI c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng l\u1ea1i do nh\u00e2n vi\u00ean h\u1ed7 tr\u1ee3 cung c\u1ea5p.",
    "Enter the text on the button used to launch the third party application. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal or New Window.": "Nh\u1eadp v\u0103n b\u1ea3n v\u00e0o n\u00fat \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 kh\u1edfi ch\u1ea1y \u1ee9ng d\u1ee5ng c\u1ee7a b\u00ean th\u1ee9 ba. C\u00e0i \u0111\u1eb7t n\u00e0y ch\u1ec9 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng khi \u1ea8n c\u00f4ng c\u1ee5 b\u00ean ngo\u00e0i \u0111\u01b0\u1ee3c \u0111\u1eb7t th\u00e0nh Sai v\u00e0 M\u1ee5c ti\u00eau kh\u1edfi ch\u1ea1y LTI \u0111\u01b0\u1ee3c \u0111\u1eb7t th\u00e0nh Ph\u01b0\u01a1ng th\u1ee9c ho\u1eb7c C\u1eeda s\u1ed5 m\u1edbi.",
    "Hide External Tool": "\u1ea8n c\u00f4ng c\u1ee5 b\u00ean ngo\u00e0i",
    "If you run deep linking again, the content above will be replaced.": "N\u1ebfu b\u1ea1n ch\u1ea1y l\u1ea1i li\u00ean k\u1ebft s\u00e2u th\u00ec n\u1ed9i dung tr\u00ean s\u1ebd b\u1ecb thay th\u1ebf.",
    "If you're seeing this on a live course, please contact the course staff.": "N\u1ebfu b\u1ea1n nh\u00ecn th\u1ea5y \u0111i\u1ec1u n\u00e0y tr\u00ean m\u1ed9t kh\u00f3a h\u1ecdc tr\u1ef1c ti\u1ebfp, vui l\u00f2ng li\u00ean h\u1ec7 v\u1edbi nh\u00e2n vi\u00ean c\u1ee7a kh\u00f3a h\u1ecdc.",
    "Inline Height": "Chi\u1ec1u cao n\u1ed9i tuy\u1ebfn",
    "Invalid LTI configuration.": "C\u1ea5u h\u00ecnh LTI kh\u00f4ng h\u1ee3p l\u1ec7.",
    "Invalid token header. No credentials provided.": "Ti\u00eau \u0111\u1ec1 m\u00e3 th\u00f4ng b\u00e1o kh\u00f4ng h\u1ee3p l\u1ec7. Kh\u00f4ng c\u00f3 th\u00f4ng tin x\u00e1c th\u1ef1c \u0111\u01b0\u1ee3c cung c\u1ea5p.",
    "Invalid token header. Token string should not contain spaces.": "Ti\u00eau \u0111\u1ec1 m\u00e3 th\u00f4ng b\u00e1o kh\u00f4ng h\u1ee3p l\u1ec7. Chu\u1ed7i m\u00e3 th\u00f4ng b\u00e1o kh\u00f4ng \u0111\u01b0\u1ee3c ch\u1ee9a d\u1ea5u c\u00e1ch.",
    "Invalid token signature.": "Ch\u1eef k\u00fd m\u00e3 th\u00f4ng b\u00e1o kh\u00f4ng h\u1ee3p l\u1ec7.",
    "Keyset URL: ": "URL b\u1ed9 kh\u00f3a: ",
    "LTI 1.3 Block Client ID - DEPRECATED": "LTI 1.3 Ch\u1eb7n ID \u1ee9ng d\u1ee5ng kh\u00e1ch - KH\u00d4NG \u0110\u01af\u1ee2C D\u00d9NG N\u1eeeA",
    "LTI 1.3 Block Key - DEPRECATED": "Kh\u00f3a kh\u1ed1i LTI 1.3 - KH\u00d4NG \u0110\u01af\u1ee2C D\u00d9NG N\u1eeeA",
    "LTI 1.3 Launches can only be performed from the LMS.": "Vi\u1ec7c kh\u1edfi ch\u1ea1y LTI 1.3 ch\u1ec9 c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n t\u1eeb LMS.",
    "LTI Application Information": "Th\u00f4ng tin \u1ee9ng d\u1ee5ng LTI",
    "LTI Assignment and Grades Service": "D\u1ecbch v\u1ee5 ph\u00e2n c\u00f4ng v\u00e0 ch\u1ea5m \u0111i\u1ec3m LTI",
    "LTI Configuration stored on the model for LTI 1.3 must have a value for one of lti_1p3_tool_public_key or lti_1p3_tool_keyset_url.": "C\u1ea5u h\u00ecnh LTI \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef tr\u00ean m\u00f4 h\u00ecnh cho LTI 1.3 ph\u1ea3i c\u00f3 gi\u00e1 tr\u1ecb cho m\u1ed9t trong c\u00e1c lti_1p3_tool_public_key ho\u1eb7c lti_1p3_tool_keyset_url.",
    "LTI Configuration stores on XBlock needs a block location set.": "C\u1eeda h\u00e0ng C\u1ea5u h\u00ecnh LTI tr\u00ean XBlock c\u1ea7n thi\u1ebft l\u1eadp v\u1ecb tr\u00ed kh\u1ed1i.",
    "LTI Configuration using reusable configuration needs a external ID in \"x:y\" format.": "C\u1ea5u h\u00ecnh LTI s\u1eed d\u1ee5ng c\u1ea5u h\u00ecnh c\u00f3 th\u1ec3 t\u00e1i s\u1eed d\u1ee5ng c\u1ea7n c\u00f3 ID b\u00ean ngo\u00e0i \u1edf \u0111\u1ecbnh d\u1ea1ng &quot;x:y&quot;.",
    "LTI Consumer": "Ng\u01b0\u1eddi ti\u00eau d\u00f9ng LTI",
    "LTI Deep Linking": "Li\u00ean k\u1ebft s\u00e2u LTI",
    "LTI Deep Linking failed.": "Li\u00ean k\u1ebft s\u00e2u LTI kh\u00f4ng th\u00e0nh c\u00f4ng.",
    "LTI ID": "ID LTI",
    "LTI Launch Target": "M\u1ee5c ti\u00eau ra m\u1eaft LTI",
    "LTI Reusable Configuration ID": "ID c\u1ea5u h\u00ecnh c\u00f3 th\u1ec3 t\u00e1i s\u1eed d\u1ee5ng LTI",
    "LTI URL": "URL LTI",
    "LTI Version": "Phi\u00ean b\u1ea3n LTI",
    "LTI configuration data.": "D\u1eef li\u1ec7u c\u1ea5u h\u00ecnh LTI.",
    "LTI configuration not found.": "Kh\u00f4ng t\u00ecm th\u1ea5y c\u1ea5u h\u00ecnh LTI.",
    "Login URL: ": "URL \u0111\u0103ng nh\u1eadp: ",
    "Missing LTI 1.3 authentication token.": "Thi\u1ebfu m\u00e3 th\u00f4ng b\u00e1o x\u00e1c th\u1ef1c LTI 1.3.",
    "Modal Height": "Chi\u1ec1u cao ph\u01b0\u01a1ng th\u1ee9c",
    "Modal Width": "Chi\u1ec1u r\u1ed9ng ph\u01b0\u01a1ng th\u1ee9c",
    "No valid user id found in endpoint URL": "Kh\u00f4ng t\u00ecm th\u1ea5y id ng\u01b0\u1eddi d\u00f9ng h\u1ee3p l\u1ec7 trong URL \u0111i\u1ec3m cu\u1ed1i",
    "OK": "\u0110\u01af\u1ee2C R\u1ed2I",
    "Platform's generated JWK keyset.": "B\u1ed9 kh\u00f3a JWK do n\u1ec1n t\u1ea3ng t\u1ea1o.",
    "Platform's generated Private key ID": "ID kh\u00f3a ri\u00eang \u0111\u01b0\u1ee3c t\u1ea1o b\u1edfi n\u1ec1n t\u1ea3ng",
    "Platform's generated Private key. Keep this value secret.": "Kh\u00f3a ri\u00eang \u0111\u01b0\u1ee3c t\u1ea1o b\u1edfi n\u1ec1n t\u1ea3ng. Gi\u1eef b\u00ed m\u1eadt gi\u00e1 tr\u1ecb n\u00e0y.",
    "Please check that you have course staff permissions and double check this block's LTI settings.": "Vui l\u00f2ng ki\u1ec3m tra xem b\u1ea1n c\u00f3 quy\u1ec1n c\u1ee7a nh\u00e2n vi\u00ean kh\u00f3a h\u1ecdc hay kh\u00f4ng v\u00e0 ki\u1ec3m tra k\u1ef9 c\u00e0i \u0111\u1eb7t LTI c\u1ee7a kh\u1ed1i n\u00e0y.",
    "Press to Launch": "Nh\u1ea5n \u0111\u1ec3 kh\u1edfi ch\u1ea1y",
    "Registered Redirect URIs": "URI chuy\u1ec3n h\u01b0\u1edbng \u0111\u00e3 \u0111\u0103ng k\u00fd",
    "Request user's email": "Y\u00eau c\u1ea7u email c\u1ee7a ng\u01b0\u1eddi d\u00f9ng",
    "Request user's full name": "Y\u00eau c\u1ea7u t\u00ean \u0111\u1ea7y \u0111\u1ee7 c\u1ee7a ng\u01b0\u1eddi d\u00f9ng",
    "Request user's username": "Y\u00eau c\u1ea7u t\u00ean ng\u01b0\u1eddi d\u00f9ng c\u1ee7a ng\u01b0\u1eddi d\u00f9ng",
    "Return to exam.": "Tr\u1edf l\u1ea1i b\u00e0i thi.",
    "Reusable Configuration": "C\u1ea5u h\u00ecnh t\u00e1i s\u1eed d\u1ee5ng",
    "Reusable configuration ID must be set when using external config (Example: \"x:y\").": "ID c\u1ea5u h\u00ecnh c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng l\u1ea1i ph\u1ea3i \u0111\u01b0\u1ee3c \u0111\u1eb7t khi s\u1eed d\u1ee5ng c\u1ea5u h\u00ecnh b\u00ean ngo\u00e0i (V\u00ed d\u1ee5: &quot;x:y&quot;).",
    "Scored": "ghi b\u00e0n",
    "Select 'Configuration on block' to configure a new LTI Tool. If the support staff provided you with a pre-configured LTI reusable Tool ID, select'Reusable Configuration' and enter it in the text field below.": "Ch\u1ecdn &#39;C\u1ea5u h\u00ecnh tr\u00ean kh\u1ed1i&#39; \u0111\u1ec3 \u0111\u1ecbnh c\u1ea5u h\u00ecnh C\u00f4ng c\u1ee5 LTI m\u1edbi. N\u1ebfu nh\u00e2n vi\u00ean h\u1ed7 tr\u1ee3 \u0111\u00e3 cung c\u1ea5p cho b\u1ea1n ID C\u00f4ng c\u1ee5 c\u00f3 th\u1ec3 t\u00e1i s\u1eed d\u1ee5ng LTI \u0111\u01b0\u1ee3c \u0111\u1ecbnh c\u1ea5u h\u00ecnh tr\u01b0\u1edbc, h\u00e3y ch\u1ecdn &#39;C\u1ea5u h\u00ecnh c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng l\u1ea1i&#39; v\u00e0 nh\u1eadp m\u00e3 \u0111\u00f3 v\u00e0o tr\u01b0\u1eddng v\u0103n b\u1ea3n b\u00ean d\u01b0\u1edbi.",
    "Select Inline if you want the LTI content to open in an IFrame in the current page. Select Modal if you want the LTI content to open in a modal window in the current page. Select New Window if you want the LTI content to open in a new browser window. This setting is only used when Hide External Tool is set to False.": "Ch\u1ecdn N\u1ed9i tuy\u1ebfn n\u1ebfu b\u1ea1n mu\u1ed1n n\u1ed9i dung LTI m\u1edf trong IFrame tr\u00ean trang hi\u1ec7n t\u1ea1i. Ch\u1ecdn Ph\u01b0\u01a1ng th\u1ee9c n\u1ebfu b\u1ea1n mu\u1ed1n n\u1ed9i dung LTI m\u1edf trong c\u1eeda s\u1ed5 ph\u01b0\u01a1ng th\u1ee9c tr\u00ean trang hi\u1ec7n t\u1ea1i. Ch\u1ecdn C\u1eeda s\u1ed5 m\u1edbi n\u1ebfu b\u1ea1n mu\u1ed1n n\u1ed9i dung LTI m\u1edf trong c\u1eeda s\u1ed5 tr\u00ecnh duy\u1ec7t m\u1edbi. C\u00e0i \u0111\u1eb7t n\u00e0y ch\u1ec9 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng khi \u1ea8n c\u00f4ng c\u1ee5 b\u00ean ngo\u00e0i \u0111\u01b0\u1ee3c \u0111\u1eb7t th\u00e0nh Sai.",
    "Select True if this component will receive a numerical score from the external LTI system.": "Ch\u1ecdn \u0110\u00fang n\u1ebfu th\u00e0nh ph\u1ea7n n\u00e0y s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c \u0111i\u1ec3m b\u1eb1ng s\u1ed1 t\u1eeb h\u1ec7 th\u1ed1ng LTI b\u00ean ngo\u00e0i.",
    "Select True if you want to enable LTI Advantage Deep Linking.": "Ch\u1ecdn \u0110\u00fang n\u1ebfu b\u1ea1n mu\u1ed1n b\u1eadt Li\u00ean k\u1ebft s\u00e2u LTI Advantage.",
    "Select True if you want to use this component as a placeholder for syncing with an external grading  system rather than launch an external tool.  This setting hides the Launch button and any IFrames for this component.": "Ch\u1ecdn \u0110\u00fang n\u1ebfu b\u1ea1n mu\u1ed1n s\u1eed d\u1ee5ng th\u00e0nh ph\u1ea7n n\u00e0y l\u00e0m ph\u1ea7n gi\u1eef ch\u1ed7 \u0111\u1ec3 \u0111\u1ed3ng b\u1ed9 h\u00f3a v\u1edbi h\u1ec7 th\u1ed1ng ch\u1ea5m \u0111i\u1ec3m b\u00ean ngo\u00e0i thay v\u00ec kh\u1edfi ch\u1ea1y m\u1ed9t c\u00f4ng c\u1ee5 b\u00ean ngo\u00e0i. C\u00e0i \u0111\u1eb7t n\u00e0y \u1ea9n n\u00fat Kh\u1edfi ch\u1ea1y v\u00e0 m\u1ecdi IFrames cho th\u00e0nh ph\u1ea7n n\u00e0y.",
    "Select True to allow third party systems to post grades past the deadline.": "Ch\u1ecdn \u0110\u00fang \u0111\u1ec3 cho ph\u00e9p h\u1ec7 th\u1ed1ng c\u1ee7a b\u00ean th\u1ee9 ba \u0111\u0103ng \u0111i\u1ec3m qu\u00e1 th\u1eddi h\u1ea1n.",
    "Select True to request the user's email address.": "Ch\u1ecdn True \u0111\u1ec3 y\u00eau c\u1ea7u \u0111\u1ecba ch\u1ec9 email c\u1ee7a ng\u01b0\u1eddi d\u00f9ng.",
    "Select True to request the user's full name.": "Ch\u1ecdn True \u0111\u1ec3 y\u00eau c\u1ea7u t\u00ean \u0111\u1ea7y \u0111\u1ee7 c\u1ee7a ng\u01b0\u1eddi d\u00f9ng.",
    "Select True to request the user's username.": "Ch\u1ecdn True \u0111\u1ec3 y\u00eau c\u1ea7u t\u00ean ng\u01b0\u1eddi d\u00f9ng c\u1ee7a ng\u01b0\u1eddi d\u00f9ng.",
    "Select True to send the extra parameters, which might contain Personally Identifiable Information. The processors are site-wide, please consult the site administrator if you have any questions.": "Ch\u1ecdn \u0110\u00fang \u0111\u1ec3 g\u1eedi c\u00e1c tham s\u1ed1 b\u1ed5 sung, c\u00f3 th\u1ec3 ch\u1ee9a Th\u00f4ng tin nh\u1eadn d\u1ea1ng c\u00e1 nh\u00e2n. B\u1ed9 x\u1eed l\u00fd c\u00f3 tr\u00ean to\u00e0n b\u1ed9 trang web, vui l\u00f2ng tham kh\u1ea3o \u00fd ki\u1ebfn c\u1ee7a qu\u1ea3n tr\u1ecb vi\u00ean trang web n\u1ebfu b\u1ea1n c\u00f3 b\u1ea5t k\u1ef3 c\u00e2u h\u1ecfi n\u00e0o.",
    "Select how the tool's public key information will be specified.": "Ch\u1ecdn c\u00e1ch ch\u1ec9 \u0111\u1ecbnh th\u00f4ng tin kh\u00f3a c\u00f4ng khai c\u1ee7a c\u00f4ng c\u1ee5.",
    "Select the LTI version that your tool supports.<br />The XBlock LTI Consumer fully supports LTI 1.1.1, LTI 1.3 and LTI Advantage features.": "Ch\u1ecdn phi\u00ean b\u1ea3n LTI m\u00e0 c\u00f4ng c\u1ee5 c\u1ee7a b\u1ea1n h\u1ed7 tr\u1ee3.<br /> XBlock LTI Consumer h\u1ed7 tr\u1ee3 \u0111\u1ea7y \u0111\u1ee7 c\u00e1c t\u00ednh n\u0103ng LTI 1.1.1, LTI 1.3 v\u00e0 LTI Advantage.",
    "Send extra parameters": "G\u1eedi th\u00f4ng s\u1ed1 b\u1ed5 sung",
    "Sending you back to your exam.": "G\u1eedi b\u1ea1n tr\u1edf l\u1ea1i k\u1ef3 thi c\u1ee7a b\u1ea1n.",
    "Students don't have permissions to perform LTI Deep Linking configuration launches.": "H\u1ecdc vi\u00ean kh\u00f4ng c\u00f3 quy\u1ec1n th\u1ef1c hi\u1ec7n kh\u1edfi ch\u1ea1y c\u1ea5u h\u00ecnh Li\u00ean k\u1ebft s\u00e2u LTI.",
    "The Deep Linking configuration stored is presented below:": "C\u1ea5u h\u00ecnh Li\u00ean k\u1ebft s\u00e2u \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef \u0111\u01b0\u1ee3c tr\u00ecnh b\u00e0y b\u00ean d\u01b0\u1edbi:",
    "The LTI Deep Linking content was successfully saved in the LMS.": "N\u1ed9i dung Li\u00ean k\u1ebft s\u00e2u LTI \u0111\u00e3 \u0111\u01b0\u1ee3c l\u01b0u th\u00e0nh c\u00f4ng trong LMS.",
    "The URL of the external tool that initiates the launch.": "URL c\u1ee7a c\u00f4ng c\u1ee5 b\u00ean ngo\u00e0i b\u1eaft \u0111\u1ea7u kh\u1edfi ch\u1ea1y.",
    "The score kept in the xblock KVS -- duplicate of the published score in django DB": "\u0110i\u1ec3m \u0111\u01b0\u1ee3c l\u01b0u trong xblock KVS -- tr\u00f9ng l\u1eb7p v\u1edbi \u0111i\u1ec3m \u0111\u01b0\u1ee3c c\u00f4ng b\u1ed1 trong django DB",
    "The selected content type is not supported by Open edX.": "Lo\u1ea1i n\u1ed9i dung \u0111\u00e3 ch\u1ecdn kh\u00f4ng \u0111\u01b0\u1ee3c Open edX h\u1ed7 tr\u1ee3.",
    "The specified LTI ID is not configured in this course's Advanced Settings.": "ID LTI \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh kh\u00f4ng \u0111\u01b0\u1ee3c \u0111\u1ecbnh c\u1ea5u h\u00ecnh trong C\u00e0i \u0111\u1eb7t n\u00e2ng cao c\u1ee7a kh\u00f3a h\u1ecdc n\u00e0y.",
    "There was an error while launching the LTI tool: ": "\u0110\u00e3 x\u1ea3y ra l\u1ed7i khi kh\u1edfi ch\u1ea1y c\u00f4ng c\u1ee5 LTI: ",
    "There was an error while starting your LTI proctored assessment.": "\u0110\u00e3 x\u1ea3y ra l\u1ed7i khi b\u1eaft \u0111\u1ea7u \u0111\u00e1nh gi\u00e1 gi\u00e1m s\u00e1t LTI c\u1ee7a b\u1ea1n.",
    "To do that, make sure the block is published and click the link below:": "\u0110\u1ec3 l\u00e0m \u0111i\u1ec1u \u0111\u00f3, h\u00e3y \u0111\u1ea3m b\u1ea3o kh\u1ed1i \u0111\u01b0\u1ee3c xu\u1ea5t b\u1ea3n v\u00e0 nh\u1ea5p v\u00e0o li\u00ean k\u1ebft b\u00ean d\u01b0\u1edbi:",
    "To set up the LTI integration, you need to register the LMS in the tool with the information provided below.": "\u0110\u1ec3 thi\u1ebft l\u1eadp t\u00edch h\u1ee3p LTI, b\u1ea1n c\u1ea7n \u0111\u0103ng k\u00fd LMS trong c\u00f4ng c\u1ee5 v\u1edbi th\u00f4ng tin \u0111\u01b0\u1ee3c cung c\u1ea5p b\u00ean d\u01b0\u1edbi.",
    "Tool Initiate Login URL": "C\u00f4ng c\u1ee5 kh\u1edfi t\u1ea1o URL \u0111\u0103ng nh\u1eadp",
    "Tool Keyset URL": "URL b\u1ed9 kh\u00f3a c\u00f4ng c\u1ee5",
    "Tool Launch URL": "URL kh\u1edfi ch\u1ea1y c\u00f4ng c\u1ee5",
    "Tool Public Key": "Kh\u00f3a c\u00f4ng khai c\u1ee7a c\u00f4ng c\u1ee5",
    "Tool Public Key Mode": "Ch\u1ebf \u0111\u1ed9 kh\u00f3a c\u00f4ng khai c\u1ee7a c\u00f4ng c\u1ee5",
    "Unauthorized.": "Kh\u00f4ng \u0111\u01b0\u1ee3c ph\u00e9p.",
    "Valid urls the Tool may request us to redirect the id token to. The redirect uris are often the same as the launch url/deep linking url so if this field is empty, it will use them as the default. If you need to use different redirect uri's, enter them here. If you use this field you must enter all valid redirect uri's the tool may request.": "C\u00e1c url h\u1ee3p l\u1ec7 C\u00f4ng c\u1ee5 c\u00f3 th\u1ec3 y\u00eau c\u1ea7u ch\u00fang t\u00f4i chuy\u1ec3n h\u01b0\u1edbng m\u00e3 th\u00f4ng b\u00e1o id t\u1edbi. Uris chuy\u1ec3n h\u01b0\u1edbng th\u01b0\u1eddng gi\u1ed1ng v\u1edbi url kh\u1edfi ch\u1ea1y/url li\u00ean k\u1ebft s\u00e2u n\u00ean n\u1ebfu tr\u01b0\u1eddng n\u00e0y tr\u1ed1ng, n\u00f3 s\u1ebd s\u1eed d\u1ee5ng ch\u00fang l\u00e0m m\u1eb7c \u0111\u1ecbnh. N\u1ebfu b\u1ea1n c\u1ea7n s\u1eed d\u1ee5ng c\u00e1c uri chuy\u1ec3n h\u01b0\u1edbng kh\u00e1c, h\u00e3y nh\u1eadp ch\u00fang v\u00e0o \u0111\u00e2y. N\u1ebfu b\u1ea1n s\u1eed d\u1ee5ng tr\u01b0\u1eddng n\u00e0y, b\u1ea1n ph\u1ea3i nh\u1eadp t\u1ea5t c\u1ea3 c\u00e1c uri chuy\u1ec3n h\u01b0\u1edbng h\u1ee3p l\u1ec7 m\u00e0 c\u00f4ng c\u1ee5 c\u00f3 th\u1ec3 y\u00eau c\u1ea7u.",
    "You can configure this tool's content using LTI Deep Linking.": "B\u1ea1n c\u00f3 th\u1ec3 \u0111\u1ecbnh c\u1ea5u h\u00ecnh n\u1ed9i dung c\u1ee7a c\u00f4ng c\u1ee5 n\u00e0y b\u1eb1ng Li\u00ean k\u1ebft s\u00e2u LTI.",
    "You can safely close this page now.": "B\u1ea1n c\u00f3 th\u1ec3 \u0111\u00f3ng trang n\u00e0y m\u1ed9t c\u00e1ch an to\u00e0n ngay b\u00e2y gi\u1edd.",
    "You don't have access to save LTI Content Items.": "B\u1ea1n kh\u00f4ng c\u00f3 quy\u1ec1n truy c\u1eadp \u0111\u1ec3 l\u01b0u M\u1ee5c n\u1ed9i dung LTI.",
    "[LTI]: Real user not found against anon_id: {}": "[LTI]: Kh\u00f4ng t\u00ecm th\u1ea5y ng\u01b0\u1eddi d\u00f9ng th\u1ef1c \u0111\u1ed1i v\u1edbi anon_id: {}"
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
    "DATETIME_FORMAT": "H:i \\N\\g\u00e0\\y d \\t\\h\u00e1\\n\\g n \\n\u0103\\m Y",
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
    "DATE_FORMAT": "\\N\\g\u00e0\\y d \\t\\h\u00e1\\n\\g n \\n\u0103\\m Y",
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
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 0,
    "SHORT_DATETIME_FORMAT": "H:i d-m-Y",
    "SHORT_DATE_FORMAT": "d-m-Y",
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
        