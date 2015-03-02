/*
date:25/02/2015
name:nirali,ekta
description:serivices for suspect:
            ->suspect list
            ->add new suspect
            ->edit suspect
            ->actions for suspect
*/
soulCRMApp.factory('SuspectService', function($http,$q,$rootScope){
   var suspectObj = {};
   var suspectList = [{ 
                                'id':1,
            					          'name':'abc',
	                    		      'mobileno': 12154613,
                                'companyName':'tcs'
	                   },
                     { 
                                 'id':2,
                                 'name':'xyz',
                                 'mobileno': 55454465,
                                 'companyName':'rapidops'
                      },
                      {   
                                 'id':3,
                                 'name':'pqr',
                                 'mobileno': 15464650,
                                 'companyName':'wipro'
                       },
                       { 
                                'id':4,
                                'name':'qwe',
                                'mobileno': 12154613,
                                'companyName':'infosis'
                       },
                       { 
                                'id':5,
                                'name':'sdf',
                                'mobileno': 12154613,
                                'companyName':'kaira'
                       },
                       { 
                                'id':6,
                                'name':'vbg',
                                'mobileno': 12154613,
                                'companyName':'tcs'
                       },
                       { 
                                'id':7,
                                'name':'dfv',
                                'mobileno': 12154613,
                                'companyName':'hyperlink'
                       },
                       { 
                                'id':8,
                                'name':'vbn',
                                'mobileno': 12154613,
                                'companyName':'webline india'
                       },
                       { 
                                'id':9,
                                'name':'drt',
                                'mobileno': 12154613,
                                'companyName':'indusha'
                       }];
  //factory for displaying the suspect list
	suspectObj.getSuspectList = function(){
    //return suspectList;
          var deferred = $q.defer();
          $http.get('http://apiv2.mysoulcrm.com:8080/rawcontacts/');
          .success(function(data){
              if(data.Status=="success"){
                   //$http.defaults.headers.common["SessionToken"]=data.Data.SessionToken;
                   console.log(data.Data);
                   deferred.resolve(data.Data);
              } else{
                      deferred.reject(data.Error);}
          })//success finish
          .error(function(response){
              deferred.reject(response.Error.Message);
          });
          return deferred.promise;
    }

  //factory for creating the new suspect
 	suspectObj.createNewSuspect = function(newSuspect){
            $http.defaults.headers.common["SessionToken"]=$rootScope.sessionToken;
     				console.log("inside factory new suspect"+newSuspect);
            var deferred = $q.defer();
           $http.post('http://apiv2.staging5.mysoulcrm.com:8080/rawcontacts',newSuspect).success(function(data){
              if(data.Status=="success"){
                   console("get success");
                   deferred.resolve(data.Data);
              } else{
                      console.log("somethig wrong..");
                      deferred.reject(data.Error);}
          }).error(function(response){
                      console.log("get error");
                      /*obj=JSON.parse(newSuspect);
                      var dataObject = {};
                      dataObject['name']=obj.Name;
                      dataObject['mobileno']=obj.Mobile;
                      console.log(dataObject);
                      suspectList.push(dataObject);
                      return dataObject;*/
                      deferred.reject(response.Error.Message);
          });
          return deferred.promise;
    }
    //factory for selecting data for specific suspect
    suspectObj.selectSpecificSuspectData = function(id){
            console.log("inside factory new suspect"+id);
           /* var deferred = $q.defer();
           $http.get(api,id)
           .success(function(data){
              if(data.Status=="success"){
                   console("get success");
                   deferred.resolve(data.Data);
              } else{
                      console.log("somethig wrong..");
                      deferred.reject(data.Error);}
          })//success finish
          .error(function(response){
                      console.log("get error");
                      deferred.reject(response.Error.Message);
          });
          return deferred.promise;*/
          var specificSuspect={
                'id':1,
                'name':'abc'
          };
          return specificSuspect;
    }
    //factory for edit suspect
    suspectObj.editSuspect = function(newSuspect){
            console.log("inside factory new suspect"+newSuspect);
            var deferred = $q.defer();
           $http.put(api).success(function(data){
              if(data.Status=="success"){
                   console("get success");
                   deferred.resolve(data.Data);
              } else{
                      console.log("somethig wrong..");
                      deferred.reject(data.Error);}
          }).error(function(response){
                      console.log("get error");
                      deferred.reject(response.Error.Message);
          });
          return deferred.promise;     
    }
    //factory for delete suspect
    suspectObj.deleteSuspect = function(newSuspect){
            console.log("inside factory new suspect"+newSuspect);
            var deferred = $q.defer();
           $http.delete(api).success(function(data){
              if(data.Status=="success"){
                   console("get success");
                   deferred.resolve(data.Data);
              } else{
                      console.log("somethig wrong..");
                      deferred.reject(data.Error);}
          }).error(function(response){
                      console.log("get error");
                      deferred.reject(response.Error.Message);
          });
          return deferred.promise;
    }
    return suspectObj ; 
});//createnew suspect

/* for push logic
            console.log("inside factory new suspect");
            obj=JSON.parse(newSuspect);
            var dataObject = {};
            dataObject['name']=obj.Name;
            dataObject['mobileno']=obj.Mobile;
            console.log(dataObject);
            suspectList.push(dataObject);
            return dataObject;*/