/*
date:27/02/2015
name:nirali ,jay ,ekta
description: for routing and http heders
*/
var soulCRMApp = angular.module('soulCRMApp', ['ionic']);

soulCRMApp.run(function($ionicPlatform,$rootScope,$state) {
  $rootScope.goto=function(path){
          $state.go(path);
    }
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

soulCRMApp.config(function($stateProvider, $urlRouterProvider,$httpProvider)
{
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $httpProvider.defaults.headers.common['Accept'] = 'application/json';
  $httpProvider.defaults.headers.common['SessionToken'] = '';
  $httpProvider.defaults.headers.common['AppSecretKey'] = 'PQR';
  $httpProvider.defaults.headers.common['AppAccessKey'] = 'ABC';
  $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
  $httpProvider.defaults.useXDomain = true;
    $stateProvider
      .state('login', 
      {
          url: '/login',
          templateUrl: 'src/views/login.html',
          controller: 'LoginController'
      })
      .state('dashBoard', 
      {
          url: '/dashboard',
          templateUrl: 'src/views/dashboard.html',
          controller: 'dashBoardController'
      })
      .state('app', 
      {
          url: '/app',
          templateUrl: 'src/views/menu.html'
       })
      .state('app.suspect',{
          url:'/suspect',
          views:{
                    'menuContent':{
                                      templateUrl: "src/views/suspect/list.html",
                                      controller:"SuspectListController"
                                  }  
                }
      })
       .state('app.addSuspect',{
          url: "/addsuspect",
          views:{
                    'menuContent':{
                                      templateUrl: "src/views/suspect/create.html",
                                      controller: "AddSuspectController"
                                  }
                 }
        })
       .state('app.displaySuspect',{
          url: "/displaysuspect",
          views:{
                    'menuContent':{
                                   
                                      templateUrl: "src/views/suspect/edit.html",
                                      controller: "EditSuspectController"
                                  }
                 }
        })
       .state('app.lead',{
          url: "/lead",
          views:{
                    'menuContent':{
                                      templateUrl: "src/views/lead/list.html",
                                      controller:"LeadListController"
                                  }
                 }
        })
       .state('app.addLead',{
          url: "/addlead",
          views:{
                    'menuContent':{
                                      templateUrl: "src/views/lead/create.html",
                                      controller: "AddLeadController"
                                  }
                 }
        })
       .state('app.displayLead',{
          url: "/displaylead",
          views:{
                    'menuContent':{
                                   
                                      templateUrl: "src/views/lead/edit.html",
                                      controller: "EditLeadController"
                                  }
                 }
        })
       .state('app.contact',{
          url: "/contact",
          views:{
                   'menuContent':{
                                      templateUrl: "src/views/contact/list.html",
                                      controller:"ContactListController"
                                  }
                 }
        })
       .state('app.addContact',{
          url: "/addcontact",
          views:{
                    'menuContent':{
                                      templateUrl: "src/views/contact/create.html",
                                      controller: "AddContactController"
                                  }
                 }
        })
      .state('app.displayContact',{
          url: "/displaycontact",
          views:{
                    'menuContent':{
                                   
                                      templateUrl: "src/views/contact/edit.html",
                                      controller: "EditContactController"
                                  }
                 }
        })
       .state('app.followup',{
          url: "/followup",
          views:{
                    'menuContent':{
                                      templateUrl: "src/views/followup/addfollowuplist.html",
                                      controller:"FollowupController"
                                  }
                 }
        })
       .state('app.addfollowup',{
          url: "/addfollowup",
          views:{
                    'menuContent':{
                                      templateUrl: "src/views/followup/addfollowup.html",
                                      controller:"FollowupController"
                                  }
                 }
        })
       .state('app.associatecontact',{
          url: "/associatecontact",
          views:{
                    'menuContent':{
                                      templateUrl: "src/views/associatecontact/associatecontact.html",
                                      controller:"associateContactController"
                                  }
                 }
        })
       .state('app.associatecontactlist',{
          url: "/associatecontactlist",
          views:{
                    'menuContent':{
                                      templateUrl: "src/views/associatecontact/associatecontactlist.html",
                                      controller:"associateContactController"
                                  }
                 }
        })
       .state('app.notes',{
          url: "/notes",
          views:{
                    'menuContent':{
                                      templateUrl: "src/views/note/note.html",
                                      controller:"notesController"
                                  }
                 }
        })
       .state('app.remainder',{
          url: "/remainder",
          views:{
                    'menuContent':{
                                      templateUrl: "src/views/remainder/remainderlist.html",
                                      controller:"reminderController"
                                  }
                 }
        })
       .state('app.addremainder',{
          url: "/addremainder",
          views:{
                    'menuContent':{
                                      templateUrl: "src/views/remainder/addremainder.html",
                                      controller:"reminderController"
                                  }
                 }
        });
        
        $urlRouterProvider.otherwise('/login');
});
