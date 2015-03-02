/*
date:25/02/2015
name:nirali,ekta
description:serivices for login
*/

soulCRMApp.factory('LoginService', function($http, $q){
    var loginObj={};
    console.log('http://apiv2.'+loginObj.domainName+'.mysoulcrm.com:8080/users/login?Username='+loginObj.username+'&Password='+loginObj.password);
    loginObj.verifyUser=function(loginObj){
          var deferred = $q.defer();
          $http.get('http://apiv2.'+loginObj.domainName+'.mysoulcrm.com:8080/users/login?Username='+loginObj.username+'&Password='+loginObj.password)
          .success(function(data){
              if(data.Status=="success"){
                   //$http.defaults.headers.common["SessionToken"]=data.Data.SessionToken;
                   console.log(data.Data);
                   deferred.resolve(data.Data);
              } else{
                      console.log("inside error");
                      deferred.reject(data.Error);}
          })//success finish
          .error(function(response){
            console.log("inside failure");
              deferred.reject(response.Error.Message);
          });
          return deferred.promise;
    }
    return loginObj;
});//factory finish
