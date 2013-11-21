/* 
Big Noiz Ajax Calls & JS
Author     : Asim Craft
 */

/* Global functions */

// Set icons on each menu

 function gridiconset(){
         var gridIcons2 = $('#accordion').find('.gridicons').append('<span class="glyphicon content-icons glyphicon-pencil pull-right"></span>');
         var gridIcons1 = $('#accordion').find('.gridicons').append('<span class="delete glyphicon content-icons glyphicon-remove  pull-right"></span>');
    }
    
 function dropdowns(){
    $( '#cd-dropdown' ).dropdown({
       stack : false
       });
       $( '#type' ).dropdown({
       stack : false
       });
       $( '#sort' ).dropdown({
       stack : false
       });
        $( '#interval' ).dropdown({
           
       stack : false
       });
        $( '#sponsor' ).dropdown({
           
       stack : false
       });
        $( '#winners' ).dropdown({
       stack : false
       });
        $( '#tickets' ).dropdown({
       stack : false
       });

       
    } 
    
 function accordion(){
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
   } 

 function activeNav(){
    $('.navbar-inverse .navbar-nav li').click(function(){
    $('.navbar-inverse .navbar-nav li').each(function(){
        $(this).removeClass('active'); 
    });
        $(this).addClass('active');
    });
   } 
 
 function accordionRemove(){
       //remove sort buttons
   $('.delete').click(function() {
    var parent = $(this).closest('h3');
    var head = parent.next('div');
    parent.add(head).fadeOut('slow',function(){$(this).remove();});
    });

  }

  function highlightedEvents(){   
    $('#eventloader').click(function(){
        alert('working');
      $.ajax({
        type: "GET",
        url: "he.html",
        data: { },
        async: true,
        success: function(data){
            alert('shitman');
            $('#main').html(data);
        }
            });
       });
    }
    
  function sortContent(){
    //Declare sortable 
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

$(document).ready(function(){        
function header(){   
      $.ajax({
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
    type: "GET",
    url: "ha.html",
    data: { },
    async: true,
    success: function(data){
        $('#main').html(data).css({ opacity: 0 }).fadeTo('normal', 1);
        dropdowns();
    }
        });
/* 
Loads Web Services
 */
   var urlcall = "http://54.227.240.28:8080/BigNoizAdminGen/HighlightedArtists";

   $.ajax({ 
    type: "GET",
    dataType: "jsonp",
    url: urlcall,
    contentType: 'application/json',
    success: function (data, status) {
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

    $('#accordion').html(output);    
    accordion();
    gridiconset(); 
    accordionRemove();

           }
           
        });
   });
}


function showcasestream(){   
// Showcase web service call when clicked
$('#showcaseloader').click(function(){
  $.ajax({
    type: "GET",
    url: "sc.html",
    data: { },
    async: true,
    success: function(data){
        $('#main').html(data).css({ opacity: 0 }).fadeTo('normal', 1);
      dropdowns();
    }
        });
        
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
          output += '<li><span class="cont-title pull-left">'+description+'</span><span class="delete glyphicon glyphicon-remove showcase-icons"></span><span class="glyphicon glyphicon-pencil showcase-icons2 pull-right"></span></li>';
      }
        
    $('ol.sortable').html(output);
    sortContent();
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
        dropdowns();
    }
        });
}

// Showcase webservice
  function showcase() {
  
   var urlcall = "http://54.227.240.28:8080/BigNoizAdminGen/ShowcaseMappingService";

   $.ajax({ 
    type: "GET",
    dataType: "jsonp",
    url: urlcall,
    contentType: 'application/json',
    success: function (data, status) {
    var res = eval(data);
    var output = '';
    for(var i=0; i< res.length; i++)
      {
          var content = res[i].contenttype;
          var position = res[i].position;
          var description = res[i].description;
          output += '<li><span class="cont-title pull-left">'+description+'</span><span class="delete glyphicon glyphicon-remove showcase-icons"></span><span class="glyphicon glyphicon-pencil showcase-icons2 pull-right"></span></li>';
      }
    $('ol.sortable').html(output);
    sortContent();
           }
        });
    }

/* 
All of the functions called
 */
dropdowns();
header();
activeNav();
showcasestream();
highlightedartist();
highlightedEvents();
showcase();
});
