var sText = "oasis"
$(document).ready(function() {
    
    $("button").on("click", function() {    
    $(".search-form").on("submit", function() {
        
        //sText=$("#search-text").name;
        //console.log(sText);
        //alert("Form submited");
        
        $.ajax({
            type: "GET",
            url: "https://en.wikipedia.org/w/api.php?action=query&origin=*&generator=search&prop=extracts&gsrsearch="+sText+"&gsrlimit=10&exintro=1&explaintext=1&exchars=350&exlimit=10&format=json",
            //Alternative query using CORS proxy instead of jsonp
            //url: "https://cors.io/?https://en.wikipedia.org/w/api.php?action=query&origin=*&generator=search&prop=extracts&gsrsearch=Albert%20Einstein&gsrlimit=20&exintro=1&explaintext=1&exchars=350&exlimit=10",
            dataType: "jsonp", //using jsonp to enable sending data without cross domain issues
            success: function(result) {
                console.log(result);
               
                
                
            }
         });
         
        //event.preventDefault;
       return false;
    });

});

