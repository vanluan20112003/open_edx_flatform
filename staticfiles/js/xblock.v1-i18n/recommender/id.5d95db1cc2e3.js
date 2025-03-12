
            (function(global){
                var RecommenderXBlockI18N = {
                  init: function() {
                    

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = 0;
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "&lt; Related resources": "&lt; Related resources",
    "A resource was clicked": "A resource was clicked",
    "Add new resource": "Add new resource",
    "Add new resource &gt;&gt;": "Add new resource &gt;&gt;",
    "Add resource": "Add resource",
    "Back to resource list mode": "Back to resource list mode",
    "Check the icon to endorse this resource": "Check the icon to endorse this resource",
    "Click to view resources for removal": "Click to view resources for removal",
    "Click to view resources in ordinary decreasing-vote order": "Click to view resources in ordinary decreasing-vote order",
    "Configuration setting": "Configuration setting",
    "Cut-and-paste the URL of the resource.": "Cut-and-paste the URL of the resource.",
    "Delete this resource": "Delete this resource",
    "Description": "Description",
    "Do you want to disable the UX functions which are under development?": "Do you want to disable the UX functions which are under development?",
    "Do you want to take users on a little tour when they see the RecommenderXBlock first time?": "Do you want to take users on a little tour when they see the RecommenderXBlock first time?",
    "Download resources": "Download resources",
    "Downvote if the resource is not helpful": "Downvote if the resource is not helpful",
    "Edit existing resource": "Edit existing resource",
    "Edit the resource and make it more helpful for other students with this problem. Please do not give the answer directly.": "Edit the resource and make it more helpful for other students with this problem. Please do not give the answer directly.",
    "Edit this resource": "Edit this resource",
    "Endorse Resource": "Endorse Resource",
    "Endorse resource": "Endorse resource",
    "Endorse resource without permission": "Endorse resource without permission",
    "Endorse this resource and give the reason why you do that.": "Endorse this resource and give the reason why you do that.",
    "Entering add resource mode": "Entering add resource mode",
    "Entering edit resource mode": "Entering edit resource mode",
    "Entering flag resource mode": "Entering flag resource mode",
    "Entering import resource mode": "Entering import resource mode",
    "Export resources": "Export resources",
    "Flag Resource": "Flag Resource",
    "Flag resource": "Flag resource",
    "Flag this resource as problematic and give your reason": "Flag this resource as problematic and give your reason",
    "From page {fromPage} To page {toPage}": "From page {fromPage} To page {toPage}",
    "Give a meaningful reason for why this resource should be removed": "Give a meaningful reason for why this resource should be removed",
    "Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title": "Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title",
    "Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them": "Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them",
    "Go back to the main list": "Go back to the main list",
    "Here is a list of reasons why students think this resource problematic:": "Here is a list of reasons why students think this resource problematic:",
    "Hide related resources": "Hide related resources",
    "Hide the recommendations list": "Hide the recommendations list",
    "Hovering resource": "Hovering resource",
    "How many page icons in pagination control (i.e., page range)? The icons for pages from (current page - page range) to (current page + page range) will be shown.": "How many page icons in pagination control (i.e., page range)? The icons for pages from (current page - page range) to (current page + page range) will be shown.",
    "How many resources you want to show in each page of the resource list?": "How many resources you want to show in each page of the resource list?",
    "Import resources": "Import resources",
    "Invalid location URL provided": "Invalid location URL provided",
    "Location": "Location",
    "No": "No",
    "Only staff can import resources": "Only staff can import resources",
    "Please submit the JSON file obtained with the download resources button": "Please submit the JSON file obtained with the download resources button",
    "Preview image (typically, a screenshot)": "Preview image (typically, a screenshot)",
    "Preview screenshot:": "Preview screenshot:",
    "Provide a file of resource list in JSON format": "Provide a file of resource list in JSON format",
    "Provide a file of resource screenshot": "Provide a file of resource screenshot",
    "Provide a meaningful description so other students know whether this is useful to them": "Provide a meaningful description so other students know whether this is useful to them",
    "Provide a meaningful title so other students know whether this is useful to them": "Provide a meaningful title so other students know whether this is useful to them",
    "Provide a resource description": "Provide a resource description",
    "Provide a resource location in url, required": "Provide a resource location in url, required",
    "Provide a resource screenshot": "Provide a resource screenshot",
    "Provide a resource title, required": "Provide a resource title, required",
    "Reason": "Reason",
    "Reason for why this resource should be endorsed": "Reason for why this resource should be endorsed",
    "Reason for why this resource should be flagged": "Reason for why this resource should be flagged",
    "Reason for why this resource should be removed": "Reason for why this resource should be removed",
    "Recommend a new resource which may be helpful to other students solving this problem": "Recommend a new resource which may be helpful to other students solving this problem",
    "Remove Resource": "Remove Resource",
    "Remove resource": "Remove resource",
    "Remove this resource and give the reason why you do that": "Remove this resource and give the reason why you do that",
    "Remove this resource and give the reason why you do that.": "Remove this resource and give the reason why you do that.",
    "Resource title": "Resource title",
    "Resource: ": "Resource: ",
    "Resources (in JSON format):": "Resources (in JSON format):",
    "Save change": "Save change",
    "Set the student-view, client side configurations for RecommenderXblock.": "Set the student-view, client side configurations for RecommenderXblock.",
    "Show a list of student-recommented related resources": "Show a list of student-recommented related resources",
    "Show related resources": "Show related resources",
    "Size of uploaded file exceeds threshold": "Size of uploaded file exceeds threshold",
    "Suggest a resource which can help other students with this problem. Please do not give the answer directly.": "Suggest a resource which can help other students with this problem. Please do not give the answer directly.",
    "Suggest resource": "Suggest resource",
    "The configuration of pyfs is not properly set": "The configuration of pyfs is not properly set",
    "The content you typed has not been submitted yet. Are you sure to go back?": "The content you typed has not been submitted yet. Are you sure to go back?",
    "The reason why it is endorsed is:": "The reason why it is endorsed is:",
    "The resource you are attempting to provide already exists": "The resource you are attempting to provide already exists",
    "The resource you are attempting to provide has been disallowed by the staff. Reason: ": "The resource you are attempting to provide has been disallowed by the staff. Reason: ",
    "The selected resource does not exist": "The selected resource does not exist",
    "This is a list of recommended resources. If you\\": "This is a list of recommended resources. If you\\",
    "This is a list of resources your fellow students thought might be helpful. If you find another useful resource, either on edx.org or elsewhere, please add it. If you can improve the description or preview of a resource, please do so as well. If you find a resource helpful, upvote it. If it&rsquo;s not so helpful, downvote it. If it has issues (illegal material, incorrect, etc.), please flag it and let us know the reason.": "This is a list of resources your fellow students thought might be helpful. If you find another useful resource, either on edx.org or elsewhere, please add it. If you can improve the description or preview of a resource, please do so as well. If you find a resource helpful, upvote it. If it&rsquo;s not so helpful, downvote it. If it has issues (illegal material, incorrect, etc.), please flag it and let us know the reason.",
    "This resource is endorsed by staff": "This resource is endorsed by staff",
    "This will be a list of resources your fellow students thought might be helpful, but it is empty currently. If you find useful resources, either on edx.org or elsewhere, please add it.": "This will be a list of resources your fellow students thought might be helpful, but it is empty currently. If you find useful resources, either on edx.org or elsewhere, please add it.",
    "Title": "Title",
    "Tried to access flagged resources without staff permission": "Tried to access flagged resources without staff permission",
    "Unendorse resource": "Unendorse resource",
    "Unflag resource": "Unflag resource",
    "Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them": "Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them",
    "Upload resources": "Upload resources",
    "Upload resources in JSON format to the database.": "Upload resources in JSON format to the database.",
    "Upvote if the resource is helpful": "Upvote if the resource is helpful",
    "Votes": "Votes",
    "Why would you like to flag this resource? The staff will review all flagged resources, and remove inappropriate ones (spam, incorrect, abusive, etc.). Giving a clear reason will help us do this efficiently.": "Why would you like to flag this resource? The staff will review all flagged resources, and remove inappropriate ones (spam, incorrect, abusive, etc.). Giving a clear reason will help us do this efficiently.",
    "Yes": "Yes",
    "You don't have the permission to remove this resource": "You don't have the permission to remove this resource",
    "cancel and go back to resource list": "cancel and go back to resource list",
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
    "DATETIME_FORMAT": "j N Y, G.i",
    "DATETIME_INPUT_FORMATS": [
      "%d-%m-%Y %H.%M.%S",
      "%d-%m-%Y %H.%M.%S.%f",
      "%d-%m-%Y %H.%M",
      "%d-%m-%y %H.%M.%S",
      "%d-%m-%y %H.%M.%S.%f",
      "%d-%m-%y %H.%M",
      "%m/%d/%y %H.%M.%S",
      "%m/%d/%y %H.%M.%S.%f",
      "%m/%d/%y %H.%M",
      "%m/%d/%Y %H.%M.%S",
      "%m/%d/%Y %H.%M.%S.%f",
      "%m/%d/%Y %H.%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j N Y",
    "DATE_INPUT_FORMATS": [
      "%d-%m-%Y",
      "%d/%m/%Y",
      "%d-%m-%y",
      "%d/%m/%y",
      "%d %b %Y",
      "%d %B %Y",
      "%m/%d/%y",
      "%m/%d/%Y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d-m-Y G.i",
    "SHORT_DATE_FORMAT": "d-m-Y",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "G.i",
    "TIME_INPUT_FORMATS": [
      "%H.%M.%S",
      "%H.%M",
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
        