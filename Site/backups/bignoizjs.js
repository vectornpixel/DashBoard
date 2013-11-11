/* 
Big Noiz Ajax Calls & JS
 */

$(document).ready(function(){

function header(){   
  $.ajax({
    type: "GET",
    url: "header.html",
    data: { },
    async: true,
    success: function(data){
        $('#header').html(data);
    }
        });

}

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

header();
showcase();
contentArea();

});
