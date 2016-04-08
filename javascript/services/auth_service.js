
MailerApp.factory('authService',['$window','env', 'emailService', function($window,env,emailService){

  var obj = {};

  obj.handleClientLoad = function() {
    console.log(env.apiKey);
    gapi.client.setApiKey(env.apiKey);
    $window.setTimeout(obj.checkAuth, 1);
  }

  obj.checkAuth = function() {
    console.log(env);
    $window.gapi.auth.authorize({
      client_id: env.clientId,
      scope: env.scopes,
      immediate: true
    }, obj.handleAuthResult);
  }

  obj.handleAuthClick =  function() {
    console.log($window.gapi);
    $window.gapi.auth.authorize({
      client_id: env.clientId,
      scope: env.scopes,
      immediate: false
    }, obj.handleAuthResult);
    return false;
  }

  obj.handleAuthResult =  function(authResult) {
    console.log('auth result');
    console.log(authResult);
    if(authResult && !authResult.error) {
      emailService.loadGmailApi();
    } else {
      console.log('auth went wrong, help!');
    }
  }

  return obj;
}]) 