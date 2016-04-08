
MailerApp.factory('authService',['$window','env', function($window,env){

  var obj = {};

  obj.handleClientLoad = function() {
    console.log(gapi);
    console.log(gapi.client);
    gapi.client.setApiKey(env.apiKey);
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
    if(authResult && !authResult.error) {
      
    } else {
      console.log('auth went wrong, help!');
    }
  }

  return obj;
}]) 