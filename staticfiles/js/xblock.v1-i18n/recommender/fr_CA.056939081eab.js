
            (function(global){
                var RecommenderXBlockI18N = {
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
    "&lt; Related resources": "&lt; Ressources connexes",
    "A resource was clicked": "Une ressource a \u00e9t\u00e9 cliqu\u00e9e",
    "Add new resource": "Ajouter une nouvelle ressource",
    "Add new resource &gt;&gt;": "Ajouter une nouvelle ressource &gt;&gt;",
    "Add resource": "Ajouter une ressource",
    "Back to resource list mode": "Retour au mode liste de ressources",
    "Check the icon to endorse this resource": "Cochez l'ic\u00f4ne pour approuver cette ressource",
    "Click to view resources for removal": "Cliquez pour afficher les ressources pour la suppression",
    "Click to view resources in ordinary decreasing-vote order": "Cliquez pour afficher les ressources dans l'ordre ordinaire des votes d\u00e9croissants",
    "Configuration setting": "Param\u00e8tre de configuration",
    "Cut-and-paste the URL of the resource.": "Coupez et collez l'URL de la ressource.",
    "Delete this resource": "Supprimer cette ressource",
    "Description": "Description",
    "Do you want to disable the UX functions which are under development?": "Vous souhaitez d\u00e9sactiver les fonctions UX en cours de d\u00e9veloppement?",
    "Do you want to take users on a little tour when they see the RecommenderXBlock first time?": "Voulez-vous faire une petite visite aux utilisateurs lorsqu\u2019ils voient le RecommenderXBlock pour la premi\u00e8re fois?",
    "Download resources": "T\u00e9l\u00e9charger les ressources",
    "Downvote if the resource is not helpful": "Votez contre si la ressource n'est pas utile",
    "Edit existing resource": "Modifier une ressource existante",
    "Edit the resource and make it more helpful for other students with this problem. Please do not give the answer directly.": "Modifiez la ressource et rendez-la plus utile aux autres \u00e9tudiants confront\u00e9s \u00e0 ce probl\u00e8me. Merci de ne pas donner la r\u00e9ponse directement.",
    "Edit this resource": "Modifier cette ressource",
    "Endorse Resource": "Approuver la ressource",
    "Endorse resource": "Approuver la ressource",
    "Endorse resource without permission": "Approuver la ressource sans autorisation",
    "Endorse this resource and give the reason why you do that.": "Approuvez cette ressource et donnez la raison pour laquelle vous le faites.",
    "Entering add resource mode": "Passer en mode d'ajout de ressources",
    "Entering edit resource mode": "Passer en mode \u00e9dition de ressource",
    "Entering flag resource mode": "Passage en mode de signalement de ressource",
    "Entering import resource mode": "Passage en mode d'importation de ressources",
    "Export resources": "Exporter des ressources",
    "Flag Resource": "Signaler une ressource",
    "Flag resource": "Signalement de la ressource",
    "Flag this resource as problematic and give your reason": "Signalez cette ressource comme probl\u00e9matique et donnez votre raison",
    "From page {fromPage} To page {toPage}": "De la page {fromPage} \u00e0 la page {toPage}",
    "Give a meaningful reason for why this resource should be removed": "Donnez une raison significative pour laquelle cette ressource doit \u00eatre supprim\u00e9e",
    "Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title": "Donner un paragraphe de r\u00e9sum\u00e9 de la ressource ; le r\u00e9sum\u00e9 doit \u00eatre plus d\u00e9taill\u00e9 que ce que vous avez donn\u00e9 dans le titre",
    "Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them": "Donnez un bref r\u00e9sum\u00e9 (1 \u00e0 3 phrases) de la ressource ; id\u00e9alement, cela devrait \u00eatre concis, mais donner suffisamment de d\u00e9tails pour permettre aux \u00e9tudiants de savoir si cette ressource leur est utile",
    "Go back to the main list": "Revenir \u00e0 la liste principale",
    "Here is a list of reasons why students think this resource problematic:": "Voici une liste de raisons pour lesquelles les \u00e9tudiants pensent que cette ressource pose probl\u00e8me :",
    "Hide related resources": "Masquer les ressources associ\u00e9es",
    "Hide the recommendations list": "Masquer la liste des recommandations",
    "Hovering resource": "Survol de la ressource",
    "How many page icons in pagination control (i.e., page range)? The icons for pages from (current page - page range) to (current page + page range) will be shown.": "Combien d'ic\u00f4nes de page dans le contr\u00f4le de pagination (c'est-\u00e0-dire, plage de pages)? Les ic\u00f4nes des pages de (page actuelle - plage de pages) \u00e0 (page actuelle + plage de pages) seront affich\u00e9es.",
    "How many resources you want to show in each page of the resource list?": "Combien de ressources souhaitez-vous afficher sur chaque page de la liste des ressources?",
    "Import resources": "Importer des ressources",
    "Invalid location URL provided": "URL de localisation fournie non valide",
    "Location": "Emplacement",
    "No": "Non",
    "Only staff can import resources": "Seul le personnel peut importer des ressources",
    "Please submit the JSON file obtained with the download resources button": "Veuillez soumettre le fichier JSON obtenu avec le bouton de t\u00e9l\u00e9chargement des ressources",
    "Preview image (typically, a screenshot)": "Image d'aper\u00e7u (g\u00e9n\u00e9ralement, une capture d'\u00e9cran)",
    "Preview screenshot:": "Aper\u00e7u de la capture d'\u00e9cran :",
    "Provide a file of resource list in JSON format": "Fournir un fichier de liste de ressources au format JSON",
    "Provide a file of resource screenshot": "Fournir un fichier de capture d'\u00e9cran de la ressource",
    "Provide a meaningful description so other students know whether this is useful to them": "Fournissez une description significative afin que les autres \u00e9tudiants sachent si cela leur est utile",
    "Provide a meaningful title so other students know whether this is useful to them": "Fournissez un titre significatif pour que les autres \u00e9tudiants sachent si cela leur est utile",
    "Provide a resource description": "Fournir une description de la ressource",
    "Provide a resource location in url, required": "Fournir un URL de l'emplacement de la ressource, obligatoire",
    "Provide a resource screenshot": "Fournir une capture d'\u00e9cran de la ressource",
    "Provide a resource title, required": "Fournir un titre de ressource, obligatoire",
    "Reason": "Raison",
    "Reason for why this resource should be endorsed": "Raison pour laquelle cette ressource devrait \u00eatre approuv\u00e9e",
    "Reason for why this resource should be flagged": "Raison pour laquelle cette ressource devrait \u00eatre signal\u00e9e",
    "Reason for why this resource should be removed": "Raison pour laquelle cette ressource devrait \u00eatre supprim\u00e9e",
    "Recommend a new resource which may be helpful to other students solving this problem": "Recommander une nouvelle ressource qui pourrait \u00eatre utile \u00e0 d'autres \u00e9tudiants pour r\u00e9soudre ce probl\u00e8me",
    "Remove Resource": "Supprimer la ressource",
    "Remove resource": "Supprimer la ressource",
    "Remove this resource and give the reason why you do that": "Supprimez cette ressource et donnez la raison pour laquelle vous faites cela",
    "Remove this resource and give the reason why you do that.": "Supprimez cette ressource et donnez la raison pour laquelle vous le faites.",
    "Resource title": "Titre de la ressource",
    "Resource: ": "Ressource :",
    "Resources (in JSON format):": "Ressources (au format JSON)\u00a0:",
    "Save change": "Sauvegarder les modifications",
    "Set the student-view, client side configurations for RecommenderXblock.": "D\u00e9finissez les configurations c\u00f4t\u00e9 client, vue \u00e9tudiant, pour RecommenderXblock.",
    "Show a list of student-recommented related resources": "Afficher une liste de ressources connexes recommand\u00e9es par les \u00e9tudiants",
    "Show related resources": "Afficher les ressources associ\u00e9es",
    "Size of uploaded file exceeds threshold": "La taille du fichier t\u00e9l\u00e9charg\u00e9 d\u00e9passe le seuil",
    "Suggest a resource which can help other students with this problem. Please do not give the answer directly.": "Sugg\u00e9rez une ressource qui peut aider d\u2019autres \u00e9l\u00e8ves \u00e0 r\u00e9soudre ce probl\u00e8me. Merci de ne pas donner la r\u00e9ponse directement.",
    "Suggest resource": "Sugg\u00e9rer une ressource",
    "The configuration of pyfs is not properly set": "La configuration de pyfs n'est pas correctement d\u00e9finie",
    "The content you typed has not been submitted yet. Are you sure to go back?": "Le contenu que vous avez saisi n'a pas encore \u00e9t\u00e9 soumis. Etes-vous certain de vouloir y retourner ?",
    "The reason why it is endorsed is:": "La raison pour laquelle c'est approuv\u00e9 est la suivante:",
    "The resource you are attempting to provide already exists": "La ressource que vous essayez de fournir existe d\u00e9j\u00e0",
    "The resource you are attempting to provide has been disallowed by the staff. Reason: ": "La ressource que vous essayez de fournir a \u00e9t\u00e9 refus\u00e9e par le personnel. Raison :",
    "The selected resource does not exist": "La ressource s\u00e9lectionn\u00e9e n'existe pas",
    "This is a list of recommended resources. If you\\": "Ceci est une liste de ressources recommand\u00e9es. Si vous\\",
    "This is a list of resources your fellow students thought might be helpful. If you find another useful resource, either on edx.org or elsewhere, please add it. If you can improve the description or preview of a resource, please do so as well. If you find a resource helpful, upvote it. If it&rsquo;s not so helpful, downvote it. If it has issues (illegal material, incorrect, etc.), please flag it and let us know the reason.": "Il s'agit d'une liste de ressources qui, selon vos camarades \u00e9tudiants, pourraient \u00eatre utiles. Si vous trouvez une autre ressource utile, que ce soit sur edx.org ou ailleurs, veuillez l'ajouter. Si vous pouvez am\u00e9liorer la description ou l\u2019aper\u00e7u d\u2019une ressource, faites-le \u00e9galement. Si vous trouvez une ressource utile, votez pour elle. Si ce n'est pas si utile, votez contre. Si elle pr\u00e9sente des probl\u00e8mes (mat\u00e9riel ill\u00e9gal, incorrect, etc.), veuillez le signaler et nous en indiquer la raison.",
    "This resource is endorsed by staff": "Cette ressource est approuv\u00e9e par le personnel",
    "This will be a list of resources your fellow students thought might be helpful, but it is empty currently. If you find useful resources, either on edx.org or elsewhere, please add it.": "Il s'agira d'une liste de ressources que vos camarades \u00e9tudiants ont jug\u00e9es utiles, mais elle est actuellement vide. Si vous trouvez des ressources utiles, que ce soit sur edx.org ou ailleurs, veuillez les ajouter.",
    "Title": "Titre",
    "Tried to access flagged resources without staff permission": "Vous avez essay\u00e9 d'acc\u00e9der aux ressources signal\u00e9es sans l'autorisation du personnel",
    "Unendorse resource": "Annuler l'approbation de la ressource",
    "Unflag resource": "Annuler le signalement de la ressource",
    "Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them": "T\u00e9l\u00e9chargez un aper\u00e7u d'une capture d'\u00e9cran (au format GIF/PNG/JPG) de la ressource ; id\u00e9alement, cela devrait permettre aux \u00e9tudiants de savoir si cette ressource leur est utile",
    "Upload resources": "T\u00e9l\u00e9verser des ressources",
    "Upload resources in JSON format to the database.": "T\u00e9l\u00e9chargez des ressources au format JSON dans la base de donn\u00e9es.",
    "Upvote if the resource is helpful": "Votez pour si la ressource est utile",
    "Votes": "Votes",
    "Why would you like to flag this resource? The staff will review all flagged resources, and remove inappropriate ones (spam, incorrect, abusive, etc.). Giving a clear reason will help us do this efficiently.": "Pourquoi souhaitez-vous signaler cette ressource ? Le personnel examinera toutes les ressources signal\u00e9es et supprimera celles qui sont inappropri\u00e9es (spam, incorrectes, abusives, etc.). Donner une raison claire pour nous aider \u00e0 le faire efficacement.",
    "Yes": "Oui",
    "You don't have the permission to remove this resource": "Vous n'\u00eates pas autoris\u00e9 \u00e0 supprimer cette ressource",
    "cancel and go back to resource list": "annuler et revenir \u00e0 la liste des ressources",
    "mode": "mode",
    "votes": "votes"
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
                RecommenderXBlockI18N.init();
                global.RecommenderXBlockI18N = RecommenderXBlockI18N;
            }(this));
        