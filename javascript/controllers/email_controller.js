MailerApp.controller('EmailCtrl', ['$scope', '$window', 'emailService', function($scope, $window, emailService) {

  $scope.messages = emailService.getMsgs();

  $scope.refreshMessages = function(){
    $scope.messages = emailService.getMsgs();
  }

  // $scope.openEmailShowModal = function(message) {
  //   $scope.message = message;
  //   var emailShowModal = $uibModal.open({
  //     animation: true,
  //     templateUrl: 'email_show_modal.html',
  //     controller: 'EmailCtrl',
  //     scope: $scope
  //   })
  // };

  console.log('got to email controller');
}])