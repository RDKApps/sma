/*
date:25/02/2015
name:nirali,ekta,jay
description:controllers->
                SuspectListController:for listing suspects,
                AddSuspectController:for adding new suspect,
                editSuspectController
*/
//controller for displaying suspect list on ng-init
soulCRMApp.controller('SuspectListController', function($scope,SuspectService,$rootScope){
    //calling service to display list of suspectt
    //$scope.suspect={};
    $scope.init=function(){
    	 $scope.suspectList = SuspectService.getSuspectList();
       .then(function(response){
              console.log("get success");
          },
          function(responseMessage){
              console.log("get error::"+responseMessage);
          });
    }
   //for scrolling
    $scope.suspectListPaging = function() {
         $scope.noMoreItemsAvailable = false;
         $scope.suspectList.push();
         var len = $scope.suspectList.length;
          if ($scope.suspectList.length == len) {
              $scope.noMoreItemsAvailable = true;
         }
         $scope.$broadcast('scroll.infiniteScrollComplete');
    }      
    //to route to add suspect page
    $scope.addNewSuspect=function(){
        $rootScope.goto('app.addSuspect');
    }
    //to select specific suspect
    $scope.SelectSpecificSuspect=function(id){
      //$scope.user=SuspectService.selectSpecificSuspectData(id);
      //console.log($scope.user);
      $rootScope.goto("app.displaySuspect");
    }
});


//controller for adding new suspect
soulCRMApp.controller('AddSuspectController',function($rootScope,$scope,SuspectService,$ionicPopup,$timeout){
		  //service for adding new suspect
	 	  $scope.newSuspect={};
      $scope.newSuspect.BillingAddress={}; 
      //for save suspect
   		$scope.saveSuspect=function(dataObject){
              console.log(suspectJson);
              $scope.newSuspect.IsPublic=false;
              $scope.newSuspect.KeyAccountManager=1;
              var suspectJson=$scope.newSuspect;
              $rootScope.goto('app.suspect');
             /*console.log($scope.newSuspect);
               console.log($scope.newSuspect.BillingAddress);
    				   SuspectService.createNewSuspect(suspectJson).then(function(response){
                    console.log("get success");
               },
               function(responseMessage){
                    console.log("get error::"+responseMessage);
               });*/             
    	}
     /* //cancle button click
      $scope.cancelSuspect=function(){
        $rootScope.goto('app.suspect');
      }
      *///dispaly popup when user select private option
      $scope.showKeyManagerPopup=function(){
            var showKeyManagerPopUp=$ionicPopup.show({
            template:'<textarea cols="20" rows="10" ng-model="noteData.note" autofocus>',
            title:'key manager setting',
            scope:$scope,
            buttons:[
                        {text:'cancel'},
                        {text:'save',type:'button-positive',
                          onTap:function(e){
                             if(!$scope.noteData.note)
                                e.preventDefault();
                              else
                                return $scope.noteData.note;
                          }
                        }
                    ]
            });
            showKeyManagerPopUp.then(function(res){
                console.log(res);
            });
            $timeout(function(){
                showKeyManagerPopUp.close();
            },10000);
      }
    	
});//controller

// controller for display, edit and for action sheet
soulCRMApp.controller('EditSuspectController', function($scope,$rootScope,$stateParams,$state,$ionicActionSheet,$ionicPopup,$timeout){
  $scope.shouldDisable=true;
  //selecting the specific user
	$scope.init=function(){
        //alert($stateParams.id);
        //console.log("inside edit display susp"+$state.par.id);
        //$scope.user=SuspectService.selectSpecificSuspectData(id);
        //--->api call
        /* .then(function(response){
              console.log("get success");
          },
          function(responseMessage){
              console.log("get error::"+responseMessage);
          });*/
  }
  //on edit button click from actions 
  editSuspect=function(){
    $scope.shouldDisable = false;
    //$scope.edit=false;
  }
  //for action sheet
  $scope.showActionSheet=function(){
      $ionicActionSheet.show({
          titleText: 'Actions',
          buttons: [
                      { text: '<i class="icon ion-person"></i> Convert to lead' },
                      { text: '<i class="icon ion-trash-a" style="color:red;"></i> Delete' },
                      { text: '<i class="icon ion-document-text"></i> Add new note' },
                      { text: '<i class="icon ion-android-contacts"></i> Add Associatecontact' },
                      { text: '<i class="icon ion-edit"></i>Edit'}
                   ],
          /*destructiveText: 'Delete',  
          destructiveButtonClicked: function() {
           console.log('DESTRUCT');
            //console.log($scope.user.firstname);
             var confirmStatus=confirm("Are you sure you want to delete data?");
             if(confirmStatus)
             //alert("Deleted data sucessfully");
                   $rootScope.goto("app.suspect");
             
             return true;
          },*/
          cancelText: 'Cancel',
          cancel: function() {
                    console.log('CANCELLED');
          },
          buttonClicked: function(index){
              console.log('BUTTON CLICKED', index);
              switch(index){
                  case 0:
                          convertToLeadPopup();
                          break;
                  case 1:
                          deleteSuspect();
                          break;
                  case 2:
                          displayNotePopup();
                          break;
                  case 3:
                          $rootScope.goto('app.associatecontact');
                          break;       
                  case 4:
                          editSuspect();
                          break;
              }
              return true;
          }
    })
  }
 	//popup for display note
    displayNotePopup=function(){
        console.log("display popup called!!!");
        $scope.noteData={};
        var notePopup=$ionicPopup.show({
            template:'<textarea cols="20" rows="10" ng-model="noteData.note" autofocus>',
            title:'Add Note',
            scope:$scope,
            buttons:[
                        {text:'cancel'},
                        {text:'save',type:'button-positive',
                          onTap:function(e){
                             if(!$scope.noteData.note)
                                e.preventDefault();
                              else
                                return $scope.noteData.note;
                          }
                        }
                    ]
        });
        notePopup.then(function(res){
         		console.log(res);
        });
        $timeout(function(){
         		notePopup.close();
        },10000);
    }
  	$scope.addFollowUpPopup=function(){
    	  console.log("follow up popup");
        $rootScope.goto('app.addfollowup')
      
  	}
  	convertToLeadPopup=function(){
    	   console.log("convert To Lead Popup");
  	}
    deleteSuspect=function(){
          console.log("delete"); 
          var confirmStatus=confirm("Are you sure you want to delete data?");
             if(confirmStatus)
                   $rootScope.goto("app.suspect");
             return true;
    }
});