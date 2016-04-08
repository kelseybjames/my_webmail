var MailerApp = angular.module('MailerApp', ['ui.router', 'ui.bootstrap']);

MailerApp.config(function($stateProvider, $urlRouterProvider) {
  
  console.log("In heere");

  $stateProvider

  .state("index", {
    url: "/",
    templateUrl: "authorize.html",
    controller: 'AuthCtrl'
  })
  // .state('mailerapp.emails', {
  //   url: 'emails',
  //   templateUrl: 'index.html',
  //   controller: 'EmailCtrl'
  // })

  $urlRouterProvider.otherwise('/');
})