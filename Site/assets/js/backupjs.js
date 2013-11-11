/* 
 * Backup javascript incase code is lost
 * and open the template in the editor.
 */
    // Sortable Showcase Javascript
    
   $(document).ready(function(){
     // drop down forms
    $( '#cd-dropdown' ).dropdown({
    stack : false
    });

     //sortable 
    $('.sortable').sortable();

    $('.handles').sortable({
            handle: 'span'
    });
    $('.connected').sortable({
            connectWith: '.connected'
    });
    $('.exclude').sortable({
            items: ':not(.disabled)'
    });

    // Display Numbers
   
  
   
   
   
   // Button Icons
   var icon1 = $('.sortable').find('li').append('<span class="delete glyphicon glyphicon-remove showcase-icons"></span>');
   var icon2 = $('.sortable').find('li').append('<span class="glyphicon glyphicon-pencil showcase-icons2 pull-right"></span>');
   

   // add new content type
   $('.add').click(function(){ 
       
   // clones the content buttons
   var liitem = $(this).last().clone();
   $('ul.sortable').append(liitem);

   // refresh sort list
   $('.sortable').sortable('refresh');

   // after buttons are cloned and added, it removes the add icons and add the edit icons
   $('.sortable').find('li span').each(function(){
    if ($(this).hasClass('glyphicon glyphicon-plus showcase-icons')){
        $(this).removeClass("glyphicon glyphicon-plus showcase-icons").addClass('delete glyphicon glyphicon-remove showcase-icons').after('<span class="glyphicon glyphicon-pencil showcase-icons2 pull-right"></span>');  
         }
       });
    });
   
   
   //remove sort buttons
   $('.delete').click(function(){
       $(this).parent().remove(".btn-sort");
   }); 

   
   
 });
                
                
                
                
                
         // old script for success function
    /*var res = eval(data);
	        var output = '';
                for(var i=0; i< res.length; i++)

	        	{
	        		var contenttype = new Array("Contest","Highlighted Event","Highlighted Artist","Highlighted Venue","Generic URL","RSS","Featured 5");
	        		//var position = res[i].position;
	        		output += '<div class="row "><div class="container"><ol class="sortable grid">';
	        		output += contenttype + '<li><span class="cont-title pull-left contenttype"></span></li>';
	        		output += '</ol></div></div>';
	        	}

	        	$('.container').html(output);*/
    <script type="text/javascript" >

    // Sortable Showcase Javascript
    
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

  // Web service call
  var baseURL = "http://54.227.240.28:8080/BigNoizAdminGen/ShowcaseMappingService?callback=jquery123";

    $(document).ready(function(){
        function showcase() {
        alert('callling');
        var urlcall = "http://54.227.240.28:8080/BigNoizAdminGen/ShowcaseMappingService";
        
       $.ajax({ 
            type: "GET",
            dataType: "jsonp",
            url: urlcall,
            contentType: 'application/json',
               success: function (data, status) {
                 var res = eval(data);
                 var output = '';
                 alert('here');
                 for(var i=0; i< res.length; i++)

	        	{
                            var content = res[i].contenttype;
                            var position = res[i].position;
                            //res[i].contenttype[2] = "Highlighted Artist";
                            //var contenttype = new Array("Contest","Highlighted Event","Highlighted Artist","Highlighted Venue","Generic URL","RSS","Featured 5");
	        		output += '<li><span class="cont-title pull-left">'+content+'</span><span class="delete glyphicon glyphicon-remove showcase-icons"></span><span class="glyphicon glyphicon-pencil showcase-icons2 pull-right"></span></li>';
	        	
	        	}
                 $('ol.sortable').html(output);
               }
        });
       }

    showcase();
    });
    
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

   // Button Icons
   var icon1 = $('.sortable').find('li').append('<span class="delete glyphicon glyphicon-remove showcase-icons"></span>');
   var icon2 = $('.sortable').find('li').append('<span class="glyphicon glyphicon-pencil showcase-icons2 pull-right"></span>');
   

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
   //remove sort buttons
   $('.delete').click(function(){
       $(this).parent().remove("ol.sortable li");
   });
   
 });
                
 
 /*
 * 
<li><span class="cont-title pull-left">Highlighted Artist</span></li>
<li><span class="cont-title pull-left">Highlighted Event</span></li>
<li><span class="cont-title pull-left">Highlighted Venue</span></li>
<li><span class="cont-title pull-left">RSS Feed</span></li>
<li><span class="cont-title pull-left">General URLs</span></li>
<li><span class="cont-title pull-left">Contest</span></li>
  */