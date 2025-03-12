
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
    "&lt; Related resources": "&lt; T\u00e0i nguy\u00ean li\u00ean quan",
    "A resource was clicked": "M\u1ed9t t\u00e0i nguy\u00ean \u0111\u00e3 \u0111\u01b0\u1ee3c nh\u1ea5p v\u00e0o",
    "Add new resource": "Th\u00eam t\u00e0i nguy\u00ean m\u1edbi",
    "Add new resource &gt;&gt;": "Th\u00eam t\u00e0i nguy\u00ean m\u1edbi &gt;&gt;",
    "Add resource": "Th\u00eam t\u00e0i nguy\u00ean",
    "Back to resource list mode": "Quay l\u1ea1i ch\u1ebf \u0111\u1ed9 danh s\u00e1ch t\u00e0i nguy\u00ean",
    "Check the icon to endorse this resource": "Ki\u1ec3m tra bi\u1ec3u t\u01b0\u1ee3ng \u0111\u1ec3 x\u00e1c nh\u1eadn t\u00e0i nguy\u00ean n\u00e0y",
    "Click to view resources for removal": "B\u1ea5m v\u00e0o \u0111\u1ec3 xem t\u00e0i nguy\u00ean \u0111\u1ec3 lo\u1ea1i b\u1ecf",
    "Click to view resources in ordinary decreasing-vote order": "Nh\u1ea5p \u0111\u1ec3 xem t\u00e0i nguy\u00ean theo th\u1ee9 t\u1ef1 phi\u1ebfu b\u1ea7u gi\u1ea3m d\u1ea7n th\u00f4ng th\u01b0\u1eddng",
    "Configuration setting": "C\u00e0i \u0111\u1eb7t c\u1ea5u h\u00ecnh",
    "Cut-and-paste the URL of the resource.": "C\u1eaft v\u00e0 d\u00e1n URL c\u1ee7a t\u00e0i nguy\u00ean.",
    "Delete this resource": "X\u00f3a t\u00e0i nguy\u00ean n\u00e0y",
    "Description": "S\u1ef1 mi\u00eau t\u1ea3",
    "Do you want to disable the UX functions which are under development?": "B\u1ea1n c\u00f3 mu\u1ed1n t\u1eaft c\u00e1c ch\u1ee9c n\u0103ng UX \u0111ang \u0111\u01b0\u1ee3c ph\u00e1t tri\u1ec3n kh\u00f4ng?",
    "Do you want to take users on a little tour when they see the RecommenderXBlock first time?": "B\u1ea1n c\u00f3 mu\u1ed1n \u0111\u01b0a ng\u01b0\u1eddi d\u00f9ng tham quan m\u1ed9t ch\u00fat khi h\u1ecd nh\u00ecn th\u1ea5y recommenderXBlock l\u1ea7n \u0111\u1ea7u ti\u00ean kh\u00f4ng?",
    "Download resources": "T\u1ea3i t\u00e0i nguy\u00ean xu\u1ed1ng",
    "Downvote if the resource is not helpful": "B\u1ecf phi\u1ebfu ph\u1ea3n \u0111\u1ed1i n\u1ebfu t\u00e0i nguy\u00ean kh\u00f4ng h\u1eefu \u00edch",
    "Edit existing resource": "Ch\u1ec9nh s\u1eeda t\u00e0i nguy\u00ean hi\u1ec7n c\u00f3",
    "Edit the resource and make it more helpful for other students with this problem. Please do not give the answer directly.": "Ch\u1ec9nh s\u1eeda t\u00e0i nguy\u00ean v\u00e0 l\u00e0m cho n\u00f3 h\u1eefu \u00edch h\u01a1n cho nh\u1eefng h\u1ecdc sinh kh\u00e1c g\u1eb7p v\u1ea5n \u0111\u1ec1 n\u00e0y. Vui l\u00f2ng kh\u00f4ng \u0111\u01b0a ra c\u00e2u tr\u1ea3 l\u1eddi tr\u1ef1c ti\u1ebfp.",
    "Edit this resource": "Ch\u1ec9nh s\u1eeda t\u00e0i nguy\u00ean n\u00e0y",
    "Endorse Resource": "T\u00e0i nguy\u00ean x\u00e1c nh\u1eadn",
    "Endorse resource": "T\u00e0i nguy\u00ean x\u00e1c nh\u1eadn",
    "Endorse resource without permission": "X\u00e1c nh\u1eadn t\u00e0i nguy\u00ean m\u00e0 kh\u00f4ng \u0111\u01b0\u1ee3c ph\u00e9p",
    "Endorse this resource and give the reason why you do that.": "X\u00e1c nh\u1eadn t\u00e0i nguy\u00ean n\u00e0y v\u00e0 \u0111\u01b0a ra l\u00fd do t\u1ea1i sao b\u1ea1n l\u00e0m \u0111i\u1ec1u \u0111\u00f3.",
    "Entering add resource mode": "\u0110ang v\u00e0o ch\u1ebf \u0111\u1ed9 th\u00eam t\u00e0i nguy\u00ean",
    "Entering edit resource mode": "\u0110ang v\u00e0o ch\u1ebf \u0111\u1ed9 t\u00e0i nguy\u00ean ch\u1ec9nh s\u1eeda",
    "Entering flag resource mode": "\u0110ang v\u00e0o ch\u1ebf \u0111\u1ed9 t\u00e0i nguy\u00ean c\u1edd",
    "Entering import resource mode": "\u0110ang v\u00e0o ch\u1ebf \u0111\u1ed9 nh\u1eadp t\u00e0i nguy\u00ean",
    "Export resources": "Xu\u1ea5t t\u00e0i nguy\u00ean",
    "Flag Resource": "T\u00e0i nguy\u00ean c\u1edd",
    "Flag resource": "T\u00e0i nguy\u00ean g\u1eafn c\u1edd",
    "Flag this resource as problematic and give your reason": "G\u1eafn c\u1edd t\u00e0i nguy\u00ean n\u00e0y l\u00e0 c\u00f3 v\u1ea5n \u0111\u1ec1 v\u00e0 \u0111\u01b0a ra l\u00fd do c\u1ee7a b\u1ea1n",
    "From page {fromPage} To page {toPage}": "T\u1eeb trang {fromPage} \u0110\u1ebfn trang {toPage}",
    "Give a meaningful reason for why this resource should be removed": "\u0110\u01b0a ra l\u00fd do c\u00f3 \u00fd ngh\u0129a t\u1ea1i sao n\u00ean lo\u1ea1i b\u1ecf t\u00e0i nguy\u00ean n\u00e0y",
    "Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title": "\u0110\u01b0a ra m\u1ed9t \u0111o\u1ea1n t\u00f3m t\u1eaft v\u1ec1 ngu\u1ed3n t\u00e0i li\u1ec7u; b\u1ea3n t\u00f3m t\u1eaft ph\u1ea3i chi ti\u1ebft h\u01a1n b\u1ea1n \u0111\u00e3 \u0111\u01b0a ra trong Ti\u00eau \u0111\u1ec1",
    "Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them": "\u0110\u01b0a ra m\u1ed9t b\u1ea3n t\u00f3m t\u1eaft ng\u1eafn (1-3 c\u00e2u) v\u1ec1 t\u00e0i li\u1ec7u; l\u00fd t\u01b0\u1edfng nh\u1ea5t l\u00e0 t\u00e0i li\u1ec7u n\u00e0y ph\u1ea3i ng\u1eafn g\u1ecdn nh\u01b0ng cung c\u1ea5p \u0111\u1ee7 chi ti\u1ebft \u0111\u1ec3 h\u1ecdc sinh bi\u1ebft li\u1ec7u t\u00e0i nguy\u00ean n\u00e0y c\u00f3 h\u1eefu \u00edch cho h\u1ecd hay kh\u00f4ng",
    "Go back to the main list": "Quay l\u1ea1i danh s\u00e1ch ch\u00ednh",
    "Here is a list of reasons why students think this resource problematic:": "D\u01b0\u1edbi \u0111\u00e2y l\u00e0 danh s\u00e1ch c\u00e1c l\u00fd do khi\u1ebfn sinh vi\u00ean cho r\u1eb1ng t\u00e0i nguy\u00ean n\u00e0y c\u00f3 v\u1ea5n \u0111\u1ec1:",
    "Hide related resources": "\u1ea8n t\u00e0i nguy\u00ean li\u00ean quan",
    "Hide the recommendations list": "\u1ea8n danh s\u00e1ch \u0111\u1ec1 xu\u1ea5t",
    "Hovering resource": "T\u00e0i nguy\u00ean di chu\u1ed9t",
    "How many page icons in pagination control (i.e., page range)? The icons for pages from (current page - page range) to (current page + page range) will be shown.": "C\u00f3 bao nhi\u00eau bi\u1ec3u t\u01b0\u1ee3ng trang trong \u0111i\u1ec1u khi\u1ec3n ph\u00e2n trang (t\u1ee9c l\u00e0 ph\u1ea1m vi trang)? C\u00e1c bi\u1ec3u t\u01b0\u1ee3ng cho c\u00e1c trang t\u1eeb (trang hi\u1ec7n t\u1ea1i - ph\u1ea1m vi trang) \u0111\u1ebfn (trang hi\u1ec7n t\u1ea1i + ph\u1ea1m vi trang) s\u1ebd \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb.",
    "How many resources you want to show in each page of the resource list?": "B\u1ea1n mu\u1ed1n hi\u1ec3n th\u1ecb bao nhi\u00eau t\u00e0i nguy\u00ean tr\u00ean m\u1ed7i trang c\u1ee7a danh s\u00e1ch t\u00e0i nguy\u00ean?",
    "Import resources": "Nh\u1eadp t\u00e0i nguy\u00ean",
    "Invalid location URL provided": "URL v\u1ecb tr\u00ed \u0111\u01b0\u1ee3c cung c\u1ea5p kh\u00f4ng h\u1ee3p l\u1ec7",
    "Location": "V\u1ecb tr\u00ed",
    "No": "KH\u00d4NG",
    "Only staff can import resources": "Ch\u1ec9 nh\u00e2n vi\u00ean m\u1edbi c\u00f3 th\u1ec3 nh\u1eadp t\u00e0i nguy\u00ean",
    "Please submit the JSON file obtained with the download resources button": "Vui l\u00f2ng g\u1eedi t\u1ec7p JSON thu \u0111\u01b0\u1ee3c b\u1eb1ng n\u00fat t\u00e0i nguy\u00ean t\u1ea3i xu\u1ed1ng",
    "Preview image (typically, a screenshot)": "Xem tr\u01b0\u1edbc h\u00ecnh \u1ea3nh (th\u01b0\u1eddng l\u00e0 \u1ea3nh ch\u1ee5p m\u00e0n h\u00ecnh)",
    "Preview screenshot:": "Xem tr\u01b0\u1edbc \u1ea3nh ch\u1ee5p m\u00e0n h\u00ecnh:",
    "Provide a file of resource list in JSON format": "Cung c\u1ea5p t\u1ec7p danh s\u00e1ch t\u00e0i nguy\u00ean \u1edf \u0111\u1ecbnh d\u1ea1ng JSON",
    "Provide a file of resource screenshot": "Cung c\u1ea5p m\u1ed9t t\u1eadp tin \u1ea3nh ch\u1ee5p m\u00e0n h\u00ecnh t\u00e0i nguy\u00ean",
    "Provide a meaningful description so other students know whether this is useful to them": "Cung c\u1ea5p m\u00f4 t\u1ea3 c\u00f3 \u00fd ngh\u0129a \u0111\u1ec3 c\u00e1c h\u1ecdc sinh kh\u00e1c bi\u1ebft li\u1ec7u \u0111i\u1ec1u n\u00e0y c\u00f3 h\u1eefu \u00edch v\u1edbi h\u1ecd kh\u00f4ng",
    "Provide a meaningful title so other students know whether this is useful to them": "Cung c\u1ea5p m\u1ed9t ti\u00eau \u0111\u1ec1 c\u00f3 \u00fd ngh\u0129a \u0111\u1ec3 c\u00e1c sinh vi\u00ean kh\u00e1c bi\u1ebft li\u1ec7u ti\u00eau \u0111\u1ec1 n\u00e0y c\u00f3 h\u1eefu \u00edch v\u1edbi h\u1ecd kh\u00f4ng",
    "Provide a resource description": "Cung c\u1ea5p m\u00f4 t\u1ea3 t\u00e0i nguy\u00ean",
    "Provide a resource location in url, required": "Cung c\u1ea5p v\u1ecb tr\u00ed t\u00e0i nguy\u00ean trong url, b\u1eaft bu\u1ed9c",
    "Provide a resource screenshot": "Cung c\u1ea5p \u1ea3nh ch\u1ee5p m\u00e0n h\u00ecnh t\u00e0i nguy\u00ean",
    "Provide a resource title, required": "Cung c\u1ea5p ti\u00eau \u0111\u1ec1 t\u00e0i nguy\u00ean, \u0111\u01b0\u1ee3c y\u00eau c\u1ea7u",
    "Reason": "L\u00fd do",
    "Reason for why this resource should be endorsed": "L\u00fd do t\u1ea1i sao t\u00e0i nguy\u00ean n\u00e0y n\u00ean \u0111\u01b0\u1ee3c x\u00e1c nh\u1eadn",
    "Reason for why this resource should be flagged": "L\u00fd do t\u1ea1i sao t\u00e0i nguy\u00ean n\u00e0y n\u00ean \u0111\u01b0\u1ee3c g\u1eafn c\u1edd",
    "Reason for why this resource should be removed": "L\u00fd do t\u1ea1i sao t\u00e0i nguy\u00ean n\u00e0y n\u00ean b\u1ecb lo\u1ea1i b\u1ecf",
    "Recommend a new resource which may be helpful to other students solving this problem": "\u0110\u1ec1 xu\u1ea5t m\u1ed9t t\u00e0i nguy\u00ean m\u1edbi c\u00f3 th\u1ec3 h\u1eefu \u00edch cho nh\u1eefng sinh vi\u00ean kh\u00e1c gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 n\u00e0y",
    "Remove Resource": "X\u00f3a t\u00e0i nguy\u00ean",
    "Remove resource": "X\u00f3a t\u00e0i nguy\u00ean",
    "Remove this resource and give the reason why you do that": "X\u00f3a t\u00e0i nguy\u00ean n\u00e0y v\u00e0 \u0111\u01b0a ra l\u00fd do t\u1ea1i sao b\u1ea1n l\u00e0m \u0111i\u1ec1u \u0111\u00f3",
    "Remove this resource and give the reason why you do that.": "Lo\u1ea1i b\u1ecf t\u00e0i nguy\u00ean n\u00e0y v\u00e0 \u0111\u01b0a ra l\u00fd do t\u1ea1i sao b\u1ea1n l\u00e0m \u0111i\u1ec1u \u0111\u00f3.",
    "Resource title": "Ti\u00eau \u0111\u1ec1 t\u00e0i nguy\u00ean",
    "Resource: ": "Ngu\u1ed3n: ",
    "Resources (in JSON format):": "T\u00e0i nguy\u00ean (\u1edf \u0111\u1ecbnh d\u1ea1ng JSON):",
    "Save change": "L\u01b0u thay \u0111\u1ed5i",
    "Set the student-view, client side configurations for RecommenderXblock.": "\u0110\u1eb7t c\u1ea5u h\u00ecnh ph\u00eda m\u00e1y kh\u00e1ch, ch\u1ebf \u0111\u1ed9 xem sinh vi\u00ean cho recommenderXblock.",
    "Show a list of student-recommented related resources": "Hi\u1ec3n th\u1ecb danh s\u00e1ch c\u00e1c t\u00e0i nguy\u00ean li\u00ean quan \u0111\u01b0\u1ee3c sinh vi\u00ean \u0111\u1ec1 xu\u1ea5t",
    "Show related resources": "Hi\u1ec3n th\u1ecb c\u00e1c t\u00e0i nguy\u00ean li\u00ean quan",
    "Size of uploaded file exceeds threshold": "K\u00edch th\u01b0\u1edbc t\u1ec7p t\u1ea3i l\u00ean v\u01b0\u1ee3t qu\u00e1 ng\u01b0\u1ee1ng",
    "Suggest a resource which can help other students with this problem. Please do not give the answer directly.": "\u0110\u1ec1 xu\u1ea5t m\u1ed9t ngu\u1ed3n t\u00e0i nguy\u00ean c\u00f3 th\u1ec3 gi\u00fap c\u00e1c sinh vi\u00ean kh\u00e1c gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 n\u00e0y. Vui l\u00f2ng kh\u00f4ng \u0111\u01b0a ra c\u00e2u tr\u1ea3 l\u1eddi tr\u1ef1c ti\u1ebfp.",
    "Suggest resource": "\u0110\u1ec1 xu\u1ea5t t\u00e0i nguy\u00ean",
    "The configuration of pyfs is not properly set": "C\u1ea5u h\u00ecnh c\u1ee7a pyfs kh\u00f4ng \u0111\u01b0\u1ee3c \u0111\u1eb7t \u0111\u00fang",
    "The content you typed has not been submitted yet. Are you sure to go back?": "N\u1ed9i dung b\u1ea1n g\u00f5 ch\u01b0a \u0111\u01b0\u1ee3c g\u1eedi. B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn quay l\u1ea1i kh\u00f4ng?",
    "The reason why it is endorsed is:": "L\u00fd do t\u1ea1i sao n\u00f3 \u0111\u01b0\u1ee3c x\u00e1c nh\u1eadn l\u00e0:",
    "The resource you are attempting to provide already exists": "T\u00e0i nguy\u00ean b\u1ea1n \u0111ang c\u1ed1 g\u1eafng cung c\u1ea5p \u0111\u00e3 t\u1ed3n t\u1ea1i",
    "The resource you are attempting to provide has been disallowed by the staff. Reason: ": "T\u00e0i nguy\u00ean b\u1ea1n \u0111ang c\u1ed1 g\u1eafng cung c\u1ea5p \u0111\u00e3 kh\u00f4ng \u0111\u01b0\u1ee3c nh\u00e2n vi\u00ean cho ph\u00e9p. L\u00fd do: ",
    "The selected resource does not exist": "T\u00e0i nguy\u00ean \u0111\u00e3 ch\u1ecdn kh\u00f4ng t\u1ed3n t\u1ea1i",
    "This is a list of recommended resources. If you\\": "\u0110\u00e2y l\u00e0 danh s\u00e1ch c\u00e1c t\u00e0i nguy\u00ean \u0111\u01b0\u1ee3c \u0111\u1ec1 xu\u1ea5t. N\u1ebfu b\u1ea1n\\",
    "This is a list of resources your fellow students thought might be helpful. If you find another useful resource, either on edx.org or elsewhere, please add it. If you can improve the description or preview of a resource, please do so as well. If you find a resource helpful, upvote it. If it&rsquo;s not so helpful, downvote it. If it has issues (illegal material, incorrect, etc.), please flag it and let us know the reason.": "\u0110\u00e2y l\u00e0 danh s\u00e1ch c\u00e1c t\u00e0i nguy\u00ean m\u00e0 c\u00e1c sinh vi\u00ean c\u1ee7a b\u1ea1n cho r\u1eb1ng c\u00f3 th\u1ec3 h\u1eefu \u00edch. N\u1ebfu b\u1ea1n t\u00ecm th\u1ea5y t\u00e0i nguy\u00ean h\u1eefu \u00edch kh\u00e1c, tr\u00ean edx.org ho\u1eb7c n\u01a1i kh\u00e1c, vui l\u00f2ng th\u00eam n\u00f3. N\u1ebfu b\u1ea1n c\u00f3 th\u1ec3 c\u1ea3i thi\u1ec7n m\u00f4 t\u1ea3 ho\u1eb7c b\u1ea3n xem tr\u01b0\u1edbc c\u1ee7a m\u1ed9t t\u00e0i nguy\u00ean, vui l\u00f2ng l\u00e0m nh\u01b0 v\u1eady. N\u1ebfu b\u1ea1n t\u00ecm th\u1ea5y m\u1ed9t t\u00e0i nguy\u00ean h\u1eefu \u00edch, h\u00e3y b\u00ecnh ch\u1ecdn n\u00f3. N\u1ebfu n\u00f3 kh\u00f4ng h\u1eefu \u00edch l\u1eafm, h\u00e3y \u0111\u00e1nh gi\u00e1 th\u1ea5p n\u00f3. N\u1ebfu n\u00f3 c\u00f3 v\u1ea5n \u0111\u1ec1 (t\u00e0i li\u1ec7u b\u1ea5t h\u1ee3p ph\u00e1p, kh\u00f4ng ch\u00ednh x\u00e1c, v.v.), vui l\u00f2ng g\u1eafn c\u1edd v\u00e0 cho ch\u00fang t\u00f4i bi\u1ebft l\u00fd do.",
    "This resource is endorsed by staff": "T\u00e0i nguy\u00ean n\u00e0y \u0111\u01b0\u1ee3c x\u00e1c nh\u1eadn b\u1edfi nh\u00e2n vi\u00ean",
    "This will be a list of resources your fellow students thought might be helpful, but it is empty currently. If you find useful resources, either on edx.org or elsewhere, please add it.": "\u0110\u00e2y s\u1ebd l\u00e0 danh s\u00e1ch c\u00e1c t\u00e0i nguy\u00ean m\u00e0 c\u00e1c sinh vi\u00ean c\u1ee7a b\u1ea1n cho r\u1eb1ng c\u00f3 th\u1ec3 h\u1eefu \u00edch nh\u01b0ng hi\u1ec7n t\u1ea1i n\u00f3 ch\u01b0a c\u00f3. N\u1ebfu b\u1ea1n t\u00ecm th\u1ea5y c\u00e1c t\u00e0i nguy\u00ean h\u1eefu \u00edch, tr\u00ean edx.org ho\u1eb7c \u1edf n\u01a1i kh\u00e1c, vui l\u00f2ng th\u00eam n\u00f3.",
    "Title": "Ti\u00eau \u0111\u1ec1",
    "Tried to access flagged resources without staff permission": "\u0110\u00e3 c\u1ed1 truy c\u1eadp c\u00e1c t\u00e0i nguy\u00ean \u0111\u01b0\u1ee3c g\u1eafn c\u1edd m\u00e0 kh\u00f4ng c\u00f3 s\u1ef1 cho ph\u00e9p c\u1ee7a nh\u00e2n vi\u00ean",
    "Unendorse resource": "Kh\u00f4ng x\u00e1c nh\u1eadn t\u00e0i nguy\u00ean",
    "Unflag resource": "B\u1ecf g\u1eafn c\u1edd t\u00e0i nguy\u00ean",
    "Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them": "T\u1ea3i l\u00ean \u1ea3nh ch\u1ee5p m\u00e0n h\u00ecnh xem tr\u01b0\u1edbc (\u1edf d\u1ea1ng GIF/PNG/JPG) c\u1ee7a t\u00e0i nguy\u00ean; l\u00fd t\u01b0\u1edfng nh\u1ea5t l\u00e0 \u0111i\u1ec1u n\u00e0y s\u1ebd cho sinh vi\u00ean bi\u1ebft li\u1ec7u t\u00e0i nguy\u00ean n\u00e0y c\u00f3 h\u1eefu \u00edch cho h\u1ecd hay kh\u00f4ng",
    "Upload resources": "T\u1ea3i t\u00e0i nguy\u00ean l\u00ean",
    "Upload resources in JSON format to the database.": "T\u1ea3i t\u00e0i nguy\u00ean \u1edf \u0111\u1ecbnh d\u1ea1ng JSON l\u00ean c\u01a1 s\u1edf d\u1eef li\u1ec7u.",
    "Upvote if the resource is helpful": "Upvote n\u1ebfu t\u00e0i nguy\u00ean h\u1eefu \u00edch",
    "Votes": "Phi\u1ebfu b\u1ea7u",
    "Why would you like to flag this resource? The staff will review all flagged resources, and remove inappropriate ones (spam, incorrect, abusive, etc.). Giving a clear reason will help us do this efficiently.": "T\u1ea1i sao b\u1ea1n mu\u1ed1n g\u1eafn c\u1edd t\u00e0i nguy\u00ean n\u00e0y? Nh\u00e2n vi\u00ean s\u1ebd xem x\u00e9t t\u1ea5t c\u1ea3 c\u00e1c t\u00e0i nguy\u00ean b\u1ecb g\u1eafn c\u1edd v\u00e0 x\u00f3a nh\u1eefng t\u00e0i nguy\u00ean kh\u00f4ng ph\u00f9 h\u1ee3p (th\u01b0 r\u00e1c, kh\u00f4ng ch\u00ednh x\u00e1c, l\u1ea1m d\u1ee5ng, v.v.). \u0110\u01b0a ra l\u00fd do r\u00f5 r\u00e0ng s\u1ebd gi\u00fap ch\u00fang ta th\u1ef1c hi\u1ec7n \u0111i\u1ec1u n\u00e0y m\u1ed9t c\u00e1ch hi\u1ec7u qu\u1ea3.",
    "Yes": "\u0110\u00fang",
    "You don't have the permission to remove this resource": "B\u1ea1n kh\u00f4ng c\u00f3 quy\u1ec1n x\u00f3a t\u00e0i nguy\u00ean n\u00e0y",
    "cancel and go back to resource list": "h\u1ee7y v\u00e0 quay l\u1ea1i danh s\u00e1ch t\u00e0i nguy\u00ean",
    "mode": "c\u00e1ch th\u1ee9c",
    "votes": "phi\u1ebfu b\u1ea7u"
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
    "DATETIME_FORMAT": "H:i \\N\\g\u00e0\\y d \\t\\h\u00e1\\n\\g n \\n\u0103\\m Y",
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
    "DATE_FORMAT": "\\N\\g\u00e0\\y d \\t\\h\u00e1\\n\\g n \\n\u0103\\m Y",
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
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 0,
    "SHORT_DATETIME_FORMAT": "H:i d-m-Y",
    "SHORT_DATE_FORMAT": "d-m-Y",
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
        