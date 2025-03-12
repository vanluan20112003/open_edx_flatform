
            (function(global){
                var RecommenderXBlockI18N = {
                  init: function() {
                    

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = (n > 1);
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "&lt; Related resources": "&lt; \u0130lgili kaynaklar",
    "A resource was clicked": "Bir kaynak t\u0131kland\u0131",
    "Add new resource": "Yeni kaynak ekle",
    "Add new resource &gt;&gt;": "Yeni kaynak ekle &gt;&gt;",
    "Add resource": "Kaynak ekle",
    "Back to resource list mode": "Kaynak listesi moduna geri d\u00f6n",
    "Check the icon to endorse this resource": "Bu kayna\u011f\u0131 onaylamak i\u00e7in simgeyi i\u015faretleyin",
    "Click to view resources for removal": "Kald\u0131r\u0131lacak kaynaklar\u0131 g\u00f6r\u00fcnt\u00fclemek i\u00e7in t\u0131klay\u0131n",
    "Click to view resources in ordinary decreasing-vote order": "Kaynaklar\u0131 normal azalan oy s\u0131ras\u0131na g\u00f6re g\u00f6r\u00fcnt\u00fclemek i\u00e7in t\u0131klay\u0131n",
    "Configuration setting": "Yap\u0131land\u0131rma ayar\u0131",
    "Cut-and-paste the URL of the resource.": "Kayna\u011f\u0131n URL&#39;sini kesip yap\u0131\u015ft\u0131r\u0131n.",
    "Delete this resource": "Bu kayna\u011f\u0131 sil",
    "Description": "A\u00e7\u0131klama",
    "Do you want to disable the UX functions which are under development?": "Geli\u015ftirilmekte olan UX i\u015flevlerini devre d\u0131\u015f\u0131 b\u0131rakmak istiyor musunuz?",
    "Do you want to take users on a little tour when they see the RecommenderXBlock first time?": "Kullan\u0131c\u0131lar\u0131 RecommenderXBlock&#39;u ilk kez g\u00f6rd\u00fcklerinde k\u00fc\u00e7\u00fck bir tura \u00e7\u0131karmak ister misiniz?",
    "Download resources": "Kaynaklar\u0131 indirin",
    "Downvote if the resource is not helpful": "Kaynak yararl\u0131 de\u011filse olumsuz oy verin",
    "Edit existing resource": "Mevcut kayna\u011f\u0131 d\u00fczenle",
    "Edit the resource and make it more helpful for other students with this problem. Please do not give the answer directly.": "Kayna\u011f\u0131 d\u00fczenleyin ve bu sorunu ya\u015fayan di\u011fer \u00f6\u011frenciler i\u00e7in daha yararl\u0131 hale getirin. L\u00fctfen cevab\u0131 do\u011frudan vermeyin.",
    "Edit this resource": "Bu kayna\u011f\u0131 d\u00fczenle",
    "Endorse Resource": "Kayna\u011f\u0131 Onaylay\u0131n",
    "Endorse resource": "Kayna\u011f\u0131 onayla",
    "Endorse resource without permission": "Kayna\u011f\u0131 izinsiz onayla",
    "Endorse this resource and give the reason why you do that.": "Bu kayna\u011f\u0131 onaylay\u0131n ve bunu neden yapt\u0131\u011f\u0131n\u0131z\u0131 belirtin.",
    "Entering add resource mode": "Kaynak ekleme moduna giriliyor",
    "Entering edit resource mode": "Kaynak d\u00fczenleme moduna giriliyor",
    "Entering flag resource mode": "Bayrak kayna\u011f\u0131 moduna girme",
    "Entering import resource mode": "Kaynak i\u00e7e aktarma moduna giriliyor",
    "Export resources": "Kaynaklar\u0131 d\u0131\u015fa aktar",
    "Flag Resource": "Kayna\u011f\u0131 \u0130\u015faretle",
    "Flag resource": "Kayna\u011f\u0131 i\u015faretle",
    "Flag this resource as problematic and give your reason": "Bu kayna\u011f\u0131 sorunlu olarak i\u015faretleyin ve nedenini belirtin",
    "From page {fromPage} To page {toPage}": "{fromPage} sayfas\u0131ndan {toPage} sayfas\u0131na",
    "Give a meaningful reason for why this resource should be removed": "Bu kayna\u011f\u0131n neden kald\u0131r\u0131lmas\u0131 gerekti\u011fine dair anlaml\u0131 bir neden belirtin",
    "Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title": "Kayna\u011f\u0131n bir paragraf \u00f6zetini verin; \u00f6zet Ba\u015fl\u0131kta verdi\u011finizden daha ayr\u0131nt\u0131l\u0131 olmal\u0131d\u0131r",
    "Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them": "Kayna\u011f\u0131n k\u0131sa (1-3 c\u00fcmle) bir \u00f6zetini verin; \u0130deal olarak bu k\u0131sa ve \u00f6z olmal\u0131d\u0131r ancak \u00f6\u011frencilerin bu kaynaklar\u0131n kendileri i\u00e7in yararl\u0131 olup olmad\u0131\u011f\u0131n\u0131 bilmelerini sa\u011flayacak kadar ayr\u0131nt\u0131l\u0131 bilgi vermelidir.",
    "Go back to the main list": "Ana listeye geri d\u00f6n",
    "Here is a list of reasons why students think this resource problematic:": "\u00d6\u011frencilerin bu kayna\u011f\u0131 sorunlu bulmas\u0131n\u0131n nedenlerinin bir listesi:",
    "Hide related resources": "\u0130lgili kaynaklar\u0131 gizle",
    "Hide the recommendations list": "\u00d6neri listesini gizle",
    "Hovering resource": "Kaynak \u00fczerinde geziniliyor",
    "How many page icons in pagination control (i.e., page range)? The icons for pages from (current page - page range) to (current page + page range) will be shown.": "Sayfaland\u0131rma kontrol\u00fcnde (yani sayfa aral\u0131\u011f\u0131) ka\u00e7 sayfa simgesi var? (Ge\u00e7erli sayfa - sayfa aral\u0131\u011f\u0131) ile (ge\u00e7erli sayfa + sayfa aral\u0131\u011f\u0131) aras\u0131ndaki sayfalar\u0131n simgeleri g\u00f6sterilecektir.",
    "How many resources you want to show in each page of the resource list?": "Kaynak listesinin her sayfas\u0131nda ka\u00e7 kaynak g\u00f6stermek istiyorsunuz?",
    "Import resources": "Kaynaklar\u0131 i\u00e7e aktar",
    "Invalid location URL provided": "Ge\u00e7ersiz konum URL&#39;si sa\u011fland\u0131",
    "Location": "Yer",
    "No": "Hay\u0131r",
    "Only staff can import resources": "Yaln\u0131zca personel kaynaklar\u0131 i\u00e7e aktarabilir",
    "Please submit the JSON file obtained with the download resources button": "L\u00fctfen kaynaklar\u0131 indir d\u00fc\u011fmesiyle elde etti\u011finiz JSON dosyas\u0131n\u0131 g\u00f6nderin",
    "Preview image (typically, a screenshot)": "\u00d6nizleme resmi (genellikle bir ekran g\u00f6r\u00fcnt\u00fcs\u00fc)",
    "Preview screenshot:": "Ekran g\u00f6r\u00fcnt\u00fcs\u00fcn\u00fcn \u00f6nizlemesi:",
    "Provide a file of resource list in JSON format": "JSON format\u0131nda bir kaynak listesi dosyas\u0131 sa\u011flay\u0131n",
    "Provide a file of resource screenshot": "Kaynak ekran g\u00f6r\u00fcnt\u00fcs\u00fcn\u00fcn bir dosyas\u0131n\u0131 sa\u011flay\u0131n",
    "Provide a meaningful description so other students know whether this is useful to them": "Di\u011fer \u00f6\u011frencilerin bunun kendileri i\u00e7in yararl\u0131 olup olmad\u0131\u011f\u0131n\u0131 bilmeleri i\u00e7in anlaml\u0131 bir a\u00e7\u0131klama sa\u011flay\u0131n",
    "Provide a meaningful title so other students know whether this is useful to them": "Di\u011fer \u00f6\u011frencilerin bunun kendileri i\u00e7in yararl\u0131 olup olmad\u0131\u011f\u0131n\u0131 bilmeleri i\u00e7in anlaml\u0131 bir ba\u015fl\u0131k sa\u011flay\u0131n",
    "Provide a resource description": "Kaynak a\u00e7\u0131klamas\u0131 sa\u011flay\u0131n",
    "Provide a resource location in url, required": "URL&#39;de bir kaynak konumu sa\u011flay\u0131n; gerekli",
    "Provide a resource screenshot": "Kaynak ekran g\u00f6r\u00fcnt\u00fcs\u00fc sa\u011flay\u0131n",
    "Provide a resource title, required": "Bir kaynak ba\u015fl\u0131\u011f\u0131 girin (gerekli)",
    "Reason": "Neden",
    "Reason for why this resource should be endorsed": "Bu kayna\u011f\u0131n neden onaylanmas\u0131 gerekti\u011finin nedeni",
    "Reason for why this resource should be flagged": "Bu kayna\u011f\u0131n i\u015faretlenmesinin nedeni",
    "Reason for why this resource should be removed": "Bu kayna\u011f\u0131n neden kald\u0131r\u0131lmas\u0131 gerekti\u011finin nedeni",
    "Recommend a new resource which may be helpful to other students solving this problem": "Bu sorunu \u00e7\u00f6zen di\u011fer \u00f6\u011frencilere yard\u0131mc\u0131 olabilecek yeni bir kaynak \u00f6nerin",
    "Remove Resource": "Kayna\u011f\u0131 Kald\u0131r",
    "Remove resource": "Kayna\u011f\u0131 kald\u0131r",
    "Remove this resource and give the reason why you do that": "Bu kayna\u011f\u0131 kald\u0131r\u0131n ve bunu neden yapt\u0131\u011f\u0131n\u0131z\u0131 belirtin",
    "Remove this resource and give the reason why you do that.": "Bu kayna\u011f\u0131 kald\u0131r\u0131n ve bunu neden yapt\u0131\u011f\u0131n\u0131z\u0131 belirtin.",
    "Resource title": "Kaynak ba\u015fl\u0131\u011f\u0131",
    "Resource: ": "Kaynak: ",
    "Resources (in JSON format):": "Kaynaklar (JSON format\u0131nda):",
    "Save change": "De\u011fi\u015fikli\u011fi kaydet",
    "Set the student-view, client side configurations for RecommenderXblock.": "RecommenderXblock i\u00e7in \u00f6\u011frenci g\u00f6r\u00fcn\u00fcm\u00fc, istemci taraf\u0131 yap\u0131land\u0131rmalar\u0131n\u0131 ayarlay\u0131n.",
    "Show a list of student-recommented related resources": "\u00d6\u011frencilerin \u00f6nerdi\u011fi ilgili kaynaklar\u0131n listesini g\u00f6ster",
    "Show related resources": "\u0130lgili kaynaklar\u0131 g\u00f6ster",
    "Size of uploaded file exceeds threshold": "Y\u00fcklenen dosyan\u0131n boyutu e\u015fi\u011fi a\u015f\u0131yor",
    "Suggest a resource which can help other students with this problem. Please do not give the answer directly.": "Bu sorunla kar\u015f\u0131la\u015fan di\u011fer \u00f6\u011frencilere yard\u0131mc\u0131 olabilecek bir kaynak \u00f6nerin. L\u00fctfen cevab\u0131 do\u011frudan vermeyin.",
    "Suggest resource": "Kaynak \u00f6ner",
    "The configuration of pyfs is not properly set": "Pyfs&#39;in yap\u0131land\u0131rmas\u0131 do\u011fru \u015fekilde ayarlanmam\u0131\u015f",
    "The content you typed has not been submitted yet. Are you sure to go back?": "Yazd\u0131\u011f\u0131n\u0131z i\u00e7erik hen\u00fcz g\u00f6nderilmedi. Geri d\u00f6nece\u011finden emin misin?",
    "The reason why it is endorsed is:": "Onaylanmas\u0131n\u0131n nedeni \u015fudur:",
    "The resource you are attempting to provide already exists": "Sa\u011flamaya \u00e7al\u0131\u015ft\u0131\u011f\u0131n\u0131z kaynak zaten mevcut",
    "The resource you are attempting to provide has been disallowed by the staff. Reason: ": "Sa\u011flamaya \u00e7al\u0131\u015ft\u0131\u011f\u0131n\u0131z kayna\u011fa personel taraf\u0131ndan izin verilmedi. Sebep: ",
    "The selected resource does not exist": "Se\u00e7ilen kaynak mevcut de\u011fil",
    "This is a list of recommended resources. If you\\": "Bu \u00f6nerilen kaynaklar\u0131n bir listesidir. E\u011fer sen\\",
    "This is a list of resources your fellow students thought might be helpful. If you find another useful resource, either on edx.org or elsewhere, please add it. If you can improve the description or preview of a resource, please do so as well. If you find a resource helpful, upvote it. If it&rsquo;s not so helpful, downvote it. If it has issues (illegal material, incorrect, etc.), please flag it and let us know the reason.": "Bu, \u00f6\u011frenci arkada\u015flar\u0131n\u0131z\u0131n yararl\u0131 olabilece\u011fini d\u00fc\u015f\u00fcnd\u00fc\u011f\u00fc kaynaklar\u0131n bir listesidir. Edx.org&#39;da veya ba\u015fka bir yerde yararl\u0131 ba\u015fka bir kaynak bulursan\u0131z l\u00fctfen ekleyin. Bir kayna\u011f\u0131n a\u00e7\u0131klamas\u0131n\u0131 veya \u00f6nizlemesini iyile\u015ftirebiliyorsan\u0131z l\u00fctfen bunu da yap\u0131n. Bir kayna\u011f\u0131 yararl\u0131 bulursan\u0131z olumlu oy verin. \u00c7ok yararl\u0131 de\u011filse, olumsuz oy verin. Sorunlar\u0131 varsa (yasa d\u0131\u015f\u0131 materyal, yanl\u0131\u015f vb.), l\u00fctfen i\u015faretleyin ve nedenini bize bildirin.",
    "This resource is endorsed by staff": "Bu kaynak personel taraf\u0131ndan onaylanm\u0131\u015ft\u0131r",
    "This will be a list of resources your fellow students thought might be helpful, but it is empty currently. If you find useful resources, either on edx.org or elsewhere, please add it.": "Bu, \u00f6\u011frenci arkada\u015flar\u0131n\u0131z\u0131n yararl\u0131 olabilece\u011fini d\u00fc\u015f\u00fcnd\u00fc\u011f\u00fc kaynaklar\u0131n bir listesi olacakt\u0131r, ancak \u015fu anda bo\u015f. Edx.org&#39;da veya ba\u015fka bir yerde yararl\u0131 kaynaklar bulursan\u0131z l\u00fctfen ekleyin.",
    "Title": "\u00dcnvan",
    "Tried to access flagged resources without staff permission": "\u0130\u015faretli kaynaklara personelin izni olmadan eri\u015fmeye \u00e7al\u0131\u015f\u0131ld\u0131",
    "Unendorse resource": "Kayna\u011f\u0131n onay\u0131n\u0131 iptal et",
    "Unflag resource": "Kayna\u011f\u0131n i\u015faretini kald\u0131r",
    "Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them": "Kayna\u011f\u0131n \u00f6nizleme ekran g\u00f6r\u00fcnt\u00fcs\u00fcn\u00fc (GIF/PNG/JPG format\u0131nda) y\u00fckleyin; \u0130deal olarak bu, \u00f6\u011frencilerin bu kaynaklar\u0131n kendileri i\u00e7in yararl\u0131 olup olmad\u0131\u011f\u0131n\u0131 bilmelerini sa\u011flamal\u0131d\u0131r.",
    "Upload resources": "Kaynaklar\u0131 y\u00fckle",
    "Upload resources in JSON format to the database.": "Kaynaklar\u0131 JSON format\u0131nda veritaban\u0131na y\u00fckleyin.",
    "Upvote if the resource is helpful": "Kaynak yararl\u0131ysa olumlu oy verin",
    "Votes": "Oylar",
    "Why would you like to flag this resource? The staff will review all flagged resources, and remove inappropriate ones (spam, incorrect, abusive, etc.). Giving a clear reason will help us do this efficiently.": "Bu kayna\u011f\u0131 neden i\u015faretlemek istiyorsunuz? Personel, i\u015faretlenen t\u00fcm kaynaklar\u0131 inceleyecek ve uygunsuz olanlar\u0131 (spam, yanl\u0131\u015f, k\u00f6t\u00fc ama\u00e7l\u0131 vb.) kald\u0131racakt\u0131r. A\u00e7\u0131k bir neden belirtmek bunu verimli bir \u015fekilde yapmam\u0131za yard\u0131mc\u0131 olacakt\u0131r.",
    "Yes": "Evet",
    "You don't have the permission to remove this resource": "Bu kayna\u011f\u0131 kald\u0131rma izniniz yok",
    "cancel and go back to resource list": "iptal et ve kaynak listesine geri d\u00f6n",
    "mode": "mod",
    "votes": "oylar"
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
    "DATETIME_FORMAT": "d F Y H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "d F Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d/%m/%y",
      "%y-%m-%d",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "d F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d M Y H:i",
    "SHORT_DATE_FORMAT": "d M Y",
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
        