/* 
Big Noiz Ajax Calls & JS
 */

$(document).ready(function(){


function contentArea(){   
$('.eventloader').click(function(){
  $.ajax({
    //dataType: "json",
    type: "GET",
    url: "highlightedartist.html",
    data: { },
    async: true,
    success: function(data){
        $('#maincontent').html(data);
    }
        });
   });
}

function showcase(){   

$('.showcaseloader').click(function(){
  $.ajax({
    //dataType: "json",
    type: "GET",
    url: "showcase.html",
    data: { },
    async: true,
    success: function(data){
        $('#maincontent').html(data);
    }
        });
   });
   
   $.ajax({
    //dataType: "json",
    type: "GET",
    url: "showcase.html",
    data: { },
    async: true,
    success: function(data){
        $('#maincontent').html(data);
    }
        });
}


showcase();
contentArea();

});
