soulCRMApp.factory('FollowupService', function($rootScope){
   var followupObj = {};
   var followupList = [{ 
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
  
	followupObj.getfollowupList = function(){
    return followupList;
    
}
 
});