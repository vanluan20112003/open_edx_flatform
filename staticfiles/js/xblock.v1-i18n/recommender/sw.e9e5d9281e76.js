
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
    "&lt; Related resources": "&lt; Rasilimali zinazohusiana",
    "A resource was clicked": "Nyenzo ilibofya",
    "Add new resource": "Ongeza rasilimali mpya",
    "Add new resource &gt;&gt;": "Ongeza rasilimali mpya &gt;&gt;",
    "Add resource": "Ongeza rasilimali",
    "Back to resource list mode": "Rudi kwenye hali ya orodha ya rasilimali",
    "Check the icon to endorse this resource": "Angalia ikoni ili kuidhinisha nyenzo hii",
    "Click to view resources for removal": "Bofya ili kuona nyenzo za kuondolewa",
    "Click to view resources in ordinary decreasing-vote order": "Bofya ili kuona nyenzo katika mpangilio wa kawaida wa kupunguza kura",
    "Configuration setting": "Mpangilio wa usanidi",
    "Cut-and-paste the URL of the resource.": "Kata-na-ubandike URL ya rasilimali.",
    "Delete this resource": "Futa nyenzo hii",
    "Description": "Maelezo",
    "Do you want to disable the UX functions which are under development?": "Je, ungependa kuzima kipengele cha utendakazi cha UX ambacho kinatengenezwa?",
    "Do you want to take users on a little tour when they see the RecommenderXBlock first time?": "Je, ungependa kuchukua watumiaji kwenye ziara ndogo wanapoona RecommenderXBlock mara ya kwanza?",
    "Download resources": "Pakua rasilimali",
    "Downvote if the resource is not helpful": "Piga kura ya chini ikiwa rasilimali haisaidii",
    "Edit existing resource": "Hariri rasilimali iliyopo",
    "Edit the resource and make it more helpful for other students with this problem. Please do not give the answer directly.": "Hariri nyenzo na uifanye iwe ya manufaa zaidi kwa wanafunzi wengine walio na tatizo hili. Tafadhali usitoe jibu moja kwa moja.",
    "Edit this resource": "Hariri rasilimali hii",
    "Endorse Resource": "Thibitisha Rasilimali",
    "Endorse resource": "Thibitisha rasilimali",
    "Endorse resource without permission": "Idhinisha rasilimali bila ruhusa",
    "Endorse this resource and give the reason why you do that.": "Idhinisha nyenzo hii na utoe sababu kwa nini unafanya hivyo.",
    "Entering add resource mode": "Ingiza hali ya kuongeza rasilimali",
    "Entering edit resource mode": "Inaingiza hali ya kuhariri rasilimali",
    "Entering flag resource mode": "Inaingiza hali ya rasilimali ya ripoti",
    "Entering import resource mode": "Inaingiza hali ya rasilimali ya kuagiza",
    "Export resources": "Hamisha rasilimali",
    "Flag Resource": "Nyenzo ya Bendera",
    "Flag resource": "Nyenzo ya bendera",
    "Flag this resource as problematic and give your reason": "Ripoti nyenzo hii kama yenye matatizo na toa sababu yako",
    "From page {fromPage} To page {toPage}": "Kutoka ukurasa {fromPage} Hadi ukurasa {toPage}",
    "Give a meaningful reason for why this resource should be removed": "Toa sababu ya maana kwa nini rasilimali hii inapaswa kuondolewa",
    "Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title": "Toa aya ya muhtasari wa rasilimali; muhtasari unapaswa kuwa wa kina zaidi kuliko ulivyotoa kwenye Kichwa",
    "Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them": "Toa muhtasari mfupi (sentensi 1-3) wa nyenzo; kwa hakika, hii inapaswa kuwa fupi, lakini toa maelezo ya kutosha kuwafahamisha wanafunzi kama nyenzo hii ni muhimu kwao",
    "Go back to the main list": "Rudi kwenye orodha kuu",
    "Here is a list of reasons why students think this resource problematic:": "Hapa kuna orodha ya sababu kwa nini wanafunzi wanafikiria rasilimali hii kuwa na shida:",
    "Hide related resources": "Ficha rasilimali zinazohusiana",
    "Hide the recommendations list": "Ficha orodha ya mapendekezo",
    "Hovering resource": "Rasilimali ya kuelea",
    "How many page icons in pagination control (i.e., page range)? The icons for pages from (current page - page range) to (current page + page range) will be shown.": "Je! ni aikoni ngapi za kurasa katika udhibiti wa uandishi (yaani, masafa ya kurasa)? Aikoni za kurasa kutoka (ukurasa wa sasa - masafa ya kurasa) hadi (ukurasa wa sasa + masafa ya kurasa) zitaonyeshwa.",
    "How many resources you want to show in each page of the resource list?": "Je, ungependa kuonyesha rasilimali ngapi katika kila ukurasa wa orodha ya rasilimali?",
    "Import resources": "Ingiza rasilimali",
    "Invalid location URL provided": "URL ya eneo si sahihi imetolewa",
    "Location": "Mahali",
    "No": "Hapana",
    "Only staff can import resources": "Wafanyakazi pekee ndio wanaoweza kuagiza rasilimali",
    "Please submit the JSON file obtained with the download resources button": "Tafadhali wasilisha faili ya JSON iliyopatikana kwa kitufe cha nyenzo za upakuaji",
    "Preview image (typically, a screenshot)": "Hakiki picha (kawaida, picha ya skrini)",
    "Preview screenshot:": "Hakiki picha ya skrini:",
    "Provide a file of resource list in JSON format": "Toa faili ya orodha ya rasilimali katika umbizo la JSON",
    "Provide a file of resource screenshot": "Toa faili ya picha ya skrini ya rasilimali",
    "Provide a meaningful description so other students know whether this is useful to them": "Toa maelezo ya maana ili wanafunzi wengine wajue kama hii ni muhimu kwao",
    "Provide a meaningful title so other students know whether this is useful to them": "Toa kichwa chenye maana ili wanafunzi wengine wajue kama hii ni muhimu kwao",
    "Provide a resource description": "Toa maelezo ya rasilimali",
    "Provide a resource location in url, required": "Toa eneo la rasilimali katika url, inahitajika",
    "Provide a resource screenshot": "Toa picha ya skrini ya rasilimali",
    "Provide a resource title, required": "Toa kichwa cha nyenzo, kinachohitajika",
    "Reason": "Sababu",
    "Reason for why this resource should be endorsed": "Sababu kwa nini rasilimali hii inapaswa kuidhinishwa",
    "Reason for why this resource should be flagged": "Sababu ya kwa nini rasilimali hii inapaswa kualamishwa",
    "Reason for why this resource should be removed": "Sababu kwa nini rasilimali hii inapaswa kuondolewa",
    "Recommend a new resource which may be helpful to other students solving this problem": "Pendekeza nyenzo mpya ambayo inaweza kusaidia wanafunzi wengine kutatua tatizo hili",
    "Remove Resource": "Ondoa Rasilimali",
    "Remove resource": "Ondoa rasilimali",
    "Remove this resource and give the reason why you do that": "Ondoa nyenzo hii na utoe sababu kwa nini unafanya hivyo",
    "Remove this resource and give the reason why you do that.": "Ondoa nyenzo hii na utoe sababu kwa nini unafanya hivyo.",
    "Resource title": "Kichwa cha rasilimali",
    "Resource: ": "Rasilimali: ",
    "Resources (in JSON format):": "Rasilimali (katika umbizo la JSON):",
    "Save change": "Hifadhi mabadiliko",
    "Set the student-view, client side configurations for RecommenderXblock.": "Weka mwonekano wa mwanafunzi, usanidi wa upande wa mteja wa RecommenderXblock.",
    "Show a list of student-recommented related resources": "Onyesha orodha ya nyenzo zinazohusiana na zilizopendekezwa na wanafunzi",
    "Show related resources": "Onyesha nyenzo zinazohusiana",
    "Size of uploaded file exceeds threshold": "Ukubwa wa faili iliyopakiwa unazidi kikomo",
    "Suggest a resource which can help other students with this problem. Please do not give the answer directly.": "Pendekeza nyenzo ambayo inaweza kuwasaidia wanafunzi wengine na tatizo hili. Tafadhali usitoe jibu moja kwa moja.",
    "Suggest resource": "Pendekeza nyenzo",
    "The configuration of pyfs is not properly set": "Usanidi wa pyfs haujawekwa vizuri",
    "The content you typed has not been submitted yet. Are you sure to go back?": "Maudhui uliyoandika bado hayajawasilishwa. Je, una uhakika wa kurudi?",
    "The reason why it is endorsed is:": "Sababu ya kuidhinishwa ni:",
    "The resource you are attempting to provide already exists": "Nyenzo unayojaribu kutoa tayari ipo",
    "The resource you are attempting to provide has been disallowed by the staff. Reason: ": "Nyenzo unayojaribu kutoa imekataliwa na wafanyikazi. Sababu: ",
    "The selected resource does not exist": "Rasilimali iliyochaguliwa haipo",
    "This is a list of recommended resources. If you\\": "Hii ni orodha ya rasilimali zinazopendekezwa. Kama wewe\\",
    "This is a list of resources your fellow students thought might be helpful. If you find another useful resource, either on edx.org or elsewhere, please add it. If you can improve the description or preview of a resource, please do so as well. If you find a resource helpful, upvote it. If it&rsquo;s not so helpful, downvote it. If it has issues (illegal material, incorrect, etc.), please flag it and let us know the reason.": "Hii ni orodha ya nyenzo ambazo wanafunzi wenzako walidhani zinaweza kusaidia. Ukipata rasilimali nyingine muhimu, ama kwenye edx.org au mahali pengine, tafadhali iongeze. Ikiwa unaweza kuboresha maelezo au onyesho la kukagua rasilimali, tafadhali fanya hivyo pia. Ukipata nyenzo kuwa muhimu, ipigie kura. Ikiwa haisaidii sana, piga kura ya chini. Ikiwa ina matatizo (nyenzo haramu, si sahihi, n.k.), tafadhali iripoti na utufahamishe sababu.",
    "This resource is endorsed by staff": "Nyenzo hii imeidhinishwa na wafanyikazi",
    "This will be a list of resources your fellow students thought might be helpful, but it is empty currently. If you find useful resources, either on edx.org or elsewhere, please add it.": "Hii itakuwa orodha ya nyenzo ambazo wanafunzi wenzako walidhani zinaweza kusaidia, lakini ni tupu kwa sasa. Ukipata nyenzo muhimu, ama kwenye edx.org au kwingineko, tafadhali ongeza.",
    "Title": "Kichwa",
    "Tried to access flagged resources without staff permission": "Ilijaribu kufikia rasilimali zilizoalamishwa bila idhini ya wafanyikazi",
    "Unendorse resource": "Kutoidhinisha rasilimali",
    "Unflag resource": "Ondoa bendera ya rasilimali",
    "Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them": "Pakia onyesho la kukagua skrini (katika GIF/PNG/JPG) ya rasilimali; kwa hakika, hii inapaswa kuwafahamisha wanafunzi kama nyenzo hii ni muhimu kwao",
    "Upload resources": "Pakia rasilimali",
    "Upload resources in JSON format to the database.": "Pakia rasilimali katika umbizo la JSON kwenye hifadhidata.",
    "Upvote if the resource is helpful": "Piga kura ikiwa nyenzo ni muhimu",
    "Votes": "Kura",
    "Why would you like to flag this resource? The staff will review all flagged resources, and remove inappropriate ones (spam, incorrect, abusive, etc.). Giving a clear reason will help us do this efficiently.": "Kwa nini ungependa kuripoti rasilimali hii? Wafanyakazi watakagua rasilimali zote zilizoalamishwa, na kuondoa zisizofaa (barua taka, zisizo sahihi, zenye matusi, n.k.). Kutoa sababu iliyo wazi kutatusaidia kufanya hivyo kwa ufanisi.",
    "Yes": "Ndiyo",
    "You don't have the permission to remove this resource": "Huna ruhusa ya kuondoa nyenzo hii",
    "cancel and go back to resource list": "ghairi na urudi kwenye orodha ya rasilimali",
    "mode": "hali",
    "votes": "kura"
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
                RecommenderXBlockI18N.init();
                global.RecommenderXBlockI18N = RecommenderXBlockI18N;
            }(this));
        