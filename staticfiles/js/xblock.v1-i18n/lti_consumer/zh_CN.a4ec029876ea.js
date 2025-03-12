
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
    "Accept grades past deadline": "\u63a5\u53d7\u8d85\u8fc7\u9650\u671f\u7684\u6210\u7ee9",
    "Access Token URL: ": "\u8bbf\u95ee\u4ee4\u724c\u7f51\u5740\uff1a ",
    "Add the key/value pair for any custom parameters, such as the page your e-book should open to or the background color for this component. Ex. [\"page=1\", \"color=white\"]<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "\u6dfb\u52a0\u4efb\u4f55\u81ea\u5b9a\u4e49\u53c2\u6570\u7684\u952e/\u503c\u5bf9\uff0c\u4f8b\u5982\u7535\u5b50\u4e66\u5e94\u6253\u5f00\u7684\u9875\u9762\u6216\u8be5\u7ec4\u4ef6\u7684\u80cc\u666f\u989c\u8272\u3002\u524d\u4efb\u3002 [\u201c\u9875=1\u201d\uff0c\u201c\u989c\u8272=\u767d\u8272\u201d]<br />\u6709\u5173\u6b64\u8bbe\u7f6e\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605{docs_anchor_open} edX LTI \u6587\u6863{anchor_close} \u3002",
    "Allow tools to manage and submit grade (programmatic)": "\u5141\u8bb8\u5de5\u5177\u7ba1\u7406\u548c\u63d0\u4ea4\u6210\u7ee9\uff08\u7a0b\u5e8f\u5316\uff09",
    "Allow tools to submit grades only (declarative)": "\u4ec5\u5141\u8bb8\u5de5\u5177\u63d0\u4ea4\u6210\u7ee9\uff08\u58f0\u660e\u6027\uff09",
    "Button Text": "\u6309\u94ae\u6587\u672c",
    "CONFIG_ON_XBLOCK and CONFIG_EXTERNAL are not supported for LTI 1.3 Proctoring Services.": "LTI 1.3 \u76d1\u8003\u670d\u52a1\u4e0d\u652f\u6301 CONFIG_ON_XBLOCK \u548c CONFIG_EXTERNAL\u3002",
    "Cancel": "\u53d6\u6d88",
    "Click Cancel to return to this page without sending your information.": "\u5355\u51fb\u53d6\u6d88\u8fd4\u56de\u6b64\u9875\u9762\u800c\u4e0d\u53d1\u9001\u60a8\u7684\u4fe1\u606f\u3002",
    "Click OK to have your e-mail address sent to a 3rd party application.": "\u5355\u51fb\u201c\u786e\u5b9a\u201d\u5c06\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u53d1\u9001\u5230\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u3002",
    "Click OK to have your full name and e-mail address sent to a 3rd party application.": "\u5355\u51fb\u201c\u786e\u5b9a\u201d\u5c06\u60a8\u7684\u5168\u540d\u548c\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u53d1\u9001\u5230\u7b2c 3 \u65b9\u5e94\u7528\u7a0b\u5e8f\u3002",
    "Click OK to have your full name sent to a 3rd party application.": "\u5355\u51fb\u201c\u786e\u5b9a\u201d\u5c06\u60a8\u7684\u5168\u540d\u53d1\u9001\u81f3\u7b2c 3 \u65b9\u5e94\u7528\u7a0b\u5e8f\u3002",
    "Click OK to have your username and e-mail address sent to a 3rd party application.": "\u5355\u51fb\u201c\u786e\u5b9a\u201d\u5c06\u60a8\u7684\u7528\u6237\u540d\u548c\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u53d1\u9001\u5230\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u3002",
    "Click OK to have your username and full name sent to a 3rd party application.": "\u5355\u51fb\u201c\u786e\u5b9a\u201d\u5c06\u60a8\u7684\u7528\u6237\u540d\u548c\u5168\u540d\u53d1\u9001\u5230\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u3002",
    "Click OK to have your username sent to a 3rd party application.": "\u5355\u51fb\u201c\u786e\u5b9a\u201d\u5c06\u60a8\u7684\u7528\u6237\u540d\u53d1\u9001\u5230\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u3002",
    "Click OK to have your username, full name, and e-mail address sent to a 3rd party application.": "\u5355\u51fb\u201c\u786e\u5b9a\u201d\u5c06\u60a8\u7684\u7528\u6237\u540d\u3001\u5168\u540d\u548c\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u53d1\u9001\u5230\u7b2c 3 \u65b9\u5e94\u7528\u7a0b\u5e8f\u3002",
    "Client ID used by LTI tool": "LTI \u5de5\u5177\u4f7f\u7528\u7684\u5ba2\u6237\u7aef ID",
    "Client ID: ": "\u5ba2\u6237\u7f16\u53f7\uff1a ",
    "Client key provided by the LTI tool provider.": "\u5ba2\u6237\u7aef\u5bc6\u94a5\u7531 LTI \u5de5\u5177\u63d0\u4f9b\u5546\u63d0\u4f9b\u3002",
    "Client secret provided by the LTI tool provider.": "LTI \u5de5\u5177\u63d0\u4f9b\u5546\u63d0\u4f9b\u7684\u5ba2\u6237\u7aef\u5bc6\u94a5\u3002",
    "Comment as returned from grader, LTI2.0 spec": "Comment as returned from grader, LTI2.0 spec",
    "Configuration Stored on XBlock fields": "\u5b58\u50a8\u5728 XBlock \u5b57\u6bb5\u4e2d\u7684\u914d\u7f6e",
    "Configuration Stored on external service": "\u914d\u7f6e\u5b58\u50a8\u5728\u5916\u90e8\u670d\u52a1\u4e0a",
    "Configuration Stored on this model": "\u6b64\u578b\u53f7\u4e0a\u5b58\u50a8\u7684\u914d\u7f6e",
    "Configuration Type": "\u914d\u7f6e\u7c7b\u578b",
    "Configuration on block": "\u5757\u4e0a\u7684\u914d\u7f6e",
    "Could not get user data for current request": "\u65e0\u6cd5\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7528\u6237\u6570\u636e",
    "Could not get user id for current request": "\u65e0\u6cd5\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7528\u6237 ID",
    "Could not parse LTI passport: {lti_passport!r}. Should be \"id:key:secret\" string.": "\u65e0\u6cd5\u89e3\u6790 LTI \u62a4\u7167\uff1a{lti_passport!r}\u3002\u5e94\u8be5\u662f\u201cid:key:secret\u201d\u5b57\u7b26\u4e32\u3002",
    "Could not parse custom parameter: {custom_parameter!r}. Should be \"x=y\" string.": "\u65e0\u6cd5\u89e3\u6790\u81ea\u5b9a\u4e49\u53c2\u6570\uff1a{custom_parameter!r}\u3002\u5e94\u8be5\u662f\u201cx=y\u201d\u5b57\u7b26\u4e32\u3002",
    "Custom Parameters": "\u81ea\u5b9a\u4e49\u53c2\u6570",
    "Custom Parameters must be a list": "\u81ea\u5b9a\u4e49\u53c2\u6570\u5fc5\u987b\u662f\u5217\u8868",
    "Custom Parameters should be strings in \"x=y\" format.": "\u81ea\u5b9a\u4e49\u53c2\u6570\u5e94\u4e3a\u201cx=y\u201d\u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u3002",
    "DEPRECATED - This is now stored in the LtiConfiguration model.": "\u5df2\u5f03\u7528 - \u73b0\u5728\u5b58\u50a8\u5728 LtiConfiguration \u6a21\u578b\u4e2d\u3002",
    "Database Configuration": "\u6570\u636e\u5e93\u914d\u7f6e",
    "Deep Linking Launch - Configure tool": "\u6df1\u5c42\u94fe\u63a5\u542f\u52a8 - \u914d\u7f6e\u5de5\u5177",
    "Deep Linking Launch URL": "\u6df1\u5c42\u94fe\u63a5\u542f\u52a8 URL",
    "Deep Linking is configured on this tool.": "\u6df1\u5ea6\u94fe\u63a5\u662f\u5728\u6b64\u5de5\u5177\u4e0a\u914d\u7f6e\u7684\u3002",
    "Deep linking": "\u6df1\u5c42\u94fe\u63a5",
    "Deployment ID: ": "\u90e8\u7f72 ID\uff1a ",
    "Disabled": "\u5df2\u505c\u7528",
    "Display Name": "\u663e\u793a\u540d\u79f0",
    "Enable LTI NRPS": "\u542f\u7528 LTI NRPS",
    "Enable LTI Names and Role Provisioning Services.": "\u542f\u7528 LTI \u540d\u79f0\u548c\u89d2\u8272\u914d\u7f6e\u670d\u52a1\u3002",
    "Enable the LTI-AGS service and select the functionality enabled for LTI tools. The 'declarative' mode (default) will provide a tool with a LineItem created from the XBlock settings, while the 'programmatic' one will allow tools to manage, create and link the grades.": "\u542f\u7528 LTI-AGS \u670d\u52a1\u5e76\u9009\u62e9\u4e3a LTI \u5de5\u5177\u542f\u7528\u7684\u529f\u80fd\u3002 \u201c\u58f0\u660e\u5f0f\u201d\u6a21\u5f0f\uff08\u9ed8\u8ba4\uff09\u5c06\u63d0\u4f9b\u4e00\u79cd\u5e26\u6709\u4ece XBlock \u8bbe\u7f6e\u521b\u5efa\u7684 LineItem \u7684\u5de5\u5177\uff0c\u800c\u201c\u7f16\u7a0b\u5f0f\u201d\u6a21\u5f0f\u5c06\u5141\u8bb8\u5de5\u5177\u7ba1\u7406\u3001\u521b\u5efa\u548c\u94fe\u63a5\u6210\u7ee9\u3002",
    "Enter a description of the third party application. If requesting username and/or email, use this text box to inform users why their username and/or email will be forwarded to a third party application.": "\u8f93\u5165\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u7684\u63cf\u8ff0\u3002\u5982\u679c\u9700\u8981\u8f93\u5165\u7528\u6237\u540d\u548c/\u6216\u7535\u5b50\u90ae\u4ef6\uff0c \u4f7f\u7528\u6b64\u6587\u672c\u6846\u6765\u544a\u8bc9\u7528\u6237\u4e3a\u4ec0\u4e48\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u7528\u6237\u7684\u7528\u6237\u540d\u53ca\u7535\u5b50\u90ae\u7bb1\u3002",
    "Enter the LTI 1.3 Tool Launch URL. <br />This is the URL the LMS will use to launch the LTI Tool.": "\u8f93\u5165 LTI 1.3 \u5de5\u5177\u542f\u52a8 URL\u3002<br />\u8fd9\u662f LMS \u5c06\u7528\u6765\u542f\u52a8 LTI \u5de5\u5177\u7684 URL\u3002",
    "Enter the LTI 1.3 Tool OIDC Authorization url (can also be called login or login initiation URL).<br />This is the URL the LMS will use to start a LTI authorization prior to doing the launch request.": "\u8f93\u5165 LTI 1.3 \u5de5\u5177 OIDC \u6388\u6743 URL\uff08\u4e5f\u53ef\u4ee5\u79f0\u4e3a\u767b\u5f55\u6216\u767b\u5f55\u542f\u52a8 URL\uff09\u3002<br />\u8fd9\u662f LMS \u5728\u53d1\u51fa\u542f\u52a8\u8bf7\u6c42\u4e4b\u524d\u7528\u4e8e\u542f\u52a8 LTI \u6388\u6743\u7684 URL\u3002",
    "Enter the LTI 1.3 Tool's JWK keysets URL.<br />This link should retrieve a JSON file containing public keys and signature algorithm information, so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "\u8f93\u5165 LTI 1.3 \u5de5\u5177\u7684 JWK \u952e\u96c6 URL\u3002<br />\u6b64\u94fe\u63a5\u5e94\u68c0\u7d22\u5305\u542b\u516c\u94a5\u548c\u7b7e\u540d\u7b97\u6cd5\u4fe1\u606f\u7684 JSON \u6587\u4ef6\uff0c\u4ee5\u4fbf LMS \u53ef\u4ee5\u68c0\u67e5\u6536\u5230\u7684\u6d88\u606f\u548c\u542f\u52a8\u8bf7\u6c42\u662f\u5426\u5177\u6709\u8be5\u5de5\u5177\u7684\u7b7e\u540d\u3002<br /><b>\u5728\u6ca1\u6709 LTI Advantage \u6216\u57fa\u672c\u7ed3\u679c\u8bf7\u6c42\u7684\u60c5\u51b5\u4e0b\u6267\u884c LTI 1.3 \u542f\u52a8\u65f6\uff0c\u4e0d\u9700\u8981\u8fd9\u6837\u505a\u3002</b>",
    "Enter the LTI 1.3 Tool's public key.<br />This is a string that starts with '-----BEGIN PUBLIC KEY-----' and is required so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "\u8f93\u5165 LTI 1.3 \u5de5\u5177\u7684\u516c\u94a5\u3002<br />\u8fd9\u662f\u4e00\u4e2a\u4ee5\u201c-----BEGIN PUBLIC KEY-----\u201d\u5f00\u5934\u7684\u5b57\u7b26\u4e32\uff0c\u662f\u5fc5\u9700\u7684\uff0c\u4ee5\u4fbf LMS \u53ef\u4ee5\u68c0\u67e5\u6536\u5230\u7684\u6d88\u606f\u548c\u542f\u52a8\u8bf7\u6c42\u662f\u5426\u5177\u6709\u8be5\u5de5\u5177\u7684\u7b7e\u540d\u3002<br /><b>\u5728\u6ca1\u6709 LTI Advantage \u6216\u57fa\u672c\u7ed3\u679c\u8bf7\u6c42\u7684\u60c5\u51b5\u4e0b\u6267\u884c LTI 1.3 \u542f\u52a8\u65f6\uff0c\u4e0d\u9700\u8981\u8fd9\u6837\u505a\u3002</b>",
    "Enter the LTI Advantage Deep Linking Launch URL. If the tool does not specify one, use the same value as 'Tool Launch URL'.": "\u8f93\u5165 LTI Advantage \u6df1\u5ea6\u94fe\u63a5\u542f\u52a8 URL\u3002\u5982\u679c\u8be5\u5de5\u5177\u672a\u6307\u5b9a\uff0c\u8bf7\u4f7f\u7528\u4e0e\u201c\u5de5\u5177\u542f\u52a8 URL\u201d\u76f8\u540c\u7684\u503c\u3002",
    "Enter the LTI ID for the external LTI provider. This value must be the same LTI ID that you entered in the LTI Passports setting on the Advanced Settings page.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "\u8f93\u5165\u5916\u90e8 LTI \u63d0\u4f9b\u5546\u7684 LTI ID\u3002\u8be5\u503c\u5fc5\u987b\u4e0e\u60a8\u5728\u201c\u9ad8\u7ea7\u8bbe\u7f6e\u201d\u9875\u9762\u4e0a\u7684\u201cLTI \u901a\u884c\u8bc1\u201d\u8bbe\u7f6e\u4e2d\u8f93\u5165\u7684 LTI ID \u76f8\u540c\u3002<br />\u6709\u5173\u6b64\u8bbe\u7f6e\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605{docs_anchor_open} edX LTI \u6587\u6863{anchor_close} \u3002",
    "Enter the URL of the external tool that this component launches. This setting is only used when Hide External Tool is set to False.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "\u8f93\u5165\u8be5\u7ec4\u4ef6\u542f\u52a8\u7684\u5916\u90e8\u5de5\u5177\u7684 URL\u3002\u4ec5\u5f53\u9690\u85cf\u5916\u90e8\u5de5\u5177\u8bbe\u7f6e\u4e3a False \u65f6\u624d\u4f7f\u7528\u6b64\u8bbe\u7f6e\u3002<br />\u6709\u5173\u6b64\u8bbe\u7f6e\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605{docs_anchor_open} edX LTI \u6587\u6863{anchor_close} \u3002",
    "Enter the desired pixel height of the iframe which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Inline.": "\u8f93\u5165\u5c06\u5305\u542b LTI \u5de5\u5177\u7684 iframe \u6240\u9700\u7684\u50cf\u7d20\u9ad8\u5ea6\u3002\u4ec5\u5f53\u201c\u9690\u85cf\u5916\u90e8\u5de5\u5177\u201d\u8bbe\u7f6e\u4e3a\u201cFalse\u201d\u4e14\u201cLTI \u542f\u52a8\u76ee\u6807\u201d\u8bbe\u7f6e\u4e3a\u201c\u5185\u8054\u201d\u65f6\uff0c\u624d\u4f1a\u4f7f\u7528\u6b64\u8bbe\u7f6e\u3002",
    "Enter the desired viewport percentage height of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "\u8f93\u5165\u5c06\u5305\u542b LTI \u5de5\u5177\u7684\u6a21\u6001\u53e0\u52a0\u5c42\u6240\u9700\u7684\u89c6\u53e3\u767e\u5206\u6bd4\u9ad8\u5ea6\u3002\u4ec5\u5f53\u201c\u9690\u85cf\u5916\u90e8\u5de5\u5177\u201d\u8bbe\u7f6e\u4e3a\u201cFalse\u201d\u4e14\u201cLTI \u542f\u52a8\u76ee\u6807\u201d\u8bbe\u7f6e\u4e3a\u201c\u6a21\u6001\u201d\u65f6\uff0c\u624d\u4f1a\u4f7f\u7528\u6b64\u8bbe\u7f6e\u3002",
    "Enter the desired viewport percentage width of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "\u8f93\u5165\u5c06\u5305\u542b LTI \u5de5\u5177\u7684\u6a21\u6001\u53e0\u52a0\u5c42\u6240\u9700\u7684\u89c6\u53e3\u767e\u5206\u6bd4\u5bbd\u5ea6\u3002\u4ec5\u5f53\u201c\u9690\u85cf\u5916\u90e8\u5de5\u5177\u201d\u8bbe\u7f6e\u4e3a\u201cFalse\u201d\u4e14\u201cLTI \u542f\u52a8\u76ee\u6807\u201d\u8bbe\u7f6e\u4e3a\u201c\u6a21\u6001\u201d\u65f6\uff0c\u624d\u4f1a\u4f7f\u7528\u6b64\u8bbe\u7f6e\u3002",
    "Enter the name that students see for this component. Analytics reports may also use the display name to identify this component.": "\u8f93\u5165\u5b66\u751f\u770b\u5230\u7684\u8be5\u7ec4\u4ef6\u7684\u540d\u79f0\u3002\u5206\u6790\u62a5\u544a\u8fd8\u53ef\u4ee5\u4f7f\u7528\u663e\u793a\u540d\u79f0\u6765\u6807\u8bc6\u8be5\u7ec4\u4ef6\u3002",
    "Enter the number of points possible for this component.  The default value is 1.0.  This setting is only used when Scored is set to True.": "\u8f93\u5165\u8be5\u7ec4\u4ef6\u53ef\u80fd\u7684\u5206\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a 1.0\u3002\u8be5\u8bbe\u7f6e\u4ec5\u5728\u201c\u53ef\u8bc4\u5206\u201d\u8bbe\u7f6e\u4e3atrue\u7684\u65f6\u5019\u624d\u6709\u7528\u3002",
    "Enter the reusable LTI external configuration ID provided by the support staff.": "\u8f93\u5165\u652f\u6301\u4eba\u5458\u63d0\u4f9b\u7684\u53ef\u91cd\u590d\u4f7f\u7528\u7684 LTI \u5916\u90e8\u914d\u7f6e ID\u3002",
    "Enter the text on the button used to launch the third party application. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal or New Window.": "\u5728\u7528\u4e8e\u542f\u52a8\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u7684\u6309\u94ae\u4e0a\u8f93\u5165\u6587\u672c\u3002\u4ec5\u5f53\u201c\u9690\u85cf\u5916\u90e8\u5de5\u5177\u201d\u8bbe\u7f6e\u4e3a\u201c\u5047\u201d\u4e14 LTI \u542f\u52a8\u76ee\u6807\u8bbe\u7f6e\u4e3a\u201c\u6a21\u6001\u201d\u6216\u201c\u65b0\u7a97\u53e3\u201d\u65f6\uff0c\u624d\u4f7f\u7528\u6b64\u8bbe\u7f6e\u3002",
    "Hide External Tool": "\u9690\u85cf\u6269\u5c55\u5de5\u5177",
    "If you run deep linking again, the content above will be replaced.": "\u5982\u679c\u518d\u6b21\u8fd0\u884c\u6df1\u5c42\u94fe\u63a5\uff0c\u4e0a\u9762\u7684\u5185\u5bb9\u5c06\u88ab\u66ff\u6362\u3002",
    "If you're seeing this on a live course, please contact the course staff.": "\u5982\u679c\u60a8\u5728\u5b9e\u65f6\u8bfe\u7a0b\u4e2d\u770b\u5230\u6b64\u5185\u5bb9\uff0c\u8bf7\u8054\u7cfb\u8bfe\u7a0b\u5de5\u4f5c\u4eba\u5458\u3002",
    "Inline Height": "\u5185\u8054\u9ad8\u5ea6",
    "Invalid LTI configuration.": "LTI \u914d\u7f6e\u65e0\u6548\u3002",
    "Invalid token header. No credentials provided.": "\u4ee4\u724c\u6807\u5934\u65e0\u6548\u3002\u6ca1\u6709\u63d0\u4f9b\u51ed\u636e\u3002",
    "Invalid token header. Token string should not contain spaces.": "\u4ee4\u724c\u6807\u5934\u65e0\u6548\u3002\u4ee4\u724c\u5b57\u7b26\u4e32\u4e0d\u5e94\u5305\u542b\u7a7a\u683c\u3002",
    "Invalid token signature.": "\u4ee4\u724c\u7b7e\u540d\u65e0\u6548\u3002",
    "Keyset URL: ": "\u5bc6\u94a5\u96c6\u7f51\u5740\uff1a ",
    "LTI 1.3 Block Client ID - DEPRECATED": "LTI 1.3 \u5757\u5ba2\u6237\u7aef ID - \u5df2\u5f03\u7528",
    "LTI 1.3 Block Key - DEPRECATED": "LTI 1.3 \u5757\u5bc6\u94a5 - \u5df2\u5f03\u7528",
    "LTI 1.3 Launches can only be performed from the LMS.": "LTI 1.3 \u542f\u52a8\u53ea\u80fd\u4ece LMS \u6267\u884c\u3002",
    "LTI Application Information": "LTI\u5e94\u7528\u4fe1\u606f",
    "LTI Assignment and Grades Service": "LTI \u4f5c\u4e1a\u548c\u6210\u7ee9\u670d\u52a1",
    "LTI Configuration stored on the model for LTI 1.3 must have a value for one of lti_1p3_tool_public_key or lti_1p3_tool_keyset_url.": "\u5b58\u50a8\u5728 LTI 1.3 \u6a21\u578b\u4e0a\u7684 LTI \u914d\u7f6e\u5fc5\u987b\u5177\u6709 lti_1p3_tool_public_key \u6216 lti_1p3_tool_keyset_url \u4e4b\u4e00\u7684\u503c\u3002",
    "LTI Configuration stores on XBlock needs a block location set.": "XBlock \u4e0a\u7684 LTI \u914d\u7f6e\u5b58\u50a8\u9700\u8981\u5757\u4f4d\u7f6e\u96c6\u3002",
    "LTI Configuration using reusable configuration needs a external ID in \"x:y\" format.": "\u4f7f\u7528\u53ef\u91cd\u7528\u914d\u7f6e\u7684 LTI \u914d\u7f6e\u9700\u8981\u201cx:y\u201d\u683c\u5f0f\u7684\u5916\u90e8 ID\u3002",
    "LTI Consumer": "LTI\u6d88\u8d39\u8005",
    "LTI Deep Linking": "LTI \u6df1\u5ea6\u94fe\u63a5",
    "LTI Deep Linking failed.": "LTI \u6df1\u5ea6\u94fe\u63a5\u5931\u8d25\u3002",
    "LTI ID": "LTI ID",
    "LTI Launch Target": "LTI \u53d1\u5c04\u76ee\u6807",
    "LTI Reusable Configuration ID": "LTI \u53ef\u91cd\u7528\u914d\u7f6e ID",
    "LTI URL": "LTI URL",
    "LTI Version": "LTI\u7248\u672c",
    "LTI configuration data.": "LTI \u914d\u7f6e\u6570\u636e\u3002",
    "LTI configuration not found.": "\u672a\u627e\u5230 LTI \u914d\u7f6e\u3002",
    "Login URL: ": "\u767b\u5f55\u7f51\u5740\uff1a ",
    "Missing LTI 1.3 authentication token.": "\u7f3a\u5c11 LTI 1.3 \u8eab\u4efd\u9a8c\u8bc1\u4ee4\u724c\u3002",
    "Modal Height": "\u6a21\u6001\u9ad8\u5ea6",
    "Modal Width": "\u6a21\u6001\u5bbd\u5ea6",
    "No valid user id found in endpoint URL": "\u5728\u7aef\u70b9 URL \u4e2d\u627e\u4e0d\u5230\u6709\u6548\u7684\u7528\u6237 ID",
    "OK": "\u662f\u7684",
    "Platform's generated JWK keyset.": "\u5e73\u53f0\u751f\u6210\u7684 JWK \u5bc6\u94a5\u96c6\u3002",
    "Platform's generated Private key ID": "\u5e73\u53f0\u751f\u6210\u7684\u79c1\u94a5ID",
    "Platform's generated Private key. Keep this value secret.": "\u5e73\u53f0\u751f\u6210\u7684\u79c1\u94a5\u3002\u5c06\u6b64\u503c\u4fdd\u5bc6\u3002",
    "Please check that you have course staff permissions and double check this block's LTI settings.": "\u8bf7\u68c0\u67e5\u60a8\u662f\u5426\u62e5\u6709\u8bfe\u7a0b\u5458\u5de5\u6743\u9650\uff0c\u5e76\u4ed4\u7ec6\u68c0\u67e5\u8be5\u5757\u7684 LTI \u8bbe\u7f6e\u3002",
    "Press to Launch": "\u70b9\u51fb\u6765\u542f\u52a8",
    "Registered Redirect URIs": "\u6ce8\u518c\u7684\u91cd\u5b9a\u5411 URI",
    "Request user's email": "\u9700\u8981\u7528\u6237\u90ae\u7bb1",
    "Request user's full name": "\u8bf7\u6c42\u7528\u6237\u7684\u5168\u540d",
    "Request user's username": "\u9700\u8981\u7528\u6237\u540d",
    "Return to exam.": "\u8fd4\u56de\u8003\u8bd5\u3002",
    "Reusable Configuration": "\u53ef\u91cd\u590d\u4f7f\u7528\u7684\u914d\u7f6e",
    "Reusable configuration ID must be set when using external config (Example: \"x:y\").": "\u4f7f\u7528\u5916\u90e8\u914d\u7f6e\u65f6\u5fc5\u987b\u8bbe\u7f6e\u53ef\u91cd\u7528\u914d\u7f6e ID\uff08\u793a\u4f8b\uff1a\u201cx:y\u201d\uff09\u3002",
    "Scored": "\u53ef\u8bc4\u5206",
    "Select 'Configuration on block' to configure a new LTI Tool. If the support staff provided you with a pre-configured LTI reusable Tool ID, select'Reusable Configuration' and enter it in the text field below.": "\u9009\u62e9\u201c\u5757\u914d\u7f6e\u201d\u4ee5\u914d\u7f6e\u65b0\u7684 LTI \u5de5\u5177\u3002\u5982\u679c\u652f\u6301\u4eba\u5458\u4e3a\u60a8\u63d0\u4f9b\u4e86\u9884\u914d\u7f6e\u7684 LTI \u53ef\u91cd\u7528\u5de5\u5177 ID\uff0c\u8bf7\u9009\u62e9\u201c\u53ef\u91cd\u7528\u914d\u7f6e\u201d\u5e76\u5c06\u5176\u8f93\u5165\u5230\u4e0b\u9762\u7684\u6587\u672c\u5b57\u6bb5\u4e2d\u3002",
    "Select Inline if you want the LTI content to open in an IFrame in the current page. Select Modal if you want the LTI content to open in a modal window in the current page. Select New Window if you want the LTI content to open in a new browser window. This setting is only used when Hide External Tool is set to False.": "\u5982\u679c\u60a8\u5e0c\u671b LTI \u5185\u5bb9\u5728\u5f53\u524d\u9875\u9762\u7684 IFrame \u4e2d\u6253\u5f00\uff0c\u8bf7\u9009\u62e9\u201c\u5185\u8054\u201d\u3002\u5982\u679c\u60a8\u5e0c\u671b LTI \u5185\u5bb9\u5728\u5f53\u524d\u9875\u9762\u7684\u6a21\u5f0f\u7a97\u53e3\u4e2d\u6253\u5f00\uff0c\u8bf7\u9009\u62e9\u6a21\u5f0f\u3002\u5982\u679c\u60a8\u5e0c\u671b\u5728\u65b0\u7684\u6d4f\u89c8\u5668\u7a97\u53e3\u4e2d\u6253\u5f00 LTI \u5185\u5bb9\uff0c\u8bf7\u9009\u62e9\u201c\u65b0\u7a97\u53e3\u201d\u3002\u4ec5\u5f53\u9690\u85cf\u5916\u90e8\u5de5\u5177\u8bbe\u7f6e\u4e3a False \u65f6\u624d\u4f7f\u7528\u6b64\u8bbe\u7f6e\u3002",
    "Select True if this component will receive a numerical score from the external LTI system.": "\u5982\u679c\u5141\u8bb8\u8be5\u7ec4\u4ef6\u63a5\u6536\u6765\u81ea\u5916\u90e8\u7684LTI\u7cfb\u7edf\u7684\u6570\u503c\u5206\u6570\u8bf7\u9009\u62e9True\u3002",
    "Select True if you want to enable LTI Advantage Deep Linking.": "\u5982\u679c\u8981\u542f\u7528 LTI Advantage \u6df1\u5ea6\u94fe\u63a5\uff0c\u8bf7\u9009\u62e9 True\u3002",
    "Select True if you want to use this component as a placeholder for syncing with an external grading  system rather than launch an external tool.  This setting hides the Launch button and any IFrames for this component.": "\u82e5\u60a8\u60f3\u8981\u4f7f\u7528\u8be5\u7ec4\u4ef6\u4f5c\u4e3a\u4e00\u4e2a\u4e0e\u5916\u90e8\u8bc4\u5206\u7cfb\u7edf\u540c\u6b65\u7684\u5360\u4f4d\u7b26\uff0c\u800c\u4e0d\u662f\u542f\u52a8\u4e00\u4e2a\u5916\u90e8\u5de5\u5177\uff0c\u5219\u8bbe\u8be5\u503c\u4e3aTure\u3002\u8be5\u8bbe\u7f6e\u4f1a\u9690\u85cf\u542f\u52a8\u6309\u94ae\u548c\u8be5\u7ec4\u4ef6\u7684\u4efb\u4f55\u5185\u8054\u6846\u67b6\u3002",
    "Select True to allow third party systems to post grades past the deadline.": "\u8bf7\u9009\u62e9\u201cTrue\u201d\u4ee5\u540c\u610f\u7b2c\u4e09\u65b9\u7cfb\u7edf\u5728\u622a\u6b62\u65e5\u671f\u4e4b\u540e\u53d1\u5e03\u6210\u7ee9\u3002",
    "Select True to request the user's email address.": "\u9009\u62e9True \u4ee5\u8bf7\u6c42\u7528\u6237\u7684\u90ae\u7bb1\u3002",
    "Select True to request the user's full name.": "\u9009\u62e9 True \u4ee5\u8bf7\u6c42\u7528\u6237\u7684\u5168\u540d\u3002",
    "Select True to request the user's username.": "\u9009\u62e9True \u4ee5\u8981\u6c42\u7528\u6237\u7684\u7528\u6237\u540d username\u3002",
    "Select True to send the extra parameters, which might contain Personally Identifiable Information. The processors are site-wide, please consult the site administrator if you have any questions.": "\u9009\u62e9 True \u53ef\u53d1\u9001\u989d\u5916\u53c2\u6570\uff0c\u5176\u4e2d\u53ef\u80fd\u5305\u542b\u4e2a\u4eba\u8eab\u4efd\u4fe1\u606f\u3002\u5904\u7406\u8005\u662f\u7ad9\u70b9\u8303\u56f4\u5185\u7684\uff0c\u5982\u679c\u60a8\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u8bf7\u54a8\u8be2\u7ad9\u70b9\u7ba1\u7406\u5458\u3002",
    "Select how the tool's public key information will be specified.": "\u9009\u62e9\u5982\u4f55\u6307\u5b9a\u5de5\u5177\u7684\u516c\u94a5\u4fe1\u606f\u3002",
    "Select the LTI version that your tool supports.<br />The XBlock LTI Consumer fully supports LTI 1.1.1, LTI 1.3 and LTI Advantage features.": "\u9009\u62e9\u60a8\u7684\u5de5\u5177\u652f\u6301\u7684 LTI \u7248\u672c\u3002<br /> XBlock LTI Consumer \u5b8c\u5168\u652f\u6301 LTI 1.1.1\u3001LTI 1.3 \u548c LTI Advantage \u529f\u80fd\u3002",
    "Send extra parameters": "\u53d1\u9001\u989d\u5916\u53c2\u6570",
    "Sending you back to your exam.": "\u5c06\u60a8\u9001\u56de\u8003\u8bd5\u3002",
    "Students don't have permissions to perform LTI Deep Linking configuration launches.": "\u5b66\u751f\u65e0\u6743\u6267\u884c LTI \u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e\u542f\u52a8\u3002",
    "The Deep Linking configuration stored is presented below:": "\u5b58\u50a8\u7684\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e\u5982\u4e0b\u6240\u793a\uff1a",
    "The LTI Deep Linking content was successfully saved in the LMS.": "LTI \u6df1\u5ea6\u94fe\u63a5\u5185\u5bb9\u5df2\u6210\u529f\u4fdd\u5b58\u5728 LMS \u4e2d\u3002",
    "The URL of the external tool that initiates the launch.": "\u542f\u52a8\u542f\u52a8\u7684\u5916\u90e8\u5de5\u5177\u7684 URL\u3002",
    "The score kept in the xblock KVS -- duplicate of the published score in django DB": "\u5206\u6570\u4fdd\u5b58\u5728xblock KVS\u4e2d\u2014\u2014\u5df2\u516c\u5e03\u5206\u6570\u7684\u5206\u672c\u5b58\u50a8\u5728django\u6570\u636e\u5e93\u4e2d",
    "The selected content type is not supported by Open edX.": "Open edX \u4e0d\u652f\u6301\u6240\u9009\u7684\u5185\u5bb9\u7c7b\u578b\u3002",
    "The specified LTI ID is not configured in this course's Advanced Settings.": "\u6307\u5b9a\u7684 LTI ID \u672a\u5728\u672c\u8bfe\u7a0b\u7684\u9ad8\u7ea7\u8bbe\u7f6e\u4e2d\u914d\u7f6e\u3002",
    "There was an error while launching the LTI tool: ": "\u542f\u52a8 LTI \u5de5\u5177\u65f6\u51fa\u73b0\u9519\u8bef\uff1a ",
    "There was an error while starting your LTI proctored assessment.": "\u5f00\u59cb LTI \u76d1\u8003\u8bc4\u4f30\u65f6\u51fa\u73b0\u9519\u8bef\u3002",
    "To do that, make sure the block is published and click the link below:": "\u4e3a\u6b64\uff0c\u8bf7\u786e\u4fdd\u8be5\u5757\u5df2\u53d1\u5e03\u5e76\u5355\u51fb\u4e0b\u9762\u7684\u94fe\u63a5\uff1a",
    "To set up the LTI integration, you need to register the LMS in the tool with the information provided below.": "\u8981\u8bbe\u7f6e LTI \u96c6\u6210\uff0c\u60a8\u9700\u8981\u4f7f\u7528\u4e0b\u9762\u63d0\u4f9b\u7684\u4fe1\u606f\u5728\u5de5\u5177\u4e2d\u6ce8\u518c LMS\u3002",
    "Tool Initiate Login URL": "\u5de5\u5177\u542f\u52a8\u767b\u5f55 URL",
    "Tool Keyset URL": "\u5de5\u5177\u952e\u96c6 URL",
    "Tool Launch URL": "\u5de5\u5177\u542f\u52a8\u7f51\u5740",
    "Tool Public Key": "\u5de5\u5177\u516c\u94a5",
    "Tool Public Key Mode": "\u5de5\u5177\u516c\u94a5\u6a21\u5f0f",
    "Unauthorized.": "\u672a\u7ecf\u6388\u6743\u3002",
    "Valid urls the Tool may request us to redirect the id token to. The redirect uris are often the same as the launch url/deep linking url so if this field is empty, it will use them as the default. If you need to use different redirect uri's, enter them here. If you use this field you must enter all valid redirect uri's the tool may request.": "\u8be5\u5de5\u5177\u53ef\u80fd\u8981\u6c42\u6211\u4eec\u5c06 id \u4ee4\u724c\u91cd\u5b9a\u5411\u5230\u7684\u6709\u6548 URL\u3002\u91cd\u5b9a\u5411 uri \u901a\u5e38\u4e0e\u542f\u52a8 url/\u6df1\u5c42\u94fe\u63a5 url \u76f8\u540c\uff0c\u56e0\u6b64\u5982\u679c\u6b64\u5b57\u6bb5\u4e3a\u7a7a\uff0c\u5b83\u5c06\u4f7f\u7528\u5b83\u4eec\u4f5c\u4e3a\u9ed8\u8ba4\u503c\u3002\u5982\u679c\u60a8\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u91cd\u5b9a\u5411 uri\uff0c\u8bf7\u5728\u6b64\u5904\u8f93\u5165\u3002\u5982\u679c\u60a8\u4f7f\u7528\u6b64\u5b57\u6bb5\uff0c\u5219\u5fc5\u987b\u8f93\u5165\u8be5\u5de5\u5177\u53ef\u80fd\u8bf7\u6c42\u7684\u6240\u6709\u6709\u6548\u91cd\u5b9a\u5411 URI\u3002",
    "You can configure this tool's content using LTI Deep Linking.": "\u60a8\u53ef\u4ee5\u4f7f\u7528 LTI \u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e\u6b64\u5de5\u5177\u7684\u5185\u5bb9\u3002",
    "You can safely close this page now.": "\u60a8\u73b0\u5728\u53ef\u4ee5\u5b89\u5168\u5730\u5173\u95ed\u6b64\u9875\u9762\u3002",
    "You don't have access to save LTI Content Items.": "\u60a8\u65e0\u6743\u4fdd\u5b58 LTI \u5185\u5bb9\u9879\u3002",
    "[LTI]: Real user not found against anon_id: {}": "[LTI]\uff1a\u672a\u627e\u5230\u9488\u5bf9 anon_id \u7684\u771f\u5b9e\u7528\u6237\uff1a{}"
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
        