/* 
Big Noiz Ajax Calls & JS
 */

$(document).ready(function(){
            // drop down forms
    $( '#cd-dropdown' ).dropdown({
    stack : false
    });
    $( '#type' ).dropdown({
    stack : false
    });
    $( '#sort' ).dropdown({
    stack : false
    });
           
/* 
Load external pages with Ajax
 */
//$( "#nav" ).load( "header.html" );

function header(){   

  $.ajax({
    //dataType: "json",
    type: "GET",
    url: "header.html",
    data: { },
    async: true,
    success: function(data){
        $('#nav').html(data);
    }
        });

}

function highlightedArtist(){   
$('.eventloader').click(function(){
  $.ajax({
    //dataType: "json",
    type: "GET",
    url: "ha.html",
    data: { },
    async: true,
    success: function(data){
        $('#maincontent').html(data);
    }
        });
   });
}

function showcasestream(){   

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


/* 
Loads Web Services
 */
 
  function showcase() {
  
   //alert('callling');
   var urlcall = "http://54.227.240.28:8080/BigNoizAdminGen/ShowcaseMappingService";

   $.ajax({ 
    type: "GET",
    dataType: "jsonp",
    url: urlcall,
    contentType: 'application/json',
    success: function (data, status) {
    var res = eval(data);
    var output = '';
    //alert('here');
    for(var i=0; i< res.length; i++)
      {
          var content = res[i].contenttype;
          var position = res[i].position;
          var description = res[i].description;
          //res[i].contenttype[2] = "Highlighted Artist";
          //var contenttype = new Array("Contest","Highlighted Event","Highlighted Artist","Highlighted Venue","Generic URL","RSS","Featured 5");
          output += '<li><span class="cont-title pull-left">'+description+'</span><span class="delete glyphicon glyphicon-remove showcase-icons"></span><span class="glyphicon glyphicon-pencil showcase-icons2 pull-right"></span></li>';
      }
        
/* 
Sort and Remove functions
 */

    // add output to list
    $('ol.sortable').html(output);

     //sortable 
    $('ol.sortable').sortable({axis: 'y'});
    $('.handles').sortable({
            handle: 'span'
    });
    $('.connected').sortable({
            connectWith: '.connected'
    });
    $('.exclude').sortable({
            items: ':not(.disabled)'
    });

     //remove sort buttons

       $('.delete').click(function(){
           $(this).parent().remove("ol.sortable li");
  
     
    });
    
        
/* 
Add new Content Types to Sort
 */
 
   // add new content type
   $('.add').click(function(){  
   // clones the content buttons
   var liitem = $(this).last().clone();
   $('ol.sortable').append(liitem);

   // refresh sort list
   $('ol.sortable').sortable('refresh');
   
   // after buttons are cloned and added, it removes the plus icon and add the edit / remove icons
   $('.sortable').find('li span').each(function(){
    if ($(this).hasClass('glyphicon glyphicon-plus showcase-icons')){
        $(this).removeClass("glyphicon glyphicon-plus showcase-icons").addClass('delete glyphicon glyphicon-remove showcase-icons').after('<span class="glyphicon glyphicon-pencil showcase-icons2 pull-right"></span>');  
         }
       });
    });
           }
           
        });
        
    }



/* 
All of my functions called
 */    
header();
showcasestream();
highlightedArtist();
showcase();
});
