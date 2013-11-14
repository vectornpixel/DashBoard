/* 
Big Noiz Ajax Calls & JS
Author     : Asim Craft
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

function highlightedartist(){ 

$('#artistloader').click(function(){
  $.ajax({
    //dataType: "json",
    type: "GET",
    url: "ha.html",
    data: { },
    async: true,
    success: function(data){
        $('#main').html(data).css({ opacity: 0 }).fadeTo('normal', 1);
    
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
    }
        });
/* 
Loads Web Services
 */
  // alert('yooo');
   var urlcall = "http://54.227.240.28:8080/BigNoizAdminGen/HighlightedArtists";

   $.ajax({ 
    type: "GET",
    dataType: "jsonp",
    url: urlcall,
    contentType: 'application/json',
    success: function (data, status) {
   // alert('boiii');
    var res = eval(data);
    var output = '';
    
    for(var i=0; i< res.length; i++)
      {
          var artistname = res[i].name;
          var artistimage = res[i].imageURL;
          var artiststartdate = res[i].startdate;
          var artistenddate = res[i].enddate;
          var artistevents = res[i].eventCount;
          var artisttag = res[i].tag;
          var artistsponsor = res[i].sponsorName;
          
          // left column
          output += '<h3><div class="col-lg-4"><span class="title">'+artistname+'</span></div><span class="gridicons"></span></h3>';
          output += '<div><div class="col-lg-3"><img class="img-thumbnail" src='+artistimage+'><span><p class="subs">'+artisttag+'</p></span></div>';
          output += '<div class="view-list"><ul class="view"><li>Start Date</li><li>End Date</li><li>Events</li><li>Sponsor</li></ul></div>';
         
          // right column
          output += '<div class="view-list"><ul class="view view-right"><li>'+artiststartdate+'</li><li>'+artistenddate+'</li><li>'+artistevents+'</li><li>'+artistsponsor+'</li></ul></div></div>';

      }
        
    // add output to list
    $('#accordion').html(output);
    
    // Button Icons
    var icons = {
    header: "glyphicon content-icons glyphicon-chevron-down pull-right",
    activeHeader: "glyphicon content-icons glyphicon-chevron-up pull-right "
    };
    
    // Collapse options
    $( "#accordion" ).accordion({
    header: "h3", 
    collapsible: true, 
    active: false, 
    heightStyle: "content",
    icons: icons
    });
    
    // Set icons on each menu
    var gridIcons2 = $('#accordion').find('.gridicons').append('<span class="glyphicon content-icons glyphicon-pencil pull-right"></span>');
    var gridIcons1 = $('#accordion').find('.gridicons').append('<span class="delete glyphicon content-icons glyphicon-remove  pull-right"></span>');

   //remove accordion 
   $('.delete').click(function() {
    var parent = $(this).closest('h3');
    var head = parent.next('div');
    parent.add(head).fadeOut('slow',function(){$(this).remove();});
});

           }
           
        });
   });
}

function showcasestream(){   

$('#showcaseloader').click(function(){
  $.ajax({
    type: "GET",
    url: "sc.html",
    data: { },
    async: true,
    success: function(data){
        $('#main').html(data).css({ opacity: 0 }).fadeTo('normal', 1);
     // drop down forms
        $( '#cd-dropdown' ).dropdown({
           stack : false
           });
    }
        });
/* 
Loads Web Services
 */
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
   });
   
//Display showcase on home
   $.ajax({
    type: "GET",
    url: "sc.html",
    data: { },
    async: true,
    success: function(data){
        
        $('#main').html(data);
        
    // drop down forms
    $( '#cd-dropdown' ).dropdown({
       stack : false
       });
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
All of the functions called
 */    
header();
showcasestream();
highlightedartist();
showcase();
});
