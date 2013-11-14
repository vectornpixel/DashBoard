/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

// Set icons on each menu

function loadHE(){   
$('#eventloader').click(function(){
  $.ajax({
    //dataType: "json",
    type: "GET",
    url: "he.html",
    data: { },
    async: true,
    success: function(data){
        $('#main').html(data).css({ opacity: 0 }).fadeTo('normal', 1);
        dropdowns();
        accordion();
        gridiconset();
        accordionRemove();
    }
        });
   });
}
function loadHV(){   
$('#venueloader').click(function(){
  $.ajax({
    //dataType: "json",
    type: "GET",
    url: "hv.html",
    data: { },
    async: true,
    success: function(data){
        $('#main').html(data).css({ opacity: 0 }).fadeTo('normal', 1);
        dropdowns();
        accordion();
        gridiconset();
        accordionRemove();
    }
        });
   });
}

loadHE();
loadHV();