
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
    "&lt; Related resources": "&lt; Verwandte Ressourcen",
    "A resource was clicked": "Auf eine Ressource wurde geklickt",
    "Add new resource": "Neue Ressource hinzuf\u00fcgen",
    "Add new resource &gt;&gt;": "Neue Ressource hinzuf\u00fcgen &gt;&gt;",
    "Add resource": "Ressource hinzuf\u00fcgen",
    "Back to resource list mode": "Zur\u00fcck zum Ressourcenlistenmodus",
    "Check the icon to endorse this resource": "Klicken Sie auf das Symbol, um diese Ressource zu unterst\u00fctzen",
    "Click to view resources for removal": "Klicken Sie hier, um Ressourcen zum Entfernen anzuzeigen",
    "Click to view resources in ordinary decreasing-vote order": "Klicken Sie hier, um die Ressourcen in der normalen Reihenfolge absteigender Stimmen anzuzeigen",
    "Configuration setting": "Konfigurationseinstellung",
    "Cut-and-paste the URL of the resource.": "Schneiden Sie die URL der Ressource aus und f\u00fcgen Sie sie ein.",
    "Delete this resource": "L\u00f6schen Sie diese Ressource",
    "Description": "Beschreibung",
    "Do you want to disable the UX functions which are under development?": "M\u00f6chten Sie die in der Entwicklung befindlichen UX-Funktionen deaktivieren?",
    "Do you want to take users on a little tour when they see the RecommenderXBlock first time?": "M\u00f6chten Sie Benutzer auf eine kleine Tour mitnehmen, wenn sie den RecommenderXBlock zum ersten Mal sehen?",
    "Download resources": "Laden Sie Ressourcen herunter",
    "Downvote if the resource is not helpful": "Stimmen Sie ab, wenn die Ressource nicht hilfreich ist",
    "Edit existing resource": "Bearbeiten Sie die vorhandene Ressource",
    "Edit the resource and make it more helpful for other students with this problem. Please do not give the answer directly.": "Bearbeiten Sie die Ressource und machen Sie sie f\u00fcr andere Sch\u00fcler mit diesem Problem hilfreicher. Bitte geben Sie die Antwort nicht direkt.",
    "Edit this resource": "Bearbeiten Sie diese Ressource",
    "Endorse Resource": "Ressource unterst\u00fctzen",
    "Endorse resource": "Ressource unterst\u00fctzen",
    "Endorse resource without permission": "Ressource ohne Erlaubnis unterst\u00fctzen",
    "Endorse this resource and give the reason why you do that.": "Unterst\u00fctzen Sie diese Ressource und geben Sie den Grund an, warum Sie das tun.",
    "Entering add resource mode": "Der Modus zum Hinzuf\u00fcgen von Ressourcen wird aufgerufen",
    "Entering edit resource mode": "Aufruf des Ressourcenbearbeitungsmodus",
    "Entering flag resource mode": "Eintritt in den Flag-Ressourcenmodus",
    "Entering import resource mode": "Aufruf des Ressourcenimportmodus",
    "Export resources": "Ressourcen exportieren",
    "Flag Resource": "Flag-Ressource",
    "Flag resource": "Flag-Ressource",
    "Flag this resource as problematic and give your reason": "Markieren Sie diese Ressource als problematisch und geben Sie Ihren Grund an",
    "From page {fromPage} To page {toPage}": "Von der Seite {fromPage} zur Seite {toPage}",
    "Give a meaningful reason for why this resource should be removed": "Geben Sie einen aussagekr\u00e4ftigen Grund an, warum diese Ressource entfernt werden sollte",
    "Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title": "Geben Sie einen Absatz mit einer Zusammenfassung der Ressource an. Die Zusammenfassung sollte detaillierter sein, als Sie im Titel angegeben haben",
    "Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them": "Geben Sie eine kurze (1-3 S\u00e4tze) Zusammenfassung der Ressource; Im Idealfall sollte dies pr\u00e4gnant sein, aber gen\u00fcgend Details enthalten, damit die Sch\u00fcler wissen, ob diese Ressource f\u00fcr sie n\u00fctzlich ist",
    "Go back to the main list": "Gehen Sie zur\u00fcck zur Hauptliste",
    "Here is a list of reasons why students think this resource problematic:": "Hier ist eine Liste von Gr\u00fcnden, warum Studierende diese Ressource f\u00fcr problematisch halten:",
    "Hide related resources": "Verstecken Sie verwandte Ressourcen",
    "Hide the recommendations list": "Blenden Sie die Empfehlungsliste aus",
    "Hovering resource": "Schwebende Ressource",
    "How many page icons in pagination control (i.e., page range)? The icons for pages from (current page - page range) to (current page + page range) will be shown.": "Wie viele Seitensymbole gibt es in der Paginierungssteuerung (z. B. Seitenbereich)? Die Symbole f\u00fcr die Seiten von (aktuelle Seite \u2013 Seitenbereich) bis (aktuelle Seite + Seitenbereich) werden angezeigt.",
    "How many resources you want to show in each page of the resource list?": "Wie viele Ressourcen m\u00f6chten Sie auf jeder Seite der Ressourcenliste anzeigen?",
    "Import resources": "Importieren Sie Ressourcen",
    "Invalid location URL provided": "Ung\u00fcltige Standort-URL angegeben",
    "Location": "Ort",
    "No": "Nein",
    "Only staff can import resources": "Nur Mitarbeiter k\u00f6nnen Ressourcen importieren",
    "Please submit the JSON file obtained with the download resources button": "Bitte \u00fcbermitteln Sie die JSON-Datei, die Sie \u00fcber die Schaltfl\u00e4che \u201eRessourcen herunterladen\u201c erhalten haben",
    "Preview image (typically, a screenshot)": "Vorschaubild (normalerweise ein Screenshot)",
    "Preview screenshot:": "Vorschau-Screenshot:",
    "Provide a file of resource list in JSON format": "Stellen Sie eine Datei mit einer Ressourcenliste im JSON-Format bereit",
    "Provide a file of resource screenshot": "Stellen Sie eine Datei mit einem Ressourcen-Screenshot bereit",
    "Provide a meaningful description so other students know whether this is useful to them": "Geben Sie eine aussagekr\u00e4ftige Beschreibung an, damit andere Studierende wissen, ob dies f\u00fcr sie n\u00fctzlich ist",
    "Provide a meaningful title so other students know whether this is useful to them": "Geben Sie einen aussagekr\u00e4ftigen Titel an, damit andere Studierende wissen, ob dieser f\u00fcr sie n\u00fctzlich ist",
    "Provide a resource description": "Geben Sie eine Ressourcenbeschreibung an",
    "Provide a resource location in url, required": "Geben Sie einen Ressourcenstandort in der URL an (erforderlich).",
    "Provide a resource screenshot": "Stellen Sie einen Ressourcen-Screenshot bereit",
    "Provide a resource title, required": "Geben Sie einen Ressourcentitel an (erforderlich).",
    "Reason": "Grund",
    "Reason for why this resource should be endorsed": "Grund, warum diese Ressource empfohlen werden sollte",
    "Reason for why this resource should be flagged": "Grund, warum diese Ressource gekennzeichnet werden sollte",
    "Reason for why this resource should be removed": "Grund, warum diese Ressource entfernt werden sollte",
    "Recommend a new resource which may be helpful to other students solving this problem": "Empfehlen Sie eine neue Ressource, die anderen Sch\u00fclern bei der L\u00f6sung dieses Problems hilfreich sein kann",
    "Remove Resource": "Ressource entfernen",
    "Remove resource": "Ressource entfernen",
    "Remove this resource and give the reason why you do that": "Entfernen Sie diese Ressource und geben Sie den Grund an, warum Sie das tun",
    "Remove this resource and give the reason why you do that.": "Entfernen Sie diese Ressource und geben Sie den Grund an, warum Sie das tun.",
    "Resource title": "Ressourcentitel",
    "Resource: ": "Ressource: ",
    "Resources (in JSON format):": "Ressourcen (im JSON-Format):",
    "Save change": "\u00c4nderungen speichern",
    "Set the student-view, client side configurations for RecommenderXblock.": "Legen Sie die clientseitigen Konfigurationen f\u00fcr die Studentenansicht f\u00fcr RecommenderXblock fest.",
    "Show a list of student-recommented related resources": "Zeigen Sie eine Liste der von Sch\u00fclern empfohlenen verwandten Ressourcen an",
    "Show related resources": "Verwandte Ressourcen anzeigen",
    "Size of uploaded file exceeds threshold": "Die Gr\u00f6\u00dfe der hochgeladenen Datei \u00fcberschreitet den Schwellenwert",
    "Suggest a resource which can help other students with this problem. Please do not give the answer directly.": "Schlagen Sie eine Ressource vor, die anderen Sch\u00fclern bei diesem Problem helfen kann. Bitte geben Sie die Antwort nicht direkt.",
    "Suggest resource": "Ressource vorschlagen",
    "The configuration of pyfs is not properly set": "Die Konfiguration von pyfs ist nicht richtig eingestellt",
    "The content you typed has not been submitted yet. Are you sure to go back?": "Der von Ihnen eingegebene Inhalt wurde noch nicht \u00fcbermittelt. Bist du sicher, dass du zur\u00fcckkommst?",
    "The reason why it is endorsed is:": "Der Grund f\u00fcr die Bef\u00fcrwortung ist:",
    "The resource you are attempting to provide already exists": "Die Ressource, die Sie bereitzustellen versuchen, ist bereits vorhanden",
    "The resource you are attempting to provide has been disallowed by the staff. Reason: ": "Die Ressource, die Sie bereitstellen m\u00f6chten, wurde vom Personal abgelehnt. Grund: ",
    "The selected resource does not exist": "Die ausgew\u00e4hlte Ressource existiert nicht",
    "This is a list of recommended resources. If you\\": "Dies ist eine Liste empfohlener Ressourcen. Wenn du\\",
    "This is a list of resources your fellow students thought might be helpful. If you find another useful resource, either on edx.org or elsewhere, please add it. If you can improve the description or preview of a resource, please do so as well. If you find a resource helpful, upvote it. If it&rsquo;s not so helpful, downvote it. If it has issues (illegal material, incorrect, etc.), please flag it and let us know the reason.": "Dies ist eine Liste von Ressourcen, die Ihrer Meinung nach hilfreich sein k\u00f6nnten. Wenn Sie auf edx.org oder anderswo eine weitere n\u00fctzliche Ressource finden, f\u00fcgen Sie diese bitte hinzu. Wenn Sie die Beschreibung oder Vorschau einer Ressource verbessern k\u00f6nnen, tun Sie dies bitte ebenfalls. Wenn Sie eine Ressource hilfreich finden, stimmen Sie ihr zu. Wenn es nicht so hilfreich ist, stimmen Sie es ab. Wenn es Probleme gibt (illegales Material, falsch usw.), melden Sie es bitte und teilen Sie uns den Grund mit.",
    "This resource is endorsed by staff": "Diese Ressource wird von den Mitarbeitern empfohlen",
    "This will be a list of resources your fellow students thought might be helpful, but it is empty currently. If you find useful resources, either on edx.org or elsewhere, please add it.": "Dabei handelt es sich um eine Liste mit Ressourcen, von denen Ihre Kommilitonen dachten, dass sie hilfreich sein k\u00f6nnten. Derzeit ist sie jedoch leer. Wenn Sie auf edx.org oder anderswo n\u00fctzliche Ressourcen finden, f\u00fcgen Sie diese bitte hinzu.",
    "Title": "Titel",
    "Tried to access flagged resources without staff permission": "Es wurde versucht, ohne Erlaubnis des Personals auf markierte Ressourcen zuzugreifen",
    "Unendorse resource": "Ressource nicht unterst\u00fctzen",
    "Unflag resource": "Markierung der Ressource aufheben",
    "Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them": "Laden Sie einen Vorschau-Screenshot (in GIF/PNG/JPG) der Ressource hoch; Im Idealfall sollten die Sch\u00fcler dadurch wissen, ob diese Ressource f\u00fcr sie n\u00fctzlich ist",
    "Upload resources": "Laden Sie Ressourcen hoch",
    "Upload resources in JSON format to the database.": "Laden Sie Ressourcen im JSON-Format in die Datenbank hoch.",
    "Upvote if the resource is helpful": "Stimmen Sie zu, wenn die Ressource hilfreich ist",
    "Votes": "Stimmen",
    "Why would you like to flag this resource? The staff will review all flagged resources, and remove inappropriate ones (spam, incorrect, abusive, etc.). Giving a clear reason will help us do this efficiently.": "Warum m\u00f6chten Sie diese Ressource kennzeichnen? Das Personal \u00fcberpr\u00fcft alle gekennzeichneten Ressourcen und entfernt unangemessene Ressourcen (Spam, falsch, beleidigend usw.). Die Angabe einer klaren Begr\u00fcndung wird uns dabei helfen, dies effizient zu erledigen.",
    "Yes": "Ja",
    "You don't have the permission to remove this resource": "Sie haben nicht die Berechtigung, diese Ressource zu entfernen",
    "cancel and go back to resource list": "Abbrechen und zur Ressourcenliste zur\u00fcckkehren",
    "mode": "Modus",
    "votes": "Stimmen"
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
      "%d.%m.%y",
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
        