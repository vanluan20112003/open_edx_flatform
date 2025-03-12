
            (function(global){
                var DragAndDropI18N = {
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
    "\n                            Please provide a description of the image for non-visual users.\n                            The description should provide sufficient information to allow anyone\n                            to solve the problem even without seeing the image.\n                        ": "\nAngiv venligst en beskrivelse af billedet til ikke-visuelle brugere.\n Beskrivelsen skal give tilstr\u00e6kkelig information til at tillade nogen\n at l\u00f8se problemet selv uden at se billedet.\n                        ",
    "(inherited from Advanced Settings)": "(arvet fra avancerede indstillinger)",
    ", draggable": ", tr\u00e6kbar",
    ", draggable, grabbed": ", tr\u00e6kbar, greb",
    ", dropzone": ", dropzone",
    "Actions": "Handlinger",
    "Add a zone": "Tilf\u00f8j en zone",
    "Add an item": "Tilf\u00f8j et element",
    "After All Attempts": "Efter alle Fors\u00f8g",
    "After All Attempts or Correct": "Efter alle Fors\u00f8g eller Korrekt",
    "Always": "Altid",
    "An error occurred. Unable to load drag and drop problem.": "En fejl opstod. Kan ikke indl\u00e6se tr\u00e6k og slip-problem.",
    "An isosceles triangle with three layers of similar height. It is shown upright, so the widest layer is located at the bottom, and the narrowest layer is located at the top.": "En ligebenet trekant med tre lag af samme h\u00f8jde. Det er vist opretst\u00e5ende, s\u00e5 det bredeste lag er placeret i bunden, og det smalleste lag er placeret \u00f8verst.",
    "Answered": "Besvaret",
    "Assessment": "Vurdering",
    "Attempted": "Fors\u00f8gt",
    "Attempted or Past Due": "Fors\u00f8gt eller forfalden",
    "Background Image": "Baggrundsbillede",
    "Background URL": "Baggrunds-URL",
    "Background description": "Baggrundsbeskrivelse",
    "Basic Settings": "Grundl\u00e6ggende indstillinger",
    "Cancel": "Annuller",
    "Change background": "Skift baggrund",
    "Close": "T\u00e6t",
    "Closed": "Lukket",
    "Continue": "Forts\u00e6t",
    "Correct": "Korrekt",
    "Correct or Past Due": "Rettidig eller senere end forfaldsdato",
    "Correct! This one belongs to The Bottom Zone.": "Korrekt! Denne tilh\u00f8rer The Bottom Zone.",
    "Correct! This one belongs to The Middle Zone.": "Korrekt! Denne tilh\u00f8rer The Middle Zone.",
    "Correct! This one belongs to The Top Zone.": "Korrekt! Denne tilh\u00f8rer The Top Zone.",
    "Correctly placed in: {zone_title}": "Korrekt placeret i: {zone_title}",
    "Correctly placed {correct_count} item": [
      "Korrekt placeret {correct_count} element",
      "Korrekt placeret {correct_count} elementer"
    ],
    "DEPRECATED. Keeps maximum score achieved by student as a weighted value.": "UDSKREVET. Holder maksimal score opn\u00e5et af eleven som en v\u00e6gtet v\u00e6rdi.",
    "Default": "Default",
    "Defines the number of points the problem is worth.": "Definerer antallet af point, problemet er v\u00e6rd.",
    "Defines the number of times a student can try to answer this problem. If the value is not set, infinite attempts are allowed.": "Angiv antal gange, en kursist kan fors\u00f8ge at besvare denne opgave. Hvis v\u00e6rdien ikke er angivet, er uendelige antal fors\u00f8g tilladt.",
    "Defines when to show the answer to the problem. A default value can be set in Advanced Settings. To revert setting a custom value, choose the 'Default' option.": "Definerer, hvorn\u00e5r svaret p\u00e5 problemet skal vises. En standardv\u00e6rdi kan indstilles i Avancerede indstillinger. V\u00e6lg indstillingen &#39;Standard&#39; for at vende tilbage til indstilling af en brugerdefineret v\u00e6rdi.",
    "Did not place {missing_count} required item": [
      "Placerede ikke {missing_count} p\u00e5kr\u00e6vet vare",
      "Placerede ikke {missing_count} n\u00f8dvendige elementer"
    ],
    "Display label names on the image": "Vis etiketnavne p\u00e5 billedet",
    "Display the heading \"Problem\" above the problem text?": "Vise overskriften &quot;Problem&quot; over problemteksten?",
    "Display the title to the learner?": "Vise titlen til eleven?",
    "Display zone borders on the image": "Vis zonekanter p\u00e5 billedet",
    "Display zone borders when dragging an item": "Vis zonerammer, n\u00e5r du tr\u00e6kker et element",
    "Drag and Drop": "Tr\u00e6k og slip",
    "Drag and Drop Problem": "Tr\u00e6k og slip-problem",
    "Drag and Drop problems consist of draggable items and dropzones. Users should select a draggable item with their keyboard and then navigate to an appropriate dropzone to drop it.": "Tr\u00e6k og slip-problemer best\u00e5r af elementer, der kan tr\u00e6kkes, og dropzoner. Brugere skal v\u00e6lge et element, der kan tr\u00e6kkes, med deres tastatur og derefter navigere til en passende dropzone for at slippe det.",
    "Drag the items onto the image above.": "Tr\u00e6k elementerne til billedet ovenfor.",
    "Drop Targets": "Drop m\u00e5l",
    "Explanation": "Forklaring",
    "Explanation Text": "Forklaringstekst",
    "Feedback": "Feedback",
    "Final attempt was used, highest score is {score}": "Sidste fors\u00f8g blev brugt, h\u00f8jeste score er {score}",
    "Final feedback": "Endelig feedback",
    "Finished": "Afsluttet",
    "For example, 'http://example.com/background.png' or '/static/background.png'.": "For eksempel &#39;http://example.com/background.png&#39; eller &#39;/static/background.png&#39;.",
    "Generate image and zones": "Generer billede og zoner",
    "Generate image automatically": "Generer billede automatisk",
    "Go to Beginning": "G\u00e5 til Begyndelse",
    "Goes anywhere": "G\u00e5r overalt",
    "Goes to the bottom": "G\u00e5r til bunds",
    "Goes to the middle": "G\u00e5r til midten",
    "Goes to the top": "G\u00e5r til toppen",
    "Good work! You have completed this drag and drop problem.": "Godt arbejde! Du har fuldf\u00f8rt dette tr\u00e6k og slip-problem.",
    "Hints:": "Tips:",
    "I don't belong anywhere": "Jeg h\u00f8rer ingen steder til",
    "Incorrect": "Ukorrekt",
    "Indicates whether a learner has completed the problem at least once": "Angiver, om en elev har fuldf\u00f8rt opgaven mindst \u00e9n gang",
    "Information about current positions of items that a learner has dropped on the target image.": "Oplysninger om aktuelle positioner af emner, som en elev har tabt p\u00e5 m\u00e5lbilledet.",
    "Information about zones, items, feedback, explanation and background image for this problem. This information is derived from the input that a course author provides via the interactive editor when configuring the problem.": "Oplysninger om zoner, emner, feedback, forklaring og baggrundsbillede for dette problem. Denne information er afledt af input, som en kursusforfatter giver via den interaktive editor, n\u00e5r problemet konfigureres.",
    "Introductory feedback": "Indledende feedback",
    "Item Bank": "Varebank",
    "Item background color": "Genstands baggrundsfarve",
    "Item definitions": "Varedefinitioner",
    "Item text color": "Varens tekstfarve",
    "Items": "genstande",
    "Items placed here: ": "Varer placeret her: ",
    "Keeps maximum score achieved by student as a raw value between 0 and 1.": "Holder den maksimale score opn\u00e5et af eleven som en r\u00e5v\u00e6rdi mellem 0 og 1.",
    "Keyboard Help": "Tastaturhj\u00e6lp",
    "Loading drag and drop problem.": "Indl\u00e6ser tr\u00e6k og slip-problem.",
    "Max number of attempts reached": "Det maksimale antal fors\u00f8g er n\u00e5et",
    "Maximum attempts": "Maksimalt antal fors\u00f8g",
    "Maximum items per zone": "Maksimalt antal varer pr. zone",
    "Maximum score available of the problem as a raw value between 0 and 1.": "Maksimal score tilg\u00e6ngelig for problemet som en r\u00e5v\u00e6rdi mellem 0 og 1.",
    "Misplaced {misplaced_count} item": [
      "Forlagt {misplaced_count} vare",
      "Forlagte {misplaced_count} genstande"
    ],
    "Misplaced {misplaced_count} item (misplaced item was returned to the item bank)": [
      "Forlagt {misplaced_count} vare (forlagt vare blev returneret til varebanken)",
      "Forlagte {misplaced_count} varer (forlagte varer blev returneret til varebanken)"
    ],
    "Mode": "Mode",
    "Navigate using TAB and SHIFT+TAB to the appropriate dropzone and press CTRL+M once more to drop it here.": "Naviger ved hj\u00e6lp af TAB og SHIFT+TAB til den relevante dropzone, og tryk p\u00e5 CTRL+M endnu en gang for at slippe den her.",
    "Never": "Aldrig",
    "No items placed here": "Ingen varer placeret her",
    "No, this item does not belong here. Try again.": "Nej, denne vare h\u00f8rer ikke hjemme her. Pr\u00f8v igen.",
    "Number of attempts learner used": "Antal fors\u00f8g elev brugt",
    "Number of columns": "Antal kolonner",
    "Number of columns and rows.": "Antal kolonner og r\u00e6kker.",
    "Number of rows": "Antal r\u00e6kker",
    "Of course it goes here! It goes anywhere!": "Selvf\u00f8lgelig g\u00e5r den her! Det g\u00e5r overalt!",
    "Past Due": "Forfaldsdato overskredet",
    "Placed in: {zone_title}": "Placeret i: {zone_title}",
    "Please check over your submission.": "Tjek venligst din indsendelse.",
    "Please check the values you entered.": "Tjek venligst de v\u00e6rdier, du har indtastet.",
    "Press CTRL+M to select a draggable item (effectively picking it up).": "Tryk p\u00e5 CTRL+M for at v\u00e6lge et element, der kan tr\u00e6kkes (effektivt at samle det op).",
    "Press ESC if you want to cancel the drop operation (for example, to select a different item).": "Tryk p\u00e5 ESC, hvis du vil annullere drop-handlingen (for eksempel for at v\u00e6lge et andet punkt).",
    "Problem": "Opgave",
    "Problem Weight": "Opgave v\u00e6gtning",
    "Problem data": "Problemdata",
    "Problem text": "Problemtekst",
    "Provide custom image": "Giv brugerdefineret billede",
    "Reset": "Nulstil",
    "Save": "Gem",
    "Saving": "Gemmer",
    "Show \"Problem\" heading": "Vis overskriften &quot;Problem&quot;.",
    "Show Answer": "Vis Svar",
    "Show answer": "Vis svar",
    "Show title": "Vis titel",
    "Size of a single zone in pixels.": "St\u00f8rrelsen af en enkelt zone i pixels.",
    "Some of your answers were not correct.": "Nogle af dine svar var ikke rigtige.",
    "Standard": "Standard",
    "Standard mode: the problem provides immediate feedback each time a learner drops an item on a target zone. Assessment mode: the problem provides feedback only after a learner drops all available items on target zones.": "Standardtilstand: problemet giver \u00f8jeblikkelig feedback, hver gang en elev taber et emne p\u00e5 en m\u00e5lzone. Vurderingstilstand: problemet giver kun feedback, efter at en elev har droppet alle tilg\u00e6ngelige emner p\u00e5 m\u00e5lzoner.",
    "Submission deadline has passed.": "Indleveringsfristen er udl\u00f8bet.",
    "Submit": "Indsend",
    "Submitting": "Indsender",
    "TAB back to the list of draggable items and repeat this process until all of the draggable items have been placed on their respective dropzones.": "TAB tilbage til listen over elementer, der kan tr\u00e6kkes, og gentag denne proces, indtil alle elementer, der kan tr\u00e6kkes, er blevet placeret p\u00e5 deres respektive dropzoner.",
    "Text color to use for draggable items (example: 'white' or '#ffffff').": "Tekstfarve til brug for elementer, der kan tr\u00e6kkes (eksempel: &#39;hvid&#39; eller &#39;#ffffff&#39;).",
    "The Bottom Zone": "Den nederste zone",
    "The Middle Zone": "Mellemzonen",
    "The Top Zone": "Den \u00f8verste zone",
    "The answer is unavailable": "Svaret er ikke tilg\u00e6ngeligt",
    "The background color of draggable items in the problem (example: 'blue' or '#0000ff').": "Baggrundsfarven p\u00e5 elementer, der kan tr\u00e6kkes i problemet (eksempel: &#39;bl\u00e5&#39; eller &#39;#0000ff&#39;).",
    "The description of the problem or instructions shown to the learner.": "Beskrivelsen af problemet eller instruktionerne vist til eleven.",
    "The title of the drag and drop problem. The title is displayed to learners.": "Titlen p\u00e5 tr\u00e6k og slip-problemet. Titlen vises for eleverne.",
    "There was an error with your form.": "Der opstod en fejl med din formular.",
    "This is a screen reader-friendly problem.": "Dette er et sk\u00e6rml\u00e6servenligt problem.",
    "This setting limits the number of items that can be dropped into a single zone.": "Denne indstilling begr\u00e6nser antallet af elementer, der kan slippes i en enkelt zone.",
    "Title": "Titel",
    "Unknown DnDv2 mode {mode} - course is misconfigured": "Ukendt DnDv2-tilstand {mode} - kurset er forkert konfigureret",
    "Unknown Zone": "Ukendt zone",
    "Use only TAB and SHIFT+TAB to navigate between draggable items and drop zones.": "Brug kun TAB og SHIFT+TAB til at navigere mellem elementer, der kan tr\u00e6kkes, og slipzoner.",
    "Use this zone to associate an item with the bottom layer of the triangle.": "Brug denne zone til at knytte et element til trekantens nederste lag.",
    "Use this zone to associate an item with the middle layer of the triangle.": "Brug denne zone til at knytte et element til trekantens midterste lag.",
    "Use this zone to associate an item with the top layer of the triangle.": "Brug denne zone til at knytte et element til det \u00f8verste lag af trekanten.",
    "You can complete this problem using only your keyboard by following the guidance below:": "Du kan l\u00f8se dette problem ved kun at bruge dit tastatur ved at f\u00f8lge vejledningen nedenfor:",
    "You cannot add any more items to this zone.": "Du kan ikke tilf\u00f8je flere elementer til denne zone.",
    "You have used {used} of {total} attempts.": "Du har brugt {used} af {total} fors\u00f8g.",
    "You silly, there are no zones for this one.": "Din fjolle, der er ingen zoner til denne.",
    "Your highest score is {score}": "Din h\u00f8jeste score er {score}",
    "Zone Layout": "Zone layout",
    "Zone Size": "Zonest\u00f8rrelse",
    "Zone borders": "Zonegr\u00e6nser",
    "Zone definitions": "Zone definitioner",
    "Zone height": "Zoneh\u00f8jde",
    "Zone labels": "Zone etiketter",
    "Zone width": "Zone bredde",
    "Zone {num}": [
      "Zone {num}",
      "Zone {num}"
    ],
    "Zones": "Zoner",
    "do_attempt handler should only be called for assessment mode": "do_attempt handler b\u00f8r kun kaldes til vurderingstilstand",
    "droppable": "faldbar",
    "show_answer handler should only be called for assessment mode": "show_answer handler b\u00f8r kun kaldes til vurderingstilstand",
    "{earned}/{possible} point (graded)": [
      "{earned} / {possible} point (bed\u00f8mt)",
      "{earned} / {possible} point (bed\u00f8mt)"
    ],
    "{earned}/{possible} point (ungraded)": [
      "{earned} / {possible} point (uklassificeret)",
      "{earned} / {possible} point (uden karakter)"
    ],
    "{possible} point possible (graded)": [
      "{possible} point muligt (bed\u00f8mt)",
      "{possible} point muligt (bed\u00f8mt)"
    ],
    "{possible} point possible (ungraded)": [
      "{possible} point muligt (uden karakter)",
      "{possible} point muligt (uden karakter)"
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
    "DATETIME_FORMAT": "j. F Y H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j. F Y",
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j. F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i",
    "SHORT_DATE_FORMAT": "d.m.Y",
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
                DragAndDropI18N.init();
                global.DragAndDropI18N = DragAndDropI18N;
            }(this));
        