
            (function(global){
                var RecommenderXBlockI18N = {
                  init: function() {
                    

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = (n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2);
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "&lt; Related resources": "&lt; Saist\u012btie resursi",
    "A resource was clicked": "Tika noklik\u0161\u0137in\u0101ts uz resursa",
    "Add new resource": "Pievienojiet jaunu resursu",
    "Add new resource &gt;&gt;": "Pievienot jaunu resursu &gt;&gt;",
    "Add resource": "Pievienot resursu",
    "Back to resource list mode": "Atgriezties uz resursu saraksta re\u017e\u012bmu",
    "Check the icon to endorse this resource": "Atz\u012bm\u0113jiet ikonu, lai apstiprin\u0101tu \u0161o resursu",
    "Click to view resources for removal": "Noklik\u0161\u0137iniet, lai skat\u012btu resursus no\u0146em\u0161anai",
    "Click to view resources in ordinary decreasing-vote order": "Noklik\u0161\u0137iniet, lai skat\u012btu resursus parast\u0101 dilsto\u0161\u0101 sec\u012bb\u0101",
    "Configuration setting": "Konfigur\u0101cijas iestat\u012bjums",
    "Cut-and-paste the URL of the resource.": "Izgrieziet un iel\u012bm\u0113jiet resursa URL.",
    "Delete this resource": "Dz\u0113st \u0161o resursu",
    "Description": "Apraksts",
    "Do you want to disable the UX functions which are under development?": "Vai v\u0113laties atsp\u0113jot izstr\u0101des stadij\u0101 eso\u0161\u0101s UX funkcijas?",
    "Do you want to take users on a little tour when they see the RecommenderXBlock first time?": "Vai v\u0113laties, lai lietot\u0101ji, pirmo reizi redzot RecommenderXBlock, dodas neliel\u0101 ekskursij\u0101?",
    "Download resources": "Lejupiel\u0101d\u0113t resursus",
    "Downvote if the resource is not helpful": "Nov\u0113rt\u0113jiet negat\u012bvi, ja resurss nav noder\u012bgs",
    "Edit existing resource": "Redi\u0123\u0113t eso\u0161o resursu",
    "Edit the resource and make it more helpful for other students with this problem. Please do not give the answer directly.": "Redi\u0123\u0113jiet \u0161o resursu un padariet to noder\u012bg\u0101ku citiem dal\u012bbniekiem, kuriem ir \u0161\u012b probl\u0113ma. L\u016bdzu, nesniedziet atbildi tie\u0161i.",
    "Edit this resource": "Redi\u0123\u0113t \u0161o resursu",
    "Endorse Resource": "Apstiprin\u0101t resursu",
    "Endorse resource": "Apstiprin\u0101t resursu",
    "Endorse resource without permission": "Apstipriniet resursu bez at\u013caujas",
    "Endorse this resource and give the reason why you do that.": "Apstipriniet \u0161o resursu un nor\u0101diet iemeslu, k\u0101p\u0113c j\u016bs to dar\u0101t.",
    "Entering add resource mode": "Tiek atv\u0113rts resursa pievieno\u0161anas re\u017e\u012bms",
    "Entering edit resource mode": "Tiek atv\u0113rts resursu redi\u0123\u0113\u0161anas re\u017e\u012bms",
    "Entering flag resource mode": "Notiek karoga resursu re\u017e\u012bma ievad\u012b\u0161ana",
    "Entering import resource mode": "Tiek atv\u0113rts resursu import\u0113\u0161anas re\u017e\u012bms",
    "Export resources": "Eksport\u0113t resursus",
    "Flag Resource": "Karoga resurss",
    "Flag resource": "Karoga resurss",
    "Flag this resource as problematic and give your reason": "Atz\u012bm\u0113jiet \u0161o resursu k\u0101 problem\u0101tisku un nor\u0101diet iemeslu",
    "From page {fromPage} To page {toPage}": "No lapas {fromPage} uz lapu {toPage}",
    "Give a meaningful reason for why this resource should be removed": "Nor\u0101diet j\u0113gpilnu iemeslu, k\u0101p\u0113c \u0161is resurss ir j\u0101no\u0146em",
    "Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title": "Sniedziet resursa kopsavilkuma rindkopu; kopsavilkumam j\u0101b\u016bt detaliz\u0113t\u0101kam nek\u0101 tas, ko j\u016bs sniedz\u0101t sada\u013c\u0101.",
    "Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them": "sniedziet \u012bsu (1-3 teikumu) kopsavilkumu par resursu; ide\u0101l\u0101 gad\u012bjum\u0101 tam j\u0101b\u016bt kodol\u012bgam, bet pietiekami detaliz\u0113tam, lai dal\u012bbnieki zin\u0101tu, vai \u0161is resurss vi\u0146iem ir noder\u012bgs.",
    "Go back to the main list": "Atgriezieties galvenaj\u0101 sarakst\u0101",
    "Here is a list of reasons why students think this resource problematic:": "\u0160eit ir saraksts ar iemesliem, k\u0101p\u0113c dal\u012bbnieki uzskata, ka \u0161is resurss ir problem\u0101tisks:",
    "Hide related resources": "Sl\u0113pt saist\u012btos resursus",
    "Hide the recommendations list": "Sl\u0113pt ieteikumu sarakstu",
    "Hovering resource": "Lido\u0161ais resurss",
    "How many page icons in pagination control (i.e., page range)? The icons for pages from (current page - page range) to (current page + page range) will be shown.": "Cik lappu\u0161u ikonas ir lappu\u0161u veido\u0161anas kontrol\u0113 (t. i., lappu\u0161u diapazon\u0101)? Tiks par\u0101d\u012btas ikonas lap\u0101m no (pa\u0161reiz\u0113j\u0101 lapa - lapas diapazons) l\u012bdz (pa\u0161reiz\u0113j\u0101 lapa + lapas diapazons).",
    "How many resources you want to show in each page of the resource list?": "Cik resursu v\u0113laties par\u0101d\u012bt katr\u0101 resursu saraksta lap\u0101?",
    "Import resources": "Import\u0113t resursus",
    "Invalid location URL provided": "Nor\u0101d\u012bts neder\u012bgs atra\u0161an\u0101s vietas URL",
    "Location": "Atra\u0161an\u0101s vieta",
    "No": "N\u0113",
    "Only staff can import resources": "Tikai darbinieki var import\u0113t resursus",
    "Please submit the JSON file obtained with the download resources button": "L\u016bdzu, iesniedziet JSON failu, kas ieg\u016bts, izmantojot lejupiel\u0101des resursu pogu",
    "Preview image (typically, a screenshot)": "Priek\u0161skat\u012bt att\u0113lu (parasti ekr\u0101nuz\u0146\u0113mums)",
    "Preview screenshot:": "Priek\u0161skat\u012bt ekr\u0101nuz\u0146\u0113mumu:",
    "Provide a file of resource list in JSON format": "Nodro\u0161iniet resursu saraksta failu JSON form\u0101t\u0101",
    "Provide a file of resource screenshot": "Nodro\u0161iniet resursa ekr\u0101nuz\u0146\u0113muma failu",
    "Provide a meaningful description so other students know whether this is useful to them": "Sniedziet j\u0113gpilnu aprakstu, lai citi dal\u012bbnieki zin\u0101tu, vai tas vi\u0146iem ir noder\u012bgi",
    "Provide a meaningful title so other students know whether this is useful to them": "Nor\u0101diet j\u0113gpilnu nosaukumu, lai citi dal\u012bbnieki zin\u0101tu, vai tas vi\u0146iem ir noder\u012bgi",
    "Provide a resource description": "Sniedziet resursa aprakstu",
    "Provide a resource location in url, required": "Nor\u0101diet resursa atra\u0161an\u0101s vietu url, oblig\u0101ti",
    "Provide a resource screenshot": "Nodro\u0161iniet resursa ekr\u0101nuz\u0146\u0113mumu",
    "Provide a resource title, required": "Nor\u0101diet resursa nosaukumu, oblig\u0101ti",
    "Reason": "Iemesls",
    "Reason for why this resource should be endorsed": "Iemesls, k\u0101p\u0113c \u0161is resurss b\u016btu j\u0101atbalsta",
    "Reason for why this resource should be flagged": "Iemesls, k\u0101p\u0113c \u0161is resurss ir j\u0101atz\u012bm\u0113",
    "Reason for why this resource should be removed": "Iemesls, k\u0101p\u0113c \u0161is resurss ir j\u0101no\u0146em",
    "Recommend a new resource which may be helpful to other students solving this problem": "Iesakiet jaunu resursu, kas var\u0113tu b\u016bt noder\u012bgs citiem dal\u012bbniekiem \u0161\u012bs uzdevumi risin\u0101\u0161an\u0101",
    "Remove Resource": "No\u0146emt resursu",
    "Remove resource": "No\u0146emt resursu",
    "Remove this resource and give the reason why you do that": "No\u0146emiet \u0161o resursu un nor\u0101diet iemeslu, k\u0101p\u0113c to dar\u0101t",
    "Remove this resource and give the reason why you do that.": "No\u0146emiet \u0161o resursu un nor\u0101diet iemeslu, k\u0101p\u0113c to dar\u0101t.",
    "Resource title": "Resursa nosaukums",
    "Resource: ": "Resurss: ",
    "Resources (in JSON format):": "Resursi (JSON form\u0101t\u0101):",
    "Save change": "Saglab\u0101t izmai\u0146as",
    "Set the student-view, client side configurations for RecommenderXblock.": "Iestatiet RecommenderXblock dal\u012bbnieka skata klienta puses konfigur\u0101cijas.",
    "Show a list of student-recommented related resources": "R\u0101d\u012bt dal\u012bbnieku ieteikto saist\u012bto resursu sarakstu",
    "Show related resources": "R\u0101d\u012bt saist\u012btos resursus",
    "Size of uploaded file exceeds threshold": "Aug\u0161upiel\u0101d\u0113t\u0101 faila lielums p\u0101rsniedz slieksni",
    "Suggest a resource which can help other students with this problem. Please do not give the answer directly.": "Ierosiniet resursu, kas var pal\u012bdz\u0113t citiem dal\u012bbniekiem, kuri saskaras ar \u0161o probl\u0113mu. L\u016bdzu, nenor\u0101diet atbildi tie\u0161i.",
    "Suggest resource": "Ieteikt resursu",
    "The configuration of pyfs is not properly set": "Pyfs konfigur\u0101cija nav pareizi iestat\u012bta",
    "The content you typed has not been submitted yet. Are you sure to go back?": "J\u016bsu ievad\u012btais saturs v\u0113l nav iesniegts. Vai noteikti atgriez\u012bsities?",
    "The reason why it is endorsed is:": "Iemesls, k\u0101p\u0113c tas ir apstiprin\u0101ts, ir:",
    "The resource you are attempting to provide already exists": "Resurss, kuru m\u0113\u0123in\u0101t nodro\u0161in\u0101t, jau past\u0101v",
    "The resource you are attempting to provide has been disallowed by the staff. Reason: ": "Person\u0101ls ir atteicis resursu, kuru m\u0113\u0123in\u0101t nodro\u0161in\u0101t. Iemesls: ",
    "The selected resource does not exist": "Atlas\u012btais resurss neeksist\u0113",
    "This is a list of recommended resources. If you\\": "\u0160is ir ieteicamo resursu saraksts. Ja j\u016bs\\",
    "This is a list of resources your fellow students thought might be helpful. If you find another useful resource, either on edx.org or elsewhere, please add it. If you can improve the description or preview of a resource, please do so as well. If you find a resource helpful, upvote it. If it&rsquo;s not so helpful, downvote it. If it has issues (illegal material, incorrect, etc.), please flag it and let us know the reason.": "\u0160is ir saraksts ar resursiem, kas, p\u0113c j\u016bsu dom\u0101m, var\u0113tu b\u016bt noder\u012bgi. Ja atrodat citu noder\u012bgu resursu edx.org vai citur, l\u016bdzu, pievienojiet to. Ja varat uzlabot resursa aprakstu vai priek\u0161skat\u012bjumu, l\u016bdzu, ar\u012b to dariet. Ja uzskat\u0101t, ka resurss ir noder\u012bgs, dodiet tam aug\u0161u balsojumu. Ja&rsquo;nav tik noder\u012bgs, samaziniet balsojumu. Ja resursam ir probl\u0113mas (nelikum\u012bgs materi\u0101ls, nepareizs u. c.), l\u016bdzu, atz\u012bm\u0113jiet to un nor\u0101diet iemeslu.",
    "This resource is endorsed by staff": "\u0160o resursu apstiprina darbinieki",
    "This will be a list of resources your fellow students thought might be helpful, but it is empty currently. If you find useful resources, either on edx.org or elsewhere, please add it.": "Tas b\u016bs saraksts ar resursiem, kas, p\u0113c j\u016bsu dom\u0101m, var\u0113tu b\u016bt noder\u012bgi, ta\u010du pa\u0161laik tas ir tuk\u0161s. Ja atrodat noder\u012bgus resursus edx.org vai citur, l\u016bdzu, pievienojiet tos.",
    "Title": "Nosaukums",
    "Tried to access flagged resources without staff permission": "M\u0113\u0123in\u0101ja piek\u013c\u016bt atz\u012bm\u0113tajiem resursiem bez person\u0101la at\u013caujas",
    "Unendorse resource": "Neapstiprin\u0101ts resurss",
    "Unflag resource": "No\u0146emt resursa karogu",
    "Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them": "Aug\u0161upiel\u0101d\u0113jiet resursa priek\u0161skat\u012bjuma ekr\u0101n\u0161\u0101vi\u0146u (GIF/PNG/JPG form\u0101t\u0101); ide\u0101l\u0101 gad\u012bjum\u0101 tas \u013cautu dal\u012bbniekiem saprast, vai \u0161is resurss vi\u0146iem ir noder\u012bgs.",
    "Upload resources": "Aug\u0161upiel\u0101d\u0113jiet resursus",
    "Upload resources in JSON format to the database.": "Aug\u0161upiel\u0101d\u0113jiet resursus JSON form\u0101t\u0101 datu b\u0101z\u0113.",
    "Upvote if the resource is helpful": "Nobalsojiet, ja resurss ir noder\u012bgs",
    "Votes": "Balsis",
    "Why would you like to flag this resource? The staff will review all flagged resources, and remove inappropriate ones (spam, incorrect, abusive, etc.). Giving a clear reason will help us do this efficiently.": "K\u0101p\u0113c v\u0113laties atz\u012bm\u0113t \u0161o resursu? Darbinieki p\u0101rskat\u012bs visus ar karodzi\u0146iem atz\u012bm\u0113tos resursus un dz\u0113s\u012bs neatbilsto\u0161os (surog\u0101tpastu, nekorektus, aizskaro\u0161us u. c.). Skaidra iemesla nor\u0101d\u012b\u0161ana pal\u012bdz\u0113s mums to dar\u012bt efekt\u012bvi.",
    "Yes": "J\u0101",
    "You don't have the permission to remove this resource": "Jums nav at\u013caujas no\u0146emt \u0161o resursu",
    "cancel and go back to resource list": "atcelt un atgriezties resursu sarakst\u0101",
    "mode": "re\u017e\u012bm\u0101",
    "votes": "balsis"
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
    "DATETIME_FORMAT": "Y. \\g\\a\\d\\a j. F, H:i",
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%d.%m.%y %H:%M:%S",
      "%d.%m.%y %H:%M:%S.%f",
      "%d.%m.%y %H:%M",
      "%d.%m.%y %H.%M.%S",
      "%d.%m.%y %H.%M.%S.%f",
      "%d.%m.%y %H.%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "Y. \\g\\a\\d\\a j. F",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%d.%m.%Y",
      "%d.%m.%y"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j. F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "j.m.Y H:i",
    "SHORT_DATE_FORMAT": "j.m.Y",
    "THOUSAND_SEPARATOR": "\u00a0",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M",
      "%H.%M.%S",
      "%H.%M.%S.%f",
      "%H.%M"
    ],
    "YEAR_MONTH_FORMAT": "Y. \\g. F"
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
        