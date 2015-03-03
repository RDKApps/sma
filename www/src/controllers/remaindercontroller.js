/*
date:25/02/2015
name:nirali
description: for adding the remainder
*/
soulCRMApp.controller('remainderController', function($scope,$rootScope,$state,$rootScope){
	//call api for display all Remainder
	console.log("remainderController");
	$scope.init=function(){
	  $scope.remainder=[{ description:"visit"},
	                    { description: "visit again"}];
	   return $scope.remainder;                 
		/* $scope.suspectist = SuspectService.getSuspectList();
       .then(function(response){
              console.log("get success");
          },
          function(responseMessage){
              console.log("get error::"+responseMessage);
          });*/

	}
	//on click of save button
	$scope.saveRemainder=function(){
         console.log("save remainder");
         //$rootScope.goto('app.suspect');
		 $rootScope.goto('app.addremainder');
	}

		$scope.addRemainder=function(){
		 console.log("add remainder");
         $rootScope.goto("app.remainder");
	}
	  //delete particular remainder
	  $scope.deleteRemaider=function(){
	   	console.log("delete");

	  }
});