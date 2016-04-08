 
MailerApp.factory('emailService',['$window','env', function($window,env){

  var obj = {};

  obj.loadGmailApi = function() {
    $window.gapi.client.load('gmail', 'v1', obj.displayInbox);
  };

  obj.displayInbox = function() {
    var request = gapi.client.gmail.users.messages.list({
      'userId': 'me',
      'labelIds': 'INBOX',
      'maxResults': 10
    })
    console.log(request);
    request.execute(function(response) {
      $.each(response.messages, function() {
        var messageRequest = gapi.client.gmail.users.messages.get({
          'userId': 'me',
          'id': this.id
        });

        messageRequest.execute(appendMessageRow);
      });
    });
  }

  return obj;
}]);