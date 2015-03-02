/*
date:25/02/2015
name:nirali
description: for adding the remainder
*/
soulCRMApp.controller('reminderController', function($scope,$rootScope,$state,$rootScope){
	//call api for display all Remainder
	$scope.init=function(){
		/* $scope.suspectList = SuspectService.getSuspectList();
       .then(function(response){
              console.log("get success");
          },
          function(responseMessage){
              console.log("get error::"+responseMessage);
          });*/

	}
	//on click of save button
	$scope.saveRemainder=function(){
		$rootScope.goto('app.remainder');
	}

		$scope.addRemainder=function(){
         $rootScope.goto("app.addremainder");
	}
});