function afterTranCore(){function a(a){return this.each(function(){var b=$(this),c=b.data("bs.button"),e="object"==typeof a&&a;c||b.data("bs.button",c=new d(this,e)),"toggle"==a?c.toggle():a&&c.setState(a)})}var b;$(".language,.page-header-language").hoverIntent(function(){$(this).find(".language-list").show(),clearTimeout(b)},function(){var a=$(this);clearTimeout(b),b=setTimeout(function(){a.find(".language-list").hide()},200)}),$(".language-list").mouseenter(function(){clearTimeout(b)}).mouseleave(function(){$(this).fadeOut(200)}),$(".header-login-con").keyup(function(a){13==a.keyCode&&$(this).find(".header-login").click()}),$(".header-login").click(function(){var a=$(".header-form"),b=a.find("[name=custCode]").val(),c=a.find("[name=passwd]").val(),d=a.find("[name=validateCode]").val();return 0==b.length?(dialog.info($.t("base:valid.1")),!1):0==c.length?(dialog.info($.t("base:valid.2")),!1):0==d.length?(dialog.info($.t("base:valid.3")),!1):void $(this).commit(a,"/login",function(){location.reload()})}),$(document).on("click",".header-code",function(){$(this).attr("src","/validateCode?"+(new Date).getTime())}),$(".header-more-left").css("left",function(){return-($(window).width()-980)/2}),$(".header-more-right").css("right",function(){return-($(window).width()-980)/2});var c;$(document).on("mouseenter",".header .link",function(){clearTimeout(c),$(".header-block:visible").hide(),$(this).parent().find(".header-block").stop().fadeIn()}).on("mouseleave",".header li",function(){var a=$(this);c=setTimeout(function(){a.parent().find(".header-block").stop().fadeOut()},200)}),$(document).on("mouseenter",".header-block",function(){clearTimeout(c),$(this).show()}).on("mouseleave",".header-block",function(){$(this).stop().fadeOut()}),$(document).on("click",".browser-updatetips span",function(){$(this).parents(".browser-updatetips").remove()}),$.validator.addMethod("chinese",function(a,b){return this.optional(b)||/^[A-Za-z0-9\u4E00-\u9FA5]+$/.test(a)},$.t("base:valid.4")),$.validator.addMethod("string",function(a,b){return this.optional(b)||/^[A-Za-z0-9]+$/.test(a)},$.t("base:valid.5")),$.validator.addMethod("zh",function(a,b){return this.optional(b)||/^[A-Za-z\u4E00-\u9FA5]+$/.test(a)},$.t("base:valid.6")),$.validator.addMethod("en",function(a,b){return this.optional(b)||/^[A-Za-z]+$/.test(a)},$.t("base:valid.7")),$.validator.addMethod("date",function(a,b){return this.optional(b)||/^\d{4}-\d{2}-\d{2}$/.test(a)},$.t("base:valid.8")),$.validator.addMethod("qq",function(a,b){return this.optional(b)||/^\d{5,12}$/.test(a)},$.t("base:valid.9")),$.validator.addMethod("phone",function(a,b){return this.optional(b)||/^\d{12,16}$/.test(a)},$.t("base:valid.10")),$.validator.addMethod("cardno",function(a,b){return this.optional(b)||/^\S{9,18}$/.test(a)},$.t("base:valid.11")),$.validator.addMethod("notEqual",function(a,b,c){var d=$(c);return a!==d.val()},$.t("base:valid.12")),$.fn.extend({form:function(){var a=this.serializeArray(),b={};for(var c in a)b[a[c].name]=filterXSS(a[c].value);return b},commit:function(a,b,c,d,e){if(a.valid()){if(d&&!d())return!1;var f=$(this);f.btn("loading");var g=a.form();e&&(g=e(g)),$.post(b,g).success(function(a){"200"==a.code?c(a):showError(a.msg),f.btn("reset")})}}});var d=function(a,b){this.$element=$(a),this.options=$.extend({},d.DEFAULTS,b),this.isLoading=!1};d.DEFAULTS={loadingText:$.t("base:valid.13")},d.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",null==e.resetText&&c.data("resetText",c[d]()),setTimeout($.proxy(function(){c[d](null==e[a]?this.options[a]:e[a]),"loadingText"==a?(this.isLoading=!0,c.addClass(b).attr(b,b)):this.isLoading&&(this.isLoading=!1,c.removeClass(b).removeAttr(b))},this),0)};var e=$.fn.button;$.fn.btn=a,$.fn.btn.Constructor=d,$.fn.btn.noConflict=function(){return $.fn.btn=e,this},dialog={openned:!1,close:function(){window.top.$("#dialog").dialog("close").remove(),dialog.openned=!1},_getHTML:function(a){return a.join?"<div class='msg'><p>"+a.join("</p><p>")+"</p></div>":"<div class='msg'><p>"+a+"</p></div>"},_show:function(a,b,c){var d;c.each?(d={},c.each(function(){var a=$(this).attr("href");d[$(this).html()]=function(){window.location.href=a}})):d=c,dialog.close();var e=window.top.$('<div id="dialog"></div>');e.html('<div class="field-c">'+b+"</div>"),e.dialog({resizable:!1,modal:!0,buttons:d,title:a,dialogClass:"dialog",minWidth:360,minHeight:200}),dialog.openned=!0},info:function(a,b){buttons={},b?buttons[$.t("base:button.ok")]=function(){b(),dialog.close()}:buttons[$.t("base:button.ok")]=function(){dialog.close()},dialog._show($.t("base:button.info"),'<span class="icon true"></span>'+dialog._getHTML(a),buttons)},error:function(a,b){null==b&&(b={},b[$.t("base:button.ok")]=function(){dialog.close()}),dialog._show($.t("base:button.error"),'<span class="icon error"></span>'+dialog._getHTML(a),b)},custom:function(a,b,c){dialog._show(a,'<span class="icon confirm"></span>'+dialog._getHTML(b),c)}}}function showError(a){dialog.error($.t("base:msg."+a))}function getQueryString(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)"),c=window.location.search.substr(1).match(b);return null!=c?unescape(c[2]):null}function resultHandle(a,b){"200"==a.code?b&&b(a):showError(a.msg)}var dialog,showPopUp=function(a,b,c,d,e){$("#popup").remove();var f=window.top.$('<div id="popup"></div>');f.html(a),f.css("width",c),f.find("iframe").css("width",c),f.dialog({height:d,width:c,resizable:!1,modal:!0,title:b,dialogClass:"popup",close:e})},validBase={debug:!0,success:function(a){a.addClass("success")},unhighlight:function(a){$(a).parent().addClass("ok").removeClass("red"),$(a).parent().find("b").length||$(a).parent().append("<b></b>")},highlight:function(a,b){$(a).parent().addClass("red").removeClass("ok").find("."+b).removeClass("success"),$(a).parent().find("b").length||$(a).parent().append("<b></b>")},errorPlacement:function(a,b){a.appendTo(b.parent())}};