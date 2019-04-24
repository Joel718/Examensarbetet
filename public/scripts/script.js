// Show/hide, är man inloggad så ska (logga ut) knappen visas och är man utloggad så ska (logga in) knappen visas. 
$(document).ready(function() {
    $(".button4").hide();
 });
  // Logga in funktion
    function onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      $(".button4").show();
   //  $(".g-signin2").hide();


    // Logga ut funktion
    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
        console.log('User signed out.');
        $(".button4").hide();
        });
    }
}

(function(){if(!/*@cc_on!@*/0)return;var e = "abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(','),i=e.length;while(i--){document.createElement(e[i]);}})();

if (navigator.userAgent.indexOf('Mac OS X') != -1) {
  $("body").addClass("mac");
} else {
  $("body").addClass("pc");
}

var Fb = {}; //An empty object literal for holding the function
Fb.log = function(obj, consoleMethod) {
       if (window.console && window.console.firebug && window.console.firebug.replace(/^\s\s*/, '').replace(/\s\s*$/, '') !== '') {
               if (typeof consoleMethod === "string" && typeof console[consoleMethod] === "function") {
                       console[consoleMethod](obj);
               } else {
                       console.log(obj);
               }
       }
};

$('iframe').attr('src', $('iframe').attr('src'));

var msg_box ="please don't right click";
function dis_rightclickIE(){
if (navigator.appName == 'Microsoft Internet Explorer' && (event.button == 2 || event.button == 3))
alert(msg_box);
}

function dis_rightclickNS(e){
if ((document.layers||document.getElementById&&!document.all) && (e.which==2||e.which==3))
{
alert(msg_box);
return false;
}
}
if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=dis_rightclickNS;
}
else if (document.all&&!document.getElementById){
document.onmousedown=dis_rightclickIE;
}
document.oncontextmenu=new Function("alert(msg_box);return false");


// Dont right click
var msg_box ="please don't right click";
function dis_rightclickIE(){
if (navigator.appName == 'Microsoft Internet Explorer' && (event.button == 2 || event.button == 3))
alert(msg_box);
}

function dis_rightclickNS(e){
if ((document.layers||document.getElementById&&!document.all) && (e.which==2||e.which==3))
{
alert(msg_box);
return false;
}
}
if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=dis_rightclickNS;
}
else if (document.all&&!document.getElementById){
document.onmousedown=dis_rightclickIE;
}
document.oncontextmenu=new Function("alert(msg_box);return false");

// Cross browser dependency-free dom ready
var DOMReady = function(a, b, c) {
        b = document;
        c = 'addEventListener';
        b[c] ? b[c]('DocumentContentLoaded', a) : window.attachEvent('onload', a);
      };
          
      DOMReady(function () {
        alert('The DOM is Ready!');
});

(function(win, doc){
	if(win.addEventListener)return;		//No need to polyfill

	function docHijack(p){var old = doc[p];doc[p] = function(v){return addListen(old(v))}}
	function addEvent(on, fn, self){
		return (self = this).attachEvent('on' + on, function(e){
			var e = e || win.event;
			e.preventDefault  = e.preventDefault  || function(){e.returnValue = false}
			e.stopPropagation = e.stopPropagation || function(){e.cancelBubble = true}
			fn.call(self, e);
		});
	}
	function addListen(obj, i){
		if(i = obj.length)while(i--)obj[i].addEventListener = addEvent;
		else obj.addEventListener = addEvent;
		return obj;
	}

	addListen([doc, win]);
	if('Element' in win)win.Element.prototype.addEventListener = addEvent;			//IE8
	else{																			//IE < 8
		doc.attachEvent('onreadystatechange', function(){addListen(doc.all)});		//Make sure we also init at domReady
		docHijack('getElementsByTagName');
		docHijack('getElementById');
		docHijack('createElement');
		addListen(doc.all);	
	}
})(window, document);

    