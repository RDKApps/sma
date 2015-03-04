/*
date:25/02/2015
name:nirali ,ekta,jay
description: for followup action
*/
soulCRMApp.controller('FollowupController', function($scope,$rootScope,$state,$rootScope,FollowupService){
	//call api for display all followup
	$scope.init=function(){
    $scope.followupList = FollowupService.getfollowupList();
       /*.then(function(response){
              console.log("get success");
          },
          function(responseMessage){
              console.log("get error::"+responseMessage);
          });*/

	}
	//on clck of button open page for addind new followup
	$scope.addFollowup=function(){
         $rootScope.goto('app.addfollowup');
	}
   //on click of button open page for reply followup
   $scope.followupReply=function(){
      alert("reply");
      $rootScope.goto("app.addfollowuplead");
   }
   $scope.saveFollowup=function(){
     $rootScope.goto("app.followup");
   }
});//followup controller


