MailerApp.controller('AuthCtrl', '$scope', '$window', 'env', 'authService', function($scope, $window, env, authService) {

  $scope.handleClientLoad = authService.handleClientLoad();
  $scope.checkAuth = authService.checkAuth();
  $scope.handleAuthClick = authService.handleAuthClick();
  $scope.handleAuthResult = authService.handleAuthResult();
})