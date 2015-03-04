/*
date:25/02/2015
name:nirali
description: for adding the remainder
*/
soulCRMApp.controller('notesController', function($scope,$rootScope,$ionicPopup,$timeout,NoteService){
  $scope.init=function(){
    $scope.noteList = NoteService.getNoteList();
  }
	$scope.addNotes=function(){
		console.log("display popup called!!!");
        $scope.data={};
        var notePopup=$ionicPopup.show({
            template:'<textarea cols="20" rows="10" ng-model="data.note" autofocus>',
            title:'Add Note',
            scope:$scope,
            buttons:[
                        {text:'cancel'},
                        {text:'save',type:'button-positive',
                          onTap:function(e){
                             if(!$scope.data.note)
                                e.preventDefault();
                              else
                                return $scope.data.note;
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
});