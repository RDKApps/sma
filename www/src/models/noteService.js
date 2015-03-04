soulCRMApp.factory('NoteService', function(){
   var noteObj = {};
   var noteList = [{ 
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
                       }];
  
	noteObj.getNoteList = function(){
    return noteList;
  }
return noteObj;
});