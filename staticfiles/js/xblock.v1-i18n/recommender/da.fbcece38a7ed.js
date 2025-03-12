
            (function(global){
                var RecommenderXBlockI18N = {
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
    "&lt; Related resources": "&lt; Relaterede ressourcer",
    "A resource was clicked": "Der blev klikket p\u00e5 en ressource",
    "Add new resource": "Tilf\u00f8j ny ressource",
    "Add new resource &gt;&gt;": "Tilf\u00f8j ny ressource &gt;&gt;",
    "Add resource": "Tilf\u00f8j ressource",
    "Back to resource list mode": "Tilbage til ressourcelistetilstand",
    "Check the icon to endorse this resource": "Marker ikonet for at godkende denne ressource",
    "Click to view resources for removal": "Klik for at se ressourcer til fjernelse",
    "Click to view resources in ordinary decreasing-vote order": "Klik for at se ressourcer i almindelig faldende stemmer\u00e6kkef\u00f8lge",
    "Configuration setting": "Konfigurationsindstilling",
    "Cut-and-paste the URL of the resource.": "Klip og inds\u00e6t ressourcens URL.",
    "Delete this resource": "Slet denne ressource",
    "Description": "Beskrivelse",
    "Do you want to disable the UX functions which are under development?": "Vil du deaktivere UX-funktionerne, som er under udvikling?",
    "Do you want to take users on a little tour when they see the RecommenderXBlock first time?": "Vil du tage brugere med p\u00e5 en lille rundvisning, n\u00e5r de ser RecommenderXBlock f\u00f8rste gang?",
    "Download resources": "Download ressourcer",
    "Downvote if the resource is not helpful": "Stem ned, hvis ressourcen ikke er nyttig",
    "Edit existing resource": "Rediger eksisterende ressource",
    "Edit the resource and make it more helpful for other students with this problem. Please do not give the answer directly.": "Rediger ressourcen og g\u00f8r den mere nyttig for andre elever med dette problem. Giv venligst ikke svaret direkte.",
    "Edit this resource": "Rediger denne ressource",
    "Endorse Resource": "Godkend ressource",
    "Endorse resource": "Godkend ressource",
    "Endorse resource without permission": "Godkend ressource uden tilladelse",
    "Endorse this resource and give the reason why you do that.": "Godkend denne ressource og giv grunden til, hvorfor du g\u00f8r det.",
    "Entering add resource mode": "G\u00e5r ind i tilstanden Tilf\u00f8j ressource",
    "Entering edit resource mode": "G\u00e5r ind i redigeringsressourcetilstand",
    "Entering flag resource mode": "G\u00e5r ind i flagressourcetilstand",
    "Entering import resource mode": "G\u00e5r ind i importressourcetilstand",
    "Export resources": "Eksporter ressourcer",
    "Flag Resource": "Flagressource",
    "Flag resource": "Flagressource",
    "Flag this resource as problematic and give your reason": "Mark\u00e9r denne ressource som problematisk og giv din grund",
    "From page {fromPage} To page {toPage}": "Fra side {fromPage} Til side {toPage}",
    "Give a meaningful reason for why this resource should be removed": "Giv en meningsfuld grund til, hvorfor denne ressource skal fjernes",
    "Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title": "Giv et afsnit med resum\u00e9 af ressourcen; resum\u00e9et skal v\u00e6re mere detaljeret, end du angav i titel",
    "Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them": "Giv et kort (1-3 s\u00e6tninger) resum\u00e9 af ressourcen; ideelt set b\u00f8r dette v\u00e6re kortfattet, men give nok detaljer til at fort\u00e6lle eleverne, om disse ressourcer er nyttige for dem",
    "Go back to the main list": "G\u00e5 tilbage til hovedlisten",
    "Here is a list of reasons why students think this resource problematic:": "Her er en liste over \u00e5rsager til, at eleverne synes, at denne ressource er problematisk:",
    "Hide related resources": "Skjul relaterede ressourcer",
    "Hide the recommendations list": "Skjul listen med anbefalinger",
    "Hovering resource": "Sv\u00e6vende ressource",
    "How many page icons in pagination control (i.e., page range)? The icons for pages from (current page - page range) to (current page + page range) will be shown.": "Hvor mange sideikoner i sideinddelingskontrol (dvs. sideomr\u00e5de)? Ikonerne for sider fra (aktuel side - sideomr\u00e5de) til (aktuel side + sideomr\u00e5de) vil blive vist.",
    "How many resources you want to show in each page of the resource list?": "Hvor mange ressourcer vil du have vist p\u00e5 hver side af ressourcelisten?",
    "Import resources": "Importer ressourcer",
    "Invalid location URL provided": "Ugyldig adresse-URL angivet",
    "Location": "Beliggenhed",
    "No": "Ingen",
    "Only staff can import resources": "Kun personale kan importere ressourcer",
    "Please submit the JSON file obtained with the download resources button": "Indsend venligst JSON-filen opn\u00e5et med knappen download ressourcer",
    "Preview image (typically, a screenshot)": "Eksempelbillede (typisk et sk\u00e6rmbillede)",
    "Preview screenshot:": "Forh\u00e5ndsvisning af sk\u00e6rmbillede:",
    "Provide a file of resource list in JSON format": "Angiv en fil med ressourceliste i JSON-format",
    "Provide a file of resource screenshot": "Angiv en fil med ressourcesk\u00e6rmbillede",
    "Provide a meaningful description so other students know whether this is useful to them": "Giv en meningsfuld beskrivelse, s\u00e5 andre elever ved, om dette er nyttigt for dem",
    "Provide a meaningful title so other students know whether this is useful to them": "Giv en meningsfuld titel, s\u00e5 andre elever ved, om dette er nyttigt for dem",
    "Provide a resource description": "Giv en ressourcebeskrivelse",
    "Provide a resource location in url, required": "Angiv en ressourceplacering i url, p\u00e5kr\u00e6vet",
    "Provide a resource screenshot": "Giv et ressourcesk\u00e6rmbillede",
    "Provide a resource title, required": "Angiv en ressourcetitel, p\u00e5kr\u00e6vet",
    "Reason": "\u00c5rsag",
    "Reason for why this resource should be endorsed": "Begrundelse for, hvorfor denne ressource b\u00f8r godkendes",
    "Reason for why this resource should be flagged": "\u00c5rsag til, hvorfor denne ressource skal markeres",
    "Reason for why this resource should be removed": "Begrundelse for, hvorfor denne ressource skal fjernes",
    "Recommend a new resource which may be helpful to other students solving this problem": "Anbefal en ny ressource, som kan v\u00e6re nyttig for andre elever, der l\u00f8ser dette problem",
    "Remove Resource": "Fjern ressource",
    "Remove resource": "Fjern ressource",
    "Remove this resource and give the reason why you do that": "Fjern denne ressource og giv grunden til, hvorfor du g\u00f8r det",
    "Remove this resource and give the reason why you do that.": "Fjern denne ressource og giv grunden til, hvorfor du g\u00f8r det.",
    "Resource title": "Ressource titel",
    "Resource: ": "Ressource: ",
    "Resources (in JSON format):": "Ressourcer (i JSON-format):",
    "Save change": "Gem \u00e6ndring",
    "Set the student-view, client side configurations for RecommenderXblock.": "Indstil elev-visning, klientside konfigurationer for RecommenderXblock.",
    "Show a list of student-recommented related resources": "Vis en liste over relaterede ressourcer anbefalet af elever",
    "Show related resources": "Vis relaterede ressourcer",
    "Size of uploaded file exceeds threshold": "St\u00f8rrelsen p\u00e5 den uploadede fil overstiger t\u00e6rsklen",
    "Suggest a resource which can help other students with this problem. Please do not give the answer directly.": "Foresl\u00e5 en ressource, som kan hj\u00e6lpe andre elever med dette problem. Giv venligst ikke svaret direkte.",
    "Suggest resource": "Foresl\u00e5 ressource",
    "The configuration of pyfs is not properly set": "Konfigurationen af pyfs er ikke korrekt indstillet",
    "The content you typed has not been submitted yet. Are you sure to go back?": "Indholdet du indtastede er ikke blevet indsendt endnu. Er du sikker p\u00e5 at g\u00e5 tilbage?",
    "The reason why it is endorsed is:": "Grunden til at det er godkendt er:",
    "The resource you are attempting to provide already exists": "Den ressource, du fors\u00f8ger at levere, findes allerede",
    "The resource you are attempting to provide has been disallowed by the staff. Reason: ": "Den ressource, du fors\u00f8ger at levere, er blevet afvist af personalet. Grund: ",
    "The selected resource does not exist": "Den valgte ressource findes ikke",
    "This is a list of recommended resources. If you\\": "Dette er en liste over anbefalede ressourcer. Hvis du\\",
    "This is a list of resources your fellow students thought might be helpful. If you find another useful resource, either on edx.org or elsewhere, please add it. If you can improve the description or preview of a resource, please do so as well. If you find a resource helpful, upvote it. If it&rsquo;s not so helpful, downvote it. If it has issues (illegal material, incorrect, etc.), please flag it and let us know the reason.": "Dette er en liste over ressourcer, som dine medstuderende mente kunne v\u00e6re nyttige. Hvis du finder en anden nyttig ressource, enten p\u00e5 edx.org eller andre steder, bedes du tilf\u00f8je den. Hvis du kan forbedre beskrivelsen eller forh\u00e5ndsvisningen af en ressource, s\u00e5 g\u00f8r det ogs\u00e5. Hvis du finder en ressource nyttig, s\u00e5 stem den op. Hvis det ikke er s\u00e5 nyttigt, s\u00e5 nedstem det. Hvis det har problemer (ulovligt materiale, forkert osv.), skal du markere det og fort\u00e6lle os \u00e5rsagen.",
    "This resource is endorsed by staff": "Denne ressource er godkendt af personalet",
    "This will be a list of resources your fellow students thought might be helpful, but it is empty currently. If you find useful resources, either on edx.org or elsewhere, please add it.": "Dette vil v\u00e6re en liste over ressourcer, som dine medstuderende mente kunne v\u00e6re nyttige, men den er tom i \u00f8jeblikket. Hvis du finder nyttige ressourcer, enten p\u00e5 edx.org eller andre steder, bedes du tilf\u00f8je dem.",
    "Title": "Titel",
    "Tried to access flagged resources without staff permission": "Fors\u00f8gte at f\u00e5 adgang til markerede ressourcer uden personaletilladelse",
    "Unendorse resource": "Ikke godkendt ressource",
    "Unflag resource": "Fjern flag for ressource",
    "Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them": "Upload et forh\u00e5ndsvisningssk\u00e6rmbillede (i GIF/PNG/JPG) af ressourcen; ideelt set b\u00f8r dette fort\u00e6lle eleverne, om disse ressourcer er nyttige for dem",
    "Upload resources": "Upload ressourcer",
    "Upload resources in JSON format to the database.": "Upload ressourcer i JSON-format til databasen.",
    "Upvote if the resource is helpful": "Stem op, hvis ressourcen er nyttig",
    "Votes": "Stemmer",
    "Why would you like to flag this resource? The staff will review all flagged resources, and remove inappropriate ones (spam, incorrect, abusive, etc.). Giving a clear reason will help us do this efficiently.": "Hvorfor vil du markere denne ressource? Personalet vil gennemg\u00e5 alle markerede ressourcer og fjerne upassende (spam, forkert, misbrug osv.). At give en klar begrundelse vil hj\u00e6lpe os med at g\u00f8re dette effektivt.",
    "Yes": "Ja",
    "You don't have the permission to remove this resource": "Du har ikke tilladelse til at fjerne denne ressource",
    "cancel and go back to resource list": "annuller og g\u00e5 tilbage til ressourcelisten",
    "mode": "mode",
    "votes": "stemmer"
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
                RecommenderXBlockI18N.init();
                global.RecommenderXBlockI18N = RecommenderXBlockI18N;
            }(this));
        