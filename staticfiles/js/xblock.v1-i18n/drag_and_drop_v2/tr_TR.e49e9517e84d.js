
            (function(global){
                var DragAndDropI18N = {
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
    "\n                            Please provide a description of the image for non-visual users.\n                            The description should provide sufficient information to allow anyone\n                            to solve the problem even without seeing the image.\n                        ": "\nL\u00fctfen g\u00f6rsel olmayan kullan\u0131c\u0131lar i\u00e7in g\u00f6rselin bir a\u00e7\u0131klamas\u0131n\u0131 sa\u011flay\u0131n.\n A\u00e7\u0131klama herkesin izin vermesi i\u00e7in yeterli bilgi sa\u011flamal\u0131d\u0131r\n g\u00f6r\u00fcnt\u00fcy\u00fc g\u00f6rmeden bile sorunu \u00e7\u00f6zmek i\u00e7in.\n                        ",
    "(inherited from Advanced Settings)": "(Geli\u015fmi\u015f Ayarlar&#39;dan devral\u0131nd\u0131)",
    ", draggable": ", s\u00fcr\u00fcklenebilir",
    ", draggable, grabbed": ", s\u00fcr\u00fcklenebilir, yakalanm\u0131\u015f",
    ", dropzone": ", bo\u015faltma noktas\u0131",
    "Actions": "Eylemler",
    "Add a zone": "B\u00f6lge ekle",
    "Add an item": "Bir \u00f6\u011fe ekle",
    "After All Attempts": "T\u00fcm Denemelerden Sonra",
    "After All Attempts or Correct": "T\u00fcm Denemelerden ya da Do\u011fru Cevaptan Sonra",
    "Always": "Her Zaman",
    "An error occurred. Unable to load drag and drop problem.": "Bir hata olu\u015ftu. S\u00fcr\u00fckle ve b\u0131rak sorunu y\u00fcklenemiyor.",
    "An isosceles triangle with three layers of similar height. It is shown upright, so the widest layer is located at the bottom, and the narrowest layer is located at the top.": "Benzer y\u00fckseklikte \u00fc\u00e7 katmana sahip bir ikizkenar \u00fc\u00e7gen. Dik olarak g\u00f6sterilir, b\u00f6ylece en geni\u015f katman altta, en dar katman ise \u00fcstte bulunur.",
    "Answered": "Yan\u0131tland\u0131",
    "Assessment": "De\u011ferlendirme",
    "Attempted": "Denendi",
    "Attempted or Past Due": "Denendi veya S\u00fcresi Ge\u00e7mi\u015f",
    "Background Image": "Arka plan g\u00f6r\u00fcnt\u00fcs\u00fc",
    "Background URL": "Arka plan URL&#39;si",
    "Background description": "Arka plan a\u00e7\u0131klamas\u0131",
    "Basic Settings": "Temel Ayarlar",
    "Cancel": "\u0130ptal",
    "Change background": "Arka plan\u0131 de\u011fi\u015ftir",
    "Close": "Kapat",
    "Closed": "Kapat\u0131ld\u0131",
    "Continue": "Devam et",
    "Correct": "Do\u011fru",
    "Correct or Past Due": "Do\u011fru veya S\u00fcresi Ge\u00e7mi\u015f",
    "Correct! This one belongs to The Bottom Zone.": "Do\u011fru! Bu, Alt B\u00f6lge&#39;ye ait.",
    "Correct! This one belongs to The Middle Zone.": "Do\u011fru! Bu Orta B\u00f6lgeye ait.",
    "Correct! This one belongs to The Top Zone.": "Do\u011fru! Buras\u0131 The Top Zone&#39;a ait.",
    "Correctly placed in: {zone_title}": "Do\u011fru yerle\u015ftirilmi\u015f: {zone_title}",
    "Correctly placed {correct_count} item": [
      "Do\u011fru yerle\u015ftirilmi\u015f {correct_count} \u00f6\u011fesi",
      "Do\u011fru yerle\u015ftirilmi\u015f {correct_count} \u00f6\u011feleri"
    ],
    "DEPRECATED. Keeps maximum score achieved by student as a weighted value.": "KULLANIMDAN KALDIRILDI. \u00d6\u011frencinin ald\u0131\u011f\u0131 maksimum puan\u0131 a\u011f\u0131rl\u0131kl\u0131 de\u011fer olarak tutar.",
    "Default": "\u00d6ntan\u0131ml\u0131",
    "Defines the number of points the problem is worth.": "Sorunun de\u011ferindeki puan say\u0131s\u0131n\u0131 tan\u0131mlar.",
    "Defines the number of times a student can try to answer this problem. If the value is not set, infinite attempts are allowed.": "\u00d6\u011frencilerin bu problemi ka\u00e7 kez cevaplamay\u0131 deneme hakk\u0131na sahip olduklar\u0131n\u0131 a\u00e7\u0131klar. E\u011fer de\u011fer belirlenmemi\u015fse, s\u0131n\u0131rs\u0131z denemeye izin verilir. ",
    "Defines when to show the answer to the problem. A default value can be set in Advanced Settings. To revert setting a custom value, choose the 'Default' option.": "Sorunun cevab\u0131n\u0131n ne zaman g\u00f6sterilece\u011fini tan\u0131mlar. Geli\u015fmi\u015f Ayarlar&#39;da varsay\u0131lan bir de\u011fer ayarlanabilir. \u00d6zel bir de\u011fer ayarlamay\u0131 geri almak i\u00e7in &#39;Varsay\u0131lan&#39; se\u00e7ene\u011fini se\u00e7in.",
    "Did not place {missing_count} required item": [
      "{missing_count} gerekli \u00f6\u011feyi yerle\u015ftirmedi",
      "{missing_count} gerekli \u00f6\u011feleri yerle\u015ftirmedi"
    ],
    "Display label names on the image": "Resimde etiket adlar\u0131n\u0131 g\u00f6r\u00fcnt\u00fcle",
    "Display the heading \"Problem\" above the problem text?": "Sorun metninin \u00fczerinde &quot;Sorun&quot; ba\u015fl\u0131\u011f\u0131 g\u00f6sterilsin mi?",
    "Display the title to the learner?": "Ba\u015fl\u0131k \u00f6\u011frenciye g\u00f6sterilsin mi?",
    "Display zone borders on the image": "G\u00f6r\u00fcnt\u00fcde b\u00f6lge s\u0131n\u0131rlar\u0131n\u0131 g\u00f6r\u00fcnt\u00fcleme",
    "Display zone borders when dragging an item": "Bir \u00f6\u011feyi s\u00fcr\u00fcklerken b\u00f6lge kenarl\u0131klar\u0131n\u0131 g\u00f6r\u00fcnt\u00fcleme",
    "Drag and Drop": "S\u00fcr\u00fckle ve B\u0131rak",
    "Drag and Drop Problem": "S\u00fcr\u00fckle ve B\u0131rak Sorunu",
    "Drag and Drop problems consist of draggable items and dropzones. Users should select a draggable item with their keyboard and then navigate to an appropriate dropzone to drop it.": "S\u00fcr\u00fckle ve B\u0131rak problemleri s\u00fcr\u00fcklenebilir \u00f6\u011felerden ve b\u0131rakma b\u00f6lgelerinden olu\u015fur. Kullan\u0131c\u0131lar klavyeleriyle s\u00fcr\u00fcklenebilir bir \u00f6\u011fe se\u00e7meli ve ard\u0131ndan onu b\u0131rakmak i\u00e7in uygun bir b\u0131rakma b\u00f6lgesine gitmelidir.",
    "Drag the items onto the image above.": "\u00d6\u011feleri yukar\u0131daki g\u00f6rselin \u00fczerine s\u00fcr\u00fckleyin.",
    "Drop Targets": "Hedefleri B\u0131rak",
    "Explanation": "A\u00e7\u0131klama",
    "Explanation Text": "A\u00e7\u0131klama Metni",
    "Feedback": "Geri bildirim",
    "Final attempt was used, highest score is {score}": "Son deneme kullan\u0131ld\u0131, en y\u00fcksek puan {score}",
    "Final feedback": "Son geri bildirim",
    "Finished": "Bitirildi",
    "For example, 'http://example.com/background.png' or '/static/background.png'.": "\u00d6rne\u011fin, &#39;http://example.com/background.png&#39; veya &#39;/static/background.png&#39;.",
    "Generate image and zones": "G\u00f6r\u00fcnt\u00fc ve b\u00f6lgeler olu\u015ftur",
    "Generate image automatically": "G\u00f6r\u00fcnt\u00fcy\u00fc otomatik olarak olu\u015ftur",
    "Go to Beginning": "Ba\u015fa Git",
    "Goes anywhere": "Her yere gider",
    "Goes to the bottom": "Dibe do\u011fru gider",
    "Goes to the middle": "Ortaya do\u011fru gidiyor",
    "Goes to the top": "En \u00fcste gider",
    "Good work! You have completed this drag and drop problem.": "\u0130yi i\u015f! Bu s\u00fcr\u00fckle b\u0131rak problemini tamamlad\u0131n\u0131z.",
    "Hints:": "\u0130pu\u00e7lar\u0131:",
    "I don't belong anywhere": "Hi\u00e7bir yere ait de\u011filim",
    "Incorrect": "Yanl\u0131\u015f",
    "Indicates whether a learner has completed the problem at least once": "Bir \u00f6\u011frencinin problemi en az bir kez tamamlay\u0131p tamamlamad\u0131\u011f\u0131n\u0131 g\u00f6sterir",
    "Information about current positions of items that a learner has dropped on the target image.": "Bir \u00f6\u011frencinin hedef g\u00f6r\u00fcnt\u00fcye d\u00fc\u015f\u00fcrd\u00fc\u011f\u00fc \u00f6\u011felerin mevcut konumlar\u0131 hakk\u0131nda bilgi.",
    "Information about zones, items, feedback, explanation and background image for this problem. This information is derived from the input that a course author provides via the interactive editor when configuring the problem.": "Bu soruna ili\u015fkin b\u00f6lgeler, \u00f6\u011feler, geri bildirim, a\u00e7\u0131klama ve arka plan g\u00f6r\u00fcnt\u00fcs\u00fc hakk\u0131nda bilgiler. Bu bilgi, kurs yazar\u0131n\u0131n sorunu yap\u0131land\u0131r\u0131rken etkile\u015fimli d\u00fczenleyici arac\u0131l\u0131\u011f\u0131yla sa\u011flad\u0131\u011f\u0131 girdiden elde edilir.",
    "Introductory feedback": "Giri\u015f geri bildirimi",
    "Item Bank": "\u00d6\u011fe Bankas\u0131",
    "Item background color": "\u00d6\u011fe arka plan rengi",
    "Item definitions": "\u00d6\u011fe tan\u0131mlar\u0131",
    "Item text color": "\u00d6\u011fe metni rengi",
    "Items": "\u00dcr\u00fcnler",
    "Items placed here: ": "Buraya yerle\u015ftirilen \u00f6\u011feler: ",
    "Keeps maximum score achieved by student as a raw value between 0 and 1.": "\u00d6\u011frencinin ald\u0131\u011f\u0131 maksimum puan\u0131 0 ile 1 aras\u0131nda ham de\u011fer olarak tutar.",
    "Keyboard Help": "Klavye Yard\u0131m\u0131",
    "Loading drag and drop problem.": "S\u00fcr\u00fckle b\u0131rak sorunu y\u00fckleniyor.",
    "Max number of attempts reached": "Maksimum deneme say\u0131s\u0131na ula\u015f\u0131ld\u0131",
    "Maximum attempts": "Maksimum deneme say\u0131s\u0131",
    "Maximum items per zone": "B\u00f6lge ba\u015f\u0131na maksimum \u00f6\u011fe",
    "Maximum score available of the problem as a raw value between 0 and 1.": "Sorunun ham de\u011feri olarak 0 ile 1 aras\u0131nda al\u0131nabilecek maksimum puan\u0131.",
    "Misplaced {misplaced_count} item": [
      "Yanl\u0131\u015f yerle\u015ftirilmi\u015f {misplaced_count} \u00f6\u011fesi",
      "Yanl\u0131\u015f yerle\u015ftirilmi\u015f {misplaced_count} \u00f6\u011feleri"
    ],
    "Misplaced {misplaced_count} item (misplaced item was returned to the item bank)": [
      "Yanl\u0131\u015f yerle\u015ftirilmi\u015f {misplaced_count} e\u015fyas\u0131 (yanl\u0131\u015f yerle\u015ftirilmi\u015f e\u015fya e\u015fya bankas\u0131na iade edildi)",
      "Yanl\u0131\u015f yerle\u015ftirilen {misplaced_count} e\u015fyalar (yanl\u0131\u015f yerle\u015ftirilen e\u015fyalar e\u015fya bankas\u0131na iade edildi)"
    ],
    "Mode": "Durum",
    "Navigate using TAB and SHIFT+TAB to the appropriate dropzone and press CTRL+M once more to drop it here.": "TAB ve SHIFT+TAB tu\u015flar\u0131n\u0131 kullanarak uygun b\u0131rakma b\u00f6lgesine gidin ve buraya b\u0131rakmak i\u00e7in CTRL+M tu\u015flar\u0131na bir kez daha bas\u0131n.",
    "Never": "Asla",
    "No items placed here": "Buraya hi\u00e7bir \u00f6\u011fe yerle\u015ftirilmedi",
    "No, this item does not belong here. Try again.": "Hay\u0131r, bu e\u015fya buraya ait de\u011fil. Tekrar deneyin.",
    "Number of attempts learner used": "\u00d6\u011frencinin kulland\u0131\u011f\u0131 deneme say\u0131s\u0131",
    "Number of columns": "S\u00fctun say\u0131s\u0131",
    "Number of columns and rows.": "S\u00fctun ve sat\u0131r say\u0131s\u0131.",
    "Number of rows": "Sat\u0131r say\u0131s\u0131",
    "Of course it goes here! It goes anywhere!": "Tabii ki buraya gelecek! Her yere gider!",
    "Past Due": "Zaman A\u015f\u0131m\u0131na U\u011fram\u0131\u015f",
    "Placed in: {zone_title}": "Yerle\u015fti\u011fi yer: {zone_title}",
    "Please check over your submission.": "L\u00fctfen g\u00f6nderiminizi kontrol edin.",
    "Please check the values you entered.": "L\u00fctfen girdi\u011finiz de\u011ferleri kontrol ediniz.",
    "Press CTRL+M to select a draggable item (effectively picking it up).": "S\u00fcr\u00fcklenebilir bir \u00f6\u011feyi se\u00e7mek (etkili bir \u015fekilde almak) i\u00e7in CTRL+M tu\u015flar\u0131na bas\u0131n.",
    "Press ESC if you want to cancel the drop operation (for example, to select a different item).": "B\u0131rakma i\u015flemini iptal etmek istiyorsan\u0131z (\u00f6rne\u011fin farkl\u0131 bir \u00f6\u011fe se\u00e7mek i\u00e7in) ESC tu\u015funa bas\u0131n.",
    "Problem": "Problem",
    "Problem Weight": "Problem A\u011f\u0131rl\u0131\u011f\u0131",
    "Problem data": "Sorun verileri",
    "Problem text": "Sorun metni",
    "Provide custom image": "\u00d6zel resim sa\u011flay\u0131n",
    "Reset": "S\u0131f\u0131rla",
    "Save": "Kaydet",
    "Saving": "Kaydediliyor",
    "Show \"Problem\" heading": "&quot;Sorun&quot; ba\u015fl\u0131\u011f\u0131n\u0131 g\u00f6ster",
    "Show Answer": "Yan\u0131t\u0131 G\u00f6ster",
    "Show answer": "Yan\u0131t\u0131 g\u00f6ster",
    "Show title": "Ba\u015fl\u0131\u011f\u0131 g\u00f6ster",
    "Size of a single zone in pixels.": "Tek bir b\u00f6lgenin piksel cinsinden boyutu.",
    "Some of your answers were not correct.": "Cevaplar\u0131n\u0131zdan baz\u0131lar\u0131 do\u011fru de\u011fildi.",
    "Standard": "Standart",
    "Standard mode: the problem provides immediate feedback each time a learner drops an item on a target zone. Assessment mode: the problem provides feedback only after a learner drops all available items on target zones.": "Standart mod: \u00d6\u011frencinin hedef b\u00f6lgeye bir \u00f6\u011feyi d\u00fc\u015f\u00fcrd\u00fc\u011f\u00fc her seferde problem an\u0131nda geri bildirim sa\u011flar. De\u011ferlendirme modu: problem, yaln\u0131zca \u00f6\u011frenci mevcut t\u00fcm \u00f6\u011feleri hedef b\u00f6lgelere b\u0131rakt\u0131ktan sonra geri bildirim sa\u011flar.",
    "Submission deadline has passed.": "Son teslim tarihi ge\u00e7ti.",
    "Submit": "G\u00f6nder",
    "Submitting": "G\u00f6nderiliyor",
    "TAB back to the list of draggable items and repeat this process until all of the draggable items have been placed on their respective dropzones.": "S\u00fcr\u00fcklenebilir \u00f6\u011feler listesine TAB ile geri d\u00f6n\u00fcn ve t\u00fcm s\u00fcr\u00fcklenebilir \u00f6\u011feler ilgili b\u0131rakma b\u00f6lgelerine yerle\u015ftirilene kadar bu i\u015flemi tekrarlay\u0131n.",
    "Text color to use for draggable items (example: 'white' or '#ffffff').": "S\u00fcr\u00fcklenebilir \u00f6\u011feler i\u00e7in kullan\u0131lacak metin rengi (\u00f6rne\u011fin: &#39;beyaz&#39; veya &#39;#ffffff&#39;).",
    "The Bottom Zone": "Alt B\u00f6lge",
    "The Middle Zone": "Orta B\u00f6lge",
    "The Top Zone": "\u00dcst B\u00f6lge",
    "The answer is unavailable": "Cevap mevcut de\u011fil",
    "The background color of draggable items in the problem (example: 'blue' or '#0000ff').": "Sorundaki s\u00fcr\u00fcklenebilir \u00f6\u011felerin arka plan rengi (\u00f6rne\u011fin: &#39;mavi&#39; veya &#39;#0000ff&#39;).",
    "The description of the problem or instructions shown to the learner.": "\u00d6\u011frenciye g\u00f6sterilen problemin veya talimatlar\u0131n a\u00e7\u0131klamas\u0131.",
    "The title of the drag and drop problem. The title is displayed to learners.": "S\u00fcr\u00fckle b\u0131rak probleminin ba\u015fl\u0131\u011f\u0131. Ba\u015fl\u0131k \u00f6\u011frencilere g\u00f6sterilir.",
    "There was an error with your form.": "Formunuzda bir hata olu\u015ftu.",
    "This is a screen reader-friendly problem.": "Bu, ekran okuyucu dostu bir sorundur.",
    "This setting limits the number of items that can be dropped into a single zone.": "Bu ayar, tek bir b\u00f6lgeye b\u0131rak\u0131labilecek \u00f6\u011fe say\u0131s\u0131n\u0131 s\u0131n\u0131rlar.",
    "Title": "\u00dcnvan",
    "Unknown DnDv2 mode {mode} - course is misconfigured": "Bilinmeyen DnDv2 modu {mode} - kurs yanl\u0131\u015f yap\u0131land\u0131r\u0131lm\u0131\u015f",
    "Unknown Zone": "Bilinmeyen B\u00f6lge",
    "Use only TAB and SHIFT+TAB to navigate between draggable items and drop zones.": "S\u00fcr\u00fcklenebilir \u00f6\u011feler ve b\u0131rakma b\u00f6lgeleri aras\u0131nda gezinmek i\u00e7in yaln\u0131zca TAB ve SHIFT+SEKME tu\u015flar\u0131n\u0131 kullan\u0131n.",
    "Use this zone to associate an item with the bottom layer of the triangle.": "Bir \u00f6\u011feyi \u00fc\u00e7genin alt katman\u0131yla ili\u015fkilendirmek i\u00e7in bu b\u00f6lgeyi kullan\u0131n.",
    "Use this zone to associate an item with the middle layer of the triangle.": "Bir \u00f6\u011feyi \u00fc\u00e7genin orta katman\u0131yla ili\u015fkilendirmek i\u00e7in bu b\u00f6lgeyi kullan\u0131n.",
    "Use this zone to associate an item with the top layer of the triangle.": "Bir \u00f6\u011feyi \u00fc\u00e7genin \u00fcst katman\u0131yla ili\u015fkilendirmek i\u00e7in bu b\u00f6lgeyi kullan\u0131n.",
    "You can complete this problem using only your keyboard by following the guidance below:": "A\u015fa\u011f\u0131daki y\u00f6nergeleri izleyerek yaln\u0131zca klavyenizi kullanarak bu sorunu \u00e7\u00f6zebilirsiniz:",
    "You cannot add any more items to this zone.": "Bu b\u00f6lgeye daha fazla \u00f6\u011fe ekleyemezsiniz.",
    "You have used {used} of {total} attempts.": "{used} of {total} denemesini kulland\u0131n\u0131z.",
    "You silly, there are no zones for this one.": "Seni aptal, bunun i\u00e7in b\u00f6lge yok.",
    "Your highest score is {score}": "En y\u00fcksek puan\u0131n\u0131z {score}",
    "Zone Layout": "B\u00f6lge D\u00fczeni",
    "Zone Size": "B\u00f6lge Boyutu",
    "Zone borders": "B\u00f6lge s\u0131n\u0131rlar\u0131",
    "Zone definitions": "B\u00f6lge tan\u0131mlar\u0131",
    "Zone height": "B\u00f6lge y\u00fcksekli\u011fi",
    "Zone labels": "B\u00f6lge etiketleri",
    "Zone width": "B\u00f6lge geni\u015fli\u011fi",
    "Zone {num}": [
      "B\u00f6lge {num}",
      "B\u00f6lge {num}"
    ],
    "Zones": "B\u00f6lgeler",
    "do_attempt handler should only be called for assessment mode": "do_attempt i\u015fleyicisi yaln\u0131zca de\u011ferlendirme modu i\u00e7in \u00e7a\u011fr\u0131lmal\u0131d\u0131r",
    "droppable": "b\u0131rak\u0131labilir",
    "show_answer handler should only be called for assessment mode": "show_answer i\u015fleyicisi yaln\u0131zca de\u011ferlendirme modu i\u00e7in \u00e7a\u011fr\u0131lmal\u0131d\u0131r",
    "{earned}/{possible} point (graded)": [
      "{earned} / {possible} puan\u0131 (derecelendirilmi\u015f)",
      "{earned} / {possible} puan (derecelendirilmi\u015f)"
    ],
    "{earned}/{possible} point (ungraded)": [
      "{earned} / {possible} puan\u0131 (notland\u0131r\u0131lmam\u0131\u015f)",
      "{earned} / {possible} puan (not verilmemi\u015f)"
    ],
    "{possible} point possible (graded)": [
      "{possible} puan m\u00fcmk\u00fcn (derecelendirildi)",
      "{possible} puan m\u00fcmk\u00fcn (derecelendirildi)"
    ],
    "{possible} point possible (ungraded)": [
      "{possible} puan m\u00fcmk\u00fcn (notland\u0131r\u0131lmam\u0131\u015f)",
      "{possible} puan m\u00fcmk\u00fcn (not verilmemi\u015f)"
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
                DragAndDropI18N.init();
                global.DragAndDropI18N = DragAndDropI18N;
            }(this));
        