MailerApp.controller('EmailCtrl', ['$scope', '$window', 'emailService', 'sendService', '$uibModal', function($scope, $window, emailService, sendService, $uibModal) {

  $scope.messages = emailService.getMsgs();

  $scope.refreshMessages = function(){
    $scope.messages = emailService.getMsgs();
  }

  $scope.openEmailShowModal = function(message) {
    $scope.message = message;
    var emailShowModal = $uibModal.open({
      animation: true,
      templateUrl: 'email_show_modal.html',
      controller: 'EmailCtrl',
      scope: $scope
    })
  };

  $scope.openNewEmailModal = function() {
    $scope.newmessage = {};
    console.log('opening new email modal');
    var newEmailModal = $uibModal.open({
      animation: true,
      templateUrl: 'new_email_modal.html',
      controller: 'EmailCtrl',
      scope: $scope
    })
  };

  $scope.sendEmail = function(to, subject, body) {
    sendService.sendEmail(to, subject, body);
  };
}])