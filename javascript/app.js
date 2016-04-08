var app = angular.module('MailerApp', ['ui.router']);

MailerApp.config('$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state("mailerapp", {
    url: "/",
    template: "authorize.html",
    controller: 'AuthCtrl'
  })
  .state('mailerapp.emails', {
    url: 'emails',
    templateUrl: 'index.html',
    controller: 'EmailCtrl'
  })

  $urlRouterProvider.otherwise('/');
})