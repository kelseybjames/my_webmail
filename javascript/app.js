var MailerApp = angular.module('MailerApp', ['ui.router']);

MailerApp.constant('env', {
 clientId: '586929170645-1882ven187ul03hisl6jhb4isrstmt83.apps.googleusercontent.com',
  apiKey: 'AIzaSyD3-p9DiZtNjptHJrjiPNt78ozi1aoNVvY',
  scopes:  'https://www.googleapis.com/auth/gmail.readonly '+
            'https://www.googleapis.com/auth/gmail.send'
      });
      

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