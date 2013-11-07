/* 
 * To change this template, choose Tools | Templates
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
                
                
                
                
                
     