MailerApp.contropller('EmailCtrl', '$scope', '$window', 'env', function($scope, $window, env) {

  $scope.emails = gapi.client.gmail.users.messages.list({
    'userId': 'me',
    'labelIds': 'INBOX',
    'maxResults': 10
  });
})