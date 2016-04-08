
MailerApp.factory('authService', ['$window', 'env',function($window,env){

  var obj = {};

  // obj.handleClientLoad = function() {

  //   //var y = $window.gapi;
  //   console.log(gapi);
  //   console.log(gapi.client);
  //   gapi.client.setApiKey(env.apiKey);
  //   $window.setTimeout(obj.checkAuth, 1);
  // }

  obj.checkAuth = function() {
    $window.gapi.auth.authorize({
      client_id: env.clientId,
      scope: env.scopes,
      immediate: true
    }, obj.handleAuthResult);
  }

  obj.handleAuthClick =  function() {
    $window.gapi.auth.authorize({
      client_id: env.clientId,
      scope: env.scopes,
      immediate: false
    }, obj.handleAuthResult);
    return false;
  }

  obj.handleAuthResult =  function(authResult) {
    if(authResult && !authResult.error) {
      getEmailService.loadGmailApi();
      $('#compose-button').removeClass("hidden");
      $('#authorize-button').remove();
      $('.table-inbox').removeClass("hidden");
    } else {
      $('#authorize-button').removeClass("hidden");
      $('#authorize-button').on('click', function(){
        obj.handleAuthClick();
      });
    }
  }

  return obj;
}]) 