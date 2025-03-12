
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
    "&lt; Related resources": "&lt; \u76f8\u5173\u8d44\u6e90",
    "A resource was clicked": "\u5355\u51fb\u4e86\u8d44\u6e90",
    "Add new resource": "\u6dfb\u52a0\u65b0\u8d44\u6e90",
    "Add new resource &gt;&gt;": "\u6dfb\u52a0\u65b0\u8d44\u6e90&gt;&gt;",
    "Add resource": "\u6dfb\u52a0\u8d44\u6e90",
    "Back to resource list mode": "\u8fd4\u56de\u8d44\u6e90\u5217\u8868\u6a21\u5f0f",
    "Check the icon to endorse this resource": "\u68c0\u67e5\u56fe\u6807\u4ee5\u8ba4\u53ef\u8be5\u8d44\u6e90",
    "Click to view resources for removal": "\u70b9\u51fb\u67e5\u770b\u8981\u5220\u9664\u7684\u8d44\u6e90",
    "Click to view resources in ordinary decreasing-vote order": "\u5355\u51fb\u4ee5\u666e\u901a\u964d\u5e8f\u67e5\u770b\u8d44\u6e90",
    "Configuration setting": "\u914d\u7f6e\u8bbe\u7f6e",
    "Cut-and-paste the URL of the resource.": "\u526a\u5207\u5e76\u7c98\u8d34\u8d44\u6e90\u7684 URL\u3002",
    "Delete this resource": "\u5220\u9664\u8be5\u8d44\u6e90",
    "Description": "\u63cf\u8ff0",
    "Do you want to disable the UX functions which are under development?": "\u60a8\u60f3\u7981\u7528\u6b63\u5728\u5f00\u53d1\u7684 UX \u529f\u80fd\u5417\uff1f",
    "Do you want to take users on a little tour when they see the RecommenderXBlock first time?": "\u5f53\u7528\u6237\u7b2c\u4e00\u6b21\u770b\u5230 RecommenderXBlock \u65f6\uff0c\u60a8\u60f3\u5e26\u4ed6\u4eec\u53c2\u89c2\u4e00\u4e0b\u5417\uff1f",
    "Download resources": "\u4e0b\u8f7d\u8d44\u6e90",
    "Downvote if the resource is not helpful": "\u5982\u679c\u8d44\u6e90\u6ca1\u6709\u5e2e\u52a9\uff0c\u8bf7\u6295\u53cd\u5bf9\u7968",
    "Edit existing resource": "\u7f16\u8f91\u73b0\u6709\u8d44\u6e90",
    "Edit the resource and make it more helpful for other students with this problem. Please do not give the answer directly.": "\u7f16\u8f91\u8d44\u6e90\u5e76\u4f7f\u5176\u5bf9\u9047\u5230\u6b64\u95ee\u9898\u7684\u5176\u4ed6\u5b66\u751f\u66f4\u6709\u5e2e\u52a9\u3002\u8bf7\u4e0d\u8981\u76f4\u63a5\u7ed9\u51fa\u7b54\u6848\u3002",
    "Edit this resource": "\u7f16\u8f91\u672c\u8d44\u6e90",
    "Endorse Resource": "\u8ba4\u53ef\u8d44\u6e90",
    "Endorse resource": "\u8ba4\u53ef\u8d44\u6e90",
    "Endorse resource without permission": "\u672a\u7ecf\u8bb8\u53ef\u8ba4\u53ef\u8d44\u6e90",
    "Endorse this resource and give the reason why you do that.": "\u8ba4\u53ef\u8be5\u8d44\u6e90\u5e76\u7ed9\u51fa\u8fd9\u6837\u505a\u7684\u539f\u56e0\u3002",
    "Entering add resource mode": "\u8fdb\u5165\u6dfb\u52a0\u8d44\u6e90\u6a21\u5f0f",
    "Entering edit resource mode": "\u8fdb\u5165\u7f16\u8f91\u8d44\u6e90\u6a21\u5f0f",
    "Entering flag resource mode": "\u8fdb\u5165\u6807\u5fd7\u8d44\u6e90\u6a21\u5f0f",
    "Entering import resource mode": "\u8fdb\u5165\u5bfc\u5165\u8d44\u6e90\u6a21\u5f0f",
    "Export resources": "\u51fa\u53e3\u8d44\u6e90",
    "Flag Resource": "\u6807\u8bb0\u8d44\u6e90",
    "Flag resource": "\u6807\u8bb0\u8d44\u6e90",
    "Flag this resource as problematic and give your reason": "\u5c06\u6b64\u8d44\u6e90\u6807\u8bb0\u4e3a\u6709\u95ee\u9898\u5e76\u7ed9\u51fa\u539f\u56e0",
    "From page {fromPage} To page {toPage}": "\u4ece\u9875\u9762{fromPage}\u5230\u9875\u9762{toPage}",
    "Give a meaningful reason for why this resource should be removed": "\u7ed9\u51fa\u4e00\u4e2a\u6709\u610f\u4e49\u7684\u7406\u7531\u6765\u8bf4\u660e\u4e3a\u4f55\u5e94\u5220\u9664\u6b64\u8d44\u6e90",
    "Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title": "\u7ed9\u51fa\u4e00\u6bb5\u8d44\u6e90\u6458\u8981\uff1b\u6458\u8981\u5e94\u8be5\u6bd4\u60a8\u5728\u6807\u9898\u4e2d\u7ed9\u51fa\u7684\u66f4\u8be6\u7ec6",
    "Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them": "\u7ed9\u51fa\u8d44\u6e90\u7684\u7b80\u77ed\uff081-3 \u53e5\u8bdd\uff09\u6458\u8981\uff1b\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u8fd9\u5e94\u8be5\u7b80\u6d01\uff0c\u4f46\u8981\u63d0\u4f9b\u8db3\u591f\u7684\u7ec6\u8282\uff0c\u8ba9\u5b66\u751f\u77e5\u9053\u8fd9\u4e9b\u8d44\u6e90\u5bf9\u4ed6\u4eec\u662f\u5426\u6709\u7528",
    "Go back to the main list": "\u8fd4\u56de\u4e3b\u5217\u8868",
    "Here is a list of reasons why students think this resource problematic:": "\u4ee5\u4e0b\u5217\u51fa\u4e86\u5b66\u751f\u8ba4\u4e3a\u6b64\u8d44\u6e90\u6709\u95ee\u9898\u7684\u539f\u56e0\uff1a",
    "Hide related resources": "\u9690\u85cf\u76f8\u5173\u8d44\u6e90",
    "Hide the recommendations list": "\u9690\u85cf\u63a8\u8350\u5217\u8868",
    "Hovering resource": "\u60ac\u505c\u8d44\u6e90",
    "How many page icons in pagination control (i.e., page range)? The icons for pages from (current page - page range) to (current page + page range) will be shown.": "\u5206\u9875\u63a7\u4ef6\uff08\u5373\u9875\u9762\u8303\u56f4\uff09\u4e2d\u6709\u591a\u5c11\u4e2a\u9875\u9762\u56fe\u6807\uff1f\u5c06\u663e\u793a\u4ece\uff08\u5f53\u524d\u9875\u9762 - \u9875\u9762\u8303\u56f4\uff09\u5230\uff08\u5f53\u524d\u9875\u9762 + \u9875\u9762\u8303\u56f4\uff09\u7684\u9875\u9762\u56fe\u6807\u3002",
    "How many resources you want to show in each page of the resource list?": "\u60a8\u5e0c\u671b\u5728\u8d44\u6e90\u5217\u8868\u7684\u6bcf\u9875\u4e2d\u663e\u793a\u591a\u5c11\u4e2a\u8d44\u6e90\uff1f",
    "Import resources": "\u5bfc\u5165\u8d44\u6e90",
    "Invalid location URL provided": "\u63d0\u4f9b\u7684\u4f4d\u7f6e URL \u65e0\u6548",
    "Location": "\u4f4d\u7f6e",
    "No": "\u5426",
    "Only staff can import resources": "\u53ea\u6709\u5458\u5de5\u53ef\u4ee5\u5bfc\u5165\u8d44\u6e90",
    "Please submit the JSON file obtained with the download resources button": "\u8bf7\u63d0\u4ea4\u901a\u8fc7\u4e0b\u8f7d\u8d44\u6e90\u6309\u94ae\u83b7\u5f97\u7684JSON\u6587\u4ef6",
    "Preview image (typically, a screenshot)": "\u9884\u89c8\u56fe\u50cf\uff08\u901a\u5e38\u662f\u5c4f\u5e55\u622a\u56fe\uff09",
    "Preview screenshot:": "\u9884\u89c8\u622a\u56fe\uff1a",
    "Provide a file of resource list in JSON format": "\u63d0\u4f9bJSON\u683c\u5f0f\u7684\u8d44\u6e90\u5217\u8868\u6587\u4ef6",
    "Provide a file of resource screenshot": "\u63d0\u4f9b\u8d44\u6e90\u622a\u56fe\u6587\u4ef6",
    "Provide a meaningful description so other students know whether this is useful to them": "\u63d0\u4f9b\u6709\u610f\u4e49\u7684\u63cf\u8ff0\uff0c\u4ee5\u4fbf\u5176\u4ed6\u5b66\u751f\u77e5\u9053\u8fd9\u5bf9\u4ed6\u4eec\u662f\u5426\u6709\u7528",
    "Provide a meaningful title so other students know whether this is useful to them": "\u63d0\u4f9b\u4e00\u4e2a\u6709\u610f\u4e49\u7684\u6807\u9898\uff0c\u4ee5\u4fbf\u5176\u4ed6\u5b66\u751f\u77e5\u9053\u8fd9\u5bf9\u4ed6\u4eec\u662f\u5426\u6709\u7528",
    "Provide a resource description": "\u63d0\u4f9b\u8d44\u6e90\u63cf\u8ff0",
    "Provide a resource location in url, required": "\u5728 url \u4e2d\u63d0\u4f9b\u8d44\u6e90\u4f4d\u7f6e\uff0c\u5fc5\u9700",
    "Provide a resource screenshot": "\u63d0\u4f9b\u8d44\u6e90\u622a\u56fe",
    "Provide a resource title, required": "\u63d0\u4f9b\u8d44\u6e90\u6807\u9898\uff08\u5fc5\u9700\uff09",
    "Reason": "\u539f\u56e0",
    "Reason for why this resource should be endorsed": "\u5e94\u8ba4\u53ef\u6b64\u8d44\u6e90\u7684\u539f\u56e0",
    "Reason for why this resource should be flagged": "\u5e94\u6807\u8bb0\u6b64\u8d44\u6e90\u7684\u539f\u56e0",
    "Reason for why this resource should be removed": "\u5e94\u5220\u9664\u6b64\u8d44\u6e90\u7684\u539f\u56e0",
    "Recommend a new resource which may be helpful to other students solving this problem": "\u63a8\u8350\u4e00\u4e2a\u53ef\u80fd\u6709\u52a9\u4e8e\u5176\u4ed6\u5b66\u751f\u89e3\u51b3\u6b64\u95ee\u9898\u7684\u65b0\u8d44\u6e90",
    "Remove Resource": "\u5220\u9664\u8d44\u6e90",
    "Remove resource": "\u5220\u9664\u8d44\u6e90",
    "Remove this resource and give the reason why you do that": "\u5220\u9664\u6b64\u8d44\u6e90\u5e76\u8bf4\u660e\u8fd9\u6837\u505a\u7684\u539f\u56e0",
    "Remove this resource and give the reason why you do that.": "\u5220\u9664\u6b64\u8d44\u6e90\u5e76\u8bf4\u660e\u8fd9\u6837\u505a\u7684\u539f\u56e0\u3002",
    "Resource title": "\u8d44\u6e90\u6807\u9898",
    "Resource: ": "\u8d44\u6e90\uff1a ",
    "Resources (in JSON format):": "\u8d44\u6e90\uff08JSON \u683c\u5f0f\uff09\uff1a",
    "Save change": "\u4fdd\u5b58\u66f4\u6539",
    "Set the student-view, client side configurations for RecommenderXblock.": "\u8bbe\u7f6e RecommenderXblock \u7684\u5b66\u751f\u89c6\u56fe\u5ba2\u6237\u7aef\u914d\u7f6e\u3002",
    "Show a list of student-recommented related resources": "\u663e\u793a\u5b66\u751f\u63a8\u8350\u7684\u76f8\u5173\u8d44\u6e90\u5217\u8868",
    "Show related resources": "\u663e\u793a\u76f8\u5173\u8d44\u6e90",
    "Size of uploaded file exceeds threshold": "\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u8d85\u8fc7\u9608\u503c",
    "Suggest a resource which can help other students with this problem. Please do not give the answer directly.": "\u5efa\u8bae\u53ef\u4ee5\u5e2e\u52a9\u5176\u4ed6\u5b66\u751f\u89e3\u51b3\u6b64\u95ee\u9898\u7684\u8d44\u6e90\u3002\u8bf7\u4e0d\u8981\u76f4\u63a5\u7ed9\u51fa\u7b54\u6848\u3002",
    "Suggest resource": "\u5efa\u8bae\u8d44\u6e90",
    "The configuration of pyfs is not properly set": "pyfs\u7684\u914d\u7f6e\u6ca1\u6709\u6b63\u786e\u8bbe\u7f6e",
    "The content you typed has not been submitted yet. Are you sure to go back?": "\u60a8\u8f93\u5165\u7684\u5185\u5bb9\u5c1a\u672a\u63d0\u4ea4\u3002\u4f60\u786e\u5b9a\u8981\u56de\u53bb\u5417\uff1f",
    "The reason why it is endorsed is:": "\u5176\u83b7\u5f97\u8ba4\u53ef\u7684\u539f\u56e0\u662f\uff1a",
    "The resource you are attempting to provide already exists": "\u60a8\u5c1d\u8bd5\u63d0\u4f9b\u7684\u8d44\u6e90\u5df2\u5b58\u5728",
    "The resource you are attempting to provide has been disallowed by the staff. Reason: ": "\u60a8\u5c1d\u8bd5\u63d0\u4f9b\u7684\u8d44\u6e90\u5df2\u88ab\u5de5\u4f5c\u4eba\u5458\u62d2\u7edd\u3002\u539f\u56e0\uff1a ",
    "The selected resource does not exist": "\u6240\u9009\u8d44\u6e90\u4e0d\u5b58\u5728",
    "This is a list of recommended resources. If you\\": "\u8fd9\u662f\u63a8\u8350\u8d44\u6e90\u7684\u5217\u8868\u3002\u5982\u679c\u4f60\\",
    "This is a list of resources your fellow students thought might be helpful. If you find another useful resource, either on edx.org or elsewhere, please add it. If you can improve the description or preview of a resource, please do so as well. If you find a resource helpful, upvote it. If it&rsquo;s not so helpful, downvote it. If it has issues (illegal material, incorrect, etc.), please flag it and let us know the reason.": "\u8fd9\u662f\u60a8\u7684\u540c\u5b66\u8ba4\u4e3a\u53ef\u80fd\u6709\u5e2e\u52a9\u7684\u8d44\u6e90\u5217\u8868\u3002\u5982\u679c\u60a8\u5728 edx.org \u6216\u5176\u4ed6\u5730\u65b9\u627e\u5230\u5176\u4ed6\u6709\u7528\u7684\u8d44\u6e90\uff0c\u8bf7\u6dfb\u52a0\u5b83\u3002\u5982\u679c\u60a8\u53ef\u4ee5\u6539\u8fdb\u8d44\u6e90\u7684\u63cf\u8ff0\u6216\u9884\u89c8\uff0c\u4e5f\u8bf7\u8fd9\u6837\u505a\u3002\u5982\u679c\u60a8\u53d1\u73b0\u8d44\u6e90\u6709\u5e2e\u52a9\uff0c\u8bf7\u6295\u7968\u3002\u5982\u679c\u5b83\u4e0d\u662f\u5f88\u6709\u5e2e\u52a9\uff0c\u8bf7\u5426\u51b3\u5b83\u3002\u5982\u679c\u6709\u95ee\u9898\uff08\u975e\u6cd5\u6750\u6599\u3001\u4e0d\u6b63\u786e\u7b49\uff09\uff0c\u8bf7\u6807\u8bb0\u5b83\u5e76\u544a\u8bc9\u6211\u4eec\u539f\u56e0\u3002",
    "This resource is endorsed by staff": "\u8be5\u8d44\u6e90\u5f97\u5230\u4e86\u5de5\u4f5c\u4eba\u5458\u7684\u8ba4\u53ef",
    "This will be a list of resources your fellow students thought might be helpful, but it is empty currently. If you find useful resources, either on edx.org or elsewhere, please add it.": "\u8fd9\u5c06\u662f\u60a8\u7684\u540c\u5b66\u8ba4\u4e3a\u53ef\u80fd\u6709\u5e2e\u52a9\u7684\u8d44\u6e90\u5217\u8868\uff0c\u4f46\u76ee\u524d\u4e3a\u7a7a\u3002\u5982\u679c\u60a8\u5728 edx.org \u6216\u5176\u4ed6\u5730\u65b9\u627e\u5230\u6709\u7528\u7684\u8d44\u6e90\uff0c\u8bf7\u6dfb\u52a0\u5b83\u3002",
    "Title": "\u62ac\u5934",
    "Tried to access flagged resources without staff permission": "\u8bd5\u56fe\u5728\u672a\u7ecf\u5458\u5de5\u8bb8\u53ef\u7684\u60c5\u51b5\u4e0b\u8bbf\u95ee\u6807\u8bb0\u7684\u8d44\u6e90",
    "Unendorse resource": "\u53d6\u6d88\u8ba4\u53ef\u8d44\u6e90",
    "Unflag resource": "\u53d6\u6d88\u8d44\u6e90\u6807\u8bb0",
    "Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them": "\u4e0a\u4f20\u8d44\u6e90\u7684\u9884\u89c8\u622a\u56fe\uff08GIF/PNG/JPG\uff09\uff1b\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u8fd9\u5e94\u8be5\u8ba9\u5b66\u751f\u77e5\u9053\u8fd9\u4e9b\u8d44\u6e90\u5bf9\u4ed6\u4eec\u662f\u5426\u6709\u7528",
    "Upload resources": "\u4e0a\u4f20\u8d44\u6e90",
    "Upload resources in JSON format to the database.": "\u5c06JSON\u683c\u5f0f\u7684\u8d44\u6e90\u4e0a\u4f20\u5230\u6570\u636e\u5e93\u3002",
    "Upvote if the resource is helpful": "\u5982\u679c\u8d44\u6e90\u6709\u5e2e\u52a9\uff0c\u8bf7\u6295\u7968",
    "Votes": "\u6295\u7968\u6570",
    "Why would you like to flag this resource? The staff will review all flagged resources, and remove inappropriate ones (spam, incorrect, abusive, etc.). Giving a clear reason will help us do this efficiently.": "\u60a8\u4e3a\u4ec0\u4e48\u8981\u6807\u8bb0\u6b64\u8d44\u6e90\uff1f\u5de5\u4f5c\u4eba\u5458\u5c06\u5ba1\u67e5\u6240\u6709\u6807\u8bb0\u7684\u8d44\u6e90\uff0c\u5e76\u5220\u9664\u4e0d\u9002\u5f53\u7684\u8d44\u6e90\uff08\u5783\u573e\u90ae\u4ef6\u3001\u4e0d\u6b63\u786e\u7684\u3001\u6ee5\u7528\u7684\u7b49\uff09\u3002\u7ed9\u51fa\u660e\u786e\u7684\u7406\u7531\u5c06\u6709\u52a9\u4e8e\u6211\u4eec\u6709\u6548\u5730\u505a\u5230\u8fd9\u4e00\u70b9\u3002",
    "Yes": "\u662f\u7684",
    "You don't have the permission to remove this resource": "\u60a8\u65e0\u6743\u5220\u9664\u6b64\u8d44\u6e90",
    "cancel and go back to resource list": "\u53d6\u6d88\u5e76\u8fd4\u56de\u8d44\u6e90\u5217\u8868",
    "mode": "\u6a21\u5f0f",
    "votes": "\u6295\u7968"
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
        