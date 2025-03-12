(function(q,f){if("function"===typeof define&&define.amd)define('backbone.associations',["underscore","backbone"],function(g,i){return f(q,i,g)});else if("undefined"!==typeof exports){var g=require("underscore"),i=require("backbone");f(q,i,g);"undefined"!==typeof module&&module.exports&&(module.exports=i);exports=i}else f(q,q.Backbone,q._)})(this,function(q,f,g){var i,p,t,w,n,v,D,E,k,z,F,s={};i=f.Model;p=f.Collection;t=i.prototype;n=p.prototype;w=f.Events;f.Associations={VERSION:"0.6.2"};f.Associations.scopes=[];var G=function(){return k},
A=function(a){if(!g.isString(a)||1>g.size(a))a=".";k=a;D=RegExp("[\\"+k+"\\[\\]]+","g");E=RegExp("[^\\"+k+"\\[\\]]+","g")};try{Object.defineProperty(f.Associations,"SEPARATOR",{enumerable:!0,get:G,set:A})}catch(J){}f.Associations.Many=f.Many="Many";f.Associations.One=f.One="One";f.Associations.Self=f.Self="Self";f.Associations.SEPARATOR=".";f.Associations.getSeparator=G;f.Associations.setSeparator=A;f.Associations.EVENTS_BUBBLE=!0;f.Associations.EVENTS_WILDCARD=!0;f.Associations.EVENTS_NC=!1;A();
v=f.AssociatedModel=f.Associations.AssociatedModel=i.extend({relations:void 0,_proxyCalls:void 0,constructor:function(a,c){c&&c.__parents__&&(this.parents=[c.__parents__]);i.apply(this,arguments)},on:function(a,c,d){var b=w.on.apply(this,arguments);if(f.Associations.EVENTS_NC)return b;var l=/\s+/;g.isString(a)&&a&&!l.test(a)&&c&&(l=B(a))&&(s[l]="undefined"===typeof s[l]?1:s[l]+1);return b},off:function(a,c,d){if(f.Associations.EVENTS_NC)return w.off.apply(this,arguments);var b=/\s+/,l=this._events,
e={},h=l?g.keys(l):[],m=!a&&!c&&!d,i=g.isString(a)&&!b.test(a);if(m||i)for(var b=0,j=h.length;b<j;b++)e[h[b]]=l[h[b]]?l[h[b]].length:0;var p=w.off.apply(this,arguments);if(m||i){b=0;for(j=h.length;b<j;b++)(m=B(h[b]))&&(s[m]=l[h[b]]?s[m]-(e[h[b]]-l[h[b]].length):s[m]-e[h[b]])}return p},get:function(a){var c=this.__attributes__,d=t.get.call(this,a),c=c?x(d)?d:c[a]:d;return x(c)?c:this._getAttr.apply(this,arguments)},set:function(a,c,d){var b;g.isObject(a)||null==a?(b=a,d=c):(b={},b[a]=c);a=this._set(b,
d);this._processPendingEvents();return a},_set:function(a,c){var d,b,l,e,h=this;if(!a)return this;this.__attributes__=a;for(d in a)if(b||(b={}),d.match(D)){var f=H(d);e=g.initial(f);f=f[f.length-1];e=this.get(e);e instanceof i&&(e=b[e.cid]||(b[e.cid]={model:e,data:{}}),e.data[f]=a[d])}else e=b[this.cid]||(b[this.cid]={model:this,data:{}}),e.data[d]=a[d];if(b)for(l in b)e=b[l],this._setAttr.call(e.model,e.data,c)||(h=!1);else h=this._setAttr.call(this,a,c);delete this.__attributes__;return h},_setAttr:function(a,
c){var d;c||(c={});if(c.unset)for(d in a)a[d]=void 0;this.parents=this.parents||[];this.relations&&g.each(this.relations,function(b){var d=b.key,e=b.scope||q,h=this._transformRelatedModel(b,a),m=this._transformCollectionType(b,h,a),u=g.isString(b.map)?C(b.map,e):b.map,j=this.attributes[d],k=j&&j.idAttribute,o,r,n=!1;o=b.options?g.extend({},b.options,c):c;if(a[d]){e=g.result(a,d);e=u?u.call(this,e,m?m:h):e;if(x(e))if(b.type===f.Many)j?(j._deferEvents=!0,j[o.reset?"reset":"set"](e instanceof p?e.models:
e,o),h=j):(n=!0,e instanceof p?h=e:(h=this._createCollection(m||p,b.collectionOptions||(h?{model:h}:{})),h[o.reset?"reset":"set"](e,o)));else if(b.type===f.One)b=e instanceof i?e.attributes.hasOwnProperty(k):e.hasOwnProperty(k),m=e instanceof i?e.attributes[k]:e[k],j&&b&&j.attributes[k]===m?(j._deferEvents=!0,j._set(e instanceof i?e.attributes:e,o),h=j):(n=!0,e instanceof i?h=e:(o.__parents__=this,h=new h(e,o),delete o.__parents__));else throw Error("type attribute must be specified and have the values Backbone.One or Backbone.Many");
else h=e;r=a[d]=h;if(n||r&&!r._proxyCallback)r._proxyCallback||(r._proxyCallback=function(){return f.Associations.EVENTS_BUBBLE&&this._bubbleEvent.call(this,d,r,arguments)}),r.on("all",r._proxyCallback,this)}a.hasOwnProperty(d)&&this._setupParents(a[d],this.attributes[d])},this);return t.set.call(this,a,c)},_bubbleEvent:function(a,c,d){var b=d[0].split(":"),g=b[0],e="nested-change"==d[0],h="change"===g,m=d[1],u=-1,j=c._proxyCalls,b=b[1],n=!b||-1==b.indexOf(k),o;if(!e&&(n&&(F=B(d[0])||a),f.Associations.EVENTS_NC||
s[F])){if(f.Associations.EVENTS_WILDCARD&&/\[\*\]/g.test(b))return this;if(c instanceof p&&(h||b))u=c.indexOf(z||m);this instanceof i&&(z=this);b=a+(-1!==u&&(h||b)?"["+u+"]":"")+(b?k+b:"");f.Associations.EVENTS_WILDCARD&&(o=b.replace(/\[\d+\]/g,"[*]"));e=[];e.push.apply(e,d);e[0]=g+":"+b;f.Associations.EVENTS_WILDCARD&&b!==o&&(e[0]=e[0]+" "+g+":"+o);j=c._proxyCalls=j||{};if(this._isEventAvailable.call(this,j,b))return this;j[b]=!0;h&&(this._previousAttributes[a]=c._previousAttributes,this.changed[a]=
c);this.trigger.apply(this,e);f.Associations.EVENTS_NC&&(h&&this.get(b)!=d[2])&&(a=["nested-change",b,d[1]],d[2]&&a.push(d[2]),this.trigger.apply(this,a));j&&b&&delete j[b];z=void 0;return this}},_isEventAvailable:function(a,c){return g.find(a,function(a,b){return-1!==c.indexOf(b,c.length-b.length)})},_setupParents:function(a,c){a&&(a.parents=a.parents||[],-1==g.indexOf(a.parents,this)&&a.parents.push(this));c&&(0<c.parents.length&&c!=a)&&(c.parents=g.difference(c.parents,[this]),c._proxyCallback&&
c.off("all",c._proxyCallback,this))},_createCollection:function(a,c){var c=g.defaults(c,{model:a.model}),d=new a([],g.isFunction(c)?c.call(this):c);d.parents=[this];return d},_processPendingEvents:function(){this._processedEvents||(this._processedEvents=!0,this._deferEvents=!1,g.each(this._pendingEvents,function(a){a.c.trigger.apply(a.c,a.a)}),this._pendingEvents=[],g.each(this.relations,function(a){(a=this.attributes[a.key])&&a._processPendingEvents&&a._processPendingEvents()},this),delete this._processedEvents)},
_transformRelatedModel:function(a,c){var d=a.relatedModel,b=a.scope||q;d&&!(d.prototype instanceof i)&&(d=g.isFunction(d)?d.call(this,a,c):d);d&&g.isString(d)&&(d=d===f.Self?this.constructor:C(d,b));if(a.type===f.One){if(!d)throw Error("specify a relatedModel for Backbone.One type");if(!(d.prototype instanceof f.Model))throw Error("specify an AssociatedModel or Backbone.Model for Backbone.One type");}return d},_transformCollectionType:function(a,c,d){var b=a.collectionType,l=a.scope||q;if(b&&g.isFunction(b)&&
b.prototype instanceof i)throw Error("type is of Backbone.Model. Specify derivatives of Backbone.Collection");b&&!(b.prototype instanceof p)&&(b=g.isFunction(b)?b.call(this,a,d):b);b&&g.isString(b)&&(b=C(b,l));if(b&&!b.prototype instanceof p)throw Error("collectionType must inherit from Backbone.Collection");if(a.type===f.Many&&!c&&!b)throw Error("specify either a relatedModel or collectionType");return b},trigger:function(a){this._deferEvents?(this._pendingEvents=this._pendingEvents||[],this._pendingEvents.push({c:this,
a:arguments})):t.trigger.apply(this,arguments)},toJSON:function(a){var c={},d;c[this.idAttribute]=this.id;this.visited||(this.visited=!0,c=t.toJSON.apply(this,arguments),a&&a.serialize_keys&&(c=g.pick(c,a.serialize_keys)),this.relations&&g.each(this.relations,function(b){var f=b.key,e=b.remoteKey,h=this.attributes[f],i=!b.isTransient,b=b.serialize||[],k=g.clone(a);delete c[f];i&&(b.length&&(k?k.serialize_keys=b:k={serialize_keys:b}),d=h&&h.toJSON?h.toJSON(k):h,c[e||f]=g.isArray(d)?g.compact(d):d)},
this),delete this.visited);return c},clone:function(a){return new this.constructor(this.toJSON(a))},cleanup:function(a){a=a||{};g.each(this.relations,function(a){if(a=this.attributes[a.key])a._proxyCallback&&a.off("all",a._proxyCallback,this),a.parents=g.difference(a.parents,[this])},this);!a.listen&&this.off()},destroy:function(a){var a=a?g.clone(a):{},a=g.defaults(a,{remove_references:!0,listen:!0}),c=this;if(a.remove_references&&a.wait){var d=a.success;a.success=function(b){d&&d(c,b,a);c.cleanup(a)}}var b=
t.destroy.apply(this,[a]);a.remove_references&&!a.wait&&c.cleanup(a);return b},_getAttr:function(a){var c=this,d=this.__attributes__,a=H(a),b,f;if(!(1>g.size(a))){for(f=0;f<a.length;f++){b=a[f];if(!c)break;c=c instanceof p?isNaN(b)?void 0:c.at(b):d?x(c.attributes[b])?c.attributes[b]:d[b]:c.attributes[b]}return c}}});var H=function(a){return""===a?[""]:g.isString(a)?a.match(E):a||[]},B=function(a){if(!a)return a;a=a.split(":");return 1<a.length?(a=a[a.length-1],a=a.split(k),1<a.length?a[a.length-1].split("[")[0]:
a[0].split("[")[0]):""},C=function(a,c){var d,b=[c];b.push.apply(b,f.Associations.scopes);for(var i,e=0,h=b.length;e<h;++e)if(i=b[e])if(d=g.reduce(a.split(k),function(a,b){return a[b]},i))break;return d},I=function(a,c,d){var b,f;g.find(a,function(a){if(b=g.find(a.relations,function(b){return a.get(b.key)===c},this))return f=a,!0},this);return b&&b.map?b.map.call(f,d,c):d},x=function(a){return!g.isUndefined(a)&&!g.isNull(a)},y={};g.each(["set","remove","reset"],function(a){y[a]=p.prototype[a];n[a]=
function(c,d){this.model.prototype instanceof v&&this.parents&&(arguments[0]=I(this.parents,this,c));return y[a].apply(this,arguments)}});y.trigger=n.trigger;n.trigger=function(a){this._deferEvents?(this._pendingEvents=this._pendingEvents||[],this._pendingEvents.push({c:this,a:arguments})):y.trigger.apply(this,arguments)};n._processPendingEvents=v.prototype._processPendingEvents;n.on=v.prototype.on;n.off=v.prototype.off;return f});
define('js/models/group',[
    'backbone', 'underscore', 'underscore.string', 'gettext',
    'backbone.associations'
], function(Backbone, _, str, gettext) {
    'use strict';

    var Group = Backbone.AssociatedModel.extend({
        defaults: function() {
            return {
                name: '',
                version: 1,
                order: null,
                usage: []
            };
        },
        url: function() {
            var parentModel = this.collection.parents[0];
            return parentModel.urlRoot + '/' + encodeURIComponent(parentModel.id) + '/' + encodeURIComponent(this.id);
        },

        reset: function() {
            this.set(this._originalAttributes, {parse: true});
        },

        isEmpty: function() {
            return !this.get('name');
        },

        toJSON: function() {
            return {
                id: this.get('id'),
                name: this.get('name'),
                version: this.get('version'),
                usage: this.get('usage')
            };
        },

        validate: function(attrs) {
            if (!str.trim(attrs.name)) {
                return {
                    message: gettext('Group name is required'),
                    attributes: {name: true}
                };
            }
        }
    });

    return Group;
});

define('js/collections/group',[
    'underscore', 'underscore.string', 'backbone', 'gettext', 'js/models/group'
],
function(_, str, Backbone, gettext, GroupModel) {
    'use strict';

    var GroupCollection = Backbone.Collection.extend({
        model: GroupModel,
        comparator: 'order',
        /*
         * Return next index for the model.
         * @return {Number}
         */
        nextOrder: function() {
            if (!this.length) {
                return 0;
            }

            return this.last().get('order') + 1;
        },
        /**
         * Indicates if the collection is empty when all the models are empty
         * or the collection does not include any models.
         * */
        isEmpty: function() {
            return this.length === 0 || this.every(function(m) {
                return m.isEmpty();
            });
        },

        /*
         * Return default name for the group.
         * @return {String}
         * @examples
         * Group A, Group B, Group AA, Group ZZZ etc.
         */
        getNextDefaultGroupName: function() {
            var index = this.nextOrder(),
                usedNames = _.pluck(this.toJSON(), 'name'),
                name = '';

            do {
                name = str.sprintf(gettext('Group %s'), this.getGroupId(index));
                index++;
            } while (_.contains(usedNames, name));

            return name;
        },

        /*
         * Return group id for the default name of the group.
         * @param {Number} number Current index of the model in the collection.
         * @return {String}
         * @examples
         * A, B, AA in Group A, Group B, ..., Group AA, etc.
         */
        getGroupId: (function() {
            /*
                Translators: Dictionary used for creation ids that are used in
                default group names. For example: A, B, AA in Group A,
                Group B, ..., Group AA, etc.
            */
            var dict = gettext('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split(''),
                len = dict.length,
                divide;

            divide = function(numerator, denominator) {
                if (!_.isNumber(numerator) || !denominator) {
                    return null;
                }

                return {
                    quotient: numerator / denominator,
                    remainder: numerator % denominator
                };
            };

            return function getId(number) {
                var accumulatedValues = '',
                    result = divide(number, len),
                    index;

                if (result) {
                    // subtract 1 to start the count with 0.
                    index = Math.floor(result.quotient) - 1;

                    // Proceed by dividing the non-remainder part of the
                    // dividend by the desired base until the result is less
                    // than one.
                    if (index < len) {
                        // if index < 0, we do not need an additional power.
                        if (index > -1) {
                            // Get value for the next power.
                            accumulatedValues += dict[index];
                        }
                    } else {
                        // If we need more than 1 additional power.
                        // Get value for the next powers.
                        accumulatedValues += getId(index);
                    }

                    // Accumulated values + the current reminder
                    return accumulatedValues + dict[result.remainder];
                }

                return String(number);
            };
        }())
    });

    return GroupCollection;
});

// Once generated by CoffeeScript 1.9.3, but now lives as pure JS
/* eslint-disable */
(function() {
  this.AjaxPrefix = {
    addAjaxPrefix: function(jQuery, prefix) {
      jQuery.postWithPrefix = function(url, data, callback, type) {
        return $.post("" + (prefix()) + url, data, callback, type);
      };
      jQuery.getWithPrefix = function(url, data, callback, type) {
        return $.get("" + (prefix()) + url, data, callback, type);
      };
      return jQuery.ajaxWithPrefix = function(url, settings) {
        if (settings != null) {
          return $.ajax("" + (prefix()) + url, settings);
        } else {
          settings = url;
          settings.url = "" + (prefix()) + settings.url;
          return $.ajax(settings);
        }
      };
    }
  };

}).call(this);

define("js/src/ajax_prefix", function(){});

/**
 * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/domReady for details
 */
/*jslint */
/*global require: false, define: false, requirejs: false,
  window: false, clearInterval: false, document: false,
  self: false, setInterval: false */


define('domReady',[],function () {
    'use strict';

    var isTop, testDiv, scrollIntervalId,
        isBrowser = typeof window !== "undefined" && window.document,
        isPageLoaded = !isBrowser,
        doc = isBrowser ? document : null,
        readyCalls = [];

    function runCallbacks(callbacks) {
        var i;
        for (i = 0; i < callbacks.length; i += 1) {
            callbacks[i](doc);
        }
    }

    function callReady() {
        var callbacks = readyCalls;

        if (isPageLoaded) {
            //Call the DOM ready callbacks
            if (callbacks.length) {
                readyCalls = [];
                runCallbacks(callbacks);
            }
        }
    }

    /**
     * Sets the page as loaded.
     */
    function pageLoaded() {
        if (!isPageLoaded) {
            isPageLoaded = true;
            if (scrollIntervalId) {
                clearInterval(scrollIntervalId);
            }

            callReady();
        }
    }

    if (isBrowser) {
        if (document.addEventListener) {
            //Standards. Hooray! Assumption here that if standards based,
            //it knows about DOMContentLoaded.
            document.addEventListener("DOMContentLoaded", pageLoaded, false);
            window.addEventListener("load", pageLoaded, false);
        } else if (window.attachEvent) {
            window.attachEvent("onload", pageLoaded);

            testDiv = document.createElement('div');
            try {
                isTop = window.frameElement === null;
            } catch (e) {}

            //DOMContentLoaded approximation that uses a doScroll, as found by
            //Diego Perini: http://javascript.nwbox.com/IEContentLoaded/,
            //but modified by other contributors, including jdalton
            if (testDiv.doScroll && isTop && window.external) {
                scrollIntervalId = setInterval(function () {
                    try {
                        testDiv.doScroll();
                        pageLoaded();
                    } catch (e) {}
                }, 30);
            }
        }

        //Check if document already complete, and if so, just trigger page load
        //listeners. Latest webkit browsers also use "interactive", and
        //will fire the onDOMContentLoaded before "interactive" but not after
        //entering "interactive" or "complete". More details:
        //http://dev.w3.org/html5/spec/the-end.html#the-end
        //http://stackoverflow.com/questions/3665561/document-readystate-of-interactive-vs-ondomcontentloaded
        //Hmm, this is more complicated on further use, see "firing too early"
        //bug: https://github.com/requirejs/domReady/issues/1
        //so removing the || document.readyState === "interactive" test.
        //There is still a window.onload binding that should get fired if
        //DOMContentLoaded is missed.
        if (document.readyState === "complete") {
            pageLoaded();
        }
    }

    /** START OF PUBLIC API **/

    /**
     * Registers a callback for DOM ready. If DOM is already ready, the
     * callback is called immediately.
     * @param {Function} callback
     */
    function domReady(callback) {
        if (isPageLoaded) {
            callback(doc);
        } else {
            readyCalls.push(callback);
        }
        return domReady;
    }

    domReady.version = '2.0.1';

    /**
     * Loader Plugin API method
     */
    domReady.load = function (name, req, onLoad, config) {
        if (config.isBuild) {
            onLoad(null);
        } else {
            domReady(onLoad);
        }
    };

    /** END OF PUBLIC API **/

    return domReady;
});

define('text',{load: function(id){throw new Error("Dynamic load not allowed: " + id);}});

define('text!common/templates/components/system-feedback.underscore',[],function () { return '<div class="wrapper wrapper-<%- type %> wrapper-<%- type %>-<%- intent %>\n            <% if(obj.shown) { %>is-shown<% } else { %>is-hiding<% } %>\n            <% if(_.contains([\'help\', \'mini\'], intent)) { %>wrapper-<%- type %>-status<% } %>"\n     id="<%- type %>-<%- intent %>"\n     aria-hidden="<% if(obj.shown) { %>false<% } else { %>true<% } %>"\n     aria-labelledby="<%- type %>-<%- intent %>-title"\n     tabindex="-1"\n     <% if (obj.message) { %>aria-describedby="<%- type %>-<%- intent %>-description" <% } %>\n     <% if (obj.actions) { %>role="dialog"<% } %>\n  >\n  <div class="<%- type %> <%- intent %> <% if(obj.actions) { %>has-actions<% } %>">\n    <% if(obj.icon) { %>\n      <% var iconClass = {"warning": "warning", "confirmation": "check", "error": "warning", "announcement": "bullhorn", "step-required": "exclamation-circle", "help": "question", "mini": "cog", "info": "info-circle"} %>\n      <span class="feedback-symbol fa fa-<%- iconClass[intent] %>" aria-hidden="true"></span>\n    <% } %>\n\n    <div class="copy">\n      <h2 class="title title-3" id="<%- type %>-<%- intent %>-title"><%- title %></h2>\n      <% if(obj.message) { %><p class="message" id="<%- type %>-<%- intent %>-description"><%- message %></p><% } %>\n    </div>\n\n    <% if(obj.actions) { %>\n    <nav class="nav-actions">\n      <ul>\n        <% if(actions.primary) { %>\n        <li class="nav-item">\n          <button class="action-primary <%- actions.primary.class %>"><%- actions.primary.text %></button>\n        </li>\n        <% } %>\n        <% if(actions.secondary) {\n             _.each(actions.secondary, function(secondary) { %>\n        <li class="nav-item">\n          <a class="action-secondary <%- secondary.class %>" tabindex="0"><%- secondary.text %></a>\n        </li>\n        <%   });\n           } %>\n      </ul>\n    </nav>\n    <% } %>\n\n    <% if(obj.closeIcon) { %>\n    <a href="#" rel="view" class="action action-close action-<%- type %>-close">\n      <span class="icon fa fa-times-circle" aria-hidden="true"></span>\n      <span class="label">close <%- type %></span>\n    </a>\n    <% } %>\n  </div>\n</div>\n';});

(function(define) {
    'use strict';

    define('common/js/components/views/feedback',[
        'jquery',
        'underscore',
        'underscore.string',
        'backbone',
        'edx-ui-toolkit/js/utils/html-utils',
        'text!../../../../common/templates/components/system-feedback.underscore'
    ],
    function($, _, str, Backbone, HtmlUtils, systemFeedbackTemplate) {
        var tabbableElements = [
            "a[href]:not([tabindex='-1'])",
            "area[href]:not([tabindex='-1'])",
            "input:not([disabled]):not([tabindex='-1'])",
            "select:not([disabled]):not([tabindex='-1'])",
            "textarea:not([disabled]):not([tabindex='-1'])",
            "button:not([disabled]):not([tabindex='-1'])",
            "iframe:not([tabindex='-1'])",
            "[tabindex]:not([tabindex='-1'])",
            "[contentEditable=true]:not([tabindex='-1'])"
        ];
        var SystemFeedback = Backbone.View.extend({
            options: {
                title: '',
                message: '',
                intent: null, // "warning", "confirmation", "error", "announcement", "step-required", etc
                type: null, // "alert", "notification", or "prompt": set by subclass
                shown: true, // is this view currently being shown?
                icon: true, // should we render an icon related to the message intent?
                closeIcon: true, // should we render a close button in the top right corner?
                minShown: 0, // ms after this view has been shown before it can be hidden
                maxShown: Infinity, // ms after this view has been shown before it will be automatically hidden
                outFocusElement: null // element to send focus to on hide

                /* Could also have an "actions" hash: here is an example demonstrating
                    the expected structure. For each action, by default the framework
                    will call preventDefault on the click event before the function is
                    run; to make it not do that, just pass `preventDefault: false` in
                    the action object.

                actions: {
                    primary: {
                        "text": "Save",
                        "class": "action-save",
                        "click": function(view) {
                            // do something when Save is clicked
                        }
                    },
                    secondary: [
                        {
                            "text": "Cancel",
                            "class": "action-cancel",
                            "click": function(view) {}
                        }, {
                            "text": "Discard Changes",
                            "class": "action-discard",
                            "click": function(view) {}
                        }
                    ]
                }
                */
            },

            initialize: function(options) {
                this.options = _.extend({}, this.options, options);
                if (!this.options.type) {
                    throw 'SystemFeedback: type required (given ' // eslint-disable-line no-throw-literal
                            + JSON.stringify(this.options) + ')';
                }
                if (!this.options.intent) {
                    throw 'SystemFeedback: intent required (given ' // eslint-disable-line no-throw-literal
                            + JSON.stringify(this.options) + ')';
                }
                this.setElement($('#page-' + this.options.type));
                // handle single "secondary" action
                if (this.options.actions && this.options.actions.secondary
                            && !_.isArray(this.options.actions.secondary)) {
                    this.options.actions.secondary = [this.options.actions.secondary];
                }
                return this;
            },

            inFocus: function(wrapperElementSelector) {
                var wrapper = wrapperElementSelector || '.wrapper',
                    tabbables;
                this.options.outFocusElement = this.options.outFocusElement || document.activeElement;

                // Set focus to the container.
                this.$(wrapper).first().focus();

                // Make tabs within the prompt loop rather than setting focus
                // back to the main content of the page.
                tabbables = this.$(tabbableElements.join());
                tabbables.on('keydown', function(event) {
                    // On tab backward from the first tabbable item in the prompt
                    if (event.which === 9 && event.shiftKey && event.target === tabbables.first()[0]) {
                        event.preventDefault();
                        tabbables.last().focus();
                    } else if (event.which === 9 && !event.shiftKey && event.target === tabbables.last()[0]) {
                        // On tab forward from the last tabbable item in the prompt
                        event.preventDefault();
                        tabbables.first().focus();
                    }
                });

                return this;
            },

            outFocus: function() {
                this.$(tabbableElements.join()).off('keydown');
                if (this.options.outFocusElement) {
                    this.options.outFocusElement.focus();
                }
                return this;
            },

            // public API: show() and hide()
            show: function() {
                clearTimeout(this.hideTimeout);
                this.options.shown = true;
                this.shownAt = new Date();
                this.render();
                if ($.isNumeric(this.options.maxShown)) {
                    this.hideTimeout = setTimeout(_.bind(this.hide, this),
                        this.options.maxShown);
                }
                return this;
            },

            hide: function() {
                if (this.shownAt && $.isNumeric(this.options.minShown)
                            && this.options.minShown > new Date() - this.shownAt) {
                    clearTimeout(this.hideTimeout);
                    this.hideTimeout = setTimeout(_.bind(this.hide, this),
                        this.options.minShown - (new Date() - this.shownAt));
                } else {
                    this.options.shown = false;
                    delete this.shownAt;
                    this.render();
                }
                return this;
            },

            // the rest of the API should be considered semi-private
            events: {
                'click .action-close': 'hide',
                'click .action-primary': 'primaryClick',
                'click .action-secondary': 'secondaryClick'
            },

            render: function() {
                // there can be only one active view of a given type at a time: only
                // one alert, only one notification, only one prompt. Therefore, we'll
                // use a singleton approach.
                var singleton = SystemFeedback['active_' + this.options.type];
                if (singleton && singleton !== this) {
                    singleton.stopListening();
                    singleton.undelegateEvents();
                }
                HtmlUtils.setHtml(this.$el, HtmlUtils.template(systemFeedbackTemplate)(this.options));
                SystemFeedback['active_' + this.options.type] = this;
                return this;
            },

            primaryClick: function(event) {
                var actions, primary;
                actions = this.options.actions;
                if (!actions) { return; }
                primary = actions.primary;
                if (!primary) { return; }
                if (primary.preventDefault !== false) {
                    event.preventDefault();
                }
                if (primary.click) {
                    primary.click.call(event.target, this, event);
                }
            },

            secondaryClick: function(event) {
                var actions, secondaryList, secondary, i;
                actions = this.options.actions;
                if (!actions) { return; }
                secondaryList = actions.secondary;
                if (!secondaryList) { return; }
                // which secondary action was clicked?
                i = 0; // default to the first secondary action (easier for testing)
                if (event && event.target) {
                    i = _.indexOf(this.$('.action-secondary'), event.target);
                }
                secondary = secondaryList[i];
                if (secondary.preventDefault !== false) {
                    event.preventDefault();
                }
                if (secondary.click) {
                    secondary.click.call(event.target, this, event);
                }
            }
        });
        return SystemFeedback;
    });
}).call(this, define || RequireJS.define);

(function(define) {
    'use strict';

    define('common/js/components/views/feedback_notification',['jquery', 'underscore', 'underscore.string', './feedback'],
        function($, _, str, SystemFeedbackView) {
            var Notification = SystemFeedbackView.extend({
                options: $.extend({}, SystemFeedbackView.prototype.options, {
                    type: 'notification',
                    closeIcon: false
                })
            });

            // create Notification.Warning, Notification.Confirmation, etc
            var capitalCamel, intents, miniOptions;
            capitalCamel = _.compose(str.capitalize, str.camelize);
            intents = ['warning', 'error', 'confirmation', 'announcement', 'step-required', 'help', 'mini', 'info'];
            _.each(intents, function(intent) {
                var subclass;
                subclass = Notification.extend({
                    options: $.extend({}, Notification.prototype.options, {
                        intent: intent
                    })
                });
                Notification[capitalCamel(intent)] = subclass;
            });

            // set more sensible defaults for Notification.Mini views
            miniOptions = Notification.Mini.prototype.options;
            miniOptions.minShown = 1250;
            miniOptions.closeIcon = false;

            return Notification;
        }
    );
}).call(this, define || RequireJS.define);

/* globals AjaxPrefix */

define('cms/js/main',[
    'domReady',
    'jquery',
    'underscore',
    'underscore.string',
    'backbone',
    'gettext',
    '../../common/js/components/views/feedback_notification',
    'jquery.cookie'
], function(domReady, $, _, str, Backbone, gettext, NotificationView) {
    'use strict';

    var main, sendJSON;
    main = function() {
        AjaxPrefix.addAjaxPrefix(jQuery, function() {
            return $("meta[name='path_prefix']").attr('content');
        });
        window.CMS = window.CMS || {};
        window.CMS.URL = window.CMS.URL || {};
        window.onTouchBasedDevice = function() {
            return navigator.userAgent.match(/iPhone|iPod|iPad|Android/i);
        };
        _.extend(window.CMS, Backbone.Events);
        Backbone.emulateHTTP = true;
        $.ajaxSetup({
            headers: {
                'X-CSRFToken': $.cookie('csrftoken')
            },
            dataType: 'json',
            content: {
                script: false
            }
        });
        $(document).ajaxError(function(event, jqXHR, ajaxSettings) {
            var msg, contentType,
                message = gettext('This may be happening because of an error with our server or your internet connection. Try refreshing the page or making sure you are online.'); // eslint-disable-line max-len
            if (ajaxSettings.notifyOnError === false) {
                return;
            }
            contentType = jqXHR.getResponseHeader('content-type');
            if (contentType && contentType.indexOf('json') > -1 && jqXHR.responseText) {
                message = JSON.parse(jqXHR.responseText).error;
            }
            msg = new NotificationView.Error({
                title: gettext("Studio's having trouble saving your work"),
                message: message
            });
            console.log('Studio AJAX Error', { // eslint-disable-line no-console
                url: event.currentTarget.URL,
                response: jqXHR.responseText,
                status: jqXHR.status
            });
            return msg.show();
        });
        sendJSON = function(url, data, callback, type) { // eslint-disable-line no-param-reassign
            if ($.isFunction(data)) {
                callback = data;
                data = undefined;
            }
            return $.ajax({
                url: url,
                type: type,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: JSON.stringify(data),
                success: callback,
                global: data ? data.global : true // Trigger global AJAX error handler or not
            });
        };
        $.postJSON = function(url, data, callback) { // eslint-disable-line no-param-reassign
            return sendJSON(url, data, callback, 'POST');
        };
        $.patchJSON = function(url, data, callback) { // eslint-disable-line no-param-reassign
            return sendJSON(url, data, callback, 'PATCH');
        };
        return domReady(function() {
            if (window.onTouchBasedDevice()) {
                return $('body').addClass('touch-based-device');
            }
            return null;
        });
    };
    main();
    return main;
});

define('js/models/group_configuration',[
    'backbone', 'underscore', 'gettext', 'js/models/group', 'js/collections/group',
    'backbone.associations', 'cms/js/main'
],
function(Backbone, _, gettext, GroupModel, GroupCollection) {
    'use strict';

    var GroupConfiguration = Backbone.AssociatedModel.extend({
        defaults: function() {
            return {
                name: '',
                scheme: 'random',
                description: '',
                version: 2,
                groups: new GroupCollection([
                    {
                        name: gettext('Group A'),
                        order: 0
                    },
                    {
                        name: gettext('Group B'),
                        order: 1
                    }
                ]),
                showGroups: false,
                editing: false,
                usage: [],
                read_only: false
            };
        },

        relations: [{
            type: Backbone.Many,
            key: 'groups',
            relatedModel: GroupModel,
            collectionType: GroupCollection
        }],

        initialize: function(attributes, options) {
            this.on('remove:groups', this.groupRemoved);

            this.canBeEmpty = options && options.canBeEmpty;
            this.setOriginalAttributes();

            return this;
        },

        setOriginalAttributes: function() {
            this._originalAttributes = this.parse(this.toJSON());
        },

        reset: function() {
            this.set(this._originalAttributes, {parse: true, validate: true});
        },

        isDirty: function() {
            return !_.isEqual(
                this._originalAttributes, this.parse(this.toJSON())
            );
        },

        isEmpty: function() {
            return !this.get('name') && this.get('groups').isEmpty();
        },

        parse: function(response) {
            var attrs = $.extend(true, {}, response);

            _.each(attrs.groups, function(group, index) {
                group.order = group.order || index;
            });

            return attrs;
        },

        toJSON: function() {
            return {
                id: this.get('id'),
                name: this.get('name'),
                scheme: this.get('scheme'),
                description: this.get('description'),
                version: this.get('version'),
                groups: this.get('groups').toJSON(),
                read_only: this.get('read_only')
            };
        },

        validate: function(attrs) {
            if (!attrs.name.trim()) {
                return {
                    message: gettext('Group Configuration name is required.'),
                    attributes: {name: true}
                };
            }

            if (!this.canBeEmpty && attrs.groups.length < 1) {
                return {
                    message: gettext('There must be at least one group.'),
                    attributes: {groups: true}
                };
            } else {
                // validate all groups
                var validGroups = new Backbone.Collection(),
                    invalidGroups = new Backbone.Collection();
                attrs.groups.each(function(group) {
                    if (!group.isValid()) {
                        invalidGroups.add(group);
                    } else {
                        validGroups.add(group);
                    }
                });

                if (!invalidGroups.isEmpty()) {
                    return {
                        message: gettext('All groups must have a name.'),
                        attributes: {groups: invalidGroups.toJSON()}
                    };
                }

                var groupNames = validGroups.map(function(group) { return group.get('name'); });
                if (groupNames.length !== _.uniq(groupNames).length) {
                    return {
                        message: gettext('All groups must have a unique name.'),
                        attributes: {groups: validGroups.toJSON()}
                    };
                }
            }
        },

        groupRemoved: function() {
            this.setOriginalAttributes();
        }
    });

    return GroupConfiguration;
});

define('js/collections/group_configuration',[
    'backbone', 'js/models/group_configuration'
],
function(Backbone, GroupConfigurationModel) {
    'use strict';

    var GroupConfigurationCollection = Backbone.Collection.extend({
        model: GroupConfigurationModel
    });

    return GroupConfigurationCollection;
});

define('js/utils/handle_iframe_binding',['jquery'], function($) {
    var iframeBinding = function(e) {
        var target_element = null;
        if (typeof e === 'undefined') {
            target_element = $('iframe, embed');
        } else {
            if (typeof e.nodeName !== 'undefined') {
                target_element = $(e).find('iframe, embed');
            } else {
                target_element = e.$('iframe, embed');
            }
        }
        modifyTagContent(target_element);
    };

    var modifyTagContent = function(target_element) {
        target_element.each(function() {
            if ($(this).prop('tagName') === 'IFRAME') {
                var ifr_source = $(this).attr('src');

                // Modify iframe src only if it is not empty
                if (ifr_source) {
                    var wmode = 'wmode=transparent';
                    if (ifr_source.indexOf('?') !== -1) {
                        var getQString = ifr_source.split('?');
                        if (getQString[1].search('wmode=transparent') === -1) {
                            var oldString = getQString[1];
                            var newString = getQString[0];
                            $(this).attr('src', newString + '?' + wmode + '&' + oldString);
                        }
                    // eslint-disable-next-line brace-style
                    }
                    // The TinyMCE editor is hosted in an iframe, and before the iframe is
                    // removed we execute this code. To avoid throwing an error when setting the
                    // attr, check that the source doesn't start with the value specified by TinyMCE ('javascript:""').
                    // eslint-disable-next-line no-script-url
                    else if (ifr_source.lastIndexOf('javascript:', 0) !== 0) {
                        $(this).attr('src', ifr_source + '?' + wmode);
                    }
                }
            } else {
                $(this).attr('wmode', 'transparent');
            }
        });
    };

    // Modify iframe/embed tags in provided html string
    // Use this method when provided data is just html sting not dom element
    // This method will only modify iframe (add wmode=transparent in url querystring) and embed (add wmode=transparent as attribute)
    // tags in html string so both tags will attach to dom and don't create z-index problem for other popups
    // Note: embed tags should be modified before rendering as they are static objects as compared to iframes
    // Note: this method can modify unintended html (invalid tags) while converting to dom object
    var iframeBindingHtml = function(html_string) {
        if (html_string) {
            var target_element = null;
            var temp_content = document.createElement('div');
            $(temp_content).html(html_string);
            target_element = $(temp_content).find('iframe, embed');
            if (target_element.length > 0) {
                modifyTagContent(target_element);
                html_string = $(temp_content).html();
            }
        }
        return html_string;
    };

    return {
        iframeBinding: iframeBinding,
        iframeBindingHtml: iframeBindingHtml
    };
});

define('js/utils/templates',['jquery', 'underscore'], function($, _) {
    /**
     * Loads the named template from the page, or logs an error if it fails.
     * @param name The name of the template.
     * @returns The loaded template.
     */
    var loadTemplate = function(name) {
        var templateSelector = '#' + name + '-tpl',
            templateText = $(templateSelector).text();
        if (!templateText) {
            console.error('Failed to load ' + name + ' template');
        }
        return _.template(templateText);
    };

    return {
        loadTemplate: loadTemplate
    };
});

(function(define) {
    'use strict';

    define('common/js/components/views/feedback_prompt',['jquery', 'underscore', 'underscore.string', 'common/js/components/views/feedback'],
        function($, _, str, SystemFeedbackView) {
            var Prompt = SystemFeedbackView.extend({
                options: $.extend({}, SystemFeedbackView.prototype.options, {
                    type: 'prompt',
                    closeIcon: false,
                    icon: false
                }),
                render: function() {
                    if (!window.$body) { window.$body = $(document.body); }
                    if (this.options.shown) {
                        $body.addClass('prompt-is-shown');
                    } else {
                        $body.removeClass('prompt-is-shown');
                    }
                    // super() in Javascript has awkward syntax :(
                    return SystemFeedbackView.prototype.render.apply(this, arguments);
                },
                show: function() {
                    SystemFeedbackView.prototype.show.apply(this, arguments);
                    return this.inFocus();
                },

                hide: function() {
                    SystemFeedbackView.prototype.hide.apply(this, arguments);
                    return this.outFocus();
                }
            });

            // create Prompt.Warning, Prompt.Confirmation, etc
            var capitalCamel, intents;
            capitalCamel = _.compose(str.capitalize, str.camelize);
            intents = ['warning', 'error', 'confirmation', 'announcement', 'step-required', 'help', 'mini'];
            _.each(intents, function(intent) {
                var subclass;
                subclass = Prompt.extend({
                    options: $.extend({}, Prompt.prototype.options, {
                        intent: intent
                    })
                });
                Prompt[capitalCamel(intent)] = subclass;
            });

            return Prompt;
        });
}).call(this, define || RequireJS.define);

/**
 * Provides useful utilities for views.
 */
(function(define, require) {
    'use strict';

    /* RequireJS */
    define('common/js/components/utils/view_utils',['jquery', 'underscore', 'gettext', 'common/js/components/views/feedback_notification',
        'common/js/components/views/feedback_prompt', 'edx-ui-toolkit/js/utils/html-utils'],
    function($, _, gettext, NotificationView, PromptView, HtmlUtils) {
    /* End RequireJS */
    /* Webpack
    define(['jquery', 'underscore', 'gettext', 'common/js/components/views/feedback_notification',
        'common/js/components/views/feedback_prompt', 'scriptjs'],
        function($, _, gettext, NotificationView, PromptView, $script) {
    /* End Webpack */

        var toggleExpandCollapse, showLoadingIndicator, hideLoadingIndicator, confirmThenRunOperation,
            runOperationShowingMessage, showErrorMeassage, withDisabledElement, disableElementWhileRunning,
            getScrollOffset, setScrollOffset, setScrollTop, redirect, reload, hasChangedAttributes,
            deleteNotificationHandler, validateRequiredField, validateURLItemEncoding,
            validateTotalKeyLength, checkTotalKeyLengthViolations, loadJavaScript;

        // see https://openedx.atlassian.net/browse/TNL-889 for what is it and why it's 65
        var MAX_SUM_KEY_LENGTH = 65;

        /**
             * Toggles the expanded state of the current element.
             */
        toggleExpandCollapse = function(target, collapsedClass) {
            // Support the old 'collapsed' option until fully switched over to is-collapsed
            var collapsed = collapsedClass || 'collapsed';
            target.closest('.expand-collapse').toggleClass('expand collapse');
            target.closest('.is-collapsible, .window').toggleClass(collapsed);
            target.closest('.is-collapsible').children('article').slideToggle();
        };

        /**
             * Show the page's loading indicator.
             */
        showLoadingIndicator = function() {
            $('.ui-loading').show();
        };

        /**
             * Hide the page's loading indicator.
             */
        hideLoadingIndicator = function() {
            $('.ui-loading').hide();
        };

        /**
             * Confirms with the user whether to run an operation or not, and then runs it if desired.
             */
        confirmThenRunOperation = function(title, message, actionLabel, operation, onCancelCallback) {
            return new PromptView.Warning({
                title: title,
                message: message,
                actions: {
                    primary: {
                        text: actionLabel,
                        click: function(prompt) {
                            prompt.hide();
                            operation();
                        }
                    },
                    secondary: {
                        text: gettext('Cancel'),
                        click: function(prompt) {
                            if (onCancelCallback) {
                                onCancelCallback();
                            }
                            return prompt.hide();
                        }
                    }
                }
            }).show();
        };

        /**
             * Shows a progress message for the duration of an asynchronous operation.
             * Note: this does not remove the notification upon failure because an error
             * will be shown that shouldn't be removed.
             * @param message The message to show.
             * @param operation A function that returns a promise representing the operation.
             */
        runOperationShowingMessage = function(message, operation) {
            var notificationView;
            notificationView = new NotificationView.Mini({
                title: gettext(message)
            });
            notificationView.show();
            return operation().done(function() {
                notificationView.hide();
            });
        };

        /**
             * Shows an error notification message for a specifc period of time.
             * @param heading The heading of notification.
             * @param message The message to show.
             * @param timeInterval The time interval to hide the notification.
             */
        showErrorMeassage = function(heading, message, timeInterval) {
            var errorNotificationView = new NotificationView.Error({
                title: gettext(heading),
                message: gettext(message)
            });
            errorNotificationView.show();

            setTimeout(function() { errorNotificationView.hide(); }, timeInterval);
        };
        /**
             * Wraps a Backbone event callback to disable the event's target element.
             *
             * This paradigm is designed to be used in Backbone event maps where
             * multiple events firing simultaneously is not desired.
             *
             * @param functionName the function to execute, as a string.
             * The function must return a jQuery promise and be able to take an event
             */
        withDisabledElement = function(functionName) {
            return function(event) {
                var view = this;
                disableElementWhileRunning($(event.currentTarget), function() {
                    // call view.functionName(event), with view as the current this
                    return view[functionName].apply(view, [event]);
                });
            };
        };

        /**
             * Disables a given element when a given operation is running.
             * @param {jQuery} element the element to be disabled.
             * @param operation the operation during whose duration the
             * element should be disabled. The operation should return
             * a JQuery promise.
             */
        disableElementWhileRunning = function(element, operation) {
            element.addClass('is-disabled').attr('aria-disabled', true);
            return operation().always(function() {
                element.removeClass('is-disabled').attr('aria-disabled', false);
            });
        };

        /**
             * Returns a handler that removes a notification, both dismissing it and deleting it from the database.
             * @param callback function to call when deletion succeeds
             */
        deleteNotificationHandler = function(callback) {
            return function(event) {
                event.preventDefault();
                $.ajax({
                    url: $(this).data('dismiss-link'),
                    type: 'DELETE',
                    success: callback
                });
            };
        };

        /**
             * Performs an animated scroll so that the window has the specified scroll top.
             * @param scrollTop The desired scroll top for the window.
             */
        setScrollTop = function(scrollTop) {
            $('html, body').animate({
                scrollTop: scrollTop
            }, 500);
        };

        /**
             * Returns the relative position that the element is scrolled from the top of the view port.
             * @param element The element in question.
             */
        getScrollOffset = function(element) {
            var elementTop = element.offset().top;
            return elementTop - $(window).scrollTop();
        };

        /**
             * Scrolls the window so that the element is scrolled down to the specified relative position
             * from the top of the view port.
             * @param element The element in question.
             * @param offset The amount by which the element should be scrolled from the top of the view port.
             */
        setScrollOffset = function(element, offset) {
            var elementTop = element.offset().top,
                newScrollTop = elementTop - offset;
            setScrollTop(newScrollTop);
        };

        /**
             * Redirects to the specified URL. This is broken out as its own function for unit testing.
             */
        redirect = function(url) {
            window.location = url;
        };

        /**
             * Reloads the page. This is broken out as its own function for unit testing.
             */
        reload = function() {
            window.location.reload();
        };

        /**
             * Returns true if a model has changes to at least one of the specified attributes.
             * @param model The model in question.
             * @param attributes The list of attributes to be compared.
             * @returns {boolean} Returns true if attribute changes are found.
             */
        hasChangedAttributes = function(model, attributes) {
            var i,
                changedAttributes = model.changedAttributes();
            if (!changedAttributes) {
                return false;
            }
            for (i = 0; i < attributes.length; i++) {
                if (_.has(changedAttributes, attributes[i])) {
                    return true;
                }
            }
            return false;
        };

        /**
             * Helper method for course/library creation - verifies a required field is not blank.
             */
        validateRequiredField = function(msg) {
            return msg.length === 0 ? gettext('Required field.') : '';
        };

        /**
             * Helper method for course/library creation.
             * Check that a course (org, number, run) doesn't use any special characters
             */
        validateURLItemEncoding = function(item, allowUnicode) {
            var required = validateRequiredField(item);
            if (required) {
                return required;
            }
            if (allowUnicode) {
                if (/\s/g.test(item)) {
                    return gettext('Please do not use any spaces in this field.');
                }
            } else {
                if (item !== encodeURIComponent(item) || item.match(/[!'()*]/)) {
                    return gettext('Please do not use any spaces or special characters in this field.');
                }
            }
            return '';
        };

        // Ensure that sum length of key field values <= ${MAX_SUM_KEY_LENGTH} chars.
        validateTotalKeyLength = function(keyFieldSelectors) {
            var totalLength = _.reduce(
                keyFieldSelectors,
                function(sum, ele) { return sum + $(ele).val().length; },
                0
            );
            return totalLength <= MAX_SUM_KEY_LENGTH;
        };

        checkTotalKeyLengthViolations = function(selectors, classes, keyFieldSelectors, messageTpl) {
            var tempHtml;
            if (!validateTotalKeyLength(keyFieldSelectors)) {
                $(selectors.errorWrapper).addClass(classes.shown).removeClass(classes.hiding);
                tempHtml = HtmlUtils.joinHtml(
                    HtmlUtils.HTML('<p>'),
                    HtmlUtils.template(messageTpl)({limit: MAX_SUM_KEY_LENGTH}),
                    HtmlUtils.HTML('</p>')
                );
                HtmlUtils.setHtml(
                    $(selectors.errorMessage),
                    tempHtml
                );
                $(selectors.save).addClass(classes.disabled);
            } else {
                $(selectors.errorWrapper).removeClass(classes.shown).addClass(classes.hiding);
            }
        };

        /**
             * Dynamically loads the specified JavaScript file.
             * @param url The URL to a JavaScript file.
             * @returns {Promise} A promise indicating when the URL has been loaded.
             */
        loadJavaScript = function(url) {
            var deferred = $.Deferred();
            /* RequireJS */
            require([url],
                function() {
                    deferred.resolve();
                },
                function() {
                    deferred.reject();
                });
            /* End RequireJS */
            /* Webpack
                $script(url, url, function () {
                    deferred.resolve();
                });
                /* End Webpack */
            return deferred.promise();
        };

        return {
            toggleExpandCollapse: toggleExpandCollapse,
            showLoadingIndicator: showLoadingIndicator,
            hideLoadingIndicator: hideLoadingIndicator,
            confirmThenRunOperation: confirmThenRunOperation,
            runOperationShowingMessage: runOperationShowingMessage,
            showErrorMeassage: showErrorMeassage,
            withDisabledElement: withDisabledElement,
            disableElementWhileRunning: disableElementWhileRunning,
            deleteNotificationHandler: deleteNotificationHandler,
            setScrollTop: setScrollTop,
            getScrollOffset: getScrollOffset,
            setScrollOffset: setScrollOffset,
            redirect: redirect,
            reload: reload,
            hasChangedAttributes: hasChangedAttributes,
            validateRequiredField: validateRequiredField,
            validateURLItemEncoding: validateURLItemEncoding,
            validateTotalKeyLength: validateTotalKeyLength,
            checkTotalKeyLengthViolations: checkTotalKeyLengthViolations,
            loadJavaScript: loadJavaScript
        };
    });
}).call(this, define || RequireJS.define, require || RequireJS.require);

define('js/views/baseview',['jquery', 'underscore', 'backbone', 'gettext', 'js/utils/handle_iframe_binding', 'js/utils/templates',
    'common/js/components/utils/view_utils'],
function($, _, Backbone, gettext, IframeUtils, TemplateUtils, ViewUtils) {
    /*
         This view is extended from backbone to provide useful functionality for all Studio views.
         This functionality includes:
         - automatic expand and collapse of elements with the 'ui-toggle-expansion' class specified
         - additional control of rendering by overriding 'beforeRender' or 'afterRender'

         Note: the default 'afterRender' function calls a utility function 'iframeBinding' which modifies
         iframe src urls on a page so that they are rendered as part of the DOM.
         */

    var BaseView = Backbone.View.extend({
        events: {
            'click .ui-toggle-expansion': 'toggleExpandCollapse'
        },

        options: {
            // UX is moving towards using 'is-collapsed' in preference over 'collapsed',
            // but use the old scheme as the default so that existing code doesn't need
            // to be rewritten.
            collapsedClass: 'collapsed'
        },

        // override the constructor function
        constructor: function(options) {
            _.bindAll(this, 'beforeRender', 'render', 'afterRender');

            // Merge passed options and view's options property and
            // attach to the view's options property
            if (this.options) {
                options = _.extend({}, _.result(this, 'options'), options);
            }

            // trunc is not available in IE, and it provides polyfill for it.
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
            if (!Math.trunc) {
                Math.trunc = function(v) {
                    v = +v; // eslint-disable-line no-param-reassign
                    // eslint-disable-next-line no-mixed-operators, no-nested-ternary
                    return (v - v % 1) || (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
                };
            }
            this.options = options;

            var _this = this;
            // xss-lint: disable=javascript-jquery-insertion
            this.render = _.wrap(this.render, function(render, options) { // eslint-disable-line no-shadow
                _this.beforeRender();
                render(options);
                _this.afterRender();
                return _this;
            });

            // call Backbone's own constructor
            Backbone.View.prototype.constructor.apply(this, arguments);
        },

        beforeRender: function() {
        },

        render: function() {
            return this;
        },

        afterRender: function() {
            IframeUtils.iframeBinding(this);
        },

        toggleExpandCollapse: function(event) {
            var $target = $(event.target);
            // Don't propagate the event as it is possible that two views will both contain
            // this element, e.g. clicking on the element of a child view container in a parent.
            event.stopPropagation();
            event.preventDefault();
            ViewUtils.toggleExpandCollapse($target, this.options.collapsedClass);
        },

        /**
             * Loads the named template from the page, or logs an error if it fails.
             * @param name The name of the template.
             * @returns The loaded template.
             */
        loadTemplate: function(name) {
            return TemplateUtils.loadTemplate(name);
        }
    });

    return BaseView;
});

/**
 * This is the base view that all Studio pages extend from.
 */
define('js/views/pages/base_page',['jquery', 'js/views/baseview'],
    function($, BaseView) {
        var BasePage = BaseView.extend({

            initialize: function() {
                BaseView.prototype.initialize.call(this);
            },

            /**
             * Returns true if this page is currently showing any content. If this returns false
             * then the page will unhide the div with the class 'no-content'.
             */
            hasContent: function() {
                return true;
            },

            /**
             * This renders the page's content and returns a promise that will be resolved once
             * the rendering has completed.
             * @returns {jQuery promise} A promise representing the rendering of the page.
             */
            renderPage: function() {
                return $.Deferred().resolve().promise();
            },

            /**
             * Renders the current page while showing a loading indicator. Note that subclasses
             * of BasePage should implement renderPage to perform the rendering of the content.
             * If the page has no content (i.e. it returns false for hasContent) then the
             * div with the class 'no-content' will be shown.
             */
            render: function() {
                var self = this;
                this.$('.ui-loading').removeClass('is-hidden');
                this.renderPage().done(function() {
                    if (!self.hasContent()) {
                        self.$('.no-content').removeClass('is-hidden');
                    }
                }).always(function() {
                    self.$('.ui-loading').addClass('is-hidden');
                });
                return this;
            }
        });

        return BasePage;
    }); // end define();

/**
 * A generic list view class.
 *
 * Expects the following properties to be overriden:
 *   render when the collection is empty.
 * - createItemView (function): Create and return an item view for a
 *   model in the collection.
 * - newModelOptions (object): Options to pass to models which are
 *   added to the collection.
 * - itemCategoryDisplayName (string): Display name for the category
 *   of items this list contains.  For example, 'Group Configuration'.
 *   Note that it must be translated.
 * - emptyMessage (string): Text to render when the list is empty.
 * - restrictEditing (bool) : Boolean flag for hiding edit and remove options, defaults to false.
 */
define('js/views/list',[
    'js/views/baseview'
], function(BaseView) {
    'use strict';

    var ListView = BaseView.extend({
        events: {
            'click .action-add': 'onAddItem',
            'click .new-button': 'onAddItem'
        },

        listContainerCss: '.list-items',

        initialize: function() {
            this.restrictEditing = this.options.restrictEditing || false;
            this.listenTo(this.collection, 'add', this.addNewItemView);
            this.listenTo(this.collection, 'remove', this.onRemoveItem);
            this.template = this.loadTemplate('list');

            // Don't render the add button when editing a form
            this.listenTo(this.collection, 'change:editing', this.toggleAddButton);
            this.listenTo(this.collection, 'add', this.toggleAddButton);
            this.listenTo(this.collection, 'remove', this.toggleAddButton);
        },

        render: function(model) {
            var template = this.template({
                itemCategoryDisplayName: this.itemCategoryDisplayName,
                newItemMessage: this.newItemMessage,
                emptyMessage: this.emptyMessage,
                length: this.collection.length,
                isEditing: model && model.get('editing'),
                canCreateNewItem: this.canCreateItem(this.collection),
                restrictEditing: this.restrictEditing
            });
            edx.HtmlUtils.setHtml(this.$el, edx.HtmlUtils.HTML(template));

            // eslint-disable-next-line no-shadow
            this.collection.each(function(model) {
                this.$(this.listContainerCss).append(
                    this.createItemView({model: model, restrictEditing: this.restrictEditing}).render().el
                );
            }, this);

            return this;
        },

        hideOrShowAddButton: function(shouldShow) {
            var addButtonCss = '.action-add';
            if (this.collection.length) {
                if (shouldShow) {
                    this.$(addButtonCss).removeClass('is-hidden');
                } else {
                    this.$(addButtonCss).addClass('is-hidden');
                }
            }
        },

        toggleAddButton: function(model) {
            if (model.get('editing') && this.collection.contains(model)) {
                this.hideOrShowAddButton(false);
            } else {
                this.hideOrShowAddButton(true);
            }
        },

        addNewItemView: function(model) {
            var view = this.createItemView({model: model});

            // If items already exist, just append one new.
            // Otherwise re-render the empty list HTML.
            if (this.collection.length > 1) {
                this.$(this.listContainerCss).append(view.render().el);
            } else {
                this.render();
            }

            view.$el.focus();
        },

        canCreateItem: function(collection) {
            var canCreateNewItem = true;
            if (collection.length > 0) {
                var maxAllowed = collection.maxAllowed;
                if (!_.isUndefined(maxAllowed) && collection.length >= maxAllowed) {
                    canCreateNewItem = false;
                }
            }
            return canCreateNewItem;
        },

        onAddItem: function(event) {
            if (event && event.preventDefault) { event.preventDefault(); }
            this.collection.add({editing: true}, this.newModelOptions);
        },

        onRemoveItem: function() {
            if (this.collection.length === 0) {
                this.render();
            }
        }
    });

    return ListView;
});

/**
 * A generic view to represent an editable item in a list.  The item
 * has a edit view and a details view.
 *
 * Subclasses must implement:
 * - itemDisplayName (string): Display name for the list item.
 *   Must be translated.
 * - baseClassName (string): CSS class name representing the item.
 * - createEditView (function): Render and append the edit view to the
 *   DOM.
 * - createDetailsView (function): Render and append the details view
 *   to the DOM.
 */
define('js/views/list_item',[
    'js/views/baseview', 'jquery', 'gettext',
    'common/js/components/utils/view_utils', 'edx-ui-toolkit/js/utils/html-utils'
], function(
    BaseView, $, gettext, ViewUtils, HtmlUtils
) {
    'use strict';

    var ListItemView = BaseView.extend({
        canDelete: false,

        initialize: function() {
            this.restrictEditing = this.options.restrictEditing || false;
            this.listenTo(this.model, 'change:editing', this.render);
            this.listenTo(this.model, 'remove', this.remove);
        },

        className: function() {
            var index = this.model.collection.indexOf(this.model);

            return [
                'wrapper-collection',
                'wrapper-collection-' + index,
                this.baseClassName,
                this.baseClassName + 's-list-item',
                this.baseClassName + 's-list-item-' + index
            ].join(' ');
        },

        deleteItem: function(event) {
            if (event && event.preventDefault) { event.preventDefault(); }
            if (!this.canDelete) { return; }
            var model = this.model,
                itemDisplayName = this.itemDisplayName;
            ViewUtils.confirmThenRunOperation(
                interpolate(
                    // Translators: "item_display_name" is the name of the item to be deleted.
                    gettext('Delete this %(item_display_name)s?'),
                    {item_display_name: itemDisplayName}, true
                ),
                interpolate(
                    // Translators: "item_display_name" is the name of the item to be deleted.
                    gettext('Deleting this %(item_display_name)s is permanent and cannot be undone.'),
                    {item_display_name: itemDisplayName},
                    true
                ),
                gettext('Delete'),
                function() {
                    return ViewUtils.runOperationShowingMessage(
                        gettext('Deleting'),
                        function() {
                            return model.destroy({wait: true});
                        }
                    );
                }
            );
        },

        render: function() {
            // Removes a view from the DOM, and calls stopListening to remove
            // any bound events that the view has listened to.
            if (this.view) {
                this.view.remove();
            }

            if (this.model.get('editing')) {
                this.view = this.createEditView();
            } else {
                this.view = this.createDetailsView();
            }

            this.$el.html(HtmlUtils.HTML(this.view.render().el).toString());

            return this;
        }
    });

    return ListItemView;
});

/**
 * This class defines a details view for content experiment group configurations.
 * It is expected to be instantiated with a GroupConfiguration model.
 */
define('js/views/group_configuration_details',[
    'js/views/baseview', 'underscore', 'gettext', 'underscore.string',
    'edx-ui-toolkit/js/utils/string-utils', 'edx-ui-toolkit/js/utils/html-utils'
],
function(BaseView, _, gettext, str, StringUtils, HtmlUtils) {
    'use strict';

    var GroupConfigurationDetailsView = BaseView.extend({
        tagName: 'div',
        events: {
            'click .edit': 'editConfiguration',
            'click .show-groups': 'showGroups',
            'click .hide-groups': 'hideGroups'
        },

        className: function() {
            var index = this.model.collection.indexOf(this.model);

            return [
                'collection',
                'group-configuration-details',
                'group-configuration-details-' + index
            ].join(' ');
        },

        initialize: function() {
            this.template = HtmlUtils.template(
                $('#group-configuration-details-tpl').text()
            );
            this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            var attrs = $.extend({}, this.model.attributes, {
                groupsCountMessage: this.getGroupsCountTitle(),
                usageCountMessage: this.getUsageCountTitle(),
                courseOutlineUrl: this.model.collection.outlineUrl,
                index: this.model.collection.indexOf(this.model)
            });
            HtmlUtils.setHtml(this.$el, this.template(attrs));
            return this;
        },

        editConfiguration: function(event) {
            if (event && event.preventDefault) { event.preventDefault(); }
            this.model.set('editing', true);
        },

        showGroups: function(event) {
            if (event && event.preventDefault) { event.preventDefault(); }
            this.model.set('showGroups', true);
        },

        hideGroups: function(event) {
            if (event && event.preventDefault) { event.preventDefault(); }
            this.model.set('showGroups', false);
        },

        getGroupsCountTitle: function() {
            var count = this.model.get('groups').length,
                /* globals ngettext */
                message = ngettext(
                    /*
                        Translators: 'count' is number of groups that the group
                        configuration contains.
                    */
                    'Contains {count} group', 'Contains {count} groups',
                    count
                );

            return StringUtils.interpolate(message, {count: count});
        },

        getUsageCountTitle: function() {
            var count = this.model.get('usage').length;

            if (count === 0) {
                return gettext('Not in Use');
            } else {
                return StringUtils.interpolate(ngettext(

                    /*
                        Translators: 'count' is number of units that the group
                        configuration is used in.
                    */
                    'Used in {count} location', 'Used in {count} locations',
                    count
                ),
                {count: count}
                );
            }
        }
    });

    return GroupConfigurationDetailsView;
});

/**
 * A generic view to represent a list item in its editing state.
 *
 * Subclasses must implement:
 * - getTemplateOptions (function): Return an object to pass to the
 *   template.
 * - setValues (function): Set values on the model according to the
 *   DOM.
 * - getSaveableModel (function): Return the model which should be
 *   saved by this view.  Note this may be a parent model.
 */
define('js/views/list_item_editor',[
    'js/views/baseview', 'common/js/components/utils/view_utils', 'underscore', 'gettext',
    'edx-ui-toolkit/js/utils/html-utils'
], function(BaseView, ViewUtils, _, gettext, HtmlUtils) {
    'use strict';

    var ListItemEditorView = BaseView.extend({
        initialize: function() {
            this.listenTo(this.model, 'invalid', this.render);
            this.listenTo(this.getSaveableModel(), 'invalid', this.render);
        },

        render: function() {
            var template = this.template(_.extend({
                error: this.model.validationError || this.getSaveableModel().validationError
            }, this.getTemplateOptions())
            );
            this.$el.html(HtmlUtils.HTML(template).toString());
        },

        setAndClose: function(event) {
            if (event && event.preventDefault) { event.preventDefault(); }

            this.setValues();
            if (!this.model.isValid() || !this.getSaveableModel().isValid()) {
                return false;
            }

            ViewUtils.runOperationShowingMessage(
                gettext('Saving'),
                function() {
                    var dfd = $.Deferred();
                    var actionableModel = this.getSaveableModel();

                    actionableModel.save({}, {
                        success: function() {
                            actionableModel.setOriginalAttributes();
                            this.close();
                            dfd.resolve();
                        }.bind(this)
                    });

                    return dfd;
                }.bind(this));
        },

        cancel: function(event) {
            if (event && event.preventDefault) { event.preventDefault(); }

            this.getSaveableModel().reset();
            return this.close();
        },

        close: function() {
            this.remove();
            if (this.model.isNew() && !_.isUndefined(this.model.collection)) {
                // if the item has never been saved, remove it
                this.model.collection.remove(this.model);
            } else {
                // tell the model that it's no longer being edited
                this.model.set('editing', false);
            }

            return this;
        }
    });

    return ListItemEditorView;
});


define('text!templates/group-edit.underscore',[],function () { return '<div class="input-wrap field long text required field-add-group-name group-<%- index %>-name\n    <% if (error && error.attributes && error.attributes.name) { print(\'error\'); } %>"><input name="group-<%- index %>-name" class="group-name long" value="<%- name %>" type="text">\n</div><div class="group-allocation"><%- allocation %>%</div>\n<a href="" class="action action-close"><span class="icon fa fa-times-circle" aria-hidden="true"></span> <span class="sr"><%- gettext("delete group") %></span></a>\n';});

/**
 * This class defines an edit view for groups within content experiment group configurations.
 * It is expected to be backed by a Group model.
 */
define('js/views/experiment_group_edit',[
    'js/views/baseview', 'underscore', 'underscore.string', 'gettext', 'text!templates/group-edit.underscore'
],
function(BaseView, _, str, gettext, groupEditTemplate) {
    'use strict';

    var ExperimentGroupEditView = BaseView.extend({
        tagName: 'li',
        events: {
            'click .action-close': 'removeGroup',
            'change .group-name': 'changeName',
            'focus .group-name': 'onFocus',
            'blur .group-name': 'onBlur'
        },

        className: function() {
            var index = this.model.collection.indexOf(this.model);
            return 'field-group group group-' + index;
        },

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            var collection = this.model.collection,
                index = collection.indexOf(this.model);

            edx.HtmlUtils.setHtml(this.$el, edx.HtmlUtils.template(groupEditTemplate)({
                name: this.model.get('name'),
                allocation: this.getAllocation(),
                index: index,
                error: this.model.validationError
            }));

            return this;
        },

        changeName: function(event) {
            if (event && event.preventDefault) { event.preventDefault(); }
            this.model.set({
                name: this.$('.group-name').val()
            }, {silent: true});

            return this;
        },

        removeGroup: function(event) {
            if (event && event.preventDefault) { event.preventDefault(); }
            this.model.collection.remove(this.model);
            return this.remove();
        },

        getAllocation: function() {
            return Math.floor(100 / this.model.collection.length);
        },

        onFocus: function() {
            this.$el.closest('.groups-fields').addClass('is-focused');
        },

        onBlur: function() {
            this.$el.closest('.groups-fields').removeClass('is-focused');
        }
    });

    return ExperimentGroupEditView;
});

/**
 * This class defines an editing view for content experiment group configurations.
 * It is expected to be backed by a GroupConfiguration model.
 */
define('js/views/group_configuration_editor',[
    'js/views/list_item_editor', 'underscore', 'jquery', 'gettext',
    'js/views/experiment_group_edit'
],
function(ListItemEditorView, _, $, gettext, ExperimentGroupEditView) {
    'use strict';

    var GroupConfigurationEditorView = ListItemEditorView.extend({
        tagName: 'div',
        events: {
            'change .collection-name-input': 'setName',
            'change .group-configuration-description-input': 'setDescription',
            'click .action-add-group': 'createGroup',
            'focus .input-text': 'onFocus',
            'blur .input-text': 'onBlur',
            submit: 'setAndClose',
            'click .action-cancel': 'cancel'
        },

        className: function() {
            var index = this.model.collection.indexOf(this.model);

            return [
                'collection-edit',
                'group-configuration-edit',
                'group-configuration-edit-' + index
            ].join(' ');
        },

        initialize: function() {
            var groups = this.model.get('groups');

            ListItemEditorView.prototype.initialize.call(this);

            this.template = this.loadTemplate('group-configuration-editor');
            this.listenTo(groups, 'add', this.onAddItem);
            this.listenTo(groups, 'reset', this.addAll);
            this.listenTo(groups, 'all', this.render);
        },

        render: function() {
            ListItemEditorView.prototype.render.call(this);
            this.addAll();
            return this;
        },

        getTemplateOptions: function() {
            return {
                id: this.model.get('id'),
                uniqueId: _.uniqueId(),
                name: this.model.get('name'),
                description: this.model.get('description'),
                usage: this.model.get('usage'),
                isNew: this.model.isNew()
            };
        },

        getSaveableModel: function() {
            return this.model;
        },

        onAddItem: function(group) {
            var view = new ExperimentGroupEditView({model: group});
            this.$('ol.groups').append(view.render().el);

            return this;
        },

        addAll: function() {
            this.model.get('groups').each(this.onAddItem, this);
        },

        createGroup: function(event) {
            if (event && event.preventDefault) { event.preventDefault(); }
            var collection = this.model.get('groups');
            collection.add([{
                name: collection.getNextDefaultGroupName(),
                order: collection.nextOrder()
            }]);
        },

        setName: function(event) {
            if (event && event.preventDefault) { event.preventDefault(); }
            this.model.set(
                'name', this.$('.collection-name-input').val(),
                {silent: true}
            );
        },

        setDescription: function(event) {
            if (event && event.preventDefault) { event.preventDefault(); }
            this.model.set(
                'description',
                this.$('.group-configuration-description-input').val(),
                {silent: true}
            );
        },

        setValues: function() {
            this.setName();
            this.setDescription();

            _.each(this.$('.groups li'), function(li, i) {
                var group = this.model.get('groups').at(i);

                if (group) {
                    group.set({
                        name: $('.group-name', li).val()
                    });
                }
            }, this);

            return this;
        }
    });

    return GroupConfigurationEditorView;
});

/**
 * This class defines an controller view for content experiment group configurations.
 * It renders an editor view or a details view depending on the state
 * of the underlying model.
 * It is expected to be backed by a Group model.
 */
define('js/views/group_configuration_item',[
    'js/views/list_item', 'js/views/group_configuration_details', 'js/views/group_configuration_editor', 'gettext'
], function(
    ListItemView, GroupConfigurationDetailsView, GroupConfigurationEditorView, gettext
) {
    'use strict';

    var GroupConfigurationItemView = ListItemView.extend({
        events: {
            'click .delete': 'deleteItem'
        },

        tagName: 'section',

        baseClassName: 'group-configuration',

        canDelete: true,

        // Translators: this refers to a collection of groups.
        itemDisplayName: gettext('group configuration'),

        attributes: function() {
            return {
                id: this.model.get('id'),
                tabindex: -1
            };
        },

        createEditView: function() {
            return new GroupConfigurationEditorView({model: this.model});
        },

        createDetailsView: function() {
            return new GroupConfigurationDetailsView({model: this.model});
        }
    });

    return GroupConfigurationItemView;
});

/**
 * This class defines a list view for content experiment group configurations.
 * It is expected to be backed by a GroupConfiguration collection.
 */
define('js/views/group_configurations_list',[
    'js/views/list', 'js/views/group_configuration_item', 'gettext'
], function(ListView, GroupConfigurationItemView, gettext) {
    'use strict';

    var GroupConfigurationsListView = ListView.extend({
        tagName: 'div',

        className: 'group-configurations-list',

        newModelOptions: {addDefaultGroups: true},

        // Translators: this refers to a collection of groups.
        itemCategoryDisplayName: gettext('group configuration'),

        newItemMessage: gettext('Add your first group configuration'),

        emptyMessage: gettext('You have not created any group configurations yet.'),

        createItemView: function(options) {
            return new GroupConfigurationItemView(options);
        }
    });

    return GroupConfigurationsListView;
});

/**
 * This class defines an editing view for content groups.
 * It is expected to be backed by a Group model.
 */
define('js/views/content_group_editor',[
    'js/views/list_item_editor', 'underscore'
],
function(ListItemEditorView, _) {
    'use strict';

    var ContentGroupEditorView = ListItemEditorView.extend({
        tagName: 'div',
        className: 'content-group-edit collection-edit',
        events: {
            submit: 'setAndClose',
            'click .action-cancel': 'cancel'
        },

        initialize: function() {
            ListItemEditorView.prototype.initialize.call(this);
            this.template = this.loadTemplate('content-group-editor');
        },

        getTemplateOptions: function() {
            return {
                id: this.model.get('id'),
                name: this.model.get('name'),
                index: this.model.collection.indexOf(this.model),
                isNew: this.model.isNew(),
                usage: this.model.get('usage'),
                uniqueId: _.uniqueId()
            };
        },

        setValues: function() {
            this.model.set({name: this.$('input').val().trim()});
            return this;
        },

        getSaveableModel: function() {
            return this.model.collection.parents[0];
        }
    });

    return ContentGroupEditorView;
});

/**
 * This class defines a simple display view for a partition group.
 * It is expected to be backed by a Group model.
 */
define('js/views/partition_group_details',[
    'js/views/baseview', 'underscore', 'gettext', 'underscore.string',
    'edx-ui-toolkit/js/utils/string-utils', 'edx-ui-toolkit/js/utils/html-utils'
], function(BaseView, _, gettext, str, StringUtils, HtmlUtils) {
    'use strict';

    var PartitionGroupDetailsView = BaseView.extend({
        tagName: 'div',
        events: {
            'click .edit': 'editGroup',
            'click .show-groups': 'showContentGroupUsages',
            'click .hide-groups': 'hideContentGroupUsages'
        },

        className: function() {
            var index = this.model.collection.indexOf(this.model);

            return [
                'collection',
                'partition-group-details',
                'partition-group-details-' + index
            ].join(' ');
        },

        editGroup: function() {
            this.model.set({editing: true});
        },

        initialize: function() {
            this.template = this.loadTemplate('partition-group-details');
            this.restrictEditing = this.options.restrictEditing || false;
            this.listenTo(this.model, 'change', this.render);
        },

        render: function(showContentGroupUsages) {
            var attrs = $.extend({}, this.model.attributes, {
                usageCountMessage: this.getUsageCountTitle(),
                courseOutlineUrl: this.model.collection.parents[0].outlineUrl,
                index: this.model.collection.indexOf(this.model),
                showContentGroupUsages: showContentGroupUsages || false,
                HtmlUtils: HtmlUtils,
                restrictEditing: this.restrictEditing
            });
            HtmlUtils.setHtml(this.$el, HtmlUtils.HTML(this.template(attrs)));
            return this;
        },

        showContentGroupUsages: function(event) {
            if (event && event.preventDefault) { event.preventDefault(); }
            this.render(true);
        },

        hideContentGroupUsages: function(event) {
            if (event && event.preventDefault) { event.preventDefault(); }
            this.render(false);
        },

        getUsageCountTitle: function() {
            var count = this.model.get('usage').length;

            if (count === 0) {
                return gettext('Not in Use');
            } else {
                /* globals ngettext */
                return StringUtils.interpolate(ngettext(
                    /*
                        Translators: 'count' is number of locations that the group
                        configuration is used in.
                    */
                    'Used in {count} location', 'Used in {count} locations',
                    count
                ),
                {count: count}
                );
            }
        }
    });

    return PartitionGroupDetailsView;
});

/**
 * This class defines an controller view for partition groups.
 * It renders an editor view or a details view depending on the state
 * of the underlying model.
 * It is expected to be backed by a Group model.
 */
define('js/views/partition_group_item',[
    'js/views/list_item', 'js/views/content_group_editor', 'js/views/partition_group_details',
    'gettext', 'common/js/components/utils/view_utils'
], function(ListItemView, ContentGroupEditorView, PartitionGroupDetailsView, gettext) {
    'use strict';

    var PartitionGroupItemView = ListItemView.extend({
        events: {
            'click .delete': 'deleteItem'
        },

        tagName: 'section',

        baseClassName: 'partition-group',

        canDelete: true,

        itemDisplayName: gettext('content group'),

        attributes: function() {
            return {
                id: this.model.get('id'),
                tabindex: -1
            };
        },

        createEditView: function() {
            return new ContentGroupEditorView({model: this.model});
        },

        createDetailsView: function() {
            return new PartitionGroupDetailsView({
                model: this.model,
                restrictEditing: this.options.restrictEditing
            });
        }
    });

    return PartitionGroupItemView;
});

/**
 * This class defines a list view for partition groups.
 * It is expected to be backed by a Group collection.
 */
define('js/views/partition_group_list',[
    'underscore', 'js/views/list', 'js/views/partition_group_item', 'gettext'
], function(_, ListView, PartitionGroupItemView, gettext) {
    'use strict';

    var PartitionGroupListView = ListView.extend({
        initialize: function(options) {
            ListView.prototype.initialize.apply(this, [options]);
            this.scheme = options.scheme;
        },

        tagName: 'div',

        className: 'partition-group-list',

        // Translators: This refers to a content group that can be linked to a student cohort.
        itemCategoryDisplayName: gettext('content group'),

        newItemMessage: gettext('Add your first content group'),

        emptyMessage: gettext('You have not created any content groups yet.'),

        createItemView: function(options) {
            return new PartitionGroupItemView(_.extend({}, options, {scheme: this.scheme}));
        }
    });

    return PartitionGroupListView;
});

define('js/views/pages/group_configurations',[
    'jquery', 'underscore', 'gettext', 'js/views/pages/base_page',
    'js/views/group_configurations_list', 'js/views/partition_group_list'
],
function($, _, gettext, BasePage, GroupConfigurationsListView, PartitionGroupListView) {
    'use strict';

    var GroupConfigurationsPage = BasePage.extend({
        initialize: function(options) {
            var currentScheme,
                i;

            BasePage.prototype.initialize.call(this);
            this.experimentsEnabled = options.experimentsEnabled;
            if (this.experimentsEnabled) {
                this.experimentGroupConfigurations = options.experimentGroupConfigurations;
                this.experimentGroupsListView = new GroupConfigurationsListView({
                    collection: this.experimentGroupConfigurations
                });
            }

            this.allGroupConfigurations = options.allGroupConfigurations || [];
            this.allGroupViewList = [];
            for (i = 0; i < this.allGroupConfigurations.length; i++) {
                currentScheme = this.allGroupConfigurations[i].get('scheme');
                this.allGroupViewList.push(
                    new PartitionGroupListView({
                        id: this.allGroupConfigurations[i].get('id'),
                        collection: this.allGroupConfigurations[i].get('groups'),
                        restrictEditing: this.allGroupConfigurations[i].get('read_only'),
                        scheme: currentScheme
                    })
                );
            }
        },

        renderPage: function() {
            var hash = this.getLocationHash(),
                i,
                currentClass;
            if (this.experimentsEnabled) {
                this.$('.wrapper-groups.experiment-groups').append(this.experimentGroupsListView.render().el);
            }

            // Render the remaining Configuration groups
            for (i = 0; i < this.allGroupViewList.length; i++) {
                currentClass = `.wrapper-groups.content-groups.${this.allGroupViewList[i].scheme}.${this.allGroupViewList[i].id}`;
                this.$(currentClass).append(this.allGroupViewList[i].render().el);
            }

            this.addWindowActions();
            if (hash) {
                // Strip leading '#' to get id string to match
                this.expandConfiguration(hash.replace('#', ''));
            }
            return $.Deferred().resolve().promise();
        },

        addWindowActions: function() {
            $(window).on('beforeunload', this.onBeforeUnload.bind(this));
        },

        /**
         * Checks the Partition Group Configurations to see if the isDirty bit is set
         * @returns {boolean} True if any partition group has the dirty bit set.
         */
        areAnyConfigurationsDirty: function() {
            var i;
            for (i = 0; i < this.allGroupConfigurations.length; i++) {
                if (this.allGroupConfigurations[i].isDirty()) {
                    return true;
                }
            }
            return false;
        },

        onBeforeUnload: function() {
            var dirty = this.areAnyConfigurationsDirty()
                || (this.experimentsEnabled && this.experimentGroupConfigurations.find(function(configuration) {
                    return configuration.isDirty();
                }));

            if (dirty) {
                return gettext('You have unsaved changes. Do you really want to leave this page?');
            }
        },

        /**
         * Helper method that returns url hash.
         * @return {String} Returns anchor part of current url.
         */
        getLocationHash: function() {
            return window.location.hash;
        },

        /**
         * Focus on and expand group configuration with peculiar id.
         * @param {String|Number} Id of the group configuration.
         */
        expandConfiguration: function(id) {
            var groupConfig = this.experimentsEnabled && this.experimentGroupConfigurations.findWhere({
                id: parseInt(id)
            });

            if (groupConfig) {
                groupConfig.set('showGroups', true);
                this.$('#' + id).focus();
            }
        }
    });

    return GroupConfigurationsPage;
}); // end define();

define('js/factories/group_configurations',[
    'js/collections/group_configuration', 'js/models/group_configuration', 'js/views/pages/group_configurations'
], function(GroupConfigurationCollection, GroupConfigurationModel, GroupConfigurationsPage) {
    'use strict';

    return function(experimentsEnabled,
        experimentGroupConfigurationsJson,
        allGroupConfigurationJson,
        groupConfigurationUrl,
        courseOutlineUrl) {
        var experimentGroupConfigurations = new GroupConfigurationCollection(
                experimentGroupConfigurationsJson, {parse: true}
            ),
            allGroupConfigurations = [],
            newGroupConfig,
            i;

        for (i = 0; i < allGroupConfigurationJson.length; i++) {
            newGroupConfig = new GroupConfigurationModel(allGroupConfigurationJson[i],
                {parse: true, canBeEmpty: true});
            newGroupConfig.urlRoot = groupConfigurationUrl;
            newGroupConfig.outlineUrl = courseOutlineUrl;
            allGroupConfigurations.push(newGroupConfig);
        }

        experimentGroupConfigurations.url = groupConfigurationUrl;
        experimentGroupConfigurations.outlineUrl = courseOutlineUrl;
        new GroupConfigurationsPage({
            el: $('#content'),
            experimentsEnabled: experimentsEnabled,
            experimentGroupConfigurations: experimentGroupConfigurations,
            allGroupConfigurations: allGroupConfigurations
        }).render();
    };
});

