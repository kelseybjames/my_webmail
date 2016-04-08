var MailerApp = angular.module('MailerApp', ['ui.router', 'ui.bootstrap']);

MailerApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state("mailerapp", {
    url: "/",
    template: "authorize.html",
    controller: 'AuthCtrl'
  })
  // .state('mailerapp.emails', {
  //   url: 'emails',
  //   templateUrl: 'index.html',
  //   controller: 'EmailCtrl'
  // })

  $urlRouterProvider.otherwise('/');
})