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
soulCRMApp.controller('EditLeadController', function($scope,$state,LeadService,$stateParams,$rootScope,$ionicActionSheet,$ionicPopup,$timeout) 
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
          buttons: [
                      { text: '<i class="icon ion-person"></i> Convert to Contact' },
                      { text: '<span class="assertive"><i class="icon ion-trash-a"></i> Delete</span>' },
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
                          deleteLead();
                          break;
                  case 2:
                          editLead();
                          break;
              }
              return true;
          }
    })
  }
   
    $scope.addFollowUpPopup=function(){
          console.log("follow up popup");
        $rootScope.goto('app.addfollowup')
      
    }
    convertToContactPopup=function(){
           console.log("convert To contact Popup");
    }
    deleteLead=function(){
          console.log("delete"+$stateParams.id); 
          var confirmStatus=confirm("Are you sure you want to delete data?");
             if(confirmStatus){
                LeadService.deleteLead($stateParams.id)
                .then(function(response){
                    console.log("get success");
                    $rootScope.goto("app.lead");
                 },
                 function(responseMessage){
                    console.log("get error::"+responseMessage);
                 }); 
              }
           return true;
    } 
})