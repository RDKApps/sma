/*
date:25/02/2015
name:nirali ,ekta
description: for associate contact
*/
soulCRMApp.controller('associateContactController', function($scope,$rootScope){
	//for listing
	$scope.init=function(){
	   /* $scope.suspectList = SuspectService.getSuspectList();
       .then(function(response){
              console.log("get success");
          },
          function(responseMessage){
              console.log("get error::"+responseMessage);
          });*/
    }
	//on click of add associate contact
	$scope.addAssociateContact=function(){
			$rootScope.goto('app.associatecontact');
	}
	$scope.saveAssociateContact=function(){
		    $rootScope.goto('app.associatecontactlist');
	}
});