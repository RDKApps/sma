/*
date:25/02/2015
name:nirali,jay
description:serivices for contact
*/

soulCRMApp.factory('ContactService', function (){
var contactObj = {};
   var contactList = [{ 
                                 'id':1,
            					           'name':'yuh',
	                    		       'mobileno': 12154613,
	                    },
	                     { 
                                 'id':2,
	                    		       'name':'bgg',
		                    	       'mobileno': 55454465,
		                   },
		                   { 	
                                 'id':3,
		                    	       'name':'tyh',
			                           'mobileno': 15464650,
			                 },
                       { 
                                'id':4,
                                'name':'cvf',
                                'mobileno': 12154613,
                       },
                       { 
                                'id':5,
                                'name':'abc',
                                'mobileno': 12154613,
                       }];
    //factory for getting the lead list
    contactObj.getContactList = function(){
    return contactList;
          /*var deferred = $q.defer();
          $http.get('http://apiv2.'+loginObj.domainName+'.mysoulcrm.com:8080/users/login?Username='+loginObj.username+'&Password='+loginObj.password)
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
          return deferred.promise;*/
    }
    //factory for edit lead
    contactObj.editContact = function(newSuspect){
            var deferred = $q.defer();
            $http.put(api)
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
          return deferred.promise;
           
    }
    //factory for delete lead
    contactObj.deleteLead = function(newSuspect){
            var deferred = $q.defer();
           $http.delete(api)
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
          return deferred.promise;
    }
 	return contactObj;
});