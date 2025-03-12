
            (function(global){
                var DragAndDropI18N = {
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
    "\n                            Please provide a description of the image for non-visual users.\n                            The description should provide sufficient information to allow anyone\n                            to solve the problem even without seeing the image.\n                        ": "\nVui l\u00f2ng cung c\u1ea5p m\u00f4 t\u1ea3 v\u1ec1 h\u00ecnh \u1ea3nh cho ng\u01b0\u1eddi d\u00f9ng kh\u00f4ng tr\u1ef1c quan.\n M\u00f4 t\u1ea3 ph\u1ea3i cung c\u1ea5p \u0111\u1ee7 th\u00f4ng tin \u0111\u1ec3 cho ph\u00e9p b\u1ea5t k\u1ef3 ai\n \u0111\u1ec3 gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 ngay c\u1ea3 khi kh\u00f4ng nh\u00ecn th\u1ea5y h\u00ecnh \u1ea3nh.\n                        ",
    "(inherited from Advanced Settings)": "(k\u1ebf th\u1eeba t\u1eeb C\u00e0i \u0111\u1eb7t n\u00e2ng cao)",
    ", draggable": ", c\u00f3 th\u1ec3 k\u00e9o \u0111\u01b0\u1ee3c",
    ", draggable, grabbed": ", c\u00f3 th\u1ec3 k\u00e9o \u0111\u01b0\u1ee3c, n\u1eafm l\u1ea5y \u0111\u01b0\u1ee3c",
    ", dropzone": ", v\u00f9ng Lo\u1ea1i",
    "Actions": "h\u00e0nh \u0111\u1ed9ng",
    "Add a zone": "Th\u00eam m\u1ed9t khu v\u1ef1c",
    "Add an item": "Th\u00eam m\u1ed9t m\u1ee5c",
    "After All Attempts": "Sau M\u1ecdi N\u1ed7 L\u1ef1c",
    "After All Attempts or Correct": "Sau T\u1ea5t C\u1ea3 Nh\u1eefng N\u1ed7 L\u1ef1c Ho\u1eb7c \u0110\u00fang",
    "Always": "Lu\u00f4n lu\u00f4n",
    "An error occurred. Unable to load drag and drop problem.": "\u0110\u00e3 x\u1ea3y ra l\u1ed7i. Kh\u00f4ng th\u1ec3 t\u1ea3i v\u1ea5n \u0111\u1ec1 k\u00e9o v\u00e0 th\u1ea3.",
    "An isosceles triangle with three layers of similar height. It is shown upright, so the widest layer is located at the bottom, and the narrowest layer is located at the top.": "M\u1ed9t tam gi\u00e1c c\u00e2n c\u00f3 ba l\u1edbp c\u00f3 chi\u1ec1u cao b\u1eb1ng nhau. N\u00f3 \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb th\u1eb3ng \u0111\u1ee9ng, do \u0111\u00f3 l\u1edbp r\u1ed9ng nh\u1ea5t n\u1eb1m \u1edf ph\u00eda d\u01b0\u1edbi v\u00e0 l\u1edbp h\u1eb9p nh\u1ea5t n\u1eb1m \u1edf tr\u00ean c\u00f9ng.",
    "Answered": "\u0110\u00e3 tr\u1ea3 l\u1eddi",
    "Assessment": "\u0110\u00e1nh gi\u00e1",
    "Attempted": "\u0110\u00e3 c\u1ed1 g\u1eafng",
    "Attempted or Past Due": "\u0110\u00e3 c\u1ed1 g\u1eafng ho\u1eb7c qu\u00e1 h\u1ea1n",
    "Background Image": "H\u00ecnh n\u1ec1n",
    "Background URL": "URL n\u1ec1n",
    "Background description": "M\u00f4 t\u1ea3 n\u1ec1n",
    "Basic Settings": "C\u00e0i \u0111\u1eb7t c\u01a1 b\u1ea3n",
    "Cancel": "H\u1ee7y b\u1ecf",
    "Change background": "Thay \u0111\u1ed5i n\u1ec1n",
    "Close": "\u0110\u00f3ng",
    "Closed": "\u0110\u00e3 \u0111\u00f3ng",
    "Continue": "Ti\u1ebfp t\u1ee5c",
    "Correct": "Ch\u00ednh x\u00e1c",
    "Correct or Past Due": "\u0110\u00fang ho\u1eb7c Qu\u00e1 h\u1ea1n",
    "Correct! This one belongs to The Bottom Zone.": "Ch\u00ednh x\u00e1c! C\u00e1i n\u00e0y thu\u1ed9c v\u1ec1 The Bottom Zone.",
    "Correct! This one belongs to The Middle Zone.": "Ch\u00ednh x\u00e1c! C\u00e1i n\u00e0y thu\u1ed9c v\u1ec1 The Middle Zone.",
    "Correct! This one belongs to The Top Zone.": "Ch\u00ednh x\u00e1c! C\u00e1i n\u00e0y thu\u1ed9c v\u1ec1 The Top Zone.",
    "Correctly placed in: {zone_title}": "\u0110\u1eb7t \u0111\u00fang trong: {zone_title}",
    "Correctly placed {correct_count} item": [
      "C\u00e1c m\u1ee5c {correct_count} \u0111\u01b0\u1ee3c \u0111\u1eb7t \u0111\u00fang"
    ],
    "DEPRECATED. Keeps maximum score achieved by student as a weighted value.": "KH\u00d4NG \u0110\u01af\u1ee2C D\u00d9NG. L\u01b0u gi\u1eef s\u1ed1 \u0111i\u1ec3m t\u1ed1i \u0111a m\u00e0 h\u1ecdc sinh \u0111\u1ea1t \u0111\u01b0\u1ee3c d\u01b0\u1edbi d\u1ea1ng gi\u00e1 tr\u1ecb c\u00f3 tr\u1ecdng s\u1ed1.",
    "Default": "M\u1eb7c \u0111\u1ecbnh",
    "Defines the number of points the problem is worth.": "X\u00e1c \u0111\u1ecbnh s\u1ed1 \u0111i\u1ec3m m\u00e0 b\u00e0i to\u00e1n c\u00f3 gi\u00e1 tr\u1ecb.",
    "Defines the number of times a student can try to answer this problem. If the value is not set, infinite attempts are allowed.": "X\u00e1c \u0111\u1ecbnh s\u1ed1 l\u1ea7n h\u1ecdc sinh c\u00f3 th\u1ec3 c\u1ed1 g\u1eafng tr\u1ea3 l\u1eddi v\u1ea5n \u0111\u1ec1 n\u00e0y. N\u1ebfu gi\u00e1 tr\u1ecb kh\u00f4ng \u0111\u01b0\u1ee3c \u0111\u1eb7t, s\u1ed1 l\u1ea7n th\u1eed v\u00f4 h\u1ea1n \u0111\u01b0\u1ee3c cho ph\u00e9p.",
    "Defines when to show the answer to the problem. A default value can be set in Advanced Settings. To revert setting a custom value, choose the 'Default' option.": "X\u00e1c \u0111\u1ecbnh th\u1eddi \u0111i\u1ec3m hi\u1ec3n th\u1ecb c\u00e2u tr\u1ea3 l\u1eddi cho v\u1ea5n \u0111\u1ec1. Gi\u00e1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c \u0111\u1eb7t trong C\u00e0i \u0111\u1eb7t n\u00e2ng cao. \u0110\u1ec3 ho\u00e0n nguy\u00ean c\u00e0i \u0111\u1eb7t gi\u00e1 tr\u1ecb t\u00f9y ch\u1ec9nh, h\u00e3y ch\u1ecdn t\u00f9y ch\u1ecdn &#39;M\u1eb7c \u0111\u1ecbnh&#39;.",
    "Did not place {missing_count} required item": [
      "Kh\u00f4ng \u0111\u1eb7t {missing_count} c\u00e1c m\u1ee5c b\u1eaft bu\u1ed9c"
    ],
    "Display label names on the image": "Hi\u1ec3n th\u1ecb t\u00ean nh\u00e3n tr\u00ean h\u00ecnh \u1ea3nh",
    "Display the heading \"Problem\" above the problem text?": "Hi\u1ec3n th\u1ecb ti\u00eau \u0111\u1ec1 &quot;S\u1ef1 c\u1ed1&quot; ph\u00eda tr\u00ean v\u0103n b\u1ea3n s\u1ef1 c\u1ed1?",
    "Display the title to the learner?": "Hi\u1ec3n th\u1ecb ti\u00eau \u0111\u1ec1 cho ng\u01b0\u1eddi h\u1ecdc?",
    "Display zone borders on the image": "Hi\u1ec3n th\u1ecb v\u00f9ng vi\u1ec1n tr\u00ean \u1ea3nh",
    "Display zone borders when dragging an item": "Hi\u1ec3n th\u1ecb \u0111\u01b0\u1eddng vi\u1ec1n v\u00f9ng khi k\u00e9o m\u1ed9t m\u1ee5c",
    "Drag and Drop": "K\u00e9o v\u00e0 th\u1ea3",
    "Drag and Drop Problem": "V\u1ea5n \u0111\u1ec1 k\u00e9o v\u00e0 th\u1ea3",
    "Drag and Drop problems consist of draggable items and dropzones. Users should select a draggable item with their keyboard and then navigate to an appropriate dropzone to drop it.": "C\u00e1c v\u1ea5n \u0111\u1ec1 k\u00e9o v\u00e0 th\u1ea3 bao g\u1ed3m c\u00e1c m\u1ee5c c\u00f3 th\u1ec3 k\u00e9o v\u00e0 v\u00f9ng th\u1ea3. Ng\u01b0\u1eddi d\u00f9ng n\u00ean ch\u1ecdn m\u1ed9t m\u1ee5c c\u00f3 th\u1ec3 k\u00e9o b\u1eb1ng b\u00e0n ph\u00edm v\u00e0 sau \u0111\u00f3 \u0111i\u1ec1u h\u01b0\u1edbng \u0111\u1ebfn v\u00f9ng th\u1ea3 th\u00edch h\u1ee3p \u0111\u1ec3 th\u1ea3 m\u1ee5c \u0111\u00f3.",
    "Drag the items onto the image above.": "K\u00e9o c\u00e1c m\u1ee5c v\u00e0o h\u00ecnh \u1ea3nh tr\u00ean.",
    "Drop Targets": "Th\u1ea3 m\u1ee5c ti\u00eau",
    "Explanation": "Gi\u1ea3i tr\u00ecnh",
    "Explanation Text": "V\u0103n b\u1ea3n gi\u1ea3i th\u00edch",
    "Feedback": "Nh\u1eadn x\u00e9t",
    "Final attempt was used, highest score is {score}": "L\u1ea7n th\u1eed cu\u1ed1i c\u00f9ng \u0111\u00e3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng, \u0111i\u1ec3m cao nh\u1ea5t l\u00e0 {score}",
    "Final feedback": "Ph\u1ea3n h\u1ed3i cu\u1ed1i c\u00f9ng",
    "Finished": "Ho\u00e0n th\u00e0nh",
    "For example, 'http://example.com/background.png' or '/static/background.png'.": "V\u00ed d\u1ee5: &#39;http://example.com/background.png&#39; ho\u1eb7c &#39;/static/background.png&#39;.",
    "Generate image and zones": "T\u1ea1o h\u00ecnh \u1ea3nh v\u00e0 v\u00f9ng",
    "Generate image automatically": "T\u1ea1o h\u00ecnh \u1ea3nh t\u1ef1 \u0111\u1ed9ng",
    "Go to Beginning": "\u0110i \u0111\u1ebfn ph\u1ea7n \u0111\u1ea7u",
    "Goes anywhere": "\u0110i b\u1ea5t c\u1ee9 \u0111\u00e2u",
    "Goes to the bottom": "\u0110i \u0111\u1ebfn \u0111\u00e1y",
    "Goes to the middle": "\u0110i \u0111\u1ebfn gi\u1eefa",
    "Goes to the top": "\u0110i l\u00ean \u0111\u1ea7u",
    "Good work! You have completed this drag and drop problem.": "L\u00e0m t\u1ed1t l\u1eafm! B\u1ea1n \u0111\u00e3 ho\u00e0n th\u00e0nh xong b\u00e0i to\u00e1n k\u00e9o th\u1ea3 n\u00e0y.",
    "Hints:": "G\u1ee3i \u00fd:",
    "I don't belong anywhere": "T\u00f4i kh\u00f4ng thu\u1ed9c v\u1ec1 n\u01a1i n\u00e0o c\u1ea3",
    "Incorrect": "Kh\u00f4ng \u0111\u00fang",
    "Indicates whether a learner has completed the problem at least once": "Cho bi\u1ebft li\u1ec7u ng\u01b0\u1eddi h\u1ecdc \u0111\u00e3 ho\u00e0n th\u00e0nh b\u00e0i to\u00e1n \u00edt nh\u1ea5t m\u1ed9t l\u1ea7n hay ch\u01b0a",
    "Information about current positions of items that a learner has dropped on the target image.": "Th\u00f4ng tin v\u1ec1 v\u1ecb tr\u00ed hi\u1ec7n t\u1ea1i c\u1ee7a v\u1eadt ph\u1ea9m m\u00e0 ng\u01b0\u1eddi h\u1ecdc \u0111\u00e3 \u0111\u00e1nh r\u01a1i tr\u00ean \u1ea3nh m\u1ee5c ti\u00eau.",
    "Information about zones, items, feedback, explanation and background image for this problem. This information is derived from the input that a course author provides via the interactive editor when configuring the problem.": "Th\u00f4ng tin v\u1ec1 khu v\u1ef1c, v\u1eadt ph\u1ea9m, ph\u1ea3n h\u1ed3i, gi\u1ea3i th\u00edch v\u00e0 h\u00ecnh n\u1ec1n cho v\u1ea5n \u0111\u1ec1 n\u00e0y. Th\u00f4ng tin n\u00e0y \u0111\u01b0\u1ee3c l\u1ea5y t\u1eeb th\u00f4ng tin \u0111\u1ea7u v\u00e0o m\u00e0 t\u00e1c gi\u1ea3 kh\u00f3a h\u1ecdc cung c\u1ea5p th\u00f4ng qua tr\u00ecnh ch\u1ec9nh s\u1eeda t\u01b0\u01a1ng t\u00e1c khi \u0111\u1ecbnh c\u1ea5u h\u00ecnh s\u1ef1 c\u1ed1.",
    "Introductory feedback": "Ph\u1ea3n h\u1ed3i gi\u1edbi thi\u1ec7u",
    "Item Bank": "Ng\u00e2n h\u00e0ng v\u1eadt ph\u1ea9m",
    "Item background color": "M\u00e0u n\u1ec1n c\u1ee7a m\u1ee5c",
    "Item definitions": "\u0110\u1ecbnh ngh\u0129a m\u1ee5c",
    "Item text color": "M\u00e0u v\u0103n b\u1ea3n m\u1ee5c",
    "Items": "M\u1eb7t h\u00e0ng",
    "Items placed here: ": "C\u00e1c v\u1eadt ph\u1ea9m \u0111\u01b0\u1ee3c \u0111\u1eb7t \u1edf \u0111\u00e2y: ",
    "Keeps maximum score achieved by student as a raw value between 0 and 1.": "Gi\u1eef \u0111i\u1ec3m t\u1ed1i \u0111a m\u00e0 h\u1ecdc sinh \u0111\u1ea1t \u0111\u01b0\u1ee3c d\u01b0\u1edbi d\u1ea1ng gi\u00e1 tr\u1ecb th\u00f4 trong kho\u1ea3ng t\u1eeb 0 \u0111\u1ebfn 1.",
    "Keyboard Help": "Tr\u1ee3 gi\u00fap b\u00e0n ph\u00edm",
    "Loading drag and drop problem.": "\u0110ang t\u1ea3i v\u1ea5n \u0111\u1ec1 k\u00e9o v\u00e0 th\u1ea3.",
    "Max number of attempts reached": "\u0110\u00e3 \u0111\u1ea1t \u0111\u1ebfn s\u1ed1 l\u1ea7n th\u1eed t\u1ed1i \u0111a",
    "Maximum attempts": "S\u1ed1 l\u1ea7n th\u1eed t\u1ed1i \u0111a",
    "Maximum items per zone": "V\u1eadt ph\u1ea9m t\u1ed1i \u0111a tr\u00ean m\u1ed7i khu v\u1ef1c",
    "Maximum score available of the problem as a raw value between 0 and 1.": "\u0110i\u1ec3m t\u1ed1i \u0111a c\u00f3 s\u1eb5n c\u1ee7a b\u00e0i to\u00e1n d\u01b0\u1edbi d\u1ea1ng gi\u00e1 tr\u1ecb th\u00f4 trong kho\u1ea3ng t\u1eeb 0 \u0111\u1ebfn 1.",
    "Misplaced {misplaced_count} item": [
      "C\u00e1c m\u1ee5c {misplaced_count} b\u1ecb \u0111\u1eb7t sai v\u1ecb tr\u00ed"
    ],
    "Misplaced {misplaced_count} item (misplaced item was returned to the item bank)": [
      "C\u00e1c v\u1eadt ph\u1ea9m {misplaced_count} b\u1ecb th\u1ea5t l\u1ea1c (c\u00e1c v\u1eadt ph\u1ea9m b\u1ecb th\u1ea5t l\u1ea1c \u0111\u00e3 \u0111\u01b0\u1ee3c tr\u1ea3 l\u1ea1i v\u00e0o ng\u00e2n h\u00e0ng v\u1eadt ph\u1ea9m)"
    ],
    "Mode": "C\u00e1ch th\u1ee9c",
    "Navigate using TAB and SHIFT+TAB to the appropriate dropzone and press CTRL+M once more to drop it here.": "\u0110i\u1ec1u h\u01b0\u1edbng b\u1eb1ng TAB v\u00e0 SHIFT+TAB \u0111\u1ebfn v\u00f9ng th\u1ea3 th\u00edch h\u1ee3p v\u00e0 nh\u1ea5n CTRL+M m\u1ed9t l\u1ea7n n\u1eefa \u0111\u1ec3 th\u1ea3 n\u00f3 v\u00e0o \u0111\u00e2y.",
    "Never": "Kh\u00f4ng bao gi\u1edd",
    "No items placed here": "Kh\u00f4ng c\u00f3 m\u1ee5c n\u00e0o \u0111\u01b0\u1ee3c \u0111\u1eb7t \u1edf \u0111\u00e2y",
    "No, this item does not belong here. Try again.": "Kh\u00f4ng, m\u1ee5c n\u00e0y kh\u00f4ng thu\u1ed9c v\u1ec1 n\u01a1i n\u00e0y. Th\u1eed l\u1ea1i.",
    "Number of attempts learner used": "S\u1ed1 l\u1ea7n h\u1ecdc vi\u00ean \u0111\u00e3 s\u1eed d\u1ee5ng",
    "Number of columns": "S\u1ed1 c\u1ed9t",
    "Number of columns and rows.": "S\u1ed1 l\u01b0\u1ee3ng c\u1ed9t v\u00e0 h\u00e0ng.",
    "Number of rows": "S\u1ed1 h\u00e0ng",
    "Of course it goes here! It goes anywhere!": "T\u1ea5t nhi\u00ean l\u00e0 n\u00f3 \u0111i t\u1edbi \u0111\u00e2y! N\u00f3 \u0111i b\u1ea5t c\u1ee9 \u0111\u00e2u!",
    "Past Due": "Qu\u00e1 h\u1ea1n",
    "Placed in: {zone_title}": "\u0110\u01b0\u1ee3c \u0111\u1eb7t trong: {zone_title}",
    "Please check over your submission.": "Vui l\u00f2ng ki\u1ec3m tra l\u1ea1i n\u1ed9i dung g\u1eedi c\u1ee7a b\u1ea1n.",
    "Please check the values you entered.": "Vui l\u00f2ng ki\u1ec3m tra c\u00e1c gi\u00e1 tr\u1ecb b\u1ea1n \u0111\u00e3 nh\u1eadp.",
    "Press CTRL+M to select a draggable item (effectively picking it up).": "Nh\u1ea5n CTRL+M \u0111\u1ec3 ch\u1ecdn m\u1ed9t m\u1ee5c c\u00f3 th\u1ec3 k\u00e9o \u0111\u01b0\u1ee3c (nh\u1ea5c n\u00f3 l\u00ean m\u1ed9t c\u00e1ch hi\u1ec7u qu\u1ea3).",
    "Press ESC if you want to cancel the drop operation (for example, to select a different item).": "Nh\u1ea5n ESC n\u1ebfu b\u1ea1n mu\u1ed1n h\u1ee7y thao t\u00e1c th\u1ea3 (v\u00ed d\u1ee5: \u0111\u1ec3 ch\u1ecdn m\u1ed9t m\u1ee5c kh\u00e1c).",
    "Problem": "V\u1ea5n \u0111\u1ec1",
    "Problem Weight": "V\u1ea5n \u0111\u1ec1 c\u00e2n n\u1eb7ng",
    "Problem data": "D\u1eef li\u1ec7u v\u1ea5n \u0111\u1ec1",
    "Problem text": "V\u0103n b\u1ea3n v\u1ea5n \u0111\u1ec1",
    "Provide custom image": "Cung c\u1ea5p h\u00ecnh \u1ea3nh t\u00f9y ch\u1ec9nh",
    "Reset": "C\u00e0i l\u1ea1i",
    "Save": "L\u01b0u",
    "Saving": "Ti\u1ebft ki\u1ec7m",
    "Show \"Problem\" heading": "Hi\u1ec3n th\u1ecb ti\u00eau \u0111\u1ec1 &quot;S\u1ef1 c\u1ed1&quot;",
    "Show Answer": "Hi\u1ec3n th\u1ecb c\u00e2u tr\u1ea3 l\u1eddi",
    "Show answer": "Hi\u1ec3n th\u1ecb c\u00e2u tr\u1ea3 l\u1eddi",
    "Show title": "Hi\u1ec3n th\u1ecb ti\u00eau \u0111\u1ec1",
    "Size of a single zone in pixels.": "K\u00edch th\u01b0\u1edbc c\u1ee7a m\u1ed9t v\u00f9ng t\u00ednh b\u1eb1ng pixel.",
    "Some of your answers were not correct.": "M\u1ed9t s\u1ed1 c\u00e2u tr\u1ea3 l\u1eddi c\u1ee7a b\u1ea1n kh\u00f4ng ch\u00ednh x\u00e1c.",
    "Standard": "Ti\u00eau chu\u1ea9n",
    "Standard mode: the problem provides immediate feedback each time a learner drops an item on a target zone. Assessment mode: the problem provides feedback only after a learner drops all available items on target zones.": "Ch\u1ebf \u0111\u1ed9 ti\u00eau chu\u1ea9n: b\u00e0i to\u00e1n cung c\u1ea5p ph\u1ea3n h\u1ed3i ngay l\u1eadp t\u1ee9c m\u1ed7i khi ng\u01b0\u1eddi h\u1ecdc \u0111\u00e1nh r\u01a1i m\u1ed9t v\u1eadt ph\u1ea9m v\u00e0o v\u00f9ng m\u1ee5c ti\u00eau. Ch\u1ebf \u0111\u1ed9 \u0111\u00e1nh gi\u00e1: v\u1ea5n \u0111\u1ec1 ch\u1ec9 cung c\u1ea5p ph\u1ea3n h\u1ed3i sau khi ng\u01b0\u1eddi h\u1ecdc b\u1ecf t\u1ea5t c\u1ea3 c\u00e1c m\u1ee5c c\u00f3 s\u1eb5n v\u00e0o v\u00f9ng m\u1ee5c ti\u00eau.",
    "Submission deadline has passed.": "Th\u1eddi h\u1ea1n n\u1ed9p b\u00e0i \u0111\u00e3 qua.",
    "Submit": "N\u1ed9p",
    "Submitting": "\u0110ang g\u1eedi",
    "TAB back to the list of draggable items and repeat this process until all of the draggable items have been placed on their respective dropzones.": "TAB quay l\u1ea1i danh s\u00e1ch c\u00e1c m\u1ee5c c\u00f3 th\u1ec3 k\u00e9o v\u00e0 l\u1eb7p l\u1ea1i quy tr\u00ecnh n\u00e0y cho \u0111\u1ebfn khi t\u1ea5t c\u1ea3 c\u00e1c m\u1ee5c c\u00f3 th\u1ec3 k\u00e9o \u0111\u01b0\u1ee3c \u0111\u1eb7t v\u00e0o v\u00f9ng th\u1ea3 t\u01b0\u01a1ng \u1ee9ng c\u1ee7a ch\u00fang.",
    "Text color to use for draggable items (example: 'white' or '#ffffff').": "M\u00e0u v\u0103n b\u1ea3n \u0111\u1ec3 s\u1eed d\u1ee5ng cho c\u00e1c m\u1ee5c c\u00f3 th\u1ec3 k\u00e9o (v\u00ed d\u1ee5: &#39;tr\u1eafng&#39; ho\u1eb7c &#39;#ffffff&#39;).",
    "The Bottom Zone": "V\u00f9ng d\u01b0\u1edbi c\u00f9ng",
    "The Middle Zone": "Khu trung l\u01b0u",
    "The Top Zone": "V\u00f9ng tr\u00ean c\u00f9ng",
    "The answer is unavailable": "C\u00e2u tr\u1ea3 l\u1eddi kh\u00f4ng c\u00f3 s\u1eb5n",
    "The background color of draggable items in the problem (example: 'blue' or '#0000ff').": "M\u00e0u n\u1ec1n c\u1ee7a c\u00e1c m\u1ee5c c\u00f3 th\u1ec3 k\u00e9o trong b\u00e0i to\u00e1n (v\u00ed d\u1ee5: &#39;blue&#39; ho\u1eb7c &#39;#0000ff&#39;).",
    "The description of the problem or instructions shown to the learner.": "M\u00f4 t\u1ea3 v\u1ea5n \u0111\u1ec1 ho\u1eb7c h\u01b0\u1edbng d\u1eabn hi\u1ec3n th\u1ecb cho ng\u01b0\u1eddi h\u1ecdc.",
    "The title of the drag and drop problem. The title is displayed to learners.": "Ti\u00eau \u0111\u1ec1 c\u1ee7a v\u1ea5n \u0111\u1ec1 k\u00e9o v\u00e0 th\u1ea3. Ti\u00eau \u0111\u1ec1 \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb cho ng\u01b0\u1eddi h\u1ecdc.",
    "There was an error with your form.": "\u0110\u00e3 x\u1ea3y ra l\u1ed7i v\u1edbi bi\u1ec3u m\u1eabu c\u1ee7a b\u1ea1n.",
    "This is a screen reader-friendly problem.": "\u0110\u00e2y l\u00e0 m\u1ed9t v\u1ea5n \u0111\u1ec1 th\u00e2n thi\u1ec7n v\u1edbi tr\u00ecnh \u0111\u1ecdc m\u00e0n h\u00ecnh.",
    "This setting limits the number of items that can be dropped into a single zone.": "C\u00e0i \u0111\u1eb7t n\u00e0y gi\u1edbi h\u1ea1n s\u1ed1 l\u01b0\u1ee3ng m\u1ee5c c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c th\u1ea3 v\u00e0o m\u1ed9t v\u00f9ng.",
    "Title": "Ti\u00eau \u0111\u1ec1",
    "Unknown DnDv2 mode {mode} - course is misconfigured": "Ch\u1ebf \u0111\u1ed9 DnDv2 kh\u00f4ng x\u00e1c \u0111\u1ecbnh {mode} - kh\u00f3a h\u1ecdc b\u1ecb \u0111\u1ecbnh c\u1ea5u h\u00ecnh sai",
    "Unknown Zone": "V\u00f9ng kh\u00f4ng x\u00e1c \u0111\u1ecbnh",
    "Use only TAB and SHIFT+TAB to navigate between draggable items and drop zones.": "Ch\u1ec9 s\u1eed d\u1ee5ng TAB v\u00e0 SHIFT+TAB \u0111\u1ec3 \u0111i\u1ec1u h\u01b0\u1edbng gi\u1eefa c\u00e1c m\u1ee5c c\u00f3 th\u1ec3 k\u00e9o v\u00e0 v\u00f9ng th\u1ea3.",
    "Use this zone to associate an item with the bottom layer of the triangle.": "S\u1eed d\u1ee5ng v\u00f9ng n\u00e0y \u0111\u1ec3 li\u00ean k\u1ebft m\u1ed9t m\u1ee5c v\u1edbi l\u1edbp d\u01b0\u1edbi c\u00f9ng c\u1ee7a h\u00ecnh tam gi\u00e1c.",
    "Use this zone to associate an item with the middle layer of the triangle.": "S\u1eed d\u1ee5ng v\u00f9ng n\u00e0y \u0111\u1ec3 li\u00ean k\u1ebft m\u1ed9t m\u1ee5c v\u1edbi l\u1edbp gi\u1eefa c\u1ee7a h\u00ecnh tam gi\u00e1c.",
    "Use this zone to associate an item with the top layer of the triangle.": "S\u1eed d\u1ee5ng v\u00f9ng n\u00e0y \u0111\u1ec3 li\u00ean k\u1ebft m\u1ed9t m\u1ee5c v\u1edbi l\u1edbp tr\u00ean c\u00f9ng c\u1ee7a h\u00ecnh tam gi\u00e1c.",
    "You can complete this problem using only your keyboard by following the guidance below:": "B\u1ea1n c\u00f3 th\u1ec3 ho\u00e0n th\u00e0nh v\u1ea5n \u0111\u1ec1 n\u00e0y ch\u1ec9 b\u1eb1ng b\u00e0n ph\u00edm b\u1eb1ng c\u00e1ch l\u00e0m theo h\u01b0\u1edbng d\u1eabn b\u00ean d\u01b0\u1edbi:",
    "You cannot add any more items to this zone.": "B\u1ea1n kh\u00f4ng th\u1ec3 th\u00eam b\u1ea5t k\u1ef3 m\u1ee5c n\u00e0o n\u1eefa v\u00e0o v\u00f9ng n\u00e0y.",
    "You have used {used} of {total} attempts.": "B\u1ea1n \u0111\u00e3 s\u1eed d\u1ee5ng {used} trong s\u1ed1 l\u1ea7n th\u1eed {total} .",
    "You silly, there are no zones for this one.": "\u0110\u1ed3 ng\u1ed1c, kh\u00f4ng c\u00f3 khu v\u1ef1c n\u00e0o cho c\u00e1i n\u00e0y c\u1ea3.",
    "Your highest score is {score}": "\u0110i\u1ec3m cao nh\u1ea5t c\u1ee7a b\u1ea1n l\u00e0 {score}",
    "Zone Layout": "B\u1ed1 c\u1ee5c v\u00f9ng",
    "Zone Size": "K\u00edch th\u01b0\u1edbc v\u00f9ng",
    "Zone borders": "Bi\u00ean gi\u1edbi v\u00f9ng",
    "Zone definitions": "\u0110\u1ecbnh ngh\u0129a v\u00f9ng",
    "Zone height": "Chi\u1ec1u cao v\u00f9ng",
    "Zone labels": "Nh\u00e3n v\u00f9ng",
    "Zone width": "Chi\u1ec1u r\u1ed9ng v\u00f9ng",
    "Zone {num}": [
      "V\u00f9ng {num}"
    ],
    "Zones": "Khu",
    "do_attempt handler should only be called for assessment mode": "Tr\u00ecnh x\u1eed l\u00fd do_attempt ch\u1ec9 n\u00ean \u0111\u01b0\u1ee3c g\u1ecdi cho ch\u1ebf \u0111\u1ed9 \u0111\u00e1nh gi\u00e1",
    "droppable": "c\u00f3 th\u1ec3 b\u1ecf \u0111\u01b0\u1ee3c",
    "show_answer handler should only be called for assessment mode": "Tr\u00ecnh x\u1eed l\u00fd show_answer ch\u1ec9 n\u00ean \u0111\u01b0\u1ee3c g\u1ecdi cho ch\u1ebf \u0111\u1ed9 \u0111\u00e1nh gi\u00e1",
    "{earned}/{possible} point (graded)": [
      "{earned} / {possible} \u0111i\u1ec3m (\u0111\u00e3 ch\u1ea5m \u0111i\u1ec3m)"
    ],
    "{earned}/{possible} point (ungraded)": [
      "{earned} / {possible} \u0111i\u1ec3m (kh\u00f4ng ph\u00e2n lo\u1ea1i)"
    ],
    "{possible} point possible (graded)": [
      "{possible} \u0111i\u1ec3m c\u00f3 th\u1ec3 (\u0111\u01b0\u1ee3c x\u1ebfp lo\u1ea1i)"
    ],
    "{possible} point possible (ungraded)": [
      "{possible} \u0111i\u1ec3m c\u00f3 th\u1ec3 (kh\u00f4ng t\u00ednh \u0111i\u1ec3m)"
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
                DragAndDropI18N.init();
                global.DragAndDropI18N = DragAndDropI18N;
            }(this));
        