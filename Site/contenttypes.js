/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

// Set icons on each menu
function loadHA(){   
$('#artistloader').click(function(){
  $.ajax({
    //dataType: "json",
    type: "GET",
    url: "ha.html",
    data: { },
    async: true,
    success: function(data){
        $('#main').html(data).css({ opacity: 0 }).fadeTo('normal', 1);
        accordion();
        gridiconset();
        accordionRemove();
    }
        });
   });
}
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
        accordion();
        gridiconset();
        accordionRemove();
    }
        });
   });
}
    
function loadContest(){
$('#contestloader').click(function(){
    $.ajax({
    type: "GET",
    url: "contestview.html",
    data: { },
    async: true,
    success: function(data){
        $('#main').html(data).css({ opacity: 0 }).fadeTo('normal', 1);
    }
        });   
   var urlcall = "http://54.227.240.28:8080/BigNoizAdminGen/Contests";
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
          var contestimage = res[i].contestimageurl;
          var conteststart = res[i].conteststartdate;
          var contestend = res[i].contestenddate;
          var contestdesc = res[i].contestdescription;
          var contestdeschead = res[i].contestdescriptionheader;
          var contestdescimage = res[i].contestdescriptionimage;
          var contesttitle = res[i].title;
          var contesttag = res[i].tag;
          var contestdescimageurl = res[i].contestdescriptionimageurl;

          // left column
          output += '<h3><div class="col-lg-6"><span class="title">'+contesttitle+'</span></div><span class="gridicons"></span></h3>';
          output += '<div><div class="col-lg-3"><img class="img-thumbnail" src='+contestimage+'></div>';
          output += '<div class="view-list"><ul class="view"><li>Tag</li><li>Start Date</li><li>End Date</li><br><p>Contest Description</p><br><li>'+contestdeschead+'</li><li>'+contestdesc+'</li></ul></div>';
         
          // right column
          output += '<div class="view-list"><ul class="view view-right"><li>'+contesttag+'</li><li>'+conteststart+'</li><li>'+contestend+'</li><br><p>Contest Description Image</p><br><li><img class="img-thumbnail" src='+contestdescimage+'></li></ul></div></div>';

      }

    $('#accordion').html(output);    
    accordion();
    gridiconset(); 
    accordionRemove();

           }
           
        });
  
});
}
loadHA();
loadHE();
loadHV();
loadContest();
