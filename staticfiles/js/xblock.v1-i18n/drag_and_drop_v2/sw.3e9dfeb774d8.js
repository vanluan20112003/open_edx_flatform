
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
    "\n                            Please provide a description of the image for non-visual users.\n                            The description should provide sufficient information to allow anyone\n                            to solve the problem even without seeing the image.\n                        ": "\nTafadhali toa maelezo ya picha kwa watumiaji wasioona.\n Maelezo yanapaswa kutoa maelezo ya kutosha ili kuruhusu mtu yeyote\n kutatua tatizo hata bila kuona picha.\n                        ",
    "(inherited from Advanced Settings)": "(imerithiwa kutoka kwa Mipangilio ya Kina)",
    ", draggable": ", ya kuburuzwa",
    ", draggable, grabbed": ", inayoweza kuvutwa, kunyakuliwa",
    ", dropzone": ", eneo la kushuka",
    "Actions": "Vitendo",
    "Add a zone": "Ongeza eneo",
    "Add an item": "Ongeza kipengee",
    "After All Attempts": "Baada ya Majaribio Yote",
    "After All Attempts or Correct": "Baada ya Majaribio Yote au Sahihi",
    "Always": "Kila mara",
    "An error occurred. Unable to load drag and drop problem.": "Hitilafu imetokea. Imeshindwa kupakia tatizo la kuvuta na kuacha.",
    "An isosceles triangle with three layers of similar height. It is shown upright, so the widest layer is located at the bottom, and the narrowest layer is located at the top.": "Pembetatu ya isosceles yenye tabaka tatu za urefu sawa. Inaonyeshwa kwa wima, kwa hivyo safu pana zaidi iko chini, na safu nyembamba iko juu.",
    "Answered": "Akajibu",
    "Assessment": "Tathmini",
    "Attempted": "Imejaribu",
    "Attempted or Past Due": "Jaribio au Muda Uliopita",
    "Background Image": "Picha ya Mandharinyuma",
    "Background URL": "URL ya usuli",
    "Background description": "Maelezo ya usuli",
    "Basic Settings": "Mipangilio ya Msingi",
    "Cancel": "Ghairi",
    "Change background": "Badilisha usuli",
    "Close": "Funga",
    "Closed": "Imefungwa",
    "Continue": "Endelea",
    "Correct": "Sahihi",
    "Correct or Past Due": "Malipo Sahihi au Iliyopita",
    "Correct! This one belongs to The Bottom Zone.": "Sahihi! Hii ni ya The Bottom Zone.",
    "Correct! This one belongs to The Middle Zone.": "Sahihi! Hii ni ya Ukanda wa Kati.",
    "Correct! This one belongs to The Top Zone.": "Sahihi! Hii ni ya The Top Zone.",
    "Correctly placed in: {zone_title}": "Imewekwa kwa usahihi katika: {zone_title}",
    "Correctly placed {correct_count} item": [
      "Imewekwa kwa usahihi kipengee cha {correct_count}",
      "Vipengee vilivyowekwa kwa usahihi {correct_count}"
    ],
    "DEPRECATED. Keeps maximum score achieved by student as a weighted value.": "IMEACHWA. Huweka alama za juu zaidi zinazopatikana na mwanafunzi kama thamani iliyopimwa.",
    "Default": "Chaguomsingi",
    "Defines the number of points the problem is worth.": "Inafafanua idadi ya pointi tatizo linafaa.",
    "Defines the number of times a student can try to answer this problem. If the value is not set, infinite attempts are allowed.": "Inafafanua idadi ya mara ambazo mwanafunzi anaweza kujaribu kujibu tatizo hili. Ikiwa thamani haijawekwa, majaribio yasiyo na kikomo yanaruhusiwa.",
    "Defines when to show the answer to the problem. A default value can be set in Advanced Settings. To revert setting a custom value, choose the 'Default' option.": "Inafafanua wakati wa kuonyesha jibu la tatizo. Thamani chaguo-msingi inaweza kuwekwa katika Mipangilio ya Kina. Ili kurejesha kuweka thamani maalum, chagua chaguo la &#39;Chaguo-msingi&#39;.",
    "Did not place {missing_count} required item": [
      "Haikuweka kipengee kinachohitajika cha {missing_count}",
      "Haikuweka {missing_count} vitu vinavyohitajika"
    ],
    "Display label names on the image": "Onyesha majina ya lebo kwenye picha",
    "Display the heading \"Problem\" above the problem text?": "Onyesha kichwa &quot;Tatizo&quot; juu ya maandishi ya tatizo?",
    "Display the title to the learner?": "Onyesha kichwa kwa mwanafunzi?",
    "Display zone borders on the image": "Onyesha mipaka ya eneo kwenye picha",
    "Display zone borders when dragging an item": "Onyesha mipaka ya eneo unapoburuta kipengee",
    "Drag and Drop": "Buruta na Achia",
    "Drag and Drop Problem": "Buruta na Achia Tatizo",
    "Drag and Drop problems consist of draggable items and dropzones. Users should select a draggable item with their keyboard and then navigate to an appropriate dropzone to drop it.": "Matatizo ya Buruta na Achia yanajumuisha vipengee vinavyoweza kukokotwa na maeneo ya kudondosha. Watumiaji wanapaswa kuchagua kipengee kinachoweza kukokotwa na kibodi yao kisha waelekeze kwenye eneo linalofaa kudondosha ili kuiangusha.",
    "Drag the items onto the image above.": "Buruta vipengee kwenye picha iliyo hapo juu.",
    "Drop Targets": "Acha Malengo",
    "Explanation": "Maelezo",
    "Explanation Text": "Maandishi ya Maelezo",
    "Feedback": "Maoni",
    "Final attempt was used, highest score is {score}": "Jaribio la mwisho lilitumika, alama ya juu zaidi ni {score}",
    "Final feedback": "Maoni ya mwisho",
    "Finished": "Imekamilika",
    "For example, 'http://example.com/background.png' or '/static/background.png'.": "Kwa mfano, &#39;http://example.com/background.png&#39; au &#39;/static/background.png&#39;.",
    "Generate image and zones": "Tengeneza picha na kanda",
    "Generate image automatically": "Tengeneza picha kiotomatiki",
    "Go to Beginning": "Nenda kwa Mwanzo",
    "Goes anywhere": "Huenda popote",
    "Goes to the bottom": "Inakwenda chini",
    "Goes to the middle": "Inakwenda katikati",
    "Goes to the top": "Inakwenda juu",
    "Good work! You have completed this drag and drop problem.": "Kazi nzuri! Umekamilisha tatizo hili la kuvuta na kuacha.",
    "Hints:": "Vidokezo:",
    "I don't belong anywhere": "mimi si mali popote",
    "Incorrect": "Si sahihi",
    "Indicates whether a learner has completed the problem at least once": "Inaonyesha kama mwanafunzi amemaliza tatizo angalau mara moja",
    "Information about current positions of items that a learner has dropped on the target image.": "Taarifa kuhusu nafasi za sasa za vitu ambazo mwanafunzi amedondosha kwenye picha inayolengwa.",
    "Information about zones, items, feedback, explanation and background image for this problem. This information is derived from the input that a course author provides via the interactive editor when configuring the problem.": "Taarifa kuhusu maeneo, vipengee, maoni, maelezo na picha ya usuli ya tatizo hili. Maelezo haya yanatokana na ingizo ambalo mwandishi wa kozi hutoa kupitia kihariri shirikishi wakati wa kusanidi tatizo.",
    "Introductory feedback": "Maoni ya utangulizi",
    "Item Bank": "Benki ya bidhaa",
    "Item background color": "Rangi ya mandharinyuma ya kipengee",
    "Item definitions": "Ufafanuzi wa vitu",
    "Item text color": "Rangi ya maandishi ya kipengee",
    "Items": "Vipengee",
    "Items placed here: ": "Vipengee vilivyowekwa hapa: ",
    "Keeps maximum score achieved by student as a raw value between 0 and 1.": "Huhifadhi alama za juu zaidi zinazopatikana na mwanafunzi kama thamani ghafi kati ya 0 na 1.",
    "Keyboard Help": "Usaidizi wa Kibodi",
    "Loading drag and drop problem.": "Inapakia tatizo la kuvuta na kuacha.",
    "Max number of attempts reached": "Idadi ya juu zaidi ya majaribio imefikiwa",
    "Maximum attempts": "Upeo wa majaribio",
    "Maximum items per zone": "Vipengee vya juu zaidi kwa kila eneo",
    "Maximum score available of the problem as a raw value between 0 and 1.": "Upeo wa alama unaopatikana wa tatizo kama thamani ghafi kati ya 0 na 1.",
    "Misplaced {misplaced_count} item": [
      "Kipengee cha {misplaced_count} ambacho hakijawekwa sawa",
      "Vipengee {misplaced_count} vilivyopotea"
    ],
    "Misplaced {misplaced_count} item (misplaced item was returned to the item bank)": [
      "Kipengee cha {misplaced_count} kilichokosewa (kipengee kilichokosewa kilirejeshwa kwenye benki ya bidhaa)",
      "Vipengee vya {misplaced_count} vilivyokosewa (vitu vilivyokosewa vilirejeshwa kwenye benki ya bidhaa)"
    ],
    "Mode": "Hali",
    "Navigate using TAB and SHIFT+TAB to the appropriate dropzone and press CTRL+M once more to drop it here.": "Nenda kwa kutumia TAB na SHIFT+TAB hadi eneo linalofaa na ubonyeze CTRL+M kwa mara nyingine ili kuidondosha hapa.",
    "Never": "Kamwe",
    "No items placed here": "Hakuna vipengee vilivyowekwa hapa",
    "No, this item does not belong here. Try again.": "Hapana, kipengee hiki si cha hapa. Jaribu tena.",
    "Number of attempts learner used": "Idadi ya majaribio yaliyotumiwa na mwanafunzi",
    "Number of columns": "Idadi ya safu wima",
    "Number of columns and rows.": "Idadi ya safu wima na safu.",
    "Number of rows": "Idadi ya safu",
    "Of course it goes here! It goes anywhere!": "Bila shaka inakwenda hapa! Inaenda popote!",
    "Past Due": "Malipo Iliyopita",
    "Placed in: {zone_title}": "Imewekwa katika: {zone_title}",
    "Please check over your submission.": "Tafadhali angalia uwasilishaji wako.",
    "Please check the values you entered.": "Tafadhali angalia thamani ulizoweka.",
    "Press CTRL+M to select a draggable item (effectively picking it up).": "Bonyeza CTRL+M ili kuchagua kipengee kinachoweza kukokotwa (kinachoweza kukichukua).",
    "Press ESC if you want to cancel the drop operation (for example, to select a different item).": "Bonyeza ESC ikiwa unataka kughairi utendakazi wa kudondosha (kwa mfano, ili kuchagua kipengee tofauti).",
    "Problem": "Tatizo",
    "Problem Weight": "Tatizo Uzito",
    "Problem data": "Data ya tatizo",
    "Problem text": "Maandishi ya tatizo",
    "Provide custom image": "Toa picha maalum",
    "Reset": "Weka upya",
    "Save": "Hifadhi",
    "Saving": "Kuhifadhi",
    "Show \"Problem\" heading": "Onyesha kichwa cha &quot;Tatizo&quot;.",
    "Show Answer": "Onyesha Jibu",
    "Show answer": "Onyesha jibu",
    "Show title": "Onyesha kichwa",
    "Size of a single zone in pixels.": "Ukubwa wa eneo moja kwa saizi.",
    "Some of your answers were not correct.": "Baadhi ya majibu yako hayakuwa sahihi.",
    "Standard": "Kawaida",
    "Standard mode: the problem provides immediate feedback each time a learner drops an item on a target zone. Assessment mode: the problem provides feedback only after a learner drops all available items on target zones.": "Hali ya kawaida: tatizo hutoa maoni ya papo hapo kila wakati mwanafunzi anapodondosha kipengee kwenye eneo lengwa. Hali ya tathmini: tatizo hutoa maoni tu baada ya mwanafunzi kudondosha vitu vyote vinavyopatikana kwenye maeneo lengwa.",
    "Submission deadline has passed.": "Tarehe ya mwisho ya kuwasilisha imepita.",
    "Submit": "Wasilisha",
    "Submitting": "Inawasilisha",
    "TAB back to the list of draggable items and repeat this process until all of the draggable items have been placed on their respective dropzones.": "TAB rudi kwenye orodha ya vipengee vinavyoweza kuburutwa na urudie mchakato huu hadi vipengee vyote vinavyoweza kukokotwa viwekwe kwenye maeneo ya maeneo husika.",
    "Text color to use for draggable items (example: 'white' or '#ffffff').": "Rangi ya maandishi ya kutumia kwa vipengee vinavyoweza kukokotwa (mfano: &#39;nyeupe&#39; au &#39;#ffffff&#39;).",
    "The Bottom Zone": "Eneo la Chini",
    "The Middle Zone": "Eneo la Kati",
    "The Top Zone": "Eneo la Juu",
    "The answer is unavailable": "Jibu halipatikani",
    "The background color of draggable items in the problem (example: 'blue' or '#0000ff').": "Rangi ya mandharinyuma ya vipengee vinavyoweza kukokotwa kwenye tatizo (mfano: &#39;bluu&#39; au &#39;#0000ff&#39;).",
    "The description of the problem or instructions shown to the learner.": "Maelezo ya tatizo au maelekezo yaliyoonyeshwa kwa mwanafunzi.",
    "The title of the drag and drop problem. The title is displayed to learners.": "Kichwa cha tatizo la kuvuta na kuacha. Kichwa kinaonyeshwa kwa wanafunzi.",
    "There was an error with your form.": "Kulikuwa na hitilafu na fomu yako.",
    "This is a screen reader-friendly problem.": "Hili ni tatizo linalofaa kusoma skrini.",
    "This setting limits the number of items that can be dropped into a single zone.": "Mpangilio huu huweka kikomo idadi ya vipengee vinavyoweza kudondoshwa katika eneo moja.",
    "Title": "Kichwa",
    "Unknown DnDv2 mode {mode} - course is misconfigured": "Hali ya DnDv2 isiyojulikana {mode} - kozi haijasanidiwa vibaya",
    "Unknown Zone": "Eneo lisilojulikana",
    "Use only TAB and SHIFT+TAB to navigate between draggable items and drop zones.": "Tumia TAB na SHIFT+TAB pekee ili kusogeza kati ya vipengee vinavyoweza kukokotwa na kanda za kuacha.",
    "Use this zone to associate an item with the bottom layer of the triangle.": "Tumia eneo hili kuhusisha kipengee na safu ya chini ya pembetatu.",
    "Use this zone to associate an item with the middle layer of the triangle.": "Tumia eneo hili kuhusisha kipengee na safu ya kati ya pembetatu.",
    "Use this zone to associate an item with the top layer of the triangle.": "Tumia eneo hili kuhusisha kipengee na safu ya juu ya pembetatu.",
    "You can complete this problem using only your keyboard by following the guidance below:": "Unaweza kukamilisha tatizo hili kwa kutumia kibodi yako pekee kwa kufuata mwongozo ulio hapa chini:",
    "You cannot add any more items to this zone.": "Huwezi kuongeza vipengee vingine kwenye eneo hili.",
    "You have used {used} of {total} attempts.": "Umetumia {used} ya majaribio {total} .",
    "You silly, there are no zones for this one.": "Mpumbavu wewe, hakuna kanda za hii.",
    "Your highest score is {score}": "Alama yako ya juu zaidi ni {score}",
    "Zone Layout": "Mpangilio wa Eneo",
    "Zone Size": "Ukubwa wa Eneo",
    "Zone borders": "Mipaka ya eneo",
    "Zone definitions": "Ufafanuzi wa eneo",
    "Zone height": "Urefu wa eneo",
    "Zone labels": "Lebo za eneo",
    "Zone width": "Upana wa eneo",
    "Zone {num}": [
      "Eneo {num}",
      "Eneo {num}"
    ],
    "Zones": "Kanda",
    "do_attempt handler should only be called for assessment mode": "do_attempt handler inapaswa tu kuitwa kwa modi ya tathmini",
    "droppable": "inayoweza kushuka",
    "show_answer handler should only be called for assessment mode": "kidhibiti cha show_answer kinapaswa kuitwa tu kwa hali ya tathmini",
    "{earned}/{possible} point (graded)": [
      "{earned} / {possible} pointi (iliyopangwa)",
      "{earned} / {possible} pointi (zilizowekwa alama)"
    ],
    "{earned}/{possible} point (ungraded)": [
      "{earned} / {possible} uhakika (haijawekwa daraja)",
      "{earned} / {possible} pointi (hazijawekwa daraja)"
    ],
    "{possible} point possible (graded)": [
      "{possible} uhakika (iliyopangwa)",
      "{possible} pointi zinawezekana (zilizowekwa alama)"
    ],
    "{possible} point possible (ungraded)": [
      "{possible} uhakika (haijawekwa daraja)",
      "{possible} pointi zinawezekana (hazijawekwa daraja)"
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
                DragAndDropI18N.init();
                global.DragAndDropI18N = DragAndDropI18N;
            }(this));
        