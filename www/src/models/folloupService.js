soulCRMApp.factory('FollowupService', function(){
   var followupObj = {};
   var followupList = [{ 
                                
            					          'outcome':'lost',
                                'comments':'comment1',
	                    		      'actualTakenDate': 12154613
	                   },
                     { 
                                
                                 'outcome':'won',
                                'comments':'comment1',
                                'actualTakenDate': 12154613
                      },
                      {   
                                 
                                 'outcome':'visit again',
                                'comments':'comment1',
                                'actualTakenDate': 12154613
                       },
                       { 
                                
                                'outcome':'lost',
                                'comments':'comment1',
                                'actualTakenDate': 12154613
                       }];
  
	followupObj.getfollowupList = function(){
    return followupList;
  }
return followupObj;
});