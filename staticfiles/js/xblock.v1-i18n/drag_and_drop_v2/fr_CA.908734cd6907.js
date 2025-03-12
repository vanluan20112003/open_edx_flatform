
            (function(global){
                var DragAndDropI18N = {
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
    "\n                            Please provide a description of the image for non-visual users.\n                            The description should provide sufficient information to allow anyone\n                            to solve the problem even without seeing the image.\n                        ": "\nSVP veuillez fournir une description de l'image pour les utilisateurs non visuels. La description doit fournir suffisamment d'informations pour permettre \u00e0 n'importe qui de r\u00e9soudre le probl\u00e8me, m\u00eame sans voir l'image.",
    "(inherited from Advanced Settings)": "(h\u00e9rit\u00e9 des Param\u00e8tres Avanc\u00e9s)",
    ", draggable": ", glissable",
    ", draggable, grabbed": ", glissable, saisi",
    ", dropzone": ", zone cible",
    "Actions": "Actions",
    "Add a zone": "Ajouter une zone",
    "Add an item": "Ajouter un \u00e9l\u00e9ment",
    "After All Attempts": "Apr\u00e8s toutes les tentatives",
    "After All Attempts or Correct": "Apr\u00e8s toutes les tentatives ou correct",
    "Always": "Toujours",
    "An error occurred. Unable to load drag and drop problem.": "Une erreur est survenue. Impossible de charger le probl\u00e8me de glisser-d\u00e9poser.",
    "An isosceles triangle with three layers of similar height. It is shown upright, so the widest layer is located at the bottom, and the narrowest layer is located at the top.": "Un triangle isoc\u00e8le avec trois segments de hauteur similaire. Il est repr\u00e9sent\u00e9 en position verticale, de sorte que le segment le plus large se trouve en bas et que le segment le plus \u00e9troit se trouve en haut.",
    "Answered": "R\u00e9pondu",
    "Assessment": "\u00c9valuation",
    "Attempted": "Tent\u00e9",
    "Attempted or Past Due": "Tent\u00e9 ou en retard",
    "Background Image": "Image de fond",
    "Background URL": "URL de fond",
    "Background description": "Description du fond",
    "Basic Settings": "Param\u00e8tres de base",
    "Cancel": "Annuler",
    "Change background": "Changer le fond",
    "Close": "Fermer",
    "Closed": "Ferm\u00e9",
    "Continue": "Continuer",
    "Correct": "Correct",
    "Correct or Past Due": "Correct ou en retard",
    "Correct! This one belongs to The Bottom Zone.": "Correct! Celui-ci appartient \u00e0 la zone inf\u00e9rieure.",
    "Correct! This one belongs to The Middle Zone.": "Correct! Celui-ci appartient \u00e0 la zone du milieu.",
    "Correct! This one belongs to The Top Zone.": "Correct! Celui-ci appartient \u00e0 la zone sup\u00e9rieur.",
    "Correctly placed in: {zone_title}": "Correctement plac\u00e9 dans: {zone_title}",
    "Correctly placed {correct_count} item": [
      "{correct_count} \u00e9l\u00e9ment a \u00e9t\u00e9 correctement plac\u00e9",
      "{correct_count} \u00e9l\u00e9ments ont \u00e9t\u00e9 correctement plac\u00e9s",
      "{correct_count} \u00e9l\u00e9ments ont \u00e9t\u00e9 correctement plac\u00e9s"
    ],
    "DEPRECATED. Keeps maximum score achieved by student as a weighted value.": "D\u00c9CONSEILL\u00c9. Conserve le score maximum atteint par l'\u00e9tudiant en tant que valeur pond\u00e9r\u00e9e.",
    "Default": "D\u00e9faut",
    "Defines the number of points the problem is worth.": "D\u00e9finit le nombre de points que le probl\u00e8me vaut.",
    "Defines the number of times a student can try to answer this problem. If the value is not set, infinite attempts are allowed.": "D\u00e9finit le nombre de fois o\u00f9 un \u00e9tudiant peut tenter de r\u00e9pondre \u00e0 ce probl\u00e8me. Si cette valeur n'est pas d\u00e9finie, un nombre infini de tentatives est permis.",
    "Defines when to show the answer to the problem. A default value can be set in Advanced Settings. To revert setting a custom value, choose the 'Default' option.": "D\u00e9finit quand afficher la r\u00e9ponse au probl\u00e8me. Une valeur de d\u00e9faut peut \u00eatre d\u00e9finie dans les param\u00e8tres avanc\u00e9s. Pour annuler la d\u00e9finition d'une valeur personnalis\u00e9e, choisissez l'option \"Par d\u00e9faut\".",
    "Did not place {missing_count} required item": [
      "Vous n'avez pas plac\u00e9 {missing_count} \u00e9l\u00e9ment requis",
      "Vous n'avez pas plac\u00e9 {missing_count} \u00e9l\u00e9ments requis",
      "Vous n'avez pas plac\u00e9 {missing_count} \u00e9l\u00e9ments requis"
    ],
    "Display label names on the image": "Afficher les noms des \u00e9tiquettes sur l'image",
    "Display the heading \"Problem\" above the problem text?": "Afficher l'en-t\u00eate \u00ab Probl\u00e8me \u00bb au-dessus du texte du probl\u00e8me?",
    "Display the title to the learner?": "Afficher le titre \u00e0 l'apprenant?",
    "Display zone borders on the image": "Afficher les bordures des zones sur l'image",
    "Display zone borders when dragging an item": "Afficher les bordures de zone lors du d\u00e9placement d'un \u00e9l\u00e9ment",
    "Drag and Drop": "Glisser D\u00e9poser",
    "Drag and Drop Problem": "Exercice de Glisser D\u00e9poser",
    "Drag and Drop problems consist of draggable items and dropzones. Users should select a draggable item with their keyboard and then navigate to an appropriate dropzone to drop it.": "Les probl\u00e8mes de glisser-d\u00e9poser consistent en des \u00e9l\u00e9ments \u00e0 glisser-d\u00e9poser et des zones pour d\u00e9poser ces \u00e9l\u00e9ments. Les utilisateurs doivent s\u00e9lectionner un \u00e9l\u00e9ment \u00e0 glisser-d\u00e9poser avec leur clavier, puis naviguer \u00e0 un endroit appropri\u00e9 pour le d\u00e9poser.",
    "Drag the items onto the image above.": "Faites glisser les \u00e9l\u00e9ments sur l'image ci-dessus.",
    "Drop Targets": "Cibles",
    "Explanation": "Explication",
    "Explanation Text": "Texte d'explication",
    "Feedback": "R\u00e9troaction",
    "Final attempt was used, highest score is {score}": "La derni\u00e8re tentative a \u00e9t\u00e9 utilis\u00e9e, le score le plus \u00e9lev\u00e9 est {score}",
    "Final feedback": "R\u00e9troaction finale",
    "Finished": "Termin\u00e9",
    "For example, 'http://example.com/background.png' or '/static/background.png'.": "Par exemple, 'http://example.com/background.png' ou '/static/background.png'.",
    "Generate image and zones": "G\u00e9n\u00e9rer l'image et les zones",
    "Generate image automatically": "G\u00e9n\u00e9rer automatiquement une image",
    "Go to Beginning": "Aller au d\u00e9but",
    "Goes anywhere": "Va n'importe o\u00f9",
    "Goes to the bottom": "Va en bas",
    "Goes to the middle": "Va au milieu",
    "Goes to the top": "Va en haut",
    "Good work! You have completed this drag and drop problem.": "Bon travail! Vous avez compl\u00e9t\u00e9 ce probl\u00e8me de glisser-d\u00e9poser.",
    "Hints:": "Indices : ",
    "I don't belong anywhere": "Je n'appartiens \u00e0 aucun endroit",
    "Incorrect": "Incorrect",
    "Indicates whether a learner has completed the problem at least once": "Indique si un apprenant a compl\u00e9t\u00e9 le probl\u00e8me au moins une fois",
    "Information about current positions of items that a learner has dropped on the target image.": "Informations concernant les positions actuelles des \u00e9l\u00e9ments qu'un apprenant a d\u00e9pos\u00e9s sur l'image cible.",
    "Information about zones, items, feedback, explanation and background image for this problem. This information is derived from the input that a course author provides via the interactive editor when configuring the problem.": "Informations sur les zones, les \u00e9l\u00e9ments, les commentaires, les explications et le fonds d'\u00e9cran pour ce probl\u00e8me. Ces informations sont d\u00e9riv\u00e9es des donn\u00e9es fournies par l'auteur du cours via l'\u00e9diteur interactif lors de la configuration du probl\u00e8me.",
    "Introductory feedback": "R\u00e9troaction pr\u00e9liminaire",
    "Item Bank": "Banque d'\u00e9l\u00e9ments",
    "Item background color": "Couleur d'arri\u00e8re-plan de l'\u00e9l\u00e9ment",
    "Item definitions": "D\u00e9finitions des \u00e9l\u00e9ments",
    "Item text color": "Couleur du texte de l'\u00e9l\u00e9ment",
    "Items": "\u00c9l\u00e9ments",
    "Items placed here: ": "\u00c9l\u00e9ments plac\u00e9s ici:",
    "Keeps maximum score achieved by student as a raw value between 0 and 1.": "Conserve le score maximum atteint par l'\u00e9tudiant en tant que valeur brute entre 0 et 1.",
    "Keyboard Help": "Aide clavier",
    "Loading drag and drop problem.": "Chargement du probl\u00e8me de glisser-d\u00e9poser.",
    "Max number of attempts reached": "Nombre maximal de tentatives atteint",
    "Maximum attempts": "Nombre maximal de tentatives",
    "Maximum items per zone": "Nombre maximum d'\u00e9l\u00e9ments par zone",
    "Maximum score available of the problem as a raw value between 0 and 1.": "Note maximale disponible du probl\u00e8me sous forme de valeur brute entre 0 et 1.",
    "Misplaced {misplaced_count} item": [
      "{misplaced_count} \u00e9l\u00e9ment n'a pas \u00e9t\u00e9 correctement plac\u00e9",
      "{misplaced_count} \u00e9l\u00e9ments n'ont pas \u00e9t\u00e9 correctement plac\u00e9s",
      "{misplaced_count} \u00e9l\u00e9ments n'ont pas \u00e9t\u00e9 correctement plac\u00e9s"
    ],
    "Misplaced {misplaced_count} item (misplaced item was returned to the item bank)": [
      "{misplaced_count} \u00e9l\u00e9ment n'a pas \u00e9t\u00e9 correctement plac\u00e9. L'\u00e9l\u00e9ment mal plac\u00e9 a \u00e9t\u00e9 retourn\u00e9 \u00e0 la banque d'\u00e9l\u00e9ments.",
      "{misplaced_count} \u00e9l\u00e9ments n'ont pas \u00e9t\u00e9 correctement plac\u00e9s. Les \u00e9l\u00e9ments mal plac\u00e9s ont \u00e9t\u00e9 retourn\u00e9s \u00e0 la banque d'\u00e9l\u00e9ments.",
      "{misplaced_count} \u00e9l\u00e9ments n'ont pas \u00e9t\u00e9 correctement plac\u00e9s. Les \u00e9l\u00e9ments mal plac\u00e9s ont \u00e9t\u00e9 retourn\u00e9s \u00e0 la banque d'\u00e9l\u00e9ments."
    ],
    "Mode": "Mode",
    "Navigate using TAB and SHIFT+TAB to the appropriate dropzone and press CTRL+M once more to drop it here.": "Naviguez jusqu'\u00e0 la zone de d\u00e9p\u00f4t en utilisant TAB et SHIFT+TAB et appuyez sur CTRL+M une fois de plus pour d\u00e9poser l'\u00e9l\u00e9ment.",
    "Never": "Jamais",
    "No items placed here": "Aucun \u00e9l\u00e9ment plac\u00e9 ici",
    "No, this item does not belong here. Try again.": "Non, cet \u00e9l\u00e9ment ne se place pas ici. R\u00e9essayez.",
    "Number of attempts learner used": "Nombre de tentatives utilis\u00e9es par l'apprenant",
    "Number of columns": "Le nombre de colonnes",
    "Number of columns and rows.": "Le nombre de colonnes et de rang\u00e9es.",
    "Number of rows": "Le nombre de rang\u00e9es",
    "Of course it goes here! It goes anywhere!": "Bien s\u00fbr que \u00e7a va ici! \u00c7a va n'importe o\u00f9!",
    "Past Due": "En retard",
    "Placed in: {zone_title}": "Plac\u00e9 dans: {zone_title}",
    "Please check over your submission.": "Veuillez SVP v\u00e9rifier votre soumission.",
    "Please check the values you entered.": "Veuillez v\u00e9rifier les valeurs que vous avez saisies.",
    "Press CTRL+M to select a draggable item (effectively picking it up).": "Appuyez sur CTRL+M pour s\u00e9lectionner un \u00e9l\u00e9ment \u00e0 glisser-d\u00e9poser (pour le prendre correctement)",
    "Press ESC if you want to cancel the drop operation (for example, to select a different item).": "Appuyez sur \u00c9CHAP pour annuler l'op\u00e9ration (par exemple, pour s\u00e9lectionner un autre \u00e9l\u00e9ment).",
    "Problem": "Exercice",
    "Problem Weight": "Poids du probl\u00e8me",
    "Problem data": "Donn\u00e9es du probl\u00e8me",
    "Problem text": "Texte du probl\u00e8me",
    "Provide custom image": "Fournissez une image personnalis\u00e9e",
    "Reset": "R\u00e9initialiser",
    "Save": "Enregistrer",
    "Saving": "Sauvegarde en cours",
    "Show \"Problem\" heading": "Montrer l'en-t\u00eate \u00ab Probl\u00e8me \u00bb",
    "Show Answer": "Afficher la r\u00e9ponse",
    "Show answer": "Afficher la r\u00e9ponse",
    "Show title": "Afficher le titre",
    "Size of a single zone in pixels.": "Taille d'une seule zone en pixels.",
    "Some of your answers were not correct.": "Certaines de vos r\u00e9ponses \u00e9taient incorrectes.",
    "Standard": "Standard",
    "Standard mode: the problem provides immediate feedback each time a learner drops an item on a target zone. Assessment mode: the problem provides feedback only after a learner drops all available items on target zones.": "Mode standard: ce probl\u00e8me fournit une r\u00e9troaction imm\u00e9diate \u00e0 chaque fois qu'un apprenant d\u00e9pose un \u00e9l\u00e9ment sur une zone cible. Mode d'\u00e9valuation: ce probl\u00e8me fournit une r\u00e9troaction seulement apr\u00e8s qu'un apprenant ait d\u00e9pos\u00e9 tous les \u00e9l\u00e9ments disponibles sur les zones cibles.",
    "Submission deadline has passed.": "La date limite de soumission est pass\u00e9e.",
    "Submit": "Soumettre",
    "Submitting": "Soumission",
    "TAB back to the list of draggable items and repeat this process until all of the draggable items have been placed on their respective dropzones.": "Appuyez sur TAB pour revenir \u00e0 la liste des \u00e9l\u00e9ments \u00e0 glisser-d\u00e9poser et r\u00e9p\u00e9tez ce processus jusqu'\u00e0 ce que tous les \u00e9l\u00e9ments aient \u00e9t\u00e9 plac\u00e9s dans leurs zones respectives.",
    "Text color to use for draggable items (example: 'white' or '#ffffff').": "Couleur du texte \u00e0 utiliser pour les \u00e9l\u00e9ments \u00e0 glisser-d\u00e9poser (exemple: 'white' ou '#ffffff').",
    "The Bottom Zone": "La zone inf\u00e9rieure",
    "The Middle Zone": "La zone interm\u00e9diaire",
    "The Top Zone": "La zone sup\u00e9rieure",
    "The answer is unavailable": "La r\u00e9ponse est indisponible",
    "The background color of draggable items in the problem (example: 'blue' or '#0000ff').": "Couleur d'arri\u00e8re-plan des \u00e9l\u00e9ments \u00e0 glisser-d\u00e9poser dans le probl\u00e8me (exemple: 'blue' ou '#0000ff').",
    "The description of the problem or instructions shown to the learner.": "La description du probl\u00e8me ou les instructions montr\u00e9es \u00e0 l'apprenant.",
    "The title of the drag and drop problem. The title is displayed to learners.": "Le titre du probl\u00e8me de glisser-d\u00e9poser. Le titre est affich\u00e9 aux apprenants.",
    "There was an error with your form.": "Une erreur s'est produite avec votre formulaire.",
    "This is a screen reader-friendly problem.": "Il s'agit d'un probl\u00e8me facile \u00e0 lire \u00e0 l'\u00e9cran.",
    "This setting limits the number of items that can be dropped into a single zone.": "Ce param\u00e8tre limite le nombre d'\u00e9l\u00e9ments pouvant \u00eatre d\u00e9pos\u00e9s dans une seule zone.",
    "Title": "Titre",
    "Unknown DnDv2 mode {mode} - course is misconfigured": "Mode {mode} DnDv2 inconnu - le cours est mal configur\u00e9",
    "Unknown Zone": "Zone inconnue",
    "Use only TAB and SHIFT+TAB to navigate between draggable items and drop zones.": "Utilisez seulement TAB et SHIFT+TAB pour naviguer entre les \u00e9l\u00e9ments \u00e0 glisser-d\u00e9poser et les endroits pour les d\u00e9poser.",
    "Use this zone to associate an item with the bottom layer of the triangle.": "Utilisez cette zone pour associer un \u00e9l\u00e9ment avec le segment inf\u00e9rieur du triangle.",
    "Use this zone to associate an item with the middle layer of the triangle.": "Utilisez cette zone pour associer un \u00e9l\u00e9ment avec le segment interm\u00e9diaire du triangle.",
    "Use this zone to associate an item with the top layer of the triangle.": "Utilisez cette zone pour associer un \u00e9l\u00e9ment avec le segment sup\u00e9rieur du triangle.",
    "You can complete this problem using only your keyboard by following the guidance below:": "Vous pouvez compl\u00e9ter ce probl\u00e8me en utilisant uniquement votre clavier en suivant les conseils ci-dessous:",
    "You cannot add any more items to this zone.": "Vous ne pouvez plus ajouter d\u2019\u00e9l\u00e9ments \u00e0 cette zone.",
    "You have used {used} of {total} attempts.": "Vous avez utilis\u00e9 {used} essais sur {total}.",
    "You silly, there are no zones for this one.": "Vous \u00eates b\u00eate, il n'y a aucune zone pour celui-ci.",
    "Your highest score is {score}": "Votre score le plus \u00e9lev\u00e9 est {score}",
    "Zone Layout": "Disposition des zones",
    "Zone Size": "Taille de la zone",
    "Zone borders": "Bordures des zones",
    "Zone definitions": "D\u00e9finitions des zones",
    "Zone height": "Hauteur de la zone",
    "Zone labels": "\u00c9tiquettes des zones",
    "Zone width": "Largeur de la zone",
    "Zone {num}": [
      "Zone {num}",
      "Zone {num}",
      "Zone {num}"
    ],
    "Zones": "Zones",
    "do_attempt handler should only be called for assessment mode": "do_attempt ne doit \u00eatre utilis\u00e9 que pour le mode d'\u00e9valuation",
    "droppable": "d\u00e9posable",
    "show_answer handler should only be called for assessment mode": "show_answer ne doit \u00eatre utilis\u00e9 que pour le mode d'\u00e9valuation",
    "{earned}/{possible} point (graded)": [
      "{earned}/{possible} point (not\u00e9)",
      "{earned}/{possible} points (not\u00e9)",
      "{earned}/{possible} points (not\u00e9)"
    ],
    "{earned}/{possible} point (ungraded)": [
      "{earned}/{possible} point (pas not\u00e9)",
      "{earned}/{possible} points (pas not\u00e9)",
      "{earned}/{possible} points (pas not\u00e9)"
    ],
    "{possible} point possible (graded)": [
      "{possible} point possible (not\u00e9)",
      "{possible} points possibles (not\u00e9)",
      "{possible} points possibles (not\u00e9)"
    ],
    "{possible} point possible (ungraded)": [
      "{possible} point possible (pas not\u00e9)",
      "{possible} points possibles (pas not\u00e9)",
      "{possible} points possibles (pas not\u00e9)"
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
                DragAndDropI18N.init();
                global.DragAndDropI18N = DragAndDropI18N;
            }(this));
        