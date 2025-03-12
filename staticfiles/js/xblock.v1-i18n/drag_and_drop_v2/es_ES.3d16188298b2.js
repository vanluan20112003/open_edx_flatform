
            (function(global){
                var DragAndDropI18N = {
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
    "\n                            Please provide a description of the image for non-visual users.\n                            The description should provide sufficient information to allow anyone\n                            to solve the problem even without seeing the image.\n                        ": "\nProporcione una descripci\u00f3n de la imagen para usuarios no visuales.\n La descripci\u00f3n debe proporcionar suficiente informaci\u00f3n para permitir que cualquiera\n para solucionar el problema incluso sin ver la imagen.\n                        ",
    "(inherited from Advanced Settings)": "(heredado de Configuraci\u00f3n avanzada)",
    ", draggable": ", arrastrable",
    ", draggable, grabbed": ", arrastrable, agarrado",
    ", dropzone": ", zona de descenso",
    "Actions": "Acciones",
    "Add a zone": "Agregar una zona",
    "Add an item": "Agregar un art\u00edculo",
    "After All Attempts": "Despu\u00e9s de todos los intentos",
    "After All Attempts or Correct": "Despu\u00e9s de todos los intentos o correcto",
    "Always": "Siempre",
    "An error occurred. Unable to load drag and drop problem.": "Ocurri\u00f3 un error. No se puede cargar el problema de arrastrar y soltar.",
    "An isosceles triangle with three layers of similar height. It is shown upright, so the widest layer is located at the bottom, and the narrowest layer is located at the top.": "Un tri\u00e1ngulo is\u00f3sceles con tres capas de altura similar. Se muestra en vertical por lo que la capa m\u00e1s ancha se encuentra en la parte inferior y la m\u00e1s estrecha en la parte alta. ",
    "Answered": "Respondido",
    "Assessment": "Tarea",
    "Attempted": "Intentado",
    "Attempted or Past Due": "Intento o vencido",
    "Background Image": "Imagen de fondo",
    "Background URL": "URL de fondo",
    "Background description": "Descripci\u00f3n de fondo",
    "Basic Settings": "Ajustes b\u00e1sicos",
    "Cancel": "Cancelar",
    "Change background": "Cambiar el fondo",
    "Close": "Cerrar",
    "Closed": "Cerrado",
    "Continue": "Continuar",
    "Correct": "Corregir",
    "Correct or Past Due": "Correcto o vencido",
    "Correct! This one belongs to The Bottom Zone.": "\u00a1Correcto! \u00c9ste pertenece a La Zona Inferior.",
    "Correct! This one belongs to The Middle Zone.": "\u00a1Correcto! \u00c9ste pertenece a La Zona Media.",
    "Correct! This one belongs to The Top Zone.": "\u00a1Correcto! \u00c9ste pertenece a La Zona Top.",
    "Correctly placed in: {zone_title}": "Colocado correctamente en: {zone_title}",
    "Correctly placed {correct_count} item": [
      "Art\u00edculo {correct_count} colocado correctamente",
      "Art\u00edculos {correct_count} colocados correctamente",
      "Art\u00edculos {correct_count} colocados correctamente"
    ],
    "DEPRECATED. Keeps maximum score achieved by student as a weighted value.": "OBSOLETO. Mantiene la puntuaci\u00f3n m\u00e1xima alcanzada por el estudiante como un valor ponderado.",
    "Default": "Por defecto",
    "Defines the number of points the problem is worth.": "Define el n\u00famero de puntos que vale el problema.",
    "Defines the number of times a student can try to answer this problem. If the value is not set, infinite attempts are allowed.": "Define el n\u00famero de veces que un alumno puede intentar resolver este problema. Si no se especifica valor, se permite un n\u00famero infinito de intentos.",
    "Defines when to show the answer to the problem. A default value can be set in Advanced Settings. To revert setting a custom value, choose the 'Default' option.": "Define cu\u00e1ndo mostrar la respuesta al problema. Se puede establecer un valor predeterminado en Configuraci\u00f3n avanzada. Para revertir la configuraci\u00f3n de un valor personalizado, elija la opci\u00f3n &quot;Predeterminado&quot;.",
    "Did not place {missing_count} required item": [
      "No coloc\u00f3 el elemento requerido {missing_count}",
      "No coloc\u00f3 los elementos requeridos {missing_count}",
      "No coloc\u00f3 los elementos requeridos {missing_count}"
    ],
    "Display label names on the image": "Mostrar nombres de etiquetas en la imagen",
    "Display the heading \"Problem\" above the problem text?": "\u00bfMostrar el t\u00edtulo &quot;Problema&quot; encima del texto del problema?",
    "Display the title to the learner?": "\u00bfMostrar el t\u00edtulo al alumno?",
    "Display zone borders on the image": "Mostrar bordes de zona en la imagen",
    "Display zone borders when dragging an item": "Mostrar bordes de zona al arrastrar un elemento",
    "Drag and Drop": "Arrastrar y soltar",
    "Drag and Drop Problem": "Problema de arrastrar y soltar",
    "Drag and Drop problems consist of draggable items and dropzones. Users should select a draggable item with their keyboard and then navigate to an appropriate dropzone to drop it.": "Los problemas de arrastrar y soltar consisten en elementos que se pueden arrastrar y zonas de colocaci\u00f3n. Los usuarios deben seleccionar un elemento que se pueda arrastrar con su teclado y luego navegar a una zona de colocaci\u00f3n adecuada para soltarlo.",
    "Drag the items onto the image above.": "Arrastra los \u00edtems sobre la imagen superior.",
    "Drop Targets": "Objetivos de ca\u00edda",
    "Explanation": "Explicaci\u00f3n",
    "Explanation Text": "Texto de explicaci\u00f3n",
    "Feedback": "Comentarios",
    "Final attempt was used, highest score is {score}": "Se utiliz\u00f3 el \u00faltimo intento, la puntuaci\u00f3n m\u00e1s alta es {score}",
    "Final feedback": "Comentarios finales",
    "Finished": "Finalizado",
    "For example, 'http://example.com/background.png' or '/static/background.png'.": "Por ejemplo, &#39;http://example.com/antecedentes.png&#39; o &#39;/static/antecedentes.png&#39;.",
    "Generate image and zones": "Generar imagen y zonas.",
    "Generate image automatically": "Generar imagen autom\u00e1ticamente",
    "Go to Beginning": "Ir al principio",
    "Goes anywhere": "Va a todas partes.",
    "Goes to the bottom": "va al fondo",
    "Goes to the middle": "va al medio",
    "Goes to the top": "va a la cima",
    "Good work! You have completed this drag and drop problem.": "\u00a1Buen trabajo! Has completado este problema de arrastrar y soltar.",
    "Hints:": "Consejos:",
    "I don't belong anywhere": "no pertenezco a ning\u00fan lado",
    "Incorrect": "Incorrecto",
    "Indicates whether a learner has completed the problem at least once": "Indica si un alumno ha completado el problema al menos una vez.",
    "Information about current positions of items that a learner has dropped on the target image.": "Informaci\u00f3n sobre las posiciones actuales de los elementos que un alumno ha dejado en la imagen de destino.",
    "Information about zones, items, feedback, explanation and background image for this problem. This information is derived from the input that a course author provides via the interactive editor when configuring the problem.": "Informaci\u00f3n sobre zonas, elementos, comentarios, explicaci\u00f3n e imagen de fondo de este problema. Esta informaci\u00f3n se deriva de la entrada que proporciona el autor del curso a trav\u00e9s del editor interactivo al configurar el problema.",
    "Introductory feedback": "Comentarios introductorios",
    "Item Bank": "Banco de art\u00edculos",
    "Item background color": "Color de fondo del art\u00edculo",
    "Item definitions": "Definiciones de art\u00edculos",
    "Item text color": "Color del texto del art\u00edculo",
    "Items": "Elementos",
    "Items placed here: ": "Art\u00edculos colocados aqu\u00ed: ",
    "Keeps maximum score achieved by student as a raw value between 0 and 1.": "Mantiene la puntuaci\u00f3n m\u00e1xima alcanzada por el estudiante como un valor bruto entre 0 y 1.",
    "Keyboard Help": "Ayuda del teclado",
    "Loading drag and drop problem.": "Problema al cargar con arrastrar y soltar.",
    "Max number of attempts reached": "N\u00famero m\u00e1ximo de intentos alcanzado",
    "Maximum attempts": "Intentos m\u00e1ximos",
    "Maximum items per zone": "Art\u00edculos m\u00e1ximos por zona",
    "Maximum score available of the problem as a raw value between 0 and 1.": "Puntuaci\u00f3n m\u00e1xima disponible del problema como valor bruto entre 0 y 1.",
    "Misplaced {misplaced_count} item": [
      "Art\u00edculo {misplaced_count} fuera de lugar",
      "Art\u00edculos {misplaced_count} extraviados",
      "Art\u00edculos {misplaced_count} extraviados"
    ],
    "Misplaced {misplaced_count} item (misplaced item was returned to the item bank)": [
      "Art\u00edculo {misplaced_count} extraviado (el art\u00edculo extraviado se devolvi\u00f3 al banco de art\u00edculos)",
      "Art\u00edculos {misplaced_count} extraviados (los art\u00edculos extraviados se devolvieron al banco de art\u00edculos)",
      "Art\u00edculos {misplaced_count} extraviados (los art\u00edculos extraviados se devolvieron al banco de art\u00edculos)"
    ],
    "Mode": "Modo",
    "Navigate using TAB and SHIFT+TAB to the appropriate dropzone and press CTRL+M once more to drop it here.": "Navegue usando TAB y SHIFT+TAB a la zona de colocaci\u00f3n apropiada y presione CTRL+M una vez m\u00e1s para soltarla aqu\u00ed.",
    "Never": "Nunca",
    "No items placed here": "No hay art\u00edculos colocados aqu\u00ed.",
    "No, this item does not belong here. Try again.": "No. Este no va aqu\u00ed. Int\u00e9ntalo de nuevo.",
    "Number of attempts learner used": "N\u00famero de intentos que utiliz\u00f3 el alumno",
    "Number of columns": "N\u00famero de columnas",
    "Number of columns and rows.": "N\u00famero de columnas y filas.",
    "Number of rows": "N\u00famero de filas",
    "Of course it goes here! It goes anywhere!": "\u00a1Claro que va aqu\u00ed! \u00a1Va en todas partes!",
    "Past Due": "Fuera de plazo",
    "Placed in: {zone_title}": "Colocado en: {zone_title}",
    "Please check over your submission.": "Por favor revise su env\u00edo.",
    "Please check the values you entered.": "Por favor verifique los valores que ingres\u00f3.",
    "Press CTRL+M to select a draggable item (effectively picking it up).": "Presione CTRL+M para seleccionar un elemento que se puede arrastrar (recogi\u00e9ndolo efectivamente).",
    "Press ESC if you want to cancel the drop operation (for example, to select a different item).": "Presione ESC si desea cancelar la operaci\u00f3n de colocaci\u00f3n (por ejemplo, para seleccionar un elemento diferente).",
    "Problem": "Ejercicio",
    "Problem Weight": "Peso del problema",
    "Problem data": "Datos del problema",
    "Problem text": "Texto del problema",
    "Provide custom image": "Proporcionar imagen personalizada",
    "Reset": "Reiniciar",
    "Save": "Guardar",
    "Saving": "Guardando",
    "Show \"Problem\" heading": "Mostrar el encabezado &quot;Problema&quot;",
    "Show Answer": "Mostrar respuesta",
    "Show answer": "Mostrar la respuesta",
    "Show title": "Mostrar t\u00edtulo",
    "Size of a single zone in pixels.": "Tama\u00f1o de una sola zona en p\u00edxeles.",
    "Some of your answers were not correct.": "Algunas de tus respuestas no fueron correctas.",
    "Standard": "Est\u00e1ndar",
    "Standard mode: the problem provides immediate feedback each time a learner drops an item on a target zone. Assessment mode: the problem provides feedback only after a learner drops all available items on target zones.": "Modo est\u00e1ndar: el problema proporciona retroalimentaci\u00f3n inmediata cada vez que un alumno deja caer un elemento en una zona objetivo. Modo de evaluaci\u00f3n: el problema proporciona retroalimentaci\u00f3n solo despu\u00e9s de que un alumno coloca todos los elementos disponibles en las zonas objetivo.",
    "Submission deadline has passed.": "La fecha l\u00edmite de env\u00edo ha pasado.",
    "Submit": "Enviar",
    "Submitting": "Enviando",
    "TAB back to the list of draggable items and repeat this process until all of the draggable items have been placed on their respective dropzones.": "Vuelva con TAB a la lista de elementos que se pueden arrastrar y repita este proceso hasta que todos los elementos que se pueden arrastrar se hayan colocado en sus respectivas zonas de colocaci\u00f3n.",
    "Text color to use for draggable items (example: 'white' or '#ffffff').": "Color de texto que se utilizar\u00e1 para los elementos que se pueden arrastrar (ejemplo: &#39;blanco&#39; o &#39;#ffffff&#39;).",
    "The Bottom Zone": "La parte baja",
    "The Middle Zone": "La parte intermedia",
    "The Top Zone": "La parte alta",
    "The answer is unavailable": "La respuesta no est\u00e1 disponible",
    "The background color of draggable items in the problem (example: 'blue' or '#0000ff').": "El color de fondo de los elementos que se pueden arrastrar en el problema (ejemplo: &#39;azul&#39; o &#39;#0000ff&#39;).",
    "The description of the problem or instructions shown to the learner.": "La descripci\u00f3n del problema o las instrucciones mostradas al alumno.",
    "The title of the drag and drop problem. The title is displayed to learners.": "El t\u00edtulo del problema de arrastrar y soltar. El t\u00edtulo se muestra a los alumnos.",
    "There was an error with your form.": "Hubo un error con su formulario.",
    "This is a screen reader-friendly problem.": "Este es un problema f\u00e1cil de leer en pantalla.",
    "This setting limits the number of items that can be dropped into a single zone.": "Esta configuraci\u00f3n limita la cantidad de elementos que se pueden colocar en una sola zona.",
    "Title": "T\u00edtulo",
    "Unknown DnDv2 mode {mode} - course is misconfigured": "Modo DnDv2 desconocido {mode} : el curso est\u00e1 mal configurado",
    "Unknown Zone": "Zona Desconocida",
    "Use only TAB and SHIFT+TAB to navigate between draggable items and drop zones.": "Use solo TAB y SHIFT+TAB para navegar entre elementos que se pueden arrastrar y zonas de colocaci\u00f3n.",
    "Use this zone to associate an item with the bottom layer of the triangle.": "Use esta zona para asociar un \u00edtem con la parte inferior del tri\u00e1ngulo.",
    "Use this zone to associate an item with the middle layer of the triangle.": "Use esta zona para asociar un \u00edtem con la parte intermedia del tri\u00e1ngulo.",
    "Use this zone to associate an item with the top layer of the triangle.": "Use esta zona para asociar un \u00edtem con la parte alta del tri\u00e1ngulo.",
    "You can complete this problem using only your keyboard by following the guidance below:": "Puede completar este problema usando solo su teclado siguiendo las instrucciones a continuaci\u00f3n:",
    "You cannot add any more items to this zone.": "No puedes agregar m\u00e1s elementos a esta zona.",
    "You have used {used} of {total} attempts.": "Ha utilizado {used} de {total} intentos.",
    "You silly, there are no zones for this one.": "Cabezahueca. No hay zonas para este.",
    "Your highest score is {score}": "Tu puntuaci\u00f3n m\u00e1s alta es {score}",
    "Zone Layout": "Dise\u00f1o de zona",
    "Zone Size": "Tama\u00f1o de zona",
    "Zone borders": "Fronteras de la zona",
    "Zone definitions": "Definiciones de zona",
    "Zone height": "Altura de la zona",
    "Zone labels": "Etiquetas de zona",
    "Zone width": "Ancho de zona",
    "Zone {num}": [
      "Zona {num}",
      "Zona {num}",
      "Zona {num}"
    ],
    "Zones": "Zonas",
    "do_attempt handler should only be called for assessment mode": "El controlador do_attempt solo debe llamarse para el modo de evaluaci\u00f3n.",
    "droppable": "desplegable",
    "show_answer handler should only be called for assessment mode": "El controlador show_answer solo debe llamarse para el modo de evaluaci\u00f3n.",
    "{earned}/{possible} point (graded)": [
      "{earned} / {possible} punto (calificado)",
      "{earned} / {possible} puntos (calificados)",
      "{earned} / {possible} puntos (calificados)"
    ],
    "{earned}/{possible} point (ungraded)": [
      "{earned} / {possible} punto (sin calificar)",
      "{earned} / {possible} puntos (sin calificar)",
      "{earned} / {possible} puntos (sin calificar)"
    ],
    "{possible} point possible (graded)": [
      "{possible} punto posible (calificado)",
      "{possible} puntos posibles (calificados)",
      "{possible} puntos posibles (calificados)"
    ],
    "{possible} point possible (ungraded)": [
      "{possible} punto posible (sin calificar)",
      "{possible} puntos posibles (sin calificar)",
      "{possible} puntos posibles (sin calificar)"
    ]
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
                DragAndDropI18N.init();
                global.DragAndDropI18N = DragAndDropI18N;
            }(this));
        