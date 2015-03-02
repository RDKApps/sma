/*
date:25/02/2015
name:jay,nirali
description:controlling the lead module
*/
soulCRMApp.controller('LeadListController', function($scope,$state,LeadService,$rootScope) 
{
	    //display lead list
    $scope.init=function(){
        //calling service to display list of lead
        $scope.leadList = LeadService.getLeadList();
    }
    $scope.addNewLead=function(){
    	$rootScope.goto('app.addLead');
    }
    $scope.SelectSpecificLead=function(){
        $rootScope.goto("app.displayLead");
    }

})
soulCRMApp.controller('AddLeadController', function($scope,$state,LeadService,$rootScope) 
{
       

})
soulCRMApp.controller('EditLeadController', function($scope,$state,LeadService,$rootScope,$ionicActionSheet,$ionicPopup,$timeout) 
{
    $scope.shouldDisable=true;
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
  editLead=function(){
    $scope.shouldDisable = false;
    //$scope.edit=false;
  }
  //for action sheet
  $scope.showActionSheet=function(){
      $ionicActionSheet.show({
          titleText: 'Actions',

          destructiveText: 'Delete',  
          destructiveButtonClicked: function() {
           console.log('DESTRUCT');
            //console.log($scope.user.firstname);
             var confirmStatus=confirm("Are you sure you want to delete data?");
             if(confirmStatus)
             //alert("Deleted data sucessfully");
                   $rootScope.goto("app.lead");
             
             return true;
          },
          buttons: [
                      { text: '<i class="icon ion-person"></i> Convert to Contact' },
                      { text: '<i class="icon ion-document-text"></i> Add new note' },
                      { text: '<i class="icon ion-android-contacts"></i> Add Associatecontact' },
                      { text: '<i class="icon ion-edit"></i>Edit'}
                   ],
          
          cancelText: 'Cancel',
          cancel: function() {
                    console.log('CANCELLED');
          },
          buttonClicked: function(index){
              console.log('BUTTON CLICKED', index);
              switch(index){
                  case 0:
                          convertToContactPopup();
                          break;
                  case 1:
                          displayNotePopup();
                          break;
                  case 2:
                          $rootScope.goto('app.associatecontact');
                          break;       
                  case 3:
                          editLead();
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
    convertToContactPopup=function(){
           console.log("convert To contact Popup");
    }
	   

})