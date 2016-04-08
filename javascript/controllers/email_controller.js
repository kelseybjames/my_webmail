MailerApp.controller('EmailCtrl', ['$scope', '$window', 'emailService', function($scope, $window, emailService) {

  $scope.emails = gapi.client.gmail.users.messages.list({
    'userId': 'me',
    'labelIds': 'INBOX',
    'maxResults': 10
  });
}])