MailerApp.controller('EmailCtrl', ['$scope', '$window', 'emailService', 'uibModal', function($scope, $window, emailService, uibModal) {

  $scope.messages = emailService.getMessages();

  $scope.openEmailShowModal = function(message) {
    $scope.message = message;
    var emailShowModal = $uibModal.open({
      animation: true,
      templateUrl: 'email_show_modal.html',
      controller: 'EmailCtrl',
      scope: $scope
    })
  };
}])