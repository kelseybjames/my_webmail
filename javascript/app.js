var MailerApp = angular.module('MailerApp', ['ui.router']);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['MailerApp']);
});

MailerApp.config(function($stateProvider, $urlRouterProvider) {
  
  console.log("In heere");

  $stateProvider

  .state("index", {
    url: "/", 
    templateUrl: "authorize.html",
    controller: 'AuthCtrl'
  })
  .state('emails', {
    url: '/emails',
    templateUrl: 'email.html',
    controller: 'EmailCtrl'
  })

  $urlRouterProvider.otherwise('/');
})
