/*
date:25/02/2015
name:nirali,ekta
description:verifying the user and setting the session
*/
soulCRMApp.controller('LoginController', function($scope,$state,$rootScope,LoginService) {
    $scope.loginData = {
      "domainName":"staging5",
      "username":"admin",
      "password":"admin"
    };
    $scope.doLogin = function(form){     
         //alert("valid");
         if(!form.$valid){
            console.log("not valid");
            return;
         }
         else{
                console.log("inside verifyUser");
                //alert($scope.loginData.domainName);
                console.log($scope.loginData);
                LoginService.verifyUser($scope.loginData).then(function(response){
                    $rootScope.sessionToken=response.SessionToken;
                    //use window.localstorage
                    window.sessionStorage['sessionInfo']=JSON.stringify(response);

                   // var loginData=JSON.parse(window.localStorage['post']||'{}');            
                    $rootScope.prospectLable=response.ConfigurationOptions.RAWCONTACT_MODULE_LABEL;
                    $rootScope.leadLable=response.ConfigurationOptions.LEAD_MODULE_LABEL;
                    $state.go("dashBoard"); 
                },
                function(responseMessage){
                    console.log("get negative responce");
                    $scope.errorMessage=responseMessage;
               });
                /*if(data){
                      //store data locally
                      window.localStorage['post']=JSON.stringify($scope.loginData);
                      var loginData=JSON.parse(window.localStorage['post']||'{}');
                      console.log("fetch data from localstorage");
                      console.log(loginData);
                      $state.go("app.dashboard"); 
                }   
                else
                     $scope.errorMessage="Invalid credentials";*/
           }             
    }//end of doLogin
});


