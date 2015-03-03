/*
date:25/02/2015
name:nirali ,ekta,jay
description: for followup action
*/
soulCRMApp.controller('FollowupController', function($scope,$rootScope,$state,$rootScope){
	//call api for display all followup
	$scope.init=function(){
		/* $scope.suspectList = SuspectService.getSuspectList();
       .then(function(response){
              console.log("get success");
          },
          function(responseMessage){
              console.log("get error::"+responseMessage);
          });*/

	}
	//on clck of button open page for addind new followup
	$scope.addFollowup=function(){
         $rootScope.goto("app.addfollowup");
	}
	//on click of save
   	$scope.saveFollowup=function(){
   	 $rootScope.goto("app.followup");

   }
   //on click of button open page for reply followup
   $scope.followupReply=function(){
     $rootScope.goto("app.followupReply");

   }
   
});//followup controller