/*
date:25/02/2015
name:nirali
description:serivices for lead
*/
soulCRMApp.factory('LeadService', function (){
   var leadObj = {};
   var leadList = [{ 
                                'id':1,
                                'name':'fff',
                                'mobileno': 12154613,
                       },
                       { 
                                'id':2,
                                'name':'xsf',
                                'mobileno': 55454465,
                       },
                       {    
                                'id':3,
                                'name':'pqr',
                                'mobileno': 15464650,
                       },
                       { 
                                'id':4,
                                'name':'gfg',
                                'mobileno': 12154613,
                       },
                       { 
                                'id':5,
                                'name':'fdg',
                                'mobileno': 12154613,
                       }];
  //factory for getting the lead list
  leadObj.getLeadList = function(){
    return leadList;
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
    leadObj.editLead = function(newSuspect){
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
    leadObj.deleteLead = function(newSuspect){
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
    return leadObj ; 
});//controller complete