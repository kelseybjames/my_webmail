MailerApp.controller('AuthCtrl', ['$scope', '$window', 'authService', '$state', function($scope, $window, authService, $state) {
  $scope.checkAuth = function() {
    authService.handleClientLoad();
    $state.go('emails');
  }

}])