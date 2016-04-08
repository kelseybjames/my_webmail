MailerApp.controller('AuthCtrl', ['$scope', '$window', 'authService', function($scope, $window, authService) {
  //$scope.handleClientLoad = authService.handleClientLoad();
  //setTimeout(authService.checkAuth, 1);
  $scope.checkAuth = function() {
    authService.handleClientLoad();  
  }
  // $scope.handleAuthClick = authService.handleAuthClick();
  // $scope.handleAuthResult = authService.handleAuthResult();
}])