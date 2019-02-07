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