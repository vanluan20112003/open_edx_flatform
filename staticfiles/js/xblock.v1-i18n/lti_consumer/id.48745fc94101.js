
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
    "Accept grades past deadline": "Accept grades past deadline",
    "Access Token URL: ": "Access Token URL: ",
    "Add the key/value pair for any custom parameters, such as the page your e-book should open to or the background color for this component. Ex. [\"page=1\", \"color=white\"]<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Add the key/value pair for any custom parameters, such as the page your e-book should open to or the background color for this component. Ex. [\"page=1\", \"color=white\"]<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.",
    "Allow tools to manage and submit grade (programmatic)": "Allow tools to manage and submit grade (programmatic)",
    "Allow tools to submit grades only (declarative)": "Allow tools to submit grades only (declarative)",
    "Button Text": "Button Text",
    "CONFIG_ON_XBLOCK and CONFIG_EXTERNAL are not supported for LTI 1.3 Proctoring Services.": "CONFIG_ON_XBLOCK and CONFIG_EXTERNAL are not supported for LTI 1.3 Proctoring Services.",
    "Cancel": "Cancel",
    "Click Cancel to return to this page without sending your information.": "Click Cancel to return to this page without sending your information.",
    "Click OK to have your e-mail address sent to a 3rd party application.": "Click OK to have your e-mail address sent to a 3rd party application.",
    "Click OK to have your full name and e-mail address sent to a 3rd party application.": "Click OK to have your full name and e-mail address sent to a 3rd party application.",
    "Click OK to have your full name sent to a 3rd party application.": "Click OK to have your full name sent to a 3rd party application.",
    "Click OK to have your username and e-mail address sent to a 3rd party application.": "Click OK to have your username and e-mail address sent to a 3rd party application.",
    "Click OK to have your username and full name sent to a 3rd party application.": "Click OK to have your username and full name sent to a 3rd party application.",
    "Click OK to have your username sent to a 3rd party application.": "Click OK to have your username sent to a 3rd party application.",
    "Click OK to have your username, full name, and e-mail address sent to a 3rd party application.": "Click OK to have your username, full name, and e-mail address sent to a 3rd party application.",
    "Client ID used by LTI tool": "Client ID used by LTI tool",
    "Client ID: ": "Client ID: ",
    "Client key provided by the LTI tool provider.": "Client key provided by the LTI tool provider.",
    "Client secret provided by the LTI tool provider.": "Client secret provided by the LTI tool provider.",
    "Comment as returned from grader, LTI2.0 spec": "Comment as returned from grader, LTI2.0 spec",
    "Configuration Stored on XBlock fields": "Configuration Stored on XBlock fields",
    "Configuration Stored on external service": "Configuration Stored on external service",
    "Configuration Stored on this model": "Configuration Stored on this model",
    "Configuration Type": "Configuration Type",
    "Configuration on block": "Configuration on block",
    "Could not get user data for current request": "Could not get user data for current request",
    "Could not get user id for current request": "Could not get user id for current request",
    "Could not parse LTI passport: {lti_passport!r}. Should be \"id:key:secret\" string.": "Could not parse LTI passport: {lti_passport!r}. Should be \"id:key:secret\" string.",
    "Could not parse custom parameter: {custom_parameter!r}. Should be \"x=y\" string.": "Could not parse custom parameter: {custom_parameter!r}. Should be \"x=y\" string.",
    "Custom Parameters": "Custom Parameters",
    "Custom Parameters must be a list": "Custom Parameters must be a list",
    "Custom Parameters should be strings in \"x=y\" format.": "Custom Parameters should be strings in \"x=y\" format.",
    "DEPRECATED - This is now stored in the LtiConfiguration model.": "DEPRECATED - This is now stored in the LtiConfiguration model.",
    "Database Configuration": "Database Configuration",
    "Deep Linking Launch - Configure tool": "Deep Linking Launch - Configure tool",
    "Deep Linking Launch URL": "Deep Linking Launch URL",
    "Deep Linking is configured on this tool.": "Deep Linking is configured on this tool.",
    "Deep linking": "Deep linking",
    "Deployment ID: ": "Deployment ID: ",
    "Disabled": "Disabled",
    "Display Name": "Display Name",
    "Enable LTI NRPS": "Enable LTI NRPS",
    "Enable LTI Names and Role Provisioning Services.": "Enable LTI Names and Role Provisioning Services.",
    "Enable the LTI-AGS service and select the functionality enabled for LTI tools. The 'declarative' mode (default) will provide a tool with a LineItem created from the XBlock settings, while the 'programmatic' one will allow tools to manage, create and link the grades.": "Enable the LTI-AGS service and select the functionality enabled for LTI tools. The 'declarative' mode (default) will provide a tool with a LineItem created from the XBlock settings, while the 'programmatic' one will allow tools to manage, create and link the grades.",
    "Enter a description of the third party application. If requesting username and/or email, use this text box to inform users why their username and/or email will be forwarded to a third party application.": "Enter a description of the third party application. If requesting username and/or email, use this text box to inform users why their username and/or email will be forwarded to a third party application.",
    "Enter the LTI 1.3 Tool Launch URL. <br />This is the URL the LMS will use to launch the LTI Tool.": "Enter the LTI 1.3 Tool Launch URL. <br />This is the URL the LMS will use to launch the LTI Tool.",
    "Enter the LTI 1.3 Tool OIDC Authorization url (can also be called login or login initiation URL).<br />This is the URL the LMS will use to start a LTI authorization prior to doing the launch request.": "Enter the LTI 1.3 Tool OIDC Authorization url (can also be called login or login initiation URL).<br />This is the URL the LMS will use to start a LTI authorization prior to doing the launch request.",
    "Enter the LTI 1.3 Tool's JWK keysets URL.<br />This link should retrieve a JSON file containing public keys and signature algorithm information, so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Enter the LTI 1.3 Tool's JWK keysets URL.<br />This link should retrieve a JSON file containing public keys and signature algorithm information, so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>",
    "Enter the LTI 1.3 Tool's public key.<br />This is a string that starts with '-----BEGIN PUBLIC KEY-----' and is required so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>": "Enter the LTI 1.3 Tool's public key.<br />This is a string that starts with '-----BEGIN PUBLIC KEY-----' and is required so that the LMS can check if the messages and launch requests received have the signature from the tool.<br /><b>This is not required when doing LTI 1.3 Launches without LTI Advantage nor Basic Outcomes requests.</b>",
    "Enter the LTI Advantage Deep Linking Launch URL. If the tool does not specify one, use the same value as 'Tool Launch URL'.": "Enter the LTI Advantage Deep Linking Launch URL. If the tool does not specify one, use the same value as 'Tool Launch URL'.",
    "Enter the LTI ID for the external LTI provider. This value must be the same LTI ID that you entered in the LTI Passports setting on the Advanced Settings page.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Enter the LTI ID for the external LTI provider. This value must be the same LTI ID that you entered in the LTI Passports setting on the Advanced Settings page.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.",
    "Enter the URL of the external tool that this component launches. This setting is only used when Hide External Tool is set to False.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.": "Enter the URL of the external tool that this component launches. This setting is only used when Hide External Tool is set to False.<br />See the {docs_anchor_open}edX LTI documentation{anchor_close} for more details on this setting.",
    "Enter the desired pixel height of the iframe which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Inline.": "Enter the desired pixel height of the iframe which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Inline.",
    "Enter the desired viewport percentage height of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Enter the desired viewport percentage height of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.",
    "Enter the desired viewport percentage width of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.": "Enter the desired viewport percentage width of the modal overlay which will contain the LTI tool. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal.",
    "Enter the name that students see for this component. Analytics reports may also use the display name to identify this component.": "Enter the name that students see for this component. Analytics reports may also use the display name to identify this component.",
    "Enter the number of points possible for this component.  The default value is 1.0.  This setting is only used when Scored is set to True.": "Enter the number of points possible for this component.  The default value is 1.0.  This setting is only used when Scored is set to True.",
    "Enter the reusable LTI external configuration ID provided by the support staff.": "Enter the reusable LTI external configuration ID provided by the support staff.",
    "Enter the text on the button used to launch the third party application. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal or New Window.": "Enter the text on the button used to launch the third party application. This setting is only used when Hide External Tool is set to False and LTI Launch Target is set to Modal or New Window.",
    "Hide External Tool": "Hide External Tool",
    "If you run deep linking again, the content above will be replaced.": "If you run deep linking again, the content above will be replaced.",
    "If you're seeing this on a live course, please contact the course staff.": "If you're seeing this on a live course, please contact the course staff.",
    "Inline Height": "Inline Height",
    "Invalid LTI configuration.": "Invalid LTI configuration.",
    "Invalid token header. No credentials provided.": "Invalid token header. No credentials provided.",
    "Invalid token header. Token string should not contain spaces.": "Invalid token header. Token string should not contain spaces.",
    "Invalid token signature.": "Invalid token signature.",
    "Keyset URL: ": "Keyset URL: ",
    "LTI 1.3 Block Client ID - DEPRECATED": "LTI 1.3 Block Client ID - DEPRECATED",
    "LTI 1.3 Block Key - DEPRECATED": "LTI 1.3 Block Key - DEPRECATED",
    "LTI 1.3 Launches can only be performed from the LMS.": "LTI 1.3 Launches can only be performed from the LMS.",
    "LTI Application Information": "LTI Application Information",
    "LTI Assignment and Grades Service": "LTI Assignment and Grades Service",
    "LTI Configuration stored on the model for LTI 1.3 must have a value for one of lti_1p3_tool_public_key or lti_1p3_tool_keyset_url.": "LTI Configuration stored on the model for LTI 1.3 must have a value for one of lti_1p3_tool_public_key or lti_1p3_tool_keyset_url.",
    "LTI Configuration stores on XBlock needs a block location set.": "LTI Configuration stores on XBlock needs a block location set.",
    "LTI Configuration using reusable configuration needs a external ID in \"x:y\" format.": "LTI Configuration using reusable configuration needs a external ID in \"x:y\" format.",
    "LTI Consumer": "LTI Consumer",
    "LTI Deep Linking": "LTI Deep Linking",
    "LTI Deep Linking failed.": "LTI Deep Linking failed.",
    "LTI ID": "LTI ID",
    "LTI Launch Target": "LTI Launch Target",
    "LTI Reusable Configuration ID": "LTI Reusable Configuration ID",
    "LTI URL": "LTI URL",
    "LTI Version": "LTI Version",
    "LTI configuration data.": "LTI configuration data.",
    "LTI configuration not found.": "LTI configuration not found.",
    "Login URL: ": "Login URL: ",
    "Missing LTI 1.3 authentication token.": "Missing LTI 1.3 authentication token.",
    "Modal Height": "Modal Height",
    "Modal Width": "Modal Width",
    "No valid user id found in endpoint URL": "No valid user id found in endpoint URL",
    "OK": "OK",
    "Platform's generated JWK keyset.": "Platform's generated JWK keyset.",
    "Platform's generated Private key ID": "Platform's generated Private key ID",
    "Platform's generated Private key. Keep this value secret.": "Platform's generated Private key. Keep this value secret.",
    "Please check that you have course staff permissions and double check this block's LTI settings.": "Please check that you have course staff permissions and double check this block's LTI settings.",
    "Press to Launch": "Press to Launch",
    "Registered Redirect URIs": "Registered Redirect URIs",
    "Request user's email": "Request user's email",
    "Request user's full name": "Request user's full name",
    "Request user's username": "Request user's username",
    "Return to exam.": "Return to exam.",
    "Reusable Configuration": "Reusable Configuration",
    "Reusable configuration ID must be set when using external config (Example: \"x:y\").": "Reusable configuration ID must be set when using external config (Example: \"x:y\").",
    "Scored": "Scored",
    "Select 'Configuration on block' to configure a new LTI Tool. If the support staff provided you with a pre-configured LTI reusable Tool ID, select'Reusable Configuration' and enter it in the text field below.": "Select 'Configuration on block' to configure a new LTI Tool. If the support staff provided you with a pre-configured LTI reusable Tool ID, select'Reusable Configuration' and enter it in the text field below.",
    "Select Inline if you want the LTI content to open in an IFrame in the current page. Select Modal if you want the LTI content to open in a modal window in the current page. Select New Window if you want the LTI content to open in a new browser window. This setting is only used when Hide External Tool is set to False.": "Select Inline if you want the LTI content to open in an IFrame in the current page. Select Modal if you want the LTI content to open in a modal window in the current page. Select New Window if you want the LTI content to open in a new browser window. This setting is only used when Hide External Tool is set to False.",
    "Select True if this component will receive a numerical score from the external LTI system.": "Select True if this component will receive a numerical score from the external LTI system.",
    "Select True if you want to enable LTI Advantage Deep Linking.": "Select True if you want to enable LTI Advantage Deep Linking.",
    "Select True if you want to use this component as a placeholder for syncing with an external grading  system rather than launch an external tool.  This setting hides the Launch button and any IFrames for this component.": "Select True if you want to use this component as a placeholder for syncing with an external grading  system rather than launch an external tool.  This setting hides the Launch button and any IFrames for this component.",
    "Select True to allow third party systems to post grades past the deadline.": "Select True to allow third party systems to post grades past the deadline.",
    "Select True to request the user's email address.": "Select True to request the user's email address.",
    "Select True to request the user's full name.": "Select True to request the user's full name.",
    "Select True to request the user's username.": "Select True to request the user's username.",
    "Select True to send the extra parameters, which might contain Personally Identifiable Information. The processors are site-wide, please consult the site administrator if you have any questions.": "Select True to send the extra parameters, which might contain Personally Identifiable Information. The processors are site-wide, please consult the site administrator if you have any questions.",
    "Select how the tool's public key information will be specified.": "Select how the tool's public key information will be specified.",
    "Select the LTI version that your tool supports.<br />The XBlock LTI Consumer fully supports LTI 1.1.1, LTI 1.3 and LTI Advantage features.": "Select the LTI version that your tool supports.<br />The XBlock LTI Consumer fully supports LTI 1.1.1, LTI 1.3 and LTI Advantage features.",
    "Send extra parameters": "Send extra parameters",
    "Sending you back to your exam.": "Sending you back to your exam.",
    "Students don't have permissions to perform LTI Deep Linking configuration launches.": "Students don't have permissions to perform LTI Deep Linking configuration launches.",
    "The Deep Linking configuration stored is presented below:": "The Deep Linking configuration stored is presented below:",
    "The LTI Deep Linking content was successfully saved in the LMS.": "The LTI Deep Linking content was successfully saved in the LMS.",
    "The URL of the external tool that initiates the launch.": "The URL of the external tool that initiates the launch.",
    "The score kept in the xblock KVS -- duplicate of the published score in django DB": "The score kept in the xblock KVS -- duplicate of the published score in django DB",
    "The selected content type is not supported by Open edX.": "The selected content type is not supported by Open edX.",
    "The specified LTI ID is not configured in this course's Advanced Settings.": "The specified LTI ID is not configured in this course's Advanced Settings.",
    "There was an error while launching the LTI tool: ": "There was an error while launching the LTI tool: ",
    "There was an error while starting your LTI proctored assessment.": "There was an error while starting your LTI proctored assessment.",
    "To do that, make sure the block is published and click the link below:": "To do that, make sure the block is published and click the link below:",
    "To set up the LTI integration, you need to register the LMS in the tool with the information provided below.": "To set up the LTI integration, you need to register the LMS in the tool with the information provided below.",
    "Tool Initiate Login URL": "Tool Initiate Login URL",
    "Tool Keyset URL": "Tool Keyset URL",
    "Tool Launch URL": "Tool Launch URL",
    "Tool Public Key": "Tool Public Key",
    "Tool Public Key Mode": "Tool Public Key Mode",
    "Unauthorized.": "Unauthorized.",
    "Valid urls the Tool may request us to redirect the id token to. The redirect uris are often the same as the launch url/deep linking url so if this field is empty, it will use them as the default. If you need to use different redirect uri's, enter them here. If you use this field you must enter all valid redirect uri's the tool may request.": "Valid urls the Tool may request us to redirect the id token to. The redirect uris are often the same as the launch url/deep linking url so if this field is empty, it will use them as the default. If you need to use different redirect uri's, enter them here. If you use this field you must enter all valid redirect uri's the tool may request.",
    "You can configure this tool's content using LTI Deep Linking.": "You can configure this tool's content using LTI Deep Linking.",
    "You can safely close this page now.": "You can safely close this page now.",
    "You don't have access to save LTI Content Items.": "You don't have access to save LTI Content Items.",
    "[LTI]: Real user not found against anon_id: {}": "[LTI]: Real user not found against anon_id: {}"
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
    "DATETIME_FORMAT": "j N Y, G.i",
    "DATETIME_INPUT_FORMATS": [
      "%d-%m-%Y %H.%M.%S",
      "%d-%m-%Y %H.%M.%S.%f",
      "%d-%m-%Y %H.%M",
      "%d-%m-%y %H.%M.%S",
      "%d-%m-%y %H.%M.%S.%f",
      "%d-%m-%y %H.%M",
      "%m/%d/%y %H.%M.%S",
      "%m/%d/%y %H.%M.%S.%f",
      "%m/%d/%y %H.%M",
      "%m/%d/%Y %H.%M.%S",
      "%m/%d/%Y %H.%M.%S.%f",
      "%m/%d/%Y %H.%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j N Y",
    "DATE_INPUT_FORMATS": [
      "%d-%m-%Y",
      "%d/%m/%Y",
      "%d-%m-%y",
      "%d/%m/%y",
      "%d %b %Y",
      "%d %B %Y",
      "%m/%d/%y",
      "%m/%d/%Y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d-m-Y G.i",
    "SHORT_DATE_FORMAT": "d-m-Y",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "G.i",
    "TIME_INPUT_FORMATS": [
      "%H.%M.%S",
      "%H.%M",
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
        