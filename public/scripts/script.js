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