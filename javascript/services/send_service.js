MailerApp.factory('sendService',['$window','env', function($window,env){

  var obj = {}; 

  obj.sendEmail = function(to,subject,body){
    obj.sendMessage(
      {
        'To': to,
        'Subject': subject
      },
      body,
      obj.composeTidy
    );
    return false;
  }

  obj.sendMessage = function(headers_obj, message, callback) {
    var email = '';

    for(var header in headers_obj) {
      email += header += ": "+headers_obj[header]+"\r\n";

      email += "\r\n" + message;

      var sendRequest = $window.gapi.client.gmail.users.messages.send({
        'userId': 'me',
        'resource': {
           'raw': $window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
         }
      });
    }

    return sendRequest.execute(callback);
  }

  
  obj.composeTidy = function() {

  }
  
  return obj;
}]);