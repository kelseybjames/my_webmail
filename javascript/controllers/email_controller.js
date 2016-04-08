MailerApp.controller('AuthCtrl', '$scope', '$window', 'authService', function($scope, $window, authService) {

  $scope.emails = gapi.client.gmail.users.messages.list({
    'userId': 'me',
    'labelIds': 'INBOX',
    'maxResults': 10
  });
})