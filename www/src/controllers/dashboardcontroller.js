/*
date:25/02/2015
name:nirali
description: for adding the remainder
*/
soulCRMApp.controller('dashBoardController', function($scope,$state){
	$scope.signOut=function(){
		//alert("hi");
		$state.go('login');
	}
});