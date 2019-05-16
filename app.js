 $(document).ready(function(){
    //Get text from input box               
                   $("div#homePage").show();
                   $("div#basketballPage").hide();
                   $("div#footballPage").hide();
                   $("div#celebPage").hide();
                   $("div#musicPage").hide();
                   $("div#schoolPage").hide();
                   $("div#moviesPage").hide();
                   $("div#soccerPage").hide();
               $("a#movies").click(function(){  
              
                   $("div#homePage").hide();
                   $("div#footballPage").hide();
                   $("div#celebPage").hide();
                   $("div#musicPage").hide();
                   $("div#schoolPage").hide();
                   $("div#soccerPage").hide();
                   $("div#basketballPage").hide();
                   $("div#moviesPage").show();
           
               });
     
               $("a#soccer").click(function(){         
                   $("div#homePage").hide();
                   $("div#basketballPage").hide();
                   $("div#footballPage").hide();
                   $("div#celebPage").hide();
                   $("div#musicPage").hide();
                   $("div#schoolPage").hide();
                   $("div#moviesPage").hide();
                   $("div#soccerPage").show();
                    });    
     
          $("a#basketball").click(function(){  
              
                   $("div#homePage").hide();
                   $("div#footballPage").hide();
                   $("div#celebPage").hide();
                   $("div#musicPage").hide();
                   $("div#schoolPage").hide();
                   $("div#moviesPage").hide();
                   $("div#soccerPage").hide();
                   $("div#basketballPage").show();
           
               });
     
         $("a#football").click(function(){  
              
                   $("div#homePage").hide();
                   $("div#celebPage").hide();
                   $("div#musicPage").hide();
                   $("div#schoolPage").hide();
                   $("div#moviesPage").hide();
                   $("div#soccerPage").hide();
                   $("div#basketballPage").hide();
                   $("div#footballPage").show();
           
               });
     
         $("a#celeb").click(function(){  
              
                   $("div#homePage").hide();
                   $("div#footballPage").hide();
                   $("div#musicPage").hide();
                   $("div#schoolPage").hide();
                   $("div#moviesPage").hide();
                   $("div#soccerPage").hide();
                   $("div#basketballPage").hide();
                   $("div#celebPage").show();
           
               });
     
         $("a#music").click(function(){  
              
                   $("div#homePage").hide();
                   $("div#footballPage").hide();
                   $("div#celebPage").hide();
                   $("div#schoolPage").hide();
                   $("div#moviesPage").hide();
                   $("div#soccerPage").hide();
                   $("div#basketballPage").hide();
                   $("div#musicPage").show();
           
               });
     
         $("a#school").click(function(){  
              
                   $("div#homePage").hide();
                   $("div#footballPage").hide();
                   $("div#celebPage").hide();
                   $("div#musicPage").hide();
                   $("div#moviesPage").hide();
                   $("div#soccerPage").hide();
                   $("div#basketballPage").hide();
                   $("div#schoolPage").show();
           
               });
     
         $("a#movies").click(function(){  
              
                   $("div#homePage").hide();
                   $("div#footballPage").hide();
                   $("div#celebPage").hide();
                   $("div#musicPage").hide();
                   $("div#schoolPage").hide();
                   $("div#soccerPage").hide();
                   $("div#basketballPage").hide();
                   $("div#moviesPage").show();
           
               });
     
      $("a#home").click(function(){  
              
                   $("div#homePage").show();
                   $("div#footballPage").hide();
                   $("div#celebPage").hide();
                   $("div#musicPage").hide();
                   $("div#schoolPage").hide();
                   $("div#soccerPage").hide();
                   $("div#basketballPage").hide();
                   $("div#moviesPage").hide();
           
               });
              
         $("button").click(function(e){
       
          let a1 = $("ronaldo").val();
                  
                  
                
                 axios.post('/answer',{
            "First_Name":firstName,
            "Last_Name":lastName,
            "Grade_Level":grade,
            "Student_Number":id         
                      })
    });
     
 });