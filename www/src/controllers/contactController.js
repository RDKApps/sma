/*
date:25/02/2015
name:jay
description:controlling the contact module
*/
soulCRMApp.controller('ContactListController', function($scope,$state,ContactService,$rootScope) 
{
	//display contact list
	$scope.init=function(){
        //calling service to display list of suspectt
        $scope.contactList = ContactService.getContactList();
    }
    $scope.addNewContact=function(){
    	$rootScope.goto('app.addContact');
    }
    $scope.SelectSpecificContact=function(){
        $rootScope.goto("app.displayContact");
    }
})
soulCRMApp.controller('AddContactController', function($scope,$state,LeadService,$rootScope) 
{
	   

})
soulCRMApp.controller('EditContactController', function($scope,$state,LeadService,$stateParams,$rootScope,$ionicActionSheet,$ionicPopup,$timeout) 
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
  editContact=function(){
    $scope.shouldDisable = false;
    //$scope.edit=false;
  }
  //for action sheet
  $scope.showActionSheet=function(){
      $ionicActionSheet.show({
          titleText: 'Actions',
          buttons: [
                     
                      { text: '<i class="icon ion-document-text"></i> Add new note' },
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
                          displayNotePopup();
                          break;
                  case 1:
                          deleteContact();
                          break;
                      
                  case 2:
                    	    editContact();
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

    deleteContact=function(){
          console.log("delete"+$stateParams.id); 
          var confirmStatus=confirm("Are you sure you want to delete data?");
             if(confirmStatus){
                ContactService.deleteContact($stateParams.id)
                .then(function(response){
                    console.log("get success");
                    $rootScope.goto("app.contact");
                 },
                 function(responseMessage){
                    console.log("get error::"+responseMessage);
                 }); 
              }
             return true;
    }

})
