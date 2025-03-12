
            (function(global){
                var RecommenderXBlockI18N = {
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
    "&lt; Related resources": "&lt; Recursos relacionados",
    "A resource was clicked": "Se hizo clic en un recurso",
    "Add new resource": "Agregar nuevo recurso",
    "Add new resource &gt;&gt;": "Agregar nuevo recurso &gt;&gt;",
    "Add resource": "Agregar recurso",
    "Back to resource list mode": "Volver al modo de lista de recursos",
    "Check the icon to endorse this resource": "Marque el \u00edcono para respaldar este recurso.",
    "Click to view resources for removal": "Haga clic para ver los recursos para la eliminaci\u00f3n",
    "Click to view resources in ordinary decreasing-vote order": "Haga clic para ver los recursos en orden ordinario de votos decrecientes",
    "Configuration setting": "Ajuste de configuraci\u00f3n",
    "Cut-and-paste the URL of the resource.": "Corta y pega la URL del recurso.",
    "Delete this resource": "Eliminar este recurso",
    "Description": "Descripci\u00f3n",
    "Do you want to disable the UX functions which are under development?": "\u00bfQuieres desactivar las funciones UX que est\u00e1n en desarrollo?",
    "Do you want to take users on a little tour when they see the RecommenderXBlock first time?": "\u00bfQuiere llevar a los usuarios a un peque\u00f1o recorrido cuando vean RecommenderXBlock por primera vez?",
    "Download resources": "Descargar recursos",
    "Downvote if the resource is not helpful": "Vota negativamente si el recurso no es \u00fatil.",
    "Edit existing resource": "Editar recurso existente",
    "Edit the resource and make it more helpful for other students with this problem. Please do not give the answer directly.": "Edite el recurso y h\u00e1galo m\u00e1s \u00fatil para otros estudiantes con este problema. Por favor no d\u00e9 la respuesta directamente.",
    "Edit this resource": "Editar este recurso",
    "Endorse Resource": "Respaldar recurso",
    "Endorse resource": "Respaldar recurso",
    "Endorse resource without permission": "Respaldar recurso sin permiso",
    "Endorse this resource and give the reason why you do that.": "Respalde este recurso y explique la raz\u00f3n por la que lo hace.",
    "Entering add resource mode": "Entrando al modo agregar recurso",
    "Entering edit resource mode": "Entrando al modo de edici\u00f3n de recursos",
    "Entering flag resource mode": "Entrando al modo de recurso de bandera",
    "Entering import resource mode": "Entrando al modo de importaci\u00f3n de recursos",
    "Export resources": "Exportar recursos",
    "Flag Resource": "Marcar recurso",
    "Flag resource": "Marcar recurso",
    "Flag this resource as problematic and give your reason": "Marca este recurso como problem\u00e1tico y explica el motivo.",
    "From page {fromPage} To page {toPage}": "De la p\u00e1gina {fromPage} A la p\u00e1gina {toPage}",
    "Give a meaningful reason for why this resource should be removed": "Proporcione una raz\u00f3n significativa por la que se debe eliminar este recurso.",
    "Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title": "Dar un p\u00e1rrafo de resumen del recurso; el resumen debe ser m\u00e1s detallado que el que proporcionaste en el t\u00edtulo",
    "Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them": "D\u00e9 un resumen breve (de 1 a 3 oraciones) del recurso; Idealmente, esto deber\u00eda ser conciso, pero brindar suficientes detalles para que los estudiantes sepan si este recurso les es \u00fatil.",
    "Go back to the main list": "Volver a la lista principal",
    "Here is a list of reasons why students think this resource problematic:": "Aqu\u00ed hay una lista de razones por las que los estudiantes piensan que este recurso es problem\u00e1tico:",
    "Hide related resources": "Ocultar recursos relacionados",
    "Hide the recommendations list": "Ocultar la lista de recomendaciones",
    "Hovering resource": "recurso flotante",
    "How many page icons in pagination control (i.e., page range)? The icons for pages from (current page - page range) to (current page + page range) will be shown.": "\u00bfCu\u00e1ntos \u00edconos de p\u00e1gina hay en el control de paginaci\u00f3n (es decir, rango de p\u00e1ginas)? Se mostrar\u00e1n los iconos para las p\u00e1ginas desde (p\u00e1gina actual - rango de p\u00e1ginas) hasta (p\u00e1gina actual + rango de p\u00e1ginas).",
    "How many resources you want to show in each page of the resource list?": "\u00bfCu\u00e1ntos recursos desea mostrar en cada p\u00e1gina de la lista de recursos?",
    "Import resources": "Importar recursos",
    "Invalid location URL provided": "URL de ubicaci\u00f3n no v\u00e1lida proporcionada",
    "Location": "Ubicaci\u00f3n",
    "No": "No",
    "Only staff can import resources": "S\u00f3lo el personal puede importar recursos",
    "Please submit the JSON file obtained with the download resources button": "Env\u00ede el archivo JSON obtenido con el bot\u00f3n de descarga de recursos.",
    "Preview image (typically, a screenshot)": "Imagen de vista previa (normalmente, una captura de pantalla)",
    "Preview screenshot:": "Captura de pantalla de vista previa:",
    "Provide a file of resource list in JSON format": "Proporcionar un archivo de lista de recursos en formato JSON",
    "Provide a file of resource screenshot": "Proporcionar un archivo de captura de pantalla del recurso",
    "Provide a meaningful description so other students know whether this is useful to them": "Proporcione una descripci\u00f3n significativa para que otros estudiantes sepan si les resulta \u00fatil.",
    "Provide a meaningful title so other students know whether this is useful to them": "Proporcione un t\u00edtulo significativo para que otros estudiantes sepan si les resulta \u00fatil.",
    "Provide a resource description": "Proporcionar una descripci\u00f3n del recurso",
    "Provide a resource location in url, required": "Proporcione una ubicaci\u00f3n de recurso en la URL, obligatorio",
    "Provide a resource screenshot": "Proporcionar una captura de pantalla del recurso",
    "Provide a resource title, required": "Proporcionar un t\u00edtulo de recurso, obligatorio",
    "Reason": "Raz\u00f3n",
    "Reason for why this resource should be endorsed": "Raz\u00f3n por la cual se debe respaldar este recurso",
    "Reason for why this resource should be flagged": "Motivo por el que se debe marcar este recurso",
    "Reason for why this resource should be removed": "Raz\u00f3n por la que se debe eliminar este recurso",
    "Recommend a new resource which may be helpful to other students solving this problem": "Recomendar un nuevo recurso que pueda ser \u00fatil para otros estudiantes que resuelvan este problema.",
    "Remove Resource": "Eliminar recurso",
    "Remove resource": "Eliminar recurso",
    "Remove this resource and give the reason why you do that": "Elimina este recurso y explica el motivo por el que lo haces.",
    "Remove this resource and give the reason why you do that.": "Elimine este recurso y proporcione la raz\u00f3n por la que lo hace.",
    "Resource title": "T\u00edtulo del recurso",
    "Resource: ": "Recurso: ",
    "Resources (in JSON format):": "Recursos (en formato JSON):",
    "Save change": "Guardar cambios",
    "Set the student-view, client side configurations for RecommenderXblock.": "Establezca las configuraciones del lado del cliente de la vista de estudiante para RecommenderXblock.",
    "Show a list of student-recommented related resources": "Mostrar una lista de recursos relacionados recomendados por estudiantes",
    "Show related resources": "Mostrar recursos relacionados",
    "Size of uploaded file exceeds threshold": "El tama\u00f1o del archivo subido supera el umbral",
    "Suggest a resource which can help other students with this problem. Please do not give the answer directly.": "Sugiera un recurso que pueda ayudar a otros estudiantes con este problema. Por favor no d\u00e9 la respuesta directamente.",
    "Suggest resource": "Sugerir recurso",
    "The configuration of pyfs is not properly set": "La configuraci\u00f3n de pyfs no est\u00e1 configurada correctamente",
    "The content you typed has not been submitted yet. Are you sure to go back?": "El contenido que usted escribi\u00f3 a\u00fan no ha sido enviado. \u00bfEst\u00e1s seguro de que volver\u00e1s?",
    "The reason why it is endorsed is:": "La raz\u00f3n por la que se avala es:",
    "The resource you are attempting to provide already exists": "El recurso que intenta proporcionar ya existe",
    "The resource you are attempting to provide has been disallowed by the staff. Reason: ": "El personal ha rechazado el recurso que intenta proporcionar. Raz\u00f3n: ",
    "The selected resource does not exist": "El recurso seleccionado no existe",
    "This is a list of recommended resources. If you\\": "Esta es una lista de recursos recomendados. Si usted\\",
    "This is a list of resources your fellow students thought might be helpful. If you find another useful resource, either on edx.org or elsewhere, please add it. If you can improve the description or preview of a resource, please do so as well. If you find a resource helpful, upvote it. If it&rsquo;s not so helpful, downvote it. If it has issues (illegal material, incorrect, etc.), please flag it and let us know the reason.": "Esta es una lista de recursos que sus compa\u00f1eros de estudios pensaron que podr\u00edan ser \u00fatiles. Si encuentra otro recurso \u00fatil, ya sea en edx.org o en otro lugar, agr\u00e9guelo. Si puede mejorar la descripci\u00f3n o la vista previa de un recurso, h\u00e1galo tambi\u00e9n. Si encuentra un recurso \u00fatil, votelo. Si no es tan \u00fatil, vota en contra. Si tiene problemas (material ilegal, incorrecto, etc.), m\u00e1rquelo y h\u00e1ganos saber el motivo.",
    "This resource is endorsed by staff": "Este recurso est\u00e1 respaldado por el personal.",
    "This will be a list of resources your fellow students thought might be helpful, but it is empty currently. If you find useful resources, either on edx.org or elsewhere, please add it.": "Esta ser\u00e1 una lista de recursos que sus compa\u00f1eros de estudios pensaron que podr\u00edan ser \u00fatiles, pero actualmente est\u00e1 vac\u00eda. Si encuentra recursos \u00fatiles, ya sea en edx.org o en otro lugar, agr\u00e9guelos.",
    "Title": "T\u00edtulo",
    "Tried to access flagged resources without staff permission": "Intent\u00f3 acceder a recursos marcados sin el permiso del personal",
    "Unendorse resource": "Dejar de respaldar el recurso",
    "Unflag resource": "Desmarcar recurso",
    "Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them": "Cargue una captura de pantalla de vista previa (en GIF/PNG/JPG) del recurso; Idealmente, esto deber\u00eda permitirles a los estudiantes saber si estos recursos les son \u00fatiles.",
    "Upload resources": "Subir recursos",
    "Upload resources in JSON format to the database.": "Sube recursos en formato JSON a la base de datos.",
    "Upvote if the resource is helpful": "Vota si el recurso es \u00fatil.",
    "Votes": "Votos",
    "Why would you like to flag this resource? The staff will review all flagged resources, and remove inappropriate ones (spam, incorrect, abusive, etc.). Giving a clear reason will help us do this efficiently.": "\u00bfPor qu\u00e9 le gustar\u00eda marcar este recurso? El personal revisar\u00e1 todos los recursos marcados y eliminar\u00e1 los inapropiados (spam, incorrectos, abusivos, etc.). Dar una raz\u00f3n clara nos ayudar\u00e1 a hacer esto de manera eficiente.",
    "Yes": "Si",
    "You don't have the permission to remove this resource": "No tienes permiso para eliminar este recurso.",
    "cancel and go back to resource list": "cancelar y volver a la lista de recursos",
    "mode": "modo",
    "votes": "votos"
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
                RecommenderXBlockI18N.init();
                global.RecommenderXBlockI18N = RecommenderXBlockI18N;
            }(this));
        